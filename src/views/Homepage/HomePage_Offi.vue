<script setup>
import { ref, onMounted, reactive } from "vue";
import axios from "axios";

const listForm = reactive({
  forms: [],
  nameC: [],
  nameP: [],
  nameK: [],
});

const isLoading = ref(true);

const fetchOfficerData = async () => {
  try {
    const responseOffice = await axios.get("http://localhost:3000/formsOffice");
    listForm.forms = responseOffice.data.forms;
    listForm.nameC = responseOffice.data.confer;
    listForm.nameP = responseOffice.data.pageC;
    listForm.nameK = responseOffice.data.kris;
  } catch (error) {
    console.error("Error fetching Officer data:", error);
  } finally {
    isLoading.value = false;
  }
};

// ฟังก์ชันสำหรับดึงชื่อจาก nameC, nameP หรือ nameK
const getNameById = (nameList, id) => {
  const nameObj = nameList.find((item) => item[0] === id);
  return nameObj ? nameObj[1].user_nameeng : "ไม่พบชื่อ";
};

onMounted(() => {
  fetchOfficerData();
});
</script>


<template>
  <div class="Main">
    <div class="container my-10 mx-auto">
      <p class="text-xl font-bold pb-5">เอกสารต้องตรวจตอบ</p>

      <!-- Loop forms ทั้งหมด -->
      <div v-for="form in listForm.forms" :key="form.form_id">
        
        <!-- Conference -->
        <div v-if="form.form_type == 'Conference'">
          <router-link :to="`/officFormConfer/${form.conf_id}`">
            <div class="my-5 py-2 border border-[#D9D9D9] rounded-md text-black hover:cursor-pointer">
              <p class="flex justify-between px-5 py-1 text-left">
                <span class="text-base">{{ getNameById(listForm.nameC, form.conf_id) }}</span>
                <span class="text-base text-[#868181]">ขออนุมัติเดินทางไปประชุมวิชาการ</span>
              </p>
            </div>
          </router-link>
        </div>

        <!-- Page Charge -->
        <div v-if="form.form_type == 'Page_Charge'">
          <router-link :to="`/officFormPC/${form.pageC_id}`">
            <div class="my-5 py-2 border border-[#D9D9D9] rounded-md text-black hover:cursor-pointer">
              <p class="flex justify-between px-5 py-1 text-left">
                <span class="text-base">{{ getNameById(listForm.nameP, form.pageC_id) }}</span>
                <span class="text-base text-[#868181]">ขออนุมัติค่า Page Charge</span>
              </p>
            </div>
          </router-link>
        </div>

        <!-- Research_KRIS -->
        <div v-if="form.form_type == 'Research_KRIS'">
          <router-link :to="`/officFormKris/${form.kris_id}`">
            <div class="my-5 py-2 border border-[#D9D9D9] rounded-md text-black hover:cursor-pointer">
              <p class="flex justify-between px-5 py-1 text-left">
                <span class="text-base">{{ getNameById(listForm.nameK, form.kris_id) }}</span>
                <span class="text-base text-[#868181]">แบบเสนอโครงการวิจัย</span>
              </p>
            </div>
          </router-link>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
// export default {

// }
</script>

<style lang="scss" scoped></style>
