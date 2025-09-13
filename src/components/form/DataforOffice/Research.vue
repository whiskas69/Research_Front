<template>
  <div class="container my-10 mx-auto">
    <!-- Conference -->
    <div v-if="props.type == 'Conference'">
      <Mainbox v-if="formData.conference.meeting_type" class="collapse collapse-arrow collapse-open">
         <input type="checkbox" />
         <p class="collapse-title">ตรวจหลักฐานคุณภาพของการจัดประชุมทางวิชาการ</p>
        <SectionWrapper class="collapse-content">
          <div>
            <p>• คุณภาพของการประชุม ฯ</p>
            <div
              class="px-2"
              v-if="formData.conference.quality_meeting == 'good'"
            >
              <p>• อยู่ในระดับดีมาก</p>
              <div class="flex flex-row gap-2">
                <p>• คำนวณจาก {{ formData.score.score_type }}</p>
                <p v-if="formData.score.score_type == 'CORE'">
                  มีค่าคะแนน {{ formData.score.core_rank }}
                </p>
                <p v-else>มีค่าคะแนน {{ formData.score.score_result }}</p>
              </div>
            </div>
            <p
              class="px-2"
              v-else-if="formData.conference.quality_meeting == 'standard'"
            >
              • อยู่ในระดับมาตรฐาน
            </p>
            <p class="px-2" v-else-if="formData.conference.quality_meeting == ''">
              • ประชุมทางวิชาการที่คณะจัดหรือร่วมจัดในประเทศ
              และไม่อยู่ในฐานข้อมูลสากล SCOPUS
            </p>
          </div>
          <RadioInput
            label="ข้อมูลถูกต้อง"
            value="correct"
            name="re"
            :disabled="true"
            v-model="formData.offic.c_research_result"
          />
          <RadioInput
            label="ข้อมูลไม่ถูกต้อง"
            value="notCorrect"
            name="re"
            :disabled="true"
            v-model="formData.offic.c_research_result"
          />
          <TextArea
            :disabled="true"
            :placeholder="formData.offic.c_research_reason"
          />
        </SectionWrapper>
      </Mainbox>
      <Mainbox v-else>
        <p class="font-bold">ตรวจหลักฐานคุณภาพของการจัดประชุมทางวิชาการ</p>
        <p>เอกสารอยู่ในขั้นตอนการตรวจสอบ</p>
      </Mainbox>
    </div>

    <!-- PC -->
    <div v-if="props.type == 'Page_Charge'">
      <Mainbox class="collapse collapse-arrow collapse-open">
        <input type="checkbox" />
        <p class="collapse-title text-lg font-bold">เอกสารหลักฐานที่แนบ</p>
        <SectionWrapper class="collapse-content">
          <div class="flex flex-row items-center w-full">
            <div class="flex flex-row items-center w-full justify-between">
              <div class="flex flex-row">
                <p>
                  หลักฐานแสดงการอยู่ในฐานข้อมูลสากล ISI หรือ SJR หรือ Scopus
                  หรือ Nature
                </p>
              </div>
              <div>
                <button
                  @click="getFile(formData.f_q_pc_proof)"
                  class="btn bg-[#E85F19] text-white mr-5"
                >
                  ดูเอกสาร
                </button>
              </div>
            </div>
          </div>

          <div class="flex flex-row items-center w-full">
            <div class="flex flex-row items-center w-full justify-between">
              <div class="flex flex-row">
                <p>
                  หลักฐานแสดงการจัดลำดับ Quartile ของฐานข้อมูลสากล ISI หรือ SJR
                  หรือ Scopus
                </p>
              </div>
              <div>
                <button
                  @click="getFile(formData.f_q_pc_proof)"
                  class="btn bg-[#E85F19] text-white mr-5"
                >
                  ดูเอกสาร
                </button>
              </div>
            </div>
          </div>

          <div class="flex flex-row items-center w-full">
            <div class="flex flex-row items-center w-full justify-between">
              <div class="flex flex-row">
                <p>
                  ใบแจ้งหนี้ค่าใช้จ่ายสำหรับการตีพิมพ์ /
                  อัตราค่าใช้จ่ายที่ประกาศบนหน้าเว็บไซต์
                </p>
              </div>
              <div>
                <button
                  @click="getFile(formData.f_invoice_public)"
                  class="btn bg-[#E85F19] text-white mr-5"
                >
                  ดูเอกสาร
                </button>
              </div>
            </div>
          </div>

          <div class="flex flex-row items-center w-full">
            <div class="flex flex-row items-center w-full justify-between">
              <div class="flex flex-row">
                <p>หลักฐานการส่งบทความ หนังสือตอบรับบทความ</p>
              </div>
              <div>
                <button
                  @click="getFile(formData.f_accepted)"
                  class="btn bg-[#E85F19] text-white mr-5"
                >
                  ดูเอกสาร
                </button>
              </div>
            </div>
          </div>

          <div class="flex flex-row items-center w-full">
            <div class="flex flex-row items-center w-full justify-between">
              <div class="flex flex-row">
                <p>สำเนาบทความ</p>
              </div>
              <div>
                <button
                  @click="getFile(formData.f_copy_article)"
                  class="btn bg-[#E85F19] text-white mr-5"
                >
                  ดูเอกสาร
                </button>
              </div>
            </div>
          </div>

          <div class="flex flex-row items-center w-full">
            <div class="flex flex-row items-center w-full justify-between">
              <div class="flex flex-row">
                <p>หลักฐานการ Upload บทความเข้าระบบ IT Scholar</p>
              </div>
              <div>
                <button
                  @click="getFile(formData.f_upload_article)"
                  class="btn bg-[#E85F19] text-white mr-5"
                >
                  ดูเอกสาร
                </button>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </Mainbox>
      <p class="text-xl font-bold my-5">ตรวจสอบข้อมูลและหลักฐาน</p>
      <Mainbox v-if="formData.offic.p_research_admin" class="collapse collapse-arrow collapse-open">
        <input type="checkbox" />
        <p class="collapse-title">ตรวจสอบหลักฐานตามหลักเกณฑ์ที่กำหนดในประกาศ ส.จ.ล และประกาศคณะ</p>
        <SectionWrapper class="collapse-content">
          <RadioInput
            label="ถูกต้องตามเงื่อนไขการสนับสนุน ดังนี้"
            value="approve"
            name="re"
            :disabled="true"
            v-model="formData.offic.p_research_admin"
          />
          <textarea
            v-if="formData.offic.p_research_admin == 'approve'"
            class="textarea textarea-bordered w-full"
            :disabled="true"
            :placeholder="formData.offic.p_reason"
          ></textarea>
          <RadioInput
            label="ถูกต้องตามเงื่อนไขการสนับสนุน กรณีส่งหนังสือตอบรับย้อนหลัง ดังนี้"
            value="waiting letter"
            name="re"
            :disabled="true"
            v-model="formData.offic.p_research_admin"
          />
          <textarea
            v-if="formData.offic.p_research_admin == 'waiting letter'"
            class="textarea textarea-bordered w-full"
            :disabled="true"
            :placeholder="formData.offic.p_reason"
          ></textarea>
          <RadioInput
            label="อื่น ๆ"
            value="other"
            name="re"
            :disabled="true"
            v-model="formData.offic.p_research_admin"
          />
          <textarea
            v-if="formData.offic.p_research_admin == 'other'"
            class="textarea textarea-bordered w-full"
            :disabled="true"
            :placeholder="formData.offic.p_reason"
          ></textarea>
        </SectionWrapper>
      </Mainbox>
      <Mainbox v-else>
        <p class="font-bold">ตรวจสอบหลักฐานตามหลักเกณฑ์ที่กำหนดในประกาศ ส.จ.ล และประกาศคณะ</p>
        <p>เอกสารอยู่ในขั้นตอนการตรวจสอบ</p>
      </Mainbox>
    </div>

    <!-- Kris -->
    <div v-if="props.type == 'Research_KRIS'">
      <Mainbox class="collapse collapse-arrow collapse-open">
        <input type="checkbox" />
        <p class="collapse-title text-lg font-bold">เอกสารหลักฐานที่แนบ</p>
        <div class="collapse-content flex flex-rowitems-center">
          <p class="w-3/5 min-w-64 flex place-items-center">แบบเสนอโครงการวิจัย (Research Project)</p>
          <div class="ml-80">
            <button
              @click="getFile(formData.f_kris)"
              class="btn bg-[#E85F19] text-white mr-5"
            >
              ดูเอกสาร
            </button>
          </div>
        </div>
      </Mainbox>

      <p class="text-xl font-bold pb-5">ตรวจสอบข้อมูลและหลักฐาน</p>
      <Mainbox v-if="formData.offic.research_admin" class="collapse collapse-arrow collapse-open">
        <input type="checkbox" />
        <p class="collapse-title text-lg font-bold">ตรวจสอบ และรับทราบเอกสาร</p>
        <SectionWrapper class="collapse-content">
          <RadioInput
            label="รับทราบ"
            name="noted"
            value="acknowledge"
            :disabled="true"
            v-model="formData.offic.research_admin"
          />
          <RadioInput
            label="ไม่รับทราบ"
            name="noted"
            value="notAcknowledge"
            :disabled="true"
            v-model="formData.offic.research_admin"
          />
        </SectionWrapper>
      </Mainbox>
      <Mainbox v-else>
        <p class="font-bold">ตรวจสอบหลักฐาน และรับทราบเอกสาร</p>
        <p>เอกสารอยู่ในขั้นตอนการตรวจสอบ</p>
      </Mainbox>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import api from "@/setting/api";

import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import RadioInput from "@/components/Input/RadioInput.vue";
import TextArea from "@/components/Input/TextArea.vue";

const formData = reactive({
  offic: [],
  conference: [],
  score: [],
  page_c: [],
  name: "",
  file: "",
  f_pc_proof: null,
  f_q_pc_proof: null,
  f_invoice_public: null,
  f_accepted: null,
  f_copy_article: null,
  f_upload_article: null,
  f_kris: null,
});

const getFile = async (fileUrl) => {
  formData.file = fileUrl;
  window.open(formData.file, "_blank");
};

const props = defineProps(["type"]);
const route = useRoute();
const id = route.params.id;
const isLoading = ref(true);

const fetchOfficerData = async () => {
  try {
    if (props.type == "Conference") {
      const responseoffic = await api.get(`/opinionConf/${id}`);
      formData.offic = responseoffic.data;
      const responseConfer = await api.get(`/conference/${id}`);
      console.log("conference123", responseConfer);
      formData.conference = responseConfer.data;
      const responseScore = await api.get(`/score/${id}`);
      console.log("score123", responseScore);
      formData.score = responseScore.data;

    } else if (props.type == "Page_Charge") {
      const responsefile = await api.get(`/getFilepage_c?pageC_id=${id}`);
      formData.f_pc_proof = responsefile.data.file_pc_proof;
      formData.f_q_pc_proof = responsefile.data.file_q_pc_proof;
      formData.f_invoice_public = responsefile.data.file_invoice_public;
      formData.f_accepted = responsefile.data.file_accepted;
      formData.f_copy_article = responsefile.data.file_copy_article;
      formData.f_upload_article = responsefile.data.file_upload_article;

      const response = await api.get(`/form/Pc/${id}`);
      formData.page_c = response.data.page_c;
      formData.name = response.data.name;

      const responseoffic = await api.get(`/opinionPC/${id}`);
      formData.offic = responseoffic.data;
    } else if (props.type == "Research_KRIS") {

      const responsefile = await api.get(`/getFilekris?kris_id=${id}`);
      console.log("responsefile k", responsefile)
      formData.f_kris = responsefile.data.fileUrl;

      const responsedata = await api.get(`/opinionkris/${id}`);
      formData.offic = responsedata.data;
    }
  } catch (error) {
    console.log("Error fetching Officer data:", error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchOfficerData();
});
</script>
