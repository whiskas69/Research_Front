<template>
  <div class="container my-10 mx-auto">
    <h1 class="text-xl font-bold p-5">สถานะเอกสาร</h1>
    <Mainbox>
      <h2 class="text-lg font-bold mb-5">
        ขออนุมัติเดินทางไปเผยแพร่ผลงานในการประชุมทางวิชาการ
      </h2>
      <p class="ml-5">ชื่อการประชุม : {{ data.confer_name }}</p>
      <p class="ml-5">ชื่อบทความ : {{ data.name }}</p>

      <div class="flex justify-center" v-if="data.form.form_status == 'notApproved'">
        <ul class="steps steps-vertical lg:steps-horizontal">
          <li data-content="" class="step w-40">ฝ่ายบริหารทรัพยากรบุคคล</li>
          <li data-content="" class="step w-40">ฝ่ายบริหารงานวิจัย</li>
          <li data-content="" class="step w-40">ฝ่ายบริหารการเงิน</li>
          <li data-content="" class="step w-40">รองคณบดี</li>
          <li data-content="" class="step w-40">คณบดี</li>
          <li data-content="" class="step w-40">รออนุมัติ</li>
          <li data-content="✗" class="step step-error w-40">ไม่อนุมัติ</li>
        </ul>
      </div>

      <div class="flex justify-center" v-if="data.form.form_status == 'approve'">
        <ul class="steps steps-vertical lg:steps-horizontal">
          <li data-content="✓" class="step step-primary w-40">
            ฝ่ายบริหารทรัพยากรบุคคล
          </li>
          <li data-content="✓" class="step step-primary w-40">
            ฝ่ายบริหารงานวิจัย
          </li>
          <li data-content="✓" class="step step-primary w-40">ฝ่ายบริหารการเงิน</li>
          <li data-content="✓" class="step step-primary w-40">รองคณบดี</li>
          <li data-content="✓" class="step step-primary w-40">คณบดี</li>
          <li data-content="✓" class="step step-primary w-40">รออนุมัติ</li>
          <li data-content="✓" class="step step-primary w-40">อนุมัติ</li>
        </ul>
      </div>

      <div class="flex justify-center" v-if="data.form.form_status == 'waitingApproval'">
        <ul class="steps steps-vertical lg:steps-horizontal">
          <li data-content="✓" class="step step-primary w-40">
            ฝ่ายบริหารทรัพยากรบุคคล
          </li>
          <li data-content="✓" class="step step-primary w-40">
            ฝ่ายบริหารงานวิจัย
          </li>
          <li data-content="✓" class="step step-primary w-40">ฝ่ายบริหารการเงิน</li>
          <li data-content="✓" class="step step-primary w-40">รองคณบดี</li>
          <li data-content="✓" class="step step-primary w-40">คณบดี</li>
          <li data-content="✓" class="step step-primary w-40">รออนุมัติ</li>
          <li data-content="" class="step  w-40">อนุมัติ</li>
        </ul>
      </div>

      <div class="flex justify-center" v-if="data.form.form_status == 'dean'">
        <ul class="steps steps-vertical lg:steps-horizontal">
          <li data-content="✓" class="step step-primary w-40">
            ฝ่ายบริหารทรัพยากรบุคคล
          </li>
          <li data-content="✓" class="step step-primary w-40">
            ฝ่ายบริหารงานวิจัย
          </li>
          <li data-content="✓" class="step step-primary w-40">ฝ่ายบริหารการเงิน</li>
          <li data-content="✓" class="step step-primary w-40">รองคณบดี</li>
          <li data-content="✓" class="step step-primary w-40">คณบดี</li>
          <li data-content="" class="step w-40">รออนุมัติ</li>
          <li data-content="" class="step w-40">อนุมัติ</li>
        </ul>
      </div>

      <div class="flex justify-center" v-if="data.form.form_status == 'associate'">
        <ul class="steps steps-vertical lg:steps-horizontal">
          <li data-content="✓" class="step step-primary w-40">
            ฝ่ายบริหารทรัพยากรบุคคล
          </li>
          <li data-content="✓" class="step step-primary w-40">
            ฝ่ายบริหารงานวิจัย
          </li>
          <li data-content="✓" class="step step-primary w-40">ฝ่ายบริหารการเงิน</li>
          <li data-content="✓" class="step step-primary w-40">รองคณบดี</li>
          <li data-content="" class="step w-40">คณบดี</li>
          <li data-content="" class="step w-40">รออนุมัติ</li>
          <li data-content="" class="step w-40">อนุมัติ</li>
        </ul>
      </div>

      <div class="flex justify-center" v-if="data.form.form_status == 'finance'">
        <ul class="steps steps-vertical lg:steps-horizontal">
          <li data-content="✓" class="step step-primary w-40">
            ฝ่ายบริหารทรัพยากรบุคคล
          </li>
          <li data-content="✓" class="step step-primary w-40">
            ฝ่ายบริหารงานวิจัย
          </li>
          <li data-content="✓" class="step step-primary w-40">ฝ่ายบริหารการเงิน</li>
          <li data-content="" class="step w-40">รองคณบดี</li>
          <li data-content="" class="step w-40">คณบดี</li>
          <li data-content="" class="step w-40">รออนุมัติ</li>
          <li data-content="" class="step w-40">อนุมัติ</li>
        </ul>
      </div>

      <div class="flex justify-center" v-if="data.form.form_status == 'research'">
        <ul class="steps steps-vertical lg:steps-horizontal">
          <li data-content="✓" class="step step-primary w-40">
            ฝ่ายบริหารทรัพยากรบุคคล
          </li>
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

      <div class="flex justify-center" v-if="data.form.form_status == 'hr'">
        <ul class="steps steps-vertical lg:steps-horizontal">
          <li data-content="✓" class="step step-primary w-40">
            ฝ่ายบริหารทรัพยากรบุคคล
          </li>
          <li data-content="" class="step w-40">ฝ่ายบริหารงานวิจัย</li>
          <li data-content="" class="step w-40">ฝ่ายบริหารการเงิน</li>
          <li data-content="" class="step w-40">รองคณบดี</li>
          <li data-content="" class="step w-40">คณบดี</li>
          <li data-content="" class="step w-40">รออนุมัติ</li>
          <li data-content="" class="step w-40">อนุมัติ</li>
        </ul>
      </div>
    </Mainbox>
    
    <div class="flex justify-end mr-5">
      <button @click="showData = !showData" class="btn text-black border-[#4285F4] hover:bg-[#4285F4]">
        ข้อมูลแบบฟร์อม
      </button>
    </div>
    
    <div v-if="showData" class="showData">
      <ConferenceData :id="id" />
      <HR :id="id" />
      <Research :id="id" :type="'Conference'" />
      <FinanceAll :id="id" :type="'Conference'" />
      <Assosiate :id="id" :type="'Conference'" />
      <Dean :id="id" :type="'Conference'" />
      <WithdrawMoney :id="id" :type="'Conference'" />
    </div>
  </div>
</template>

<script setup>
import Mainbox from "@/components/form/Mainbox.vue";
import FileInput from "@/components/Input/FileInput.vue";

import api from "@/setting/api";
import { useVuelidate } from "@vuelidate/core";
import { helpers } from "@vuelidate/validators";

import { onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";

import ConferenceData from "@/components/form/DataforOffice/Conference.vue";
import HR from "@/components/form/DataforOffice/HR.vue";
import Research from "@/components/form/DataforOffice/Research.vue";
import FinanceAll from "@/components/form/DataforOffice/FinanceAll.vue";
import Assosiate from "@/components/form/DataforOffice/Assosiate.vue";
import Dean from "@/components/form/DataforOffice/Dean.vue";
import WithdrawMoney from "@/components/form/DataforOffice/WithdrawMoney.vue";

const route = useRoute();
const id = route.params.id;

const data = reactive({
  form: "",
  conf: "",
  name: "",
  confer_name: "",
  withdraw: "",

  //file
  full_page: null,
  published_journals: null,
  q_proof: null,
  call_for_paper: null,
  accepted: null,
  fee_receipt: null,
  fx_rate_document: null,
  conf_proof: null,

  //url
  f_full_page: null,
  f_published_journals: null,
  f_q_proof: null,
  f_call_for_paper: null,
  f_accepted: null,
  f_fee_receipt: null,
  f_fx_rate_document: null,
  f_conf_proof: null,

  //setfile
  file: "",

  check: false,
});

const showData = ref(true)

//validate rule
const rules = {
  published_journals: {
    fileType: helpers.withMessage(
      "* อัปโหลดได้เฉพาะไฟล์ PDF เท่านั้น *",
      (value) => {
        if (!value) return true; // ถ้าไม่มีไฟล์ ก็ผ่าน (ไม่บังคับ)
        return value.type === "application/pdf"; // เช็คว่าเป็น PDF
      }
    ),
  },
  accepted: {
    fileType: helpers.withMessage(
      "* อัปโหลดได้เฉพาะไฟล์ PDF เท่านั้น *",
      (value) => {
        if (!value) return false;
        const allowedTypes = ["application/pdf"];
        return allowedTypes.includes(value.type);
      }
    ),
  },
  q_proof: {
    fileType: helpers.withMessage(
      "* อัปโหลดได้เฉพาะไฟล์ PDF เท่านั้น *",
      (value) => {
        if (!value) return true; // ถ้าไม่มีไฟล์ ก็ผ่าน (ไม่บังคับ)
        return value.type === "application/pdf"; // เช็คว่าเป็น PDF
      }
    ),
  },
  call_for_paper: {
    fileType: helpers.withMessage(
      "* อัปโหลดได้เฉพาะไฟล์ PDF เท่านั้น *",
      (value) => {
        if (!value) return false;
        const allowedTypes = ["application/pdf"];
        return allowedTypes.includes(value.type);
      }
    ),
  },
  fee_receipt: {
    fileType: helpers.withMessage(
      "* อัปโหลดได้เฉพาะไฟล์ PDF เท่านั้น *",
      (value) => {
        if (!value) return false;
        const allowedTypes = ["application/pdf"];
        return allowedTypes.includes(value.type);
      }
    ),
  },
  fx_rate_document: {
    fileType: helpers.withMessage(
      "* อัปโหลดได้เฉพาะไฟล์ PDF เท่านั้น *",
      (value) => {
        if (!value) return false;
        const allowedTypes = ["application/pdf"];
        return allowedTypes.includes(value.type);
      }
    ),
  },
  conf_proof: {
    fileType: helpers.withMessage(
      "* อัปโหลดได้เฉพาะไฟล์ PDF เท่านั้น *",
      (value) => {
        if (!value) return false;
        const allowedTypes = ["application/pdf"];
        return allowedTypes.includes(value.type);
      }
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
    data.full_page &&
    data.call_for_paper &&
    data.accepted &&
    data.fee_receipt &&
    data.fx_rate_document &&
    data.conf_proof
  ) {
    data.check = true;
  } else {
    data.check = false;
  }
};

//ดึงข้อมูล
const getDataConf = async () => {
  if (id == null || id == "") {
    alert("โปรดเข้าสู่ระบบใหม่อีกครั้ง");
  }

  try {
    const response = await api.get(`/form/confer/${id}`);

    data.form = response.data.form;
    data.conf = response.data.conf;
    data.confer_name = response.data.confer_name;
    data.name = response.data.name;
    data.withdraw = response.data.withdraw;
console.log("data", data.form)
    data.full_page = response.data.conf.full_page;
    data.published_journals = response.data.conf.published_journals;
    data.q_proof = response.data.conf.q_proof;
    data.call_for_paper = response.data.conf.call_for_paper;
    data.accepted = response.data.conf.accepted;
    data.fee_receipt = response.data.conf.fee_receipt;
    data.fx_rate_document = response.data.conf.fx_rate_document;
    data.conf_proof = response.data.conf.conf_proof;

    const responsefile = await api.get(`/getFileConf?conf_id=${id}`);

    data.f_full_page = responsefile.data.file_full_page;
    data.f_published_journals = responsefile.data.file_published_journals;
    data.f_q_proof = responsefile.data.file_q_proof;
    data.f_call_for_paper = responsefile.data.file_call_for_paper;
    data.f_accepted = responsefile.data.file_accepted;
    data.f_fee_receipt = responsefile.data.file_fee_receipt;
    data.f_fx_rate_document = responsefile.data.file_fx_rate_document;
    data.f_conf_proof = responsefile.data.file_conf_proof;

    console.log("Success status confer:", response.data);
  } catch (error) {
    console.log("Error", error);
  }
};

//update file
const updateFile = async () => {
  const result = await v$.value.$validate();

  // ตรวจสอบว่าทุกค่ามีข้อมูล ไม่ใช่ "" หรือ null
  const requiredFields = [
    data.full_page,
    data.call_for_paper,
    data.accepted,
    data.fee_receipt,
    data.fx_rate_document,
    data.conf_proof,
  ];

  const hasEmptyField = requiredFields.some((field) => !field || field === "");

  if (hasEmptyField) {
    alert("กรุณาอัปโหลดไฟล์ให้ครบทุกช่องก่อนบันทึกข้อมูล");
    return;
  }

  if (result) {
    try {
      const dataforupdate = {
        conf_id: id,
        full_page: data.full_page,
        call_for_paper: data.call_for_paper,
        accepted: data.accepted,
        fee_receipt: data.fee_receipt,
        fx_rate_document: data.fx_rate_document,
        conf_proof: data.conf_proof,
        published_journals: data.published_journals,
        q_proof: data.q_proof,
      };

      const response = await api.put("updateFileConf", dataforupdate, {
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
  await getDataConf();
  checkfile();
  console.log("iii")
});
</script>
