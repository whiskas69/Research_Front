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
              @input="handleInput('textOther1', $event.target.value)"
            />
            <TextInputLabelLeft
              label="วันที่"
              customLabel="ml-2 w-10"
              customInput="max-w-max"
              type="date"
              v-model="formData.textOther2"
              @input="handleInput('textOther2', $event.target.value)"
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
      <!-- 1.  รายละเอียดวารสารที่ส่งเสนอพิจารณา / การตอบรับให้ลงตีพิมพ์  -->
      <Mainbox>
        <p class="leading-9 text-lg font-bold">
          1.  รายละเอียดวารสารที่ส่งเสนอพิจารณา / การตอบรับให้ลงตีพิมพ์
        </p>

        <SectionWrapper>
          <TextInputLabelLeft
            label="ชื่อวารสาร"
            name="Input"
            customLabel="w-24"
            v-model="formData.nameJournal"
            @input="handleInput('nameJournal', $event.target.value)"
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
              @input="handleInput('input1ISI', $event.target.value)"
            />
            <TextInputLabelLeft
              label="Impact Factor"
              customLabel="w-28 mx-2"
              customInput="max-w-max"
              customDiv="max-w-max"
              v-model="formData.input2ISI"
              @input="handleInput('input2ISI', $event.target.value)"
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
              @input="handleInput('input1SJR', $event.target.value)"
            />
            <TextInputLabelLeft
              label="SJR Score"
              customLabel="w-28 mx-2"
              customInput="max-w-max"
              customDiv="max-w-max"
              v-model="formData.input2SJR"
              @input="handleInput('input2SJR', $event.target.value)"
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
              @input="handleInput('input1Scopus', $event.target.value)"
            />
            <TextInputLabelLeft
              label="Cite Score"
              customLabel="w-28 mx-2"
              customInput="max-w-max"
              customDiv="max-w-max"
              v-model="formData.input2Scopus"
              @input="handleInput('input2Scopus', $event.target.value)"
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
              <!-- not sure select -->
              <select
                class="select select-bordered w-3/12"
                v-model="formData.moneyOp"
                @change="handleInputSelect"
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
      <!-- 2. รายละเอียดผลงานวิจัยที่ส่งเสนอพิจารณา / ได้รับการตอบรับให้ตีพิมพ์ -->
      <Mainbox>
        <p class="leading-9 text-lg font-bold">
          2. รายละเอียดผลงานวิจัยที่ส่งเสนอพิจารณา / ได้รับการตอบรับให้ตีพิมพ์
        </p>
        <SectionWrapper>
          <TextInputLabelLeft
            label="ชื่อบทความ"
            customLabel="w-auto min-w-fit"
            v-model="formData.nameReach"
            @input="handleInput('nameReach', $event.target.value)"
          />
        </SectionWrapper>

        <div>
          <p>กำหนดการที่คาดว่าจะได้รับการลงตีพิมพ์ในวารสาร</p>
          <div class="flex flex-row mt-2 justify-between">
            <TextInputLabelLeft
              label="ปีที่ (Vol.)"
              customLabel="w-auto min-w-fit"
              customDiv="max-w-fit"
              v-model="formData.schedule"
              @input="handleInput('schedule', $event.target.value)"
            />
            <TextInputLabelLeft
              label="ฉบับที่ (Issue)"
              customLabel="w-auto min-w-fit"
              customDiv="max-w-fit"
              v-model="formData.issue"
              @input="handleInput('issue', $event.target.value)"
            />
            <TextInputLabelLeft
              label="เดือน"
              customLabel="w-auto min-w-fit"
              customDiv="max-w-fit"
              v-model="formData.months"
              @input="handleInput('months', $event.target.value)"
            />
            <div class="flex flex-row">
              <TextInputLabelLeft
                label="ปี ค.ศ./พ.ศ."
                customLabel="w-auto min-w-fit"
                customDiv="max-w-fit"
                v-model="formData.year"
                @input="handleInput('year', $event.target.value)"
              />
              <TextInputLabelLeft
                label="เลขที่ ISSN/ISBN (อื่นๆ)"
                customLabel="w-auto min-w-fit"
                customDiv="max-w-fit"
                v-model="formData.ISSN"
                @input="handleInput('ISSN', $event.target.value)"
              />
            </div>
          </div>

          <div class="flex flex-row mt-4 justify-between">
            <TextInputLabelLeft
              label="วันที่ส่งบทความไปยังสำนักพิมพ์เจ้าของวารสาร"
              type="date"
              customLabel="w-auto min-w-fit"
              customDiv="max-w-fit"
              v-model="formData.submitReach"
              @input="handleInput('submitReach', $event.target.value)"
            />
            <TextInputLabelLeft
              label="วันประกาศผลการพิจารณา"
              type="date"
              customLabel="w-auto min-w-fit"
              customDiv="max-w-fit"
              v-model="formData.announce"
              @input="handleInput('announce', $event.target.value)"
            />
            <TextInputLabelLeft
              label="วันสุดท้ายของการจ่ายค่าตีพิมพ์"
              type="date"
              customLabel="w-auto min-w-fit"
              customDiv="max-w-fit"
              v-model="formData.latePay"
              @input="handleInput('latePay', $event.target.value)"
            />
          </div>

          <SectionWrapper>
            <div class="flex flex-row mt-3">
              <p class="flex text-blue-500 w-12 items-center">(ถ้ามี)</p>
              <TextInputLabelLeft
                label="บทความวิจัยนี้เป็นผลงานจากโครงการวิจัยเรื่อง"
                type="date"
                customLabel="w-auto min-w-fit"
                customDiv="max-w-fit"
                v-model="formData.reachOther"
                @input="handleInput('reachOther', $event.target.value)"
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
                @change="handleInputRediO"
              />
              <RadioInput
                label="วิจัยประยุกต์"
                value="วิจัยประยุกต์"
                name="type"
                customDiv="max-w-fit mr-10 flex items-cente"
                v-model="formData.radioResearch"
                @change="handleInputRediO"
              />
              <RadioInput
                label="วิจัยและพัฒนา"
                value="วิจัยและพัฒนา"
                name="type"
                customDiv="max-w-fit mr-10 flex items-cente"
                v-model="formData.radioResearch"
                @change="handleInputRediO"
              />
              <div class="flex flex-row">
                <RadioInput
                  label="วิจัยอื่น ๆ "
                  value="วิจัยอื่น ๆ"
                  name="type"
                  customDiv="max-w-fit mr-2 flex items-cente"
                  v-model="formData.radioResearch"
                  @change="handleInputRediO"
                />
                <TextInputLabelLeft
                  label="(ระบุ)"
                  name="type"
                  customDiv="max-w-fit flex items-cente"
                  v-model="formData.otherInput"
                  @input="handleInput"
                />
              </div>
            </div>

            <TextInputLabelLeft
              label="ชื่อแหล่งทุนวิจัย"
              customLabel="w-auto min-w-fit"
              v-model="formData.source"
              @input="handleInput('source', $event.target.value)"
            />
            <div class="flex flex-row">
              <TextInputLabelLeft
                label="วงเงินงบประมาณการวิจัย"
                customLabel="w-auto min-w-fit"
                customDiv="max-w-max mr-10"
                v-model="formData.credit"
                @input="handleInput('credit', $event.target.value)"
              />
              <TextInputLabelLeft
                label="ประจำปี"
                customLabel="w-auto min-w-fit"
                customDiv="max-w-max mr-10"
                v-model="formData.inYears"
                @input="handleInput('inYears', $event.target.value)"
              />
            </div>
          </SectionWrapper>
        </div>
      </Mainbox>
      <!-- 3. ผู้ขอรับการสนับสนุน -->
      <Mainbox>
        <p class="text-lg font-bold">3. ผู้ขอรับการสนับสนุน</p>
        <SectionWrapper>
          <RadioInput
            label="ผู้ประพันธ์อันดับแรก First Author"
            value="First Author"
            name="Author"
            v-model="formData.redioAuth"
            @change="handleInputRedioAuth"
          />
          <RadioInput
            label="ผู้ประพันธ์บรรณกิจ Corresponding Author"
            value="Corresponding Author"
            name="Author"
            v-model="formData.redioAuth"
            @change="handleInputRedioAuth"
          />
        </SectionWrapper>
      </Mainbox>
      <!-- 4. ขอรับการสนับสนุนค่าใช้จ่ายในการลงตีพิมพ์ (Page Charge) -->
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
            @input="handleInput('moneyPG', $event.target.value)"
          />
        </SectionWrapper>
      </Mainbox>
      <!-- เอกสารหลักฐานที่แนบ -->
      <Mainbox>
        <SectionWrapper>
          <p class="text-lg font-bold">เอกสารหลักฐานที่แนบ</p>
          <FileInput
            label="หลักฐานแสดงการอยู่ในฐานข้อมูลสากล ISI หรือ SJR หรือ Scopus หรือ Nature"
            name="First"
            type="file"
            v-model="formData.file1"
            @change="handleFile($event, 'file1')"
          />
          <!-- ยังไม่ได้ใส่ v-model ต้องเพิ่มในตาราง filePDF ด้วย -->
          <TextInputLabelLeft
            label="ลำดับ Quartile ของฐานข้อมูลสากล ISI หรือ SJR หรือ Scopus"
            customLabel="w-auto min-w-fit"
            customDiv="max-w-max mr-10"
            @input="handleInput('inputFile2', $event.target.value)"
          />
          <FileInput
            label="หลักฐานแสดงการจัดลำดับ Quartile ของฐานข้อมูลสากล ISI หรือ SJR หรือ Scopus"
            name="Second"
            type="file"
            v-model="formData.file2"
            @change="handleFile($event, 'file2')"
          />
          <FileInput
            label="ใบแจ้งหนี้ค่าใช้จ่ายสำหรับการตีพิมพ์ / อัตราค่าใช้จ่ายที่ประกาศบนหน้าเว็บไซต์"
            name="Third"
            type="file"
            v-model="formData.file3"
            @change="handleFile($event, 'file3')"
          />
          <FileInput
            label="หลักฐานการส่งบทความ หนังสือตอบรับบทความ"
            name="Fourth"
            type="file"
            v-model="formData.file4"
            @change="handleFile($event, 'file4')"
          />
          <FileInput
            label="สำเนาบทความ และ Upload บทความเข้าระบบ IT Scholar"
            name="Fifth"
            type="file"
            v-model="formData.file5"
            @change="handleFile($event, 'file5')"
          />

          <!-- <input type="file" class="bg-red-200" @change="handleFile" /> -->

          <!-- <div v-if="formData.file1">
            <p>File Name: {{ formData.file1.name }}</p>
            <p>File Size: {{ formData.file1.size }} bytes</p>
            <p>File Type: {{ formData.file1.type }}</p>
            <a :href="URL.createObjectURL(formData.file1)" target="_blank"
              >View File</a
            >
          </div> -->

          <!-- showPDF {{ Use an iframe to display PDF }}-->
          <!-- <div v-if="formData.file1" class="columns is-multiline">
            <div class="card-image">
              <figure class="image my-5">
                <iframe
                  v-if="isPDF(formData.file1)"
                  :src="showPDF(formData.file1)"
                  width="100%"
                  height="500px"
                ></iframe>
              </figure>
            </div>
          </div>
          {{ formData.file1 }} -->
        </SectionWrapper>
      </Mainbox>

      <!-- {{ formData }} -->
      <div class="flex justify-end">
        <button @click="NewPC" class="btn btn-success text-white">
          บันทึกข้อมูล
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, reactive, onMounted } from "vue";
import axios from "axios";

import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import TextInputLabelLeft from "@/components/Input/TextInputLabelLeft.vue";
import RadioInput from "@/components/Input/RadioInput.vue";
import CheckInput from "@/components/Input/CheckInput.vue";
import FileInput from "@/components/Input/FileInput.vue";
// import FileInputWithInput from "@/components/Input/FileInputWithInput.vue";

// จัดการข้อมูลหลัก
const formData = reactive({
  // asdf: "",
  userID: "",
  // Professor
  name: "",
  position: "",
  textOther1: "",
  textOther2: "",
  // PageDetail
  nameJournal: "",
  check: [],
  checkISI: "",
  input1ISI: "",
  input2ISI: "", //isi
  checkSJR: "",
  input1SJR: "",
  input2SJR: "", //sjr
  checkScopus: "",
  input1Scopus: "",
  input2Scopus: "", //scopus
  nature: "",
  moneyOp: "",
  //ResearchDetail
  nameReach: "",
  schedule: "",
  issue: "",
  months: "",
  year: "",
  ISSN: "",
  submitReach: "",
  announce: "",
  latePay: "",
  reachOther: "",
  radioResearch: "",
  otherInput: "",
  source: "",
  credit: "",
  inYears: "",
  //AuthForm
  redioAuth: "",
  //MoneyPG
  moneyPG: "",
  //FileForm
  file1: null,
  file2: null,
  inputFile2: "",
  file3: null,
  file4: null,
  file5: null,
  //วันที่ส่งเอกสาร
  docSubmitDate: "",
  typeFile: "Page_Charge",
  //satatus
  statusForm: "ตรวจสอบ",
  moneyForm: "100000"
});
//วันที่ส่งเอกสาร
const datetime = new Date();
// Extract year, month, and day
const year = datetime.getFullYear();
const month = String(datetime.getMonth() + 1).padStart(2, '0'); // Months are 0-based
const day = String(datetime.getDate()).padStart(2, '0');
// Combine in YYYY-MM-DD format
formData.docSubmitDate = `${year}-${month}-${day}`;
console.log(formData.docSubmitDate);

const handleInput = (key, value) => {
  formData[key] = value;
  console.log("0000000000000000000000000000000");
  // console.log(JSON.stringify(formData));
  console.log(`${key} updated to: ${value}`);
  // console.log("key: ", key);
  // console.log("value: ", value);
  console.log("--------------------------------");
};
// const handleDay = (key, value) => {
//   // Convert the string (YYYY-MM-DD) to a Date object
//   const datetime = new Date(value);

//   if (isNaN(datetime)) {
//     console.error("Invalid date format");
//     return;
//   }

//   const year = datetime.getFullYear();
//   const month = String(datetime.getMonth() + 1).padStart(2, '0'); // Months are 0-based
//   const day = String(datetime.getDate()).padStart(2, '0');

//   formData[key] = `${day}-${month}-${year}`;
//   console.log(`${key} updated to: ${formData[key]}`);
//   console.log("--------------------------------");
// };

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

const handleInputSelect = (event) => {
  formData.moneyOp = event.target.value;
  console.log("Updated moneyOp:", formData.moneyOp);
  console.log("puch in moneyOp", formData.moneyOp);
  // console.log(JSON.stringify(formData));
};

const handleInputRediO = (event) => {
  formData.radioResearch = event.target.value || event.target.value;
  console.log("Updated radioResearch:", formData.radioResearch);
  console.log("puch in radioResearch", formData.radioResearch);
  // console.log(JSON.stringify(formData));
};

const handleInputRedioAuth = (event) => {
  formData.redioAuth = event.target.value || event.target.value;
  console.log("Updated redioAuth:", formData.redioAuth);
  console.log("puch in redioAuth", formData.redioAuth);
  // console.log(JSON.stringify(formData));
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

//isLoading เพื่อแสดงสถานะว่ากำลังโหลดข้อมูล
const isLoading = ref(true);
// ตัวแปรสำหรับเก็บข้อมูลจาก backend

const fetchProfessorData = async () => {
  try {
    const response = await axios.get("http://localhost:3000/user/1");
    // formData.asdf = response.data;
    formData.userID = response.data.user_id;
    formData.name = response.data.user_nameth;
    formData.position = response.data.user_position;
    console.log("get user: ", response.data);
  } catch (error) {
    console.error("Error fetching professor data:", error);
  } finally {
    isLoading.value = false;
  }
  console.log("Fetching professor data...");
};

const NewPC = async () => {
  try {
    console.log("before postPC: ", formData);
    console.log("formData as JSON:", JSON.stringify(formData, null, 2));
    console.log("before userID: ", JSON.stringify(formData));
    //
    // message.value = response.data.message;

    // const dataFile = {
    //   type: formData.typeFile,
    //   Pc_proof: formData.file1,
    // };
    // console.log("postPC: ", JSON.stringify(dataFile));
    //  // Send file data to the backend
    //  const responseFile = await axios.post("http://localhost:3000/pdf", dataFile, {
    //   headers: {
    //     "Content-Type": "multipart/form-data", // Required for file uploads
    //   },
    // });
    // console.log("responseFile: ", responseFile);
    // console.log("Response data: ", responseFile.data);

    const Dataforbackend = {
      user_id: formData.userID,
      pageC_times: formData.textOther1,
      pageC_days: formData.textOther2,
      journal_name: formData.nameJournal,
      quality_journal: JSON.stringify(formData.check),
      pc_isi_year: formData.input1ISI,
      pc_sjr_year: formData.input1SJR,
      pc_scopus_year: formData.input1Scopus,
      impact_factor: formData.input2ISI,
      sjr_score: formData.input2SJR,
      cite_score: formData.input2Scopus,
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
      doc_submit_date: formData.docSubmitDate,

      type: formData.typeFile,
      pc_proof: formData.file1,
      quartile_order: formData.inputFile2,
      q_pc_proof: formData.file2,
      invoice_public: formData.file3,
      accepted: formData.file4,
      copy_article: formData.file5,

      form_status: formData.statusForm,
      form_money: formData.moneyForm,
    };

    console.log("postPC: ", JSON.stringify(Dataforbackend));
    const response = await axios.post(
      "http://localhost:3000/page_charge",
      Dataforbackend,
      {
        headers: {
          "Content-Type": "multipart/form-data", // Required for file uploads
        },
      }
    );
    alert("Have new PC!");
    console.log("res: ", response);

    // const data = await response.json();
    // if (response.ok) {
    //   console.log('Page Charge created with pc_id:', data.pc_id);
    //   // Use pc_id for further actions
    // } else {
    //   console.error('Error:', data.error);
    // }

    console.log("allpostPC: ", message.value);
    console.log("postPC: ", response.data);
  } catch (error) {
    console.error(error);
    message.value = "Error adding page_charge. Please try again.";
  }
};

const element = document.querySelector('your-selector');
if (!element) {
  console.error('Element not found!');
}
document.addEventListener('DOMContentLoaded', () => {
  const element = document.querySelector('your-selector');
  console.log("element: ",element);
});

// ดึงข้อมูลเมื่อ component ถูกโหลด
onMounted(() => {
  fetchProfessorData();
});
</script>
