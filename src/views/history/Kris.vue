<template>
  <p class="text-2xl font-bold text-center my-10">ประวัติเอกสาร</p>
  <Kris :id="id"/>
  <Research :id="id" :type="'Research_KRIS'"/>
  <div class="flex flex-row container my-10 mx-auto gap-3 justify-end">
    <div v-if="userStore.user.user_role == 'professor'" class="flex no-print">
      <router-link :to="`/myhistory`">
        <button class="btn text-black border-[#4285F4] hover:bg-[#4285F4]">
          ไปยังหน้าประวัติทั้งหมด
        </button>
      </router-link>
    </div>
    <div v-else class="flex no-print">
      <router-link :to="`/historyOffice`">
        <button class="btn text-black border-[#4285F4] hover:bg-[#4285F4]">
          ไปยังหน้าประวัติทั้งหมด
        </button>
      </router-link>
    </div>
  </div>
  
</template>

<script setup>
import { useRoute } from "vue-router";
import { useUserStore } from "@/store/userStore";
import Kris from "@/components/form/DataforOffice/Kris.vue";
import Research from "@/components/form/DataforOffice/Research.vue";
// Access route parameters
const route = useRoute();
const id = route.params.id;
const userStore = useUserStore();
console.log("params.id", id);
</script>

<style>
@media print {
  .no-print {
    display: none !important;
  }
}
</style>
