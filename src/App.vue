<script setup>
import Navbar from "./components/Navbar.vue";
import Profile from "./views/Profile.vue";
</script>

<template>
  <div>
    <Navbar />
    <Profile />
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <button class="btn btn-active btn-ghost">Ghost</button>
  </div>
</template>

<style scoped></style>
