<template>
  <div>
    <div class="container my-10 mx-auto">
      <ConferenceData :id="id" />
      <HR :id="id" />
      <Research :id="id" :type="'Conference'" />
      <p class="text-xl font-bold my-5">ตรวจสอบข้อมูลและหลักฐาน</p>
      <Mainbox>
        <SectionWrapper>
          <p>ตรวจสอบเงินงบประมาณประจำปีที่จัดสรรในการเผยแพร่ผลงานวิชาการ</p>
          <TextInputLabelLeft
            label="ปีงบประมาณ พ.ศ."
            customInput="max-w-max text-center"
            v-model="formData.year"
            @input="handleInput('year', $event.target.value)"
          />
          <div class="flex justify-end">
            <div class="flex flex-row justify-between">
              <TextInputLabelLeft
                label="วงเงินที่คณะจัดสรรไว้ จำนวนเงินทั้งสิ้น"
                customInput="max-w-max text-center"
                v-model="formData.totalAll"
                @input="handleInput('totalAll', $event.target.value)"
              />
              <p class="flex items-center w-12">บาท</p>
            </div>
          </div>
          <div class="flex justify-end">
            <div class="flex flex-row justify-between">
              <TextInputLabelLeft
                label="โดยคณะได้อนุมัติค่าใช้จ่ายในการเสนอผลงานวิชาการไปแล้ว จำนวน"
                customInput="max-w-max text-center"
                disabled="true"
                :placeholder="
                  parseFloat(formData.numapproved).toLocaleString('en-US', {
                    minimumFractionDigits: 0,
                  })
                "
              />
              <p class="flex items-center w-12">รายการ</p>
            </div>
          </div>
          <div class="flex justify-end">
            <div class="flex flex-row justify-between">
              <TextInputLabelLeft
                label="รวมเป็นเงิน"
                customInput="max-w-max
              text-center"
                disabled="true"
                :placeholder="
                  parseFloat(formData.totalapproved).toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                  })
                "
              />
              <p class="flex items-center w-12">บาท</p>
            </div>
          </div>
          <div class="flex justify-end">
            <div class="flex flex-row justify-between">
              <TextInputLabelLeft
                label="วงเงินที่คณะจัดสรรไว้ คงเหลือ"
                customInput="max-w-max text-center"
                disabled="true"
                :placeholder="caltotalFaculty"
              />
              <p class="flex items-center w-12">บาท</p>
            </div>
          </div>
          <div class="flex justify-end">
            <div class="flex flex-row justify-between">
              <TextInputLabelLeft
                label="จำนวนเงินที่ขออนุมัติจัดสรรในครั้งนี้ เป็นจำนวนเงิน"
                customInput="max-w-max text-center"
                disabled="true"
                :placeholder="
                  parseFloat(moneyRequested).toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                  })
                "
              />
              <p class="flex items-center w-12">บาท</p>
            </div>
          </div>
          <div class="flex justify-end">
            <div class="flex flex-row justify-between">
              <TextInputLabelLeft
                label="วงเงินที่คณะจัดสรรไว้ คงเหลือทั้งสิ้น"
                customInput="max-w-max text-center"
                disabled="true"
                :placeholder="caltotalFacultyNow"
              />
              <p class="flex items-center w-12">บาท</p>
            </div>
          </div>
          <div class="flex justify-end">
            <button
              @click="showCreditLimit = true"
              class="btn text-black btn-warning mr-5"
            >
              คำนวณ
            </button>
          </div>

          <div class="text-red-500 flex justify-end mt-5 mr-5">
            <div v-show="showCreditLimit" class="flex flex-col items-end">
              <p v-if="formData.canWithdrawn.inOutC == 'Out_Country'">
                วงเงินที่สามารถเบิกได้ {{ expenses.withdrawn }} บาท
              </p>
              <div
                v-if="formData.canWithdrawn.inOutC == 'In_Country'"
                class="flex flex-col items-end"
              >
                <p>วงเงินที่สามารถเบิกได้ 8,000 บาท</p>
                <p>{{ formData.canWithdrawn.inthai }}</p>
              </div>
              <p>
                {{ formData.canWithdrawn.message }} ค่าลงทะเบียน
                {{ expenses.regits }} บาท
              </p>
              <div
                v-if="formData.canWithdrawn.inOutC == 'Out_Country'"
                class="flex flex-col items-end"
              >
                <p>ค่าเบี้ยเลี้ยงเดินทางไม่เกิน {{ expenses.allowance }} บาท</p>
                <p>ค่าที่พักไม่เกิน {{ expenses.accom }} บาท</p>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </Mainbox>

      <div class="flex justify-end">
        <button @click="OfficerConfer" class="btn btn-success text-white">
          บันทึกข้อมูล
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useUserStore } from "@/store/userStore";
import api from "@/setting/api";

import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import TextInputLabelLeft from "@/components/Input/TextInputLabelLeft.vue";
import ConferenceData from "@/components/form/DataforOffice/Conference.vue";
import HR from "@/components/form/DataforOffice/HR.vue";
import Research from "@/components/form/DataforOffice/Research.vue";

const formData = reactive({
  // ความเห้นเจ้าหน้าที่
  conference: [],
  offic: [],
  year: "",
  totalAll: 0,
  numapproved: 0,
  totalapproved: 0,
  creditLimit: 0,
  totalcreditLimit: 0,
  canWithdrawn: "",
  //วันที่ส่งเอกสาร
  docSubmitDate: "",
  //satatus
  form_id: 0,
  formStatus: "รองคณบดี",
});
console.log("conference", formData);
//วันที่ส่งเอกสาร
const datetime = new Date();
// Extract year, month, and day
const year = datetime.getFullYear();
const month = String(datetime.getMonth() + 1).padStart(2, "0"); // Months are 0-based
const day = String(datetime.getDate()).padStart(2, "0");
// Combine in YYYY-MM-DD format
formData.docSubmitDate = `${year}-${month}-${day}`;

const handleInput = (key, value) => {
  formData[key] = value;
  console.log("0000000000000000000000000000000");
  // console.log(JSON.stringify(formData));
  console.log(`${key} updated to: ${value}`);
  // console.log("key: ", key);
  // console.log("value: ", value);
  console.log("--------------------------------");
};

const caltotalFaculty = computed(() => {
  formData.creditLimit =
    parseFloat(formData.totalAll) - parseFloat(formData.totalapproved);
  return formData.creditLimit.toLocaleString("en-US", {
    minimumFractionDigits: 2,
  });
});

const caltotalFacultyNow = computed(() => {
  console.log("moneyRequested", moneyRequested.value);
  formData.totalcreditLimit =
    parseFloat(formData.creditLimit) - parseFloat(moneyRequested.value);
  return formData.totalcreditLimit.toLocaleString("en-US", {
    minimumFractionDigits: 2,
  });
});
const moneyRequested = computed(() => {
  return (
    parseFloat(formData.canWithdrawn.money) +
    parseFloat(formData.conference.total_amount)
  );
});

const expenses = computed(() => {
  const withdrawn = parseFloat(formData.canWithdrawn.money).toLocaleString(
    "en-US",
    {
      minimumFractionDigits: 2,
    }
  );
  const regits = parseFloat(formData.conference.total_amount).toLocaleString(
    "en-US",
    {
      minimumFractionDigits: 2,
    }
  );
  const allowance = parseFloat(
    3500 * formData.conference.num_travel_days
  ).toLocaleString("en-US", {
    minimumFractionDigits: 2,
  });
  const accom = parseFloat(
    8000 * formData.conference.num_days_room
  ).toLocaleString("en-US", {
    minimumFractionDigits: 2,
  });

  return { withdrawn, regits, allowance, accom };
});
const showCreditLimit = ref(false);
const isLoading = ref(true);
// Access route parameters
const router = useRouter();
const route = useRoute();
const id = route.params.id;
console.log("params.id", id);
const userStore = useUserStore();
const user = computed(() => userStore.user);
console.log("user id hr:", user);

const fetchOfficerData = async () => {
  try {
    const responseoffic = await api.get(`/opinionConf/${id}`);
    formData.offic = responseoffic.data;
    const responseBudget = await api.get(`/budgetsConfer`);
    console.log("budgetsConfer:", responseBudget.data);
    formData.numapproved = responseBudget.data.numapproved;
    formData.totalapproved =
      responseBudget.data.totalapproved == null
        ? 0
        : responseBudget.data.totalapproved;

    console.log("numapprove", formData.numapproved);
    console.log("totalapprove", formData.totalapproved);

    const responseFormConfer = await api.get(`/formConfer/${id}`);
    console.log("responseFormConfer 123", responseFormConfer.data);
    formData.form_id = responseFormConfer.data.form_id;

    const responseCalConfer = await api.get(`/confer/calc/${id}`);
    formData.canWithdrawn = responseCalConfer.data;
    console.log("canWithdrawn", formData.canWithdrawn);

    const responseConfer = await api.get(`/conference/${id}`);
    console.log("conference123", responseConfer);
    formData.conference = responseConfer.data;
  } catch (error) {
    console.error("Error fetching Officer data:", error);
  } finally {
    isLoading.value = false;
  }
};

const OfficerConfer = async () => {
  try {
    const dataForBackend = {
      user_id: user.value?.user_id,
      form_id: formData.form_id,
      budget_year: formData.year,
      Conference_amount: formData.totalAll,
      num_expenses_approved: formData.numapproved,
      total_amount_approved: formData.totalapproved,
      remaining_credit_limit: formData.creditLimit,
      amount_approval: moneyRequested.value,
      total_remaining_credit_limit: formData.totalcreditLimit,
      doc_submit_date: formData.docSubmitDate,
      form_status: formData.formStatus,
    };
    console.log("post office confer: ", JSON.stringify(dataForBackend));

    const response = await api.post(`/budget`, dataForBackend, {
      headers: { "Content-Type": "application/json" },
    });
    alert("บันทึกข้อมูลเรียบร้อยแล้ว");
    router.push("/officer");
    console.log("res: ", response);
    console.log("allpostOfficerConfer: ", message.value);
    console.log("postOfficerConfer: ", response.data);
  } catch (error) {
    console.error(error);
    message.value = "Error adding page_charge. Please try again.";
  }
};

onMounted(() => {
  fetchOfficerData();
});
</script>
