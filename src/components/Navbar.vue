<template>
  <div class="navbar bg-base-100 px-14 py-2 shadow-sm sticky top-0 z-40">
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
              userStore.user.user_role == 'finance'
            "
          >
            <router-link to="/officer">เอกสารที่อนุมัติแล้ว</router-link>
          </li>

          <li
            class="justify-center"
            v-else-if="userStore.user.user_role == 'approver'"
          >
            <router-link to="/EofficeView">เอกสารที่อนุมัติแล้ว</router-link>
          </li>

          <li
            class="justify-center"
            v-else-if="userStore.user.user_role == 'admin'"
          >
            <router-link to="/">แก้เงื่อนไขการพิจารณา</router-link>
          </li>
        </div>

        <li class="justify-center">
          <router-link to="/">สรุปผลแบบสถิติ</router-link>
        </li>
      </ul>
    </div>
    <div class="flex-auto w-2/6 justify-end">
      <details @click="clear" class="dropdown">
        <summary class="btn m-1">
          <!-- Badge Notification -->
          <span
            v-if="listNoti.noti.length > 0"
            class="absolute top-0 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-s font-bold text-white"
          >
            {{ listNoti.noti.length }}
          </span>
          <i class="color-black text-xl fa fa-bell"></i>
        </summary>
        <ul
          class="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li v-for="noti in listNoti.noti" :key="noti.noti_id">
            <div class="bg-red-200 w-full">
              <p>{{ noti.name_form }}</p>
              <p>{{ noti.name_form }}</p>
              <p v-if="noti.kris_id != null">
                แบบเสนอโครงการวิจัย สถานะ <b>{{ noti.status_form }}</b>
              </p>
            </div>
          </li>
        </ul>
      </details>
      <button class="btn btn-ghost btn-circle">
        <div class="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </div>
      </button>
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
import { onMounted, reactive } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/store/userStore";
import api from "@/setting/api";

const router = useRouter();
const userStore = useUserStore();
const listNoti = reactive({
  noti: [],
});
//check noti.lenght > 0 show noti if click noti.lenght == 0

const clear = () =>{
  // delete noti opened
  return numNoti == 0;
}
const fetchData = async () => {
  try {
    const response = await api.get("/notiAll");
    console.log("response.data", response.data);

    listNoti.noti = response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(async () => {
  fetchData();
  if (!userStore.user) {
    await userStore.fetchUser();
  }
});

const logout = async () => {
  await userStore.logout();
  router.push("/login");
};
</script>
