<template>
  <div>
    <div class="container my-10 mx-auto">
      <PageChageData :id="id"/>
      <Research :id="id" :type="'Page_Charge'"/>
      <FinanceAll :id="id" :type="'Page_Charge'"/>
      <Assosiate :id="id" :type="'Page_Charge'"/>
      <!-- คณบดี 1-->
      <Mainbox>
        <SectionWrapper>
          <p class="text-lg font-bold">
            เรียน คณบดีคณะเทคโนโลยีสารสนเทศ (ครั้งที่ 1)
          </p>
          <p class="text-base mt-1">
            เพื่อโปรดทราบการจัดสรรวงเงิน ก่อนการตอบรับบทความ
          </p>
          <RadioInput
            label="รับทราบ"
            value="รับทราบ"
            v-model="formData.acknowledge"
            @change="handleInput('acknowledge', $event.target.value)"
          />
        </SectionWrapper>
      </Mainbox>
      <Mainbox>
        <SectionWrapper>
          <p class="text-lg font-bold">
            เรียน คณบดีคณะเทคโนโลยีสารสนเทศ (ครั้งที่ 2)
          </p>
          <p class="text-base mt-1">
            ขณะนี้บทความได้รับการตอบรับแล้ว (Letter of acceptance) เมื่อวันที่
            <b>{{ formatThaiDate(formData.offic.p_date_accepted_approve) }} </b>
            ตามหลักฐานที่แนบจึงเรียนมาเพื่อโปรดพิจารณา
          </p>
          <div class="px-2">
            <RadioInput
              label="อนุมัติ"
              value="อนุมัติ"
              name="comment"
              v-model="formData.radioAuthOffic"
              @change="handleInput('radioAuthOffic', $event.target.value)"
            />
          </div>
          <div class="px-2">
            <RadioInput
              label="ไม่อนุมัติ"
              value="ไม่อนุมัติ"
              name="comment"
              v-model="formData.radioAuthOffic"
              @change="handleInput('radioAuthOffic', $event.target.value)"
            />
          </div>
          <div>
            <TextArea label="เนื่องจาก" 
            @input="handleInput('description', $event.target.value)"/>
          </div>
          <div class="px-2">
            <RadioInput
              label="อื่น ๆ"
              value="อื่น ๆ"
              name="comment"
              v-model="formData.radioAuthOffic"
              @change="handleInput('radioAuthOffic', $event.target.value)"
            />
          </div>
          <div>
            <TextArea
              label="เนื่องจาก"
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
import RadioInput from "@/components/Input/RadioInput.vue";
import TextArea from "@/components/Input/TextArea.vue";
import PageChageData from "@/components/form/DataforOffice/PageChage.vue";
import Research from "@/components/form/DataforOffice/Research.vue";
import FinanceAll from "@/components/form/DataforOffice/FinanceAll.vue";
import Assosiate from "@/components/form/DataforOffice/Assosiate.vue";

// จัดการข้อมูลหลัก
const formData = reactive({
  offic: [],
  //วันที่ส่งเอกสาร
  docSubmitDate: "",
  //satatus
  formStatus: "รออนุมัติ",
  // ความเห้นเจ้าหน้าที่
  acknowledge: "",
  radioAuthOffic: "",
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

const formatThaiDate = (dateString) => {
    console.log("formatThaiDate input: ", dateString);
    const date = new Date(dateString);
    const months = [
      "ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", 
      "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."
    ];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear() + 543;
    console.log("new date: ",`${day} ${month} ${year}`)
    return `${day} ${month} ${year}`;
  };

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
    console.log("offic", JSON.stringify(formData.offic));
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
      associate_id: formData.offic.associate_id,
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
      p_deputy_dean: formData.offic.p_deputy_dean,
      associate_doc_submit_date: (() => {
        const researchDate = new Date(formData.offic.associate_doc_submit_date);
        researchDate.setDate(researchDate.getDate() + 1);
        return researchDate.toISOString().slice(0, 19).replace("T", " ");
      })(),
      //ka na bo dee
      dean_id: user.value?.user_id,
      p_acknowledge: formData.acknowledge,
      p_approve_result: formData.radioAuthOffic,
      p_reason_dean_appeove: formData.description,
      dean_doc_submit_date: formData.docSubmitDate,
      //form
      form_status: formData.formStatus,
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
