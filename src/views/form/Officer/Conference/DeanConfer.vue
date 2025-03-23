<template>
  <div>
    <div class="container my-10 mx-auto">

      <ConferenceData :id="id"/>
      <HR :id="id"/>
      <Research :id="id" :type="'Conference'"/>
      <FinanceAll :id="id" :type="'Conference'"/>
      <Assosiate :id="id" :type="'Conference'"/>
      <Mainbox>
        <SectionWrapper>
          <p class="text-lg font-bold">เพื่อโปรดทราบการจัดสรรวงเงิน ก่อนการตอบรับบทความจากผู้จัด</p>
          <RadioInput
            label="รับทราบ"
            value="รับทราบ"
            v-model="formData.acknowledge"
            @change="handleInput('acknowledge', $event.target.value)"
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
import axios from "axios";

import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import RadioInput from "@/components/Input/RadioInput.vue";
import TextArea from "@/components/Input/TextArea.vue";
import ConferenceData from "@/components/form/DataforOffice/Conference.vue";
import HR from "@/components/form/DataforOffice/HR.vue";
import Research from "@/components/form/DataforOffice/Research.vue";
import FinanceAll from "@/components/form/DataforOffice/FinanceAll.vue";
import Assosiate from "@/components/form/DataforOffice/Assosiate.vue";

const formData = reactive({
  offic: [],
  budget: [],
  // ความเห้นเจ้าหน้าที่
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
  // ความเห้นเจ้าหน้าที่
  acknowledge: "",
  //satatus
  formStatus: "รออนุมัติ",
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
const router = useRouter();
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

    const responsebudget = await axios.get(
      `http://localhost:3000/budget/conference/${id}`
    );
    console.log("budget 123", responsebudget);
    formData.budget = responsebudget.data;
    console.log("budget", JSON.stringify(formData.budget));
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
      c_meet_quality: formData.offic.c_meet_quality,
      c_good_reason: formData.offic.c_good_reason,
      research_doc_submit_date: new Date(
        formData.offic.research_doc_submit_date
      )
        .toISOString()
        .slice(0, 19)
        .replace("T", " "),
      //long kanabodee
      c_deputy_dean: formData.offic.c_deputy_dean,
      associate_doc_submit_date: new Date(
        formData.offic.associate_doc_submit_date
      )
        .toISOString()
        .slice(0, 19)
        .replace("T", " "),
      //kanabodee
      c_approve_result: formData.acknowledge,
      dean_doc_submit_date: formData.docSubmitDate,
      //form
      form_status: formData.formStatus,
    };
    console.log("post office confer: ", JSON.stringify(dataForBackend));

    const response = await axios.put(
      `http://localhost:3000/opinionConf/${id}`,
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
