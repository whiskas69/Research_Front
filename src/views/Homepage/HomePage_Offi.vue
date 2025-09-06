<template>
  <div class="container my-10 mx-auto h-screen">
    <div class="h-[50%]">
      <p class="text-xl font-bold mb-2">เอกสารต้องตรวจสอบ</p>
      <div class="h-full p-2 mb-2 border rounded-lg overflow-auto">
        <FormCard
          v-for="form in listForm.forms"
          :key="form.form_id"
          :form="form"
          :rolePathMap="rolePathMap"
          :rolePageChargeMap="rolePageChargeMap"
          showAmount="notShow"
        />
      </div>
    </div>

    <div class="h-[40%]">
      <p class="text-xl font-bold mt-10 mb-2">เอกสารที่ถูกตีกลับ</p>
      <div class="h-full p-2 mb-2 border rounded-lg overflow-auto">
        <FormCard
          v-for="form in listForm.return"
          :key="form.form_id"
          :form="form"
          :rolePathMap="rolePathMap"
          :rolePageChargeMap="rolePageChargeMap"
          showAmount="notShow"
        />

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from "vue";
import { useUserStore } from "@/store/userStore";
import api from "@/setting/api";
import { useRouter } from "vue-router";
import FormCard from "@/components/form/FormCard.vue";

const router = useRouter();

const userStore = useUserStore();
const listForm = reactive({
  forms: [],
  return: [],
});

if (!userStore.user.user_signature) {
  alert("กรุณาอัปโหลดลายเซ็น");
  router.push("/profile");
}

const isLoading = ref(true);

const rolePathMap = {
  hr: "/officeFormConference/hr/",
  research: "/officeFormConference/research/",
  finance: "/officeFormConference/finance/",
  associate: "/officeFormConference/associate/",
  dean: "/officeFormConference/dean/",
};

const rolePageChargeMap = {
  research: "/officeFormPageCharge/research/",
  finance: "/officeFormPageCharge/finance/",
  associate: "/officeFormPageCharge/associate/",
  dean: "/officeFormPageCharge/dean/",
};
const fetchOfficerData = async () => {
  try {
    const responseOffice = await api.get("/allForms");
    // ตรวจสอบว่ามีข้อมูลก่อน
    if (!responseOffice.data || !Array.isArray(responseOffice.data)) {
      console.log("Invalid forms data");
      return;
    }
    // ค้นหาทุก form ที่ตรงกับเงื่อนไข
    // กรองข้อมูลตาม user role
    let filteredForms = responseOffice.data.filter((form) => {
      if (userStore.user.user_role === "hr") {
        console.log("userStore.user.user_role", userStore.user.user_role);
        return form.form_status === "hr";
      }
      if (userStore.user.user_role === "research") {
        console.log("userStore.user.user_role", userStore.user.user_role);
        return form.form_status === "research";
      }
      if (userStore.user.user_role === "finance") {
        return form.form_status === "finance" || form.form_status === "pending";
      }
      if (userStore.user.user_role === "associate") {
        return form.form_status === "associate";
      }
      if (userStore.user.user_role === "dean") {
        return form.form_status === "dean";
      }
      return false;
    });

    listForm.forms = filteredForms;
    
  } catch (error) {
    console.log("Error fetching Officer data:", error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(async () => {
  fetchOfficerData();
  if (!userStore.user) {
    await userStore.fetchUser();
  }
});
</script>
