<template>
  <p class="text-2xl font-bold text-center my-10">ประวัติเอกสาร</p>
  <Kris :id="id"/>
  <Research :id="id" :type="'Research_KRIS'"/>
  <div class="container my-10 mx-auto">
    <div class="flex justify-end ">
      <button
        onclick="window.print()"
        class="btn text-white bg-[#4285F4] hover:bg-[#4285F4]"
      >
        นำออกเอกสารเป็น PDF
      </button>
    </div>
  </div>
  
</template>

<script setup>
import { useRoute } from "vue-router";
import Kris from "@/components/form/DataforOffice/Kris.vue";
import Research from "@/components/form/DataforOffice/Research.vue";
// Access route parameters
const route = useRoute();
const id = route.params.id;
console.log("params.id", id);
</script>

<style>
@media print {
  .no-print {
    display: none !important;
  }
}
</style>
