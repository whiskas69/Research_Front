<template>
  <!-- {{ formData.pageC }} -->
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
              disabled="true"
              :placeholder="formData.textOther1"
            />
            <TextInputLabelLeft
              label="วันที่"
              customLabel="ml-2 w-10"
              customInput="max-w-max"
              disabled="true"
              :placeholder="formData.textOther2"
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
          1. รายละเอียดวารสารที่ส่งเสนอพิจารณา / การตอบรับให้ลงตีพิมพ์
        </p>
        <SectionWrapper>
          <TextInputLabelLeft
            label="ชื่อวารสาร"
            name="Input"
            customLabel="w-24"
            disabled="true"
            :placeholder="formData.nameJournal"
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
                disabled="true"
              >
                <option disabled value="">เลือกวงเงินสนับสนุน</option>
                <option :value="20000">20,000 บาท</option>
                <option :value="30000">30,000 บาท</option>
                <option :value="40000">40,000 บาท</option>
                <option :value="60000">60,000 บาท</option>
              </select>
            </div>
          </label>
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
            disabled="true"
            :placeholder="formData.moneyPG"
          />
        </SectionWrapper>
      </Mainbox>
      <p class="text-xl font-bold my-5">ตรวจสอบข้อมูลและหลักฐาน</p>
      <Mainbox>
        <SectionWrapper>
          <p>ตรวจสอบเงินงบประมาณประจำปีที่จัดสรรในการเผยแพร่ผลงานวิชาการ</p>
          <TextInputLabelLeft
            label="ปีงบประมาณ พ.ศ."
            name="years"
            customInput="max-w-max text-center"
          />
          <div class="flex justify-end">
            <div class="flex flex-row justify-between">
              <TextInputLabelLeft
                label="วงเงินที่คณะจัดสรรไว้ จำนวนเงินทั้งสิ้น"
                customInput="max-w-max text-center"
              />
              <p class="flex items-center w-12">บาท</p>
            </div>
          </div>
          <div class="flex justify-end">
            <div class="flex flex-row justify-between">
              <TextInputLabelLeft
                label="โดยคณะได้อนุมัติค่าใช้จ่ายในการเสนอผลงานวิชาการไปแล้ว จำนวน"
                disabled="true"
                customInput="max-w-max text-center"
              />
              <p class="flex items-center w-12">รายการ</p>
            </div>
          </div>
          <div class="flex justify-end">
            <div class="flex flex-row justify-between">
              <TextInputLabelLeft
                label="รวมเป็นเงิน"
                disabled="true"
                customInput="max-w-max text-center"
              />
              <p class="flex items-center w-12">บาท</p>
            </div>
          </div>
          <div class="flex justify-end">
            <div class="flex flex-row justify-between">
              <TextInputLabelLeft
                label="วงเงินที่คณะจัดสรรไว้ คงเหลือ"
                disabled="true"
                customInput="max-w-max text-center"
              />
              <p class="flex items-center w-12">บาท</p>
            </div>
          </div>
          <div class="flex justify-end">
            <div class="flex flex-row justify-between">
              <TextInputLabelLeft
                label="จำนวนเงินที่ขออนุมัติจค่า Page Charge ในครั้งนี้ เป็นจำนวนเงิน"
                customInput="max-w-max text-center"
              />
              <p class="flex items-center w-12">บาท</p>
            </div>
          </div>
          <div class="flex justify-end">
            <div class="flex flex-row justify-between">
              <TextInputLabelLeft
                label="วงเงินที่คณะจัดสรรไว้ คงเหลือทั้งสิ้น"
                disabled="true"
                customInput="max-w-max text-center"
              />
              <p class="flex items-center w-12">บาท</p>
            </div>
          </div>
          <div class="flex justify-end">
                <button class="btn text-black btn-warning mr-5">คำนวณ</button>
            </div>

            <div class="flex justify-end mt-5">
                <p class="text-red-500 mr-5">วงเงินที่สามารถเบิกได้ 0 บาท</p>
            </div>
        </SectionWrapper>
      </Mainbox>
      <!-- <MoneyConfer :MoneyForm="MoneyForm" /> -->

      <div class="flex justify-end">
        <button class="btn btn-success text-white">บันทึกข้อมูล</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import TextInputLabelLeft from "@/components/Input/TextInputLabelLeft.vue";
import CheckInput from "@/components/Input/CheckInput.vue";

// จัดการข้อมูลหลัก
const formData = reactive({
  // asdf: "",
  userID: "",
  pageC: [],
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
  redioResearch: "",
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
  moneyForm: "100000",
});

//isLoading เพื่อแสดงสถานะว่ากำลังโหลดข้อมูล
const isLoading = ref(true);
// Access route parameters
const route = useRoute();
const id = route.params.id;
console.log("params.id", id);
// ตัวแปรสำหรับเก็บข้อมูลจาก backend
const fetchProfessorData = async () => {
  try {
    const responseUser = await axios.get("http://localhost:3000/user/1");
    formData.userID = responseUser.data.user_id;
    formData.name = responseUser.data.user_nameth;
    formData.position = responseUser.data.user_position;
    console.log("get user: ", responseUser.data);

    const responsePC = await axios.get(
      `http://localhost:3000/page_charge/${id}`
    );

    console.log("get user: ", `${id}`);
    console.log("get user: ", responsePC.data);
    formData.pageC = responsePC.data;
    const PCData = responsePC.data;
    formData.textOther1 = PCData.pageC_times;
    formData.textOther2 = PCData.pageC_days;
    formData.nameJournal = PCData.journal_name;
    formData.check = PCData.quality_journal;
    formData.input1ISI = PCData.pc_isi_year;

    formData.moneyOp = PCData.support_limit;
    formData.nameReach = PCData.article_title;
    formData.schedule = PCData.vol_journal;
    formData.issue = PCData.issue_journal;
    formData.months = PCData.month;
    formData.year = PCData.year;
    formData.ISSN = PCData.ISSN_ISBN;
    formData.submitReach = PCData.submission_date;
    formData.announce = PCData.date_review_announce;
    formData.latePay = PCData.final_date;
    formData.reachOther = PCData.article_research_ject;
    formData.redioResearch = PCData.research_type;
    formData.otherInput = PCData.research_type2;
    formData.source = PCData.name_funding_source;
    formData.credit = PCData.budget_limit;
    formData.inYears = PCData.annual;

    formData.redioAuth = PCData.presenter_type;

    formData.moneyPG = PCData.request_support;
    console.log("get page_charge: ", PCData);

    const responseFile = await axios.get("http://localhost:3000/pdf/1");
    const pdfData = responseFile.data;
    formData.file1 = pdfData.Invoice;

    console.log("PDF JAAAA: ", pdfData);
  } catch (error) {
    console.error("Error fetching professor data:", error);
  } finally {
    isLoading.value = false;
  }
  console.log("Fetching professor data...");
};

// ดึงข้อมูลเมื่อ component ถูกโหลด
onMounted(() => {
  fetchProfessorData();
});
</script>
