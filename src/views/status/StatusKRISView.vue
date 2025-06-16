<template>
  <div class="container my-10 mx-auto">
    <h1 class="text-xl font-bold p-5">สถานะเอกสาร</h1>
    <Mainbox>
      <h2 class="text-lg font-bold mb-5">
        แบบเสนอโครงการวิจัย ทุนวิจัยส่งเสริมส่วนงานวิชาการ
      </h2>

      <p class="ml-5">
        โครงการวิจัย : {{ data.name }}
      </p>

      <div v-if="data.form.form_status == 'notApproved'" class="flex justify-center">
        <ul class="steps steps-vertical lg:steps-horizontal">
          <li data-content="" class="step w-40">ฝ่ายบริหารงานวิจัย</li>
          <li data-content="" class="step w-40">เข้าที่ประชุม</li>
          <li data-content="✗" class="step step-error w-40">ไม่อนุมัติ</li>
        </ul>
      </div>

      <div v-if="data.form.form_status == 'approve'" class="flex justify-center">
        <ul class="steps steps-vertical lg:steps-horizontal">
          <li data-content="✓" class="step step-primary w-40">
            ฝ่ายบริหารงานวิจัย
          </li>
          <li data-content="✓" class="step step-primary w-40">เข้าที่ประชุม</li>
          <li data-content="✓" class="step step-primary w-40">อนุมัติ</li>
        </ul>
      </div>

      <div v-if="data.form.form_status == 'attendMeeting'" class="flex justify-center">
        <ul class="steps steps-vertical lg:steps-horizontal">
          <li data-content="✓" class="step step-primary w-40">
            ฝ่ายบริหารงานวิจัย
          </li>
          <li data-content="✓" class="step step-primary w-40">เข้าที่ประชุม</li>
          <li class="step w-40">อนุมัติ</li>
        </ul>
      </div>

      <div v-if="data.form.form_status == 'research'" class="flex justify-center">
        <ul class="steps steps-vertical lg:steps-horizontal">
          <li data-content="✓" class="step step-primary w-40">
            ฝ่ายบริหารงานวิจัย
          </li>
          <li class="step w-40">เข้าที่ประชุม</li>
          <li class="step w-40">อนุมัติ</li>
        </ul>
      </div>
    </Mainbox>

    <Mainbox>
      <p class="text-lg font-bold">เอกสารหลักฐานที่แนบ</p>
      <div class="flex flex-rowitems-center">
        <p class="w-1/5 min-w-64 flex place-items-center">
          แบบเสนอโครงการวิจัย (Research Project)
        </p>
        <div class="ml-5">
          <button @click="getFile" class="btn bg-[#E85F19] text-white mr-5">
            ดูเอกสาร
          </button>

          <button @click="downloadFile" class="btn bg-[#4285F4] text-white">
            โหลดเอกสาร
          </button>
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
  name: "",
  file: "",
});

const getDataForm = async () => {
  if (id == null || id == "") {
    alert("โปรดเข้าสู่ระบบใหม่อีกครั้ง");
  }

  try {
    const response = await api.get(`/form/kris/${id}`);

    data.form = response.data.form;
    data.name = response.data.name;

    const responsefile = await api.get(`/getFilekris?kris_id=${id}`);
    data.file = responsefile.data.fileUrl;

    console.log("Success", response);
  } catch (error) {
    console.log("Error", error);
  }
};

const getFile = async () => {
  window.open(data.file, "_blank");
};

const downloadFile = async () => {
  try {
    const response = await fetch(data.file);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "แบบเสนอโครงการวิจัย " + data.name + " .pdf"; // ชื่อไฟล์ที่บันทึก
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.log("Error downloading file:", error);
  }
};

onMounted(() => {
  getDataForm();
});
</script>
