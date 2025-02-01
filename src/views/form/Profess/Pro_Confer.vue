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

      <!-- 1.  รายละเอียดการขออนุมัติเดินทาง -->
      <Mainbox>
        <p class="leading-9 text-lg font-bold">
          1. รายละเอียดการขออนุมัติเดินทาง
        </p>
        <SectionWrapper>
          <div class="flex flex-row">
            <TextInputLabelLeft
              label="เดินทางวันที่"
              customLabel="w-auto mr-1"
              customDiv="max-w-max"
              customInput="max-w-max"
              type="date"
              v-model="formData.travelStart"
              @input="handleInput('travelStart', $event.target.value)"
            />
            <TextInputLabelLeft
              label="ถึงวันที่"
              customLabel="w-auto mr-8"
              customDiv="max-w-max ml-36"
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

          <div class="flex flex-row">
            <TextInputLabelLeft
              label="วันที่จัด"
              customLabel="w-auto mr-8"
              customDiv="max-w-max mr-36"
              customInput="max-w-max"
              type="date"
              v-model="formData.meetingDate"
              @input="handleInput('meetingDate', $event.target.value)"
            />
            <TextInputLabelLeft label="สถานที่จัด" customLabel="w-24"
            v-model="formData.meetingVenue"
            @input="handleInput('meetingVenue', $event.target.value)" />
          </div>

          <div class="flex flex-row justify-between">
            <TextInputLabelLeft
              label="วันที่ส่งบทความไปยังผู้จัด"
              customLabel="w-auto mr-1"
              customDiv="max-w-max"
              customInput="max-w-max"
              type="date"
              v-model="formData.dateSubmitToOrganizer"
              @input="handleInput('dateSubmitToOrganizer', $event.target.value)"
            />
            <TextInputLabelLeft
              label="วันประกาศผลการพิจารณาบทความ"
              customLabel="w-auto mr-1"
              customDiv="max-w-max"
              customInput="max-w-max"
              type="date"
              v-model="formData.argumentDateReview"
              @input="handleInput('argumentDateReview', $event.target.value)"
            />
            <TextInputLabelLeft
              label="วันสุดท้ายของการลงทะเบียน"
              customLabel="w-auto mr-1"
              customDiv="max-w-max"
              customInput="max-w-max"
              type="date"
              v-model="formData.lastDayRegister"
              @input="handleInput('lastDayRegister', $event.target.value)"
            />
          </div>
        </SectionWrapper>
      </Mainbox>

      <!-- 2.  รายละเอียดการขออนุมัติเดินทาง -->
      <Mainbox>
        <p class="leading-9 text-lg font-bold">
          2.  รายละเอียดการขออนุมัติเดินทาง
        </p>
        <SectionWrapper>
          <RadioInput
            label="การประชุมทางวิชาการที่คณะจัดหรือร่วมจัดในประเทศ"
            name="Scopus"
          />
          <RadioInput
            label="การประชุมทางวิชาการที่อยู่ในฐานข้อมูลสากล"
            name="Scopus"
          />

          <SectionWrapper>
            <RadioInput label="ระดับมาตรฐาน" name="Level" />
            <RadioInput label="ระดับดีมาก" name="Level" />

            <SectionWrapper>
              <RadioInput
                label="ใช้คะแนนที่คำนวณจาก SJR indicator และ H Index ที่ได้มาจาก SCImago Journal & Country Rank"
                name="Score"
                value="SJR"
              />
              <div class="flex flex-row w-full px-7 my-2">
                <TextInputLabelLeft
                  label="• ค่า SJR"
                  customLabel="w-auto mr-1"
                  customDiv="max-w-max"
                  customInput="max-w-max mr-3"
                />
                <TextInputLabelLeft
                  label="ปี"
                  customLabel="w-auto mr-1"
                  customDiv="max-w-max"
                  customInput="max-w-max mr-3"
                />
                <TextInputLabelLeft
                  label="x H-Index"
                  customLabel="w-auto mr-1"
                  customDiv="max-w-max"
                  customInput="max-w-max mr-3"
                />
                <TextInputLabelLeft
                  label="ปี"
                  customLabel="w-auto mr-1"
                  customDiv="max-w-max"
                  customInput="max-w-max mr-3"
                />
              </div>
              <span class="place-self-center"
                >มีค่าคะแนน = ............ คะแนน</span
              >
              <RadioInput
                label="ใช้ผลการจัดระดับ CIF (Conference Impact Factor)"
                name="Score"
                value="CIF"
              />
              <div class="flex flex-row w-full px-7 my-2">
                <TextInputLabelLeft
                  label="• ค่า Citation total"
                  customLabel="w-auto mr-1"
                  customDiv="max-w-max"
                  customInput="max-w-max mr-3"
                />
                <TextInputLabelLeft
                  label="x H-Index"
                  customLabel="w-auto mr-1"
                  customDiv="max-w-max"
                  customInput="max-w-max mr-3"
                />
              </div>
              <span class="place-self-center"
                >มีค่าคะแนน = ............ คะแนน</span
              >

              <RadioInput
                label="ใช้ผลการจัดระดับ CORE Conference Ranking"
                name="Score"
                value="CORE"
              />
              <div class="flex flex-row w-full px-7 my-2">
                <TextInputLabelLeft
                  label="• ค่า"
                  customLabel="w-auto mr-1"
                  customDiv="max-w-max"
                  customInput="max-w-max mr-3"
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

      <!-- 3. ผู้ขอรับการสนับสนุน -->
      <Mainbox>
        <p class="text-lg font-bold">3. ผู้ขอรับการสนับสนุน</p>
        <SectionWrapper>
          <RadioInput
            label="ผู้ประพันธ์อันดับแรก First Author"
            value="First Author"
            name="Author"
          />
          <RadioInput
            label="ผู้ประพันธ์บรรณกิจ Corresponding Author"
            value="Corresponding Author"
            name="Author"
          />
        </SectionWrapper>
      </Mainbox>

      <!-- 4.  การลาและการขอเบิกค่าลงทะเบียนและค่าใช้จ่ายอื่น ๆ -->
      <Mainbox>
        <p class="text-lg font-bold">
          4.  การลาและการขอเบิกค่าลงทะเบียนและค่าใช้จ่ายอื่น ๆ
        </p>

        <SectionWrapper>
          <p class="font-bold text-base pt-3">4.1 ครั้งที่ในการลา</p>
          <SectionWrapper>
            <RadioInput label="ครั้งที่ 1" name="TimeLeave" />
              <div class="flex flex-row px-7 mt-1">
                <RadioInput label="สถานที่จัดภายในประเทศ" name="thai" />
                <RadioInput label="สถานที่จัด ณ ต่างประเทศ" name="thai" />
              </div>
          </SectionWrapper>

          <SectionWrapper>
            <RadioInput label="ครั้งที่ 2" name="TimeLeave" />
            <p class="py-1 px-7">
              ในกรณีลาครั้งที่ 2 (การประชุมฯ ณ ต่างประเทศ)
              มีผลงานตีพิมพ์ในวารสารในฐานข้อมูล
            </p>
              <div class="flex flex-row px-7 mt-1 ">
                <RadioInput label="WoS-Q1" name="WoS" />
                <RadioInput label="WoS-Q2" name="WoS" />
              </div>
              <div class="px-7 py-2">
              <TextInputLabelLeft label="เรื่อง" customLabel="pr-2" />
            </div>
            </SectionWrapper>

          <p class="font-bold text-base pt-3">4.2 กรณีที่จัดการประชุมฯ ณ ต่างประเทศ</p>
          <SectionWrapper>
            <p>ขอเบิกค่าลงทะเบียนตามที่จ่ายจริง และค่าใช้จ่ายอื่น ๆ</p>
            <RadioInput label="ไม่เกิน 50%" name="country" />
            <RadioInput label="ไม่เกิน 100% มีผลงานตีพิมพ์ในวารสารในฐานข้อมูล" name="country" />
            <div class="flex flex-row px-7 mt-1">
              <RadioInput label="WoS-Q1" name="WoS" />
              <RadioInput label="WoS-Q2" name="WoS" />
              <RadioInput label="WoS-Q3" name="WoS" />
              <RadioInput label="SJR-Q1" name="WoS" />
              <RadioInput label="SJR-Q2" name="WoS" />
            </div>
            <div class="px-7 py-2">
              <TextInputLabelLeft label="เรื่อง" customLabel="pr-2" />
            </div>
          </SectionWrapper>
        </SectionWrapper>
      </Mainbox>

      <!-- 5. เป็นการประชุมวิชาการที่ใช้สถานที่จัด -->
      <Mainbox>
        <p class="text-lg font-bold">5. เป็นการประชุมวิชาการที่ใช้สถานที่จัด</p>
        <SectionWrapper>
          <RadioInput
            label="ณ ต่างประเทศ"
            name="Venue"
          />
          <RadioInput
            label="ภายในประเทศ"
            name="Venue"
          />
        </SectionWrapper>
      </Mainbox>

      <!-- รายการค่าใช้จ่ายที่ขอเบิกจ่าย -->
      <Mainbox>
        <SectionWrapper>
          <p class="leading-9 text-lg font-bold"> รายการค่าใช้จ่ายที่ขอเบิกจ่าย</p>
          <SectionWrapper>
            <div class="flex flex-row mb-2 justify-between">
              <div class="flex flex-row">
                <TextInputLabelLeft
                label="1. ค่าลงทะเบียน (ตามที่จ่ายจริง) จำนวน"
                customLabel="w-auto pr-2"
                customDiv="max-w-max"
                customInput="max-w-max"
                />
                <TextInputLabelLeft
                label="บทความ ๆ ละ"
                customLabel="w-auto px-2"
                customDiv="max-w-max"
                customInput="max-w-max"
                />
                <p class="flex items-center pl-2">บาท</p>
              </div>
              <p class="flex items-center">รวม .................................... บาท</p>

            </div>

            <p>2. ค่าพาหนะเดินทาง</p>
            <div class="flex flex-col px-5">
              <div class="flex flex-row mb-2">
                <TextInputLabelLeft
                label="• เดินทางในประเทศ"
                customLabel="w-64 pr-2"
                customDiv="max-w-[50rem]"
                customInput="max-w-[50rem]"
                />
                <p class="flex items-center pl-2">บาท</p>
              </div>
              <div class="flex flex-row mb-2">
                <TextInputLabelLeft
                label="• เดินทางในต่างประเทศ"
                customLabel="w-64 pr-2"
                customDiv="max-w-[50rem]"
                customInput="max-w-[50rem]"
                />
                <p class="flex items-center pl-2">บาท</p>
              </div>
              <div class="flex flex-row">
                <p>ถ้าไปต่างประเทศแล้วต้องเดินทางไปอีกเมือง คิดยังไง</p>
                <p>ข้อนี้เฉพาะในประเทศ?</p>
                <TextInputLabelLeft
                label="• เดินทางระหว่างประเทศ กรุงเทพฯ -"
                customLabel="w-96 pr-2"
                customDiv="max-w-[30rem]"
                customInput="max-w-[14rem]"
                />
                <TextInputLabelLeft
                label="- กรุงเทพฯ"
                customLabel="w-22 px-2"
                customDiv="max-w-[20rem]"
                customInput="max-w-[14rem]"
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
                />
                <TextInputLabelLeft
                label="คืน ๆ ละ"
                customLabel="w-auto pr-2"
                customDiv="max-w-[26rem]"
                customInput="max-w-[20rem]"
                />
                <p class="flex items-center pl-2">บาท</p>
              </div>
              <p class="flex items-center">รวม .................................... บาท</p>

            </div>

            <div class="flex flex-row mb-2 justify-between">
              <div class="flex flex-row w-5/6">
                <TextInputLabelLeft
                label="5. ค่าเบี้ยเลี้ยงเดินทาง"
                customLabel="w-auto pr-2"
                customDiv="max-w-[26rem]"
                customInput="max-w-[16rem]"
                />
                <TextInputLabelLeft
                label="คืน ๆ ละ"
                customLabel="w-auto pr-2"
                customDiv="max-w-[26rem]"
                customInput="max-w-[20rem]"
                />
                <p class="flex items-center pl-2">บาท</p>
              </div>
              <p class="flex items-center">รวม .................................... บาท</p>

            </div>
            <p class="font-bold text-2xl pt-5 text-right">รวมทั้งสิ้น ............... บาท</p>

        </SectionWrapper>
        </SectionWrapper>
      </Mainbox>

      <!-- เอกสารหลักฐานที่แนบ -->
      <Mainbox>
        <SectionWrapper>
          <p class="text-lg font-bold">เอกสารหลักฐานที่แนบ</p>
          <FileInput
            label="สำเนาบทความ (Full Paper)"
            name="First"
            type="file"
          />
          <!-- have input -->
          <TextInputLabelLeft label="เมื่อ ของอันที่ 2" customLabel="pr-2" />
          <FileInput
          span="*กรณีเบิกค่าใช้จ่ายเต็มวงเงิน"
          customSpan="text-blue-500"
            label="(Full Paper ประกอบการเบิก) มีผลงานตีพิมพ์ในวารสารในฐานข้อมูล WoS/SJR ซึ่งได้รับการตีพิมพ์ไม่เกิน 2 ปี ก่อนการประชุม เมื่อ"
            name="Second"
            type="file"
          />
          <FileInput
          span="*กรณีเบิกค่าใช้จ่ายเต็มวงเงิน"
          customSpan="text-blue-500"
            label="หลักฐานเอกสาร Quartile ของ Paper ที่ใช้ประกอบการเบิก"
            name="Third"
            type="file"
          />
          <FileInput
            label="เอกสารประชาสัมพันธ์การจัดการประชุมทางวิชาการ (Call for paper)"
            name="Fourth"
            type="file"
          />
          <FileInput
            label="จดหมายการตอบรับเข้าร่วมประชุม (Accepted)"
            name="Fifth"
            type="file"
          />
          <FileInput
            label="เอกสารแสดงค่าลงทะเบียน"
            name="Sixth"
            type="file"
          />
          <FileInput
            label="เอกสารแสดงอัตราแลกเปลี่ยน (ณ วันที่ยื่น)"
            name="Seventh"
            type="file"
          />
          <FileInput
            label="หลักฐานการประชุมวิชาการอยู่ในฐาน Scopus"
            name="Eighth"
            type="file"
          />
          <FileInput
            label="อื่นๆ"
            name="Ninth"
            type="file"
          />
          <TextInputLabelLeft label="ชื่อเอกสาร" customLabel="pr-2" />
        </SectionWrapper>
        
      </Mainbox>
      <!-- <p>asdf</p>
{{datetime}}
{{datetime2}} -->
      <div class="flex justify-end">
        <button class="btn btn-success text-white">บันทึกข้อมูล</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits, onMounted, reactive } from "vue";
import axios from "axios";

import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import TextInputLabelLeft from "@/components/Input/TextInputLabelLeft.vue";
import RadioInput from "@/components/Input/RadioInput.vue";
import FileInput from "@/components/Input/FileInput.vue"


// จัดการข้อมูลหลัก
const formData = reactive({
  //Professor
  name: "",
  position: "",
  textOther1: "",
  textOther2: "",
  startDate: "",
  //detailTravel
  travelStart: "",
  travelEnd: "",
  research: "",
  conferenceName: "",
  meetingDate: "",
  meetingVenue: "",
  dateSubmitToOrganizer: "",
  argumentDateReview: "",
  lastDayRegister: "",
  //qualityMeeting งง เก้บไว้ก่อน
  meetingType: "",
  qualityMeeting: "",

  //AuthForm
  redioAuth: "",
  //4. การลา งง คับ

  //venue
  inThai: "",
  foreign: "",
  //List of expenses
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
  all_money: "",
  //วันที่ส่งเอกสาร
  docSubmitDate: "",
  //FileForm
  file1: null,
  file2: null,
  inputFile2: "",
  file3: null,
  file4: null,
  file5: null,
  file6: null,
  file7: null,
  file8: null,
  file9: null,
  inputFile9: "",
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

// // ดึงข้อมูลเมื่อ component ถูกโหลด
onMounted(() => {
  fetchProfessorData();
});
</script>
