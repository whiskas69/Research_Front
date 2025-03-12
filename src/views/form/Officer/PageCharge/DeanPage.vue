<template>
  <div>
    <div class="container my-10 mx-auto">
      <PageChageData :id="id"/>
      <!-- เอกสารหลักฐานที่แนบ -->
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
            disabled="false"
            :checked="
              formData.offic.p_research_admin == 'อนุมัติ' ? true : false
            "
          />
          <textarea
            v-if="formData.offic.p_research_admin == 'อนุมัติ'"
            class="textarea textarea-bordered w-full"
            disabled="true"
            :placeholder="formData.offic.p_reason"
          ></textarea>
          <RadioInput
            label="ถูกต้องตามเงื่อนไขการสนับสนุน กรณีส่งหนังสือตอบรับย้อนหลัง ดังนี้"
            value="รอหนังสือตอบรับ"
            name="re"
            disabled="false"
            :checked="
              formData.offic.p_research_admin == 'รอหนังสือตอบรับ'
                ? true
                : false
            "
          />
          <textarea
            v-if="formData.offic.p_research_admin == 'รอหนังสือตอบรับ'"
            class="textarea textarea-bordered w-full"
            disabled="true"
            :placeholder="formData.offic.p_reason"
          ></textarea>
          <RadioInput
            label="อื่น ๆ"
            value="อื่น ๆ"
            name="re"
            disabled="false"
            :checked="
              formData.offic.p_research_admin == 'อื่น ๆ' ? true : false
            "
          />
          <textarea
            v-if="formData.offic.p_research_admin == 'อื่น ๆ'"
            class="textarea textarea-bordered w-full"
            disabled="true"
            :placeholder="formData.offic.p_reason"
          ></textarea>
        </SectionWrapper>
      </Mainbox>
      <Mainbox>
        <SectionWrapper>
          <p>ตรวจสอบเงินงบประมาณประจำปีที่จัดสรรในการเผยแพร่ผลงานวิชาการ</p>
          <TextInputLabelLeft
            label="ปีงบประมาณ พ.ศ."
            customInput="max-w-max text-center"
            disabled="true"
            :placeholder="formData.budget.budget_year"
          />

          <div class="flex justify-end">
            <div class="flex flex-row justify-between">
              <TextInputLabelLeft
                label="วงเงินที่คณะจัดสรรไว้ จำนวนเงินทั้งสิ้น"
                customInput="max-w-max text-center"
                disabled="true"
                :placeholder="formData.budget.total_amount"
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
                :placeholder="formData.budget.num_expenses_approved"
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
                :placeholder="formData.budget.total_amount_approved"
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
                :placeholder="formData.budget.remaining_credit_limit"
              />
              <p class="flex items-center w-12">บาท</p>
            </div>
          </div>
          <div class="flex justify-end">
            <div class="flex flex-row justify-between">
              <TextInputLabelLeft
                label="จำนวนเงินที่ขออนุมัติจค่า Page Charge ในครั้งนี้ เป็นจำนวนเงิน"
                customInput="max-w-max text-center"
                disabled="true"
                :placeholder="formData.budget.money_confer"
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
                :placeholder="formData.budget.total_remaining_credit_limit"
              />
              <p class="flex items-center w-12">บาท</p>
            </div>
          </div>
          <p class="text-red-500 mr-5">เหลือ RuleBase******</p>
          <div class="flex justify-end mt-5">
            <p class="text-red-500 mr-5">
              วงเงินที่สามารถเบิกได้ {{ formData.budget.form_money }} บาท
            </p>
          </div>
        </SectionWrapper>
      </Mainbox>
      <!-- รองคณบดีฝ่ายงานวิจัย -->
      <Mainbox>
        <SectionWrapper>
          <p class="text-lg font-bold">รองคณบดีฝ่ายงานวิจัย</p>
          <div>
            <TextArea
              label="ความคิดเห็น"
              disabled="true"
              :placeholder="formData.offic.p_deputy_dean"
            />
          </div>
        </SectionWrapper>
      </Mainbox>
      <!-- คณบดี 1-->
      <Mainbox>
        <SectionWrapper>
          <p class="text-lg font-bold">
            เรียน คณบดีคณะเทคโนโลยีสารสนเทศ (ครั้งที่ 1)
          </p>
          <p class="text-base mt-1">
            เพื่อโปรดทราบการจัดสรรวงเงิน ก่อนการตอบรับบทความ
          </p>
          <RadioInput
            label="รับทราบ"
            value="รับทราบ"
            v-model="formData.acknowledge"
            @change="handleInput('acknowledge', $event.target.value)"
          />
        </SectionWrapper>
      </Mainbox>
      <Mainbox>
        <SectionWrapper>
          <p class="text-lg font-bold">
            เรียน คณบดีคณะเทคโนโลยีสารสนเทศ (ครั้งที่ 2)
          </p>
          <p class="text-base mt-1">
            ขณะนี้บทความได้รับการตอบรับแล้ว (Letter of acceptance) เมื่อวันที่
            <b>{{ formData.check }} </b>
            ตามหลักฐานที่แนบจึงเรียนมาเพื่อโปรดพิจารณา
          </p>
          <div class="px-2">
            <RadioInput
              label="อนุมัติ"
              value="อนุมัติ"
              name="comment"
              v-model="formData.radioAuthOffic"
              @change="handleInput('radioAuthOffic', $event.target.value)"
            />
          </div>
          <div class="px-2">
            <RadioInput
              label="ไม่อนุมัติ"
              value="ไม่อนุมัติ"
              name="comment"
              v-model="formData.radioAuthOffic"
              @change="handleInput('radioAuthOffic', $event.target.value)"
            />
          </div>
          <div>
            <TextArea label="เนื่องจาก" 
            @input="handleInput('description', $event.target.value)"/>
          </div>
          <div class="px-2">
            <RadioInput
              label="อื่น ๆ"
              value="อื่น ๆ"
              name="comment"
              v-model="formData.radioAuthOffic"
              @change="handleInput('radioAuthOffic', $event.target.value)"
            />
          </div>
          <div>
            <TextArea
              label="เนื่องจาก"
              @input="handleInput('description', $event.target.value)"
            />
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
import { ref, onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import TextInputLabelLeft from "@/components/Input/TextInputLabelLeft.vue";
import RadioInput from "@/components/Input/RadioInput.vue";
import TextArea from "@/components/Input/TextArea.vue";
import PageChageData from "@/components/form/DataforOffice/PageChage.vue";

// จัดการข้อมูลหลัก
const formData = reactive({
  offic: [],
  budget: [],

  //วันที่ส่งเอกสาร
  docSubmitDate: "",
  //satatus
  formStatus: "รออนุมัติ",
  // ความเห้นเจ้าหน้าที่
  acknowledge: "",
  radioAuthOffic: "",
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

//isLoading เพื่อแสดงสถานะว่ากำลังโหลดข้อมูล
const isLoading = ref(true);
// Access route parameters
const route = useRoute();
const id = route.params.id;
console.log("params.id", id);
// ตัวแปรสำหรับเก็บข้อมูลจาก backend
const fetchProfessorData = async () => {
  try {
    const responseoffic = await axios.get(
      `http://localhost:3000/opinionPC/${id}`
    );
    console.log("offic123", responseoffic);
    formData.offic = responseoffic.data;
    console.log("offic", JSON.stringify(formData.offic));

    const responsebudget = await axios.get(
      `http://localhost:3000/budget/pageCharge/${id}`
    );
    console.log("budget 123", responsebudget);
    formData.budget = responsebudget.data;
    console.log("budget", JSON.stringify(formData.budget));

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
      //research
      p_research_admin: formData.offic.p_research_admin,
      p_reason: formData.offic.p_reason,
      research_doc_submit_date: (() => {
        const researchDate = new Date(formData.offic.research_doc_submit_date);
        researchDate.setDate(researchDate.getDate() + 1);
        return researchDate.toISOString().slice(0, 19).replace("T", " ");
      })(),

      //long ka na bo dee
      p_deputy_dean: formData.offic.p_deputy_dean,
      associate_doc_submit_date: (() => {
        const researchDate = new Date(formData.offic.associate_doc_submit_date);
        researchDate.setDate(researchDate.getDate() + 1);
        return researchDate.toISOString().slice(0, 19).replace("T", " ");
      })(),
      //ka na bo dee
      p_date_accepted_approve: "2001-02-10", //fake
      p_acknowledge: formData.acknowledge,
      p_approve_result: formData.radioAuthOffic,
      p_reason_dean_appeove: formData.description,
      dean_doc_submit_date: formData.docSubmitDate,
      //form
      form_status: formData.formStatus,
    };
    console.log("postPC: ", JSON.stringify(dataForBackend));

    const response = await axios.put(
      `http://localhost:3000/opinionPC/${id}`,
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

// ดึงข้อมูลเมื่อ component ถูกโหลด
onMounted(async () => {
  await fetchProfessorData();
});
</script>
