<template>
  <div>
    <div class="container my-10 mx-auto">
      <ConferenceData :id="id" />
      <HR :id="id"/>
      <!-- <Mainbox>
        <SectionWrapper>
          <p>ตรวจสอบความถูกต้องของข้อมูล 903</p>
          <RadioInput
            label="ข้อมูลถูกต้อง"
            value="ถูกต้อง"
            name="re"
            disabled="false"
            :checked="formData.offic.c_research_hr == 'ถูกต้อง' ? true : false"
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
      </Mainbox> -->

      <Mainbox>
        <SectionWrapper>
          <p>ตรวจหลักฐานคุณภาพของการจัดประชุมทางวิชาการ</p>

          <p>• คุณภาพของการประชุม ฯ</p>

          <div class="px-5">
            <RadioInput
              label="ระดับมาตรฐาน"
              name="Sub1"
              value="มาตรฐาน"
              v-model="formData.radioAuthOffic"
              @change="handleInput('radioAuthOffic', $event.target.value)"
            />
            <RadioInput
              label="ระดับดีมาก"
              name="Sub1"
              value="ดีมาก"
              v-model="formData.radioAuthOffic"
              @change="handleInput('radioAuthOffic', $event.target.value)"
            />
          </div>

          <TextArea
            label="• กรณี ที่เป็นการประชุมวิชาการระดับดีมาก เลือกวิธีคิดค่าคะแนนคุณภาพ และมีระดับคะแนนคุณภาพของการประชุมฯ ดังนี้"
            @input="handleInput('description', $event.target.value)"
          />
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
import { ref, onMounted, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import api from "@/setting/api";

import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import RadioInput from "@/components/Input/RadioInput.vue";
import TextArea from "@/components/Input/TextArea.vue";
import ConferenceData from "@/components/form/DataforOffice/Conference.vue";
import HR from "@/components/form/DataforOffice/HR.vue";

const formData = reactive({
  offic: [],
  //วันที่ส่งเอกสาร
  docSubmitDate: "",
  // ความเห้นเจ้าหน้าที่
  radioAuthOffic: "",
  description: "",
  formStatus: "ฝ่ายบริหารการเงิน",
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
const isLoading = ref(true);
// Access route parameters
const router = useRouter();
const route = useRoute();
const id = route.params.id;
console.log("params.id", id);

const fetchOfficerData = async () => {
  try {
    const responseoffic = await api.get(
      `/opinionConf/${id}`
    );
    console.log("hr123", responseoffic);
    formData.offic = responseoffic.data;
    console.log("hr", formData.offic);
    // console.log("hr", formData.score.score_type);
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
      //hr
      c_research_hr: formData.offic.c_research_hr,
      c_reason: formData.offic.c_reason,
      hr_doc_submit_date: new Date(formData.offic.hr_doc_submit_date)
        .toISOString()
        .slice(0, 19)
        .replace("T", " "),
      //research
      c_meet_quality: formData.radioAuthOffic,
      c_good_reason: formData.description,
      research_doc_submit_date: formData.docSubmitDate,
      //form
      form_status: formData.formStatus,
    };
    console.log("post office confer: ", JSON.stringify(dataForBackend));

    const response = await api.put(
      `/opinionConf/${id}`,
      dataForBackend,
      { headers: { "Content-Type": "application/json" } }
    );
    alert("Have new OfficerConfer!");
    router.push("/officer");
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
