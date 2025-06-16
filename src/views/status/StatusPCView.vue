<template>
  <div class="container my-10 mx-auto">
    <h1 class="text-xl font-bold p-5">สถานะเอกสาร</h1>
    <Mainbox>
      <h2 class="text-lg font-bold mb-5">
        ขออนุมัติค่า Page Charge เพื่อตีพิมพ์ผลงานในวารสารวิชาการระดับนานาชาติ
      </h2>
      <p class="ml-5">ชื่อวารสาร : {{ data.journal }}</p>
      <p class="ml-5">ชื่อบทความ : {{ data.name }}</p>

      <div
        class="flex justify-center"
        v-if="data.form.form_status == 'notApproved'"
      >
        <ul class="steps steps-vertical lg:steps-horizontal">
          <li data-content="" class="step w-40">ฝ่ายบริหารงานวิจัย</li>
          <li data-content="" class="step w-40">ฝ่ายบริหารการเงิน</li>
          <li data-content="" class="step w-40">รองคณบดี</li>
          <li data-content="" class="step w-40">คณบดี</li>
          <li data-content="" class="step w-40">รออนุมัติ</li>
          <li data-content="✗" class="step step-error w-40">ไม่อนุมัติ</li>
        </ul>
      </div>

      <div
        class="flex justify-center"
        v-if="data.form.form_status == 'waitingApproval'"
      >
        <ul class="steps steps-vertical lg:steps-horizontal">
          <li data-content="✓" class="step step-primary w-40">
            ฝ่ายบริหารงานวิจัย
          </li>
          <li data-content="✓" class="step step-primary w-40">
            ฝ่ายบริหารการเงิน
          </li>
          <li data-content="✓" class="step step-primary w-40">รองคณบดี</li>
          <li data-content="✓" class="step step-primary w-40">คณบดี</li>
          <li data-content="✓" class="step step-primary w-40">รออนุมัติ</li>
          <li data-content="" class="step w-40">อนุมัติ</li>
        </ul>
      </div>

      <div
        class="flex justify-center"
        v-if="data.form.form_status == 'approve'"
      >
        <ul class="steps steps-vertical lg:steps-horizontal">
          <li data-content="✓" class="step step-primary w-40">
            ฝ่ายบริหารงานวิจัย
          </li>
          <li data-content="✓" class="step step-primary w-40">
            ฝ่ายบริหารการเงิน
          </li>
          <li data-content="✓" class="step step-primary w-40">รองคณบดี</li>
          <li data-content="✓" class="step step-primary w-40">คณบดี</li>
          <li data-content="✓" class="step step-primary w-40">รออนุมัติ</li>
          <li data-content="✓" class="step step-primary w-40">อนุมัติ</li>
        </ul>
      </div>

      <div class="flex justify-center" v-if="data.form.form_status == 'dean'">
        <ul class="steps steps-vertical lg:steps-horizontal">
          <li data-content="✓" class="step step-primary w-40">
            ฝ่ายบริหารงานวิจัย
          </li>
          <li data-content="✓" class="step step-primary w-40">
            ฝ่ายบริหารการเงิน
          </li>
          <li data-content="✓" class="step step-primary w-40">รองคณบดี</li>
          <li data-content="✓" class="step step-primary w-40">คณบดี</li>
          <li data-content="" class="step w-40">รออนุมัติ</li>
          <li data-content="" class="step w-40">อนุมัติ</li>
        </ul>
      </div>

      <div
        class="flex justify-center"
        v-if="data.form.form_status == 'associate'"
      >
        <ul class="steps steps-vertical lg:steps-horizontal">
          <li data-content="✓" class="step step-primary w-40">
            ฝ่ายบริหารงานวิจัย
          </li>
          <li data-content="✓" class="step step-primary w-40">
            ฝ่ายบริหารการเงิน
          </li>
          <li data-content="✓" class="step step-primary w-40">รองคณบดี</li>
          <li data-content="" class="step w-40">คณบดี</li>
          <li data-content="" class="step w-40">รออนุมัติ</li>
          <li data-content="" class="step w-40">อนุมัติ</li>
        </ul>
      </div>

      <div
        class="flex justify-center"
        v-if="data.form.form_status == 'finance'"
      >
        <ul class="steps steps-vertical lg:steps-horizontal">
          <li data-content="✓" class="step step-primary w-40">
            ฝ่ายบริหารงานวิจัย
          </li>
          <li data-content="✓" class="step step-primary w-40">
            ฝ่ายบริหารการเงิน
          </li>
          <li data-content="" class="step w-40">รองคณบดี</li>
          <li data-content="" class="step w-40">คณบดี</li>
          <li data-content="" class="step w-40">รออนุมัติ</li>
          <li data-content="" class="step w-40">อนุมัติ</li>
        </ul>
      </div>

      <div
        class="flex justify-center"
        v-if="data.form.form_status == 'research'"
      >
        <ul class="steps steps-vertical lg:steps-horizontal">
          <li data-content="✓" class="step step-primary w-40">
            ฝ่ายบริหารงานวิจัย
          </li>
          <li data-content="" class="step w-40">ฝ่ายบริหารการเงิน</li>
          <li data-content="" class="step w-40">รองคณบดี</li>
          <li data-content="" class="step w-40">คณบดี</li>
          <li data-content="" class="step w-40">รออนุมัติ</li>
          <li data-content="" class="step w-40">อนุมัติ</li>
        </ul>
      </div>
    </Mainbox>

    <Mainbox>
      <p class="text-lg font-bold">เอกสารหลักฐานที่แนบ</p>
      <span class="text-s font-bold text-red-500 ml-5 mt-2" v-if="!data.check"
        >ส่งเอกสารเพิ่มเติมได้เพียงครั้งเดียวเท่านั้น
        และจำเป็นต้องกรอกทุกช่อง</span
      >

      <div class="px-5 mb-3">
        <div
          class="flex flex-rowitems-center mt-2 justify-between"
          v-if="data.page_c.pc_proof && data.page_c.pc_proof !== ''"
        >
          <p class="w-3/5 min-w-64 flex place-items-center">
            หลักฐานแสดงการอยู่ในฐานข้อมูลสากล ISI หรือ SJR หรือ Scopus หรือ
            Nature
          </p>

          <div class="ml-5">
            <button
              @click="getFile(data.f_pc_proof)"
              class="btn bg-[#E85F19] text-white mr-5"
            >
              ดูเอกสาร
            </button>
            <button
              @click="
                downloadFile(data.f_pc_proof, 'หลักฐานการอยู่ในฐานข้อมูลสากล')
              "
              class="btn bg-[#4285F4] text-white"
            >
              โหลดเอกสาร
            </button>
          </div>
        </div>
      </div>

      <div class="px-5 mb-3">
        <div
          class="flex flex-rowitems-center mt-2 justify-between"
          v-if="data.page_c.q_pc_proof && data.page_c.q_pc_proof !== ''"
        >
          <p class="w-3/5 min-w-64 flex place-items-center">
            หลักฐานแสดงการจัดลำดับ Quartile ของฐานข้อมูลสากล ISI หรือ SJR หรือ
            Scopus หรือ Nature
          </p>
          <div class="ml-5">
            <button
              @click="getFile(data.f_q_pc_proof)"
              class="btn bg-[#E85F19] text-white mr-5"
            >
              ดูเอกสาร
            </button>
            <button
              @click="
                downloadFile(data.f_q_pc_proof, 'หลักฐานการจัดลำดับ Quartile')
              "
              class="btn bg-[#4285F4] text-white"
            >
              โหลดเอกสาร
            </button>
          </div>
        </div>

        <div v-else>
          <FileInput
            label="หลักฐานแสดงการจัดลำดับ Quartile ของฐานข้อมูลสากล ISI หรือ SJR หรือ Scopus หรือ Nature"
            name="q_pc_proof"
            type="file"
            @change="handleFile($event, 'q_pc_proof')"
          />
          <span v-if="v$.q_pc_proof.$error" class="text-base ml-2 text-red-500">
            {{ v$.q_pc_proof.$errors[0].$message }}
          </span>
        </div>
      </div>

      <div class="px-5 mb-3">
        <div
          class="flex flex-rowitems-center mt-2 justify-between"
          v-if="data.page_c.invoice_public && data.page_c.invoice_public != ''"
        >
          <p class="w-3/5 min-w-64 flex place-items-center">
            ใบแจ้งหนี้ค่าใช้จ่ายสำหรับการตีพิมพ์
            /อัตราค่าใช้จ่ายที่ประกาศบนหน้าเว็บไซต์
          </p>
          <div class="ml-5">
            <button
              @click="getFile(data.f_invoice_public)"
              class="btn bg-[#E85F19] text-white mr-5"
            >
              ดูเอกสาร
            </button>
            <button
              @click="
                downloadFile(data.f_invoice_public, 'ใบแจ้งหนี้ค่าใช้จ่าย')
              "
              class="btn bg-[#4285F4] text-white"
            >
              โหลดเอกสาร
            </button>
          </div>
        </div>

        <div v-else>
          <FileInput
            label="ใบแจ้งหนี้ค่าใช้จ่ายสำหรับการตีพิมพ์/อัตราค่าใช้จ่ายที่ประกาศบนหน้าเว็บไซต์"
            name="invoice_public"
            type="file"
            @change="handleFile($event, 'invoice_public')"
          />
          <span
            v-if="v$.invoice_public.$error"
            class="text-base ml-2 text-red-500"
          >
            {{ v$.invoice_public.$errors[0].$message }}
          </span>
        </div>
      </div>

      <div class="px-5 mb-3">
        <div
          class="flex flex-rowitems-center mt-2 justify-between"
          v-if="data.page_c.accepted && data.page_c.accepted != ''"
        >
          <p class="w-3/5 min-w-64 flex place-items-center">
            หลักฐานการส่งบทความ หนังสือตอบรับบทความ
          </p>
          <div class="ml-5">
            <button
              @click="getFile(data.f_accepted)"
              class="btn bg-[#E85F19] text-white mr-5"
            >
              ดูเอกสาร
            </button>
            <button
              @click="downloadFile(data.f_accepted, 'หนังสือตอบรับบทความ')"
              class="btn bg-[#4285F4] text-white"
            >
              โหลดเอกสาร
            </button>
          </div>
        </div>

        <div v-else>
          <FileInput
            label="หลักฐานการส่งบทความ หนังสือตอบรับบทความ"
            name="accepted"
            type="file"
            @change="handleFile($event, 'accepted')"
          />
          <span v-if="v$.accepted.$error" class="text-base ml-2 text-red-500">
            {{ v$.accepted.$errors[0].$message }}
          </span>
        </div>
      </div>

      <div class="px-5 mb-3">
        <div
          class="flex flex-rowitems-center mt-2 justify-between"
          v-if="data.page_c.copy_article && data.page_c.copy_article != ''"
        >
          <p class="w-3/5 min-w-64 flex place-items-center">
            สำเนาบทความ และ Upload บทความเข้าระบบ IT Scholar
          </p>
          <div class="ml-5">
            <button
              @click="getFile(data.f_copy_article)"
              class="btn bg-[#E85F19] text-white mr-5"
            >
              ดูเอกสาร
            </button>
            <button
              @click="
                downloadFile(
                  data.f_copy_article,
                  'สำเนาบทความ และ Upload บทความเข้าระบบ IT Scholar'
                )
              "
              class="btn bg-[#4285F4] text-white"
            >
              โหลดเอกสาร
            </button>
          </div>
        </div>

        <div v-else>
          <FileInput
            label="สำเนาบทความ และ Upload บทความเข้าระบบ IT Scholar"
            name="copy_article"
            type="file"
            @change="handleFile($event, 'copy_article')"
          />
          <span
            v-if="v$.copy_article.$error"
            class="text-base ml-2 text-red-500"
          >
            {{ v$.copy_article.$errors[0].$message }}
          </span>
        </div>
      </div>
    </Mainbox>

    <div class="flex justify-end" v-if="!data.check">
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
import { useVuelidate } from "@vuelidate/core";
import { helpers, requiredIf } from "@vuelidate/validators";

import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const id = route.params.id;

const data = reactive({
  form: "",
  page_c: "",
  name: "",
  journal: "",

  //file
  pc_proof: null,
  q_pc_proof: null,
  invoice_public: null,
  accepted: null,
  copy_article: null,

  //urlfile
  f_pc_proof: null,
  f_q_pc_proof: null,
  f_invoice_public: null,
  f_accepted: null,
  f_copy_article: null,

  //setfile
  file: "",

  check: false,
});

const isPDF = (value) => {
  if (!value) return false; // ถ้าไม่มีไฟล์ให้ return false (ไม่ผ่าน)
  console.log("pass", value)
  return value.type === "application/pdf"; // ตรวจสอบว่าเป็นไฟล์ PDF หรือไม่
};

//validate rule
const rules = {
  q_pc_proof: {
    requiredIf: helpers.withMessage(
      "* กรุณาอัปโหลดไฟล์ *",
      requiredIf(function () {
        return !this.q_pc_proof; // ถ้าไม่มี q_pc_proof_data ต้องอัปโหลดไฟล์
      })
    ),
  },
  invoice_public: {
    requiredIf: helpers.withMessage(
      "* กรุณาอัปโหลดไฟล์ *",
      requiredIf(function () {
        return !this.invoice_public; // ถ้าไม่มี q_pc_proof_data ต้องอัปโหลดไฟล์
      })
    ),
  },
  accepted: {
    requiredIf: helpers.withMessage(
      "* กรุณาอัปโหลดไฟล์ *",
      requiredIf(function () {
        return !this.accepted; // ถ้าไม่มี q_pc_proof_data ต้องอัปโหลดไฟล์
      })
    ),
  },
  copy_article: {
    requiredIf: helpers.withMessage(
      "* กรุณาอัปโหลดไฟล์ *",
      requiredIf(function () {
        return !this.copy_article; // ถ้าไม่มี q_pc_proof_data ต้องอัปโหลดไฟล์
      })
    ),
  },
};

const v$ = useVuelidate(rules, data);

//sent file
const handleFile = (event, fieldName) => {
  const file = event.target.files[0];

  if (file) {
    data[fieldName] = file;
  } else {
    console.log(`No file selected for ${fieldName}`);
  }
};

const checkfile = () => {
  if (
    data.pc_proof &&
    data.q_pc_proof &&
    data.invoice_public &&
    data.accepted &&
    data.copy_article
  ) {
    data.check = true;
  } else {
    data.check = false;
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
    data.journal = response.data.journal;
    data.name = response.data.name;

    data.pc_proof = response.data.page_c.pc_proof;
    data.q_pc_proof = response.data.page_c.q_pc_proof;
    data.invoice_public = response.data.page_c.invoice_public;
    data.accepted = response.data.page_c.accepted;
    data.copy_article = response.data.page_c.copy_article;

    const responsefile = await api.get(`/getFilepage_c?pageC_id=${id}`);

    data.f_pc_proof = responsefile.data.file_pc_proof;
    data.f_q_pc_proof = responsefile.data.file_q_pc_proof;
    data.f_invoice_public = responsefile.data.file_invoice_public;
    data.f_accepted = responsefile.data.file_accepted;
    data.f_copy_article = responsefile.data.file_copy_article;

    console.log("Success", response);
  } catch (error) {
    console.log("Error", error);
  }
};

//update file
const updateFile = async () => {
  console.log("data", data);

  const result = await v$.value.$validate();

  // ตรวจสอบว่าทุกค่ามีข้อมูล ไม่ใช่ "" หรือ null
  const requiredFields = [
    data.q_pc_proof,
    data.invoice_public,
    data.accepted,
    data.copy_article,
  ];

  const hasEmptyField = requiredFields.some((field) => !field || field === "");

  if (hasEmptyField) {
    alert("กรุณาอัปโหลดไฟล์ให้ครบทุกช่องก่อนบันทึกข้อมูล");
    return;
  }

  if (result) {
    try {
      const dataforupdate = {
        pageC_id: id,
        pc_proof: data.pc_proof,
        q_pc_proof: data.q_pc_proof,
        invoice_public: data.invoice_public,
        accepted: data.accepted,
        copy_article: data.copy_article,
      };

      console.log("data for  : ", dataforupdate)

      const response = await api.put("/updateFilePage_C", dataforupdate, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response);

      alert("บันทึกข้อมูลเรียบร้อย");

      location.reload();
    } catch (error) {
      console.log(error);
      alert("เกิดข้อผิดพลาดในการบันทึกข้อมูล");
    }
  } else {
    alert("กรุณาอัปโหลดไฟล์ PDF");
    console.log("ddd", v$.value);
  }
};

const getFile = async (fileUrl) => {
  data.file = fileUrl;
  window.open(data.file, "_blank");
};

const downloadFile = async (fileUrl, fileName) => {
  try {
    const response = await fetch(fileUrl);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = fileName + " ของ " + data.name + ".pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.log("Error downloading file:", error);
  }
};
onMounted(async () => {
  await getDataPc();
  checkfile();
});
</script>
