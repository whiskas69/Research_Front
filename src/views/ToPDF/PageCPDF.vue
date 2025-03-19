<template>
  <p class="text-2xl font-bold text-center my-10 no-print">export pdf pc</p>
  <div class="flex flex-col">
  <div class="flex flex-col justify-center items-center ">
    <p class="text-[15px] font-bold pt-7">แบบขอรับการสนับสนุนค่าใช้จ่ายในการเผยแพร่ผลงานทางวิชาการ</p>
    <p >
      ตามประกาศคณะฯ เรื่อง
      การสนับสนุนค่าใช้จ่ายในการเผยแพร่ผลงานทางวิชาการของอาจารย์ประจำคณะเทคโนโลยีสารสนเทศ
      พ.ศ. 2567
    </p>
    <p>
      และประกาศ สจล. เรื่อง
      การสนับสนุนค่าใช้จ่ายสำหรับการนำเสนอบทความวิจัยลงตีพิมพ์
    </p>
    <p>
      ในวารสารวิชาการระดับนานาชาติ ด้วยเงินรายได้ ลงวันที่ 11 กรกฎาคม 2565
      และฉบับที่ 2 ลงวันที่ 19 กรกฎาคม 2565
    </p>
  </div>
  <div class="border-2 border-black">
    <p class="font-bold">
      แบบที่ 2 ขออนุมัติค่า Page Charge
      เพื่อตีพิมพ์ผลงานในวารสารวิชาการระดับนานาชาติ
    </p>
  </div>
  </div>
  <!-- <hisPageCharge :id="id" /> -->
  <div class="container my-10 mx-auto">
    <div class="flex justify-end no-print">
      <button
        onclick="window.print()"
        class="btn text-white bg-[#4285F4] hover:bg-[#4285F4]"
      >
        พิมพ์แบบฟอร์ม
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { jsPDF } from "jspdf";

import hisPageCharge from "@/components/form/History/PageCharge.vue";
</script>

<style>
@media print {
  .no-print {
    display: none !important;
  }
  @page {
    margin: 0;
  }

  body {
    margin: 0;
  }

  header,
  footer {
    display: none;
  }
}
</style>
