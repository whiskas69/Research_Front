<template>
  <div>
    <div class="container my-10 mx-auto">
      <ConferenceData :id="id" />
      <HR :id="id"/>
      <Research :id="id" :type="'Conference'"/>
      <FinanceAll :id="id" :type="'Conference'"/>
      <Mainbox>
        <SectionWrapper>
          <p class="text-lg font-bold">รองคณบดีฝ่ายงานวิจัย</p>
          <TextArea
            label="ความคิดเห็น"
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
import { ref, onMounted, reactive, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useUserStore } from "@/store/userStore";
import api from "@/setting/api";

import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import TextArea from "@/components/Input/TextArea.vue";
import ConferenceData from "@/components/form/DataforOffice/Conference.vue";
import HR from "@/components/form/DataforOffice/HR.vue";
import Research from "@/components/form/DataforOffice/Research.vue";
import FinanceAll from "@/components/form/DataforOffice/FinanceAll.vue";

const formData = reactive({
  offic: [],
  //วันที่ส่งเอกสาร
  docSubmitDate: "",
  // ความเห้นเจ้าหน้าที่
  description: "",
  //satatus
  formStatus: "คณบดี",
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
const userStore = useUserStore();
const user = computed(() => userStore.user);
console.log("user id hr:", user)

const fetchOfficerData = async () => {
  try {
    const responseoffic = await api.get(`/opinionConf/${id}`);
    console.log("offic123", responseoffic);
    formData.offic = responseoffic.data;
  } catch (error) {
    console.error("Error fetching Officer data:", error);
  } finally {
    isLoading.value = false;
  }
};

const OfficerConfer = async () => {
  try {
    const dataForBackend = {
      hr_id: formData.offic.hr_id,
      research_id: formData.offic.research_id,
      conf_id: id,
      //hr
      c_research_hr: formData.offic.c_research_hr,
      c_reason: formData.offic.c_reason,
      hr_doc_submit_date: new Date(formData.offic.hr_doc_submit_date)
        .toISOString()
        .slice(0, 19)
        .replace("T", " "),
      //research
      c_meet_quality: formData.offic.c_meet_quality,
      c_good_reason: formData.offic.c_good_reason,
      research_doc_submit_date: new Date(
        formData.offic.research_doc_submit_date
      )
        .toISOString()
        .slice(0, 19)
        .replace("T", " "),
      //long kanabodee
      associate_id: user.value?.user_id,
      c_deputy_dean: formData.description,
      associate_doc_submit_date: formData.docSubmitDate,
      //form
      form_status: formData.formStatus,
    };
    console.log("post office confer: ", JSON.stringify(dataForBackend));

    const response = await api.put(
      `/opinionConf/${id}`,
      dataForBackend,
      { headers: { "Content-Type": "application/json" } }
    );
    alert("บันทึกข้อมูลเรียบร้อยแล้ว");
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
