<template>
  <div>
    <div class="container my-10 mx-auto">
      <ConferenceData :id="id" />
      <HR :id="id"/>
      <Research :id="id" :type="'Conference'"/>
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
                :placeholder="formData.numapprove"
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
                :placeholder="formData.totalapprove"
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
                label="จำนวนเงินที่ขออนุมัติจัดสรรในครั้งนี้  เป็นจำนวนเงิน"
                customInput="max-w-max text-center"
                disabled="true"
                :placeholder="formData.canWithdrawn.money"
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
          {{ formData.canWithdrawn }}
          <div class="flex justify-end">
            <button
              @click="showCreditLimit = true"
              class="btn text-black btn-warning mr-5">
              คำนวณ
            </button>
          </div>
        
          <div class="flex justify-end mt-5">
          <div v-show="showCreditLimit" class="flex flex-col items-end mt-5">
            <p class="text-red-500 mr-5">
              วงเงินที่สามารถเบิกได้ {{ formData.canWithdrawn.money }} บาท
            </p>
            <p class="text-red-500 mr-5">
              {{ formData.canWithdrawn.message }}
            </p>
            <p class="text-red-500 mr-5">
              ค่าเบี้ยเลี้ยงเดินทางวันละไม่เกิน 3,500 บาท
            </p>
            <p class="text-red-500 mr-5">
              ค่าที่พักวันละไม่เกิน 8,000 บาท
            </p>
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
import api from "@/setting/api";

import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import TextInputLabelLeft from "@/components/Input/TextInputLabelLeft.vue";
import ConferenceData from "@/components/form/DataforOffice/Conference.vue";
import HR from "@/components/form/DataforOffice/HR.vue";
import Research from "@/components/form/DataforOffice/Research.vue";

const formData = reactive({
  // ความเห้นเจ้าหน้าที่
  offic:[],
  year: "",
  totalAll: 0,
  numapprove: 0,
  totalapprove: 0,
  creditLimit: 0,
  approval: 0,
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

const caltotalFaculty = computed(() =>{
  formData.creditLimit = parseFloat(formData.totalAll) - parseFloat(formData.totalapprove)
  return formData.creditLimit
});

const caltotalFacultyNow = computed(() =>{
  formData.totalcreditLimit = parseFloat(formData.creditLimit) - parseFloat(formData.approval)
  return formData.totalcreditLimit
});
const showCreditLimit = ref(false);
const isLoading = ref(true);
// Access route parameters
const router = useRouter();
const route = useRoute();
const id = route.params.id;
console.log("params.id", id);

const fetchOfficerData = async () => {
  try {
    const responseoffic = await api.get(
      `/opinionConf/${id}`
    );
    formData.offic = responseoffic.data;
    // console.log("offic", JSON.stringify(formData.offic));
    const responsebudget = await api.get(`/budget/conference/${id}`);
      console.log("responsebudget.data", responsebudget.data);
      // formData.budget = responsebudget.data;
    const responseForm = await api.get(
      `/allForms`
    )
    // console.log("form 123", JSON.stringify(responseForm));
    for(let i = 0; i < responseForm.length; i++){
      if (responseForm.data.form_type == 'Conference'){
        formData.numapprove++
        formData.totalapprove += responsebudget.data.total_remaining_credit_limit
      }
    }
    console.log("numapprove", formData.numapprove)
    console.log("totalapprove", formData.totalapprove)

    const responseFormConfer = await api.get(`/formConfer/${id}`);
    // console.log("responseFormConfer 123", responseFormConfer);
    formData.form_id = responseFormConfer.data.form_id;

    const responseCalConfer = await api.get(`/confer/calc/${id}`);
    // console.log("responseCalConfer", responseCalConfer.data);
    formData.canWithdrawn = responseCalConfer.data;
    // console.log("responseCalConfer formData.canWithdrawn", formData.canWithdrawn);

  } catch (error) {
    console.error("Error fetching Officer data:", error);
  } finally {
    isLoading.value = false;
  }
};

const OfficerConfer = async () => {
  try {
    const dataForBackend = {
      form_id: formData.form_id,
      budget_year: formData.year,
      Conference_amount: formData.totalAll,
      num_expenses_approved: formData.numapprove,
      total_amount_approved: formData.totalapprove,
      remaining_credit_limit: formData.creditLimit,
      amount_approval: formData.approval,
      total_remaining_credit_limit: formData.totalcreditLimit,
      doc_submit_date: formData.docSubmitDate,
      form_status: formData.formStatus,
      form_money: formData.canWithdrawn,
    };
    console.log("post office confer: ", JSON.stringify(dataForBackend));

    const response = await api.post(
      `/budget`,
      dataForBackend,
      { headers: { "Content-Type": "application/json" } }
    );
    alert("Have new OfficerConfer!");
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
