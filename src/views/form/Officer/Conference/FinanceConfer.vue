<template>
  <div>
    <div class="container my-10 mx-auto">
      <ConferenceData :id="id" />

      <p class="text-xl font-bold my-5">ตรวจสอบข้อมูลและหลักฐาน</p>
      <Mainbox>
        <SectionWrapper>
          <p>ตรวจหลักฐานตามหลักเกณฑ์ที่กำหนดในประกาศ สจล. และประกาศคณะ</p>

          <!-- เอกสารหลักฐานที่แนบ -->
          <!-- 1 -->
          <div class="flex flex-row items-center w-full">
            <div class="flex flex-row items-center w-full justify-between">
              <div class="flex flex-row">
                <p>สำเนาบทความ (Full Paper)</p>
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
                <span class="w-[15rem] flex items-center text-blue-500 mr-2"
                  >*กรณีเบิกค่าใช้จ่ายเต็มวงเงิน*</span
                >
                <TextInputLabelLeft
                  customInput="max-w-24"
                  label="(Full Paper ประกอบการเบิก) มีผลงานตีพิมพ์ในวารสารในฐานข้อมูล WoS/SJR ซึ่งได้รับการตีพิมพ์ไม่เกิน 2 ปี ก่อนการประชุม เมื่อ"
                  disabled="true"
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
                <span class="text-blue-500 mr-2"
                  >"*กรณีเบิกค่าใช้จ่ายเต็มวงเงิน*</span
                >
                <p>หลักฐานเอกสาร Quartile ของ Paper ที่ใช้ประกอบการเบิก</p>
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
                <p>
                  เอกสารประชาสัมพันธ์การจัดการประชุมทางวิชาการ (Call for paper)
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
          <!-- 5 -->
          <div class="flex flex-row items-center w-full">
            <div class="flex flex-row items-center w-full justify-between">
              <div class="flex flex-row">
                <p>จดหมายการตอบรับเข้าร่วมประชุม (Accepted)</p>
              </div>
              <div class="">
                <button class="btn bg-[#E85F19] text-white mr-5">
                  ดูเอกสาร
                </button>
                <button class="btn bg-[#4285F4] text-white">โหลดเอกสาร</button>
              </div>
            </div>
          </div>
          <!-- 6 -->
          <div class="flex flex-row items-center w-full">
            <div class="flex flex-row items-center w-full justify-between">
              <div class="flex flex-row">
                <p>เอกสารแสดงค่าลงทะเบียน</p>
              </div>
              <div class="">
                <button class="btn bg-[#E85F19] text-white mr-5">
                  ดูเอกสาร
                </button>
                <button class="btn bg-[#4285F4] text-white">โหลดเอกสาร</button>
              </div>
            </div>
          </div>
          <!-- 7 -->
          <div class="flex flex-row items-center w-full">
            <div class="flex flex-row items-center w-full justify-between">
              <div class="flex flex-row">
                <p>เอกสารแสดงอัตราแลกเปลี่ยน (ณ วันที่ยื่น)</p>
              </div>
              <div class="">
                <button class="btn bg-[#E85F19] text-white mr-5">
                  ดูเอกสาร
                </button>
                <button class="btn bg-[#4285F4] text-white">โหลดเอกสาร</button>
              </div>
            </div>
          </div>
          <!-- 8 -->
          <div class="flex flex-row items-center w-full">
            <div class="flex flex-row items-center w-full justify-between">
              <div class="flex flex-row">
                <p>หลักฐานการประชุมวิชาการอยู่ในฐาน Scopus</p>
              </div>
              <div class="">
                <button class="btn bg-[#E85F19] text-white mr-5">
                  ดูเอกสาร
                </button>
                <button class="btn bg-[#4285F4] text-white">โหลดเอกสาร</button>
              </div>
            </div>
          </div>
          <CheckInput
            v-model="formData.checkWorkedNo3NeverAbroad"
            @input="handleCheckbox('checkWorkedNo3NeverAbroad', true)"
            label="เป็นพนักงานสถาบันที่ปฏิบัติงานมาแล้วไม่เกิน 3 ปีนับตั้งแต่วันบรรจุและยังไม่เคยลาเข้าร่วมประชุมทางวิชาการ ณ ต่างประเทศ"
          />
          <p class="text-xl font-bold my-5">file other</p>
        </SectionWrapper>
      </Mainbox>
      <Mainbox>
        <SectionWrapper>
          <p>ตรวจสอบความถูกต้องของข้อมูล</p>
          <RadioInput
            label="ข้อมูลถูกต้อง"
            value="ถูกต้อง"
            name="re"
            disabled="false"
            :checked="
              formData.offic.c_research_hr == 'ถูกต้อง' ? true : false
            "
          />
          <RadioInput
            label="ข้อมูลไม่ถูกต้อง"
            value="ไม่ถูกต้อง"
            name="re"
            disabled="false"
            :checked="
              formData.offic.c_research_hr == 'ไม่ถูกต้อง' ? true : false
            "
          />
          <textarea
            class="textarea textarea-bordered w-full"
            disabled="true"
            :placeholder="formData.offic.c_reason"
          ></textarea>
        </SectionWrapper>
      </Mainbox>

      <Mainbox>
        <SectionWrapper>
          <p>ตรวจหลักฐานคุณภาพของการจัดประชุมทางวิชาการ</p>

          <p>• คุณภาพของการประชุม ฯ</p>

          <div class="px-5">
            <RadioInput
              label="ระดับมาตรฐาน"
              name="Sub1"
              value="มาตรฐาน"
              disabled="false"
              :checked="
                formData.offic.c_meet_quality == 'มาตรฐาน' ? true : false
              "
            />
            <RadioInput
              label="ระดับดีมาก"
              name="Sub1"
              value="ดีมาก"
              disabled="false"
              :checked="formData.offic.c_meet_quality == 'ดีมาก' ? true : false"
            />
          </div>

          <TextArea
            label="• กรณี ที่เป็นการประชุมวิชาการระดับดีมาก เลือกวิธีคิดค่าคะแนนคุณภาพ และมีระดับคะแนนคุณภาพของการประชุมฯ ดังนี้"
            disabled="true"
            :placeholder="formData.offic.c_good_reason"
          />
        </SectionWrapper>
      </Mainbox>

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
                :placeholder="formData.numapprove"
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
                :placeholder="formData.totalapprove"
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
                label="จำนวนเงินที่ขออนุมัติจัดสรรในครั้งนี้  เป็นจำนวนเงิน"
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
          <p class="text-red-500 mr-5">
              เหลือ RuleBase******
            </p>
          <div class="flex justify-end mt-5">
            <p class="text-red-500 mr-5">
              วงเงินที่สามารถเบิกได้ {{ formData.canWithdrawn }} บาท
            </p>
          </div>
        </SectionWrapper>
      </Mainbox>

      <div class="flex justify-end">
        <button @click="OfficerConfer" class="btn btn-success text-white">
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
import RadioInput from "@/components/Input/RadioInput.vue";
import CheckInput from "@/components/Input/CheckInput.vue";
import TextArea from "@/components/Input/TextArea.vue";
import ConferenceData from "@/components/form/DataforOffice/Conference.vue";

const formData = reactive({
  // ความเห้นเจ้าหน้าที่
  offic:[],
  year: "",
  totalAll: 0,
  numapprove: 0,
  totalapprove: 0,
  creditLimit: 0,
  moneyConfer: 0,
  totalcreditLimit: 0,
  canWithdrawn: 0,
  //วันที่ส่งเอกสาร
  docSubmitDate: "",
  typeFile: "Conference",
  //satatus
  formStatus: "รองคณบดี",
});
console.log("conference", formData);
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

const caltotalFaculty = computed(() =>{
  formData.creditLimit = parseFloat(formData.totalAll) - parseFloat(formData.totalapprove)
  return formData.creditLimit
});

const caltotalFacultyNow = computed(() =>{
  formData.totalcreditLimit = parseFloat(formData.creditLimit) - parseFloat(formData.moneyConfer)
  return formData.totalcreditLimit
});

const isLoading = ref(true);
// Access route parameters
const route = useRoute();
const id = route.params.id;
console.log("params.id", id);

const fetchOfficerData = async () => {
  try {
    const responseoffic = await axios.get(
      `http://localhost:3000/opinionConf/${id}`
    );
    console.log("offic123", responseoffic);
    formData.offic = responseoffic.data;
    console.log("offic", JSON.stringify(formData.offic));

    const responseForm = await axios.get(
      `http://localhost:3000/allForms`
    )
    console.log("form 123", JSON.stringify(responseForm));
    // approveForm = responseForm.data.form_status
    for(let i = 0; i < responseForm.length; i++){
      if (responseForm.data.form_status == 'อนุมัติ'  && responseForm.data.form_type == 'Conference'){
        formData.numapprove++
        formData.totalapprove += formData.totalapprove
      }
    }
    console.log("numapprove", formData.numapprove)
    console.log("totalapprove", formData.totalapprove)

  } catch (error) {
    console.error("Error fetching Officer data:", error);
  } finally {
    isLoading.value = false;
  }
};

const OfficerConfer = async () => {
  try {
    const dataForBackend = {
      conf_id: id,
      budget_year: formData.year,
      total_amount: formData.totalAll,
      num_expenses_approved: formData.numapprove,
      total_amount_approved: formData.totalapprove,
      remaining_credit_limit: formData.creditLimit,
      amount_approval: formData.moneyConfer,
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
    message.value = "Error adding page_charge. Please try again.";
  }
};

onMounted(() => {
  fetchOfficerData();
});
</script>
