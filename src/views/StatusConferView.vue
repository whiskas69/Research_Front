<template>
  <div class="container my-10 mx-auto">
    {{ data.form }}
    <h1 class="text-xl font-bold p-5">สถานะเอกสาร</h1>
    <div class="p-5 shadow m-5 rounded-xl mb-10">
      <h2 class="text-lg font-bold mb-5">
        ขออนุมัติเดินทางไปเผยแพร่ผลงานในการประชุมทางวิชาการ
      </h2>

      <div class="flex justify-center" v-if="data.form.form_status == 'ไม่อนุมัติ'">
        <ul class="steps steps-vertical lg:steps-horizontal">
          <li data-content="" class="step w-40">
            ฝ่ายบริหารทรัพยากรบุคคล
          </li>
          <li data-content="" class="step w-40">ฝ่ายบริหารงานวิจัย</li>
          <li data-content="" class="step w-40">ฝ่ายการเงิน</li>
          <li data-content="" class="step w-40">รองคณบดี</li>
          <li data-content="" class="step w-40">คณบดี</li>
          <li data-content="" class="step w-40">รออนุมัติ</li>
          <li data-content="✗" class="step step step-error w-40 w-40">ไม่อนุมัติ</li>
        </ul>
      </div>

      <div class="flex justify-center" v-if="data.form.form_status == 'อนุมัติ'">
        <ul class="steps steps-vertical lg:steps-horizontal">
          <li data-content="✓" class="step step-primary w-40">
            ฝ่ายบริหารทรัพยากรบุคคล
          </li>
          <li data-content="✓" class="step step-primary w-40">ฝ่ายบริหารงานวิจัย</li>
          <li data-content="✓" class="step step-primary w-40">ฝ่ายการเงิน</li>
          <li data-content="✓" class="step step-primary w-40">รองคณบดี</li>
          <li data-content="✓" class="step step-primary w-40">คณบดี</li>
          <li data-content="✓" class="step step-primary w-40">รออนุมัติ</li>
          <li data-content="✓" class="step step-accent w-40">อนุมัติ</li>
        </ul>
      </div>

      <div class="flex justify-center" v-if="data.form.form_status == 'คณบดี'">
        <ul class="steps steps-vertical lg:steps-horizontal">
          <li data-content="✓" class="step step-primary w-40">
            ฝ่ายบริหารทรัพยากรบุคคล
          </li>
          <li data-content="✓" class="step step-primary w-40">ฝ่ายบริหารงานวิจัย</li>
          <li data-content="✓" class="step step-primary w-40">ฝ่ายการเงิน</li>
          <li data-content="✓" class="step step-primary w-40">รองคณบดี</li>
          <li data-content="✓" class="step step-primary w-40">คณบดี</li>
          <li data-content="" class="step w-40">รออนุมัติ</li>
          <li data-content="" class="step w-40">อนุมัติ</li>
        </ul>
      </div>

      <div class="flex justify-center" v-if="data.form.form_status == 'รองคณบดี'">
        <ul class="steps steps-vertical lg:steps-horizontal">
          <li data-content="✓" class="step step-primary w-40">
            ฝ่ายบริหารทรัพยากรบุคคล
          </li>
          <li data-content="✓" class="step step-primary w-40">ฝ่ายบริหารงานวิจัย</li>
          <li data-content="✓" class="step step-primary w-40">ฝ่ายการเงิน</li>
          <li data-content="✓" class="step step-primary w-40">รองคณบดี</li>
          <li data-content="" class="step w-40">คณบดี</li>
          <li data-content="" class="step w-40">รออนุมัติ</li>
          <li data-content="" class="step w-40">อนุมัติ</li>
        </ul>
      </div>

      <div class="flex justify-center" v-if="data.form.form_status == 'ฝ่ายการเงิน'">
        <ul class="steps steps-vertical lg:steps-horizontal">
          <li data-content="✓" class="step step-primary w-40">
            ฝ่ายบริหารทรัพยากรบุคคล
          </li>
          <li data-content="✓" class="step step-primary w-40">ฝ่ายบริหารงานวิจัย</li>
          <li data-content="✓" class="step step-primary w-40">ฝ่ายการเงิน</li>
          <li data-content="" class="step w-40">รองคณบดี</li>
          <li data-content="" class="step w-40">คณบดี</li>
          <li data-content="" class="step w-40">รออนุมัติ</li>
          <li data-content="" class="step w-40">อนุมัติ</li>
        </ul>
      </div>

      <div class="flex justify-center" v-if="data.form.form_status == 'ฝ่ายบริหารงานวิจัย'">
        <ul class="steps steps-vertical lg:steps-horizontal">
          <li data-content="✓" class="step step-primary w-40">
            ฝ่ายบริหารทรัพยากรบุคคล
          </li>
          <li data-content="✓" class="step step-primary w-40">ฝ่ายบริหารงานวิจัย</li>
          <li data-content="" class="step w-40">ฝ่ายการเงิน</li>
          <li data-content="" class="step w-40">รองคณบดี</li>
          <li data-content="" class="step w-40">คณบดี</li>
          <li data-content="" class="step w-40">รออนุมัติ</li>
          <li data-content="" class="step w-40">อนุมัติ</li>
        </ul>
      </div>

      <div class="flex justify-center" v-if="data.form.form_status == 'ฝ่ายบริหารทรัพยากรบุคคล'">
        <ul class="steps steps-vertical lg:steps-horizontal">
          <li data-content="✓" class="step step-primary w-40">
            ฝ่ายบริหารทรัพยากรบุคคล
          </li>
          <li data-content="" class="step w-40">ฝ่ายบริหารงานวิจัย</li>
          <li data-content="" class="step w-40">ฝ่ายการเงิน</li>
          <li data-content="" class="step w-40">รองคณบดี</li>
          <li data-content="" class="step w-40">คณบดี</li>
          <li data-content="" class="step w-40">รออนุมัติ</li>
          <li data-content="" class="step w-40">อนุมัติ</li>
        </ul>
      </div>
    </div>

    <Mainbox>
      <p class="text-lg font-bold">เอกสารหลักฐานที่แนบ</p>
      <div class="flex flex-rowitems-center">
        <p class="w-1/5 min-w-64 flex place-items-center">
          แบบเสนอโครงการวิจัย (Research Project)
        </p>
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
  conf: "",
});

const getDataForm = async () => {
  if (id != null || id != "") {
    try {
      const response = await api.get(`/form/confer/${id}`);

      console.log(response)

      data.form = response.data.form;
      data.conf = response.data.conf[0];
    } catch (error) {
      console.log(error);
    }
  }
};

onMounted(() => {
  getDataForm();
});
</script>
