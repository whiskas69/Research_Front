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
            :placeholder="formData.user.user_nameth"
          />
          <TextInputLabelLeft
            label="ตำแหน่ง"
            customLabel="w-2/12 text-lg font-bold"
            :placeholder="formData.user.user_positionth"
            disabled="true"
          />
          <div class="flex flex-row">
            <TextInputLabelLeft
              label="มีรายชื่ออยู่ใน List ที่คณะได้ให้การรับรองแล้ว โดยมติคณะ ครั้งที่"
              customLabel="w-auto"
              customInput="max-w-max"
              customDiv="max-w-max"
              disabled="true"
              :placeholder="formData.pageChange.pageC_times"
            />
            <TextInputLabelLeft
              label="วันที่"
              customLabel="ml-2 w-10"
              customInput="max-w-max"
              disabled="true"
              :placeholder="formatThaiDate(formData.pageChange.pageC_days)"
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
            :placeholder="formData.pageChange.journal_name"
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
              :placeholder="formData.pageChange.pc_isi_year"
            />
            <TextInputLabelLeft
              v-if="formData.checkISI == 'ISI'"
                label="ลำดับ Quartile"
                customLabel="mr-2"
                customInput="max-w-max"
                customDiv="max-w-max"
                disabled="true"
                :placeholder="formData.pageChange.qt_isi"
              />
            <TextInputLabelLeft
              v-if="formData.checkISI == 'ISI'"
              label="Impact Factor"
              customLabel="w-28 mx-2"
              customInput="max-w-max"
              customDiv="max-w-max"
              disabled="true"
              :placeholder="formData.pageChange.impact_factor"
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
              v-if="formData.checkSJR == 'SJR'"
              label="ปี"
              customLabel="mr-2"
              customInput="max-w-max"
              customDiv="max-w-max"
              disabled="true"
              :placeholder="formData.pageChange.pc_sjr_year"
            />
            <TextInputLabelLeft
            v-if="formData.checkSJR == 'SJR'"
                label="ลำดับ Quartile"
                customLabel="mr-2"
                customInput="max-w-max"
                customDiv="max-w-max"
                disabled="true"
                :placeholder="formData.pageChange.qt_sjr"
              />
            <TextInputLabelLeft
              v-if="formData.checkSJR == 'SJR'"
              label="SJR Score"
              customLabel="w-28 mx-2"
              customInput="max-w-max"
              customDiv="max-w-max"
              disabled="true"
              :placeholder="formData.pageChange.sjr_score"
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
              v-if="formData.checkScopus == 'Scopus'"
              label="ปี"
              customLabel="mr-2"
              customInput="max-w-max"
              customDiv="max-w-max"
              disabled="true"
              :placeholder="formData.pageChange.pc_scopus_year"
            />
            <TextInputLabelLeft
            v-if="formData.checkScopus == 'Scopus'"
                label="ลำดับ Quartile"
                customLabel="mr-2"
                customInput="max-w-max"
                customDiv="max-w-max"
                disabled="true"
                :placeholder="formData.pageChange.qt_scopus"
              />
            <TextInputLabelLeft
              v-if="formData.checkScopus == 'Scopus'"
              label="Cite Score"
              customLabel="w-28 mx-2"
              customInput="max-w-max"
              customDiv="max-w-max"
              disabled="true"
              :placeholder="formData.pageChange.cite_score"
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
                disabled="true"
                :placeholder="formData.pageChange.support_limit"
              />
              <span class="flex items-center">บาท</span>
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
            :placeholder="formData.pageChange.request_support"
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
          <p>ตรวจสอบเงินงบประมาณประจำปีที่จัดสรรในการเผยแพร่ผลงานวิชาการ</p>
          <TextInputLabelLeft
            label="ปีงบประมาณ พ.ศ."
            customInput="max-w-max text-center"
            v-model="formData.year"
            @input="handleInput('year', $event.target.value)"
          />

          <div class="flex justify-end">
            <div class="flex flex-row justify-between">
              <TextInputLabelLeft
                label="วงเงินที่คณะจัดสรรไว้ จำนวนเงินทั้งสิ้น"
                customInput="max-w-max text-center"
                v-model="formData.totalAll"
                @input="handleInput('totalAll', $event.target.value)"
              />
              <p class="flex items-center w-12">บาท</p>
            </div>
          </div>
          <div class="flex justify-end">
            <div class="flex flex-row justify-between">
              <TextInputLabelLeft
                label="โดยคณะได้อนุมัติค่าใช้จ่ายในการเสนอผลงานวิชาการไปแล้ว จำนวน"
                customInput="max-w-max text-center"
                disabled="true"
                :placeholder="formData.numAppove"
              />
              <p class="flex items-center w-12">รายการ</p>
            </div>
          </div>
          <div class="flex justify-end">
            <div class="flex flex-row justify-between">
              <TextInputLabelLeft
                label="รวมเป็นเงิน"
                customInput="max-w-max text-center"
                disabled="true"
                :placeholder="formData.totalAppove"
              />
              <p class="flex items-center w-12">บาท</p>
            </div>
          </div>
          <div class="flex justify-end">
            <div class="flex flex-row justify-between">
              <TextInputLabelLeft
                label="วงเงินที่คณะจัดสรรไว้ คงเหลือ"
                customInput="max-w-max text-center"
                disabled="true"
                :placeholder="caltotalFaculty"
              />
              <p class="flex items-center w-12">บาท</p>
            </div>
          </div>
          <div class="flex justify-end">
            <div class="flex flex-row justify-between">
              <TextInputLabelLeft
                label="จำนวนเงินที่ขออนุมัติจค่า Page Charge ในครั้งนี้ เป็นจำนวนเงิน"
                customInput="max-w-max text-center"
                v-model="formData.moneyConfer"
                @input="handleInput('moneyConfer', $event.target.value)"
              />
              <p class="flex items-center w-12">บาท</p>
            </div>
          </div>
          <div class="flex justify-end">
            <div class="flex flex-row justify-between">
              <TextInputLabelLeft
                label="วงเงินที่คณะจัดสรรไว้ คงเหลือทั้งสิ้น"
                customInput="max-w-max text-center"
                disabled="true"
                :placeholder="caltotalFacultyNow"
              />
              <p class="flex items-center w-12">บาท</p>
            </div>
          </div>
          <div class="flex justify-end">
            <button class="btn text-black btn-warning mr-5">คำนวณ</button>
          </div>
          <p class="text-red-500 mr-5">เหลือ RuleBase******</p>
          <div class="flex justify-end mt-5">
            <p class="text-red-500 mr-5">
              วงเงินที่สามารถเบิกได้ {{ formData.canWithdrawn }} บาท
            </p>
          </div>
        </SectionWrapper>
      </Mainbox>

      <div class="flex justify-end">
        <button @click="OfficerPC" class="btn btn-success text-white">
          บันทึกข้อมูล
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive, computed } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import TextInputLabelLeft from "@/components/Input/TextInputLabelLeft.vue";
import CheckInput from "@/components/Input/CheckInput.vue";

// จัดการข้อมูลหลัก
const formData = reactive({
  pageChange: [],
  user: [],

  check: [],
  checkISI: "",
  checkSJR: "",
  checkScopus: "",
  nature: "",
  //FileForm
  file1: null,
  file2: null,
  inputFile2: "",
  file3: null,
  file4: null,
  file5: null,
  // ความเห้นเจ้าหน้าที่
  year: "",
  totalAll: 0,
  numAppove: 0,
  totalAppove: 0,
  creditLimit: 0,
  moneyConfer: 0,
  totalcreditLimit: 0,
  canWithdrawn: 0,
  //วันที่ส่งเอกสาร
  docSubmitDate: "",
  typeFile: "Page_Charge",
  //satatus
  formStatus: "รองคณบดี",
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

const formatThaiDate = (dateString) => {
  console.log("formatThaiDate input: ", dateString);
  const date = new Date(dateString);
  const months = [
    "ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", 
    "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."
  ];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear() + 543;
  console.log("new date: ",`${day} ${month} ${year}`)
  return `${day} ${month} ${year}`;
};

const handleInput = (key, value) => {
  formData[key] = value;
  console.log("0000000000000000000000000000000");
  // console.log(JSON.stringify(formData));
  console.log(`${key} updated to: ${value}`);
  // console.log("key: ", key);
  // console.log("value: ", value);
  console.log("--------------------------------");
};

const caltotalFaculty = computed(() => {
  formData.creditLimit =
    parseFloat(formData.totalAll) - parseFloat(formData.totalAppove);
  return formData.creditLimit;
});

const caltotalFacultyNow = computed(() => {
  formData.totalcreditLimit =
    parseFloat(formData.creditLimit) - parseFloat(formData.moneyConfer);
  return formData.totalcreditLimit;
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
    const responsePC = await axios.get(
      `http://localhost:3000/page_charge/${id}`
    );
    const userID = responsePC.data.user_id;
    const responseUser = await axios.get(
      `http://localhost:3000/user/${userID}`
    );
    formData.user = responseUser.data;

    console.log("get user: ", formData.user);
    console.log("get userid: ", responsePC.data.user_id);
    console.log("get responsePC: ", responsePC.data);

    formData.pageChange = responsePC.data;
    console.log("pageChange", formData.pageChange);
    formData.check = formData.pageChange.quality_journal;

    const responseForm = await axios.get(`http://localhost:3000/allForms`);
    console.log("form 123", JSON.stringify(responseForm));
    for (let i = 0; i < responseForm.length; i++) {
      if (
        responseForm.data.form_status == "อนุมัติ" &&
        responseForm.data.form_type == "Page_Charge"
      ) {
        formData.numAppove++;
        formData.totalAppove += formData.totalAppove;
      }
    }
    console.log("numAppove", formData.numAppove);
    console.log("totalAppove", formData.totalAppove);
  } catch (error) {
    console.error("Error fetching professor data:", error);
  } finally {
    isLoading.value = false;
  }
  console.log("Fetching professor data...");
};

const cal = async () => {
  try {
    const responseCalPC = await axios.get(
      `http://localhost:3000/page_charge/calc/${id}`
    );
    console.log("responseCalPC", responseCalPC);
    formData.canWithdrawn = responseCalPC.data.withdrawn;
    return formData.canWithdrawn;
  } catch (error) {
    console.error("Error fetching professor data:", error);
  } finally {
    isLoading.value = false;
  }
  console.log("Fetching professor data...");
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

const OfficerPC = async () => {
  try {
    const dataForBackend = {
      pageC_id: id,
      budget_year: formData.year,
      total_amount: formData.totalAll,
      num_expenses_approved: formData.numAppove,
      total_amount_approved: formData.totalAppove,
      remaining_credit_limit: formData.creditLimit,
      money_confer: formData.moneyConfer,
      total_remaining_credit_limit: formData.totalcreditLimit,
      doc_submit_date: formData.docSubmitDate,
      type: formData.typeFile,
      form_status: formData.formStatus,
      form_money: formData.canWithdrawn,
    };
    console.log("post office confer: ", JSON.stringify(dataForBackend));

    const response = await axios.post(
      `http://localhost:3000/budget`,
      dataForBackend,
      { headers: { "Content-Type": "application/json" } }
    );
    alert("Have new OfficerConfer!");
    console.log("res: ", response);
    console.log("allpostOfficerConfer: ", message.value);
    console.log("postOfficerConfer: ", response.data);
  } catch (error) {
    console.error(error);
    message.value = "Error adding page_charge budget. Please try again.";
  }
};

// ดึงข้อมูลเมื่อ component ถูกโหลด
onMounted(async () => {
  await fetchProfessorData();
  loopdata();
  cal();
});
</script>
