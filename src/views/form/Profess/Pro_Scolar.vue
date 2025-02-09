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
              customLabel="w-3/12"
              v-model="formData.projectTH"
              @input="handleInput('projectTH', $event.target.value)"
            />

            <span v-for="error in v$.projectTH.$errors" :key="error.$uid" class="text-base text-right w-2/6 text-red-500">
              * โปรดกรอกข้อมูล *
            </span>

            <TextInputLabelLeft
              label="(ภาษาอังกฤษ)"
              customLabel="w-3/12"
              v-model="formData.projectENG"
              @input="handleInput('projectENG', $event.target.value)"
            />
            <span v-for="error in v$.projectENG.$errors" :key="error.$uid" class="text-base text-right w-2/6 text-red-500">
              * โปรดกรอกข้อมูล *
            </span>

          </SectionWrapper>
        </div>

        <div class="py-2 px-5">
          <p class="font-bold">
            2. สอดคล้องกับกลุ่มวิจัย (Research Cluster) ของ สจล.
          </p>
          <SectionWrapper>
            <div class="flex flex-row w-full">
              <div class="flex flex-col w-2/3">
                <CheckInput
                  class="pb-3"
                  label="ICT: Robotics & Automation"
                  v-model="formData.resCluster"
                  @input="
                    handleCheckbox('resCluster', 'ICT: Robotics & Automation')
                  "
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
                  @input="handleCheckbox('resCluster', 'Battery & EV')"
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
                  @input="handleCheckbox('resCluster', 'Biomedical')"
                />
              </div>

              <div class="flex flex-col w-full">
                <CheckInput
                  class="pb-3"
                  label="Agriculture & Food"
                  v-model="formData.resCluster"
                  @input="handleCheckbox('resCluster', 'Agriculture & Food')"
                />
                <CheckInput
                  class="pb-3"
                  label="Future Mobility & Logistic"
                  v-model="formData.resCluster"
                  @input="
                    handleCheckbox('resCluster', 'Future Mobility & Logistic')
                  "
                />
                <CheckInput
                  class="pb-3"
                  label="Materials"
                  v-model="formData.resCluster"
                  @input="handleCheckbox('resCluster', 'Materials')"
                />
                <CheckInput
                  class="pb-3"
                  label="Creative Economy"
                  v-model="formData.resCluster"
                  @input="handleCheckbox('resCluster', 'Creative Economy')"
                />
                <div class="flex flex-row items-center">
                  <CheckInput
                    class="flex items-center w-[125px]"
                    label="อื่น ๆ ระบุ"
                    customDiv="max-w-32"
                    v-model="formData.resCluster"
                    @input="handleCheckbox('resCluster', 'อื่น ๆ')"
                  />
                  <TextInputLabelLeft
                    label=""
                    v-model="formData.resClusterOther"
                    @input="handleInput('resClusterOther', $event.target.value)"
                  />
                </div>
              </div>
            </div>

            <span v-for="error in v$.resCluster.$errors" :key="error.$uid" class="ml-5 text-base w-2/6 text-red-500">
              * โปรดเลือกข้อมูลอย่างน้อย 1 ตัวเลือก *
            </span>

            <div>
              <p v-for="error in v$.resClusterOther.$errors" :key="error.$uid" class="ml-5 text-base w-2/6 text-red-500">
              * โปรดกรอกข้อมูลของงานวิจัย *
              </p>
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
                @input="
                  handleCheckStandards('resStandards', 'มีการใช้สัตว์ทดลอง')
                "
              />
              <CheckInput
                class="pb-3"
                label="มีการวิจัยในมนุษย์"
                v-model="formData.resStandards"
                @input="
                  handleCheckStandards('resStandards', 'มีการวิจัยในมนุษย์')
                "
              />
              <CheckInput
                class="pb-3"
                label="มีการวิจัยด้านเทคโนโลยีชีวภาพสมัยใหม่หรือพันธุวิศวกรรม"
                v-model="formData.resStandards"
                @input="
                  handleCheckStandards(
                    'resStandards',
                    'มีการวิจัยด้านเทคโนโลยีชีวภาพสมัยใหม่หรือพันธุวิศวกรรม'
                  )
                "
              />
              <CheckInput
                class="pb-3"
                label="มีการใช้พันธุ์พืช"
                v-model="formData.resStandards"
                @input="
                  handleCheckStandards('resStandards', 'มีการใช้พันธุ์พืช')
                "
              />

              <div class="flex flex-row items-center ml-10">
                <CheckInput
                  class="flex items-center w-1/3"
                  label="มาตรา 52 (เพื่อประโยชน์ทางการค้า)"
                  customDiv="max-w-80"
                  v-model="formData.resStandardsTrade"
                  @input="handleCheckTrade('resStandardsTrade', 'มาตรา 52')"
                />
                <CheckInput
                  class="flex items-center"
                  label="มาตรา 53 (ไม่มีวัตถุประสงค์เพื่อประโยชน์ทางการค้า)"
                  v-model="formData.resStandardsTrade"
                  @input="handleCheckTrade('resStandardsTrade', 'มาตรา 53')"
                />
              </div>
            </div>
            <span v-for="error in v$.resStandards.$errors" :key="error.$uid" class="ml-5 text-base w-2/6 text-red-500">
              * โปรดเลือกข้อมูลอย่างน้อย 1 ตัวเลือก *
            </span>
            <span v-for="error in v$.resStandardsTrade.$errors" :key="error.$uid" class="ml-10 text-base w-2/6 text-red-500">
              * โปรดเลือกข้อมูล *
            </span>
          </SectionWrapper>
        </div>

        <div class="py-5 px-5">
          <p class="font-bold">4. ข้อมูลนักวิจัย</p>
          <SectionWrapper>
            <p>4.1 ข้อมูลผู้ขอทุน (หัวหน้าโครงการ)</p>
            <div class="grid px-5 gap-3">
              <TextInputLabelLeft
                label="ชื่อ - สกุล (ภาษาไทย)"
                customLabel="w-3/12"
                :placeholder="formData.nameTH"
                disabled="true"
              />
              <span v-for="error in v$.nameTH.$errors" :key="error.$uid" class="text-base text-right w-2/5 text-red-500">
              * โปรดกรอกข้อมูลในหน้าผู้ใช้  *
            </span>
              <TextInputLabelLeft
                label="ชื่อ - สกุล (ภาษาอังกฤษ)"
                customLabel="w-3/12"
                :placeholder="formData.nameENG"
                disabled="true"
              />
              <span v-for="error in v$.nameENG.$errors" :key="error.$uid" class="text-base text-right w-2/5 text-red-500">
              * โปรดกรอกข้อมูลในหน้าผู้ใช้  *
            </span>
              <div class="flex flex-col">
                <TextInputLabelLeft
                  label="ดัชนี H-Index"
                  customLabel="w-3/12"
                  v-model="formData.Hindex"
                  @input="handleInput('Hindex', $event.target.value)"
                />
                <p class="text-sm text-blue-500 py-2 px-48">
                  (search ชื่อตนเองในฐาน https://www.scopus.com/)
                </p>
              </div>
              <span v-for="error in v$.Hindex.$errors" :key="error.$uid" class="text-base text-right w-4/12 text-red-500">
              * โปรดกรอกข้อมูล *
            </span>
              <TextInputLabelLeft
                label="ประวัติด้านสิ่งประดิษฐ์ หรือ นวัตกรรม"
                customLabel="w-3/12"
                v-model="formData.inveninno"
                @input="handleInput('inveninno', $event.target.value)"
              />
              <span v-for="error in v$.inveninno.$errors" :key="error.$uid" class="text-base text-right w-4/12 text-red-500">
              * โปรดกรอกข้อมูล *
            </span>
              <div class="flex flex-row">
                <TextInputLabelLeft
                  label="ร้อยละการมีส่วนร่วมในโครงการ"
                  customLabel="w-[530px]"
                  customDiv="max-w-[600px]"
                  customInput="w-32"
                  v-model="formData.participation"
                  @input="handleInput('participation', $event.target.value)"
                />
                <span class="text-sm text-red-500 w-1/6 flex items-center"
                  >(สัดส่วนการวิจัย)</span
                >
              </div>
              <span v-for="error in v$.participation.$errors" :key="error.$uid" class="text-base text-right w-4/12 text-red-500">
              * โปรดกรอกข้อมูล *
            </span>
            </div>
          </SectionWrapper>
        </div>

        <div class="py-2 px-5">
          <p class="font-bold">
            5. ระยะเวลาโครงการ<span class="font-bold text-red-500"
              >(ระบุจำนวนปีและระยะเริ่มต้นจนสิ้นสุดโครงการ)</span
            >
          </p>
          
          <SectionWrapper>
            <div class="flex flex-row w-full">
              <TextInputLabelRight
                label="ปี"
                customLabel="w-fit"
                customDiv="max-w-32"
                customInput="max-w-24"
                v-model="formData.periodYear"
                @input="handleInput('periodYear', $event.target.value)"
              />
              <TextInputLabelLeft
                label="เริ่ม"
                type="date"
                customLabel="w-fit pl-5 mr-2"
                customDiv="max-w-fit"
                customInput="max-w-fit"
                v-model="formData.periodStart"
                @input="handleInput('periodStart', $event.target.value)"
              />
              <TextInputLabelLeft
                label="สิ้นสุด"
                type="date"
                customLabel="w-fit pl-5 mr-2"
                customDiv="max-w-fit"
                customInput="max-w-fit"
                v-model="formData.periodEnd"
                @input="handleInput('periodEnd', $event.target.value)"
              />
            </div>
            <span v-for="error in v$.periodYear.$errors" :key="error.$uid" class=" w-4/12 text-red-500">
              * โปรดกรอกข้อมูลระยะเวลา *
            </span>
            <span v-for="error in v$.periodStart.$errors" :key="error.$uid" class=" w-4/12 text-red-500">
              * โปรดกรอกข้อมูลวันที่เริ่มต้น *
            </span>
            <span v-for="error in v$.periodEnd.$errors" :key="error.$uid" class=" w-4/12 text-red-500">
              * โปรดกรอกข้อมูลวันที่สิ้นสุด *
            </span>
          </SectionWrapper>
        </div>
      </Mainbox>
      <Mainbox>
        <p class="text-lg font-bold">เอกสารหลักฐานที่แนบ</p>
        <SectionWrapper>
          <FileInput
            label="แบบเสนอโครงการวิจัย (Research Project)"
            type="file"
            @change="handleFile($event, 'file')"
          />
          <span v-for="error in v$.file.$errors" :key="error.$uid" class="w-4/12 text-red-500">
            * โปรดเลือกไฟล์ *
            </span>
        </SectionWrapper>
      </Mainbox>

      <div class="flex justify-end">
        <button @click="NewScolar" class="btn btn-success text-white">
          บันทึกข้อมูล
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, reactive, onMounted } from "vue";

import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

import { useUserStore } from "@/store/userStore";
import api from "@/setting/api";

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
  file: null,
});

//validate rule
const rules = {
  projectTH: { required },
  projectENG: { required },
  resCluster: { required },
  resClusterOther: {},
  resStandards: { required },
  resStandardsTrade: { required },
  userID: { required },
  nameTH: {  },
  nameENG: { required },
  Hindex: { required },
  inveninno: { required },
  participation: { required },
  periodYear: { required },
  periodStart: { required },
  periodEnd: { required },

  //FileForm
  file: { required },
};

const v$ = useVuelidate(rules, formData);

//ดึงข้อมูล user
const userStore = useUserStore();
const user = computed(() => userStore.user);

onMounted(async () => {
  await userStore.fetchUser();

  //อัปเดตค่า
  formData.userID = user.value?.user_id;
  formData.nameTH = user.value?.user_nameth || "";
  formData.nameENG = user.value?.user_nameeng || "";
});

const handleInput = (key, value) => {
  formData[key] = value;
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
};

const handleFile = (event, fieldName) => {
  const file = event.target.files[0];
  if (file) {
    formData[fieldName] = file;
  } else {
    console.log(`No file selected for ${fieldName}.`);
  }
};

const NewScolar = async () => {
  const result = await v$.value.$validate();

  if (result) {
    try {
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

        kris_file: formData.file,
      };

      const response = await api.post(
        "http://localhost:3000/kris",
        Dataforbackend,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Required for file uploads
          },
        }
      );

      alert("ข้อมูลถูกส่งให้เจ้าหน้าที่เรียบร้อย !!");
    } catch (error) {
      console.log("Error saving code : ", error);

      alert("ไม่สามารถส่งข้อมูล โปรดลองอีกครั้งในภายหลัง");
    }

  } else {
    alert("โปรดกรอกข้อมูลให้ครบถ้วน")
  }
};
</script>
