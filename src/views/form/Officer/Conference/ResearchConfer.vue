<template>
<div class="container my-10 mx-auto">
  <ConferenceData :id="id" />
  <HR :id="id" />
  <Mainbox>
    <SectionWrapper>
      <p class="font-bold">ตรวจหลักฐานคุณภาพของการจัดประชุมทางวิชาการ</p>
      <div>
        <p>• คุณภาพของการประชุม ฯ</p>
        <div v-if="formData.conference.quality_meeting == 'good'" class="px-2">
          <p>• อยู่ในระดับดีมาก</p>
          <div class="flex flex-row gap-2">
            <p>• คำนวณจาก {{ formData.score.score_type }}</p>
            <p v-if="formData.score.score_type == 'CORE'">
              มีค่าคะแนน {{ formData.score.core_rank }}
            </p>
            <p v-else>มีค่าคะแนน {{ formData.score.score_result }}</p>
          </div>
        </div>
        <p v-else-if="formData.conference.quality_meeting == 'standard'" class="px-2">
          • อยู่ในระดับมาตรฐาน
        </p>
        <p v-else-if="formData.conference.quality_meeting == ''" class="px-2">
          • ประชุมทางวิชาการที่คณะจัดหรือร่วมจัดในประเทศ และไม่อยู่ในฐานข้อมูลสากล SCOPUS
        </p>
      </div>
      <RadioInput
        label="ข้อมูลถูกต้อง"
        value="approve"
        name="recheckinfo"
        v-model="formData.radioAuthOffic"
      />
      <RadioInput
        label="ข้อมูลไม่ถูกต้อง"
        value="notApproved"
        name="recheckinfo"
        v-model="formData.radioAuthOffic"
      />
      <RadioInput
        label="ตีกลับอาจารย์เพื่อแก้ไขข้อมูล"
        value="return_professor"
        name="recheckinfo"
        v-model="formData.radioAuthOffic"
      />
      <RadioInput
        label="ตีกลับเจ้าหน้าที่ทรัพยากรบุคคลเพื่อแก้ไขข้อมูล"
        value="return_hr"
        name="recheckinfo"
        v-model="formData.radioAuthOffic"
      />
      <textarea
        class="textarea textarea-bordered w-full"
        @input="handleInput('commentReason', $event.target.value)"
      ></textarea>
      <span v-if="v$.radioAuthOffic.$error" class="text-base font-bold text-red-500 text-left">
        {{ v$.radioAuthOffic.$errors[0].$message }}
      </span>
      <span v-if="v$.commentReason.$error" class="text-base font-bold text-red-500 text-left">
        {{ v$.commentReason.$errors[0].$message }}
      </span>
    </SectionWrapper>
  </Mainbox>
  
  <div class="flex justify-end">
    <button @click="OfficerConfer" class="btn btn-success text-white">
      บันทึกข้อมูล
    </button>
  </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers, requiredIf } from "@vuelidate/validators";
import { DateTime } from "luxon";

import { useUserStore } from "@/store/userStore";
import api from "@/setting/api";

import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import RadioInput from "@/components/Input/RadioInput.vue";
import ConferenceData from "@/components/form/DataforOffice/Conference.vue"
import HR from "@/components/form/DataforOffice/HR.vue";

const formData = reactive({
  conference: [],
  score: [],
  docSubmitDate: DateTime.now().toISODate(),
  radioAuthOffic: "",
  commentReason: "",
  returnto: ""
});

const handleInput = (key, value) => {
  formData[key] = value;
};

const rules = computed(() => ({
  radioAuthOffic: {
    required: helpers.withMessage("* กรุณาเลือกข้อมูล *", required),
  },
  commentReason: {
      required: helpers.withMessage(
        "* กรุณากรอกข้อมูล *",
        requiredIf(() => formData.radioAuthOffic !== "approve")
      ),
    },
}));

const v$ = useVuelidate(rules, formData);

const router = useRouter();
const route = useRoute();
const id = route.params.id;

const userStore = useUserStore();
const user = computed(() => userStore.user);

const fetchOfficerData = async () => {
  try {
    const responseConfer = await api.get(`/conference/${id}`);
    formData.conference = responseConfer.data;

    const responseScore = await api.get(`/score/${id}`);
    formData.score = responseScore.data;

  } catch (error) {
    console.log("Error fetching Officer data:", error);
  }
};

const statusMap = {
  approve: "finance",
  notApproved: "notApproved",
  return_professor: "return",
  return_hr: "return",
}

const returnMap = {
  approve: null,
  notApproved: null,
  return_professor: "professor",
  return_hr: "hr"
}

const resultMap = {
  approve: "approve",
  notApproved: "notApproved",
  return_professor: "return",
  return_hr: "return"
}

const OfficerConfer = async () => {
  const result = await v$.value.$validate();

  if (result) {
    if (confirm("ยืนยันข้อมูลถูกต้อง") == false) {
      return false;
    }

    try {
      const dataForBackend = {
        conf_id: id,
        updated_data: [
          { field : 'research_id', value : user.value?.user_id },
          { field : 'c_research_result', value : resultMap[formData.radioAuthOffic] },
          { field : 'c_research_reason', value : formData.commentReason },
          { field : 'research_doc_submit_date', value : formData.docSubmitDate },
        ],
        form_status: statusMap[formData.radioAuthOffic],
        returnto: returnMap[formData.radioAuthOffic]
      };

      await api.put(`/opinionConf/${id}`, dataForBackend);

      alert("บันทึกข้อมูลเรียบร้อยแล้ว");
      router.push("/officer");
    } catch (error) {
      console.log("Error saving code : ", error);
      alert("ไม่สามารถส่งข้อมูล โปรดลองอีกครั้งในภายหลัง");
    }
  } else {
    alert("โปรดกรอกข้อมูลให้ครบถ้วน และถูกต้อง");

    console.log("Validation failed:", v$.value.$errors);
  }
};

onMounted(async () => {
  await fetchOfficerData();
});
</script>
