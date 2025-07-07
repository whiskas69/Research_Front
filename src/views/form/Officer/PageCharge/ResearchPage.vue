<template>
  <div>
    <div class="container my-10 mx-auto">
      <PageChageData :id="id" />
      <p class="text-xl font-bold my-5">ตรวจสอบข้อมูลและหลักฐาน</p>
      <Mainbox>
        <SectionWrapper>
          <p class="text-lg font-bold">เอกสารหลักฐานที่แนบ</p>
          <div class="flex flex-row items-center w-full">
            <div class="flex flex-row items-center w-full justify-between">
              <div class="flex flex-row">
                <p>
                  หลักฐานแสดงการอยู่ในฐานข้อมูลสากล ISI หรือ SJR หรือ Scopus
                  หรือ Nature
                </p>
              </div>
              <div>
                <button @click="getFile(formData.f_pc_proof)" class="btn bg-[#E85F19] text-white mr-5">
                  ดูเอกสาร
                </button>
                <button @click="
                  downloadFile(
                    formData.f_pc_proof,
                    'หลักฐานการอยู่ในฐานข้อมูลสากล'
                  )
                  " class="btn bg-[#4285F4] text-white">
                  โหลดเอกสาร
                </button>
              </div>
            </div>
          </div>
          <div class="flex flex-row items-center w-full">
            <div class="flex flex-row items-center w-full justify-between">
              <div class="flex flex-row">
                <p>
                  หลักฐานแสดงการจัดลำดับ Quartile ของฐานข้อมูลสากล ISI หรือ SJR
                  หรือ Scopus
                </p>
              </div>
              <div>
                <button @click="getFile(formData.f_q_pc_proof)" class="btn bg-[#E85F19] text-white mr-5">
                  ดูเอกสาร
                </button>
                <button @click="
                  downloadFile(
                    formData.f_q_pc_proof,
                    'หลักฐานการจัดลำดับ Quartile'
                  )
                  " class="btn bg-[#4285F4] text-white">
                  โหลดเอกสาร
                </button>
              </div>
            </div>
          </div>
          <div class="flex flex-row items-center w-full">
            <div class="flex flex-row items-center w-full justify-between">
              <div class="flex flex-row">
                <p>
                  ใบแจ้งหนี้ค่าใช้จ่ายสำหรับการตีพิมพ์ /
                  อัตราค่าใช้จ่ายที่ประกาศบนหน้าเว็บไซต์
                </p>
              </div>
              <div>
                <button @click="getFile(formData.f_invoice_public)" class="btn bg-[#E85F19] text-white mr-5">
                  ดูเอกสาร
                </button>
                <button @click="
                  downloadFile(
                    formData.f_invoice_public,
                    'ใบแจ้งหนี้ค่าใช้จ่าย'
                  )
                  " class="btn bg-[#4285F4] text-white">
                  โหลดเอกสาร
                </button>
              </div>
            </div>
          </div>
          <div class="flex flex-row items-center w-full">
            <div class="flex flex-row items-center w-full justify-between">
              <p class="flex flex-row">
                หลักฐานการส่งบทความ หนังสือตอบรับบทความ
              </p>
              <div>
                <button @click="getFile(formData.f_accepted)" class="btn bg-[#E85F19] text-white mr-5"
                  :disabled="!isValidFile(formData.f_accepted)">
                  ดูเอกสาร
                </button>
                <button @click="
                  downloadFile(formData.f_accepted, 'หนังสือตอบรับบทความ')
                  " class="btn bg-[#4285F4] text-white" :disabled="!isValidFile(formData.f_accepted)">
                  โหลดเอกสาร
                </button>
                <p v-if="formData.page_c.accepted == null" class="text-red-500 pt-1">
                  ** ไม่มีหนังสือตอบรับบทความ **
                </p>
              </div>
            </div>
          </div>
          <div class="flex flex-row items-center w-full">
            <div class="flex flex-row items-center w-full justify-between">
              <div class="flex flex-row">
                <p>สำเนาบทความ</p>
              </div>
              <div>
                <button @click="getFile(formData.f_copy_article)" class="btn bg-[#E85F19] text-white mr-5">
                  ดูเอกสาร
                </button>
                <button @click="
                  downloadFile(
                    formData.f_copy_article,
                    'สำเนาบทความ'
                  )
                  " class="btn bg-[#4285F4] text-white">
                  โหลดเอกสาร
                </button>
              </div>
            </div>
          </div>
          <div class="flex flex-row items-center w-full">
            <div class="flex flex-row items-center w-full justify-between">
              <div class="flex flex-row">
                <p>หลักฐานการ Upload บทความเข้าระบบ IT Scholar</p>
              </div>
              <div>
                <button @click="getFile(formData.f_upload_article)" class="btn bg-[#E85F19] text-white mr-5">
                  ดูเอกสาร
                </button>
                <button @click="
                  downloadFile(
                    formData.f_upload_article,
                    'หลักฐานการ Upload บทความเข้าระบบ IT Scholar'
                  )
                  " class="btn bg-[#4285F4] text-white">
                  โหลดเอกสาร
                </button>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </Mainbox>

      <Mainbox>
        <SectionWrapper>
          <p>ตรวจสอบหลักฐานตามหลักเกณฑ์ที่กำหนดในประกาศ ส.จ.ล และประกาศคณะ</p>
          <RadioInput label="ถูกต้องตามเงื่อนไขการสนับสนุน ดังนี้" value="approve" name="re"
            v-model="formData.radioAuthOffic" @change="handleInput('radioAuthOffic', $event.target.value)" />
          <TextInputLabelLeft v-if="formData.radioAuthOffic == 'approve'" label="ได้รับหนังสือตอบรับบทความ เมื่อวันที่"
            customLabel="mx-2 w-full " customInput="max-w-max" customDiv="max-w-max" type="date"
            v-model="formData.dateAccep" @input="handleInput('dateAccep', $event.target.value)" />
          <textarea class="textarea textarea-bordered w-full"
            @input="handleInput('description', $event.target.value)"></textarea>
          <RadioInput label="ถูกต้องตามเงื่อนไขการสนับสนุน กรณีส่งหนังสือตอบรับย้อนหลัง ดังนี้" value="waiting letter"
            name="re" v-model="formData.radioAuthOffic" @change="handleInput('radioAuthOffic', $event.target.value)" />
          <textarea class="textarea textarea-bordered w-full"
            @input="handleInput('description', $event.target.value)"></textarea>
          <RadioInput label="อื่น ๆ" value="other" name="re" v-model="formData.radioAuthOffic"
            @change="handleInput('radioAuthOffic', $event.target.value)" />
          <textarea class="textarea textarea-bordered w-full"
            @input="handleInput('description', $event.target.value)"></textarea>

          <span v-if="v$.radioAuthOffic.$error" class="text-base font-bold text-red-500 text-left">
            {{ v$.radioAuthOffic.$errors[0].$message }}
          </span>
          <span v-if="v$.dateAccep.$error" class="text-base font-bold text-red-500 text-left">
            {{ v$.dateAccep.$errors[0].$message }}
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
import { reactive, onMounted, computed, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers, requiredIf } from "@vuelidate/validators";
import { DateTime } from "luxon";

import { useUserStore } from "@/store/userStore";
import api from "@/setting/api";

import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import TextInputLabelLeft from "@/components/Input/TextInputLabelLeft.vue";
import RadioInput from "@/components/Input/RadioInput.vue";
import PageChageData from "@/components/form/EditForm/EditPageChage.vue";

const formData = reactive({
  file: "",
  offic: [],
  name: [],
  page_c: [],
  f_pc_proof: null,
  f_q_pc_proof: null,
  f_invoice_public: null,
  f_accepted: null,
  f_copy_article: null,
  f_upload_article: null,
  docSubmitDate: DateTime.now().toISODate(),
  statusForm: "finance",
  radioAuthOffic: "",
  description: "",
  dateAccep: "",
});

watch(() => {
  if (formData.offic.associate_id != null) {
    formData.formStatus = "associate";
  } else if (formData.offic.dean_id != null) {
    formData.formStatus = "dean";
  } else {
    formData.formStatus = "finance";
  }
});

const handleInput = (key, value) => {
  formData[key] = value;
};

const today = DateTime.now().toISODate();

const maxDateToday = helpers.withMessage(
  "* วันที่ต้องไม่เกินวันนี้ *",
  (value) => {
    if (!value) return false;
    return DateTime.fromISO(value) <= DateTime.fromISO(today);
  }
);

const rules = computed(() => ({
  radioAuthOffic: {
    required: helpers.withMessage("* กรุณาเลือกข้อมูล *", required),
    validSelection: helpers.withMessage(
      "* ไม่สามารถเลือกตัวเลือกนี้ได้ *",
      (value) => {
        if (
          (value === "waiting letter" && (formData.f_accepted !== null || formData.f_accepted !== "")) ||
          (value === "approve" && (formData.f_accepted === null || formData.f_accepted === ""))
        ) {
          return false;
        }
        return true;
      }
    ),
  },
  dateAccep: {
    required: helpers.withMessage(
      "* กรุณากรอกวันที่อนุมัติ *",
      requiredIf(() => formData.radioAuthOffic === "approve" && formData.f_accepted !== null || formData.f_accepted !== "")
    ),
    maxDateToday,
  },
}));

const v$ = useVuelidate(rules, formData);

const getDataPc = async () => {
  if (id == null || id == "") {
    alert("โปรดเข้าสู่ระบบใหม่อีกครั้ง");
  }
  try {
    const response = await api.get(`/form/Pc/${id}`);
    formData.name = response.data.name;
    formData.page_c = response.data.page_c;

    const responsefile = await api.get(`/getFilepage_c?pageC_id=${id}`);
    formData.f_pc_proof = responsefile.data.file_pc_proof;
    formData.f_q_pc_proof = responsefile.data.file_q_pc_proof;
    formData.f_invoice_public = responsefile.data.file_invoice_public;
    formData.f_accepted = responsefile.data.file_accepted;
    formData.f_copy_article = responsefile.data.file_copy_article;
    formData.f_upload_article = responsefile.data.file_upload_article;
    try {
      const responseoffic = await api.get(`/opinionPC/${id}`);
      formData.offic = responseoffic.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        formData.offic = null;
      } else {
        throw error;
      }
    }
  } catch (error) {
    console.log("Error", error);
  }
};
// Access route parameters
const router = useRouter();
const route = useRoute();
const id = route.params.id;

const userStore = useUserStore();
const user = computed(() => userStore.user);

// ตัวแปรสำหรับเก็บข้อมูลจาก backend
const getFile = async (fileUrl) => {
  formData.file = fileUrl;
  window.open(formData.file, "_blank");
};
const isValidFile = (fileUrl) => {
  return fileUrl && !fileUrl.includes("/uploads/null");
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
    console.log("Error downloading file:", error);
  }
};

const OfficerPC = async () => {
  const result = await v$.value.$validate();

  if (result) {
    if (confirm("ยืนยันข้อมูลถูกต้อง") == false) {
      return false;
    }

    try {
      if (!formData.offic) {
        const dataForBackend = {
          research_id: user.value?.user_id,
          pageC_id: id,
          p_research_admin: formData.radioAuthOffic,
          p_reason: formData.description,
          p_date_accepted_approve: formData.dateAccep || null,
          research_doc_submit_date: formData.docSubmitDate,
          form_status: formData.radioAuthOffic == "other" ? "notApproved" : formData.statusForm,
        };

        const response = await api.post("/opinionPC", dataForBackend);
        alert("บันทึกข้อมูลเรียบร้อยแล้ว");
        router.push("/officer");
      } else {
        const dataForBackend = {
          research_id: user.value?.user_id,
          associate_id: formData.offic.associate_id,
          dean_id: formData.offic.dean_id,
          pageC_id: id,
          p_research_admin: formData.radioAuthOffic,
          p_reason: formData.description,
          p_date_accepted_approve: formData.dateAccep,
          research_doc_submit_date: formData.docSubmitDate,
          p_deputy_dean: formData.offic.p_deputy_dean,
          associate_doc_submit_date: DateTime.fromISO(
            formData.offic.associate_doc_submit_date
          ).toISODate(),
          p_acknowledge: formData.offic.p_acknowledge,
          p_approve_result: formData.offic.p_approve_result,
          p_reason_dean_appeove: formData.offic.p_reason_dean_appeove,
          dean_doc_submit_date: DateTime.fromISO(
            formData.offic.dean_doc_submit_date
          ).toISODate(),
          form_status: formData.radioAuthOffic == "other" ? "notApproved" : formData.formStatus,
        };

        const response = await api.put(`/opinionPC/${id}`, dataForBackend);
        alert("บันทึกข้อมูลเรียบร้อยแล้ว");
        router.push("/officer");
      }
    } catch (error) {
      console.log("Error saving code : ", error);
      alert("ไม่สามารถส่งข้อมูล โปรดลองอีกครั้งในภายหลัง");
    }
  } else {
    alert("โปรดกรอกข้อมูลให้ครบถ้วน และถูกต้อง");

    console.log("Validation failed:", v$.value.$errors);
  }
};

onMounted(() => {
  getDataPc();
});
</script>
