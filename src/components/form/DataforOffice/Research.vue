<template>
  <div>
    <div class="container my-10 mx-auto">
      <Mainbox v-if="props.type == 'Conference'">
        <p>Conference ja</p>
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

      <div v-if="props.type == 'Page_Charge'">
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
                  <button @click="getFile(formData.f_q_pc_proof)" class="btn bg-[#E85F19] text-white mr-5">
                    ดูเอกสาร
                  </button>
                  <button @click="downloadFile(formData.f_q_pc_proof, 'หลักฐานการจัดลำดับ Quartile')" class="btn bg-[#4285F4] text-white">
                    โหลดเอกสาร
                  </button>
                </div>
              </div>
            </div>
            <!-- 2 -->
            <div class="flex flex-row items-center w-full">
              <div class="flex flex-row items-center w-full justify-between">
                <div class="flex flex-row">
                  <p>
                    หลักฐานแสดงการจัดลำดับ Quartile ของฐานข้อมูลสากล ISI หรือ SJR หรือ Scopus
                  </p>
                </div>
                <div>
                  <button @click="getFile(formData.f_q_pc_proof)" class="btn bg-[#E85F19] text-white mr-5">
                    ดูเอกสาร
                  </button>
                  <button @click="downloadFile(formData.f_q_pc_proof, 'หลักฐานการจัดลำดับ Quartile')" class="btn bg-[#4285F4] text-white">
                    โหลดเอกสาร
                  </button>
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
                <div>
                  <button @click="getFile(formData.f_invoice_public)" class="btn bg-[#E85F19] text-white mr-5">
                    ดูเอกสาร
                  </button>
                  <button  @click="downloadFile(formData.f_invoice_public, 'ใบแจ้งหนี้ค่าใช้จ่าย')" class="btn bg-[#4285F4] text-white">
                    โหลดเอกสาร
                  </button>
                </div>
              </div>
            </div>
            <!-- 4 -->
            <div class="flex flex-row items-center w-full">
              <div class="flex flex-row items-center w-full justify-between">
                <div class="flex flex-row">
                  <p>หลักฐานการส่งบทความ หนังสือตอบรับบทความ</p>
                </div>
                <div>
                  <button @click="getFile(formData.f_accepted)" class="btn bg-[#E85F19] text-white mr-5">
                    ดูเอกสาร
                  </button>
                  <button @click="downloadFile(formData.f_accepted, 'หนังสือตอบรับบทความ')" class="btn bg-[#4285F4] text-white">
                    โหลดเอกสาร
                  </button>
                </div>
              </div>
            </div>
            <!-- 5 -->
            <div class="flex flex-row items-center w-full">
              <div class="flex flex-row items-center w-full justify-between">
                <div class="flex flex-row">
                  <p>สำเนาบทความ และ Upload บทความเข้าระบบ IT Scholar</p>
                </div>
                <div>
                  <button  @click="getFile(formData.f_copy_article)" class="btn bg-[#E85F19] text-white mr-5">
                    ดูเอกสาร
                  </button>
                  <button @click="downloadFile(formData.f_copy_article,'สำเนาบทความ และ Upload บทความเข้าระบบ IT Scholar')" class="btn bg-[#4285F4] text-white">
                    โหลดเอกสาร
                  </button>
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
      </div>

      <div v-if="props.type == 'Research_KRIS'">
        <Mainbox>
          <p class="text-lg font-bold">เอกสารหลักฐานที่แนบ</p>
          <div class="flex flex-rowitems-center">
            <p>แบบเสนอโครงการวิจัย (Research Project)</p>
            <div class="ml-80">
              <button  @click="getFile(formData.file)" class="btn bg-[#E85F19] text-white mr-5">ดูเอกสาร</button>
              <button @click="downloadFile(formData.file, 'แบบเสนอโครงการวิจัย')" class="btn bg-[#4285F4] text-white">โหลดเอกสาร</button>
            </div>
          </div>
        </Mainbox>
  
        <p class="text-xl font-bold pb-5">ตรวจสอบข้อมูลและหลักฐาน</p>
        <Mainbox>
          <p class="text-lg font-bold">ตรวจสอบ และรับทราบเอกสาร</p>
          <SectionWrapper>
            <RadioInput
              label="รับทราบ"
              name="noted"
              value="รับทราบ"
              disabled="true"
              :checked="formData.offic.research_admin == 'รับทราบ' ? true : false"
            />
            <RadioInput
              label="ไม่รับทราบ"
              name="noted"
              value="ไม่รับทราบ"
              disabled="true"
              :checked="formData.offic.research_admin == 'ไม่รับทราบ' ? true : false"
            />
          </SectionWrapper>
        </Mainbox>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from "vue";
import api from "@/setting/api";

import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import TextInputLabelLeft from "@/components/Input/TextInputLabelLeft.vue";
import RadioInput from "@/components/Input/RadioInput.vue";
import TextArea from "@/components/Input/TextArea.vue";

const formData = reactive({
  offic: [],
  //urlfile
  f_pc_proof: null,
  f_q_pc_proof: null,
  f_invoice_public: null,
  f_accepted: null,
  f_copy_article: null,
  file: null,
});

const getFile = async (fileUrl) => {
  formData.file = fileUrl;
  window.open(formData.file, "_blank");
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
    console.error("Error downloading file:", error);
  }
};

const props = defineProps(["id", "type"]);
const isLoading = ref(true);
console.log("params.id", props.id);
console.log("params.type", props.type);

const fetchOfficerData = async () => {
  try {
    if (props.type == "Conference") {
      const responseoffic = await api.get(`/opinionConf/${props.id}`);
      formData.offic = responseoffic.data;
    } else if (props.type == "Page_Charge") {
      const responseoffic = await api.get(`/opinionPC/${props.id}`);
      formData.offic = responseoffic.data;

      const responsefile = await api.get(`/getFilepage_c?pageC_id=${props.id}`);
      formData.f_pc_proof = responsefile.data.file_pc_proof;
      formData.f_q_pc_proof = responsefile.data.file_q_pc_proof;
      formData.f_invoice_public = responsefile.data.file_invoice_public;
      formData.f_accepted = responsefile.data.file_accepted;
      formData.f_copy_article = responsefile.data.file_copy_article;
    } else if (props.type == "Research_KRIS") {
      const responseOffic = await api.get(`/opinionkris/${props.id}`);
      formData.offic = responseOffic.data;

      const responsefile = await api.get(`/getFilekris?kris_id=${props.id}`);
      formData.file = responsefile.data.fileUrl;
    }
  } catch (error) {
    console.error("Error fetching Officer data:", error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchOfficerData();
});
</script>
