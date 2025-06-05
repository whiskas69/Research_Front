<template>
  <div>
    <div class="container my-10 mx-auto">
      <PageChageData :id="id" />
      <Research :id="id" :type="'Page_Charge'" />
      <FinanceAll :id="id" :type="'Page_Charge'" />
      <Mainbox>
        <SectionWrapper>
          <p class="text-lg font-bold">รองคณบดีฝ่ายงานวิจัย</p>
          <div>
            <TextArea
              label="ความคิดเห็น"
              @input="handleInput('description', $event.target.value)"
            />

            <span
              v-if="v$.description.$error"
              class="text-base font-bold text-red-500 text-left"
            >
              {{ v$.description.$errors[0].$message }}
            </span>
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
import { useVuelidate } from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import { DateTime } from "luxon";

import { useUserStore } from "@/store/userStore";
import api from "@/setting/api";

import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import TextArea from "@/components/Input/TextArea.vue";
import PageChageData from "@/components/form/DataforOffice/PageChage.vue";
import Research from "@/components/form/DataforOffice/Research.vue";
import FinanceAll from "@/components/form/DataforOffice/FinanceAll.vue";

const formData = reactive({
  offic: [],
  docSubmitDate: DateTime.now().toISODate(),
  statusForm: "คณบดี",
  description: "",
});

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
  } catch (error) {
    console.log("Error fetching professor data:", error);
  } finally {
    isLoading.value = false;
  }
};

const rules = computed(() => ({
  description: {
    required: helpers.withMessage("* กรุณากรอกความคิดเห็น *", required),
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
        pageC_id: id,
        p_research_admin: formData.offic.p_research_admin,
        p_reason: formData.offic.p_reason,
        p_date_accepted_approve: DateTime.fromISO(formData.offic.p_date_accepted_approve).toISODate(),
        research_doc_submit_date: DateTime.fromISO(
          formData.offic.research_doc_submit_date
        ).toISODate(),
        associate_id: user.value?.user_id,
        p_deputy_dean: formData.description,
        associate_doc_submit_date: formData.docSubmitDate,
        form_status: formData.statusForm,
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
