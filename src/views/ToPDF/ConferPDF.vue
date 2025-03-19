
<template>
    <p class="text-2xl font-bold text-center my-10">export pdf confer</p>
    <hisPageCharge :id="id" />
    <div class="container my-10 mx-auto">
      <div class="flex justify-end no-print">
        <button
          onclick="window.print()"
          class="btn text-white bg-[#4285F4] hover:bg-[#4285F4]"
        >
          พิมพ์แบบฟอร์ม
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from "vue-router";
  import { jsPDF } from "jspdf";
  
  import hisPageCharge from "@/components/form/History/PageCharge.vue";
  
  </script>
  
  <style>
  @media print {
    .no-print {
      display: none !important;
    }
  }
  </style>
  