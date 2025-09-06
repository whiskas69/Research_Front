<template>
  <div>
    <div class="container my-10 mx-auto">
      <PageChageData :id="id" />
      <Research :id="id" :type="'Page_Charge'" />
      <FinanceAll :id="id" :type="'Page_Charge'" />
      <Assosiate :id="id" :type="'Page_Charge'" />
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
            value="acknowledge"
            v-model="formData.acknowledge"
            @change="handleInput('acknowledge', $event.target.value)"
          />
          <span
              v-if="v$.acknowledge.$error"
              class="text-base font-bold text-red-500 text-left"
            >
              {{ v$.acknowledge.$errors[0].$message }}
            </span>
        </SectionWrapper>
      </Mainbox>

      <Mainbox v-if="formData.offic.p_research_admin == 'approve'">
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
              value="approve"
              name="comment"
              v-model="formData.radioAuthOffic"
              @change="handleInput('radioAuthOffic', $event.target.value)"
            />
          </div>
          <div class="px-2">
            <RadioInput
              label="ไม่อนุมัติ"
              value="notApproved"
              name="comment"
              v-model="formData.radioAuthOffic"
              @change="handleInput('radioAuthOffic', $event.target.value)"
            />
          </div>
          <div>
            <TextArea
              label="เนื่องจาก"
              @input="handleInput('description1', $event.target.value)"
            />
            <span
              v-if="v$.description1.$error"
              class="text-base font-bold text-red-500 text-left"
            >
              {{ v$.description1.$errors[0].$message }}
            </span>
          </div>
          <div class="px-2">
            <RadioInput
              label="อื่น ๆ"
              value="other"
              name="comment"
              v-model="formData.radioAuthOffic"
              @change="handleInput('radioAuthOffic', $event.target.value)"
            />
          </div>
          <div>
            <TextArea
              label="เนื่องจาก"
              @input="handleInput('description2', $event.target.value)"
            />
            <span
              v-if="v$.description2.$error"
              class="text-base font-bold text-red-500 text-left"
            >
              {{ v$.description2.$errors[0].$message }}
            </span>
          </div>

          <span
              v-if="v$.radioAuthOffic.$error"
              class="text-base font-bold text-red-500 text-left"
            >
              {{ v$.radioAuthOffic.$errors[0].$message }}
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
import { ref, reactive, onMounted, computed, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers, requiredIf } from "@vuelidate/validators";
import { DateTime } from "luxon";

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

const formData = reactive({
  offic: [],
  page_c: [],
  docSubmitDate: DateTime.now().toISODate(),
  formStatus: "waitingApproval",
  acknowledge: "",
  radioAuthOffic: "",
  description1: "",
  description2: "",
});

watch(
  () => formData.offic.p_research_admin,
  (newValue) => {
    formData.formStatus =
      newValue === "approve" ? "waitingApproval" : "research";
  }
);

const formatThaiDate = (dateString) => {
  if (!dateString) return "ไม่พบวันที่";
  
  const date = new Date(dateString);
  const months = [
    "ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.",
    "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."
  ];

  const day = date.getUTCDate();
  const month = months[date.getUTCMonth()];
  const year = date.getUTCFullYear() + 543;
  return `${day} ${month} ${year}`;
};

const handleInput = (key, value) => {
  formData[key] = value;
};

//isLoading เพื่อแสดงสถานะว่ากำลังโหลดข้อมูล
const isLoading = ref(true);
// Access route parameters
const router = useRouter();
const route = useRoute();
const id = route.params.id;

const userStore = useUserStore();
const user = computed(() => userStore.user);

// ตัวแปรสำหรับเก็บข้อมูลจาก backend
const fetchProfessorData = async () => {
  try {
    const responseoffic = await api.get(`/opinionPC/${id}`);
    formData.offic = responseoffic.data;
    const response = await api.get(`/form/Pc/${id}`);
    formData.page_c = response.data.page_c;
  } catch (error) {
    console.log("Error fetching professor data:", error);
  } finally {
    isLoading.value = false;
  }
};

const rules = computed(() => ({
  acknowledge: {
    required: helpers.withMessage("* กรุณากรอกความคิดเห็น *", required),
  },
  radioAuthOffic: {
    required: helpers.withMessage(
      "* กรุณาเลือกข้อมูล *",
      requiredIf(() => formData.offic.p_research_admin === "approve")
    ),
  },
  description1: {
    required: helpers.withMessage(
      "* กรุณากรอกข้อมูล *",
      requiredIf(() => formData.radioAuthOffic === "notApproved")
    ),
  },
  description2: {
    required: helpers.withMessage(
      "* กรุณากรอกข้อมูล *",
      requiredIf(() => formData.radioAuthOffic === "other")
    ),
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
        research_id: formData.offic.research_id,
        associate_id: formData.offic.associate_id,
        pageC_id: id,
        p_research_admin: formData.offic.p_research_admin,
        p_reason: formData.offic.p_reason,
        p_date_accepted_approve: DateTime.fromISO(formData.offic.p_date_accepted_approve).toISODate(),
        research_doc_submit_date: DateTime.fromISO(
          formData.offic.research_doc_submit_date
        ).toISODate(),
        p_deputy_dean: formData.offic.p_deputy_dean,
        associate_doc_submit_date: DateTime.fromISO(formData.offic.associate_doc_submit_date).toISODate(),
        dean_id: user.value?.user_id,
        p_acknowledge: formData.acknowledge,
        p_approve_result: formData.radioAuthOffic,
        p_reason_dean_appeove: formData.description1 || formData.description2,
        dean_doc_submit_date: formData.docSubmitDate,
        form_status: formData.radioAuthOffic == "notApproved" ? "notApproved" : formData.formStatus,
      };

      const response = await api.put(`/opinionPC/${id}`, dataForBackend);
      alert("บันทึกข้อมูลเรียบร้อยแล้ว");
      router.push("/officer");
    } catch (error) {
      console.log("Error saving code : ", error);
      alert("ไม่สามารถส่งข้อมูล โปรดลองอีกครั้งในภายหลัง");
    }
  } else {
    alert("โปรดกรอกข้อมูลให้ครบถ้วน และถูกต้อง");

    console.log("Validation failed:", v$.value.$errors);
  }
};

onMounted(async () => {
  await fetchProfessorData();
});
</script>
