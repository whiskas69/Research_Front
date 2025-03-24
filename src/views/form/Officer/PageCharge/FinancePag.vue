<template>
  <div>
    <div class="container my-10 mx-auto">
      
      <PageChageData :id="id" />
      <Research :id="id" :type="'Page_Charge'"/>
      
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
                label="จำนวนเงินที่ขออนุมัติค่า Page Charge ในครั้งนี้ เป็นจำนวนเงิน"
                customInput="max-w-max text-center"
                disabled="true"
                :placeholder="formData.canWithdrawn"
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

          <!-- ควรที่จะแสดงมั้ย เพราะแสดงตรงช่อง จำนวนเงินที่ขออนุมัติค่า Page Charge ในครั้งนี้  -->
          <!-- <div
            v-show="showCreditLimit"
            class="creditLimit flex justify-end mt-5"
          >
            <p class="text-red-500 mr-5">
              วงเงินที่สามารถเบิกได้ {{ formData.canWithdrawn }} บาท
            </p>
          </div> -->

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
import axios from "axios";
import { useRoute, useRouter } from "vue-router";
import api from "@/setting/api";

import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import TextInputLabelLeft from "@/components/Input/TextInputLabelLeft.vue";
import PageChageData from "@/components/form/DataforOffice/PageChage.vue";
import Research from "@/components/form/DataforOffice/Research.vue";

// จัดการข้อมูลหลัก
const formData = reactive({
  offic: [],
  // ความเห้นเจ้าหน้าที่
  year: "",
  totalAll: 0,
  numapprove: 0,
  totalapprove: 0,
  creditLimit: 0,
  // approval: 0,
  totalcreditLimit: 0,
  canWithdrawn: 0,
  //วันที่ส่งเอกสาร
  docSubmitDate: "",
  typeFile: "Page_Charge",
  //status
  form_id: 0,
  formStatus: "รองคณบดี",
});

//วันที่ส่งเอกสาร
const datetime = new Date();
// Extract year, month, and day
const year = datetime.getFullYear();
const month = String(datetime.getMonth() + 1).padStart(2, "0"); // Months are 0-based
const day = String(datetime.getDate()).padStart(2, "0");
// Combine in YYYY-MM-DD format
formData.docSubmitDate = `${year}-${month}-${day}`;
console.log(formData.docSubmitDate);

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
    parseFloat(formData.totalAll) - parseFloat(formData.totalapprove);
  return formData.creditLimit;
});

const caltotalFacultyNow = computed(() => {
  formData.totalcreditLimit =
    parseFloat(formData.creditLimit) - parseFloat(formData.approval);
  return formData.totalcreditLimit;
});

const showCreditLimit = ref(false);
//isLoading เพื่อแสดงสถานะว่ากำลังโหลดข้อมูล
const router = useRouter();
const isLoading = ref(true);
// Access route parameters
const route = useRoute();
const id = route.params.id;
console.log("params.id", id);

// ตัวแปรสำหรับเก็บข้อมูลจาก backend
const fetchProfessorData = async () => {
  try {
    const responseoffic = await api.get(`/opinionPC/${id}`);
    console.log("offic123", responseoffic);
    formData.offic = responseoffic.data;

    const responseForm = await api.get(`/allForms`);
    console.log("form 123", JSON.stringify(responseForm));
    for (let i = 0; i < responseForm.length; i++) {
      if (
        responseForm.data.form_status == "อนุมัติ" &&
        responseForm.data.form_type == "Page_Charge"
      ) {
        formData.numapprove++;
        formData.totalapprove += formData.totalapprove;
      }
    }
    console.log("numapprove", formData.numapprove);
    console.log("totalapprove", formData.totalapprove);

    const responseFormPC = await api.get(`/formPC/${id}`);
    console.log("responseFormPC 123", responseFormPC);
    formData.form_id = responseFormPC.data.form_id;
  } catch (error) {
    console.error("Error fetching professor data:", error);
  } finally {
    isLoading.value = false;
  }
  console.log("Fetching professor data...");
};

const cal = async () => {
  try {
    const responseCalPC = await api.get(`/page_charge/calc/${id}`);
    console.log("responseCalPC", responseCalPC);
    formData.canWithdrawn = responseCalPC.data.withdrawn;
    return formData.canWithdrawn;
  } catch (error) {
    console.error("Error fetching professor data:", error);
  } finally {
    isLoading.value = false;
  }
  console.log("Fetching professor data...");
};

const OfficerPC = async () => {
  try {
    const dataForBackend = {
      form_id: formData.form_id,
      budget_year: formData.year,
      Page_Charge_amount: formData.totalAll,
      num_expenses_approved: formData.numapprove,
      total_amount_approved: formData.totalapprove,
      remaining_credit_limit: formData.creditLimit,
      amount_approval: formData.canWithdrawn,
      total_remaining_credit_limit: formData.totalcreditLimit,
      doc_submit_date: formData.docSubmitDate,
      form_status: formData.formStatus
    };
    console.log("post office confer: ", JSON.stringify(dataForBackend));

    const response = await api.post(`/budget`, dataForBackend, {
      headers: { "Content-Type": "application/json" },
    });
    alert("Have new OfficerPC !");
    router.push("/officer");
    console.log("res: ", response);
    console.log("allpostOfficerConfer: ", message.value);
    console.log("postOfficerConfer: ", response.data);
  } catch (error) {
    console.error(error);
    message.value = "Error adding page_charge budget. Please try again.";
  }
};

// ดึงข้อมูลเมื่อ component ถูกโหลด
onMounted(async () => {
  await fetchProfessorData();
  cal();
});
</script>
