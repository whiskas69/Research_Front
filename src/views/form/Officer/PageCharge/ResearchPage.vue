<template>
  <div>
    <div class="container my-10 mx-auto">
      <PageChageData :id="id" />
      <!-- เอกสารหลักฐานที่แนบ -->
      <Mainbox>
        <SectionWrapper>
          <p class="text-lg font-bold">เอกสารหลักฐานที่แนบ</p>
          <!-- 1 -->
          <div class="flex flex-row items-center w-full">
            <div class="flex flex-row items-center w-full justify-between">
              <div class="flex flex-row">
                <p>
                  หลักฐานแสดงการอยู่ในฐานข้อมูลสากล ISI หรือ SJR หรือ Scopus
                  หรือ Nature
                </p>
              </div>
              <div class="">
                <button @click="getFile(formData.f_pc_proof)" class="btn bg-[#E85F19] text-white mr-5">
                  ดูเอกสาร
                </button>
                <button @click="
              downloadFile(formData.f_pc_proof, 'หลักฐานการอยู่ในฐานข้อมูลสากล')" class="btn bg-[#4285F4] text-white">โหลดเอกสาร</button>
              </div>
            </div>
          </div>
          <!-- 2 -->
          <div class="flex flex-row items-center w-full">
            <div class="flex flex-row items-center w-full justify-between">
              <div class="flex flex-row">
                <p>
                  หลักฐานแสดงการจัดลำดับ Quartile ของฐานข้อมูลสากล ISI หรือ SJR หรือ Scopus
                </p>
              </div>
              <div class="">
                <button @click="getFile(formData.f_q_pc_proof)" class="btn bg-[#E85F19] text-white mr-5">
                  ดูเอกสาร
                </button>
                <button @click="
              downloadFile(formData.f_q_pc_proof, 'หลักฐานการจัดลำดับ Quartile')
              " class="btn bg-[#4285F4] text-white">โหลดเอกสาร</button>
              </div>
            </div>
          </div>
          <!-- 3 -->
          <div class="flex flex-row items-center w-full">
            <div class="flex flex-row items-center w-full justify-between">
              <div class="flex flex-row">
                <p>
                  ใบแจ้งหนี้ค่าใช้จ่ายสำหรับการตีพิมพ์ /
                  อัตราค่าใช้จ่ายที่ประกาศบนหน้าเว็บไซต์
                </p>
              </div>
              <div class="">
                <button @click="getFile(formData.f_invoice_public)" class="btn bg-[#E85F19] text-white mr-5">
                  ดูเอกสาร
                </button>
                <button @click="
              downloadFile(formData.f_invoice_public, 'ใบแจ้งหนี้ค่าใช้จ่าย')
              " class="btn bg-[#4285F4] text-white">โหลดเอกสาร</button>
              </div>
            </div>
          </div>
          <!-- 4 -->
          <div class="flex flex-row items-center w-full">
            <div class="flex flex-row items-center w-full justify-between">
              <div class="flex flex-row">
                <p>หลักฐานการส่งบทความ หนังสือตอบรับบทความ</p>
              </div>
              <div class="">
                <button  @click="getFile(formData.f_accepted)" class="btn bg-[#E85F19] text-white mr-5">
                  ดูเอกสาร
                </button>
                <button @click="downloadFile(formData.f_accepted, 'หนังสือตอบรับบทความ')" class="btn bg-[#4285F4] text-white">โหลดเอกสาร</button>
              </div>
            </div>
          </div>
          <!-- 5 -->
          <div class="flex flex-row items-center w-full">
            <div class="flex flex-row items-center w-full justify-between">
              <div class="flex flex-row">
                <p>สำเนาบทความ และ Upload บทความเข้าระบบ IT Scholar</p>
              </div>
              <div class="">
                <button @click="getFile(formData.f_copy_article)" class="btn bg-[#E85F19] text-white mr-5">
                  ดูเอกสาร
                </button>
                <button @click="
              downloadFile(
                formData.f_copy_article,
                'สำเนาบทความ และ Upload บทความเข้าระบบ IT Scholar'
              )
              " class="btn bg-[#4285F4] text-white">โหลดเอกสาร</button>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </Mainbox>

      <p class="text-xl font-bold my-5">ตรวจสอบข้อมูลและหลักฐาน</p>
      <Mainbox>
        <SectionWrapper>
          <p>ตรวจสอบหลักฐานตามหลักเกณฑ์ที่กำหนดในประกาศ ส.จ.ล และประกาศคณะ</p>
          <RadioInput
            label="ถูกต้องตามเงื่อนไขการสนับสนุน ดังนี้"
            value="อนุมัติ"
            name="re"
            v-model="formData.radioAuthOffic"
            @change="handleInput('radioAuthOffic', $event.target.value)"
          />
          <TextInputLabelLeft
            v-if="formData.radioAuthOffic == 'อนุมัติ'"
            label="ได้รับหนังสือตอบรับบทความ เมื่อวันที่"
            customLabel="mx-2 w-full "
            customInput="max-w-max"
            customDiv="max-w-max"
            type="date"
            v-model="formData.dateAccep"
            @input="handleInput('dateAccep', $event.target.value)"
          />
          <textarea
            class="textarea textarea-bordered w-full"
            @input="handleInput('description', $event.target.value)"
          ></textarea>
          <RadioInput
            label="ถูกต้องตามเงื่อนไขการสนับสนุน กรณีส่งหนังสือตอบรับย้อนหลัง ดังนี้"
            value="รอหนังสือตอบรับ"
            name="re"
            v-model="formData.radioAuthOffic"
            @change="handleInput('radioAuthOffic', $event.target.value)"
          />
          <textarea
            class="textarea textarea-bordered w-full"
            @input="handleInput('description', $event.target.value)"
          ></textarea>
          <RadioInput
            label="อื่น ๆ"
            value="อื่น ๆ"
            name="re"
            v-model="formData.radioAuthOffic"
            @change="handleInput('radioAuthOffic', $event.target.value)"
          />
          <textarea
            class="textarea textarea-bordered w-full"
            @input="handleInput('description', $event.target.value)"
          ></textarea>
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
import TextInputLabelLeft from "@/components/Input/TextInputLabelLeft.vue";
import RadioInput from "@/components/Input/RadioInput.vue";
import PageChageData from "@/components/form/DataforOffice/PageChage.vue";

// จัดการข้อมูลหลัก
const formData = reactive({
  file: "",
  name: [],
  //urlfile
  f_pc_proof: "",
  f_q_pc_proof: "",
  f_invoice_public: "",
  f_accepted: "",
  f_copy_article: "",
  //วันที่ส่งเอกสาร
  docSubmitDate: "",
  //satatus
  statusForm: "ฝ่ายบริหารการเงิน",
  // ความเห้นเจ้าหน้าที่
  radioAuthOffic: "",
  description: "",
  dateAccep: "",
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
const getDataPc = async () => {
  if (id == null || id == "") {
    alert("โปรดเข้าสู่ระบบใหม่อีกครั้ง");
  }
  try {
    const response = await api.get(`/form/Pc/${id}`);
    formData.name = response.data.name;
    const responsefile = await api.get(`/getFilepage_c?pageC_id=${id}`);
    // formData.file = responsefile.data;
    formData.f_pc_proof = responsefile.data.file_pc_proof;
    formData.f_q_pc_proof = responsefile.data.file_q_pc_proof;
    formData.f_invoice_public = responsefile.data.file_invoice_public;
    formData.f_accepted = responsefile.data.file_accepted;
    formData.f_copy_article = responsefile.data.file_copy_article;
    console.log("Success", response);
  } catch (error) {
    console.log("Error", error);
  }
};
// Access route parameters
const router = useRouter();
const route = useRoute();
const id = route.params.id;
console.log("params.id", id);
const userStore = useUserStore();
const user = computed(() => userStore.user);
console.log("user id hr:", user)

// ตัวแปรสำหรับเก็บข้อมูลจาก backend
const getFile = async (fileUrl) => {
  formData.file = fileUrl;
  window.open(formData.file, "_blank");
};

const downloadFile = async (fileUrl, fileName) => {
  try {
    const response = await fetch(fileUrl);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = fileName + " ของ " + formData.name + ".pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error downloading file:", error);
  }
};

const OfficerPC = async () => {
  try {
    const dataForBackend = {
      research_id: user.value?.user_id,
      pageC_id: id,
      p_research_admin: formData.radioAuthOffic,
      p_reason: formData.description,
      p_date_accepted_approve: formData.dateAccep || null,
      research_doc_submit_date: formData.docSubmitDate,
      form_status: formData.statusForm,
    };
    console.log("postPC: ", JSON.stringify(dataForBackend));

    const response = await api.post(
      "/opinionPC",
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
    console.log("postOfficerPC: ", response.data);
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  getDataPc();
});
</script>
