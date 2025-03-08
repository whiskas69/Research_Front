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
              customLabel="w-64"
              :placeholder="formData.kris.name_research_th"
              disabled="true"
            />
            <TextInputLabelLeft
              label="(ภาษาอังกฤษ)"
              customLabel="w-64"
              :placeholder="formData.kris.name_research_en"
              disabled="true"
            />
          </SectionWrapper>
        </div>

        <div class="py-2 px-5">
          <p class="font-bold">
            2. สอดคล้องกับกลุ่มวิจัย (Research Cluster) ของ สจล.
          </p>

          <SectionWrapper>
            <div class="flex flex-row w-full">
              <div class="flex flex-col w-2/3">
                {{ formData.kris.research_cluster }}
                <CheckInput
                  class="pb-3"
                  label="ICT: Robotics & Automation"
                  v-model="formData.ictRA"
                  :checked="
                    formData.ictRA == 'ICT: Robotics & Automation'
                      ? true
                      : false
                  "
                  disabled="false"
                />

                <CheckInput
                  class="pb-3"
                  label="ICT: Smart City & IoT"
                  v-model="formData.ictSCI"
                  :checked="
                    formData.ictSCI == 'ICT: Smart City & IoT' ? true : false
                  "
                  disabled="false"
                />

                <CheckInput
                  class="pb-3"
                  label="Battery & EV"
                  v-model="formData.battEV"
                  :checked="formData.battEV == 'Battery & EV' ? true : false"
                  disabled="false"
                />

                <CheckInput
                  class="pb-3"
                  label="Renewable Energy"
                  v-model="formData.renEnergy"
                  :checked="
                    formData.renEnergy == 'Renewable Energy' ? true : false
                  "
                  disabled="false"
                />

                <CheckInput
                  class="pb-3"
                  label="Biomedical"
                  v-model="formData.biomedical"
                  :checked="formData.biomedical == 'Biomedical' ? true : false"
                  disabled="false"
                />
              </div>

              <div class="flex flex-col w-full">
                <CheckInput
                  class="pb-3"
                  label="Agriculture & Food"
                  v-model="formData.agricFood"
                  :checked="
                    formData.agricFood == 'Agriculture & Food' ? true : false
                  "
                  disabled="false"
                />

                <CheckInput
                  class="pb-3"
                  label="Future Mobility & Logistic"
                  v-model="formData.fml"
                  :checked="
                    formData.fml == 'Future Mobility & Logistic' ? true : false
                  "
                  disabled="false"
                />

                <CheckInput
                  class="pb-3"
                  label="Materials"
                  v-model="formData.materials"
                  :checked="formData.materials == 'Materials' ? true : false"
                  disabled="false"
                />

                <CheckInput
                  class="pb-3"
                  label="Creative Economy"
                  v-model="formData.creatEco"
                  :checked="
                    formData.creatEco == 'Creative Economy' ? true : false
                  "
                  disabled="false"
                />

                <div class="flex flex-row items-center">
                  <CheckInput
                    class="flex items-center w-[125px]"
                    label="อื่น ๆ ระบุ"
                    customDiv="max-w-32"
                    v-model="formData.other"
                    :checked="formData.other == 'อื่น ๆ' ? true : false"
                    disabled="false"
                  />
                  <TextInputLabelLeft
                    v-if="formData.other == 'อื่น ๆ' ? true : false"
                    label=""
                    :placeholder="formData.kris.res_cluster_other"
                    disabled="true"
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
                v-model="formData.animal"
                :checked="
                  formData.animal == 'มีการใช้สัตว์ทดลอง' ? true : false
                "
                disabled="false"
              />

              <CheckInput
                class="pb-3"
                label="มีการวิจัยในมนุษย์"
                v-model="formData.human"
                :checked="formData.human == 'มีการวิจัยในมนุษย์' ? true : false"
                disabled="false"
              />

              <CheckInput
                class="pb-3"
                label="มีการวิจัยด้านเทคโนโลยีชีวภาพสมัยใหม่หรือพันธุวิศวกรรม"
                v-model="formData.tech"
                :checked="
                  formData.tech ==
                  'มีการวิจัยด้านเทคโนโลยีชีวภาพสมัยใหม่หรือพันธุวิศวกรรม'
                    ? true
                    : false
                "
                disabled="false"
              />

              <CheckInput
                class="pb-3"
                label="มีการใช้พันธุ์พืช"
                v-model="formData.plants"
                :checked="formData.plants == 'มีการใช้พันธุ์พืช' ? true : false"
                disabled="false"
              />
              <div class="flex flex-row items-center ml-10">
                <RadioInput
                  class="flex items-center w-1/3"
                  label="มาตรา 52 (เพื่อประโยชน์ทางการค้า)"
                  customDiv="max-w-80"
                  disabled="false"
                  :checked="
                    formData.kris.res_standard_trade == 'มาตรา 52'
                      ? true
                      : false
                  "
                  v-model="formData.kris.res_standard_trade"
                />
                <RadioInput
                  class="flex items-center"
                  label="มาตรา 53 (ไม่มีวัตถุประสงค์เพื่อประโยชน์ทางการค้า)"
                  disabled="false"
                  :checked="
                    formData.kris.res_standard_trade == 'มาตรา 53'
                      ? true
                      : false
                  "
                  v-model="formData.kris.res_standard_trade"
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
                customLabel="w-64"
                :placeholder="formData.user.user_nameth"
                disabled="true"
              />
              <TextInputLabelLeft
                label="ชื่อ - สกุล (ภาษาอังกฤษ)"
                customLabel="w-64"
                :placeholder="formData.user.user_nameeng"
                disabled="true"
              />

              <div class="flex flex-col">
                <TextInputLabelLeft
                  label="ดัชนี H-Index"
                  customLabel="w-64"
                  :placeholder="formData.kris.h_index"
                  disabled="true"
                />
                <p class="text-sm text-blue-500 py-2 mx-52">
                  (search ชื่อตนเองในฐาน https://www.scopus.com/)
                </p>
              </div>
              <TextInputLabelLeft
                label="ประวัติด้านสิ่งประดิษฐ์ หรือ นวัตกรรม"
                customLabel="w-3/12"
                :placeholder="formData.kris.his_invention"
                disabled="true"
              />
              <div class="flex flex-row">
                <TextInputLabelLeft
                  label="ร้อยละการมีส่วนร่วมในโครงการ"
                  customLabel="w-[530px]"
                  customDiv="max-w-[600px]"
                  customInput="w-32"
                  :placeholder="formData.kris.participation_percent"
                  disabled="true"
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
                :placeholder="formData.kris.year"
                disabled="true"
              />
              <TextInputLabelLeft
                label="เริ่ม"
                customLabel="w-fit pl-5 mr-2"
                customDiv="max-w-fit"
                customInput="max-w-fit"
                :placeholder="formData.kris.project_periodStart"
                disabled="true"
              />
              <TextInputLabelLeft
                label="สิ้นสุด"
                customLabel="w-fit pl-5 mr-2"
                customDiv="max-w-fit"
                customInput="max-w-fit"
                :placeholder="formData.kris.project_periodEnd"
                disabled="true"
              />
            </div>
          </SectionWrapper>
        </div>
      </Mainbox>

      <Mainbox>
        <p class="text-lg font-bold">เอกสารหลักฐานที่แนบ</p>
        <div class="flex flex-rowitems-center">
          <p>แบบเสนอโครงการวิจัย (Research Project)</p>
          <div class="ml-80">
            <button class="btn bg-[#E85F19] text-white mr-5">ดูเอกสาร</button>
            <button class="btn bg-[#4285F4] text-white">โหลดเอกสาร</button>
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
import { ref, computed, reactive, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import TextInputLabelLeft from "@/components/Input/TextInputLabelLeft.vue";
import TextInputLabelRight from "@/components/Input/TextInputLabelRight.vue";
import CheckInput from "@/components/Input/CheckInput.vue";
import RadioInput from "@/components/Input/RadioInput.vue";

const formData = reactive({
  kris: [],
  user: [],
  //cluster
  ictRA: "",
  ictSCI: "",
  battEV: "",
  renEnergy: "",
  biomedical: "",
  agricFood: "",
  fml: "",
  materials: "",
  creatEco: "",
  other: "",
  //standard
  animal: "",
  human: "",
  tech: "",
  plants: "",
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

const isLoading = ref(true);
// Access route parameters
const route = useRoute();
const id = route.params.id;
console.log("params.id", id);

const fetchOfficerData = async () => {
  try {
    const responseConfer = await axios.get(`http://localhost:3000/kris/${id}`);
    console.log("kris123", responseConfer);
    formData.kris = responseConfer.data;
    console.log("kris123", formData.kris);
    console.log("conf_research", formData.kris.research_cluster);

    const userID = responseConfer.data.user_id;
    const responseUser = await axios.get(
      `http://localhost:3000/user/${userID}`
    );
    console.log("get user: ", responseUser.data);
    formData.user = responseUser.data;
    console.log("user123", formData.user);
    console.log("user_nameth", formData.user.user_nameth);
  } catch (error) {
    console.error("Error fetching Officer data:", error);
  } finally {
    isLoading.value = false;
  }
};
const loopCluster = async () => {
  console.log("in loop");
  fetchOfficerData();
  console.log("formdata, ", formData.kris.research_cluster);
  for (let i = 0; i < formData.kris.research_cluster.length; i++) {
    console.log("checking research_cluster", formData.kris.research_cluster[i]);
    if (formData.kris.research_cluster[i] == "ICT: Robotics & Automation") {
      formData.ictRA = "ICT: Robotics & Automation";
      console.log("Journal have 'ICT: Robotics & Automation'");
    }
    if (formData.kris.research_cluster[i] == "ICT: Smart City & IoT") {
      formData.ictSCI = "ICT: Smart City & IoT";
      console.log("Journal have 'ICT: Smart City & IoT'");
    }
    if (formData.kris.research_cluster[i] == "Battery & EV") {
      formData.battEV = "Battery & EV";
      console.log("Journal have 'Battery & EV'");
    }
    if (formData.kris.research_cluster[i] == "Renewable Energy") {
      formData.renEnergy = "Renewable Energy";
      console.log("Journal have 'Renewable Energy'");
    }
    if (formData.kris.research_cluster[i] == "Biomedical") {
      formData.biomedical = "Biomedical";
      console.log("Journal have 'Biomedical'");
    }
    if (formData.kris.research_cluster[i] == "Agriculture & Food") {
      formData.agricFood = "Agriculture & Food";
      console.log("Journal have 'Agriculture & Food'");
    }
    if (formData.kris.research_cluster[i] == "Future Mobility & Logistic") {
      formData.fml = "Future Mobility & Logistic";
      console.log("Journal have 'Future Mobility & Logistic'");
    }
    if (formData.kris.research_cluster[i] == "Materials") {
      formData.materials = "Materials";
      console.log("Journal have 'Materials'");
    }
    if (formData.kris.research_cluster[i] == "Creative Economy") {
      formData.creatEco = "Creative Economy";
      console.log("Journal have 'Creative Economy'");
    }
    if (formData.kris.research_cluster[i] == "อื่น ๆ") {
      formData.other = "อื่น ๆ";
      console.log("Journal have 'อื่น ๆ'");
    }
  }
};
const loopStandard = async () => {
  console.log("in loop");
  fetchOfficerData();
  console.log("formdata, ", formData.kris.res_standard);
  for (let i = 0; i < formData.kris.res_standard.length; i++) {
    console.log("checking res_standard", formData.kris.res_standard[i]);
    if (formData.kris.res_standard[i] == "มีการใช้สัตว์ทดลอง") {
      formData.animal = "มีการใช้สัตว์ทดลอง";
      console.log("Journal have 'มีการใช้สัตว์ทดลอง'");
    }
    if (formData.kris.res_standard[i] == "มีการวิจัยในมนุษย์") {
      formData.human = "มีการวิจัยในมนุษย์";
      console.log("Journal have 'มีการวิจัยในมนุษย์'");
    }
    if (
      formData.kris.res_standard[i] ==
      "มีการวิจัยด้านเทคโนโลยีชีวภาพสมัยใหม่หรือพันธุวิศวกรรม"
    ) {
      formData.tech = "มีการวิจัยด้านเทคโนโลยีชีวภาพสมัยใหม่หรือพันธุวิศวกรรม";
      console.log(
        "Journal have 'มีการวิจัยด้านเทคโนโลยีชีวภาพสมัยใหม่หรือพันธุวิศวกรรม'"
      );
    }
    if (formData.kris.res_standard[i] == "มีการใช้พันธุ์พืช") {
      formData.plants = "มีการใช้พันธุ์พืช";
      console.log("Journal have 'มีการใช้พันธุ์พืช'");
    }
  }
};
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

    const response = await axios.post(
      `http://localhost:3000/opinionKris`,
      dataForBackend,
      {
        headers: {
          "Content-Type": "application/json", // Required for file uploads
        },
      }
    );
    alert("Have new OfficerPC!");
    console.log("res: ", response);
    console.log("allpostOfficerPC: ", message.value);
    console.log("postOfficerPC: ", response.data);
  } catch (error) {
    console.error(error);
    message.value = "Error adding page_charge. Please try again.";
  }
};
onMounted(async () => {
  await fetchOfficerData();
  loopCluster();
  loopStandard();
});
</script>
