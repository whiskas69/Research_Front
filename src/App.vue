<script setup>
import Navbar from "./components/Navbar.vue";
import Login from "./views/LoginPage.vue"
import HomePage_Pro from "./views/HomePage_Profes.vue"
import HomePage_Ot from "./views/HomePage_Offi.vue";
</script>

<template>

  <div>
    <!-- <Login />/ -->
     <HomePage_Ot/>

    <!-- <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <button class="btn btn-active btn-ghost">Ghost</button> -->
  </div>
</template>

<style scoped></style>
