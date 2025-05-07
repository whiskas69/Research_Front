<template>
  <div class="Main">
    <!-- Main in page -->
    <div class="container my-10 mx-auto">
      <p class="text-xl font-bold pb-5">เอกสารที่ต้องการยื่น</p>
      <!-- box first -->
      <!-- {{ userStore.user }} -->
      <!-- {{ data.approvedConfer }} -->
      <div
        class="my-5 py-2 border border-[#D9D9D9] rounded-md text-black hover:cursor-pointer"
        :class="{
          'hover:cursor-pointer': data.approvedConfer < 2,
          'opacity-50 pointer-events-none': data.approvedConfer >= 2,
        }"
      >
        <router-link v-if="data.approvedConfer < 2" to="/formConfer">
          <p class="text-base px-5 py-1">
            ขออนุมัติเดินทางไปเผยแพร่ผลงานในการประชุมทางวิชาการ
          </p>
        </router-link>
        <p v-else class="text-base px-5 py-1">
          ขออนุมัติเดินทางไปเผยแพร่ผลงานในการประชุมทางวิชาการ
          <span class="flex justify-end text-red-600">ยื่นขอรับการสนับสนุนครบ 2 ครั้ง</span>
        </p>
      </div>
      <div
        class="my-5 py-2 border border-[#D9D9D9] rounded-md text-black hover:cursor-pointer"
      >
        <router-link to="/formPC">
          <p class="text-base px-5 py-1">
            ขออนุมัติค่า Page Charge
            เพื่อตีพิมพ์ผลงานในวารสารวิชาการระดับนานาชาติ
          </p>
        </router-link>
      </div>
      <div
        class="my-5 py-2 border border-[#D9D9D9] rounded-md text-black hover:cursor-pointer"
      >
        <router-link to="/formKris">
          <p class="text-base px-5 py-1">
            แบบเสนอโครงการวิจัย ทุนวิจัยส่งเสริมส่วนงานวิชาการ
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, computed } from "vue";
import { useUserStore } from "@/store/userStore";
import { useRouter } from "vue-router";
import api from "@/setting/api";

const data = reactive({
  id: "",
  approvedConfer: 0,
});

const router = useRouter();

const userStore = useUserStore();
const user = computed(() => userStore.user);

if (!userStore.user.user_signature) {
  alert("กรุณาอัปโหลดลายเซ้นต์");
  router.push("/profile");
}

const getDataMoney = async () => {
  console.log("id", data.id);
  const res = await api.get(`/sumBudgets/${user.value?.user_id}`);
  console.log("res", res.data);
  data.approvedConfer = res.data.sumConfer.length;
  console.log("data.approvedConfer", data.approvedConfer);
};

onMounted(async () => {
  if (!userStore.user) {
    await userStore.fetchUser();
  }
  await userStore.fetchUser();
  data.id = user.value?.user_id;
  await getDataMoney();
});
</script>
