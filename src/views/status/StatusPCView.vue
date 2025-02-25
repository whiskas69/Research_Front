<template>
  <div class="container my-10 mx-auto">
    <h1 class="text-xl font-bold p-5">สถานะเอกสาร</h1>
    <Mainbox>
      <h2 class="text-lg font-bold mb-5">
        ขออนุมัติค่า Page Charge เพื่อตีพิมพ์ผลงานในวารสารวิชาการระดับนานาชาติ
      </h2>
      <p class="ml-5">ชื่อวารสาร : {{ data.jounal }}</p>
      <p class="ml-5">ชื่อบทความ : {{ data.name }}</p>

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

      <div class="px-5 mb-3">
        <div class="flex flex-rowitems-center mt-2 justify-between" v-if="data.page_c.pc_proof && data.page_c.pc_proof !== ''">
          <p class="w-3/5 min-w-64 flex place-items-center">
            หลักฐานแสดงการอยู่ในฐานข้อมูลสากล ISI หรือ SJR หรือ Scopus หรือ Nature
          </p>

          <div class="ml-5">
            <button class="btn bg-[#E85F19] text-white mr-5">ดูเอกสาร</button>
            <button class="btn bg-[#4285F4] text-white">โหลดเอกสาร</button>
          </div>
        </div>

        <div v-else>
          <FileInput
            label="หลักฐานแสดงการอยู่ในฐานข้อมูลสากล ISI หรือ SJR หรือ Scopus หรือ Nature"
            name="pc_proof"
            type="file"
            v-model="data.pc_proof"
            @change="handleFile($event, 'pc_proof')"
          />
        </div>
      </div>

      <div class="px-5 mb-3">
        <div class="flex flex-rowitems-center mt-2 justify-between" v-if="data.page_c.q_pc_proof && data.page_c.q_pc_proof !== ''">
          <p class="w-3/5 min-w-64 flex place-items-center">
            หลักฐานแสดงการจัดลำดับ Quartile ของฐานข้อมูลสากล ISI หรือ SJR หรือ Scopus หรือ Nature
          </p>
          <div class="ml-5">
            <button class="btn bg-[#E85F19] text-white mr-5">ดูเอกสาร</button>
            <button class="btn bg-[#4285F4] text-white">โหลดเอกสาร</button>
          </div>
        </div>

        <div v-else>
          <FileInput
            label="หลักฐานแสดงการจัดลำดับ Quartile ของฐานข้อมูลสากล ISI หรือ SJR หรือ Scopus หรือ Nature"
            name="q_pc_proof"
            type="file"
            @change="handleFile($event, 'q_pc_proof')"
          />
        </div>
      </div>

      <div class="px-5 mb-3">
        <div class="flex flex-rowitems-center mt-2 justify-between" v-if="data.page_c.invoice_public && data.page_c.invoice_public != ''">
          <p class="w-3/5 min-w-64 flex place-items-center">
            ใบแจ้งหนี้ค่าใช้จ่ายสำหรับการตีพิมพ์
            /อัตราค่าใช้จ่ายที่ประกาศบนหน้าเว็บไซต์
          </p>
          <div class="ml-5">
            <button class="btn bg-[#E85F19] text-white mr-5">ดูเอกสาร</button>
            <button class="btn bg-[#4285F4] text-white">โหลดเอกสาร</button>
          </div>
        </div>

        <div v-else>
          <FileInput
            label="ใบแจ้งหนี้ค่าใช้จ่ายสำหรับการตีพิมพ์/อัตราค่าใช้จ่ายที่ประกาศบนหน้าเว็บไซต์"
            name="invoice_public"
            type="file"
            @change="handleFile($event, 'invoice_public')"
          />
        </div>
      </div>

      <div class="px-5 mb-3">
        <div class="flex flex-rowitems-center mt-2 justify-between" v-if="data.page_c.accepted && data.page_c.accepted != ''">
          <p class="w-3/5 min-w-64 flex place-items-center">
            หลักฐานการส่งบทความ หนังสือตอบรับบทความ
          </p>
          <div class="ml-5">
            <button class="btn bg-[#E85F19] text-white mr-5">ดูเอกสาร</button>
            <button class="btn bg-[#4285F4] text-white">โหลดเอกสาร</button>
          </div>
        </div>

        <div v-else>
          <FileInput
            label="หลักฐานการส่งบทความ หนังสือตอบรับบทความ"
            name="accepted"
            type="file"
            @change="handleFile($event, 'accepted')"
          />
        </div>
      </div>

      <div class="px-5 mb-3">
        <div class="flex flex-rowitems-center mt-2 justify-between" v-if="data.page_c.copy_article && data.page_c.copy_article != ''">
          <p class="w-3/5 min-w-64 flex place-items-center">
            สำเนาบทความ และ Upload บทความเข้าระบบ IT Scholar
          </p>
          <div class="ml-5">
            <button class="btn bg-[#E85F19] text-white mr-5">ดูเอกสาร</button>
            <button class="btn bg-[#4285F4] text-white">โหลดเอกสาร</button>
          </div>
        </div>

        <div v-else>
          <FileInput
            label="สำเนาบทความ และ Upload บทความเข้าระบบ IT Scholar"
            name="copy_article"
            type="file"
            @change="handleFile($event, 'copy_article')"
          />
        </div>
      </div>
    </Mainbox>

    <div class="flex justify-end">
      <button @click="updateFile" class="btn btn-success text-white">
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
  page_c: "",
  name: "",
  jounal: "",

  //file
  pc_proof: null,
  q_pc_proof: null,
  invoice_public: null,
  accepted: null,
  copy_article: null,
});

//sent file
const handleFile = (event, fieldName) => {
  const file = event.target.files[0];

  if (file) {
    data[fieldName] = file;
    console.log(`file assigned to ${fieldName}:`, data[fieldName]);
    console.log("Update data:", data);
  } else {
    console.error(`No file selected for ${fieldName}`);
  }
};

//ดึงข้อมูล
const getDataPc = async () => {
  if (id == null || id == "") {
    alert("โปรดเข้าสู่ระบบใหม่อีกครั้ง");
  }

  try {
    const response = await api.get(`/form/Pc/${id}`);

    data.form = response.data.form;
    data.page_c = response.data.page_c;
    data.jounal = response.data.journal;
    data.name = response.data.name;

    data.pc_proof = response.data.page_c.pc_proof;
    data.q_pc_proof = response.data.page_c.q_pc_proof;
    data.invoice_public = response.data.page_c.invoice_public;
    data.accepted = response.data.page_c.accepted;
    data.copy_article = response.data.page_c.copy_article;

    console.log("Success", response);
  } catch (error) {
    console.log("Error", error);
  }
};

//update file 
const updateFile = async () => {
  try {
    const dataforupdate = {
      pageC_id: id,
      pc_proof: data.pc_proof,
      q_pc_proof: data.q_pc_proof,
      invoice_public: data.invoice_public,
      accepted: data.accepted,
      copy_article: data.copy_article
    }

    const response = await api.put('updateFilePage_C', dataforupdate,
      {
        headers: {
          "Content-Type": "multipart/form-data" //req for file upload
        }
      }
    );
    console.log(response)

    alert("บันทึกข้อมูลเรียบร้อย");

    location.reload();
  } catch (error) {
    
  }
}

// const UpdatePc = async () => {
//   try {
//     const formData = new FormData();

//     formData.append("pageC_id", id);

//     //check is file
//     if (data.pc_proof) formData.append("pc_proof", data.pc_proof);
//     if (data.q_pc_proof) formData.append("q_pc_proof", data.q_pc_proof);
//     if (data.invoice_public) formData.append("invoice_public", data.invoice_public);
//     if (data.accepted) formData.append("accepted", data.accepted);
//     if (data.copy_article) formData.append("copy_article", data.copy_article);

//     console.log("data, ", formData);

//     const response = await api.put(`/page_charge/${id}`, formData, {
//       headers: {

//         "Content-Type": "multipart/form-data", // Required for file uploads
//       },
//     });

//     console.log("res:", response);
//   } catch (error) {
//     console.log(error);
//   }
// };

onMounted(() => {
  getDataPc();

  console.log("data", data);
});
</script>
