<template>
  {{ formData.name }}
  {{ formData.userID }}
  <!-- เช็คว่า Professor มีข้อมูลหรือยัง -->
  <div v-if="formData.name">
    <p>get user success</p>
    {{ this.formData }}
  </div>
  <div v-else>
    <!-- แสดงข้อความระหว่างรอดึงข้อมูล -->
    <p>Loading...</p>
  </div>

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
            @input="handleInputSelect"
            >
                <option>เลือกวงเงินสนับสนุน</option>
                <option>20,000 บาท</option>
                <option>30,000 บาท</option>
                <option>40,000 บาท</option>
                <option>60,000 บาท</option>
                <option>70,000 บาท</option>
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
                name="type"
                customDiv="max-w-fit mr-10 flex items-cente"
                v-model="formData.basic"
                @input="handleInputReach"
              />
              <RadioInput
                label="วิจัยประยุกต์"
                name="type"
                customDiv="max-w-fit mr-10 flex items-cente"
                v-model="formData.applied"
            @input="handleInputReach"
              />
              <RadioInput
                label="วิจัยและพัฒนา"
                name="type"
                customDiv="max-w-fit mr-10 flex items-cente"
                v-model="formData.develop"
            @input="handleInputReach"
              />
              <div class="flex flex-row">
                <RadioInput
                  label="วิจัยอื่น ๆ "
                  name="type"
                  customDiv="max-w-fit mr-2 flex items-cente"
                  v-model="formData.other"
            @input="handleInputReach"
                />
                <TextInputLabelLeft
                  label="(ระบุ)"
                  name="type"
                  customDiv="max-w-fit flex items-cente"
                  v-model="formData.otherInput"
            @input="handleInputReach"
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
          name="Author" 
          v-model="formData.firstAuth"
            @input="handleInputRedioAuth"
            />
          <RadioInput
            label="ผู้ประพันธ์บรรณกิจ Corresponding Author"
            name="Author"
            v-model="formData.SecondAuth"
            @input="handleInputRedioAuth"
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
       <!-- ต้อง loop มั้ย หรือเขียนแยกไปเลย -->
      <Mainbox>
        <SectionWrapper>
          <p class="text-lg font-bold">เอกสารหลักฐานที่แนบ</p>
          <div v-for="(item, key) in FileForm" :key="key" class="mb-4">
            <div v-if="item.name === 'Second' || item.name === 'Ninth'">
              <!-- Render FileInputWithInput for specific conditions -->
              <FileInputWithInput
                :label="item.label"
                :customLabel="item.customLabel"
                :span="item.span"
                :customSpan="item.customSpan"
              />
            </div>
            <div v-else>
              <!-- Render FileInput for all other conditions -->
              <FileInput
                :label="item.label"
                :customLabel="item.customLabel"
                :span="item.span"
                :customSpan="item.customSpan"
              />
            </div>
          </div>
        </SectionWrapper>
      </Mainbox>
      {{ formData }}
      <div class="flex justify-end">
        <button @click="NewPC" class="btn btn-success text-white">บันทึกข้อมูล</button>
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
import FileInputWithInput from "@/components/Input/FileInputWithInput.vue";

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
  moneyOp: "4999",
  //ReachDetail
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
  basic: "",
  applied: "",
  develop: "วิจัยและพัฒนา",
  other: "",
  otherInput: "",
  source: "",
  credit: "",
  inYears: "",
  //AuthForm
  firstAuth: "",
  SecondAuth: "Corresponding Author",
  //MoneyPG
  moneyPG: "",
  //FileForm
  file1: "",
  file2: "",
  file3: "",
  file4: "",
  file5: "",
});

const handleInput = (key, value) => {
  formData[key] = value;
  console.log("0000000000000000000000000000000")
  console.log(JSON.stringify(formData))
  console.log(`${key} updated to: ${value}`);
  console.log("key: ", key)
  console.log("value: ", value)
  console.log("--------------------------------")
};
const handleCheckbox = (key, value) => {
  formData[key] = formData[key] ? "" : value;
  console.log(`${key} is now ${formData[key]}`);
};

const moneyOptions = {
  "20,000 บาท": 20000,
  "30,000 บาท": 30000,
  "40,000 บาท": 40000,
  "60,000 บาท": 60000,
  "70,000 บาท": 70000,
};

const handleInputSelect = (event) => {
  formData.moneyOp = moneyOptions[event.target.value] || event.target.value;
  console.log("Updated moneyOp:", formData.moneyOp);
};

// watch(
//   () => formData.value,
//   (newValue) => {
//     // test = newValue;
//     // console.log("fromData", newValue);
//     test.value = newValue; // Update the `test` ref
//     console.log("Updated formData:", newValue); // Log the new value of `formData`
//   },
//   { deep: true } // Enable deep watching
// );
const handleInputReach = (event) => {
  if (formData.basic) {
    formData.basic = "วิจัยพื้นฐาน";
    formData.applied = "";
    formData.develop = "";
    formData.other = "";
    console.log("วิจัยพื้นฐาน Selected:", formData.basic);
  }
  else if (!formData.applied) {
    formData.basic = "";
    formData.applied = "วิจัยประยุกต์";
    formData.develop = "";
    formData.other = "";
    console.log("วิจัยประยุกต์ Selected:", formData.applied);
  }
  else if (!formData.develop) {
    formData.basic = "";
    formData.applied = "";
    formData.develop = "วิจัยและพัฒนา";
    formData.other = "";
    console.log("วิจัยและพัฒนา Selected:", formData.develop);
  }
  else if (!formData.other) {
    formData.basic = "";
    formData.applied = "";
    formData.develop =""
    formData.other = "อื่น ๆ";
    console.log("วิจัยอื่น ๆ Selected:", formData.other);
    formData.otherInput = "event.target.value";
    console.log("วิจัยอื่น ๆ (ระบุ) updated:", event.target.value);
  }
};
const handleInputRedioAuth = () => {
  // ถ้าเลือก "First Author"
  if (!formData.firstAuth) {
    formData.firstAuth = "First Author";  // กำหนดค่า "First Author"
    formData.SecondAuth = "";
    console.log("First Author Selected:", formData.firstAuth);
    console.log("Corresponding Author not Selected:", formData.SecondAuth);
  }
  // ถ้าเลือก "Corresponding Author"
  else if (!formData.SecondAuth) {
    formData.firstAuth = "";
    formData.SecondAuth = "Corresponding Author";  // กำหนดค่า "Corresponding Author"
    console.log("First Author not Selected:", formData.firstAuth);
    console.log("Corresponding Author Selected:", formData.SecondAuth);
  }
};
const FileForm = {
  First: {
    label:
      "หลักฐานแสดงการอยู่ในฐานข้อมูลสากล ISI หรือ SJR หรือ Scopus หรือ Nature",
    name: "First",
  },
  Second: {
    label:
      "หลักฐานแสดงการจัดลำดับ Quartile ของฐานข้อมูลสากล ISI หรือ SJR หรือ Scopus",
    name: "Second",
  },
  Third: {
    label:
      "ใบแจ้งหนี้ค่าใช้จ่ายสำหรับการตีพิมพ์ / อัตราค่าใช้จ่ายที่ประกาศบนหน้าเว็บไซต์",
    name: "Third",
  },
  Fourth: {
    label: "หลักฐานการส่งบทความ หนังสือตอบรับบทความ",
    name: "Fourth",
  },
  Fifth: {
    label: "สำเนาบทความ และ Upload บทความเข้าระบบ IT Scholar",
    name: "Fifth",
  },
};


//isLoading เพื่อแสดงสถานะว่ากำลังโหลดข้อมูล
const isLoading = ref(true);
// ตัวแปรสำหรับเก็บข้อมูลจาก backend

const fetchProfessorData = async () => {
  try {
    const response = await axios.get("http://localhost:3000/user/7");
    // formData.asdf = response.data;
    formData.userID = response.data.user_id
    formData.name = response.data.user_name;
    formData.position = response.data.user_position;
    console.log("get user: ", response.data);
  } catch (error) {
    console.error("Error fetching professor data:", error);
  } finally {
    isLoading.value = false;
  }
};

const NewPC = async () => {
  try {
    console.log("before postPC: ", formData);
    console.log("formData as JSON:", JSON.stringify(formData, null, 2));
    console.log("before userID: ", JSON.stringify(formData));
    // 
    // message.value = response.data.message;

    const Dataforbackend = {
      user_id: formData.userID,
      pageC_times: formData.textOther1,
      pageC_days: formData.textOther2,
      journal_name: formData.nameJournal,
      quality_journal: formData.checkISI,
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
      Submission_date: formData.submitReach,
      date_review_announce: formData.announce,
      final_date: formData.latePay,
      article_research_ject: formData.reachOther,
      research_type: 'วิจัยพื้นฐาน',
      research_type2: formData.otherInput,
      name_funding_source: formData.source,
      budget_limit: formData.credit,
      annual: formData.inYears,
      presenter_type: 'Corresponding Author',
      request_support: formData.moneyPG,
    };
    console.log("postPC: ", JSON.stringify(Dataforbackend));
    const response = await axios.post("http://localhost:3000/page_charge", Dataforbackend);
    console.log('res: ', response)
    
    // console.log("allpostPC: ", message.value);
    // console.log("postPC: ", response.data);
  } catch (error) {
    console.error(error);
    // message.value = 'Error adding page_charge. Please try again.';
  } 
};

// ดึงข้อมูลเมื่อ component ถูกโหลด
onMounted(() => {
  fetchProfessorData();
});


</script>
