<template>
  <div>
    <div class="container my-10 mx-auto">
      <Kris :id="id"/>
      <Mainbox>
        <p class="text-lg font-bold">เอกสารหลักฐานที่แนบ</p>
        <div class="flex flex-rowitems-center">
          <p>แบบเสนอโครงการวิจัย (Research Project)</p>
          <div class="ml-80">
            <button @click="getFile" class="btn bg-[#E85F19] text-white mr-5">ดูเอกสาร</button>
            <button @click="downloadFile" class="btn bg-[#4285F4] text-white">โหลดเอกสาร</button>
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
            v-model="formData.radioAuthOffic"
            @change="handleInput('radioAuthOffic', $event.target.value)"
          />
          <RadioInput
            label="ไม่รับทราบ"
            name="noted"
            value="ไม่รับทราบ"
            v-model="formData.radioAuthOffic"
            @change="handleInput('radioAuthOffic', $event.target.value)"
          />
        </SectionWrapper>
      </Mainbox>
      <div class="flex justify-end">
        <button @click="OfficerKris" class="btn btn-success text-white">
          บันทึกข้อมูล
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import api from "@/setting/api";
import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import RadioInput from "@/components/Input/RadioInput.vue";
import Kris from "@/components/form/DataforOffice/Kris.vue";

const formData = reactive({
  kris: [],
  user: [],
  file: [],
  name: "",
  
  //วันที่ส่งเอกสาร
  docSubmitDate: "",
  // ความเห้นเจ้าหน้าที่
  radioAuthOffic: "",
  formStatus: "เข้าที่ประชุม"
});
console.log("kris", formData);
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

const route = useRoute();
const id = route.params.id;
console.log("params.id", id);

const getFile = async () => {
  window.open(formData.file, "_blank");
};

const downloadFile = async () => {
  try {
    const response = await fetch(formData.file);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
console.log("formData.file", formData.file)
console.log("formData.file", formData.file)
    const a = document.createElement("a");
    a.href = url;
    a.download = "แบบเสนอโครงการวิจัย " + formData.name + " .pdf"; // ชื่อไฟล์ที่บันทึก
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error downloading file:", error);
  }
};
const router = useRouter();

const OfficerKris = async () => {
  try {
    const dataForBackend = {
      kris_id: id,
      research_admin: formData.radioAuthOffic,
      doc_submit_date: formData.docSubmitDate,
      //form
      form_status: formData.formStatus,
    };
    console.log("postKris: ", JSON.stringify(dataForBackend));

    const response = await api.post(
      `/opinionKris`,
      dataForBackend,
      {
        headers: {
          "Content-Type": "application/json", // Required for file uploads
        },
      }
    );
    alert("บันทึกข้อมูลเรียบร้อย");
    router.push("/allstatus");
    console.log("res: ", response);
    console.log("allpostOfficerPC: ", message.value);
    console.log("postOfficerPC: ", response.data);
  } catch (error) {
    console.error(error);
    message.value = "Error adding page_charge. Please try again.";
  }
};
</script>
