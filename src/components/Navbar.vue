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
      <ul class="menu menu-horizontal px-5 flex">
        <template v-if="user">
          <li v-if="!isAdmin && !isProfessor" class="justify-center">
            <details>
              <summary>ยื่นขอรับการสนับสนุน</summary>
              <ul class="bg-base-100 rounded-t-none px-1">
                <li>
                  <router-link to="/homepage">ยื่นเอกสาร</router-link>
                </li>
                <li>
                  <router-link to="/mystatus">สถานะเอกสาร</router-link>
                </li>
                <li>
                  <router-link to="/myhistory">ประวัติการยื่น</router-link>
                </li>
              </ul>
            </details>
          </li>

          <li v-if="isProfessor" class="justify-center">
            <details>
              <summary>สถานะเอกสาร</summary>
              <ul class="bg-base-100 rounded-t-none px-1">
                <li><router-link to="/mystatus">สถานะเอกสาร</router-link></li>
                <li>
                  <router-link to="/myhistory">ประวัติการยื่น</router-link>
                </li>
              </ul>
            </details>
          </li>

          <li v-if="isHRorResearch" class="justify-center">
            <details class="justify-center">
              <summary>เอกสารที่รับผิดชอบ</summary>
              <ul class="bg-base-100 rounded-t-none px-1 w-full">
                <li>
                  <router-link to="/statusOffice">สถานะเอกสาร</router-link>
                </li>
                <li>
                  <router-link to="/historyOffice">ประวัติเอกสาร</router-link>
                </li>
                <li>
                  <router-link to="/eoffice">เอกสารรออนุมัติ</router-link>
                </li>
              </ul>
            </details>
          </li>

          <li v-if="isApprover" class="justify-center">
            <router-link to="/allhistory">เอกสารที่อนุมัติแล้ว</router-link>
          </li>

          <li v-if="isApprover" class="justify-center">
            <router-link to="/">สรุปผลแบบสถิติ</router-link>
          </li>
        </template>

        <li v-if="isFinance" class="justify-center">
          <router-link to="/allWithdrawMoney">ขออนุมัติเบิกเงินรายได้</router-link>
        </li>

        <li v-if="isAdmin" class="justify-center">
          <router-link to="/changePage">เปลี่ยนเงื่อนไขการพิจารณา</router-link>
        </li>
      </ul>
    </div>

    <!-- end -->
    <div class="flex flex-auto justify-end" v-if="isProfessor || isHRorResearch || isApprover">
      <div tabindex="0" role="button" class="btn relative">
        <router-link to="/notification"><i class="color-black text-xl fa fa-bell"></i></router-link>
      </div>
    </div>

    <div v-if="!userStore.user">
      <router-link
        to="/testlogin"
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
              <li v-if="userStore.user?.user_role != 'admin'">
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
const isHRorResearch = computed(() =>
  ["hr", "research"].includes(user.value?.user_role)
);
const isApprover = computed(() =>
  ["hr", "research", "finance", "associate", "dean"].includes(
    user.value?.user_role
  )
);

const logout = async () => {
  await userStore.logout();
  router.push("/testlogin");
};
</script>
