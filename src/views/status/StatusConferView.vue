<template>
  <div class="container my-10 mx-auto">
    <h1 class="text-xl font-bold p-5">สถานะเอกสาร</h1>
    <Mainbox>
      <h2 class="text-lg font-bold mb-5">
        ขออนุมัติเดินทางไปเผยแพร่ผลงานในการประชุมทางวิชาการ
      </h2>
      <p class="ml-5">ชื่อการประชุม : {{ data.confer_name }}</p>
      <p class="ml-5">ชื่อบทความ : {{ data.name }}</p>

      <div class="flex justify-center" v-if="data.form.form_status == 'ไม่อนุมัติ'">
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

      <div class="flex justify-center" v-if="data.form.form_status == 'อนุมัติ'">
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

      <div class="flex justify-center" v-if="data.form.form_status == 'คณบดี'">
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

      <div class="flex justify-center" v-if="data.form.form_status == 'รองคณบดี'">
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

      <div class="flex justify-center" v-if="data.form.form_status == 'ฝ่ายบริหารการเงิน'">
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

      <div class="flex justify-center" v-if="data.form.form_status == 'ฝ่ายบริหารงานวิจัย'">
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

      <div class="flex justify-center" v-if="data.form.form_status == 'ฝ่ายบริหารทรัพยากรบุคคล'">
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

    <Mainbox>
      <p class="text-lg font-bold">เอกสารหลักฐานที่แนบ</p>
      <span class="text-s font-bold text-red-500 ml-5 mt-2" v-if="!data.check">
        ส่งเอกสารเพิ่มเติมได้เพียงครั้งเดียวเท่านั้นและจำเป็นต้องกรอกทุกช่อง
      </span>
      <div class="px-5 mb-3">
        <div class="flex flex-rowitems-center mt-2 justify-between"
          v-if="data.conf.full_page && data.conf.full_page !== ''">
          <p class="w-3/5 min-w-64 flex place-items-center">
            สำเนาบทความ (Full Paper)
          </p>

          <div class="ml-5">
            <button @click="getFile(data.f_full_page)" class="btn bg-[#E85F19] text-white mr-5">
              ดูเอกสาร
            </button>
            <button @click="downloadFile(data.f_full_page, 'สำเนาบทความ')" class="btn bg-[#4285F4] text-white">
              โหลดเอกสาร
            </button>
          </div>
        </div>
      </div>

      <div class="px-5 mb-3">
        <div class="flex flex-rowitems-center mt-2 justify-between" v-if="
          data.conf.published_journals && data.conf.published_journals !== ''
        ">
          <p class="w-3/5 min-w-64 flex place-items-center">
            *กรณีเบิกค่าใช้จ่ายเต็มวงเงิน* (Full Paper ประกอบการเบิก)
            มีผลงานตีพิมพ์ในวารสารในฐานข้อมูล WoS/SJR
            ซึ่งได้รับการตีพิมพ์ไม่เกิน 2 ปี ก่อนการประชุม เมื่อ
          </p>
          <div class="ml-5">
            <button @click="getFile(data.f_published_journals)" class="btn bg-[#E85F19] text-white mr-5">
              ดูเอกสาร
            </button>
            <button @click="
              downloadFile(
                data.f_published_journals,
                'Full Paper ประกอบการเบิก'
              )
              " class="btn bg-[#4285F4] text-white">
              โหลดเอกสาร
            </button>
          </div>
        </div>

        <div v-else>
          <FileInput
            label="(Full Paper ประกอบการเบิก) มีผลงานตีพิมพ์ในวารสารในฐานข้อมูล WoS/SJR ซึ่งได้รับการตีพิมพ์ไม่เกิน 2 ปี ก่อนการประชุม"
            name="published_journals" type="file" @change="handleFile($event, 'published_journals')" 
            disabled="data.withdraw == '50%' ? true: false"/>
          <span v-if="v$.published_journals.$error" class="text-base ml-2 text-red-500">
            {{ v$.published_journals.$errors[0].$message }}
          </span>
        </div>
      </div>

      <div class="px-5 mb-3">
        <div class="flex flex-rowitems-center mt-2 justify-between"
          v-if="data.conf.q_proof && data.conf.q_proof !== ''">
          <p class="w-3/5 min-w-64 flex place-items-center">
            *กรณีเบิกค่าใช้จ่ายเต็มวงเงิน* หลักฐานเอกสาร Quartile ของ Paper
            ที่ใช้ประกอบการเบิก
          </p>
          <div class="ml-5">
            <button @click="getFile(data.f_q_proof)" class="btn bg-[#E85F19] text-white mr-5">
              ดูเอกสาร
            </button>
            <button @click="
              downloadFile(data.f_q_proof, 'หลักฐานเอกสาร Quartile ของ Paper')
              " class="btn bg-[#4285F4] text-white">
              โหลดเอกสาร
            </button>
          </div>
        </div>

        <div v-else>
          <FileInput label="*กรณีเบิกค่าใช้จ่ายเต็มวงเงิน* หลักฐานเอกสาร Quartile ของ Paper ที่ใช้ประกอบการเบิก"
            name="q_proof" type="file" @change="handleFile($event, 'q_proof')" 
            disabled="data.withdraw == '50%' ? true: false"/>
          <span v-if="v$.q_proof.$error" class="text-base ml-2 text-red-500">
            {{ v$.q_proof.$errors[0].$message }}
          </span>
        </div>
      </div>

      <div class="px-5 mb-3">
        <div class="flex flex-rowitems-center mt-2 justify-between"
          v-if="data.conf.call_for_paper && data.conf.call_for_paper !== ''">
          <p class="w-3/5 min-w-64 flex place-items-center">
            เอกสารประชาสัมพันธ์การจัดการประชุมทางวิชาการ (Call for paper)
          </p>
          <div class="ml-5">
            <button @click="getFile(data.f_call_for_paper)" class="btn bg-[#E85F19] text-white mr-5">
              ดูเอกสาร
            </button>
            <button @click="
              downloadFile(
                data.f_call_for_paper,
                'เอกสารประชาสัมพันธ์การจัดการประชุม'
              )
              " class="btn bg-[#4285F4] text-white">
              โหลดเอกสาร
            </button>
          </div>
        </div>

        <div v-else>
          <FileInput label="เอกสารประชาสัมพันธ์การจัดการประชุมทางวิชาการ (Call for paper)" name="call_for_paper"
            type="file" @change="handleFile($event, 'call_for_paper')" />
          <span v-if="v$.call_for_paper.$error" class="text-base ml-2 text-red-500">
            {{ v$.call_for_paper.$errors[0].$message }}
          </span>
        </div>
      </div>

      <div class="px-5 mb-3">
        <div class="flex flex-rowitems-center mt-2 justify-between"
          v-if="data.conf.accepted && data.conf.accepted !== ''">
          <p class="w-3/5 min-w-64 flex place-items-center">
            จดหมายการตอบรับเข้าร่วมประชุม (Accepted)
          </p>
          <div class="ml-5">
            <button @click="getFile(data.f_accepted)" class="btn bg-[#E85F19] text-white mr-5">
              ดูเอกสาร
            </button>
            <button @click="downloadFile(data.f_accepted, 'จดหมายการตอบรับ')" class="btn bg-[#4285F4] text-white">
              โหลดเอกสาร
            </button>
          </div>
        </div>

        <div v-else>
          <FileInput label="จดหมายการตอบรับเข้าร่วมประชุม (Accepted)" name="accepted" type="file"
            @change="handleFile($event, 'accepted')" />
          <span v-if="v$.accepted.$error" class="text-base ml-2 text-red-500">
            {{ v$.accepted.$errors[0].$message }}
          </span>
        </div>
      </div>

      <div class="px-5 mb-3">
        <div class="flex flex-rowitems-center mt-2 justify-between"
          v-if="data.conf.fee_receipt && data.conf.fee_receipt !== ''">
          <p class="w-3/5 min-w-64 flex place-items-center">
            เอกสารแสดงค่าลงทะเบียน
          </p>
          <div class="ml-5">
            <button @click="getFile(data.f_fee_receipt)" class="btn bg-[#E85F19] text-white mr-5">
              ดูเอกสาร
            </button>
            <button @click="
              downloadFile(data.f_fee_receipt, 'เอกสารแสดงค่าลงทะเบียน')
              " class="btn bg-[#4285F4] text-white">
              โหลดเอกสาร
            </button>
          </div>
        </div>

        <div v-else>
          <FileInput label="เอกสารแสดงค่าลงทะเบียน" name="fee_receipt" type="file"
            @change="handleFile($event, 'fee_receipt')" />
          <span v-if="v$.fee_receipt.$error" class="text-base ml-2 text-red-500">
            {{ v$.fee_receipt.$errors[0].$message }}
          </span>
        </div>
      </div>

      <div class="px-5 mb-3">
        <div class="flex flex-rowitems-center mt-2 justify-between"
          v-if="data.conf.fx_rate_document && data.conf.fx_rate_document != ''">
          <p class="w-3/5 min-w-64 flex place-items-center">
            เอกสารแสดงอัตราแลกเปลี่ยน (ณ วันที่ยื่น)
          </p>
          <div class="ml-5">
            <button @click="getFile(data.f_fx_rate_document)" class="btn bg-[#E85F19] text-white mr-5">
              ดูเอกสาร
            </button>
            <button @click="
              downloadFile(
                data.f_fx_rate_document,
                'เอกสารแสดงอัตราแลกเปลี่ยน'
              )
              " class="btn bg-[#4285F4] text-white">
              โหลดเอกสาร
            </button>
          </div>
        </div>

        <div v-else>
          <FileInput label="เอกสารแสดงอัตราแลกเปลี่ยน (ณ วันที่ยื่น)" name="fx_rate_document" type="file"
            @change="handleFile($event, 'fx_rate_document')" />
          <span v-if="v$.fx_rate_document.$error" class="text-base ml-2 text-red-500">
            {{ v$.fx_rate_document.$errors[0].$message }}
          </span>
        </div>
      </div>

      <div class="px-5 mb-3">
        <div class="flex flex-rowitems-center mt-2 justify-between"
          v-if="data.conf.conf_proof && data.conf.conf_proof != ''">
          <p class="w-3/5 min-w-64 flex place-items-center">
            หลักฐานการประชุมวิชาการอยู่ในฐาน Scopus
          </p>
          <div class="ml-5">
            <button @click="getFile(data.f_conf_proof)" class="btn bg-[#E85F19] text-white mr-5">
              ดูเอกสาร
            </button>
            <button @click="
              downloadFile(
                data.f_conf_proof,
                'หลักฐานการประชุมวิชาการอยู่ในฐาน Scopus'
              )
              " class="btn bg-[#4285F4] text-white">
              โหลดเอกสาร
            </button>
          </div>
        </div>

        <div v-else>
          <FileInput label="หลักฐานการประชุมวิชาการอยู่ในฐาน Scopus" name="conf_proof" type="file"
            @change="handleFile($event, 'conf_proof')" />
          <span v-if="v$.conf_proof.$error" class="text-base ml-2 text-red-500">
            {{ v$.conf_proof.$errors[0].$message }}
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
import { helpers } from "@vuelidate/validators";

import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";

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
    console.error("Error downloading file:", error);
  }
};

onMounted(async () => {
  await getDataConf();
  checkfile();
});
</script>
