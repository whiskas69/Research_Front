<template>
  <p class="text-2xl font-bold text-center my-10">ประวัติเอกสาร</p>
  <hisConference :id="id" />
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
import hisConference from "@/components/form/History/Conference.vue";
// Access route parameters
const route = useRoute();
const id = route.params.id;
console.log("params.id", id);
</script>
