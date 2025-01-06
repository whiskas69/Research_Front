<template>
  <div class="">
    <!-- background -->
    <div
      class="h-[91.9vh] bg-cover bg-center flex justify-center items-center"
      style="
        background-image: url(https://media.discordapp.net/attachments/1252175189849018370/1310622431777525771/background.png?ex=6768d381&is=67678201&hm=6fbe3c4d4c410d189b2d3e5d49e871015adb56dc781f2f8c4d4ced9169a0e298&=&format=webp&quality=lossless&width=1032&height=671);
      "
    >
      <!-- login box -->
      <div class="text-center bg-white w-1/4 rounded-md drop-shadow-lg p-5">
        <p class="text-2xl leading-relaxed">RESEARCH ADMINISTRATION</p>
        <p class="text-xl leading-relaxed pb-5">
          ระบบสนับสนุนงานบริหารงานวิจัย
        </p>
        <div class="flex justify-center">
          <hr class="w-5/6" />
        </div>
        <p class="text-lg leading-relaxed pt-5 pb-3">
          ยืนยันตัวตนด้วยบริการของ Google
        </p>
        <!-- button login google -->
        <GoogleLogin :callback="callback" />
        <!-- <button class="btn btn-outline w-full outline-black" v-google-login="onGoogleLogin">Login with Google</button> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { decodeCredential } from "vue3-google-login";
import { useRouter } from 'vue-router';

const router = useRouter();
let userData = ref(null);

const callback = (response) => {
  try {
    if (!response || !response.credential) {
      throw new Error("No credential received from Google response");
    }

    userData = decodeCredential(response.credential);

    // save localstorage
    localStorage.setItem('user', JSON.stringify(userData))
    router.push('/')
    location.reload()

    console.log("Login Success", userData);
  } catch (err) {
    console.log("has err is ", err.message);
  }
  // This callback will be triggered when the user selects or login to his Google account from the popup
  //   const userData = decodeCredential(response.credential)
  // decodeCredential will retrive the JWT payload from the credential
  //   console.log("Handle the response", userData)
};
</script>
