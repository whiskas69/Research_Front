<template>
  <div class="navbar bg-base-100 px-14 py-2 shadow-sm sticky top-0 z-40">
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

        <div v-else-if="userStore.user.user_role == 'approver'">
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
    <div class="flex-auto w-4/6">
      <ul class="menu menu-horizontal px-5 flex">
        <div v-if="userStore.user">
          <ul
            class="menu menu-horizontal"
            v-if="userStore.user.user_role == 'professor'"
          >
            <li class="justify-center">
              <details>
                <summary>สถานะและประวัติ</summary>
                <ul class="bg-base-100 rounded-t-none">
                  <li>
                    <router-link to="/allstatus">สถานะเอกสาร</router-link>
                  </li>
                  <li>
                    <router-link to="/allhistory">ประวัติการยื่น</router-link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>

          <li
            class="justify-center"
            v-else-if="
              userStore.user.user_role == 'hr' ||
              userStore.user.user_role == 'research' ||
              userStore.user.user_role == 'finance' ||
              userStore.user.user_role == 'associate' ||
              userStore.user.user_role == 'dean'
            "
          >
            <router-link to="/eoffice">เอกสารที่อนุมัติแล้ว</router-link>
          </li>
          <li
            class="justify-center"
            v-else-if="userStore.user.user_role == 'admin'"
          >
            <router-link to="/">แก้เงื่อนไขการพิจารณา</router-link>
          </li>
        </div>
        <!-- <li v-if="userStore.user.user_role != 'professor' && userStore.user.user_role != 'admin'">
          <router-link to="/allhistory">ประวัติการยื่น</router-link>
        </li> -->
        <li class="justify-center">
          <router-link to="/">สรุปผลแบบสถิติ</router-link>
        </li>
      </ul>
    </div>

    <!-- end -->
    <div class="flex-auto w-2/6 justify-end">
      <div v-if="userStore.user">
        <div v-if="userStore.user.user_role == 'professor'">
          <div class="dropdown dropdown-bottom dropdown-end">
            <div tabindex="0" role="button" class="btn m-1">
              <span v-if="list_notification.Pro_noti.length > 0"
              class="absolute top-0 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-s font-bold text-white"
            >
              {{ list_notification.Pro_noti.length }}
            </span>
              <i class="color-black text-xl fa fa-bell"></i>
            </div>

            <ul
              tabindex="0"
              class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              v-if="userStore.user.user_role == 'professor'"
            >
              <li v-for="item in list_notification.Pro_noti" :key="item.noti_id">
                <div class="flex flex-col items-start" v-if="item.form_type == 'Research_KRIS'">
                  <p>แบบเสนอโครงการวิจัย</p>
                  <p>ชื่องานวิจัย : {{ item.name_form }}</p>
                  <p>สถานะ : {{ item.form_status }}</p>
                </div>
                <div class="flex flex-col items-start" v-if="item.form_type == 'Conference'">
                  <p>ขออนุมัติเดินทางไปเผยแพร่ผลงานในการประชุมทางวิชาการ</p>
                  <p>ชื่อบทความ : {{ item.name_form }}</p>
                  <p>สถานะ : {{ item.form_status }}</p>
                </div>
                <div class="flex flex-col items-start" v-if="item.form_type == 'Page_Charge'">
                  <p>ขออนุมัติค่า Page Charge เพื่อตีพิมพ์ผลงานในวารสารวิชาการระดับนานาชาติ</p>
                  <p>ชื่อบทความ : {{ item.name_form }}</p>
                  <p>สถานะ : {{ item.form_status }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <!-- <div class="dropdown dropdown-bottom dropdown-end" @click="clear">
          <div tabindex="0" role="button" class="btn m-1">
            <!-- <span
              v-if="!isRead && listNoti.noti.length > 0"
              class="absolute top-0 right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-s font-bold text-white"
            >
              {{ listNoti.noti.length }}
            </span> -->
            <!-- <i class="color-black text-xl fa fa-bell"></i> -->
          <!-- </div> -->
          <!-- <ul
            tabindex="0"
            class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            v-if="userStore.user.user_role == 'professor'"
          >
            <li>
              <a>{{ listNoti }}</a>
            </li>
            <li><a>Item 2</a></li>
          </ul>
        </div> -->
      </div>
    </div>

    <div v-if="!userStore.user">
      <router-link
        to="/login"
        class="btn bg-[#4285F4] hover:bg-[#4285F4] text-white ml-10"
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
            <summary
              v-else-if="userStore.user.user_nameeng"
              class="bg-[#4285F4] hover:bg-[#4285F4] py-[13px] text-white min-w-32"
            >
              {{ userStore.user.user_nameeng }}
            </summary>
            <ul class="bg-base-100 rounded-t-none p-2 w-full">
              <li><router-link to="/profile">ข้อมูลส่วนตัว</router-link></li>
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
const user = computed(() => userStore.user);

const list_notification = reactive({
  Pro_noti: [],
  Off_noti: [],
});

const clear = () => {
  isRead.value = true;
};

const fetchData = async () => {
  try {
    const response = await api.get("/all_notification");
    // console.log("notiAll: ", response.data.data);
    // console.log("user: ", userStore.user);

    // // แก้userStore.user ตรง 40
    // const filteredNoti = response.data.data.filter(
    //   (noti) => noti.user_id === 40
    // );
    // listNoti.notiPro = filteredNoti;
    // listNoti.noti = response.data.data;
    // isRead.value = false;
    list_notification.Off_noti = response.data;
    console.log("Off_noti: ", list_notification.Off_noti);
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    // isLoading.value = false;
  }
};

const fetchNotificationbyID = async () => {
  try {
    const mynotification = await api.get(
      `/notification/${userStore.user.user_id}`
    );

    list_notification.Pro_noti = mynotification.data;
    console.log("mynotification", list_notification.Pro_noti);
  } catch (error) {
    console.log("error, ", error);
  }
};

onMounted(async () => {
  if (!userStore.user) {
    await userStore.fetchUser();
  }

  fetchData();
  fetchNotificationbyID();
});

const logout = async () => {
  await userStore.logout();
  router.push("/login");
};
</script>
