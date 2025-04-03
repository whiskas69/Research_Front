<template>
  <div>
    <div class="container my-10 mx-auto">
      <ConferenceData :id="id" />
      <HR :id="id" />
      <Research :id="id" :type="'Conference'" />
      <FinanceAll :id="id" :type="'Conference'" />
      <Mainbox>
        <SectionWrapper>
          <p class="text-lg font-bold">รองคณบดีฝ่ายงานวิจัย</p>
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
import { useVuelidate } from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import { DateTime } from "luxon";

import { useUserStore } from "@/store/userStore";
import api from "@/setting/api";

import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import TextArea from "@/components/Input/TextArea.vue";
import ConferenceData from "@/components/form/DataforOffice/Conference.vue";
import HR from "@/components/form/DataforOffice/HR.vue";
import Research from "@/components/form/DataforOffice/Research.vue";
import FinanceAll from "@/components/form/DataforOffice/FinanceAll.vue";

const formData = reactive({
  offic: [],
  docSubmitDate: DateTime.now().toISODate(),
  description: "",
  formStatus: "คณบดี",
});

const handleInput = (key, value) => {
  formData[key] = value;
};

const isLoading = ref(true);
// Access route parameters
const router = useRouter();
const route = useRoute();
const id = route.params.id;

const userStore = useUserStore();
const user = computed(() => userStore.user);

const fetchOfficerData = async () => {
  try {
    const responseoffic = await api.get(`/opinionConf/${id}`);
    formData.offic = responseoffic.data;
  } catch (error) {
    console.log("Error fetching Officer data:", error);
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

const OfficerConfer = async () => {
  const result = await v$.value.$validate();

  if (result) {
    if (confirm("ยืนยันข้อมูลถูกต้อง") == false) {
      return false;
    }

    try {
      const dataForBackend = {
        hr_id: formData.offic.hr_id,
        research_id: formData.offic.research_id,
        conf_id: id,
        c_research_hr: formData.offic.c_research_hr,
        c_reason: formData.offic.c_reason,
        hr_doc_submit_date: DateTime.fromISO(
          formData.offic.hr_doc_submit_date
        ).toISODate(),
        c_meet_quality: formData.offic.c_meet_quality,
        c_good_reason: formData.offic.c_good_reason,
        research_doc_submit_date: DateTime.fromISO(
          formData.offic.research_doc_submit_date
        ).toISODate(),
        associate_id: user.value?.user_id,
        c_deputy_dean: formData.description,
        associate_doc_submit_date: formData.docSubmitDate,
        form_status: formData.formStatus,
      };

      const response = await api.put(`/opinionConf/${id}`, dataForBackend);
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

onMounted(async() => {
  await fetchOfficerData();
});
</script>
