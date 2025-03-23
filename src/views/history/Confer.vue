<template>
  <p class="text-2xl font-bold text-center my-10">ประวัติเอกสาร</p>
  <ConferenceData :id="id"/>
      <HR :id="id"/>
      <Research :id="id" :type="'Conference'"/>
      <FinanceAll :id="id" :type="'Conference'"/>
      <Assosiate :id="id" :type="'Conference'"/>
      <Dean :id="id" :type="'Conference'"/>
    
  <div class="container my-10 mx-auto">
    <div class="flex justify-end">
      <button
        @click="exportToPDF"
        class="btn text-white bg-[#4285F4] hover:bg-[#4285F4]"
      >
        นำออกเอกสารเป็น PDF
      </button>
    </div>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import ConferenceData from "@/components/form/DataforOffice/Conference.vue";
import HR from "@/components/form/DataforOffice/HR.vue";
import Research from "@/components/form/DataforOffice/Research.vue";
import FinanceAll from "@/components/form/DataforOffice/FinanceAll.vue";
import Assosiate from "@/components/form/DataforOffice/Assosiate.vue";
import Dean from "@/components/form/DataforOffice/Dean.vue";
// Access route parameters
const route = useRoute();
const id = route.params.id;
console.log("params.id", id);
</script>
