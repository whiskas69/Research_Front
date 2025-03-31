<template>
  <p class="text-2xl font-bold text-center my-10">ประวัติเอกสาร</p>
  <PageChageData :id="id" />
  <Research :id="id" :type="'Page_Charge'" />
  <FinanceAll :id="id" :type="'Page_Charge'" />
  <Assosiate :id="id" :type="'Page_Charge'" />
  <Dean :id="id" :type="'Page_Charge'" />

  <div class="container my-10 mx-auto">
    <div class="flex justify-end no-print">
      <router-link :to="`/pdf/pageCharge/${id}`">
        <button class="btn text-white bg-[#4285F4] hover:bg-[#4285F4]">
          พิมพ์แบบฟอร์ม
        </button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

import PageChageData from "@/components/form/DataforOffice/PageChage.vue";
import Research from "@/components/form/DataforOffice/Research.vue";
import FinanceAll from "@/components/form/DataforOffice/FinanceAll.vue";
import Assosiate from "@/components/form/DataforOffice/Assosiate.vue";
import Dean from "@/components/form/DataforOffice/Dean.vue";

// Access route parameters
const route = useRoute();
const id = route.params.id;
</script>

<style>
@media print {
  .no-print {
    display: none !important;
  }
}
</style>