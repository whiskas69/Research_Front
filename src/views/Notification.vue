<template>
  <div class="container my-10 mx-auto">
    <div class="text-2xl font-bold mb-5">การแจ้งเตือน</div>
    <div
      v-if="formData.My_Notification.length ||
        formData.Officer_Notification.length ||
        formData.HRorResearch_Notification.length
      "
    >
      <div v-if="formData.My_Notification.length">
        <div
          v-for="(noti, index) in formData.My_Notification"
          :key="index"
          class="my-2 py-2 border border-[#D9D9D9] rounded-md text-black hover:cursor-pointer"
        >
          <div
            v-if="noti.form_type === 'Research_KRIS' && noti.edit_data == null"
          >
            <div class="flex flex-col my-1 mx-5">
              <p class="mb-1 font-semibold text-lg">แบบเสนอโครงการวิจัย</p>
              <p>ชื่องานวิจัย : {{ noti.name_form }}</p>
              <p>สถานะ : {{ noti.form_status }}</p>
              <p>เจ้าของแบบฟอร์ม: {{ noti.user_nameth }}</p>
              <p>อัปเดตเมื่อ: {{ formatDate(noti.date_update) }}</p>
            </div>
          </div>

          <div v-if="noti.form_type === 'Conference' && noti.edit_data == null">
            <div class="flex flex-col my-1 mx-5">
              <p class="mb-1 font-semibold text-lg">
                ขออนุมัติเดินทางไปเผยแพร่ผลงานในการประชุมทางวิชาการ
              </p>
              <p>ชื่อบทความ : {{ noti.name_form }}</p>
              <p>สถานะ : {{ noti.form_status }}</p>
              <p>เจ้าของแบบฟอร์ม: {{ noti.user_nameth }}</p>
              <p>อัปเดตเมื่อ: {{ formatDate(noti.date_update) }}</p>
            </div>
          </div>

          <div
            v-if="noti.form_type === 'Page_Charge' && noti.edit_data == null"
          >
            <div class="flex flex-col my-1 mx-5">
              <p class="mb-1 font-semibold text-lg">
                ขออนุมัติค่า Page Charge
                เพื่อตีพิมพ์ผลงานในวารสารวิชาการระดับนานาชาติ
              </p>
              <p>ชื่อบทความ : {{ noti.name_form }}</p>
              <p>สถานะ : {{ noti.form_status }}</p>
              <p>เจ้าของแบบฟอร์ม: {{ noti.user_nameth }}</p>
              <p>อัปเดตเมื่อ: {{ formatDate(noti.date_update) }}</p>
            </div>
          </div>

          <div v-if="noti.form_type === 'Research_KRIS' && noti.edit_data">
            <div class="flex flex-col my-1 mx-5">
              <p class="mb-1 font-semibold text-lg">
                แบบเสนอโครงการวิจัย (มีการแก้ไข)
              </p>
              <p>ชื่องานวิจัย : {{ noti.name_form }}</p>
              <p>สถานะ : {{ noti.form_status }}</p>
              <p>เจ้าของแบบฟอร์ม: {{ noti.user_nameth }}</p>
              <p>อัปเดตเมื่อ: {{ formatDate(noti.date_update) }}</p>
            </div>
          </div>

          <div v-if="noti.form_type === 'Conference' && noti.edit_data">
            <div class="flex flex-col my-1 mx-5">
              <p class="mb-1 font-semibold text-lg">
                ขออนุมัติเดินทางไปเผยแพร่ผลงานในการประชุมทางวิชาการ (มีการแก้ไข)
              </p>
              <p>ชื่อบทความ : {{ noti.name_form }}</p>
              <p>สถานะ : {{ noti.form_status }}</p>
              <p>เจ้าของแบบฟอร์ม: {{ noti.user_nameth }}</p>
              <p>อัปเดตเมื่อ: {{ formatDate(noti.date_update) }}</p>
            </div>
          </div>

          <div v-if="noti.form_type === 'Page_Charge' && noti.edit_data">
            <div class="flex flex-col my-1 mx-5">
              <p class="mb-1 font-semibold text-lg">
                ขออนุมัติค่า Page Charge
                เพื่อตีพิมพ์ผลงานในวารสารวิชาการระดับนานาชาติ (มีการแก้ไข)
              </p>
              <p>ชื่อบทความ : {{ noti.name_form }}</p>
              <p>สถานะ : {{ noti.form_status }}</p>
              <p>เจ้าของแบบฟอร์ม: {{ noti.user_nameth }}</p>
              <p>อัปเดตเมื่อ: {{ formatDate(noti.date_update) }}</p>
            </div>
          </div>
        </div>
      </div>

      <div v-if="formData.Officer_Notification.length">
        <div
          v-for="(noti, index) in formData.Officer_Notification"
          :key="index"
          class="my-2 py-2 border border-[#D9D9D9] rounded-md text-black hover:cursor-pointer"
        >
          <div v-if="noti.form_type === 'Research_KRIS'">
            <div class="flex flex-col my-1 mx-5">
              <p class="mb-1 font-semibold text-lg">แบบเสนอโครงการวิจัย</p>
              <p>ชื่องานวิจัย : {{ noti.name_form }}</p>
              <p>สถานะ : {{ noti.form_status }}</p>
              <p>เจ้าของแบบฟอร์ม: {{ noti.user_nameth }}</p>
              <p>อัปเดตเมื่อ: {{ formatDate(noti.date_update) }}</p>
            </div>
          </div>

          <div v-if="noti.form_type === 'Conference'">
            <div class="flex flex-col my-1 mx-5">
              <p class="mb-1 font-semibold text-lg">
                ขออนุมัติเดินทางไปเผยแพร่ผลงานในการประชุมทางวิชาการ
              </p>
              <p>ชื่อบทความ : {{ noti.name_form }}</p>
              <p>สถานะ : {{ noti.form_status }}</p>
              <p>เจ้าของแบบฟอร์ม: {{ noti.user_nameth }}</p>
              <p>อัปเดตเมื่อ: {{ formatDate(noti.date_update) }}</p>
            </div>
          </div>

          <div v-if="noti.form_type === 'Page_Charge'">
            <div class="flex flex-col my-1 mx-5">
              <p class="mb-1 font-semibold text-lg">
                ขออนุมัติค่า Page Charge
                เพื่อตีพิมพ์ผลงานในวารสารวิชาการระดับนานาชาติ
              </p>
              <p>ชื่อบทความ : {{ noti.name_form }}</p>
              <p>สถานะ : {{ noti.form_status }}</p>
              <p>เจ้าของแบบฟอร์ม: {{ noti.user_nameth }}</p>
              <p>อัปเดตเมื่อ: {{ formatDate(noti.date_update) }}</p>
            </div>
          </div>
        </div>
      </div>

      <div v-if="formData.HRorResearch_Notification.length">
        <div
          v-for="(noti, index) in formData.HRorResearch_Notification"
          :key="index"
          class="my-2 py-2 border border-[#D9D9D9] rounded-md text-black hover:cursor-pointer"
        >
          <div v-if="noti.form_type === 'Research_KRIS'">
            <div class="flex flex-col my-1 mx-5">
              <p class="mb-1 font-semibold text-lg">แบบเสนอโครงการวิจัย</p>
              <p>ชื่องานวิจัย : {{ noti.name_form }}</p>
              <p>สถานะ : {{ noti.form_status }}</p>
              <p>เจ้าของแบบฟอร์ม: {{ noti.user_nameth }}</p>
              <p>อัปเดตเมื่อ: {{ formatDate(noti.date_update) }}</p>
            </div>
          </div>

          <div v-if="noti.form_type === 'Conference'">
            <div class="flex flex-col my-1 mx-5">
              <p class="mb-1 font-semibold text-lg">
                ขออนุมัติเดินทางไปเผยแพร่ผลงานในการประชุมทางวิชาการ
              </p>
              <p>ชื่อบทความ : {{ noti.name_form }}</p>
              <p>สถานะ : {{ noti.form_status }}</p>
              <p>เจ้าของแบบฟอร์ม: {{ noti.user_nameth }}</p>
              <p>อัปเดตเมื่อ: {{ formatDate(noti.date_update) }}</p>
            </div>
          </div>

          <div v-if="noti.form_type === 'Page_Charge'">
            <div class="flex flex-col my-1 mx-5">
              <p class="mb-1 font-semibold text-lg">
                ขออนุมัติค่า Page Charge
                เพื่อตีพิมพ์ผลงานในวารสารวิชาการระดับนานาชาติ
              </p>
              <p>ชื่อบทความ : {{ noti.name_form }}</p>
              <p>สถานะ : {{ noti.form_status }}</p>
              <p>เจ้าของแบบฟอร์ม: {{ noti.user_nameth }}</p>
              <p>อัปเดตเมื่อ: {{ formatDate(noti.date_update) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <p v-else class="bg-base-100 border-base-300 my-1 py-6">
      คุณไม่มีการแจ้งเตือนในขณะนี้
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from "vue";
import { useRouter } from "vue-router";
import { DateTime } from "luxon";

import api from "@/setting/api";
import { useUserStore } from "@/store/userStore";

const router = useRouter();

const userStore = useUserStore();

const formData = ref({
  My_Notification: [],
  Notification: [],
  Officer_Notification: [],
  HRorResearch_Notification: [],
});

const formatDate = (dateStr) => {
  return DateTime.fromISO(dateStr).toFormat("dd-MM-yyyy");
};

const getNotification = async () => {
  try {
    const response = await api.get("/notification");

    const allNotifications = response.data;

    const currentUserId = userStore.user?.user_id;
    const currentUserRole = userStore.user?.user_role;

    const filteredNotifications = allNotifications.filter(
      (noti) => noti.user_id === currentUserId
    );

    const roleToStatusMap = {
      hr: "ฝ่ายบริหารทรัพยากรบุคคล",
      research: "ฝ่ายบริหารงานวิจัย",
      finance: "ฝ่ายบริหารการเงิน",
      associate: "รองคณบดี",
      dean: "คณบดี",
    };

    const officerStatus = roleToStatusMap[currentUserRole];

    const officerNotifications = allNotifications.filter(
      (noti) => noti.form_status === officerStatus
    );

    const HRorResearchNotifications = allNotifications.filter((noti) => {
      return (
        (currentUserRole === "research" &&
          (noti.form_status === "Research_KRIS" ||
            noti.form_status === "Conference")) ||
        (currentUserRole === "hr" && noti.form_status === "Page_Charge")
      );
    });

    // อัปเดตค่าใน formData
    formData.value.Notification = allNotifications;
    formData.value.My_Notification = filteredNotifications;
    formData.value.Officer_Notification = officerNotifications;
    formData.value.HRorResearch_Notification = HRorResearchNotifications;
  } catch (error) {
    console.error("Error fetching notifications:", error);
  }
};

onMounted(async () => {
  await userStore.fetchUser(); // โหลดข้อมูลผู้ใช้
  await getNotification(); // โหลดการแจ้งเตือน
});
</script>
