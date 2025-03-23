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
            :disabled=true
            :placeholder="formData.name"
          />
          <TextInputLabelLeft
            label="ตำแหน่ง"
            customLabel="w-2/12 text-lg font-bold"
            :placeholder="formData.position"
            :disabled=true
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
          <span
            v-if="v$.textOther1.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.textOther1.$errors[0].$message }}
          </span>
          <span
            v-if="v$.textOther2.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.textOther2.$errors[0].$message }}
          </span>

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
          <span
            v-if="v$.nameJournal.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.nameJournal.$errors[0].$message }}
          </span>

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
              v-model="formData.yearISI"
              @input="handleInput('yearISI', $event)"
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
              v-model="formData.scoreISI"
              @input="handleInput('scoreISI', $event)"
            />
          </div>
          <span
            v-if="v$.yearISI.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.yearISI.$errors[0].$message }}
          </span>
          <span
            v-if="v$.quartileISI.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.quartileISI.$errors[0].$message }}
          </span>
          <span
            v-if="v$.scoreISI.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.scoreISI.$errors[0].$message }}
          </span>

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
              v-model="formData.yearSJR"
              @input="handleInput('yearSJR', $event)"
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
              v-model="formData.scoreSJR"
              @input="handleInput('scoreSJR', $event)"
            />
          </div>
          <span
            v-if="v$.yearSJR.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.yearSJR.$errors[0].$message }}
          </span>
          <span
            v-if="v$.quartileSJR.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.quartileSJR.$errors[0].$message }}
          </span>
          <span
            v-if="v$.scoreSJR.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.scoreSJR.$errors[0].$message }}
          </span>

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
              v-model="formData.yearScopus"
              @input="handleInput('yearScopus', $event)"
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
              v-model="formData.scoreScopus"
              @input="handleInput('scoreScopus', $event)"
            />
          </div>
          <span
            v-if="v$.yearScopus.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.yearScopus.$errors[0].$message }}
          </span>
          <span
            v-if="v$.quartileScopus.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.quartileScopus.$errors[0].$message }}
          </span>
          <span
            v-if="v$.scoreScopus.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.scoreScopus.$errors[0].$message }}
          </span>
          <div class="flex flex-row">
            <CheckInput
              label="Nature"
              customDiv="max-w-72 flex items-center"
              v-model="formData.nature"
              @input="handleCheckbox('nature', 'nature')"
            />
          </div>
          <span
            v-if="v$.check.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.check.$errors[0].$message }}
          </span>

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
          <span
            v-if="v$.moneyOp.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.moneyOp.$errors[0].$message }}
          </span>
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
          <span
            v-if="v$.nameReach.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.nameReach.$errors[0].$message }}
          </span>
          <p>กำหนดการที่คาดว่าจะได้รับการลงตีพิมพ์ในวารสาร</p>
          <div class="flex flex-row mt-2 justify-between">
            <TextInputLabelLeft
              label="ปีที่ (Vol.)"
              customLabel="w-[50%]"
              customInput="w-[50%]"
              customDiv="max-w-[15%]"
              v-model="formData.schedule"
              @input="handleInput('schedule', $event)"
            />
            <TextInputLabelLeft
              label="ฉบับที่ (Issue)"
              customLabel="w-[50%]"
              customInput="w-[50%]"
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
              label="ปี ค.ศ."
              customLabel="w-[50%]"
              customInput="w-[50%]"
              customDiv="max-w-[15%]"
              v-model="formData.year"
              @input="handleInput('year', $event)"
            />

            <TextInputLabelLeft
              label="เลขที่ ISSN/ISBN (อื่นๆ)"
              customLabel="w-[50%]"
              customInput="w-[50%]"
              customDiv="max-w-[30%]"
              v-model="formData.ISSN"
              @input="handleInput('ISSN', $event)"
            />
          </div>

          <span
            v-if="v$.schedule.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.schedule.$errors[0].$message }}
          </span>
          <span
            v-if="v$.issue.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.issue.$errors[0].$message }}
          </span>
          <span
            v-if="v$.months.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.months.$errors[0].$message }}
          </span>
          <span
            v-if="v$.year.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.year.$errors[0].$message }}
          </span>
          <span
            v-if="v$.ISSN.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.ISSN.$errors[0].$message }}
          </span>

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
          <span
            v-if="v$.submitReach.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.submitReach.$errors[0].$message }}
          </span>
          <span
            v-if="v$.announce.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.announce.$errors[0].$message }}
          </span>
          <span
            v-if="v$.latePay.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.latePay.$errors[0].$message }}
          </span>

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
                customDiv="max-w-fit mr-10 flex items-center"
                v-model="formData.radioResearch"
                @change="handleInput('radioResearch', $event)"
              />
              <RadioInput
                label="วิจัยประยุกต์"
                value="วิจัยประยุกต์"
                name="type"
                customDiv="max-w-fit mr-10 flex items-center"
                v-model="formData.radioResearch"
                @change="handleInput('radioResearch', $event)"
              />
              <RadioInput
                label="วิจัยและพัฒนา"
                value="วิจัยและพัฒนา"
                name="type"
                customDiv="max-w-fit mr-10 flex items-center"
                v-model="formData.radioResearch"
                @change="handleInput('radioResearch', $event)"
              />
              <div class="flex flex-row">
                <RadioInput
                  label="วิจัยอื่น ๆ "
                  value="อื่นๆ"
                  name="type"
                  customDiv="max-w-fit mr-2 flex items-center"
                  v-model="formData.radioResearch"
                  @change="handleInput('radioResearch', $event)"
                />
                <TextInputLabelLeft
                  label="(ระบุ)"
                  name="type"
                  customDiv="max-w-fit flex items-center"
                  v-model="formData.otherInput"
                  @input="handleInput('otherInput', $event)"
                />
              </div>
            </div>

            <span
              v-if="v$.radioResearch.$error"
              class="text-base font-bold text-red-500 text-left"
            >
              {{ v$.radioResearch.$errors[0].$message }}
            </span>
            <span
              v-if="v$.otherInput.$error"
              class="text-base font-bold text-red-500 text-left"
            >
              {{ v$.otherInput.$errors[0].$message }}
            </span>

            <TextInputLabelLeft
              label="ชื่อแหล่งทุนวิจัย"
              customLabel="w-auto min-w-fit"
              v-model="formData.source"
              @input="handleInput('source', $event)"
            />
            <span
              v-if="v$.source.$error"
              class="text-base font-bold text-red-500 text-left"
            >
              {{ v$.source.$errors[0].$message }}
            </span>

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
            <span
              v-if="v$.credit.$error"
              class="text-base font-bold text-red-500 text-left"
            >
              {{ v$.credit.$errors[0].$message }}
            </span>
            <span
              v-if="v$.inYears.$error"
              class="text-base font-bold text-red-500 text-left"
            >
              {{ v$.inYears.$errors[0].$message }}
            </span>
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
            v-model="formData.radioAuth"
            @change="handleInput('radioAuth', $event)"
          />
          <RadioInput
            label="ผู้ประพันธ์บรรณกิจ Corresponding Author"
            value="Corresponding Author"
            name="Author"
            v-model="formData.radioAuth"
            @change="handleInput('radioAuth', $event)"
          />
          <span
            v-if="v$.radioAuth.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.radioAuth.$errors[0].$message }}
          </span>
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
          <span
            v-if="v$.moneyPG.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.moneyPG.$errors[0].$message }}
          </span>
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
          <span
            v-if="v$.file1.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.file1.$errors[0].$message }}
          </span>
          <FileInput
            label="หลักฐานแสดงการจัดลำดับ Quartile ของฐานข้อมูลสากล ISI หรือ SJR หรือ Scopus"
            name="Second"
            type="file"
            @change="handleFile($event, 'file2')"
          />
          <span
            v-if="v$.file2.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.file2.$errors[0].$message }}
          </span>
          <FileInput
            label="ใบแจ้งหนี้ค่าใช้จ่ายสำหรับการตีพิมพ์ / อัตราค่าใช้จ่ายที่ประกาศบนหน้าเว็บไซต์"
            name="Third"
            type="file"
            @change="handleFile($event, 'file3')"
          />
          <span
            v-if="v$.file3.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.file3.$errors[0].$message }}
          </span>
          <FileInput
            label="หลักฐานการส่งบทความ หนังสือตอบรับบทความ"
            name="Fourth"
            type="file"
            @change="handleFile($event, 'file4')"
          />
          <span
            v-if="v$.file4.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.file4.$errors[0].$message }}
          </span>
          <FileInput
            label="สำเนาบทความ และ Upload บทความเข้าระบบ IT Scholar"
            name="Fifth"
            type="file"
            @change="handleFile($event, 'file5')"
          />
          <span
            v-if="v$.file5.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.file5.$errors[0].$message }}
          </span>
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
import { useRouter } from "vue-router";
import { useVuelidate } from "@vuelidate/core";
import { required, numeric, minValue, maxValue, between, helpers, requiredIf, integer } from "@vuelidate/validators";
import { DateTime } from "luxon";

import { useUserStore } from "@/store/userStore";
import api from "@/setting/api";

import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import TextInputLabelLeft from "@/components/Input/TextInputLabelLeft.vue";
import RadioInput from "@/components/Input/RadioInput.vue";
import CheckInput from "@/components/Input/CheckInput.vue";
import FileInput from "@/components/Input/FileInput.vue";

const router = useRouter();

// จัดการข้อมูลหลัก
const formData = reactive({
  userID: null,
  name: null,
  position: null,
  textOther1: null,
  textOther2: null,
  // PageDetail
  nameJournal: null,
  check: [],
  yearISI: null,
  quartileISI: null,
  scoreISI: null, //isi
  yearSJR: null,
  quartileSJR: null,
  scoreSJR: null, //sjr
  yearScopus: null,
  quartileScopus: null,
  scoreScopus: null, //scopus
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
  radioAuth: null,
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
  userID: "string",
  name: "string",
  position: "string",
  textOther1: "number",
  textOther2: "date",
  // PageDetail
  nameJournal: "string",
  check: "array",
  yearISI: "number",
  quartileISI: "number",
  scoreISI: "number", //isi
  yearSJR: "number",
  quartileSJR: "number",
  scoreSJR: "number", //sjr
  yearScopus: "number",
  quartileScopus: "number",
  scoreScopus: "number", //scopus
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
  radioAuth: "string",
  //MoneyPG
  moneyPG: "number",
  //FileForm
  file1: "string",
  file2: "string",
  file3: "string",
  file4: "string",
  file5: "string",
};

// ตรวจสอบปีและวันที่นี้
const currentYear = computed(() => DateTime.now().year);
const currentDate = computed(() => DateTime.now().toISODate());

// ตรวจเงื่อนไข 2 อัน
const isRequiredForWos = () =>
  formData.timeLeave.includes("2") && formData.venue.includes("ณ ต่างประเทศ");

// ตรวจว่าวันที่ไม่อยู่หลัง value <= x
const beforeDate = (value, date) => {
  return (
    DateTime.fromISO(value).toISODate() <= DateTime.fromISO(date).toISODate()
  );
};

//ตรวจว่าวันที่ไม่เกิดก่อน value >= x
const afterDate = (value, date) => {
  return (
    DateTime.fromISO(value).toISODate() >= DateTime.fromISO(date).toISODate()
  );
};

// ตรวจว่าวันที่ไม่อยู่หลัง value < x
const beforeDatenoteqal = (value, date) => {
  return (
    DateTime.fromISO(value).toISODate() < DateTime.fromISO(date).toISODate()
  );
};

//ตรวจว่าวันที่ไม่เกิดก่อน value > x
const afterDatenoteqal = (value, date) => {
  return (
    DateTime.fromISO(value).toISODate() > DateTime.fromISO(date).toISODate()
  );
};

// ฟังก์ชันตรวจสอบว่าเป็นวันที่ในอดีตหรือไม่
const pastDate = (value) => !value || value <= currentDate.value;

//validate rule
const rules = computed(() => ({
  textOther1: {
    required: helpers.withMessage("* กรุณากรอกข้อมูลครั้งที่ *", required),
    numeric: helpers.withMessage("* กรุณากรอกข้อมูลครั้งที่เป็นตัวเลข *", numeric),
    integer: helpers.withMessage("* กรุณากรอกเป็นจำนวนเต็ม *", integer),
    minValue: helpers.withMessage("* ครั้งที่ไม่สามารถต่ำกว่า 1 ได้ *", minValue(1)),
  },
  textOther2: {
    required: helpers.withMessage("* กรุณากรอกข้อมูลวันที่ *", required),
    beforeDate: helpers.withMessage("* วันที่ต้องไม่เกินวันนี้ *", (value) => beforeDate(value, currentDate.value)),
  },
  nameJournal: {
    required: helpers.withMessage("* กรุณากรอกข้อมูลชื่อวารสาร *", required),
  },
  check: {
    required: helpers.withMessage("* กรุณาเลือกฐานข้อมูลสากล *", required),
  },
  yearISI: {
    numeric: helpers.withMessage("* กรุณากรอกข้อมูลเป็นตัวเลข *", numeric),
    maxValue: helpers.withMessage("* ปีไม่สามารถมากกว่าปีปัจจุบันได้ *", maxValue(currentYear.value)),
    minValue: helpers.withMessage("* ปีไม่สามารถย้อนหลังเกิน 6 ปี *", minValue(currentYear.value-6)),
    required: helpers.withMessage(
      "* กรุณากรอกข้อมูลปีที่ได้รับการจัดลำดับ Quartile *",
      requiredIf(() => formData.check.includes("ISI"))
    ),
  },
  quartileISI: {
    numeric: helpers.withMessage("* กรุณากรอกข้อมูลเป็นตัวเลข *", numeric),
    between: helpers.withMessage(
      "* Quartile สามารถเลือกได้เพียง 1-4 *",
      between(1, 4)
    ),
    required: helpers.withMessage(
      "* กรุณากรอกข้อมูลลำดับ Quartile *",
      requiredIf(() => formData.check.includes("ISI"))
    ),
  },
  scoreISI: {
    numeric: helpers.withMessage("* กรุณากรอกข้อมูลเป็นตัวเลข *", numeric),
    minValue: helpers.withMessage(
      "* กรุณาตรวจสอบคะแนน คะแนนไม่สามารถต่ำกว่า 0 ได้ *",
      minValue(0.1)
    ),
    required: helpers.withMessage(
      "* กรุณากรอกข้อมูลคะแนน Impact Factor *",
      requiredIf(() => formData.check.includes("ISI"))
    ),
  },
  yearSJR: {
    numeric: helpers.withMessage("* กรุณากรอกข้อมูลเป็นตัวเลข *", numeric),
    minValue: helpers.withMessage("* ปีไม่สามารถย้อนหลังเกิน 6 ปี *", minValue(currentYear.value-6)),
    maxValue: helpers.withMessage(
      "* ปีไม่สามารถมากกว่าปีปัจจุบันได้ *",
      maxValue(currentYear.value)
    ),
    required: helpers.withMessage(
      "* กรุณากรอกข้อมูลปีที่ได้รับการจัดลำดับ Quartile *",
      requiredIf(() => formData.check.includes("SJR"))
    ),
  },
  quartileSJR: {
    numeric: helpers.withMessage("* กรุณากรอกข้อมูลเป็นตัวเลข *", numeric),
    between: helpers.withMessage(
      "* Quartile สามารถเบือกได้เพียง 1-4 *",
      between(1, 4)
    ),
    required: helpers.withMessage(
      "* กรุณากรอกข้อมูลลำดับ Quartile *",
      requiredIf(() => formData.check.includes("SJR"))
    ),
  },
  scoreSJR: {
    numeric: helpers.withMessage("* กรุณากรอกข้อมูลเป็นตัวเลข *", numeric),
    minValue: helpers.withMessage(
      "* กรุณาตรวจสอบคะแนน คะแนนไม่สามารถต่ำกว่า 0 ได้ *",
      minValue(0.1)
    ),
    required: helpers.withMessage(
      "* กรุณากรอกข้อมูลคะแนน SJR Score *",
      requiredIf(() => formData.check.includes("SJR"))
    ),
  },
  yearScopus: {
    numeric: helpers.withMessage("* กรุณากรอกข้อมูลเป็นตัวเลข *", numeric),
    maxValue: helpers.withMessage(
      "* ปีไม่สามารถมากกว่าปีปัจจุบันได้ *",
      maxValue(currentYear.value)
    ),
    required: helpers.withMessage(
      "* กรุณากรอกข้อมูลปีที่ได้รับการจัดลำดับ Quartile *",
      requiredIf(() => formData.check.includes("Scopus"))
    ),
  },
  quartileScopus: {
    numeric: helpers.withMessage("* กรุณากรอกข้อมูลเป็นตัวเลข *", numeric),
    between: helpers.withMessage(
      "* Quartile สามารถเบือกได้เพียง 1-4 *",
      between(1, 4)
    ),
    required: helpers.withMessage(
      "* กรุณากรอกข้อมูลลำดับ Quartile *",
      requiredIf(() => formData.check.includes("Scopus"))
    ),
  },
  scoreScopus: {
    numeric: helpers.withMessage("* กรุณากรอกข้อมูลเป็นตัวเลข *", numeric),
    minValue: helpers.withMessage(
      "* กรุณาตรวจสอบคะแนน คะแนนไม่สามารถต่ำกว่า 0 ได้ *",
      minValue(0.1)
    ),
    required: helpers.withMessage(
      "* กรุณากรอกข้อมูลคะแนน Cite Score *",
      requiredIf(() => formData.check.includes("Scopus"))
    ),
  },
  moneyOp: {
    required: helpers.withMessage(
      "* กรุณาเลือกวงเงินตามเกณฑ์การให้การสนับสนุน *",
      required
    ),
    numeric: helpers.withMessage("* กรุณากรอกข้อมูลเป็นตัวเลข *", numeric),
  },
  nameReach: {
    required: helpers.withMessage("* กรุณากรอกชื่อบทความ *", required),
  },
  schedule: {
    required: helpers.withMessage("* กรุณากรอกข้อมูลปีที่ (Vol.) *", required),
    numeric: helpers.withMessage("* กรุณากรอกข้อมูลเป็นตัวเลข *", numeric),
    minValue: helpers.withMessage(
      "* ปีไม่สามารถน้อยกว่าปีปัจจุบันได้ *",
      minValue(currentYear.value)
    ),
  },
  issue: {
    required: helpers.withMessage(
      "* กรุณากรอกข้อมูลฉบับที่ (Issue) *",
      required
    ),
    numeric: helpers.withMessage("* กรุณากรอกข้อมูลเป็นตัวเลข *", numeric),
    minValue: helpers.withMessage(
      "* ฉบับที่ไม่สามารถน้อยกว่า 1 *",
      minValue(1)
    ),
  },
  months: {
    required: helpers.withMessage("* กรุณาเลือกข้อมูลเดือน *", required),
  },
  year: {
    required: helpers.withMessage("* กรุณากรอกข้อมูลปี ค.ศ. *", required),
    numeric: helpers.withMessage("* กรุณากรอกข้อมูลเป็นตัวเลข *", numeric),
    minValue: helpers.withMessage(
      "* ปีไม่สามารถน้อยกว่าปีปัจจุบันได้ *",
      minValue(currentYear.value)
    ),
  },
  ISSN: {
    required: helpers.withMessage(
      "* กรุณากรอกข้อมูลเลขที่ ISSN/ISBN (อื่นๆ) *",
      required
    ),
  },
  submitReach: {
    required: helpers.withMessage(
      "* กรุณากรอกวันที่ส่งบทความไปยังสำนักพิมพ์เจ้าของวารสาร *",
      required
    ),
    afterDate: helpers.withMessage("วันที่ไม่สามารถเกิดก่อนวันที่ส่งงานวิจัยได้", (value) => afterDate(value, formData.submitReach))
  },
  announce: {
    required: helpers.withMessage(
      "* กรุณากรอกวันประกาศผลการพิจารณา *",
      required
    ),
    afterDate: helpers.withMessage("วันที่ไม่สามารถเกิดก่อนวันที่ส่งงานวิจัยได้", (value) => afterDate(value, formData.submitReach))
  },
  latePay: {
    required: helpers.withMessage(
      "* กรุณากรอกวันสุดท้ายของการจ่ายค่าตีพิมพ์ *",
      required
    ),
    afterDate: helpers.withMessage("วันที่ไม่สามารถเกิดก่อนวันที่ส่งงานวิจัย และวันประกาศผลได้", (value) => afterDate(value, DateTime.min(
            DateTime.fromISO(formData.announce),
            DateTime.fromISO(currentDate.value)
          )))
    ,
  },
  radioResearch: {
    required: helpers.withMessage(
      "* กรุณาเลือกประเภทโครงการวิจัย*",
      requiredIf(() => formData.reachOther && formData.reachOther.trim() !== "")
    ),
  },
  otherInput: {
    required: helpers.withMessage(
      "* กรุณากรอกประเภทงานวิจัย *",
      requiredIf(() => formData.radioResearch === "อื่นๆ")
    ),
  },
  source: {
    required: helpers.withMessage(
      "* กรุณากรอกชื่อแหล่งทุนวิจัย *",
      requiredIf(() => formData.reachOther && formData.reachOther.trim() !== "")
    ),
  },
  credit: {
    required: helpers.withMessage(
      "* กรุณากรอกวงเงินงบประมาณการวิจัย *",
      requiredIf(() => formData.reachOther && formData.reachOther.trim() !== "")
    ),
    numeric: helpers.withMessage("* กรุณากรอกข้อมูลเป็นตัวเลข *", numeric),
  },
  inYears: {
    required: helpers.withMessage(
      "* กรุณากรอกปี *",
      requiredIf(() => formData.reachOther && formData.reachOther.trim() !== "")
    ),
    numeric: helpers.withMessage("* กรุณากรอกข้อมูลเป็นตัวเลข *", numeric),
    maxValue: helpers.withMessage(
      "* ปีไม่สามารถมากกว่าปีปัจจุบันได้ *",
      maxValue(currentYear.value)
    ),
  },
  radioAuth: {
    required: helpers.withMessage("* กรุณากรอกผู้ขอรับการสนับสนุน *", required),
  },
  moneyPG: {
    required: helpers.withMessage(
      "* กรุณากรอกขอรับการสนับสนุนค่าใช้จ่ายในการลงตีพิมพ์ (Page Charge) *",
      required
    ),
    numeric: helpers.withMessage("* กรุณากรอกข้อมูลเป็นตัวเลข *", numeric),
  },

  file1: {
    required: helpers.withMessage("* กรุณาอัปโหลดไฟล์ *", required),
    fileType: helpers.withMessage(
      "* อัปโหลดได้เฉพาะไฟล์ PDF เท่านั้น *",
      (value) => {
        if (!value) return false;
        const allowedTypes = ["application/pdf"];
        return allowedTypes.includes(value.type);
      }
    ),
  },
  file2: {
    required: helpers.withMessage("* กรุณาอัปโหลดไฟล์ *", required),
    fileType: helpers.withMessage(
      "* อัปโหลดได้เฉพาะไฟล์ PDF เท่านั้น *",
      (value) => {
        if (!value) return false;
        const allowedTypes = ["application/pdf"];
        return allowedTypes.includes(value.type);
      }
    ),
  },
  file3: {
    fileType: helpers.withMessage(
      "* อัปโหลดได้เฉพาะไฟล์ PDF เท่านั้น *",
      (value) => {
        if (!value) return true;
        return value.type === "application/pdf";
      }
    ),
  },
  file4: {
    fileType: helpers.withMessage(
      "* อัปโหลดได้เฉพาะไฟล์ PDF เท่านั้น *",
      (value) => {
        if (!value) return true;
        return value.type === "application/pdf";
      }
    ),
  },
  file5: {
    required: helpers.withMessage("* กรุณาอัปโหลดไฟล์ *", required),
    fileType: helpers.withMessage(
      "* อัปโหลดได้เฉพาะไฟล์ PDF เท่านั้น *",
      (value) => {
        if (!value) return false;
        const allowedTypes = ["application/pdf"];
        return allowedTypes.includes(value.type);
      }
    ),
  },
}));

const v$ = useVuelidate(rules, formData);

const userStore = useUserStore();
const user = computed(() => userStore.user);

onMounted(async () => {
  await userStore.fetchUser();

  formData.userID = user.value?.user_id;
  formData.name = user.value?.user_nameth || "";
  formData.position = user.value?.user_positionth || "";
});

const handleInput = (key, event) => {
  const value = event.target.value.trim();
  const type = inputTypes[key];
  if (type === "number") {
    formData[key] = value === "" ? null : parseInt(value, 10);
  } else {
    formData[key] = value;
  }
};

const handleCheckbox = (key, value) => {
  if (formData[key]) {
    // If the checkbox is checked, uncheck it and remove the value from the array
    formData[key] = "";
    formData.check = formData.check.filter((item) => item !== value);
  } else {
    // If the checkbox is unchecked, check it and add the value to the array
    formData[key] = value;
    formData.check.push(value);
  }
};

const handleFile = (event, fieldName) => {
  const file = event.target.files[0];
  if (file) {
    formData[fieldName] = file;
  } else {
    console.error(`No file selected for ${fieldName}.`);
  }
};

const NewPC = async () => {
  const result = await v$.value.$validate();

  if (result) {
    try {
      const dataForBackend = {
        user_id: formData.userID,
        pageC_times: formData.textOther1,
        pageC_days: formData.textOther2,
        journal_name: formData.nameJournal,
        quality_journal: formData.check,
        pc_isi_year: formData.yearISI,
        pc_sjr_year: formData.yearSJR,
        pc_scopus_year: formData.yearScopus,
        impact_factor: formData.scoreISI,
        sjr_score: formData.scoreSJR,
        cite_score: formData.scoreScopus,
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
        presenter_type: formData.radioAuth,
        request_support: formData.moneyPG,

        pc_proof: formData.file1,
        q_pc_proof: formData.file2,
        invoice_public: formData.file3,
        accepted: formData.file4,
        copy_article: formData.file5,
      };

      console.log("postPC: ", JSON.stringify(dataForBackend));
      const response = await api.post("/page_charge", dataForBackend, {
        headers: {
          "Content-Type": "multipart/form-data", // Required for file uploads
        },
      });
      console.log(response)
      
      alert("บันทึกข้อมูลเรียบร้อยแล้ว");
      router.push("/allstatus");
    } catch (error) {
      console.log("Error saving code : ", error);

      alert("ไม่สามารถส่งข้อมูล โปรดลองอีกครั้งในภายหลัง");
    }
  } else {
    alert("โปรดกรอกข้อมูลให้ครบถ้วน");
    console.log(v$.value.$errors);
  }
};
</script>
