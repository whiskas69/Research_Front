<template>
  <div class="Main">
    <div class="container my-10 mx-auto">
      <p class="text-xl font-bold mb-5">เอกสารต้องตรวจสอบ</p>

      <!-- Loop forms ทั้งหมด -->
      <div v-for="form in listForm.forms" :key="form.form_id">
        <!-- Conference -->
        <div v-if="form.form_type == 'Conference'">
          <div v-if="userStore.user.user_role === 'hr'">
            <router-link :to="`/officFormConfer/hr/${form.conf_id}`">
              <div
                class="my-5 py-2 border border-[#D9D9D9] rounded-md text-black hover:cursor-pointer"
              >
                <p class="flex justify-between px-5 py-1 text-left">
                  <span class="text-base">{{
                    getNameById(listForm.nameC, form.conf_id)
                  }}</span>
                  <span class="text-base text-[#868181]"
                    >ขออนุมัติเดินทางไปประชุมวิชาการ</span
                  >
                </p>
              </div>
            </router-link>
          </div>

          <div v-if="userStore.user.user_role === 'research'">
            <router-link :to="`/officFormConfer/research/${form.conf_id}`">
              <div
                class="my-5 py-2 border border-[#D9D9D9] rounded-md text-black hover:cursor-pointer"
              >
                <p class="flex justify-between px-5 py-1 text-left">
                  <span class="text-base">{{
                    getNameById(listForm.nameC, form.conf_id)
                  }}</span>
                  <span class="text-base text-[#868181]"
                    >ขออนุมัติเดินทางไปประชุมวิชาการ</span
                  >
                </p>
              </div>
            </router-link>
          </div>

          <div v-if="userStore.user.user_role === 'finance'">
            <router-link :to="`/officFormConfer/finance/${form.conf_id}`">
              <div
                class="my-5 py-2 border border-[#D9D9D9] rounded-md text-black hover:cursor-pointer"
              >
                <p class="flex justify-between px-5 py-1 text-left">
                  <span class="text-base">{{
                    getNameById(listForm.nameC, form.conf_id)
                  }}</span>
                  <span class="text-base text-[#868181]"
                    >ขออนุมัติเดินทางไปประชุมวิชาการ</span
                  >
                </p>
              </div>
            </router-link>
          </div>

          <div v-if="userStore.user.user_role === 'associate'">
            <router-link :to="`/officFormConfer/associate/${form.conf_id}`">
              <div
                class="my-5 py-2 border border-[#D9D9D9] rounded-md text-black hover:cursor-pointer"
              >
                <p class="flex justify-between px-5 py-1 text-left">
                  <span class="text-base">{{
                    getNameById(listForm.nameC, form.conf_id)
                  }}</span>
                  <span class="text-base text-[#868181]"
                    >ขออนุมัติเดินทางไปประชุมวิชาการ</span
                  >
                </p>
              </div>
            </router-link>
          </div>

          <div v-if="userStore.user.user_role === 'dean'">
            <router-link :to="`/officFormConfer/dean/${form.conf_id}`">
              <div
                class="my-5 py-2 border border-[#D9D9D9] rounded-md text-black hover:cursor-pointer"
              >
                <p class="flex justify-between px-5 py-1 text-left">
                  <span class="text-base">{{
                    getNameById(listForm.nameC, form.conf_id)
                  }}</span>
                  <span class="text-base text-[#868181]"
                    >ขออนุมัติเดินทางไปประชุมวิชาการ</span
                  >
                </p>
              </div>
            </router-link>
          </div>
        </div>

        <!-- Page Charge -->
        <div v-if="form.form_type == 'Page_Charge'">
          <div v-if="userStore.user.user_role === 'research'">
            <router-link :to="`/officFormPC/research/${form.pageC_id}`">
              <div
                class="my-5 py-2 border border-[#D9D9D9] rounded-md text-black hover:cursor-pointer"
              >
                <p class="flex justify-between px-5 py-1 text-left">
                  <span>
                    <span class="text-base">{{
                      getNameById(listForm.nameP, form.pageC_id)
                    }}</span>
                    <span class="text-sm px-2 text-red-900">
                      ({{ getFileById(listForm.nameP, form.pageC_id) }})</span
                    >
                  </span>
                  <span class="text-base text-[#868181]"
                    >ขออนุมัติค่า Page Charge</span
                  >
                </p>
              </div>
            </router-link>
          </div>

          <div v-if="userStore.user.user_role === 'finance'">
            <router-link :to="`/officFormPC/finance/${form.pageC_id}`">
              <div
                class="my-5 py-2 border border-[#D9D9D9] rounded-md text-black hover:cursor-pointer"
              >
                <p class="flex justify-between px-5 py-1 text-left">
                  <span>
                    <span class="text-base">{{
                      getNameById(listForm.nameP, form.pageC_id)
                    }}</span>
                    <span class="text-sm px-2 text-red-900">
                      ({{ getFileById(listForm.nameP, form.pageC_id) }})</span
                    >
                  </span>
                  <span class="text-base text-[#868181]"
                    >ขออนุมัติค่า Page Charge</span
                  >
                </p>
              </div>
            </router-link>
          </div>

          <div v-if="userStore.user.user_role === 'associate'">
            <router-link :to="`/officFormPC/associate/${form.pageC_id}`">
              <div
                class="my-5 py-2 border border-[#D9D9D9] rounded-md text-black hover:cursor-pointer"
              >
                <p class="flex justify-between px-5 py-1 text-left">
                  <span>
                    <span class="text-base">{{
                      getNameById(listForm.nameP, form.pageC_id)
                    }}</span>
                    <span class="text-sm px-2 text-red-900">
                      ({{ getFileById(listForm.nameP, form.pageC_id) }})</span
                    >
                  </span>
                  <span class="text-base text-[#868181]"
                    >ขออนุมัติค่า Page Charge</span
                  >
                </p>
              </div>
            </router-link>
          </div>

          <div v-if="userStore.user.user_role === 'dean'">
            <router-link :to="`/officFormPC/dean/${form.pageC_id}`">
              <div
                class="my-5 py-2 border border-[#D9D9D9] rounded-md text-black hover:cursor-pointer"
              >
                <p class="flex justify-between px-5 py-1 text-left">
                  <span>
                    <span class="text-base">{{
                      getNameById(listForm.nameP, form.pageC_id)
                    }}</span>
                    <span class="text-sm px-2 text-red-900">
                      ({{ getFileById(listForm.nameP, form.pageC_id) }})</span
                    >
                  </span>
                  <span class="text-base text-[#868181]"
                    >ขออนุมัติค่า Page Charge</span
                  >
                </p>
              </div>
            </router-link>
          </div>
        </div>

        <!-- Research_KRIS -->
        <div v-if="form.form_type == 'Research_KRIS'">
          <router-link :to="`/officFormKris/research/${form.kris_id}`">
            <div
              class="my-5 py-2 border border-[#D9D9D9] rounded-md text-black hover:cursor-pointer"
            >
              <p class="flex justify-between px-5 py-1 text-left">
                <span class="text-base">{{
                  getNameById(listForm.nameK, form.kris_id)
                }}</span>
                <span class="text-base text-[#868181]"
                  >แบบเสนอโครงการวิจัย</span
                >
              </p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from "vue";
import { useUserStore } from "@/store/userStore";
import api from "@/setting/api";
import { useRouter } from "vue-router";

const router = useRouter();

const userStore = useUserStore();
const listForm = reactive({
  forms: [],
  nameC: [],
  nameP: [],
  nameK: [],
});

if (!userStore.user.user_signature) {
  alert("กรุณาอัปโหลดลายเซ็น");
  router.push("/profile");
}

const isLoading = ref(true);
const fetchOfficerData = async () => {
  try {
    const responseOffice = await api.get("/formsOffice");
    // ตรวจสอบว่ามีข้อมูลก่อน
    if (
      !responseOffice.data.forms ||
      !Array.isArray(responseOffice.data.forms)
    ) {
      console.log("Invalid forms data");
      return;
    }
    // ค้นหาทุก form ที่ตรงกับเงื่อนไข
    // กรองข้อมูลตาม user role
    let filteredForms = responseOffice.data.forms.filter((form) => {
      if (userStore.user.user_role === "hr") {
        return form.form_status === "hr";
      }
      if (userStore.user.user_role === "research") {
        return form.form_status === "research";
      }
      if (userStore.user.user_role === "finance") {
        return form.form_status === "finance";
      }
      if (userStore.user.user_role === "associate") {
        return form.form_status === "associate";
      }
      if (userStore.user.user_role === "dean") {
        return form.form_status === "dean";
      }
      return false;
    });
    for (let i = 0; i < filteredForms.length; i++) {
      if (filteredForms.length > 0) {
        if (filteredForms[i].edit_data == "" || filteredForms[i].edit_data == null) {
          listForm.forms.push(filteredForms[i]);
          listForm.nameC = responseOffice.data.confer;
          listForm.nameP = responseOffice.data.pageC;
          listForm.nameK = responseOffice.data.kris;
        } else if (filteredForms[i].professor_reedit === true && filteredForms[i].edit_data !== "") {
          listForm.forms.push(filteredForms[i]);
          listForm.nameC = responseOffice.data.confer;
          listForm.nameP = responseOffice.data.pageC;
          listForm.nameK = responseOffice.data.kris;
        }
      }
    }
  } catch (error) {
    console.log("Error fetching Officer data:", error);
  } finally {
    isLoading.value = false;
  }
};

// ฟังก์ชันสำหรับดึงชื่อจาก nameC, nameP หรือ nameK
const getNameById = (nameList, id) => {
  const nameObj = nameList.find((item) => item[0] === id);
  return nameObj ? nameObj[1].user_nameth : "ไม่พบชื่อ";
};
const getFileById = (file, id) => {
  const fileObj = file.find((item) => item[0] === id);
  console.log("fileObj", fileObj);
  return fileObj[1].accepted ? "มีจดหมายตอบรับ" : "ไม่มีจดหมายตอบรับ";
};
onMounted(async () => {
  fetchOfficerData();
  if (!userStore.user) {
    await userStore.fetchUser();
  }
});
</script>
