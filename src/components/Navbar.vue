<template>
  <div class="navbar bg-base-100 px-14 py-1 shadow-sm sticky top-0 z-40">
    <!-- logo -->
    <div class="start mr-5">
      <div v-if="!userStore.user">
        <router-link to="/">
          <img
            class="flex-auto max-w-14 w-24"
            src="https://scholar.it.kmitl.ac.th/images/it-kmitl.png"
            alt="IT KMITL"
          />
        </router-link>
      </div>

      <div v-else-if="userStore.user">
        <div v-if="userStore.user.user_role == 'professor'">
          <router-link to="/homepage">
            <img
              class="flex-auto max-w-14 w-24"
              src="https://scholar.it.kmitl.ac.th/images/it-kmitl.png"
              alt="IT KMITL"
            />
          </router-link>
        </div>

        <div
          v-else-if="
            userStore.user.user_role == 'hr' ||
            userStore.user.user_role == 'research' ||
            userStore.user.user_role == 'finance'
          "
        >
          <router-link to="/Officer">
            <img
              class="flex-auto max-w-14 w-24"
              src="https://scholar.it.kmitl.ac.th/images/it-kmitl.png"
              alt="IT KMITL"
            />
          </router-link>
        </div>

        <div
          v-else-if="
            userStore.user.user_role == 'associate' ||
            userStore.user.user_role == 'dean'
          "
        >
          <router-link to="/Officer">
            <img
              class="flex-auto max-w-14 w-24"
              src="https://scholar.it.kmitl.ac.th/images/it-kmitl.png"
              alt="IT KMITL"
            />
          </router-link>
        </div>

        <div v-else-if="userStore.user.user_role == 'admin'">
          <router-link to="/admin">
            <img
              class="flex-auto max-w-14 w-24"
              src="https://scholar.it.kmitl.ac.th/images/it-kmitl.png"
              alt="IT KMITL"
            />
          </router-link>
        </div>
      </div>
    </div>

    <!-- menu -->
    <div class="flex-auto w-full flex-row">
      <ul class="menu menu-horizontal px-5 flex">
        <div v-if="userStore.user" class="flex flex-row">
          <li
            v-if="
              userStore.user.user_role != 'professor' &&
              userStore.user.user_role != 'admin'
            "
            class="justify-center"
          >
            <router-link to="/homepage">ยื่นเอกสาร</router-link>
          </li>

          <ul
            class="menu menu-horizontal justify-center"
            v-if="userStore.user.user_role != 'admin'"
          >
            <li>
              <details>
                <summary>สถานะเอกสาร</summary>
                <ul class="bg-base-100 rounded-t-none px-1 w-full">
                  <li>
                    <router-link to="/mystatus">สถานะเอกสาร</router-link>
                  </li>
                  <li>
                    <router-link to="/myhistory">ประวัติการยื่น</router-link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>

          <div
            v-if="
              userStore.user.user_role == 'hr' ||
              userStore.user.user_role == 'research'
            "
            class="flex flex-row"
          >
            <ul class="menu menu-horizontal justify-center">
              <li>
                <details>
                  <summary>สถานะเอกสารที่รับผิดชอบ</summary>
                  <ul class="bg-base-100 rounded-t-none px-1 w-full">
                    <li>
                      <router-link to="/statusOffice">สถานะเอกสาร</router-link>
                    </li>
                    <li>
                      <router-link to="/historyOffice"
                        >ประวัติเอกสาร</router-link
                      >
                    </li>
                  </ul>
                </details>
              </li>
              <li class="flex justify-center items-center">
                <router-link to="/eoffice">เอกสารที่รอการอนุมัติ</router-link>
              </li>
            </ul>
          </div>

          <div
            class="flex justify-center"
            v-if="
              userStore.user.user_role == 'hr' ||
              userStore.user.user_role == 'research' ||
              userStore.user.user_role == 'finance' ||
              userStore.user.user_role == 'associate' ||
              userStore.user.user_role == 'dean'
            "
          >
            <li class="flex justify-center items-center">
              <router-link to="/allhistory">เอกสารที่อนุมัติแล้ว</router-link>
            </li>
          </div>
        </div>

        <li class="justify-center">
          <router-link to="/">สรุปผลแบบสถิติ</router-link>
        </li>
      </ul>
    </div>

    <!-- end -->
    <div class="flex flex-auto justify-end">
      <div v-if="userStore.user && userStore.user.user_role != 'admin'">
        <div v-if="userStore.user.user_role == 'professor'">
          <div
            class="dropdown dropdown-bottom dropdown-end"
            @click="updateNotificationsPro"
          >
            <div tabindex="0" role="button" class="btn">
              <span
                class="absolute top-0 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-s font-bold text-white"
                v-if="filteredNotificationCount > 0"
              >
                {{ filteredNotificationCount }}
              </span>
              <i class="color-black text-xl fa fa-bell"></i>
            </div>

            <ul
              tabindex="0"
              class="dropdown-content menu bg-base-100 rounded-box z-1 w-max p-2 shadow-sm"
            >
              <li
                v-for="item in list_notification.Pro_noti"
                :key="item.noti_id"
              >
                <div
                  class="flex flex-col items-start border border-gray-200 my-1"
                  v-if="item.form_type == 'Research_KRIS'"
                >
                  <p>แบบเสนอโครงการวิจัย</p>
                  <p>ชื่องานวิจัย : {{ item.name_form }}</p>
                  <p>สถานะ : {{ item.form_status }}</p>
                </div>
                <div
                  class="flex flex-col items-start border border-gray-200 my-1"
                  v-if="item.form_type == 'Conference'"
                >
                  <p>ขออนุมัติเดินทางไปเผยแพร่ผลงานในการประชุมทางวิชาการ</p>
                  <p>ชื่อบทความ : {{ item.name_form }}</p>
                  <p>สถานะ : {{ item.form_status }}</p>
                </div>
                <div
                  class="flex flex-col items-start border border-gray-200 my-1"
                  v-if="item.form_type == 'Page_Charge'"
                >
                  <p>
                    ขออนุมัติค่า Page Charge
                    เพื่อตีพิมพ์ผลงานในวารสารวิชาการระดับนานาชาติ
                  </p>
                  <p>ชื่อบทความ : {{ item.name_form }}</p>
                  <p>สถานะ : {{ item.form_status }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div v-if="userStore.user.user_role != 'professor'">
          <div
            class="dropdown dropdown-bottom dropdown-end"
            @click="updateNotificationsOff"
          >
            <div tabindex="0" role="button" class="btn m-1">
              <span
                v-if="
                  filteredNotificationOfficerCount >
                  0
                "
                class="absolute top-0 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-s font-bold text-white"
              >
                {{
                  filteredNotificationOfficerCount
                }}
              </span>
              <i class="color-black text-xl fa fa-bell"></i>
            </div>

            <ul
              tabindex="0"
              class="dropdown-content menu bg-base-100 rounded-box z-1 w-max p-2 shadow-sm"
            >
              <li
                v-for="item in list_notification.Pro_noti"
                :key="item.noti_id"
              >
                <div
                  class="flex flex-col items-start border border-gray-200 my-1"
                  v-if="item.form_type == 'Research_KRIS'"
                >
                  <p>แบบเสนอโครงการวิจัย</p>
                  <p>ชื่องานวิจัย : {{ item.name_form }}</p>
                  <p>สถานะ : {{ item.form_status }}</p>
                </div>
                <div
                  class="flex flex-col items-start border border-gray-200 my-1"
                  v-if="item.form_type == 'Conference'"
                >
                  <p>ขออนุมัติเดินทางไปเผยแพร่ผลงานในการประชุมทางวิชาการ</p>
                  <p>ชื่อบทความ : {{ item.name_form }}</p>
                  <p>สถานะ : {{ item.form_status }}</p>
                </div>
                <div
                  class="flex flex-col items-start border border-gray-200 my-1"
                  v-if="item.form_type == 'Page_Charge'"
                >
                  <p>
                    ขออนุมัติค่า Page Charge
                    เพื่อตีพิมพ์ผลงานในวารสารวิชาการระดับนานาชาติ
                  </p>
                  <p>ชื่อบทความ : {{ item.name_form }}</p>
                  <p>สถานะ : {{ item.form_status }}</p>
                </div>
              </li>

              <li
                v-for="item in list_notification.Off_noti"
                :key="item.noti_id"
              >
                <div
                  class="flex flex-col items-start border border-gray-200 my-1"
                  v-if="item.form_type == 'Research_KRIS'"
                >
                  <p>แบบเสนอโครงการวิจัย</p>
                  <p>ผู้ส่ง : {{ item.user_nameth }}</p>
                  <p>ชื่องานวิจัย : {{ item.name_form }}</p>
                </div>
                <div
                  class="flex flex-col items-start border border-gray-200 my-1"
                  v-if="item.form_type == 'Conference'"
                >
                  <p>ขออนุมัติเดินทางไปเผยแพร่ผลงานในการประชุมทางวิชาการ</p>
                  <p>ผู้ส่ง : {{ item.user_nameth }}</p>
                  <p>ชื่อบทความ : {{ item.name_form }}</p>
                </div>
                <div
                  class="flex flex-col items-start border border-gray-200 my-1"
                  v-if="item.form_type == 'Page_Charge'"
                >
                  <p>
                    ขออนุมัติค่า Page Charge
                    เพื่อตีพิมพ์ผลงานในวารสารวิชาการระดับนานาชาติ
                  </p>
                  <p>ผู้ส่ง : {{ item.user_nameth }}</p>
                  <p>ชื่อบทความ : {{ item.name_form }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div v-if="!userStore.user">
      <router-link
        to="/login"
        class="btn w-full bg-[#4285F4] hover:bg-[#4285F4] text-white ml-10"
      >
        เข้าสู่ระบบ
      </router-link>
    </div>

    <div class="px-5" v-if="userStore.user">
      <ul class="menu menu-horizontal">
        <li>
          <details>
            <summary
              v-if="userStore.user.user_nameth"
              class="bg-[#4285F4] hover:bg-[#4285F4] py-[13px] text-white min-w-32"
            >
              {{ userStore.user.user_nameth }}
            </summary>
            <ul class="bg-base-100 rounded-t-none p-2 w-full">
              <li v-if="userStore.user.user_role != 'admin'">
                <router-link to="/profile">ข้อมูลส่วนตัว</router-link>
              </li>
              <li @click="logout">
                <router-link to="/">ออกจากระบบ</router-link>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, computed } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/store/userStore";
import api from "@/setting/api";

const router = useRouter();

const userStore = useUserStore();

const list_notification = reactive({
  user_role: "",
  Pro_noti: [],
  Off_noti: [],
});

const filteredNotificationCount = computed(() => {
  return list_notification.Pro_noti.filter((item) => {
    return item.is_read == 0;
  }).length;
});

const filteredNotificationOfficerCount = computed(() => {
  return list_notification.Off_noti.filter((item) => {
    return item.is_read == 0;
  }).length;
});

const fetchNotificationbyID = async () => {
  try {
    const mynotification = await api.get(
      `/notification/${userStore.user.user_id}`
    );

    // ตรวจสอบว่าข้อมูลเป็น Array ก่อนกรอง
    if (Array.isArray(mynotification.data)) {
      list_notification.Pro_noti = mynotification.data.filter(
        (item) =>
          !(
            (item.form_status === "ฝ่ายบริหารงานวิจัย" &&
              ["Research_KRIS", "Page_Charge"].includes(item.form_type)) ||
            (item.form_status === "ฝ่ายบริหารทรัพยากรบุคคล" &&
              item.form_type === "Conference")
          )
      );
    } else {
      console.log("API response is not an array:", mynotification.data);
      list_notification.Pro_noti = [];
    }
  } catch (error) {
    console.log("Error fetching notifications:", error);
  }
};

const fetchNotificationbyStatus = async () => {
  try {
    switch (userStore.user.user_role) {
      case "hr":
        list_notification.user_role = "ฝ่ายบริหารทรัพยากรบุคคล";
        break;
      case "research":
        list_notification.user_role = "ฝ่ายบริหารงานวิจัย";
        break;
      case "finance":
        list_notification.user_role = "ฝ่ายการเงิน";
        break;
      case "associate":
        list_notification.user_role = "ผู้ช่วยผู้อำนวยการ";
        break;
      case "dean":
        list_notification.user_role = "คณบดี";
        break;
      case "approver":
        list_notification.user_role = "ผู้อนุมัติ";
        break;
      default:
        list_notification.user_role = "";
        break;
    }

    const mynotification = await api.get(
      `/status_notification/${list_notification.user_role}`
    );

    list_notification.Off_noti = mynotification.data;
  } catch (error) {
    console.log("Error fetching notifications:", error);
  }
};

const updateNotificationsPro = async () => {
  if (list_notification.Pro_noti.length === 0) return;

  try {
    const notiIds = list_notification.Pro_noti.map((noti) => noti.noti_id);

    await api.put("/notifications/update_read", { notiIds });

    console.log("อัปเดตสถานะของทุก Notification สำเร็จ");

    // อัปเดตข้อมูลบนหน้า UI ทันที
    list_notification.Pro_noti = list_notification.Pro_noti.map((noti) => ({
      ...noti,
      is_read: 1,
    }));

    console.log(
      "list_notification.Pro_noti หลังอัปเดต:",
      list_notification.Pro_noti
    );
  } catch (error) {
    console.log("เกิดข้อผิดพลาดในการอัปเดต Notification:", error);
  }
};

const updateNotificationsOff = async () => {
  if (list_notification.Pro_noti.length === 0) return;

  try {
    const notiIds = list_notification.Off_noti.map((noti) => noti.noti_id);

    await api.put("/notifications/update_read", { notiIds });

    console.log("อัปเดตสถานะของทุก Notification สำเร็จ");

    // อัปเดตข้อมูลบนหน้า UI ทันที
    list_notification.Off_noti = list_notification.Off_noti.map((noti) => ({
      ...noti,
      is_read: 1,
    }));

    console.log(
      "list_notification.Off_noti หลังอัปเดต:",
      list_notification.Off_noti
    );

    try {
      if (list_notification.Off_noti.length === 0) return;

      const notiIds = list_notification.Pro_noti.map((noti) => noti.noti_id);

      await api.put("/notifications/update_read", { notiIds });

      console.log("อัปเดตสถานะของทุก Notification สำเร็จ");

      // อัปเดตข้อมูลบนหน้า UI ทันที
      list_notification.Pro_noti = list_notification.Pro_noti.map((noti) => ({
        ...noti,
        is_read: 1,
      }));

      console.log(
        "list_notification.Pro_noti หลังอัปเดต:",
        list_notification.Pro_noti
      );
    } catch (error) {}
  } catch (error) {
    console.log("เกิดข้อผิดพลาดในการอัปเดต Notification:", error);
  }
};

onMounted(async () => {
  if (!userStore.user) {
    await userStore.fetchUser();
  }

  // fetchData();
  fetchNotificationbyID();
  fetchNotificationbyStatus();
});

const logout = async () => {
  await userStore.logout();
  router.push("/login");
};
</script>
