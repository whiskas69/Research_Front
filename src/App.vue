<script setup>
import Navbar from '@/components/Navbar.vue';
import { RouterView } from "vue-router";
</script>

<template>

  <div>
    <Navbar/>
    <RouterView />

    <!-- <LoginPage/> -->

    <!-- <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <button class="btn btn-active btn-ghost">Ghost</button> -->
  </div>
</template>

<style scoped></style>
