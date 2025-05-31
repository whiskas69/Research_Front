<template>
  <div>
    <p class="text-2xl font-bold text-center my-10">ประวัติเอกสาร</p>
    <ConferenceData :id="id" />
    <HR :id="id" />
    <Research :id="id" :type="'Conference'" />
    <FinanceAll :id="id" :type="'Conference'" />
    <Assosiate :id="id" :type="'Conference'" />
    <Dean :id="id" :type="'Conference'" />

    <div class="flex flex-row container my-10 mx-auto gap-3 justify-end">
      <div
        v-if="
          formData.form.form_status == 'รออนุมัติ' ||
          formData.form.form_status == 'อนุมัติ'
        "
        class="flex no-print"
      >
        <router-link :to="`/pdf/confer/${id}`">
          <button class="btn text-white bg-[#4285F4] hover:bg-[#4285F4]">
            พิมพ์แบบฟอร์ม
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import { useRoute } from "vue-router";
import api from "@/setting/api";

import ConferenceData from "@/components/form/DataforOffice/Conference.vue";
import HR from "@/components/form/DataforOffice/HR.vue";
import Research from "@/components/form/DataforOffice/Research.vue";
import FinanceAll from "@/components/form/DataforOffice/FinanceAll.vue";
import Assosiate from "@/components/form/DataforOffice/Assosiate.vue";
import Dean from "@/components/form/DataforOffice/Dean.vue";

const route = useRoute();
const id = route.params.id;
const formData = reactive({
  form: [],
});
const getDataPc = async () => {
  const response = await api.get(`/form/confer/${id}`);
  formData.form = response.data.form;
};
onMounted(() => {
  getDataPc();
});
</script>
