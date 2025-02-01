<template>
  <div>
    <div class="container my-10 mx-auto">
      <p class="text-xl font-bold mb-5">
        แบบเสนอโครงการวิจัย ทุนวิจัยส่งเสริมส่วนงานวิชาการ
      </p>
      <Mainbox>
        <p class="text-lg font-bold">รายละเอียดเบื้องต้น</p>

        <div class="py-2 px-5">
          <p class="font-bold">1. ชื่อโครงการวิจัย</p>
          <SectionWrapper>
            <TextInputLabelLeft
              label="(ภาษาไทย)"
              customLabel="w-1/12"
              v-model="formData.projectTH"
              @input="handleInput('projectTH', $event.target.value)"
            />
            <TextInputLabelLeft
              label="(ภาษาอังกฤษ)"
              customLabel="w-1/12"
              v-model="formData.projectENG"
              @input="handleInput('projectENG', $event.target.value)"
            />
          </SectionWrapper>
        </div>

        <div class="py-2 px-5">
          <p class="font-bold">
            2. สอดคล้องกับกลุ่มวิจัย (Research Cluster) ของ สจล.
          </p>
          <SectionWrapper>
            <div class="flex flex-row w-full">
              <div class="flex flex-col w-1/3">
                <CheckInput
                  class="pb-3"
                  label="ICT: Robotics & Automation"
                  v-model="formData.resCluster"
                  @input="handleCheckbox('resCluster','ICT: Robotics & Automation')"
                />
                <CheckInput
                  class="pb-3"
                  label="ICT: Smart City & IoT"
                  v-model="formData.resCluster"
                  @input="handleCheckbox('resCluster', 'ICT: Smart City & IoT')"
                />
                <CheckInput
                  class="pb-3"
                  label="Battery & EV"
                  v-model="formData.resCluster"
                  @input="handleCheckbox('resCluster','Battery & EV')"
                />
                <CheckInput
                  class="pb-3"
                  label="Renewable Energy"
                  v-model="formData.resCluster"
                  @input="handleCheckbox('resCluster', 'Renewable Energy')"
                />
                <CheckInput
                  class="pb-3"
                  label="Biomedical"
                  v-model="formData.resCluster"
                  @input="handleCheckbox('resCluster','Biomedical')"
                />
              </div>

              <div class="flex flex-col w-full">
                <CheckInput
                  class="pb-3"
                  label="Agriculture & Food"
                  v-model="formData.resCluster"
                  @input="handleCheckbox('resCluster','Agriculture & Food')"
                />
                <CheckInput
                  class="pb-3"
                  label="Future Mobility & Logistic"
                  v-model="formData.resCluster"
                  @input="handleCheckbox('resCluster','Future Mobility & Logistic')"
                />
                <CheckInput
                  class="pb-3"
                  label="Materials"
                  v-model="formData.resCluster"
                  @input="handleCheckbox('resCluster','Materials')"
                />
                <CheckInput
                  class="pb-3"
                  label="Creative Economy"
                  v-model="formData.resCluster"
                  @input="handleCheckbox('resCluster','Creative Economy')"
                />
                <div class="flex flex-row items-center">
                  <CheckInput
                    class="flex items-center w-[125px]"
                    label="อื่น ๆ ระบุ"
                    customDiv="max-w-32"
                    v-model="formData.resCluster"
                    @input="handleCheckbox('resCluster','อื่น ๆ')"
                  />
                  <TextInputLabelLeft
                    label=""
                    v-model="formData.resClusterOther"
                    @input="handleInput('resClusterOther', $event.target.value)"
                  />
                </div>
              </div>
            </div>
          </SectionWrapper>
        </div>

        <div class="py-2 px-5">
          <p class="font-bold">3. มาตรฐานการวิจัย</p>
          <SectionWrapper>
            <div class="flex flex-col w-full">
              <CheckInput
                class="pb-3"
                label="มีการใช้สัตว์ทดลอง"
                v-model="formData.resStandards"
                @input="handleCheckStandards('resStandards', 'มีการใช้สัตว์ทดลอง')"
              />
              <CheckInput
                class="pb-3"
                label="มีการวิจัยในมนุษย์"
                v-model="formData.resStandards"
                @input="handleCheckStandards('resStandards','มีการวิจัยในมนุษย์')"
              />
              <CheckInput
                class="pb-3"
                label="มีการวิจัยด้านเทคโนโลยีชีวภาพสมัยใหม่หรือพันธุวิศวกรรม"
                v-model="formData.resStandards"
                @input="handleCheckStandards('resStandards','มีการวิจัยด้านเทคโนโลยีชีวภาพสมัยใหม่หรือพันธุวิศวกรรม')"
              />
              <CheckInput
                class="pb-3"
                label="มีการใช้พันธุ์พืช"
                v-model="formData.resStandards"
                @input="handleCheckStandards('resStandards','มีการใช้พันธุ์พืช')"
              />

              <div class="flex flex-row items-center">
                <CheckInput
                  class="flex items-center w-1/3"
                  label="มาตรา 52 (เพื่อประโยชน์ทางการค้า)"
                  customDiv="max-w-80"
                  v-model="formData.resStandardsTrade"
                  @input="handleCheckTrade('resStandardsTrade','มาตรา 52')"
                />
                <CheckInput
                  class="flex items-center"
                  label="มาตรา 53 (ไม่มีวัตถุประสงค์เพื่อประโยชน์ทางการค้า)"
                  v-model="formData.resStandardsTrade"
                  @input="handleCheckTrade('resStandardsTrade','มาตรา 53')"
                />
              </div>
            </div>
          </SectionWrapper>
        </div>

        <div class="py-5 px-5">
          <p class="font-bold">4. ข้อมูลนักวิจัย</p>
          <SectionWrapper>
            <p>4.1 ข้อมูลผู้ขอทุน (หัวหน้าโครงการ)</p>
            <div class="grid px-5 gap-3">
              <TextInputLabelLeft
                label="ชื่อ - สกุล (ภาษาไทย)"
                customLabel="w-2/12"
                :placeholder="formData.nameTH"
                disabled="true"
              />
              <TextInputLabelLeft
                label="ชื่อ - สกุล (ภาษาอังกฤษ)"
                customLabel="w-2/12"
                :placeholder="formData.nameENG"
                disabled="true"
              />
              <div class="flex flex-col">
                <TextInputLabelLeft
                  label="ดัชนี H-Index"
                  customLabel="w-2/12"
                  v-model="formData.Hindex"
                  @input="handleInput('Hindex', $event.target.value)"
                />
                <p class="text-sm text-red-500 py-2 px-48">
                  (search ชื่อตนเองในฐาน https://www.scopus.com/)
                </p>
              </div>
              <TextInputLabelLeft
                label="ประวัติด้านสิ่งประดิษฐ์ /นวัตกรรม"
                customLabel="w-1/6"
                v-model="formData.inveninno"
                @input="handleInput('inveninno', $event.target.value)"
              />
              <div class="flex flex-row">
                <TextInputLabelLeft
                  label="ร้อยละการมีส่วนร่วมในโครงการ"
                  customLabel="w-4/6"
                  customDiv="max-w-96 w-auto"
                  customInput="max-w-32"
                  v-model="formData.participation"
                  @input="handleInput('participation', $event.target.value)"
                />
                <span class="text-sm text-red-500 w-1/6 flex items-center"
                  >(สัดส่วนการวิจัย)</span
                >
              </div>
            </div>
          </SectionWrapper>
        </div>

        <div class="py-2 px-5">
          <p class="font-bold">
            5. ระยะเวลาโครงการ
            <span class="font-bold text-red-500"
              >(ระบุจำนวนปีและระยะเริ่มต้นจนสิ้นสุดโครงการ)</span
            >
          </p>
          <SectionWrapper>
            <div class="flex flex-row w-full">
              <text-input-label-right
                label="ปี"
                customDiv="max-w-32 w-auto"
                customInput="max-w-32"
                v-model="formData.periodYear"
                @input="handleInput('periodYear', $event.target.value)"
              />
              <TextInputLabelLeft
                label="เริ่ม"
                type="date"
                customDiv="max-w-fit ml-5"
                customInput="max-w-fit mr-5"
                v-model="formData.periodStart"
                @input="handleInput('periodStart', $event.target.value)"
              />
              <TextInputLabelLeft
                label="สิ้นสุด"
                type="date"
                customDiv="w-1/12"
                customInput="max-w-fit ml-[-20px]"
                v-model="formData.periodEnd"
                @input="handleInput('periodEnd', $event.target.value)"
              />
            </div>
          </SectionWrapper>
        </div>
      </Mainbox>
      <Mainbox>
        <p class="text-lg font-bold">เอกสารหลักฐานที่แนบ</p>
        <SectionWrapper>
          <FileInput label="แบบเสนอโครงการวิจัย (Research Project)" 
          v-model="formData.file"
            @change="handleFile($event, 'file')"
            />
        </SectionWrapper>
      </Mainbox>

      <div class="flex justify-end">
        <button @click="NewScolar" class="btn btn-success text-white">บันทึกข้อมูล</button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import axios from "axios";
import Research from "@/components/form/Research/Research.vue";
import FileResearch from "@/components/form/Research/FileResearch.vue";

import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import TextInputLabelLeft from "@/components/Input/TextInputLabelLeft.vue";
import TextInputLabelRight from "@/components/Input/TextInputLabelRight.vue";
import CheckInput from "@/components/Input/CheckInput.vue";
import FileInput from "@/components/Input/FileInput.vue";

const formData = reactive({
  //project
  projectTH: "",
  projectENG: "",
  //Research Cluster
  resCluster: [],
  resClusterOther: "",
  //Research Standards
  resStandards: [],
  resStandardsTrade: "",
  // Professor
  userID: "",
  nameTH: "",
  nameENG: "",
  Hindex: "",
  inveninno: "",
  participation: "",
  periodYear: "",
  periodStart: "",
  periodEnd: "",
  //FileForm
  typeFile: "Research_KRIS",
  file: null,
  //วันที่ส่งเอกสาร
  docSubmitDate: "",
  //satatus
  statusForm: "ตรวจสอบ",
  money: "0"
});

//วันที่ส่งเอกสาร
const datetime = new Date();
// Extract year, month, and day
const year = datetime.getFullYear();
const month = String(datetime.getMonth() + 1).padStart(2, '0'); // Months are 0-based
const day = String(datetime.getDate()).padStart(2, '0');
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

const handleCheckbox = (key, value) => {
  if (!Array.isArray(formData[key])) {
    // Ensure formData[key] is an array
    formData[key] = [];
    
  }

  if (formData[key].includes(value)) {
    // Remove the value if it exists in the array
    formData[key] = formData[key].filter((item) => item !== value);
  } else {
    // Add the value to the array
    formData[key].push(value);
  }

  console.log(`${key} updated:`, formData[key]);
};

const handleCheckStandards = (key, value) => {
  if (!Array.isArray(formData[key])) {
    // Ensure formData[key] is an array
    formData[key] = [];

  }

  if (formData[key].includes(value)) {
    // Remove the value if it exists in the array
    formData[key] = formData[key].filter((item) => item !== value);
  } else {
    // Add the value to the array
    formData[key].push(value);
  }

  console.log(`${key} updated Standards:`, formData[key]);
};


const handleCheckTrade = (key, value) => {
  if (!Array.isArray(formData[key])) {
    // Ensure formData[key] is an array
    formData[key] = [];
    
  }

  if (formData[key].includes(value)) {
    // Remove the value if it exists in the array
    formData[key] = formData[key].filter((item) => item !== value);
  } else {
    // Add the value to the array
    formData[key].push(value);
  }

  console.log(`${key} updated Trade:`, formData[key]);
};

const handleFile = (event, fieldName) => {
  const file = event.target.files[0];
  if (file) {
    formData[fieldName] = file;
    console.log(`File assigned to ${fieldName}:`, formData[fieldName]);
    console.log("Updated formData:", formData);
  } else {
    console.error(`No file selected for ${fieldName}.`);
  }
};

//isLoading เพื่อแสดงสถานะว่ากำลังโหลดข้อมูล
const isLoading = ref(true);
// ตัวแปรสำหรับเก็บข้อมูลจาก backend
const fetchProfessorData = async () => {
  try {
    const response = await axios.get("http://localhost:3000/user/1");
    // formData.asdf = response.data;
    formData.userID = response.data.user_id;
    formData.nameTH = response.data.user_nameth;
    formData.nameENG = response.data.user_nameeng;
    console.log("get user: ", response.data);
  } catch (error) {
    console.error("Error fetching professor data:", error);
  } finally {
    isLoading.value = false;
  }
  console.log("Fetching professor data...");
};

const NewScolar = async () => {
  try {
    console.log("before postScolar", formData)
    console.log("formData as JSON:", JSON.stringify(formData, null, 2));
    console.log("before userID: ", JSON.stringify(formData));

    const Dataforbackend = {
      user_id: formData.userID,
      name_research_th: formData.projectTH,
      name_research_en: formData.projectENG,
      research_cluster: formData.resCluster,
      res_cluster_other: formData.resClusterOther,
      res_standard: formData.resStandards,
      res_standard_trade: formData.resStandardsTrade,
      h_index: formData.Hindex,
      his_inveninno: formData.inveninno,
      participation_percen: formData.participation,
      year: formData.periodYear,
      project_periodStart: formData.periodStart,
      project_periodEnd: formData.periodEnd,
      doc_submit_date: formData.docSubmitDate,

      type: formData.typeFile,
      kris_file: formData.file,

      form_status: formData.statusForm,
      form_money: formData.money,
    }
    console.log("postScolar: ", JSON.stringify(Dataforbackend));
    const response = await axios.post(
      "http://localhost:3000/kris",
      Dataforbackend,
      {
        headers: {
          "Content-Type": "multipart/form-data", // Required for file uploads
        },
      }
    );
    alert("Have new Scolar!");
    console.log("res: ", response);
    console.log("allpostPC: ", message.value);
    console.log("postPC: ", response.data);

  }catch (error) {
    console.error(error);
    message.value = "Error adding Scolar. Please try again.";
  }
}

// ดึงข้อมูลเมื่อ component ถูกโหลด
onMounted(() => {
  fetchProfessorData();
});

</script>
