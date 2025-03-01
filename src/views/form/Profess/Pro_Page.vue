<template>
  <div>
    <div class="container my-10 mx-auto">
      <p class="text-xl font-bold mb-5">
        ขออนุมัติค่า Page Charge เพื่อตีพิมพ์ผลงานในวารสารวิชาการระดับนานาชาติ
      </p>
      <Mainbox>
        <SectionWrapper>
          <TextInputLabelLeft
            label="ชื่อ"
            customLabel="w-2/12 text-lg font-bold"
            disabled="true"
            :placeholder="formData.name"
          />
          <TextInputLabelLeft
            label="ตำแหน่ง"
            customLabel="w-2/12 text-lg font-bold"
            :placeholder="formData.position"
            disabled="true"
          />

          <div class="flex flex-row">
            <TextInputLabelLeft
              label="มีรายชื่ออยู่ใน List ที่คณะได้ให้การรับรองแล้ว โดยมติคณะ ครั้งที่"
              customLabel="w-auto"
              customInput="max-w-max"
              customDiv="max-w-max"
              v-model="formData.textOther1"
              @input="handleInput('textOther1', $event)"
            />
            <TextInputLabelLeft
              label="วันที่"
              customLabel="ml-2 w-10"
              customInput="max-w-max"
              customDiv="max-w-max"
              type="date"
              v-model="formData.textOther2"
              @input="handleInput('textOther2', $event)"
            />
          </div>
          <p class="text-red-500 text-sm">
            สามารถตรวจสอบรายชื่อ List ของคณะได้ที่เว็บไซต์คณะที่ Share
            online-การวิจัย และ
            <a href="https://erp.it.kmitl.ac.th/journal_conf_list"
              >https://erp.it.kmitl.ac.th/journal_conf_list</a
            >
          </p>
        </SectionWrapper>
      </Mainbox>
      <Mainbox>
        <p class="leading-9 text-lg font-bold">
          1.  รายละเอียดวารสารที่ส่งเสนอพิจารณา / การตอบรับให้ลงตีพิมพ์
        </p>

        <SectionWrapper>
          <TextInputLabelLeft
            label="ชื่อวารสาร"
            customLabel="w-24"
            v-model="formData.nameJournal"
            @input="handleInput('nameJournal', $event)"
          />
          <p>เป็นวารสารที่อยู่ในฐานข้อมูลสากล</p>

          <div class="flex flex-row">
            <CheckInput
              label="ISI ได้รับการจัดลำดับ Quartile "
              customDiv="max-w-72 flex items-center"
              v-model="formData.checkISI"
              @input="handleCheckbox('checkISI', 'ISI')"
            />
            <TextInputLabelLeft
              label="ปี"
              customLabel="mr-2"
              customInput="max-w-max"
              customDiv="max-w-max"
              v-model="formData.input1ISI"
              @input="handleInput('input1ISI', $event)"
            />
            <TextInputLabelLeft
              label="ลำดับ Quartile"
              customLabel="ml-4 mr-2"
              customInput="max-w-max"
              customDiv="max-w-max"
              v-model="formData.quartileISI"
              @input="handleInput('quartileISI', $event)"
            />
            <TextInputLabelLeft
              label="Impact Factor"
              customLabel="w-28 mx-2"
              customInput="max-w-max"
              customDiv="max-w-max"
              v-model="formData.input2ISI"
              @input="handleInput('input2ISI', $event)"
            />
          </div>

          <div class="flex flex-row">
            <CheckInput
              label="SJR ได้รับการจัดลำดับ Quartile "
              customDiv="max-w-72 flex items-center"
              v-model="formData.checkSJR"
              @input="handleCheckbox('checkSJR', 'SJR')"
            />
            <TextInputLabelLeft
              label="ปี"
              customLabel="mr-2"
              customInput="max-w-max"
              customDiv="max-w-max"
              v-model="formData.input1SJR"
              @input="handleInput('input1SJR', $event)"
            />
            <TextInputLabelLeft
              label="ลำดับ Quartile"
              customLabel="ml-4 mr-2"
              customInput="max-w-max"
              customDiv="max-w-max"
              v-model="formData.quartileSJR"
              @input="handleInput('quartileSJR', $event)"
            />
            <TextInputLabelLeft
              label="SJR Score"
              customLabel="w-28 mx-2"
              customInput="max-w-max"
              customDiv="max-w-max"
              v-model="formData.input2SJR"
              @input="handleInput('input2SJR', $event)"
            />
          </div>

          <div class="flex flex-row">
            <CheckInput
              label="Scopus ได้รับการจัดลำดับ Quartile "
              customDiv="max-w-72 flex items-center"
              v-model="formData.checkScopus"
              @input="handleCheckbox('checkScopus', 'Scopus')"
            />
            <TextInputLabelLeft
              label="ปี"
              customLabel="mr-2"
              customInput="max-w-max"
              customDiv="max-w-max"
              v-model="formData.input1Scopus"
              @input="handleInput('input1Scopus', $event)"
            />
            <TextInputLabelLeft
              label="ลำดับ Quartile"
              customLabel="ml-4 mr-2"
              customInput="max-w-max"
              customDiv="max-w-max"
              v-model="formData.quartileScopus"
              @input="handleInput('quartileScopus', $event)"
            />
            <TextInputLabelLeft
              label="Cite Score"
              customLabel="w-28 mx-2"
              customInput="max-w-max"
              customDiv="max-w-max"
              v-model="formData.input2Scopus"
              @input="handleInput('input2Scopus', $event)"
            />
          </div>

          <div class="flex flex-row">
            <CheckInput
              label="Nature"
              customDiv="max-w-72 flex items-center"
              v-model="formData.nature"
              @input="handleCheckbox('nature', 'nature')"
            />
          </div>

          <label class="form-control">
            <div class="flex flex-row">
              <span class="flex mr-2 items-center">
                วงเงินตามเกณฑ์การให้การสนับสนุนไม่เกิน
              </span>
              <select
                class="select select-bordered w-3/12"
                v-model="formData.moneyOp"
                @change="handleInput('moneyOp', $event)"
              >
                <option disabled value="">เลือกวงเงินสนับสนุน</option>
                <option :value="20000">20,000 บาท</option>
                <option :value="30000">30,000 บาท</option>
                <option :value="40000">40,000 บาท</option>
                <option :value="60000">60,000 บาท</option>
                <option :value="70000">70,000 บาท</option>
              </select>
            </div>
          </label>
        </SectionWrapper>
      </Mainbox>

      <Mainbox>
        <p class="leading-9 text-lg font-bold">
          2. รายละเอียดผลงานวิจัยที่ส่งเสนอพิจารณา / ได้รับการตอบรับให้ตีพิมพ์
        </p>
        <SectionWrapper>
          <TextInputLabelLeft
            label="ชื่อบทความ"
            customLabel="w-24"
            v-model="formData.nameReach"
            @input="handleInput('nameReach', $event)"
          />

          <p>กำหนดการที่คาดว่าจะได้รับการลงตีพิมพ์ในวารสาร</p>

          <div class="flex flex-row mt-2 justify-between">
            <TextInputLabelLeft
              label="ปีที่ (Vol.)"
              customLabel="w-[40%]"
              customInput="w-[60%]"
              customDiv="max-w-[15%]"
              v-model="formData.schedule"
              @input="handleInput('schedule', $event)"
            />
            <TextInputLabelLeft
              label="ฉบับที่ (Issue)"
              customLabel="w-[45%]"
              customInput="w-[55%]"
              customDiv="max-w-[15%]"
              v-model="formData.issue"
              @input="handleInput('issue', $event)"
            />

            <label class="form-control w-full max-w-[20%]">
              <div class="flex flex-row w-full">
                <span class="flex mr-2 items-center"> เดือน </span>
                <select
                  class="select select-bordered flex-1"
                  v-model="formData.months"
                  @change="handleInput('months', $event)"
                >
                  <option disabled value="">เลือกเดือน</option>
                  <option value="มกราคม">มกราคม</option>
                  <option value="กุมภาพันธ์">กุมภาพันธ์</option>
                  <option value="มีนาคม">มีนาคม</option>
                  <option value="เมษายน">เมษายน</option>
                  <option value="พฤษภาคม">พฤษภาคม</option>
                  <option value="มิถุนายน">มิถุนายน</option>
                  <option value="กรกฎาคม">กรกฎาคม</option>
                  <option value="สิงหาคม">สิงหาคม</option>
                  <option value="กันยายน">กันยายน</option>
                  <option value="ตุลาคม">ตุลาคม</option>
                  <option value="พฤศจิกายน">พฤศจิกายน</option>
                  <option value="ธันวาคม">ธันวาคม</option>
                </select>
              </div>
            </label>

            <TextInputLabelLeft
              label="ปี ค.ศ./พ.ศ."
              customLabel="w-[40%]"
              customInput="w-[60%]"
              customDiv="max-w-[15%]"
              v-model="formData.year"
              @input="handleInput('year', $event)"
            />

            <TextInputLabelLeft
              label="เลขที่ ISSN/ISBN (อื่นๆ)"
              customLabel="w-[40%]"
              customInput="w-[60%]"
              customDiv="max-w-[30%]"
              v-model="formData.ISSN"
              @input="handleInput('ISSN', $event)"
            />
          </div>

          <div class="flex flex-row mt-2 justify-between w-[100%]">
            <TextInputLabelLeft
              label="วันที่ส่งบทความไปยังสำนักพิมพ์เจ้าของวารสาร"
              type="date"
              customLabel="w-[100%]"
              customInput="w-[35%]"
              customDiv="max-w-[35%]"
              v-model="formData.submitReach"
              @input="handleInput('submitReach', $event)"
            />
            <TextInputLabelLeft
              label="วันประกาศผลการพิจารณา"
              type="date"
              customLabel="w-[100%]"
              customDiv="max-w-[30%]"
              v-model="formData.announce"
              @input="handleInput('announce', $event)"
            />
            <TextInputLabelLeft
              label="วันสุดท้ายของการจ่ายค่าตีพิมพ์"
              type="date"
              customInput="w-[35%]"
              customDiv="max-w-[30%]"
              v-model="formData.latePay"
              @input="handleInput('latePay', $event)"
            />
          </div>

          <SectionWrapper>
            <div class="flex flex-row mt-3">
              <p class="flex text-blue-500 w-12 items-center">(ถ้ามี)</p>
              <TextInputLabelLeft
                label="บทความวิจัยนี้เป็นผลงานจากโครงการวิจัยเรื่อง"
                customLabel="w-[30%]"
                v-model="formData.reachOther"
                @input="handleInput('reachOther', $event)"
              />
            </div>

            <p>ประเภทโครงการวิจัย</p>

            <div class="flex flex-row ml-5">
              <RadioInput
                label="วิจัยพื้นฐาน"
                value="วิจัยพื้นฐาน"
                name="type"
                customDiv="max-w-fit mr-10 flex items-cente"
                v-model="formData.radioResearch"
                @change="handleInput('radioResearch', $event)"
              />
              <RadioInput
                label="วิจัยประยุกต์"
                value="วิจัยประยุกต์"
                name="type"
                customDiv="max-w-fit mr-10 flex items-cente"
                v-model="formData.radioResearch"
                @change="handleInput('radioResearch', $event)"
              />
              <RadioInput
                label="วิจัยและพัฒนา"
                value="วิจัยและพัฒนา"
                name="type"
                customDiv="max-w-fit mr-10 flex items-cente"
                v-model="formData.radioResearch"
                @change="handleInput('radioResearch', $event)"
              />
              <div class="flex flex-row">
                <RadioInput
                  label="วิจัยอื่น ๆ "
                  value="อื่น ๆ"
                  name="type"
                  customDiv="max-w-fit mr-2 flex items-cente"
                  v-model="formData.radioResearch"
                  @change="handleInput('radioResearch', $event)"
                />
                <TextInputLabelLeft
                  label="(ระบุ)"
                  name="type"
                  customDiv="max-w-fit flex items-cente"
                  v-model="formData.otherInput"
                  @input="handleInput('otherInput', $event)"
                />
              </div>
            </div>

            <TextInputLabelLeft
              label="ชื่อแหล่งทุนวิจัย"
              customLabel="w-auto min-w-fit"
              v-model="formData.source"
              @input="handleInput('source', $event)"
            />

            <div class="flex flex-row">
              <TextInputLabelLeft
                label="วงเงินงบประมาณการวิจัย"
                customLabel="w-auto min-w-fit"
                customDiv="max-w-max mr-10"
                v-model="formData.credit"
                @input="handleInput('credit', $event)"
              />
              <TextInputLabelLeft
                label="ประจำปี"
                customLabel="w-auto min-w-fit"
                customDiv="max-w-max mr-10"
                v-model="formData.inYears"
                @input="handleInput('inYears', $event)"
              />
            </div>
          </SectionWrapper>
        </SectionWrapper>
      </Mainbox>

      <Mainbox>
        <p class="text-lg font-bold">3. ผู้ขอรับการสนับสนุน</p>
        <SectionWrapper>
          <RadioInput
            label="ผู้ประพันธ์อันดับแรก First Author"
            value="First Author"
            name="Author"
            v-model="formData.redioAuth"
            @change="handleInput('redioAuth', $event)"
          />
          <RadioInput
            label="ผู้ประพันธ์บรรณกิจ Corresponding Author"
            value="Corresponding Author"
            name="Author"
            v-model="formData.redioAuth"
            @change="handleInput('redioAuth', $event)"
          />
        </SectionWrapper>
      </Mainbox>

      <Mainbox>
        <p class="leading-9 text-lg font-bold">
          4. ขอรับการสนับสนุนค่าใช้จ่ายในการลงตีพิมพ์ (Page Charge)
        </p>
        <SectionWrapper>
          <TextInputLabelLeft
            label="จำนวนเงิน"
            customLabel="w-auto min-w-fit"
            customInput="max-w-fit"
            v-model="formData.moneyPG"
            @input="handleInput('moneyPG', $event)"
          />
        </SectionWrapper>
      </Mainbox>
      <Mainbox>
        <SectionWrapper>
          <p class="text-lg font-bold">เอกสารหลักฐานที่แนบ</p>
          <FileInput
            label="หลักฐานแสดงการอยู่ในฐานข้อมูลสากล ISI หรือ SJR หรือ Scopus หรือ Nature"
            name="First"
            type="file"
            @change="handleFile($event, 'file1')"
          />
          <FileInput
            label="หลักฐานแสดงการจัดลำดับ Quartile ของฐานข้อมูลสากล ISI หรือ SJR หรือ Scopus"
            name="Second"
            type="file"
            @change="handleFile($event, 'file2')"
          />
          <FileInput
            label="ใบแจ้งหนี้ค่าใช้จ่ายสำหรับการตีพิมพ์ / อัตราค่าใช้จ่ายที่ประกาศบนหน้าเว็บไซต์"
            name="Third"
            type="file"
            @change="handleFile($event, 'file3')"
          />
          <FileInput
            label="หลักฐานการส่งบทความ หนังสือตอบรับบทความ"
            name="Fourth"
            type="file"
            @change="handleFile($event, 'file4')"
          />
          <FileInput
            label="สำเนาบทความ และ Upload บทความเข้าระบบ IT Scholar"
            name="Fifth"
            type="file"
            @change="handleFile($event, 'file5')"
          />
        </SectionWrapper>
      </Mainbox>
      <div class="flex justify-end">
        <button @click="NewPC" class="btn btn-success text-white">
          บันทึกข้อมูล
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted, computed } from "vue";
import axios from "axios";

import api from "@/setting/api";
import { useUserStore } from "@/store/userStore";

import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import TextInputLabelLeft from "@/components/Input/TextInputLabelLeft.vue";
import RadioInput from "@/components/Input/RadioInput.vue";
import CheckInput from "@/components/Input/CheckInput.vue";
import FileInput from "@/components/Input/FileInput.vue";

const userStore = useUserStore();
const user = computed(() => userStore.user);

// จัดการข้อมูลหลัก
const formData = reactive({
  // asdf: "",
  userID: null,
  // Professor
  name: null,
  position: null,
  textOther1: 0,
  textOther2: 0,
  // PageDetail
  nameJournal: null,
  check: [],
  input1ISI: null,
  quartileISI: null,
  input2ISI: null, //isi
  input1SJR: null,
  quartileSJR: null,
  input2SJR: null, //sjr
  input1Scopus: null,
  quartileScopus: null,
  input2Scopus: null, //scopus
  moneyOp: null,
  //ResearchDetail
  nameReach: null,
  schedule: null,
  issue: null,
  months: null,
  year: null,
  ISSN: null,
  submitReach: null,
  announce: null,
  latePay: null,

  reachOther: null,
  radioResearch: null,
  otherInput: null,
  source: null,
  credit: null,
  inYears: null,
  //AuthForm
  redioAuth: null,
  //MoneyPG
  moneyPG: null,
  //FileForm
  file1: null,
  file2: null,
  file3: null,
  file4: null,
  file5: null,
});

const inputTypes = {
  // asdf: "",
  userID: "string",
  // Professor
  name: "string",
  position: "string",
  textOther1: "number",
  textOther2: "date",
  // PageDetail
  nameJournal: "string",
  check: "array",
  input1ISI: "number",
  quartileISI: "number",
  input2ISI: "number", //isi
  input1SJR: "number",
  quartileSJR: "number",
  input2SJR: "number", //sjr
  input1Scopus: "number",
  quartileScopus: "number",
  input2Scopus: "number", //scopus
  moneyOp: "number",
  //ResearchDetail
  nameReach: "string",
  schedule: "number",
  issue: "number",
  months: "string",
  year: "number",
  ISSN: "string",
  submitReach: "date",
  announce: "date",
  latePay: "date",

  reachOther: "string",
  radioResearch: "string",
  otherInput: "string",
  source: "string",
  credit: "number",
  inYears: "number",
  //AuthForm
  redioAuth: "string",
  //MoneyPG
  moneyPG: "number",
  //FileForm
  file1: "string",
  file2: "string",
  file3: "string",
  file4: "string",
  file5: "string",
};
onMounted(async () => {
  await userStore.fetchUser();

  formData.userID = user.value?.user_id;
  formData.name = user.value?.user_nameth || "";
  formData.position = user.value?.user_positionth || "";
});

//วันที่ส่งเอกสาร
const datetime = new Date();
// Extract year, month, and day
const year = datetime.getFullYear();
const month = String(datetime.getMonth() + 1).padStart(2, "0"); // Months are 0-based
const day = String(datetime.getDate()).padStart(2, "0");
// Combine in YYYY-MM-DD format
formData.docSubmitDate = `${year}-${month}-${day}`;
console.log(formData.docSubmitDate);

const handleInput = (key, event) => {
  // formData[key] = value;
  const value = event.target.value.trim(); // ลบช่องว่างหน้า-หลัง
  const type = inputTypes[key]; // ตรวจสอบประเภทของ input
  if (type === "number") {
    formData[key] = value === "" ? null : parseInt(value, 10);
  } else {
    formData[key] = value;
  }
  console.log("0000000000000000000000000000000");
  // console.log(JSON.stringify(formData));
  console.log(`${key} updated to: ${value}`);
  // console.log("key: ", key);
  // console.log("value: ", value);
  console.log("--------------------------------");
};

const handleCheckbox = (key, value) => {
  if (formData[key]) {
    // If the checkbox is checked, uncheck it and remove the value from the array
    formData[key] = "";
    console.log("1");
    formData.check = formData.check.filter((item) => item !== value);
  } else {
    // If the checkbox is unchecked, check it and add the value to the array
    formData[key] = value;
    console.log("12");
    formData.check.push(value);
  }
  console.log(`${key} is now ${formData[key]}`);
  console.log("Updated formData.check:", formData.check);
};

const handleFile = (event, fieldName) => {
  const file = event.target.files[0];
  if (file) {
    formData[fieldName] = file;
    console.log(`File assigned to ${fieldName}:`, formData[fieldName]);
    console.log("Updated formData:", formData);
  } else {
    console.error(`No file selected for ${fieldName}.`);
  }
};
// const showPDF = (file) => {
//   if (file instanceof File || file instanceof Blob) {
//     return URL.createObjectURL(file);
//   }
//   console.error("Invalid file for PDF display:", file);
//   return "";
// };
// const isPDF = (file) => {
//   // Check if the file type is PDF
//   return file && file.type === "application/pdf";
// };

const NewPC = async () => {
  try {
    console.log("before postPC: ", formData);
    console.log("formData as JSON:", JSON.stringify(formData, null, 2));
    console.log("before userID: ", JSON.stringify(formData));

    const dataForBackend = {
      user_id: formData.userID,
      pageC_times: formData.textOther1,
      pageC_days: formData.textOther2,
      journal_name: formData.nameJournal,
      quality_journal: formData.check,
      pc_isi_year: formData.input1ISI,
      pc_sjr_year: formData.input1SJR,
      pc_scopus_year: formData.input1Scopus,
      impact_factor: formData.input2ISI,
      sjr_score: formData.input2SJR,
      cite_score: formData.input2Scopus,
      qt_isi: formData.quartileISI,
      qt_sjr: formData.quartileSJR,
      qt_scopus: formData.quartileScopus,
      support_limit: formData.moneyOp,
      article_title: formData.nameReach,
      vol_journal: formData.schedule,
      issue_journal: formData.issue,
      month: formData.months,
      year: formData.year,
      ISSN_ISBN: formData.ISSN,
      submission_date: formData.submitReach,
      date_review_announce: formData.announce,
      final_date: formData.latePay,
      article_research_ject: formData.reachOther,
      research_type: formData.radioResearch,
      research_type2: formData.otherInput,
      name_funding_source: formData.source,
      budget_limit: formData.credit,
      annual: formData.inYears,
      presenter_type: formData.redioAuth,
      request_support: formData.moneyPG,

      pc_proof: formData.file1,
      q_pc_proof: formData.file2,
      invoice_public: formData.file3,
      accepted: formData.file4,
      copy_article: formData.file5,
    };

    console.log("postPC: ", JSON.stringify(dataForBackend));
    const response = await axios.post(
      "http://localhost:3000/page_charge",
      dataForBackend,
      {
        headers: {
          "Content-Type": "multipart/form-data", // Required for file uploads
        },
      }
    );
    alert("Have new PC!");
    console.log("res: ", response);

    console.log("allpostPC: ", message.value);
    console.log("postPC: ", response.data);
  } catch (error) {
    console.error(error);
    message.value = "Error adding page_charge. Please try again.";
  }
};
</script>
