<template>
  <div>
    <div class="container my-10 mx-auto">
      <ConferenceData :id="id" />
      <HR :id="id" />
      <Mainbox>
        <SectionWrapper>
          <p class="font-bold">ตรวจหลักฐานคุณภาพของการจัดประชุมทางวิชาการ</p>
          <div>
            <p>• คุณภาพของการประชุม ฯ</p>
            <div
              v-if="formData.conference.quality_meeting == 'good'"
              class="px-2"
            >
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
              • ประชุมทางวิชาการที่คณะจัดหรือร่วมจัดในประเทศ
              และไม่อยู่ในฐานข้อมูลสากล SCOPUS
            </p>
          </div>
          <RadioInput
            label="ข้อมูลถูกต้อง"
            value="approve"
            name="re"
            v-model="formData.radioAuthOffic"
            @change="handleInput('radioAuthOffic', $event.target.value)"
          />
          <RadioInput
            label="ข้อมูลไม่ถูกต้อง"
            value="notApproved"
            name="re"
            v-model="formData.radioAuthOffic"
            @change="handleInput('radioAuthOffic', $event.target.value)"
          />
          <RadioInput
            label="ตีกลับอาจารย์เพื่อแก้ไขข้อมูล"
            value="returnSender"
            name="re"
            v-model="formData.radioAuthOffic"
            @change="handleInput('radioAuthOffic', $event.target.value)"
          />
          <RadioInput
            label="ตีกลับเจ้าหน้าที่ทรัพยากรบุคคลเพื่อแก้ไขข้อมูล"
            value="returnHr"
            name="re"
            v-model="formData.radioAuthOffic"
            @change="handleInput('radioAuthOffic', $event.target.value)"
          />
          <textarea
            class="textarea textarea-bordered w-full"
            @input="handleInput('description', $event.target.value)"
          ></textarea>

          <span
            v-if="v$.radioAuthOffic.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.radioAuthOffic.$errors[0].$message }}
          </span>
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
import { useVuelidate } from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import { DateTime } from "luxon";

import { useUserStore } from "@/store/userStore";
import api from "@/setting/api";

import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import RadioInput from "@/components/Input/RadioInput.vue";
import ConferenceData from "@/components/form/DataforOffice/Conference.vue"
import HR from "@/components/form/DataforOffice/HR.vue";

const formData = reactive({
  offic: [],
  conference: [],
  score: [],
  docSubmitDate: DateTime.now().toISODate(),
  radioAuthOffic: "",
  description: "",
  //formStatus: "finance",
});

const handleInput = (key, value) => {
  formData[key] = value;
};

const rules = computed(() => ({
  radioAuthOffic: {
    required: helpers.withMessage("* กรุณาเลือกข้อมูล *", required),
  },
}));

const v$ = useVuelidate(rules, formData);

const isLoading = ref(true);

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

    const responseoffic = await api.get(`/opinionConf/${id}`);
    formData.offic = responseoffic.data;
  } catch (error) {
    console.log("Error fetching Officer data:", error);
  } finally {
    isLoading.value = false;
  }
};

const OfficerConfer = async () => {
  const result = await v$.value.$validate();

  if (result) {
    if (confirm("ยืนยันข้อมูลถูกต้อง") == false) {
      return false;
    }

    try {
      const dataForBackend = {
        hr_id: formData.offic.hr_id,
        conf_id: id,
        c_research_hr: formData.offic.c_research_hr,
        c_reason: formData.offic.c_reason,
        hr_doc_submit_date: DateTime.fromISO(formData.offic.hr_doc_submit_date).toISODate(),
        research_id: user.value?.user_id,
        c_meet_quality: formData.radioAuthOffic,
        c_quality_reason: formData.description,
        research_doc_submit_date: formData.docSubmitDate,
        form_status: formData.radioAuthOffic == "notCorrect" ? "notApproved" : formData.formStatus,
      };

      const response = await api.put(`/opinionConf/${id}`, dataForBackend);
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

onMounted(() => {
  fetchOfficerData();
});
</script>
