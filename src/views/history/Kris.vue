<template>
  <p class="text-2xl font-bold text-center my-10">ประวัติเอกสาร</p>
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
  <hisKris :id="id" />
  
</template>

<script setup>
import { useRoute } from "vue-router";
import hisKris from "@/components/form/History/Kris.vue";
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
