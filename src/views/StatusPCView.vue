<template>
  <div class="container my-10 mx-auto">
    <h1 class="text-xl font-bold p-5">สถานะเอกสาร</h1>
    <Mainbox>
      <h2 class="text-lg font-bold mb-5">
        ขออนุมัติค่า Page Charge เพื่อตีพิมพ์ผลงานในวารสารวิชาการระดับนานาชาติ
      </h2>

      <div
        class="flex justify-center"
        v-if="data.form.form_status == 'ไม่อนุมัติ'"
      >
        <ul class="steps steps-vertical lg:steps-horizontal">
          <li data-content="" class="step w-40">ฝ่ายบริหารงานวิจัย</li>
          <li data-content="" class="step w-40">ฝ่ายการเงิน</li>
          <li data-content="" class="step w-40">รองคณบดี</li>
          <li data-content="" class="step w-40">คณบดี</li>
          <li data-content="" class="step w-40">รออนุมัติ</li>
          <li data-content="✗" class="step step step-error w-40 w-40">
            ไม่อนุมัติ
          </li>
        </ul>
      </div>

      <div
        class="flex justify-center"
        v-if="data.form.form_status == 'รออนุมัติ'"
      >
        <ul class="steps steps-vertical lg:steps-horizontal">
          <li data-content="✓" class="step step-primary w-40">
            ฝ่ายบริหารงานวิจัย
          </li>
          <li data-content="✓" class="step step-primary w-40">ฝ่ายการเงิน</li>
          <li data-content="✓" class="step step-primary w-40">รองคณบดี</li>
          <li data-content="✓" class="step step-primary w-40">คณบดี</li>
          <li data-content="✓" class="step step-primary w-40">รออนุมัติ</li>
          <li data-content="" class="step w-40">อนุมัติ</li>
        </ul>
      </div>

      <div
        class="flex justify-center"
        v-if="data.form.form_status == 'อนุมัติ'"
      >
        <ul class="steps steps-vertical lg:steps-horizontal">
          <li data-content="✓" class="step step-primary w-40">
            ฝ่ายบริหารงานวิจัย
          </li>
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
            ฝ่ายบริหารงานวิจัย
          </li>
          <li data-content="✓" class="step step-primary w-40">ฝ่ายการเงิน</li>
          <li data-content="✓" class="step step-primary w-40">รองคณบดี</li>
          <li data-content="✓" class="step step-primary w-40">คณบดี</li>
          <li data-content="" class="step w-40">รออนุมัติ</li>
          <li data-content="" class="step w-40">อนุมัติ</li>
        </ul>
      </div>

      <div
        class="flex justify-center"
        v-if="data.form.form_status == 'รองคณบดี'"
      >
        <ul class="steps steps-vertical lg:steps-horizontal">
          <li data-content="✓" class="step step-primary w-40">
            ฝ่ายบริหารงานวิจัย
          </li>
          <li data-content="✓" class="step step-primary w-40">ฝ่ายการเงิน</li>
          <li data-content="✓" class="step step-primary w-40">รองคณบดี</li>
          <li data-content="" class="step w-40">คณบดี</li>
          <li data-content="" class="step w-40">รออนุมัติ</li>
          <li data-content="" class="step w-40">อนุมัติ</li>
        </ul>
      </div>

      <div
        class="flex justify-center"
        v-if="data.form.form_status == 'ฝ่ายการเงิน'"
      >
        <ul class="steps steps-vertical lg:steps-horizontal">
          <li data-content="✓" class="step step-primary w-40">
            ฝ่ายบริหารงานวิจัย
          </li>
          <li data-content="✓" class="step step-primary w-40">ฝ่ายการเงิน</li>
          <li data-content="" class="step w-40">รองคณบดี</li>
          <li data-content="" class="step w-40">คณบดี</li>
          <li data-content="" class="step w-40">รออนุมัติ</li>
          <li data-content="" class="step w-40">อนุมัติ</li>
        </ul>
      </div>

      <div
        class="flex justify-center"
        v-if="data.form.form_status == 'ฝ่ายบริหารงานวิจัย'"
      >
        <ul class="steps steps-vertical lg:steps-horizontal">
          <li data-content="✓" class="step step-primary w-40">
            ฝ่ายบริหารงานวิจัย
          </li>
          <li data-content="" class="step w-40">ฝ่ายการเงิน</li>
          <li data-content="" class="step w-40">รองคณบดี</li>
          <li data-content="" class="step w-40">คณบดี</li>
          <li data-content="" class="step w-40">รออนุมัติ</li>
          <li data-content="" class="step w-40">อนุมัติ</li>
        </ul>
      </div>
    </Mainbox>

    <Mainbox>
      <p class="text-lg font-bold">เอกสารหลักฐานที่แนบ</p>

      <div class="px-5">
        <div
          class="flex flex-rowitems-center mt-2 justify-between"
          v-if="data.pC.pc_proof != null"
        >
          <p class="w-3/5 min-w-64 flex place-items-center">
            หลักฐานแสดงการอยู่ในฐานข้อมูลสากล ISI หรือ SJR หรือ Scopus หรือ
            Nature
          </p>

          <div class="ml-5">
            <button class="btn bg-[#E85F19] text-white mr-5">ดูเอกสาร</button>
            <button class="btn bg-[#4285F4] text-white">โหลดเอกสาร</button>
          </div>
        </div>

        <div v-if="data.pC.pc_proof == null">
          <FileInput
            label="หลักฐานแสดงการอยู่ในฐานข้อมูลสากล ISI หรือ SJR หรือ Scopus หรือ Nature"
            name="pc_proof"
            type="file"
            v-model="data.pc_proof"
            @change="handleFile($event, 'pc_proof')"
          />
        </div>
      </div>

      <div class="px-5">
        <div
          class="flex flex-rowitems-center mt-2 justify-between"
          v-if="data.pC.q_pc_proof != null"
        >
          <p class="w-3/5 min-w-64 flex place-items-center">
            หลักฐานแสดงการจัดลำดับ Quartile ของฐานข้อมูลสากล ISI หรือ SJR หรือ
            Scopus หรือ Nature
          </p>
          <div class="ml-5">
            <button class="btn bg-[#E85F19] text-white mr-5">ดูเอกสาร</button>
            <button class="btn bg-[#4285F4] text-white">โหลดเอกสาร</button>
          </div>
        </div>

        <div v-if="data.pC.q_pc_proof === null">
          <FileInput
            label="หลักฐานแสดงการจัดลำดับ Quartile ของฐานข้อมูลสากล ISI หรือ SJR หรือ Scopus หรือ Nature"
            name="q_pc_proof"
            type="file"
            v-model="data.q_pc_proof"
            @change="handleFile($event, 'q_pc_proof')"
          />
        </div>
      </div>

      <div class="px-5">
        <div
          class="flex flex-rowitems-center mt-2 justify-between"
          v-if="data.pC.invoice_public != null"
        >
          <p class="w-3/5 min-w-64 flex place-items-center">
            ใบแจ้งหนี้ค่าใช้จ่ายสำหรับการตีพิมพ์
            /อัตราค่าใช้จ่ายที่ประกาศบนหน้าเว็บไซต์
          </p>
          <div class="ml-5">
            <button class="btn bg-[#E85F19] text-white mr-5">ดูเอกสาร</button>
            <button class="btn bg-[#4285F4] text-white">โหลดเอกสาร</button>
          </div>
        </div>

        <div v-if="data.pC.invoice_public == null">
          <FileInput
            label="ใบแจ้งหนี้ค่าใช้จ่ายสำหรับการตีพิมพ์/อัตราค่าใช้จ่ายที่ประกาศบนหน้าเว็บไซต์"
            name="invoice_public"
            type="file"
            v-model="data.invoice_public"
            @change="handleFile($event, 'invoice_public')"
          />
        </div>
      </div>

      <div class="px-5">
        <div
          class="flex flex-rowitems-center mt-2 justify-between"
          v-if="data.pC.accepted != null"
        >
          <p class="w-3/5 min-w-64 flex place-items-center">
            หลักฐานการส่งบทความ หนังสือตอบรับบทความ
          </p>
          <div class="ml-5">
            <button class="btn bg-[#E85F19] text-white mr-5">ดูเอกสาร</button>
            <button class="btn bg-[#4285F4] text-white">โหลดเอกสาร</button>
          </div>
        </div>

        <div v-if="data.pC.accepted == null">
          <FileInput
            label="หลักฐานการส่งบทความ หนังสือตอบรับบทความ"
            name="accepted"
            type="file"
            v-model="data.accepted"
            @change="handleFile($event, 'accepted')"
          />
        </div>
      </div>

      <div class="px-5">
        <div
          class="flex flex-rowitems-center mt-2 justify-between"
          v-if="data.pC.copy_article != null"
        >
          <p class="w-3/5 min-w-64 flex place-items-center">
            สำเนาบทความ และ Upload บทความเข้าระบบ IT Scholar
          </p>
          <div class="ml-5">
            <button class="btn bg-[#E85F19] text-white mr-5">ดูเอกสาร</button>
            <button class="btn bg-[#4285F4] text-white">โหลดเอกสาร</button>
          </div>
        </div>

        <div v-if="data.pC.copy_article == null">
          <FileInput
            label="สำเนาบทความ และ Upload บทความเข้าระบบ IT Scholar"
            name="copy_article"
            type="file"
            v-model="data.copy_article"
            @change="handleFile($event, 'copy_article')"
          />
        </div>
      </div>
    </Mainbox>

    <div class="flex justify-end">
      <button @click="UpdatePc" class="btn btn-success text-white">
        บันทึกข้อมูล
      </button>
    </div>
  </div>
</template>

<script setup>
import Mainbox from "@/components/form/Mainbox.vue";
import FileInput from "@/components/Input/FileInput.vue";

import api from "@/setting/api";

import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const id = route.params.id;

const data = reactive({
  form: "",
  pC: "",
  pc_proof: "",
  q_pc_proof: "",
  invoice_public: "",
  accepted: "",
  copy_article: "",
});

const handleFile = (event, fieldName) => {
  const file = event.target.files[0];
  if (file) {
    data[fieldName] = file;
    console.log(`File assigned to ${fieldName}:`, data[fieldName]);
    console.log("Updated formData:", data);
  } else {
    console.error(`No file selected for ${fieldName}.`);
  }
};

const getDataPc = async () => {
  if (id != null || id != "") {
    try {
      const response = await api.get(`/form/Pc/${id}`);
      data.form = response.data.form;
      data.pC = response.data.pC;
      data.pc_proof = response.data.pC.pc_proof;
      data.q_pc_proof = response.data.pC.q_pc_proof;
      data.invoice_public = response.data.pC.invoice_public;
      data.accepted = response.data.pC.accepted;
      data.copy_article = response.data.pC.copy_article;

      console.log("file", data);
    } catch (error) {
      console.log(error);
    }
  }
};

const UpdatePc = async () => {
  try {
    const formData = new FormData();

    formData.append("pageC_id", id);
    
    //check is file
    if (data.pc_proof) formData.append("pc_proof", data.pc_proof);
    if (data.q_pc_proof) formData.append("q_pc_proof", data.q_pc_proof);
    if (data.invoice_public) formData.append("invoice_public", data.invoice_public);
    if (data.accepted) formData.append("accepted", data.accepted);
    if (data.copy_article) formData.append("copy_article", data.copy_article);

    console.log("data, ", formData);

    const response = await api.put(`/page_charge/${id}`, formData, {
      headers: {

        "Content-Type": "multipart/form-data", // Required for file uploads
      },
    });

    console.log("res:", response);
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  getDataPc();
});
</script>
