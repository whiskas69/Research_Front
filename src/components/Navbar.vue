<!-- in present only professor don't have any role -->

<template>
  <div class="navbar bg-base-100 px-14 py-2 shadow-sm sticky top-0 z-40">
    <router-link to="/" class="flex=auto max-w-14 w-full">
      <img
        src="https://scholar.it.kmitl.ac.th/images/it-kmitl.png"
        alt="IT KMITL"
      />
    </router-link>

    <div class="flex-auto w-3/6">
      <ul class="menu menu-horizontal px-5">
        <li>
          <details>
            <summary>สถานะและประวัติ</summary>
            <ul class="bg-base-100 rounded-t-none p-2 w-full">
              <li><router-link to="/allstatus">สถานะเอกสาร</router-link></li>
              <li>
                <router-link to="/allhistory">ประวัติการยื่น</router-link>
              </li>
            </ul>
          </details>
        </li>
        <li><router-link to="/search">สรุปผลแบบสถิติ</router-link></li>
      </ul>
    </div>

    <div class="flex-auto w-2/6 justify-end">
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
          <!-- <span class="badge badge-xs badge-primary indicator-item"></span> -->
        </div>
      </button>

      <div v-if="!user">
        <router-link to="/login" class="btn bg-[#4285F4] hover:bg-[#4285F4] text-white ml-10">
        เข้าสู่ระบบ
        </router-link>
      </div>

      <div class="px-5" v-if="user">
        <ul class="menu menu-horizontal">
          <li>
            <details>
              <summary
                class="bg-[#4285F4] hover:bg-[#4285F4] py-[13px] text-white"
              >
                นายจารุวัฒน์ วรรณวนัช
              </summary>
              <ul class="bg-base-100 rounded-t-none p-2 w-full">
                <li><router-link to="/profile">ข้อมูลส่วนตัว</router-link></li>
                <li @click="logout"><router-link to="/">ออกจากระบบ</router-link></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
let user = ref(null);

const getUserInfo = (res) => {
    const storageUser = localStorage.getItem('user');
    if (storageUser) {
        user.value = JSON.parse(storageUser);
        router.push('/')
    }
};

const logout = (res) => {
    localStorage.removeItem('user');
    router.push('/')
    location.reload()
}

onMounted( () => {
    getUserInfo();
})
</script>
