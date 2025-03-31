<template>
  <div>
    <div class="container my-10 mx-auto">
      <PageChageData :id="id"/>
      <Research :id="id" :type="'Page_Charge'"/>
      <FinanceAll :id="id" :type="'Page_Charge'"/>
      
      <!-- รองคณบดีฝ่ายงานวิจัย -->
      <Mainbox>
        <SectionWrapper>
          <p class="text-lg font-bold">รองคณบดีฝ่ายงานวิจัย</p>

          <div>
            <TextArea
              label="ความคิดเห็น"
              @input="handleInput('description', $event.target.value)"
            />
          </div>
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
import { ref, reactive, onMounted, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useUserStore } from "@/store/userStore";
import api from "@/setting/api";

import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import TextArea from "@/components/Input/TextArea.vue";
import PageChageData from "@/components/form/DataforOffice/PageChage.vue";
import Research from "@/components/form/DataforOffice/Research.vue";
import FinanceAll from "@/components/form/DataforOffice/FinanceAll.vue";
// จัดการข้อมูลหลัก
const formData = reactive({
  offic: [],
  //วันที่ส่งเอกสาร
  docSubmitDate: "",
  //satatus
  statusForm: "คณบดี",
  // ความเห้นเจ้าหน้าที่
  description: "",
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

//isLoading เพื่อแสดงสถานะว่ากำลังโหลดข้อมูล
const isLoading = ref(true);
// Access route parameters
const router = useRouter();
const route = useRoute();
const id = route.params.id;
console.log("params.id", id);
const userStore = useUserStore();
const user = computed(() => userStore.user);
console.log("user id hr:", user)

// ตัวแปรสำหรับเก็บข้อมูลจาก backend
const fetchProfessorData = async () => {
  try {
    
    const responseoffic = await api.get(`/opinionPC/${id}`);
    console.log("offic123", responseoffic);
    formData.offic = responseoffic.data;

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
      research_id: formData.offic.research_id,
      pageC_id: id,
      //research
      p_research_admin: formData.offic.p_research_admin,
      p_reason: formData.offic.p_reason,
      p_date_accepted_approve: (() => {
        const researchDate = new Date(formData.offic.p_date_accepted_approve);
        researchDate.setDate(researchDate.getDate() + 1);
        return researchDate.toISOString().slice(0, 19).replace("T", " ");
      })(),
      research_doc_submit_date: (() => {
        const researchDate = new Date(formData.offic.research_doc_submit_date);
        researchDate.setDate(researchDate.getDate() + 1);
        return researchDate.toISOString().slice(0, 19).replace("T", " ");
      })(),
      //long ka na bo dee
      associate_id: user.value?.user_id,
      p_deputy_dean: formData.description,
      associate_doc_submit_date: formData.docSubmitDate,
      //form
      form_status: formData.statusForm,
    };
    console.log("postPC: ", JSON.stringify(dataForBackend));

    const response = await api.put(
      `/opinionPC/${id}`,
      dataForBackend,
      {
        headers: {
          "Content-Type": "application/json", // Required for file uploads
        },
      }
    );
    alert("บันทึกข้อมูลเรียบร้อยแล้ว");
    router.push("/officer");
    console.log("res: ", response);
    console.log("allpostOfficerPC: ", message.value);
    console.log("postOfficerPC: ", response.data);
  } catch (error) {
    console.error(error);
    message.value = "Error adding page_charge. Please try again.";
  }
};
// ดึงข้อมูลเมื่อ component ถูกโหลด
onMounted(async () => {
  await fetchProfessorData();
});
</script>
