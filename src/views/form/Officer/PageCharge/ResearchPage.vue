<template>
  {{ formData }}
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
          1.  รายละเอียดวารสารที่ส่งเสนอพิจารณา / การตอบรับให้ลงตีพิมพ์
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
              :checked="formData.checkISI == 'ISI' ? true : false"
              disabled="false"
            />
            <TextInputLabelLeft
            v-if="formData.checkISI == 'ISI'"
              label="ปี"
              customLabel="mr-2"
              customInput="max-w-max"
              customDiv="max-w-max"
              disabled="true"
              :placeholder="formData.input1ISI"
            />
            <TextInputLabelLeft
            v-if="formData.checkISI == 'ISI'"
              label="Impact Factor"
              customLabel="w-28 mx-2"
              customInput="max-w-max"
              customDiv="max-w-max"
              disabled="true"
              :placeholder="formData.input2ISI"
            />
          </div>

          <div class="flex flex-row">
            <CheckInput
              label="SJR ได้รับการจัดลำดับ Quartile "
              customDiv="max-w-72 flex items-center"
              v-model="formData.checkSJR"
              :checked="formData.checkSJR == 'SJR' ? true : false"
              disabled="false"
            />
            <TextInputLabelLeft
            v-if="formData.checkISI == 'SJR'"
              label="ปี"
              customLabel="mr-2"
              customInput="max-w-max"
              customDiv="max-w-max"
              disabled="true"
              :placeholder="formData.checkinput1SJR"
            />
            <TextInputLabelLeft
            v-if="formData.checkISI == 'SJR'"
              label="SJR Score"
              customLabel="w-28 mx-2"
              customInput="max-w-max"
              customDiv="max-w-max"
              disabled="true"
              :placeholder="formData.input2SJR"
            />
          </div>

          <div class="flex flex-row">
            <CheckInput
              label="Scopus ได้รับการจัดลำดับ Quartile "
              customDiv="max-w-72 flex items-center"
              v-model="formData.checkScopus"
              :checked="formData.checkScopus == 'Scopus' ? true : false"
              disabled="false"
            />
            <TextInputLabelLeft
            v-if="formData.checkISI == 'Scopus'"
              label="ปี"
              customLabel="mr-2"
              customInput="max-w-max"
              customDiv="max-w-max"
              disabled="true"
              :placeholder="formData.input1Scopus"
            />
            <TextInputLabelLeft
            v-if="formData.checkISI == 'Scopus'"
              label="Cite Score"
              customLabel="w-28 mx-2"
              customInput="max-w-max"
              customDiv="max-w-max"
              disabled="true"
              :placeholder="formData.input2Scopus"
            />
          </div>
          <div class="flex flex-row">
            <CheckInput
              label="Nature"
              customDiv="max-w-72 flex items-center"
              v-model="formData.nature"
              :checked="formData.nature == 'nature' ? true : false"
              disabled="false"
            />
          </div>
          <label class="form-control">
            <div class="flex flex-row">
              <TextInputLabelLeft
                label="วงเงินตามเกณฑ์การให้การสนับสนุนไม่เกิน"
                customLabel="w-auto mx-2"
                customInput="max-w-max"
                customDiv="max-w-max"
                :placeholder="formData.moneyOp"
                v-model="formData.input2Scopus"
              />
              <span class="flex items-center">บาท</span>
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
            disabled="true"
            :placeholder="formData.nameReach"
          />
        </SectionWrapper>
        <div>
          <p>กำหนดการที่คาดว่าจะได้รับการลงตีพิมพ์ในวารสาร</p>
          <div class="flex flex-row mt-2 justify-between">
            <TextInputLabelLeft
              label="ปีที่ (Vol.)"
              customLabel="w-auto min-w-fit"
              customDiv="max-w-fit"
              disabled="true"
              :placeholder="formData.schedule"
            />
            <TextInputLabelLeft
              label="ฉบับที่ (Issue)"
              customLabel="w-auto min-w-fit"
              customDiv="max-w-fit"
              disabled="true"
              :placeholder="formData.issue"
            />
            <TextInputLabelLeft
              label="เดือน"
              customLabel="w-auto min-w-fit"
              customDiv="max-w-fit"
              disabled="true"
              :placeholder="formData.months"
            />
            <div class="flex flex-row">
              <TextInputLabelLeft
                label="ปี ค.ศ./พ.ศ."
                customLabel="w-auto min-w-fit"
                customDiv="max-w-fit"
                disabled="true"
                :placeholder="formData.year"
              />
              <TextInputLabelLeft
                label="เลขที่ ISSN/ISBN (อื่นๆ)"
                customLabel="w-auto min-w-fit"
                customDiv="max-w-fit"
                disabled="true"
                :placeholder="formData.ISSN"
              />
            </div>
          </div>

          <div class="flex flex-row mt-4 justify-between">
            <TextInputLabelLeft
              label="วันที่ส่งบทความไปยังสำนักพิมพ์เจ้าของวารสาร"
              customLabel="w-auto min-w-fit"
              customDiv="max-w-fit"
              disabled="true"
              :placeholder="formData.submitReach"
            />
            <TextInputLabelLeft
              label="วันประกาศผลการพิจารณา"
              customLabel="w-auto min-w-fit"
              customDiv="max-w-fit"
              disabled="true"
              :placeholder="formData.announce"
            />
            <TextInputLabelLeft
              label="วันสุดท้ายของการจ่ายค่าตีพิมพ์"
              customLabel="w-auto min-w-fit"
              customDiv="max-w-fit"
              disabled="true"
              :placeholder="formData.latePay"
            />
          </div>

          <SectionWrapper>
            <div class="flex flex-row mt-3">
              <p class="flex text-blue-500 w-12 items-center">(ถ้ามี)</p>
              <TextInputLabelLeft
                label="บทความวิจัยนี้เป็นผลงานจากโครงการวิจัยเรื่อง"
                customLabel="w-auto min-w-fit"
                customDiv="max-w-fit"
                disabled="true"
                :placeholder="formData.reachOther"
              />
            </div>
            <p>ประเภทโครงการวิจัย</p>
            <div class="flex flex-row ml-5">
              <RadioInput
                label="วิจัยพื้นฐาน"
                value="วิจัยพื้นฐาน"
                name="type"
                customDiv="max-w-fit mr-10 flex items-center"
                disabled="flase"
                :checked="
                  formData.radioResearch == 'วิจัยพื้นฐาน' ? true : false
                "
                v-model="formData.radioResearch"
              />
              <RadioInput
                label="วิจัยประยุกต์"
                value="วิจัยประยุกต์"
                name="type"
                customDiv="max-w-fit mr-10 flex items-center"
                disabled="flase"
                :checked="
                  formData.radioResearch == 'วิจัยประยุกต์' ? true : false
                "
                v-model="formData.radioResearch"
              />
              <RadioInput
                label="วิจัยและพัฒนา"
                value="วิจัยและพัฒนา"
                name="type"
                customDiv="max-w-fit mr-10 flex items-center"
                disabled="flase"
                :checked="
                  formData.radioResearch == 'วิจัยและพัฒนา' ? true : false
                "
                v-model="formData.radioResearch"
              />
              <div class="flex flex-row">
                <RadioInput
                  label="วิจัยอื่น ๆ "
                  value="วิจัยอื่น ๆ"
                  name="type"
                  customDiv="max-w-fit mr-2 flex items-center"
                  disabled="flase"
                  :checked="
                    formData.radioResearch == 'วิจัยอื่น ๆ' ? true : false
                  "
                  v-model="formData.radioResearch"
                />
                <TextInputLabelLeft
                  v-if="formData.radioResearch == 'วิจัยอื่น ๆ '"
                  label="(ระบุ)"
                  name="type"
                  customDiv="max-w-fit flex items-cente"
                  v-model="formData.otherInput"
                />
              </div>
            </div>

            <TextInputLabelLeft
              label="ชื่อแหล่งทุนวิจัย"
              customLabel="w-auto min-w-fit"
              disabled="true"
              :placeholder="formData.source"
            />
            <div class="flex flex-row">
              <TextInputLabelLeft
                label="วงเงินงบประมาณการวิจัย"
                customLabel="w-auto min-w-fit"
                customDiv="max-w-max mr-10"
                disabled="true"
                :placeholder="formData.credit"
              />
              <TextInputLabelLeft
                label="ประจำปี"
                customLabel="w-auto min-w-fit"
                customDiv="max-w-max mr-10"
                disabled="true"
                :placeholder="formData.inYears"
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
            disabled="flase"
            :checked="formData.redioAuth == 'First Author' ? true : false"
            v-model="formData.redioAuth"
          />
          <RadioInput
            label="ผู้ประพันธ์บรรณกิจ Corresponding Author"
            value="Corresponding Author"
            name="Author"
            disabled="flase"
            :checked="
              formData.redioAuth == 'Corresponding Author' ? true : false
            "
            v-model="formData.redioAuth"
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
            disabled="true"
            :placeholder="formData.moneyPG"
          />
        </SectionWrapper>
      </Mainbox>
      <!-- เอกสารหลักฐานที่แนบ -->
      <p class="text-xl font-bold my-5 bg-red-600">ยังไม่สามารถเปิด pdf ได้</p>
      <Mainbox>
        <SectionWrapper>
          <p class="text-lg font-bold">เอกสารหลักฐานที่แนบ</p>
          <!-- 1 -->
          <div class="flex flex-row items-center w-full">
            <div class="flex flex-row items-center w-full justify-between">
              <div class="flex flex-row">
                <p>
                  หลักฐานแสดงการอยู่ในฐานข้อมูลสากล ISI หรือ SJR หรือ Scopus
                  หรือ Nature
                </p>
              </div>
              <div class="">
                <button class="btn bg-[#E85F19] text-white mr-5">
                  ดูเอกสาร
                </button>
                <button class="btn bg-[#4285F4] text-white">โหลดเอกสาร</button>
              </div>
            </div>
          </div>
          <!-- 2 -->
          <div class="flex flex-row items-center w-full">
            <div class="flex flex-row items-center w-full justify-between">
              <div class="flex flex-row">
                <TextInputLabelLeft
                  customLabel="w-auto min-w-fit"
                  customInput="max-w-fit ml-2"
                  label="หลักฐานแสดงการจัดลำดับ Quartile ของฐานข้อมูลสากล ISI หรือ SJR หรือ Scopus"
                  disabled="ture"
                />
              </div>
              <div class="">
                <button class="btn bg-[#E85F19] text-white mr-5">
                  ดูเอกสาร
                </button>
                <button class="btn bg-[#4285F4] text-white">โหลดเอกสาร</button>
              </div>
            </div>
          </div>
          <!-- 3 -->
          <div class="flex flex-row items-center w-full">
            <div class="flex flex-row items-center w-full justify-between">
              <div class="flex flex-row">
                <p>
                  ใบแจ้งหนี้ค่าใช้จ่ายสำหรับการตีพิมพ์ /
                  อัตราค่าใช้จ่ายที่ประกาศบนหน้าเว็บไซต์
                </p>
              </div>
              <div class="">
                <button class="btn bg-[#E85F19] text-white mr-5">
                  ดูเอกสาร
                </button>
                <button class="btn bg-[#4285F4] text-white">โหลดเอกสาร</button>
              </div>
            </div>
          </div>
          <!-- 4 -->
          <div class="flex flex-row items-center w-full">
            <div class="flex flex-row items-center w-full justify-between">
              <div class="flex flex-row">
                <p>หลักฐานการส่งบทความ หนังสือตอบรับบทความ</p>
              </div>
              <div class="">
                <button class="btn bg-[#E85F19] text-white mr-5">
                  ดูเอกสาร
                </button>
                <button class="btn bg-[#4285F4] text-white">โหลดเอกสาร</button>
              </div>
            </div>
          </div>
          <!-- 5 -->
          <div class="flex flex-row items-center w-full">
            <div class="flex flex-row items-center w-full justify-between">
              <div class="flex flex-row">
                <p>สำเนาบทความ และ Upload บทความเข้าระบบ IT Scholar</p>
              </div>
              <div class="">
                <button class="btn bg-[#E85F19] text-white mr-5">
                  ดูเอกสาร
                </button>
                <button class="btn bg-[#4285F4] text-white">โหลดเอกสาร</button>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </Mainbox>

      <p class="text-xl font-bold my-5">ตรวจสอบข้อมูลและหลักฐาน</p>
      <Mainbox>
        <SectionWrapper>
          <p>ตรวจสอบหลักฐานตามหลักเกณฑ์ที่กำหนดในประกาศ ส.จ.ล และประกาศคณะ</p>
          <RadioInput
            label="ถูกต้องตามเงื่อนไขการสนับสนุน ดังนี้"
            value="อนุมัติ"
            name="re"
            v-model="formData.redioAuthOffic"
            @change="handleInput('redioAuthOffic', $event.target.value)"
          />
          <textarea
            class="textarea textarea-bordered w-full"
            @input="handleInput('description', $event.target.value)"
          ></textarea>
          <RadioInput
            label="ถูกต้องตามเงื่อนไขการสนับสนุน กรณีส่งหนังสือตอบรับย้อนหลัง ดังนี้"
            value="อนุมัติ"
            name="re"
            v-model="formData.redioAuthOffic"
            @change="handleInput('redioAuthOffic', $event.target.value)"
          />
          <textarea
            class="textarea textarea-bordered w-full"
            @input="handleInput('description', $event.target.value)"
          ></textarea>
          <RadioInput
            label="อื่น ๆ"
            value="อื่น ๆ"
            name="re"
            v-model="formData.redioAuthOffic"
            @change="handleInput('redioAuthOffic', $event.target.value)"
          />
          <textarea
            class="textarea textarea-bordered w-full"
            @input="handleInput('description', $event.target.value)"
          ></textarea>
        </SectionWrapper>
      </Mainbox>
      <div class="flex justify-end">
        <button @click="OfficerPC" class="btn btn-success text-white">
          บันทึกข้อมูล
        </button>
      </div>
      <p class="text-xl font-bold my-5">wine</p>
      {{ formData.check }}
      <!-- {{ formData.file1 }}

      <div v-if="formData.file1">
        <p>File Name: {{ formData.file1.name }}</p>
        <p>File Size: {{ formData.file1.size }} bytes</p>
        <p>File Type: {{ formData.file1.type }}</p>
        <a
          v-if="formData.file1 instanceof Blob"
          :href="getFileURL(formData.file1)"
          target="_blank"
        >
          View File
        </a>
        Show PDF Button
    <button @click="showPDF">Show PDF</button>
Download PDF Button
<button @click="downloadPDF">Download PDF</button>

      </div> -->

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
          </div> -->
      <!-- <ProfDetail :Professor="Professor" /> -->
      <!-- <DetailPage :PageDetail="PageDetail" /> -->
      <!-- <DetailReach :ReachDetail="ReachDetail" /> -->
      <!-- <Author :AuthForm="AuthForm" /> -->
      <!-- <MoneyPageChange :MoneyPG="MoneyPG" /> -->
      <!-- <File :FileForm="FileForm" /> -->

      <!-- <ResearchPG :Research="Research" /> -->
      <MoneyConfer :MoneyForm="MoneyForm" />
      <AssociarConfer :AssociateForm="AssociateForm" />

      <NotedPG1 :PG1="PG1" />

      <NotedPG2 :PG2="PG2" />
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
import RadioInput from "@/components/Input/RadioInput.vue";
import CheckInput from "@/components/Input/CheckInput.vue";
import RadiowithArea from "@/components/Input/RadiowithArea.vue";

import ProfDetail from "@/components/form/Conference/ProfDetail.vue";
import DetailPage from "@/components/form/PageCharge/DetailPage.vue";
import DetailReach from "@/components/form/PageCharge/DetailReach.vue";
import Author from "@/components/form/Conference/Author.vue";
import MoneyPageChange from "@/components/form/PageCharge/MoneyPageChange.vue";
import File from "@/components/form/Officer/File.vue";
import ResearchPG from "@/components/form/Officer/ResearchPG.vue";
import MoneyConfer from "@/components/form/Officer/MoneyConfer.vue";
import AssociarConfer from "@/components/form/Officer/AssociarConfer.vue";
import NotedPG1 from "@/components/form/Officer/NotedPG1.vue";
import NotedPG2 from "@/components/form/Officer/NotedPG2.vue";

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
  statusForm: "ฝ่ายบริหารงานวิจัย",
  moneyForm: "100000",
  // ความเห้นเจ้าหน้าที่
  redioAuthOffic: "",
  description: "",
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

const handleInput = (key, value) => {
  formData[key] = value;
  console.log("0000000000000000000000000000000");
  // console.log(JSON.stringify(formData));
  console.log(`${key} updated to: ${value}`);
  // console.log("key: ", key);
  // console.log("value: ", value);
  console.log("--------------------------------");
};

const MoneyForm = {
  MainLabel: {
    label: "ตรวจสอบเงินงบประมาณประจำปีที่จัดสรรในการเผยแพร่ผลงานวิชาการ",
    name: "maintext",
  },
  Input1: {
    label: "ปีงบประมาณ พ.ศ.",
    name: "years",
    customInput: "max-w-max text-center",
  },
  Input2: {
    label: "วงเงินที่คณะจัดสรรไว้ จำนวนเงินทั้งสิ้น",
    customInput: "max-w-max text-center",
    disabled: false,
  },
  Input3: {
    label: "โดยคณะได้อนุมัติค่าใช้จ่ายในการเสนอผลงานวิชาการไปแล้ว จำนวน",
    customInput: "max-w-max text-center",
    disabled: true,
    placeholder: "0",
    text: "รายการ",
  },
  Input4: {
    label: "รวมเป็นเงิน",
    customInput: "max-w-max text-center",
    disabled: true,
    placeholder: "0",
  },
  Input5: {
    label: "วงเงินที่คณะจัดสรรไว้ คงเหลือ",
    customInput: "max-w-max text-center",
    disabled: true,
    placeholder: "0",
  },
  Input6: {
    label: "จำนวนเงินที่ขออนุมัติจค่า Page Charge ในครั้งนี้  เป็นจำนวนเงิน",
    customInput: "max-w-max text-center",
    disabled: false,
  },
  Input7: {
    label: "วงเงินที่คณะจัดสรรไว้ คงเหลือทั้งสิ้น",
    customInput: "max-w-max text-center",
    disabled: true,
    placeholder: "0",
  },
  text: {
    label: "วงเงินที่สามารถเบิกได้ 0 บาท",
    name: "text",
  },
};

const AssociateForm = {
  Maintext: {
    label: "รองคณบดีฝ่ายงานวิจัย",
    name: "maintext",
    disabled: false,
  },
  Choice1: {
    label: "เห็นชอบ",
    name: "comment",
    disabled: false,
  },
  Choice2: {
    label: "ไม่เห็นชอบ",
    name: "comment",
    disabled: false,
  },
  comments: {
    label: "ความคิดเห็น",
    name: "textArea",
    disabled: false,
  },
};

const PG1 = {
  label: "รับทราบ",
  disabled: false,
};

const showPDF = () => {
  console.log(formData.file1);
  if (formData.file1 && formData.file1.type === "application/pdf") {
    console.log("formData.file1");
    const fileURL = URL.createObjectURL(formData.file1);
    window.open(fileURL, "_blank"); // Opens the file in a new tab
  } else {
    alert("File is not a valid PDF.");
  }
};
const downloadPDF = () => {
  // Check if the file type is PDF
  console.log(formData.file1);
  if (formData.file1) {
    const fileURL = URL.createObjectURL(formData.file1);
    const link = document.createElement("a");
    link.href = fileURL;
    link.download = formData.file1.name || "download.pdf"; // Default name if none provided
    link.click();
    URL.revokeObjectURL(fileURL); // Clean up the object URL
  } else {
    alert("No file available to download.");
  }
};

const getFileURL = (file) => {
  try {
    if (file instanceof Blob) {
      return URL.createObjectURL(file);
    }
  } catch (err) {
    console.error("Error creating object URL:", err);
  }
  return "";
};

//isLoading เพื่อแสดงสถานะว่ากำลังโหลดข้อมูล
const isLoading = ref(true);
// Access route parameters
const route = useRoute();
const id = route.params.id;
console.log("params.id", id);
// ตัวแปรสำหรับเก็บข้อมูลจาก backend
const fetchProfessorData = async () => {
  try {
    const responsePC = await axios.get(
      `http://localhost:3000/page_charge/${id}`
    );
    const userID = responsePC.data.user_id;
    const responseUser = await axios.get(
      `http://localhost:3000/user/${userID}`
    );
    formData.userID = responseUser.data.user_id;
    formData.name = responseUser.data.user_nameth;
    formData.position = responseUser.data.user_position;

    console.log("get user: ", responseUser.data);
    console.log("get userid: ", responsePC.data.user_id);
    console.log("get responsePC: ", responsePC.data);

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
    formData.radioResearch = PCData.research_type;
    formData.otherInput = PCData.research_type2;
    formData.source = PCData.name_funding_source;
    formData.credit = PCData.budget_limit;
    formData.inYears = PCData.annual;

    formData.redioAuth = PCData.presenter_type;

    formData.moneyPG = PCData.request_support;

    console.log("get page_charge: ", PCData);

    const responseFile = await axios.get("http://localhost:3000/pdf/2");
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

const OfficerPC = async () => {
  try {
    const dataForBackend = {
      pageC_id: id,
      p_research_admin: formData.redioAuthOffic,
      p_reason: formData.description,
      research_doc_submit_date: formData.docSubmitDate,

      type: formData.typeFile,
      form_status: formData.statusForm,
      form_money: formData.moneyForm,
    };
    console.log("postPC: ", JSON.stringify(dataForBackend));

    const response = await axios.post(
      "http://localhost:3000/opinionPC",
      dataForBackend,
      {
        headers: {
          "Content-Type": "application/json", // Required for file uploads
        },
      }
    );
    alert("Have new OfficerPC!");
    console.log("res: ", response);
    console.log("allpostOfficerPC: ", message.value);
    console.log("postOfficerPC: ", response.data);
  } catch (error) {
    console.error(error);
    message.value = "Error adding page_charge. Please try again.";
  }
};

const loopdata = async () => {
  console.log("in loop");

  fetchProfessorData();

  console.log("formdata, ", formData.check);
  for (let i = 0; i < formData.check.length; i++) {
    console.log("checking journal", formData.check[i]);
    if (formData.check[i] == "nature") {
      formData.nature = "nature";
      console.log("Journal have 'nature'");
    }
    if (formData.check[i] == "ISI") {
      formData.checkISI = "ISI";
      console.log("Journal have 'ISI'");
    }
    if (formData.check[i] == "SJR") {
      formData.checkSJR = "SJR";
      console.log("Journal have 'SJR'");
    }
    if (formData.check[i] == "Scopus") {
      formData.checkScopus = "Scopus";
      console.log("Journal have 'Scopus'");
    }
  }
};

// ดึงข้อมูลเมื่อ component ถูกโหลด
onMounted(async () => {
  await fetchProfessorData();

  console.log("formdatacheck, ", formData.check);
  loopdata();
  console.log("check, ", formData.checkISI);
});
</script>

<!-- <script>
export default {
  data() {
    return {
      formData: {
        file1: null, // This should be a valid File object (e.g., from an input field)
      },
    };
  },
  methods: {
    showPDF() {
      if (this.formData.file1 && this.formData.file1.type === "application/pdf") {
        const fileURL = URL.createObjectURL(this.formData.file1);
        window.open(fileURL, "_blank"); // Opens the file in a new tab
      } else {
        alert("File is not a valid PDF.");
      }
    },
    downloadPDF() {
      if (this.formData.file1) {
        const fileURL = URL.createObjectURL(this.formData.file1);
        const link = document.createElement("a");
        link.href = fileURL;
        link.download = this.formData.file1.name || "download.pdf"; // Default name if none provided
        link.click();
        URL.revokeObjectURL(fileURL); // Clean up the object URL
      } else {
        alert("No file available to download.");
      }
    },
  },
};
</script> -->
