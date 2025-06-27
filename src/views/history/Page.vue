<template>
  <p class="text-2xl font-bold text-center my-10">ประวัติเอกสาร</p>
  <PageChageData :id="id" />
  <Research :id="id" :type="'Page_Charge'" />
  <FinanceAll :id="id" :type="'Page_Charge'" />
  <Assosiate :id="id" :type="'Page_Charge'" />
  <Dean :id="id" :type="'Page_Charge'" />
  <WithdrawMoney :id="id" :type="'Page_Charge'" />
  
  <div class="flex flex-row container my-10 mx-auto gap-3 justify-end">
    <div v-if="formData.form.form_status == 'waitingApproval' || formData.form.form_status == 'approve'" class="flex no-print">
      <router-link :to="`/pdf/pageCharge/${id}`">
        <button class="btn text-white bg-[#4285F4] hover:bg-[#4285F4]">
          พิมพ์แบบฟอร์ม
        </button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import { useRoute } from "vue-router";
import api from "@/setting/api";

import PageChageData from "@/components/form/DataforOffice/PageChage.vue";
import Research from "@/components/form/DataforOffice/Research.vue";
import FinanceAll from "@/components/form/DataforOffice/FinanceAll.vue";
import Assosiate from "@/components/form/DataforOffice/Assosiate.vue";
import Dean from "@/components/form/DataforOffice/Dean.vue";
import WithdrawMoney from "@/components/form/DataforOffice/WithdrawMoney.vue";

// Access route parameters
const route = useRoute();
const id = route.params.id;

const formData = reactive({
  form: [],
});
const getDataPc = async () => {
  const response = await api.get(`/form/Pc/${id}`);
  formData.form = response.data.form;
};
onMounted(() => {
  getDataPc();
});
</script>

<style>
@media print {
  .no-print {
    display: none !important;
  }
}
</style>
