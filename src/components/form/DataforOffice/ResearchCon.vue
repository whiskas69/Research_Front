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

    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, reactive } from "vue";
import api from "@/setting/api";

import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import RadioInput from "@/components/Input/RadioInput.vue";
import TextArea from "@/components/Input/TextArea.vue";

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

const props = defineProps(['id', 'type']); 
const isLoading = ref(true);
// Access route parameters
// const route = useRoute();
// const id = route.params.id;
console.log("params.id", props.id);
console.log("params.type", props.type);

const fetchOfficerData = async () => {
  try {
    const responseoffic = await api.get(`/opinionConf/${props.id}`);
    formData.offic = responseoffic.data;
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
