<template>
  <div>
    <div class="container my-10 mx-auto">
      <p class="text-xl font-bold mb-5">
        ขออนุมัติเดินทางไปเผยแพร่ผลงานในการประชุมทางวิชาการ
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

      <Mainbox>
        <p class="leading-9 text-lg font-bold">
          1. รายละเอียดการขออนุมัติเดินทาง
        </p>
        <SectionWrapper>
          <div class="flex flex-row">
            <TextInputLabelLeft
              label="เดินทางวันที่"
              customLabel="w-auto mr-2"
              customDiv="max-w-max"
              customInput="max-w-max"
              type="date"
              v-model="formData.travelStart"
              @input="handleInput('travelStart', $event.target.value)"
            />
            <TextInputLabelLeft
              label="ถึงวันที่"
              customLabel="w-auto mr-2"
              customDiv="max-w-max ml-[10%]"
              customInput="max-w-max"
              type="date"
              v-model="formData.travelEnd"
              @input="handleInput('travelEnd', $event.target.value)"
            />
          </div>

          <TextInputLabelLeft
            label="ชื่อผลงานวิจัยที่นำเสนอ"
            customLabel="w-1/6"
            v-model="formData.research"
            @input="handleInput('research', $event.target.value)"
          />

          <TextInputLabelLeft
            label="ชื่อการประชุมทางวิชาการ"
            customLabel="w-1/6"
            v-model="formData.conferenceName"
            @input="handleInput('conferenceName', $event.target.value)"
          />

          <div class="flex flex-row w-full">
            <p class="w-2/6 mr-4 ">การประชุมวิชาการจัดในประเทศ หรือต่างประเทศ</p>

            <RadioInput
              customDiv="max-w-36"
              label="ณ ต่างประเทศ"
              name="Venue"
              value="ณ ต่างประเทศ"
              v-model="formData.venue"
              @change="handleInput('venue', $event.target.value)"
            />
            <RadioInput
              label="ภายในประเทศ"
              name="Venue"
              value="ภายในประเทศ"
              v-model="formData.venue"
              @change="handleInput('venue', $event.target.value)"
            />
          </div>

          <div class="flex flex-row">
            <TextInputLabelLeft
              label="วันที่จัด"
              customLabel="w-auto mr-9"
              customDiv="max-w-max mr-10"
              customInput="max-w-max"
              type="date"
              v-model="formData.meetingDate"
              @input="handleInput('meetingDate', $event.target.value)"
            />
            <TextInputLabelLeft
              label="สถานที่จัด"
              customLabel="w-24"
              customInput="w-full"
              v-model="formData.meetingVenue"
              @input="handleInput('meetingVenue', $event.target.value)"
            />
            <TextInputLabelLeft
              v-if="formData.venue == 'ณ ต่างประเทศ'"
              customDiv="ml-10"
              label="ประเทศ"
              customLabel="w-24"
              customInput="w-full"
              v-model="formData.location"
              @input="handleInput('location', $event.target.value)"
            />
            <TextInputLabelLeft
              v-if="formData.venue == 'ภายในประเทศ'"
              customDiv="ml-10"
              label="จังหวัด"
              customLabel="w-24"
              customInput="w-full"
              v-model="formData.location"
              @input="handleInput('location', $event.target.value)"
            />
          </div>

          <div class="flex flex-row justify-between">
            <TextInputLabelLeft
              label="วันที่ส่งบทความไปยังผู้จัด"
              type="date"
              customDiv="max-w-max"
              customInput="max-w-max"
              v-model="formData.dateSubmitToOrganizer"
              @input="handleInput('dateSubmitToOrganizer', $event.target.value)"
            />

            <TextInputLabelLeft
              label="วันประกาศผลการพิจารณาบทความ"
              type="date"
              customDiv="max-w-max"
              customInput="max-w-max"
              v-model="formData.argumentDateReview"
              @input="handleInput('argumentDateReview', $event.target.value)"
            />

            <TextInputLabelLeft
              label="วันสุดท้ายของการลงทะเบียน"
              type="date"
              customDiv="max-w-max"
              customInput="max-w-max"
              v-model="formData.lastDayRegister"
              @input="handleInput('lastDayRegister', $event.target.value)"
            />
          </div>
        </SectionWrapper>
      </Mainbox>

      <Mainbox>
        <p class="leading-9 text-lg font-bold">
          2.  รายละเอียดการขออนุมัติเดินทาง
        </p>
        <SectionWrapper>
          <RadioInput
            label="การประชุมทางวิชาการที่คณะจัดหรือร่วมจัดในประเทศ และไม่อยู่ในฐานข้อมูลสากล SCOPUS"
            name="Scopus"
            value="คณะจัด ไม่อยู่scopus"
            v-model="formData.meetingType"
            @change="handleInput('meetingType', $event.target.value)"
          />
          <RadioInput
            label="การประชุมทางวิชาการที่อยู่ในฐานข้อมูลสากล SCOPUS โดยมีการกำหนดคุณภาพแบ่งเป็น 2 ระดับ "
            name="Scopus"
            value="อยู่ในscopus"
            v-model="formData.meetingType"
            @change="handleInput('meetingType', $event.target.value)"
          />

          <SectionWrapper>
            <RadioInput
              label="ระดับมาตรฐาน"
              name="Level"
              value="มาตรฐาน"
              v-model="formData.qualityMeeting"
              @change="handleInput('qualityMeeting', $event.target.value)"
            />
            <RadioInput
              label="ระดับดีมาก"
              name="Level"
              value="ดีมาก"
              v-model="formData.qualityMeeting"
              @change="handleInput('qualityMeeting', $event.target.value)"
            />
            <SectionWrapper>
              <RadioInput
                label="ใช้คะแนนที่คำนวณจาก SJR indicator และ H Index ที่ได้มาจาก SCImago Journal & Country Rank"
                name="Score"
                value="SJR"
                v-model="formData.score"
                @change="handleInput('score', $event.target.value)"
              />
              <div class="flex flex-row w-full px-7 my-2">
                <TextInputLabelLeft
                  label="• ค่า SJR"
                  customLabel="w-16 mr-1"
                  customDiv="max-w-max"
                  customInput="max-w-max mr-3"
                  v-model="formData.sjr"
                  @input="handleInput('sjr', $event.target.value)"
                />
                <TextInputLabelLeft
                  label="ปี"
                  customLabel="w-auto mr-1"
                  customDiv="max-w-max"
                  customInput="max-w-max mr-3"
                  v-model="formData.sjrYear"
                  @input="handleInput('sjrYear', $event.target.value)"
                />
                <TextInputLabelLeft
                  label="x H-Index"
                  customLabel="w-auto mr-1"
                  customDiv="max-w-max"
                  customInput="max-w-max mr-3"
                  v-model="formData.hIndex"
                  @input="handleInput('hIndex', $event.target.value)"
                />
                <TextInputLabelLeft
                  label="ปี"
                  customLabel="w-auto mr-1"
                  customDiv="max-w-max"
                  customInput="max-w-max mr-3"
                  v-model="formData.hIndexYear"
                  @input="handleInput('hIndexYear', $event.target.value)"
                />
                <span v-if="formData.score == 'SJR'" class="place-self-center"
                  >มีค่าคะแนน = {{ totalScore }} คะแนน</span
                >
              </div>

              <RadioInput
                label="ใช้ผลการจัดระดับ CIF (Conference Impact Factor)"
                name="Score"
                value="CIF"
                v-model="formData.score"
                @change="handleInput('score', $event.target.value)"
              />
              <div class="flex flex-row w-full px-7 my-2">
                <TextInputLabelLeft
                  label="• ค่า citation total"
                  customLabel="w-auto mr-1"
                  customDiv="max-w-max"
                  customInput="max-w-max mr-3"
                  v-model="formData.Citation"
                  @input="handleInput('Citation', $event.target.value)"
                />
                <TextInputLabelLeft
                  label="x H-Index"
                  customLabel="w-auto mr-1"
                  customDiv="max-w-max"
                  customInput="max-w-max mr-3"
                  v-model="formData.hIndex"
                  @input="handleInput('hIndex', $event.target.value)"
                />
                <span v-if="formData.score == 'CIF'" class="place-self-center"
                >มีค่าคะแนน = {{ totalScore }} คะแนน</span
              >
              </div>

              <RadioInput
                label="ใช้ผลการจัดระดับ CORE Conference Ranking"
                name="Score"
                value="CORE"
                v-model="formData.score"
                @change="handleInput('score', $event.target.value)"
              />
              <div class="flex flex-row w-full px-7 my-2">
                <TextInputLabelLeft
                  label="• ค่า"
                  customLabel="w-auto mr-1"
                  customDiv="max-w-max"
                  customInput="max-w-max mr-3"
                  v-model="formData.coreConf"
                  @input="handleInput('coreConf', $event.target.value)"
                />
                <span class="place-self-center">(ตั้งแต่ A ขึ้นไป)</span>
              </div>
              <p class="px-7 text-sm text-red-500">
                เช็คคะแนนได้จาก http://portal.core.edu.au/conf-ranks
              </p>
            </SectionWrapper>
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
            @change="handleInput('radioAuth', $event.target.value)"
          />
          <RadioInput
            label="ผู้ประพันธ์บรรณกิจ Corresponding Author"
            value="Corresponding Author"
            name="Author"
            v-model="formData.radioAuth"
            @change="handleInput('radioAuth', $event.target.value)"
          />
        </SectionWrapper>
      </Mainbox>

      <Mainbox>
        <p class="text-lg font-bold">
          4.  การลาและการขอเบิกค่าลงทะเบียนและค่าใช้จ่ายอื่น ๆ
        </p>

        <SectionWrapper>
          <p class="font-bold text-base pt-3">4.1 ครั้งที่ในการลา</p>
          <SectionWrapper>
            <RadioInput
              label="ครั้งที่ 1"
              name="TimeLeave"
              value="1"
              v-model="formData.timeLeave"
              @change="handleInput('timeLeave', $event.target.value)"
            />
            <RadioInput
              label="ครั้งที่ 2"
              name="TimeLeave"
              value="2"
              v-model="formData.timeLeave"
              @change="handleInput('timeLeave', $event.target.value)"
            />
            <p class="py-1 px-7">
              ในกรณีลาครั้งที่ 2 (การประชุมฯ ณ ต่างประเทศ)
              มีผลงานตีพิมพ์ในวารสารในฐานข้อมูล
            </p>
            <div class="flex flex-row px-7 mt-1">
              <RadioInput
                label="WoS-Q1"
                name="WoS"
                value="WoS-Q1"
                v-model="formData.wos"
                @change="handleInput('wos', $event.target.value)"
              />
              <RadioInput
                label="WoS-Q2"
                name="WoS"
                value="WoS-Q2"
                v-model="formData.wos"
                @change="handleInput('wos', $event.target.value)"
              />
            </div>
            <div class="px-7 py-2">
              <TextInputLabelLeft
                label="เรื่อง"
                customLabel="pr-2"
                v-model="formData.nameWos"
                @input="handleInput('nameWos', $event.target.value)"
              />
            </div>
          </SectionWrapper>

          <p class="font-bold text-base pt-3">
            4.2 กรณีที่จัดการประชุมฯ ณ ต่างประเทศ
          </p>
          <SectionWrapper>
            <p>ขอเบิกค่าลงทะเบียนตามที่จ่ายจริง และค่าใช้จ่ายอื่น ๆ</p>
            <RadioInput
              label="ไม่เกิน 50%"
              name="withdraw"
              value="50%"
              v-model="formData.withdraw"
              @change="handleInput('withdraw', $event.target.value)"
            />
            <RadioInput
              label="ไม่เกิน 100% มีผลงานตีพิมพ์ในวารสารในฐานข้อมูล"
              name="withdraw"
              value="100%"
              v-model="formData.withdraw"
              @change="handleInput('withdraw', $event.target.value)"
            />
            <div class="flex flex-row px-7 mt-1">
              <RadioInput
                label="WoS-Q1"
                name="WoS"
                value="WoS-Q1"
                v-model="formData.quality100"
                @change="handleInput('quality100', $event.target.value)"
              />
              <RadioInput
                label="WoS-Q2"
                name="WoS"
                value="WoS-Q2"
                v-model="formData.quality100"
                @change="handleInput('quality100', $event.target.value)"
              />
              <RadioInput
                label="WoS-Q3"
                name="WoS"
                value="WoS-Q3"
                v-model="formData.quality100"
                @change="handleInput('quality100', $event.target.value)"
              />
              <RadioInput
                label="SJR-Q1"
                name="WoS"
                value="SJR-Q1"
                v-model="formData.quality100"
                @change="handleInput('quality100', $event.target.value)"
              />
              <RadioInput
                label="SJR-Q2"
                name="WoS"
                value="SJR-Q2"
                v-model="formData.quality100"
                @change="handleInput('quality100', $event.target.value)"
              />
            </div>
            <div class="px-7 py-2">
              <TextInputLabelLeft
                label="เรื่อง"
                customLabel="pr-2"
                v-model="formData.name100"
                @input="handleInput('name100', $event.target.value)"
              />
            </div>
          </SectionWrapper>
        </SectionWrapper>
      </Mainbox>

      <Mainbox>
        <SectionWrapper>
          <p class="leading-9 text-lg font-bold">
            รายการค่าใช้จ่ายที่ขอเบิกจ่าย
          </p>
          <SectionWrapper>
            <div class="flex flex-row mb-2 justify-between">
              <div class="flex flex-row">
                <TextInputLabelLeft
                  label="1. ค่าลงทะเบียน (ตามที่จ่ายจริง) จำนวน"
                  customLabel="w-auto pr-2"
                  customDiv="max-w-max"
                  customInput="max-w-max"
                  v-model="formData.numberArticles"
                  @input="handleInput('numberArticles', $event.target.value)"
                />
                <TextInputLabelLeft
                  label="บทความ ๆ ละ"
                  customLabel="w-auto px-2"
                  customDiv="max-w-max"
                  customInput="max-w-max"
                  v-model="formData.amount1article"
                  @input="handleInput('amount1article', $event.target.value)"
                />
                <p class="flex items-center pl-2">บาท</p>
              </div>
              <p class="flex items-center">รวม {{ totalAmount }} บาท</p>
            </div>

            <p>2. ค่าพาหนะเดินทาง</p>
            <div class="flex flex-col px-5">
              <div class="flex flex-row mb-2">
                <TextInputLabelLeft
                  label="• เดินทางในประเทศ"
                  customLabel="w-64 pr-2"
                  customDiv="max-w-[50rem]"
                  customInput="max-w-[50rem]"
                  v-model="formData.domesticExpenses"
                  @input="handleInput('domesticExpenses', $event.target.value)"
                />
                <p class="flex items-center pl-2">บาท</p>
              </div>
              <div class="flex flex-row mb-2">
                <TextInputLabelLeft
                  label="• เดินทางในต่างประเทศ"
                  customLabel="w-64 pr-2"
                  customDiv="max-w-[50rem]"
                  customInput="max-w-[50rem]"
                  v-model="formData.overseasExpenses"
                  @input="handleInput('overseasExpenses', $event.target.value)"
                />
                <p class="flex items-center pl-2">บาท</p>
              </div>
              <div class="flex flex-row">
                <TextInputLabelLeft
                  label="• เดินทางระหว่างประเทศ กรุงเทพฯ -"
                  customLabel="w-96 pr-2"
                  customDiv="max-w-[30rem]"
                  customInput="max-w-[14rem]"
                  v-model="formData.travelCountry"
                  @input="handleInput('travelCountry', $event.target.value)"
                />
                <TextInputLabelLeft
                  label="- กรุงเทพฯ"
                  customLabel="w-22 px-2"
                  customDiv="max-w-[20rem]"
                  customInput="max-w-[14rem]"
                  v-model="formData.interExpenses"
                  @input="handleInput('interExpenses', $event.target.value)"
                />
                <p class="flex items-center pl-2">บาท</p>
              </div>
            </div>

            <div class="flex flex-row">
              <TextInputLabelLeft
                label="3. ค่าภาษีสนามบิน (ถ้ามี)"
                customLabel="w-auto pr-2"
                customDiv="max-w-[52rem]"
                customInput="max-w-[40rem]"
                v-model="formData.airplaneTax"
                @input="handleInput('airplaneTax', $event.target.value)"
              />
              <p class="flex items-center pl-2">บาท</p>
            </div>

            <div class="flex flex-row mb-2 justify-between">
              <div class="flex flex-row w-5/6">
                <TextInputLabelLeft
                  label="4. ค่าเช่าที่พัก"
                  customLabel="w-auto pr-2"
                  customDiv="max-w-[26rem]"
                  customInput="max-w-[19rem]"
                  v-model="formData.numberDaysRoom"
                  @input="handleInput('numberDaysRoom', $event.target.value)"
                />
                <TextInputLabelLeft
                  label="คืน ๆ ละ"
                  customLabel="w-auto pr-2"
                  customDiv="max-w-[26rem]"
                  customInput="max-w-[20rem]"
                  v-model="formData.roomCostPerNight"
                  @input="handleInput('roomCostPerNight', $event.target.value)"
                />
                <p class="flex items-center pl-2">บาท</p>
              </div>
              <p class="flex items-center">รวม {{ totalRoom }} บาท</p>
            </div>

            <div class="flex flex-row mb-2 justify-between">
              <div class="flex flex-row w-5/6">
                <TextInputLabelLeft
                  label="5. ค่าเบี้ยเลี้ยงเดินทาง"
                  customLabel="w-auto pr-2"
                  customDiv="max-w-[26rem]"
                  customInput="max-w-[16rem]"
                  v-model="formData.numTravelDays"
                  @input="handleInput('numTravelDays', $event.target.value)"
                />
                <TextInputLabelLeft
                  label="คืน ๆ ละ"
                  customLabel="w-auto pr-2"
                  customDiv="max-w-[26rem]"
                  customInput="max-w-[20rem]"
                  v-model="formData.dailyAllowance"
                  @input="handleInput('dailyAllowance', $event.target.value)"
                />
                <p class="flex items-center pl-2">บาท</p>
              </div>
              <p class="flex items-center">รวม {{ totalAllowance }} บาท</p>
            </div>
            <p class="font-bold text-2xl pt-5 text-right">
              รวมทั้งสิ้น {{ allTotal }} บาท
            </p>
          </SectionWrapper>
        </SectionWrapper>
      </Mainbox>

      <Mainbox>
        <SectionWrapper>
          <p class="text-lg font-bold">เอกสารหลักฐานที่แนบ</p>
          <FileInput
            label="สำเนาบทความ (Full Paper)"
            name="First"
            type="file"
            @change="handleFile($event, 'file1')"
          />
          <TextInputLabelLeft
            label="*กรณีเบิกค่าใช้จ่ายเต็มวงเงิน* (Full Paper ประกอบการเบิก) มีผลงานตีพิมพ์ในวารสารในฐานข้อมูล WoS/SJR ซึ่งได้รับการตีพิมพ์ไม่เกิน 2 ปี ก่อนการประชุม เมื่อ"
            customLabel="w-[290%]"
            customInput="w-1/6"
            @input="handleInput('inputFile2', $event.target.value)"
          />
          <FileInput
            name="Second"
            type="file"
            @change="handleFile($event, 'file2')"
          />
          <FileInput
            label="*กรณีเบิกค่าใช้จ่ายเต็มวงเงิน* หลักฐานเอกสาร Quartile ของ Paper ที่ใช้ประกอบการเบิก"
            name="Third"
            type="file"
            @change="handleFile($event, 'file3')"
          />
          <FileInput
            label="เอกสารประชาสัมพันธ์การจัดการประชุมทางวิชาการ (Call for paper)"
            name="Fourth"
            type="file"
            @change="handleFile($event, 'file4')"
          />
          <FileInput
            label="จดหมายการตอบรับเข้าร่วมประชุม (Accepted)"
            name="Fifth"
            type="file"
            @change="handleFile($event, 'file5')"
          />
          <FileInput
            label="เอกสารแสดงค่าลงทะเบียน"
            name="Sixth"
            type="file"
            @change="handleFile($event, 'file6')"
          />
          <FileInput
            label="เอกสารแสดงอัตราแลกเปลี่ยน (ณ วันที่ยื่น)"
            name="Seventh"
            type="file"
            @change="handleFile($event, 'file7')"
          />
          <FileInput
            label="หลักฐานการประชุมวิชาการอยู่ในฐาน Scopus"
            name="Eighth"
            type="file"
            @change="handleFile($event, 'file8')"
          />
        </SectionWrapper>
      </Mainbox>
      <div class="flex justify-end">
        <button @click="newConfer" class="btn btn-success text-white">
          บันทึกข้อมูล
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, reactive, watch } from "vue";
import { useRouter } from "vue-router";
import { useVuelidate } from "@vuelidate/core";
import { required, numeric, minValue, integer, helpers, requiredIf, maxValue } from "@vuelidate/validators";
import { DateTime } from "luxon";

import { useUserStore } from "@/store/userStore";
import api from "@/setting/api";

import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import TextInputLabelLeft from "@/components/Input/TextInputLabelLeft.vue";
import RadioInput from "@/components/Input/RadioInput.vue";
import FileInput from "@/components/Input/FileInput.vue";

const router = useRouter();

// จัดการข้อมูลหลัก
const formData = reactive({
  user_id: 0,
  name: "",
  position: "",
  textOther1: 0,
  textOther2: "",
  
  travelStart: "",
  travelEnd: "",
  research: "",
  conferenceName: "",

  venue: "",
  meetingDate: "",
  meetingVenue: "",
  location: "",

  dateSubmitToOrganizer: "",
  argumentDateReview: "",
  lastDayRegister: "",
  
  meetingType: "",
  qualityMeeting: "",
  
  score: 0,
  sjr: 0,
  sjrYear: 0,
  hIndex: 0,
  hIndexYear: 0,
  total: 0,
  Citation: 0,
  coreConf: 0,
  
  radioAuth: "",
  
  timeLeave: "",
  wos: "",
  nameWos: "",

  withdraw: "",
  quality100: "",
  name100: "",
  
  numberArticles: "",
  amount1article: "",
  totalAmount: "",
  domesticExpenses: "",
  overseasExpenses: "",
  travelCountry: "",
  interExpenses: "",
  airplaneTax: "",
  numberDaysRoom: "",
  roomCostPerNight: "",
  totalRoom: "",
  numTravelDays: "",
  dailyAllowance: "",
  totalAllowance: "",
  all_money: "", //แก้ด้วย

  file1: "",
  file2: "",
  inputFile2: "",
  file3: "",
  file4: "",
  file5: "",
  file6: "",
  file7: "",
  file8: ""
});

// ฟังก์ชันตรวจสอบปีปัจจุบัน
const currentYear = DateTime.now().year;
const currentDate = DateTime.now().toISODate();

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
    maxValue: helpers.withMessage("* วันที่ต้องไม่เกินวันปัจจุบัน *", maxValue(currentDate)),
  },
  travelStart: {
    required: helpers.withMessage("* กรุณากรอกข้อมูลเดินทาง *", required),
    minValue: helpers.withMessage("* วันเดินทางไม่สามารถเกิดก่อนวันปัจจุบันได้ *", minValue(currentDate))
  },
  travelEnd: {
    required: helpers.withMessage("* กรุณากรอกข้อมูลวันเดินทางกลับ *", required),
    minValue: helpers.withMessage("* วันเดินทางกลับไม่สามารถเกิดก่อนวันไปได้ *", minValue(formData.travelStart))
  },
  research: {
    required: helpers.withMessage("* กรุณากรอกชื่อผลงานวิจัย *", required),
  },
  conferenceName: {
    required: helpers.withMessage("* กรุณากรอกชื่องานประชุมวิชาการ *", required),
  },
  venue: {
    required: helpers.withMessage("* กรุณาเลือกว่าไปต่างประเทศ หรือในประเทศ *", required),
  },
  meetingDate: {
    required: helpers.withMessage("* กรุณากรอกข้อมูลวันที่จัดข้อมูลการประชุมวิชาการ *", required),
    minValue: helpers.withMessage("* วันที่จัดการประชุมวิชาการไม่สามารถจัดก่อนวันที่จะเดินทางได้ *", minValue(formData.travelStart)),
    maxValue: helpers.withMessage("* วันที่จัดการประชุมวิชาการไม่สามารถจัดหลังจากที่เดินทางกลับได้ *", maxValue(formData.travelEnd))
  },
  meetingVenue: {
    required: helpers.withMessage("* กรุณากรอกข้อมูลสถานที่จัดงานประชุมวิชาการ *", required)
  },
  location: {
    required: helpers.withMessage("* กรุณากรอกประเทศ หรือจังหวัดที่ไปประชุมวิชาการ *", required)
  },
  dateSubmitToOrganizer: {
    required: helpers.withMessage("* กรุณากรอกข้อมูลวันที่ส่งข้อมูลงานวิชาการ *", required),
    maxValue: helpers.withMessage("* ไม่สามารถส่งงานวิจัยหลังจากวันที่กรอกข้อมูลแบบฟอร์มนี้ *", maxValue(currentDate))
  },
  argumentDateReview: {
    required: helpers.withMessage("* กรุณากรอกข้อมูลวันที่ประกาศผลการคัดเลือก *", required),
    minValue: helpers.withMessage("* ไม่สามารถกรอกวันประกาศผลก่อนสะนที่สมัครได้ *", minValue(formData.dateSubmitToOrganizer))
  }

}))

const v$ = useVuelidate(rules, formData);

const userStore = useUserStore();
const user = computed(() => userStore.user);

onMounted(async () => {
  await userStore.fetchUser();

  formData.user_id = user.value?.user_id;
  formData.name = user.value?.user_nameth || "";
  formData.position = user.value?.user_positionth || "";
});

const handleInput = (key, value) => {
  formData[key] = value;
  console.log(`${key} updated to: ${value}`);
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

const totalScore = computed(() => {
  console.log("totalScore");
  if (formData.score == "SJR") {
    console.log("SJR");
    if (formData.sjr != null && formData.hIndex != null) {
      return formData.sjr * formData.hIndex;
    }
    return null;
  } else if (formData.score == "CIF") {
    console.log("CIF");
    if (formData.Citation != null && formData.hIndex != null) {
      return 0.5 * (formData.Citation / 200 + formData.hIndex);
    }
    return null;
  }
  return null; // Make sure to return a value
});

// If you need to store total in formData, do this inside a watcher
watch(totalScore, (newValue) => {
  formData.total = newValue;
  console.log("Updated formData.total: ", formData.total);
  console.log("all", JSON.stringify(formData));
});

const totalAmount = computed(() => {
  formData.totalAmount = formData.numberArticles * formData.amount1article;
  console.log("tt amout", formData.totalAmount);
  return formData.totalAmount;
});
const totalRoom = computed(() => {
  formData.totalRoom = formData.numberDaysRoom * formData.roomCostPerNight;
  console.log("tt room", formData.totalRoom);
  return formData.totalRoom;
});
const totalAllowance = computed(() => {
  formData.totalAllowance = formData.numTravelDays * formData.dailyAllowance;
  console.log("tt totalAllowance", formData.totalAllowance);
  return formData.totalAllowance;
});

const allTotal = computed(() => {
  formData.all_money =
    (parseFloat(formData.totalAmount) || 0) +
    (parseFloat(formData.domesticExpenses) || 0) +
    (parseFloat(formData.overseasExpenses) || 0) +
    (parseFloat(formData.interExpenses) || 0) +
    (parseFloat(formData.airplaneTax) || 0) +
    (parseFloat(formData.totalRoom) || 0) +
    (parseFloat(formData.totalAllowance) || 0);

  console.log("tt all_money", formData.all_money);
  return formData.all_money;
});

const newConfer = async () => {
  console.log("before postPC: ", formData);

  try {
    console.log("before postPC: ", formData);
    console.log("formData as JSON:", JSON.stringify(formData, null, 2));
    console.log("before userID: ", JSON.stringify(formData));

    const dataForBackend = {
      user_id: formData.user_id,
      conf_times: formData.textOther1,
      conf_days: formData.textOther2,
      trav_dateStart: formData.travelStart,
      trav_dateEnd: formData.travelEnd,
      conf_research: formData.research,
      conf_name: formData.conferenceName,
      meeting_date: formData.meetingDate,
      meeting_venue: formData.meetingVenue,
      date_submit_organizer: formData.dateSubmitToOrganizer,
      argument_date_review: formData.argumentDateReview,
      last_day_register: formData.lastDayRegister,
      meeting_type: formData.meetingType,
      quality_meeting: formData.qualityMeeting,
      presenter_type: formData.radioAuth,
      time_of_leave: formData.timeLeave,
      location: formData.location,
      wos_2_leave: formData.wos,
      name_2_leave: formData.nameWos,
      withdraw: formData.withdraw,
      wd_100_quality: formData.quality100,
      wd_name_100: formData.name100,
      country_conf: formData.venue,
      num_register_articles: formData.numberArticles,
      regist_amount_1_article: formData.amount1article,
      total_amount: formData.totalAmount,
      domestic_expenses: formData.domesticExpenses,
      overseas_expenses: formData.overseasExpenses,
      travel_country: formData.travelCountry,
      inter_expenses: formData.interExpenses,
      airplane_tax: formData.airplaneTax,
      num_days_room: formData.numberDaysRoom,
      room_cost_per_night: formData.roomCostPerNight,
      total_room: formData.totalRoom,
      num_travel_days: formData.numTravelDays,
      daily_allowance: formData.dailyAllowance,
      total_allowance: formData.totalAllowance,
      all_money: formData.all_money,

      score_type: formData.score,
      sjr_score: formData.sjr,
      sjr_year: formData.sjrYear,
      hindex_score: formData.hIndex,
      hindex_year: formData.hIndexYear,
      Citation: formData.Citation,
      score_result: formData.total,
      core_rank: formData.coreConf,

      type: formData.typeFile,
      full_page: formData.file1,
      date_published_journals: formData.inputFile2,
      published_journals: formData.file2,
      q_proof: formData.file3,
      call_for_paper: formData.file4,
      accepted: formData.file5,
      fee_receipt: formData.file6,
      fx_rate_document: formData.file7,
      conf_proof: formData.file8
    };
    console.log("post confer: ", JSON.stringify(dataForBackend));
    const response = await api.post("/conference", dataForBackend, {
        headers: {
          "Content-Type": "multipart/form-data", // Required for file uploads
        },
      }
    );
    alert("บันทึกข้อมูลเรียบร้อยแล้ว");
    router.push("/allstatus");

    console.log("res: ", response);

    console.log("postConfer: ", response.data);
  } catch (error) {
    console.log("Error saving code : ", error);

    alert("ไม่สามารถส่งข้อมูล โปรดลองอีกครั้งในภายหลัง");
  }
};
</script>
