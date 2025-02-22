<template>
  <div class="container my-10 mx-auto">
    <h1 class="text-xl font-bold p-5">สถานะเอกสาร</h1>
    <Mainbox>
      <h2 class="text-lg font-bold mb-5">
        แบบเสนอโครงการวิจัย ทุนวิจัยส่งเสริมส่วนงานวิชาการ
      </h2>

      <div
        v-if="data.form.form_status == 'ไม่อนุมัติ'"
        class="flex justify-center"
      >
        <ul class="steps steps-vertical lg:steps-horizontal">
          <li data-content="" class="step w-40">
            ฝ่ายบริหารงานวิจัย
          </li>
          <li data-content="" class="step w-40">เข้าที่ประชุม</li>
          <li data-content="✗" class="step step-error w-40">ไม่อนุมัติ</li>
        </ul>
      </div>

      <div
        v-if="data.form.form_status == 'ฝ่ายบริหารงานวิจัย'"
        class="flex justify-center"
      >
        <ul class="steps steps-vertical lg:steps-horizontal">
          <li data-content="✓" class="step step-primary w-40">
            ฝ่ายบริหารงานวิจัย
          </li>
          <li class="step w-40">เข้าที่ประชุม</li>
          <li class="step w-40">อนุมัติ</li>
        </ul>
      </div>

      <div
        v-if="data.form.form_status == 'อนุมัติ'"
        class="flex justify-center"
      >
        <ul class="steps steps-vertical lg:steps-horizontal">
          <li data-content="✓" class="step step-primary w-40">
            ฝ่ายบริหารงานวิจัย
          </li>
          <li data-content="✓" class="step step-primary w-40">เข้าที่ประชุม</li>
          <li data-content="✓" class="step step-accent w-40">อนุมัติ</li>
        </ul>
      </div>
    </Mainbox>

    <Mainbox>
        <p class="text-lg font-bold">เอกสารหลักฐานที่แนบ</p>
        <div class="flex flex-rowitems-center">
          <p class="w-1/5 min-w-64 flex place-items-center">แบบเสนอโครงการวิจัย (Research Project)</p>
          <div class="ml-5">
            <button class="btn bg-[#E85F19] text-white mr-5">ดูเอกสาร</button>
            <button class="btn bg-[#4285F4] text-white">โหลดเอกสาร</button>
          </div>
        </div>
      </Mainbox>
  </div>
</template>

<script setup>
import Mainbox from "@/components/form/Mainbox.vue";
import api from "@/setting/api";
import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const id = route.params.id;

const data = reactive({
  form: "",
  kris: "",
});

const getDataForm = async () => {
  if (id != null || id != "") {
    try {
      console.log("in try");

      const response = await api.get(`/form/kris/${id}`);

      data.form = response.data.form;
      data.kris = response.data.kris[0];

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
};

// const viewFile = async () => {
//   const 
// }

onMounted(() => {
  getDataForm();
});
</script>
