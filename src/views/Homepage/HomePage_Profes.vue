<!-- for Professor -->
<script setup>

</script>

<template>
  <div class="Main">
    <!-- Main in page -->
    <div class="container my-10 mx-auto">
      <p class="text-xl font-bold pb-5">เอกสารที่ต้องการยื่น</p>
      <!-- box first -->
      <div
        class="my-5 py-2 border border-[#D9D9D9] rounded-md text-black hover:cursor-pointer"
      >
        <router-link to="/formConfer">
          <p class="text-base px-5 py-1">
            ขออนุมัติเดินทางไปเผยแพร่ผลงานในการประชุมทางวิชาการ
          </p>
        </router-link>
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

<script>
// export default {

// }
</script>

<style lang="scss" scoped></style>
