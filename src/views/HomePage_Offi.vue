<!-- for Officer -->
<script setup>
import Navbar from "../components/Navbar.vue"
import BoxforChoose from "@/components/BoxforChoose.vue";
</script>

<template>

    <div class="Main">
        <Navbar />
        <!-- Main in page -->
        <div class="container my-10 mx-auto ">
            <p class="text-xl font-bold pb-5">เอกสารต้องตรวจตอบ</p>
            <!-- box first -->
             <BoxforChoose />
        </div>

    </div>
</template>

<script>
    // export default {

    // }
</script>

<style lang="scss" scoped>

</style>
