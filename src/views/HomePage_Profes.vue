<!-- for Professor -->
<script setup>
import Navbar from "../components/Navbar.vue"
</script>

<template>

    <div class="Main">
        <Navbar />
        <!-- Main in page -->
        <div class="container my-10 mx-auto ">
            <p class="text-xl font-bold pb-5">เอกสารที่ต้องการยื่น</p>
            <!-- box first -->
            <div class="my-5 py-2 border border-[#D9D9D9] rounded-md text-black hover:cursor-pointer">
                <p class="text-base px-5 py-1 ">ขออนุมัติเดินทางไปเผยแพร่ผลงานในการประชุมทางวิชาการ</p>
            </div>
            <div class="my-5 py-2 border border-[#D9D9D9] rounded-md text-black hover:cursor-pointer">
                <p class="text-base px-5 py-1 ">ขออนุมัติค่า Page Charge เพื่อตีพิมพ์ผลงานในวารสารวิชาการระดับนานาชาติ</p>
            </div>
            <div class="my-5 py-2 border border-[#D9D9D9] rounded-md text-black hover:cursor-pointer">
                <p class="text-base px-5 py-1 ">แบบเสนอโครงการวิจัย ทุนวิจัยส่งเสริมส่วนงานวิชาการ</p>
            </div>
        </div>

    </div>
</template>

<script>
    // export default {

    // }
</script>

<style lang="scss" scoped>

</style>
