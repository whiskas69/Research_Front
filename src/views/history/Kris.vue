<template>
  <p class="text-2xl font-bold text-center my-10">ประวัติเอกสาร</p>
  <Kris :id="id"/>
  <Research :id="id" :type="'Research_KRIS'"/>
</template>

<script setup>
import { useRoute } from "vue-router";
import Kris from "@/components/form/DataforOffice/Kris.vue";
import Research from "@/components/form/DataforOffice/Research.vue";

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
