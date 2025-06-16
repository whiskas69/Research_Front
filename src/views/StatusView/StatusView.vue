<template>
  <div class="container my-10 mx-auto">
    <h1 class="text-xl font-bold mb-5">สถานะเอกสาร</h1>
    <!-- {{ data.allForm }} -->
    <div v-for="form in data.allForm" :key="form.form_id">
      <div
        class="p-5 shadow m-5 rounded-xl hover:cursor-pointer mb-2"
        v-if="form.form_type == 'Research_KRIS'"
      >
        <router-link :to="`/status/Kris/${form.kris_id}`">
          <div class="columns-2 mt-2 ml-5">
            <h2 class="text-lg font-bold">
              แบบเสนอโครงการวิจัย ทุนวิจัยส่งเสริมส่วนงานวิชาการ
            </h2>
            <div class="flex justify-end items-center">
              <span :class="{ red: isLessThanOneDay(form.deadlineDate) }">
                เหลือเวลา: {{ getCountdown(form.deadlineDate) }}
              </span>
            </div>
          </div>
          <div class="columns-2 mt-2 ml-5">
            <div>
              <div class="flex">
                <h4 class="mr-5">
                  ชื่อโครงการวิจัย : {{ form.article_title }}
                </h4>
              </div>
              <div class="flex justify-end items-center">
                <p class="text-yellow-500 mr-5">สถานะ{{ form.form_status }}</p>
              </div>
            </div>
          </div>
        </router-link>
      </div>

      <div
        class="p-5 shadow m-5 rounded-xl hover:cursor-pointer mb-2"
        v-if="form.form_type == 'Conference'"
      >
        <router-link :to="`/status/Conference/${form.conf_id}`">
          <div class="columns-2 mt-2 ml-5">
            <h2 class="text-lg font-bold">
              ขออนุมัติเดินทางไปเผยแพร่ผลงานในการประชุมทางวิชาการ
            </h2>
            <div class="flex justify-end items-center">
              <span :class="{ red: isLessThanOneDay(form.deadlineDate) }">
                เหลือเวลา: {{ getCountdown(form.deadlineDate) }}
              </span>
            </div>
          </div>
          <div class="columns-2 mt-2 ml-5">
            <div>
              <div class="flex">
                <h4 class="mr-5">ชื่องานประชุม : {{ form.article_name }}</h4>
              </div>
              <div class="flex">
                <h4 class="mr-5">ชื่อบทความ : {{ form.article_title }}</h4>
              </div>
              <div class="flex justify-end h-20 items-center">
                <p class="text-yellow-500 mr-5">สถานะ{{ form.form_status }}</p>
              </div>
            </div>
          </div>
        </router-link>
      </div>

      <div
        class="p-5 shadow m-5 rounded-xl hover:cursor-pointer mb-2"
        v-if="form.form_type == 'Page_Charge'"
      >
        <router-link :to="`/status/PageCharge/${form.pageC_id}`">
          <div class="columns-2 mt-2 ml-5">
            <h2 class="text-lg font-bold">
              ขออนุมัติค่า Page
            Chargeเพื่อตีพิมพ์ผลงานในวารสารวิชาการระดับนานาชาติ
            </h2>
            <div class="flex justify-end items-center">
              <span :class="{ red: isLessThanOneDay(form.deadlineDate) }">
                เหลือเวลา: {{ getCountdown(form.deadlineDate) }}
              </span>
            </div>
          </div>
          <div class="columns-2 mt-2 ml-5">
            <div>
              <div class="flex">
                <h4 class="mr-5">ชื่อวารสาร : {{ form.article_name }}</h4>
              </div>
              <div class="flex">
                <h4 class="mr-5">ชื่อบทความ : {{ form.article_title }}</h4>
              </div>
              <div class="flex justify-end h-20 items-center">
                <p class="text-yellow-500 mr-5">สถานะ{{ form.form_status }}</p>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, reactive } from "vue";
import { useUserStore } from "@/store/userStore";
import api from "@/setting/api";

const data = reactive({
  userID: "",
  userRole: "",
  allForm: "",
});

const userStore = useUserStore();
const user = computed(() => userStore.user);

//pull data
const pulldata = async () => {
  try {
    const res = await api.get(`/form/${data.userID}`);
    const filteredForms = res.data.filter(
      (form) =>
        form.form_status != "approved" && form.form_status != "notApproved"
    );

    data.allForm = filteredForms;
    console.log("data.allForm", data.allForm);

    for (let i = 0; i < data.allForm.length; i++) {
      console.log("date", [i], data.allForm[i].doc_submit_date);
      const originalDate = new Date(data.allForm[i].doc_submit_date);
      console.log("originalDate", originalDate);
      originalDate.setDate(originalDate.getDate() + 7);

      const dd = String(originalDate.getDate()).padStart(2, "0");
      const mm = String(originalDate.getMonth() + 1).padStart(2, "0"); // Months are 0-based
      const yy = String(originalDate.getFullYear() + 543);
      console.log("daetline", `${dd}-${mm}-${yy}`);
      data.allForm[i].daetline = `${dd}-${mm}-${yy}`;
      data.allForm[i].deadlineDate = originalDate;
    }
  } catch (error) {
    console.log(error);
  }
};

const getCountdown = (deadlineDate) => {
  const now = new Date().getTime();
  const distance = deadlineDate.getTime() - now;

  if (distance <= 0) return "หมดเวลาแล้ว";

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

const isLessThanOneDay = (deadlineDate) => {
  const now = new Date().getTime();
  const distance = deadlineDate.getTime() - now;
  return distance <= 24 * 60 * 60 * 1000 && distance > 0;
};

onMounted(async () => {
  setInterval(() => {
    if (Array.isArray(data.allForm)) {
      data.allForm = [...data.allForm];
    }
  }, 1000);

  await userStore.fetchUser();
  data.userID = user.value?.user_id;
  await pulldata();
});
</script>

<style scoped>
.red {
  color: red;
  font-weight: bold;
}
</style>
