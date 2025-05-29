<template>
  <div>
    <div class="container my-10 mx-auto">
      <p class="text-xl font-bold mb-5">
        แบบเสนอโครงการวิจัย ทุนวิจัยส่งเสริมส่วนงานวิชาการ 8989
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
              :disabled="true"
            />
            <TextInputLabelLeft
              label="(ภาษาอังกฤษ)"
              customLabel="w-64"
              :placeholder="formData.kris.name_research_en"
              :disabled="true"
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
                <CheckInput
                  class="pb-3"
                  label="ICT: Robotics & Automation"
                  v-model="formData.ictRA"
                  :checked="formData.ictRA == 'ICT: Robotics & Automation' ? true : false"
                  :disabled="true"
                />
                <CheckInput
                  class="pb-3"
                  label="ICT: Smart City & IoT"
                  v-model="formData.ictSCI"
                  :checked="formData.ictSCI == 'ICT: Smart City & IoT' ? true : false"
                  :disabled="true"
                />
                <CheckInput
                  class="pb-3"
                  label="Battery & EV"
                  v-model="formData.battEV"
                  :checked="formData.battEV == 'Battery & EV' ? true : false"
                  :disabled="true"
                />
                <CheckInput
                  class="pb-3"
                  label="Renewable Energy"
                  v-model="formData.renEnergy"
                  :checked="formData.renEnergy == 'Renewable Energy' ? true : false"
                  :disabled="true"
                />
                <CheckInput
                  class="pb-3"
                  label="Biomedical"
                  v-model="formData.biomedical"
                  :checked="formData.biomedical == 'Biomedical' ? true : false"
                  :disabled="true"
                />
              </div>

              <div class="flex flex-col w-full">
                <CheckInput
                  class="pb-3"
                  label="Agriculture & Food"
                  v-model="formData.agricFood"
                  :checked="formData.agricFood == 'Agriculture & Food' ? true : false"
                  :disabled="true"
                />
                <CheckInput
                  class="pb-3"
                  label="Future Mobility & Logistic"
                  v-model="formData.fml"
                  :checked="formData.fml == 'Future Mobility & Logistic' ? true : false"
                  :disabled="true"
                />
                <CheckInput
                  class="pb-3"
                  label="Materials"
                  v-model="formData.materials"
                  :checked="formData.materials == 'Materials' ? true : false"
                  :disabled="true"
                />
                <CheckInput
                  class="pb-3"
                  label="Creative Economy"
                  v-model="formData.CreativeEco"
                  :checked="formData.CreativeEco == 'Creative Economy' ? true : false"
                  :disabled="true"
                />

                <div class="flex flex-row items-center">
                  <CheckInput
                    class="flex items-center w-[125px]"
                    label="อื่น ๆ ระบุ"
                    customDiv="max-w-32"
                    v-model="formData.other"
                    :checked="formData.other == 'อื่น ๆ' ? true : false"
                    :disabled="true"
                  />
                  <TextInputLabelLeft
                    v-if="formData.other == 'อื่น ๆ' ? true : false"
                    label=""
                    :placeholder="formData.kris.res_cluster_other"
                    :disabled="true"
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
                :checked="formData.animal == 'มีการใช้สัตว์ทดลอง' ? true : false"
                :disabled="true"
              />
              <CheckInput
                class="pb-3"
                label="มีการวิจัยในมนุษย์"
                v-model="formData.human"
                :checked="formData.human == 'มีการวิจัยในมนุษย์' ? true : false"
                :disabled="true"
              />
              <CheckInput
                class="pb-3"
                label="มีการวิจัยด้านเทคโนโลยีชีวภาพสมัยใหม่หรือพันธุวิศวกรรม"
                v-model="formData.tech"
                :checked="formData.tech == 'มีการวิจัยด้านเทคโนโลยีชีวภาพสมัยใหม่หรือพันธุวิศวกรรม' ? true : false"
                :disabled="true"
              />
              <CheckInput
                class="pb-3"
                label="มีการใช้พันธุ์พืช"
                v-model="formData.plants"
                :checked="formData.plants == 'มีการใช้พันธุ์พืช' ? true : false"
                :disabled="true"
              />
              <div class="flex flex-row items-center ml-10">
                <RadioInput
                  class="flex items-center w-1/3"
                  label="มาตรา 52 (เพื่อประโยชน์ทางการค้า)"
                  customDiv="max-w-80"
                  :disabled="true"
                  :checked="formData.kris.res_standard_trade == 'มาตรา 52' ? true : false"
                  v-model="formData.kris.res_standard_trade"
                />
                <RadioInput
                  class="flex items-center"
                  label="มาตรา 53 (ไม่มีวัตถุประสงค์เพื่อประโยชน์ทางการค้า)"
                  :disabled="true"
                  :checked="formData.kris.res_standard_trade == 'มาตรา 53' ? true : false"
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
                :disabled="true"
              />
              <TextInputLabelLeft
                label="ชื่อ - สกุล (ภาษาอังกฤษ)"
                customLabel="w-64"
                :placeholder="formData.user.user_nameeng"
                :disabled="true"
              />

              <div class="flex flex-col">
                <TextInputLabelLeft
                  label="ดัชนี H-Index"
                  customLabel="w-64"
                  :placeholder="formData.kris.h_index"
                  :disabled="true"
                />
                <p class="text-sm text-blue-500 py-2 mx-52">
                  (search ชื่อตนเองในฐาน https://www.scopus.com/)
                </p>
              </div>
              <TextInputLabelLeft
                label="ประวัติด้านสิ่งประดิษฐ์ หรือ นวัตกรรม"
                customLabel="w-3/12"
                :placeholder="formData.kris.his_invention"
                :disabled="true"
              />
              <div class="flex flex-row">
                <TextInputLabelLeft
                  label="ร้อยละการมีส่วนร่วมในโครงการ"
                  customLabel="w-[530px]"
                  customDiv="max-w-[600px]"
                  customInput="w-32"
                  :placeholder="formData.kris.participation_percent"
                  :disabled="true"
                />
                <span class="text-sm text-red-500 w-1/6 flex items-center">(สัดส่วนการวิจัย)</span>
              </div>
            </div>
          </SectionWrapper>
        </div>

        <div class="py-2 px-5">
          <p class="font-bold">
            5. ระยะเวลาโครงการ
            <span class="font-bold text-red-500">
              (ระบุจำนวนปีและระยะเริ่มต้นจนสิ้นสุดโครงการ)
            </span>
          </p>
          <SectionWrapper>
            <div class="flex flex-row w-full">
              <TextInputLabelRight
                label="ปี"
                customLabel="w-fit"
                customDiv="max-w-32"
                customInput="max-w-24"
                :placeholder="formData.kris.year"
                :disabled="true"
              />
              <TextInputLabelLeft
                label="เริ่ม"
                customLabel="w-fit pl-5 mr-2"
                customDiv="max-w-fit"
                customInput="max-w-fit"
                :placeholder="formatThaiDate(formData.kris.project_periodStart)"
                :disabled="true"
              />
              <TextInputLabelLeft
                label="สิ้นสุด"
                customLabel="w-fit pl-5 mr-2"
                customDiv="max-w-fit"
                customInput="max-w-fit"
                :placeholder="formatThaiDate(formData.kris.project_periodEnd)"
                :disabled="true"
              />
            </div>
          </SectionWrapper>
        </div>
      </Mainbox>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { useRoute } from "vue-router";
import api from "@/setting/api";

import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import TextInputLabelLeft from "@/components/Input/TextInputLabelLeft.vue";
import TextInputLabelRight from "@/components/Input/TextInputLabelRight.vue";
import CheckInput from "@/components/Input/CheckInput.vue";
import RadioInput from "@/components/Input/RadioInput.vue";

const formData = reactive({
  kris: [],
  user: [],
  ictRA: "",
  ictSCI: "",
  battEV: "",
  renEnergy: "",
  biomedical: "",
  agricFood: "",
  fml: "",
  materials: "",
  CreativeEco: "",
  other: "",
  animal: "",
  human: "",
  tech: "",
  plants: "",
});

const isLoading = ref(true);
// Access route parameters
const route = useRoute();
const id = route.params.id;

const formatThaiDate = (dateString) => {
  const date = new Date(dateString);
  const months = [
    "ม.ค.",
    "ก.พ.",
    "มี.ค.",
    "เม.ย.",
    "พ.ค.",
    "มิ.ย.",
    "ก.ค.",
    "ส.ค.",
    "ก.ย.",
    "ต.ค.",
    "พ.ย.",
    "ธ.ค.",
  ];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear() + 543;
  return `${day} ${month} ${year}`;
};

const fetchOfficerData = async () => {
  try {
    const response = await api.get(`/kris/${id}`);
    formData.kris = response.data;

    const userID = response.data.user_id;
    const responseUser = await api.get(`/user/${userID}`);
    formData.user = responseUser.data;
  } catch (error) {
    console.log("Error fetching Officer data:", error);
  } finally {
    isLoading.value = false;
  }
};

const loopCluster = async () => {
  await fetchOfficerData();

  for (let i = 0; i < formData.kris.research_cluster.length; i++) {
    if (formData.kris.research_cluster[i] == "ICT: Robotics & Automation") {
      formData.ictRA = "ICT: Robotics & Automation";
    }
    if (formData.kris.research_cluster[i] == "ICT: Smart City & IoT") {
      formData.ictSCI = "ICT: Smart City & IoT";
    }
    if (formData.kris.research_cluster[i] == "Battery & EV") {
      formData.battEV = "Battery & EV";
    }
    if (formData.kris.research_cluster[i] == "Renewable Energy") {
      formData.renEnergy = "Renewable Energy";
    }
    if (formData.kris.research_cluster[i] == "Biomedical") {
      formData.biomedical = "Biomedical";
    }
    if (formData.kris.research_cluster[i] == "Agriculture & Food") {
      formData.agricFood = "Agriculture & Food";
    }
    if (formData.kris.research_cluster[i] == "Future Mobility & Logistic") {
      formData.fml = "Future Mobility & Logistic";
    }
    if (formData.kris.research_cluster[i] == "Materials") {
      formData.materials = "Materials";
    }
    if (formData.kris.research_cluster[i] == "Creative Economy") {
      formData.CreativeEco = "Creative Economy";
    }
    if (formData.kris.research_cluster[i] == "อื่น ๆ") {
      formData.other = "อื่น ๆ";
    }
  }
};

const loopStandard = async () => {
  await fetchOfficerData();

  for (let i = 0; i < formData.kris.res_standard.length; i++) {
    if (formData.kris.res_standard[i] == "มีการใช้สัตว์ทดลอง") {
      formData.animal = "มีการใช้สัตว์ทดลอง";
    }
    if (formData.kris.res_standard[i] == "มีการวิจัยในมนุษย์") {
      formData.human = "มีการวิจัยในมนุษย์";
    }
    if (
      formData.kris.res_standard[i] ==
      "มีการวิจัยด้านเทคโนโลยีชีวภาพสมัยใหม่หรือพันธุวิศวกรรม"
    ) {
      formData.tech = "มีการวิจัยด้านเทคโนโลยีชีวภาพสมัยใหม่หรือพันธุวิศวกรรม";
    }
    if (formData.kris.res_standard[i] == "มีการใช้พันธุ์พืช") {
      formData.plants = "มีการใช้พันธุ์พืช";
    }
  }
};

onMounted(async () => {
  await fetchOfficerData();
  loopCluster();
  loopStandard();
});
</script>