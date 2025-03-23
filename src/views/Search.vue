<template>
  <div class="container my-10 mx-auto">
    <!-- <div class="flex justify-end mt-5">
      <router-link to="/summary">
        <button class="btn btn-neutral">ไปหน้าสรุปผลเป็นตาราง</button>
      </router-link>
    </div> -->

    <div class="flex flex-row justify-between m-2 h-1/2 w-full bg-slate-200">
      <RemainingConfer />
      <RemainingPC />
      <TotalDocuments />
      <!-- <DisbursementEachYear /> -->
    </div>
    <!-- <div class="flex flex-row justify-between m-2 h-1/2">
      <TotalDocuments />
      <DisbursementApproval />
    </div> -->

    <div class="flex justify-end mt-5">
      <router-link to="/summary">
        <button class="btn btn-neutral">ไปหน้าสรุปผลเป็นตาราง</button>
      </router-link>
    </div>

    <!-- <br><br><br> -->
    <!-- <div class="p-5 shadow m-5 rounded-xl mb-10 pt-[200px]">
      <div class="flex">
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
            stroke-width="3"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <h1 class="text-lg font-bold ml-2">
          ค้นหาผลงานวิชาการ/บทความที่ได้รับสนับสนุน
        </h1>
      </div>

      <div class="mt-2 ml-5">
        <div class="flex">
          <label for="title" class="mr-5 place-content-center"
            >ชื่อบทความ</label
          >
          <input
            type="text"
            id="title"
            placeholder="ชื่อบทความ"
            class="input input-bordered w-full max-w-7xl"
          />
        </div>
        <div class="flex mt-5">
          <label for="title" class="mr-5 place-content-center"
            >ปีงบประมาณ</label
          >
          <select class="select select-bordered w-60 mr-10">
            <option disabled selected>ทั้งหมด</option>
            <option>2567</option>
            <option>2566</option>
          </select>
          <label for="title" class="mr-5 place-content-center"
            >ประเภทการขอรับสนับสนุน</label
          >
          <select class="select select-bordered w-96">
            <option disabled selected>ทั้งหมด</option>
            <option>ขออนุมัติเดินทางไปเผยแพร่ผลงานในการประชุมทางวิชาการ</option>
            <option>
              ขออนุมัติค่า Page Charge
              เพื่อตีพิมพ์ผลงานในวารสารวิชาการระดับนานาชาติ
            </option>
            <option>แบบเสนอโครงการวิจัย ทุนวิจัยส่งเสริมส่วนงานวิชาการ</option>
          </select>
          <button class="btn btn-warning justify-end">ค้นหา</button>
        </div>
      </div>
    </div> -->

    <!-- <div class="p-5 shadow m-5 rounded-xl mb-10">
      <h1 class="text-lg font-bold ml-2">
        ผลงานวิชาการ/บทความที่ได้รับการสนับสนุน
      </h1>
      <div class="p-5 shadow m-5 rounded-md hover:cursor-pointer mb-10">
        <div class="flex mb-3">
          <h4 class="mr-5 font-bold">ชื่อบทความ :</h4>
          <h4 class="font-bold">Article Title</h4>
        </div>
        <div class="flex mb-3">
          <h4 class="mr-5">ชื่องานประชุม/วารสาร :</h4>
          <h4 class="">ACM Symp on Theory of Computing</h4>
        </div>
        <div class="flex mb-3">
          <h4 class="mr-5">ผู้รับสนับสนุน :</h4>
          <h4 class="">นางภรินทร์ แก้วสีดา</h4>
        </div>
      </div>

      <div class="p-5 shadow m-5 rounded-md hover:cursor-pointer mb-10">
        <div class="flex mb-3">
          <h4 class="mr-5 font-bold">ชื่อบทความ :</h4>
          <h4 class="font-bold">Article Title</h4>
        </div>
        <div class="flex mb-3">
          <h4 class="mr-5">ชื่องานประชุม/วารสาร :</h4>
          <h4 class="">ACM Symp on Theory of Computing</h4>
        </div>
        <div class="flex mb-3">
          <h4 class="mr-5">ผู้รับสนับสนุน :</h4>
          <h4 class="">นางภรินทร์ แก้วสีดา</h4>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { Chart, registerables } from "chart.js";
import RemainingConfer from "./Dashboard/RemainingConfer.vue";
import RemainingPC from "./Dashboard/RemainingPC.vue";

import DisbursementApproval from "./Dashboard/DisbursementApproval.vue";
import TotalDocuments from "./Dashboard/TotalDocuments.vue";
import DisbursementEachYear from "./Dashboard/DisbursementEachYear.vue";

Chart.register(...registerables);
</script>
