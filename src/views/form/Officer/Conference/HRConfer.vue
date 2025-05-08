<template>
  <div>
    <div class="container my-10 mx-auto">
      <ConferenceData :id="id" />
      <p class="text-xl font-bold my-5">ตรวจสอบข้อมูลและหลักฐาน</p>
      <Mainbox>
        <SectionWrapper>
          <p>ตรวจหลักฐานตามหลักเกณฑ์ที่กำหนดในประกาศ สจล. และประกาศคณะ</p>
          <div class="flex flex-row items-center w-full">
            <div class="flex flex-row items-center w-full justify-between">
              <div class="flex flex-row">
                <p>สำเนาบทความ (Full Paper)</p>
              </div>
              <div>
                <button @click="getFile(formData.f_full_page)" class="btn bg-[#E85F19] text-white mr-5">
                  ดูเอกสาร
                </button>
                <button @click="downloadFile(formData.f_full_page, 'สำเนาบทความ')" class="btn bg-[#4285F4] text-white">
                  โหลดเอกสาร
                </button>
              </div>
            </div>
          </div>
          <div class="flex flex-row items-center w-full">
            <div class="flex flex-row items-center w-full justify-between">
              <div class="flex flex-row">
                <span class="w-[15rem] flex items-center text-blue-500 mr-2">*กรณีเบิกค่าใช้จ่ายเต็มวงเงิน*</span>
                <TextInputLabelLeft
                  customInput="max-w-24"
                  label="(Full Paper ประกอบการเบิก) มีผลงานตีพิมพ์ในวารสารในฐานข้อมูล WoS/SJR ซึ่งได้รับการตีพิมพ์ไม่เกิน 2 ปี ก่อนการประชุม เมื่อ"
                  disabled="true"
                  :placeholder="formData.date_journals"
                />
              </div>
              <div>
                <button @click="getFile(formData.f_published_journals)" class="btn bg-[#E85F19] text-white mr-5" :disabled="!isValidFile(formData.f_published_journals)">
                  ดูเอกสาร
                </button>
                <button @click="downloadFile(formData.f_published_journals, 'Full Paper ประกอบการเบิก')" class="btn bg-[#4285F4] text-white" :disabled="!isValidFile(formData.f_published_journals)">
                  โหลดเอกสาร
                </button>
              </div>
            </div>
          </div>
          <div class="flex flex-row items-center w-full">
            <div class="flex flex-row items-center w-full justify-between">
              <div class="flex flex-row">
                <span class="text-blue-500 mr-2">"*กรณีเบิกค่าใช้จ่ายเต็มวงเงิน*</span>
                <p>หลักฐานเอกสาร Quartile ของ Paper ที่ใช้ประกอบการเบิก</p>
              </div>
              <div>
                <button @click="getFile(formData.f_q_proof)" class="btn bg-[#E85F19] text-white mr-5" :disabled="!isValidFile(formData.f_q_proof)">
                  ดูเอกสาร
                </button>
                <button @click="downloadFile(formData.f_q_proof, 'หลักฐานเอกสาร Quartile ของ Paper')" class="btn bg-[#4285F4] text-white" :disabled="!isValidFile(formData.f_q_proof)">
                  โหลดเอกสาร
                </button>
              </div>
            </div>
          </div>
          <div class="flex flex-row items-center w-full">
            <div class="flex flex-row items-center w-full justify-between">
              <div class="flex flex-row">
                <p>เอกสารประชาสัมพันธ์การจัดการประชุมทางวิชาการ (Call for paper)</p>
              </div>
              <div>
                <button @click="getFile(formData.f_call_for_paper)" class="btn bg-[#E85F19] text-white mr-5">
                  ดูเอกสาร
                </button>
                <button @click="downloadFile(formData.f_call_for_paper, 'เอกสารประชาสัมพันธ์การจัดการประชุม')" class="btn bg-[#4285F4] text-white">
                  โหลดเอกสาร
                </button>
              </div>
            </div>
          </div>
          <div class="flex flex-row items-center w-full">
            <div class="flex flex-row items-center w-full justify-between">
              <div class="flex flex-row">
                <p>จดหมายการตอบรับเข้าร่วมประชุม (Accepted)</p>
              </div>
              <div>
                <button @click="getFile(formData.f_accepted)" class="btn bg-[#E85F19] text-white mr-5">
                  ดูเอกสาร
                </button>
                <button @click="downloadFile(formData.f_accepted, 'จดหมายการตอบรับ')" class="btn bg-[#4285F4] text-white">
                  โหลดเอกสาร
                </button>
              </div>
            </div>
          </div>
          <div class="flex flex-row items-center w-full">
            <div class="flex flex-row items-center w-full justify-between">
              <div class="flex flex-row">
                <p>เอกสารแสดงค่าลงทะเบียน</p>
              </div>
              <div>
                <button @click="getFile(formData.f_fee_receipt)" class="btn bg-[#E85F19] text-white mr-5">
                  ดูเอกสาร
                </button>
                <button @click="downloadFile(formData.f_fee_receipt, 'เอกสารแสดงค่าลงทะเบียน')" class="btn bg-[#4285F4] text-white">
                  โหลดเอกสาร
                </button>
              </div>
            </div>
          </div>
          <div class="flex flex-row items-center w-full">
            <div class="flex flex-row items-center w-full justify-between">
              <div class="flex flex-row">
                <p>เอกสารแสดงอัตราแลกเปลี่ยน (ณ วันที่ยื่น)</p>
              </div>
              <div>
                <button @click="getFile(formData.f_fx_rate_document)" class="btn bg-[#E85F19] text-white mr-5">
                  ดูเอกสาร
                </button>
                <button @click="downloadFile(formData.f_fx_rate_document, 'เอกสารแสดงอัตราแลกเปลี่ยน')" class="btn bg-[#4285F4] text-white">
                  โหลดเอกสาร
                </button>
              </div>
            </div>
          </div>
          <div class="flex flex-row items-center w-full">
            <div class="flex flex-row items-center w-full justify-between">
              <div class="flex flex-row">
                <p>หลักฐานการประชุมวิชาการอยู่ในฐาน Scopus</p>
              </div>
              <div>
                <button @click="getFile(formData.f_conf_proof)" class="btn bg-[#E85F19] text-white mr-5">
                  ดูเอกสาร
                </button>
                <button @click="downloadFile(formData.f_conf_proof, 'หลักฐานการประชุมวิชาการอยู่ในฐาน Scopus')" class="btn bg-[#4285F4] text-white">
                  โหลดเอกสาร
                </button>
              </div>
            </div>
          </div>
          <RadioInput
            v-if="formData.user == 0"
            v-model="formData.checkWorkedNo3NeverAbroad"
            @input="handleInput('profes3y', true)"
            label="เป็นพนักงานสถาบันที่ปฏิบัติงานมาแล้วไม่เกิน 3 ปีนับตั้งแต่วันบรรจุและยังไม่เคยลาเข้าร่วมประชุมทางวิชาการ ณ ต่างประเทศ"
          />
          <textarea
            placeholder="อื่น ๆ"
            class="textarea textarea-bordered w-full"
            @input="handleInput('noteHR', $event.target.value)"
          ></textarea>
        </SectionWrapper>
      </Mainbox>
      <Mainbox>
        <SectionWrapper>
          <p>ตรวจสอบความถูกต้องของข้อมูล</p>
          <RadioInput
            label="ข้อมูลถูกต้อง"
            value="ถูกต้อง"
            name="re"
            v-model="formData.radioAuthOffic"
            @change="handleInput('radioAuthOffic', $event.target.value)"
          />
          <RadioInput
            label="ข้อมูลไม่ถูกต้อง"
            value="ไม่ถูกต้อง"
            name="re"
            v-model="formData.radioAuthOffic"
            @change="handleInput('radioAuthOffic', $event.target.value)"
          />
          <textarea
            class="textarea textarea-bordered w-full"
            @input="handleInput('description', $event.target.value)"
          ></textarea>

          <span v-if="v$.radioAuthOffic.$error" class="text-base font-bold text-red-500 text-left">
            {{ v$.radioAuthOffic.$errors[0].$message }}
          </span>
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
import { useRoute, useRouter } from "vue-router";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";

import { useUserStore } from "@/store/userStore";
import api from "@/setting/api";

import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import TextInputLabelLeft from "@/components/Input/TextInputLabelLeft.vue";
import RadioInput from "@/components/Input/RadioInput.vue";
import ConferenceData from "@/components/form/DataforOffice/Conference.vue";

const formData = reactive({
  file: "",
  name: "",
  user: "",
  date_journals: "",
  f_full_page: null,
  f_published_journals: null,
  f_q_proof: null,
  f_call_for_paper: null,
  f_accepted: null,
  f_fee_receipt: null,
  f_fx_rate_document: null,
  f_conf_proof: null,
  checkWorkedNo3NeverAbroad: "",
  formStatus: "ฝ่ายบริหารงานวิจัย",
  noteHR: "",
  profes3y: "",
  radioAuthOffic: "",
  description: "",
});

const handleInput = (key, value) => {
  formData[key] = value;
};

const rules = computed(() => ({
  radioAuthOffic: {
    required: helpers.withMessage("* กรุณาเลือกข้อมูล *", required)
  }
}));

const v$ = useVuelidate(rules, formData);

const isLoading = ref(true);
const getDataConf = async () => {
  if (id == null || id == "") {
    alert("โปรดเข้าสู่ระบบใหม่อีกครั้ง");
  }
  try {
    const response = await api.get(`/conference/${id}`);
    formData.form = response.data.form;
    formData.name = response.data.name;
    const user_id = response.data.user_id;
    const responseUser = await api.get(`/user/${user_id}`);
    formData.user = responseUser.data.user_confer;

    const responsefile = await api.get(`/getFileConf?conf_id=${id}`);
    (formData.date_journals = responsefile.data.date_published_journals),
    (formData.f_full_page = responsefile.data.file_full_page);
    formData.f_published_journals = responsefile.data.file_published_journals;
    formData.f_q_proof = responsefile.data.file_q_proof;
    formData.f_call_for_paper = responsefile.data.file_call_for_paper;
    formData.f_accepted = responsefile.data.file_accepted;
    formData.f_fee_receipt = responsefile.data.file_fee_receipt;
    formData.f_fx_rate_document = responsefile.data.file_fx_rate_document;
    formData.f_conf_proof = responsefile.data.file_conf_proof;
  } catch (error) {
    console.log("Error", error);
  } finally {
    isLoading.value = false;
  }
};

const getFile = async (fileUrl) => {
  formData.file = fileUrl;
  window.open(formData.file, "_blank");
};

const isValidFile = (fileUrl) => {
  return fileUrl && !fileUrl.includes("/uploads/null");
};

const downloadFile = async (fileUrl, fileName) => {
  try {
    const response = await fetch(fileUrl);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = fileName + " ของ " + formData.name + ".pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.log("Error downloading file:", error);
  }
};

const router = useRouter(); //path
const route = useRoute(); //params
const id = route.params.id;

const userStore = useUserStore();
const user = computed(() => userStore.user);
const OfficerConfer = async () => {
  const result = await v$.value.$validate();

  if (result) {
    if(confirm("ยืนยันข้อมูลถูกต้อง") == false) {
      return false;
    }
    
    try {
      const dataForBackend = {
        hr_id: user.value?.user_id,
        conf_id: id,
        c_research_hr: formData.radioAuthOffic,
        c_reason: formData.description,
        c_noteOther: formData.noteHR,
        hr_doc_submit_date: formData.docSubmitDate,
        form_status: formData.radioAuthOffic == "ไม่ถูกต้อง" ? "ไม่อนุมัติ" : formData.formStatus,
      };

      const response = await api.post("/opinionConf", dataForBackend);

      alert("บันทึกข้อมูลเรียบร้อยแล้ว");
      router.push("/officer");
    } catch (error) {
      console.log("Error saving code : ", error);
      alert("ไม่สามารถส่งข้อมูล โปรดลองอีกครั้งในภายหลัง");
    }
  } else {
    alert("โปรดกรอกข้อมูลให้ครบถ้วน และถูกต้อง");

    console.log("Validation failed:", v$.value.$errors);
  }
};

onMounted(async () => {
  await getDataConf();
  await userStore.fetchUser();
});
</script>
