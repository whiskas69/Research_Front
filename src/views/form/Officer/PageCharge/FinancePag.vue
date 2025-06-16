<template>
  <div>
    <div class="container my-10 mx-auto">
      <PageChageData :id="id" />
      <Research :id="id" :type="'Page_Charge'" />

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
                :placeholder="parseFloat(formData.numapproved).toLocaleString('en-US', {
                  minimumFractionDigits: 0,
                })"
              />
              <p class="flex items-center w-12">รายการ</p>
            </div>
          </div>
          <div class="flex justify-end">
            <div class="flex flex-row justify-between">
              <TextInputLabelLeft
                label="รวมเป็นเงิน"
                customInput="max-w-max text-center"
                disabled="true"
                :placeholder="parseFloat(formData.totalapproved).toLocaleString('en-US', {
                  minimumFractionDigits: 0,
                })"
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
                :placeholder="parseFloat(caltotalFaculty).toLocaleString('en-US', {
                  minimumFractionDigits: 0,
                })"
              />
              <p class="flex items-center w-12">บาท</p>
            </div>
          </div>
          <div class="flex justify-end">
            <div class="flex flex-row justify-between">
              <TextInputLabelLeft
                label="จำนวนเงินที่ขออนุมัติค่า Page Charge ในครั้งนี้ เป็นจำนวนเงิน"
                customInput="max-w-max text-center"
                disabled="true"
                :placeholder="parseFloat(formData.canWithdrawn).toLocaleString('en-US', {
                  minimumFractionDigits: 0,
                })"
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
                :placeholder="parseFloat(caltotalFacultyNow).toLocaleString('en-US', {
                  minimumFractionDigits: 0,
                })"
              />
              <p class="flex items-center w-12">บาท</p>
            </div>
          </div>
          <span v-if="v$.year.$error" class="text-base font-bold text-red-500 text-left">
            {{ v$.year.$errors[0].$message }}
          </span>
          <span v-if="v$.totalAll.$error" class="text-base font-bold text-red-500 text-left">
            {{ v$.totalAll.$errors[0].$message }}
          </span>
        </SectionWrapper>
      </Mainbox>

      <div class="flex justify-end">
        <button @click="OfficerPC" class="btn btn-success text-white">
          บันทึกข้อมูล
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  helpers,
  maxValue,
  minValue,
  numeric,
  decimal,
} from "@vuelidate/validators";
import { DateTime } from "luxon";

import { useUserStore } from "@/store/userStore";
import api from "@/setting/api";

import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import TextInputLabelLeft from "@/components/Input/TextInputLabelLeft.vue";
import PageChageData from "@/components/form/EditForm/EditPageChage.vue";
import Research from "@/components/form/DataforOffice/Research.vue";

const formData = reactive({
  offic: [],
  year: "",
  totalAll: 0, // วงเงินที่คณะจัดสรรไว้ จำนวนเงินทั้งสิ้น pc
  numapproved: 0, //อนุมัติไปแล้ว จำนวน
  totalapproved: 0, //อนุมัติไปแล้ว รวมเป็นเงิน
  creditLimit: 0, // คงเหลือ totalAll - totalapprove
  canWithdrawn: 0, // rule base Page Charge ในครั้งนี้
  totalcreditLimit: 0, //คงเหลือทั้งสิ้น
  docSubmitDate: DateTime.now().toISODate(),
  typeFile: "Page_Charge",
  //status
  form_id: 0, // เพื่อเก็บไอดีในตารางการเงิน
  formStatus: "associate",
});

const handleInput = (key, value) => {
  formData[key] = value;
};

const caltotalFaculty = computed(() => {
  formData.creditLimit =
    parseFloat(formData.totalAll) - parseFloat(formData.totalapproved);
  console.log("creditLimit", formData.creditLimit);
  return formData.creditLimit;
});

const caltotalFacultyNow = computed(() => {
  formData.totalcreditLimit =
    parseFloat(formData.creditLimit) - parseFloat(formData.canWithdrawn);
  console.log("totalcreditLimit", formData.totalcreditLimit);
  return formData.totalcreditLimit;
});

//isLoading เพื่อแสดงสถานะว่ากำลังโหลดข้อมูล
const router = useRouter();
const isLoading = ref(true);
// Access route parameters
const route = useRoute();
const id = route.params.id;
console.log("params.id in fain", id);
const userStore = useUserStore();
const user = computed(() => userStore.user);
console.log("user id hr:", user);

// ตัวแปรสำหรับเก็บข้อมูลจาก backend
const fetchProfessorData = async () => {
  try {
    const responseoffic = await api.get(`/opinionPC/${id}`);
    console.log("offic123", responseoffic.data);
    formData.offic = responseoffic.data;

    const responseBudget = await api.get(`/budgetsPC`);
    console.log("budgetsPC:", responseBudget.data);
    formData.numapproved = responseBudget.data.numapproved;
    formData.totalapproved =
      responseBudget.data.totalapproved == null
        ? 0
        : responseBudget.data.totalapproved;

    const responseFormPC = await api.get(`/formPC/${id}`);
    formData.form_id = responseFormPC.data.form_id;
  } catch (error) {
    console.log("Error fetching professor data:", error);
  } finally {
    isLoading.value = false;
  }
};

const cal = async () => {
  try {
    const responseCalPC = await api.get(`/page_charge/calc/${id}`);
    formData.canWithdrawn = responseCalPC.data.withdrawn;
    return formData.canWithdrawn;
  } catch (error) {
    console.log("Error fetching professor data:", error);
  } finally {
    isLoading.value = false;
  }
  console.log("Fetching professor data...");
};

const currentYear = computed(() => DateTime.now().year + 543);

const rules = computed(() => ({
  year: {
    required: helpers.withMessage(
      "* กรุณากรอกข้อมูลปีงบประมาณเป็นพ.ศ. *",
      required
    ),
    minValue: helpers.withMessage(
      `* ปีงบประมาณต้องไม่ต่ำกว่า ${currentYear.value - 1} *`,
      minValue(currentYear.value - 1)
    ),
    maxValue: helpers.withMessage(
      `* ปีงบประมาณต้องไม่เกิน ${currentYear.value} *`,
      maxValue(currentYear.value)
    ),
  },
  totalAll: {
    required: helpers.withMessage("* กรุณากรอกจำนวนเงิน *", required),
    numeric: helpers.withMessage("* กรุณากรอกตัวเลข *", numeric),
    decimal: helpers.withMessage("* กรุณากรอกตัวเลข *", decimal),
    minValue: helpers.withMessage("* ไม่ต่ำกว่า 1 *", minValue(1)),
  },
}));

const v$ = useVuelidate(rules, formData);

const OfficerPC = async () => {
  const result = await v$.value.$validate();

  if (result) {
    if (confirm("ยืนยันข้อมูลถูกต้อง") == false) {
      return false;
    }

    try {
      const dataForBackend = {
        user_id: user.value?.user_id,
        form_id: formData.form_id,
        budget_year: formData.year,
        Page_Charge_amount: formData.totalAll,
        num_expenses_approved: formData.numapproved,
        total_amount_approved: formData.totalapproved,
        remaining_credit_limit: formData.creditLimit,
        amount_approval: formData.canWithdrawn,
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
      console.log("postOfficerConfer: ", response.data);
    } catch (error) {
      console.log("Error saving code : ", error);
      alert("ไม่สามารถส่งข้อมูล โปรดลองอีกครั้งในภายหลัง");
    }
  } else {
    alert("โปรดกรอกข้อมูลให้ครบถ้วน และถูกต้อง");

    console.log("Validation failed:", v$.value.$errors);
  }
};

// ดึงข้อมูลเมื่อ component ถูกโหลด
onMounted(async () => {
  await fetchProfessorData();
  cal();
});
</script>
