<template>
  <div class="navbar bg-base-100 px-14 py-1 shadow-sm sticky top-0 z-40">
    <!-- logo -->
    <div class="start mr-5">
      <router-link :to="logoRoute">
        <img
          class="flex-auto max-w-14 w-24"
          src="https://scholar.it.kmitl.ac.th/images/it-kmitl.png"
          alt="IT KMITL"
        />
      </router-link>
    </div>

    <!-- menu -->
    <div class="flex-auto w-full flex-row">
      <div class="menu menu-horizontal px-5">
        <div v-if="user" class="flex flex-row">
          <div v-if="!isAdmin && !isProfessor" class="justify-center">
            <div class="dropdown">
              <div tabindex="0" role="button" class="btn btn-ghost">
                <p class="font-normal">ยื่นขอรับการสนับสนุน &nbsp; &#9660;</p>
              </div>
              <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-t-none p-2 shadow">
                <li><router-link to="/homepage">ยื่นเอกสาร</router-link></li>
                <li><router-link to="/mystatus">สถานะเอกสาร</router-link></li>
                <li><router-link to="/myhistory">ประวัติการยื่น</router-link></li>
              </ul>
            </div>
          </div>

          <div v-if="isProfessor" class="justify-center">
            <div class="dropdown">
              <div tabindex="0" role="button" class="btn btn-ghost">
                <p class="font-normal">สถานะเอกสาร &nbsp; &#9660;</p>
              </div>
              <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-t-none p-2 shadow">
                <li><router-link to="/mystatus">สถานะเอกสาร</router-link></li>
                <li><router-link to="/myhistory">ประวัติการยื่น</router-link></li>
              </ul>
            </div>
          </div>

          <div v-if="isHRorResearch" class="justify-center">
            <div class="dropdown">
              <div tabindex="0" role="button" class="btn btn-ghost">
                <p class="font-normal">เอกสารที่รับผิดชอบ &nbsp; &#9660;</p>
              </div>
              <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-t-none p-2 shadow">
                <li><router-link to="/statusOffice">สถานะเอกสาร</router-link></li>
                <li><router-link to="/historyOffice">ประวัติเอกสาร</router-link></li>
                <li><router-link to="/eoffice">เอกสารรออนุมัติ</router-link></li>
              </ul>
            </div>
          </div>

          <div v-if="isApprover" class="justify-center">
            <div tabindex="0" role="button" class="btn btn-ghost">
              <router-link to="/allhistory" class="font-normal">เอกสารที่อนุมัติแล้ว</router-link>
            </div>
          </div>

          <div v-if="isFinance" class="justify-center">
            <div tabindex="0" role="button" class="btn btn-ghost">
              <router-link to="/allWithdrawMoney" class="font-normal">ขออนุมัติเบิกเงินรายได้</router-link>
            </div>
          </div>
          
          <div v-if="isAdmin" class="justify-center">
            <div tabindex="0" role="button" class="btn btn-ghost">
              <router-link to="/changePage" class="font-normal">เปลี่ยนเงื่อนไขการพิจารณา</router-link>
            </div>
          </div>
        </div>

        <div class="justify-center">
          <div tabindex="0" role="button" class="btn btn-ghost">
            <router-link to="/" class="font-normal">สรุปผลแบบสถิติ</router-link>
          </div>
        </div>
      </div>
    </div>

    <div v-if="!userStore.user">
      <router-link to="/testlogin" class="btn w-full bg-[#4285F4] hover:bg-[#4285F4] text-white ml-10">
        เข้าสู่ระบบ
      </router-link>
    </div>

    <!-- user menu -->
    <div class="flex flex-auto justify-end w-full" v-if="userStore.user">
      <div class="flex flex-auto justify-end" v-if="isProfessor || isHRorResearch || isApprover">
      <div tabindex="0" role="button" class="btn mt-2">
        <router-link to="/notification"><i class="color-black text-xl fa fa-bell"></i></router-link>
      </div>
    </div>

      <div class="menu menu-horizontal px-5">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn bg-[#4285F4] hover:bg-[#4285F4] py-[13px] text-white min-w-32">
            <p class="font-normal">{{ userStore.user.user_nameth }} &nbsp; &#9660;</p>
          </div>
          <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-t-none p-2 shadow">
            <li v-if="userStore.user?.user_role != 'admin'">
              <router-link to="/profile">ข้อมูลส่วนตัว</router-link>
            </li>
            <li @click="logout">
              <router-link to="/">ออกจากระบบ</router-link>
            </li>

          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";

import { useUserStore } from "@/store/userStore";

const router = useRouter();
const userStore = useUserStore();
const user = computed(() => userStore.user);

const logoRoute = computed(() => {
  if (!user.value) return "/";
  const role = user.value.user_role;
  if (role === "professor") return "/homepage";
  if (["hr", "research", "finance", "associate", "dean"].includes(role))
    return "/Officer";
  if (role === "admin") return "/admin";
  return "/";
});

const isAdmin = computed(() => user.value?.user_role === "admin");
const isProfessor = computed(() => user.value?.user_role === "professor");
const isFinance = computed(() => user.value?.user_role === "finance");
const isHRorResearch = computed(() => ["hr", "research"].includes(user.value?.user_role));
const isApprover = computed(() => ["hr", "research", "finance", "associate", "dean"].includes(user.value?.user_role));

const logout = async () => {
  await userStore.logout();
  router.push("/testlogin");
};
</script>
