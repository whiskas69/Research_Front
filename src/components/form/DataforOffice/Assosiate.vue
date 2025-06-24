<template>
    <div class="container my-10 mx-auto">
    <Mainbox v-if="props.type == 'Conference'">
        <SectionWrapper>
          <p class="text-lg font-bold">รองคณบดีฝ่ายงานวิจัย</p>
          <div class="px-2">
            <RadioInput
              label="เห็นชอบ"
              value="agree"
              name="comment"
              :disabled="true"
              v-model="formData.offic.c_deputy_dean"
            />
          </div>
          <div class="px-2">
            <RadioInput
              label="ไม่เห็นชอบ"
              value="disagree"
              name="comment"
              :disabled="true"
              v-model="formData.offic.c_deputy_dean"
            />
          </div>
        </SectionWrapper>
      </Mainbox>

      <Mainbox v-if="props.type == 'Page_Charge'">
        <SectionWrapper>
          <p class="text-lg font-bold">รองคณบดีฝ่ายงานวิจัย</p>
          <div class="px-2">
            <RadioInput
              label="เห็นด้วย"
              value="agree"
              name="comment"
              :disabled="true"
              v-model="formData.offic.p_deputy_dean"
            />
          </div><div class="px-2">
            <RadioInput
              label="ไม่เห็นด้วย"
              value="disagree"
              name="comment"
              :disabled="true"
              v-model="formData.offic.p_deputy_dean"
            />
          </div>
        </SectionWrapper>
      </Mainbox>
    </div>
</template>

<script setup>
import { ref, onMounted, reactive } from "vue";
import api from "@/setting/api";

import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import RadioInput from "@/components/Input/RadioInput.vue";

const formData = reactive({
  offic: [],
});

const props = defineProps(["id", "type"]);
const isLoading = ref(true);
console.log("params.id", props.id);
console.log("params.type", props.type);

const fetchOfficerData = async () => {
  try {
    if (props.type == "Conference") {
      const responseoffic = await api.get(`/opinionConf/${props.id}`);
      formData.offic = responseoffic.data;
    } else if (props.type == "Page_Charge") {
      const responseoffic = await api.get(`/opinionPC/${props.id}`);
      formData.offic = responseoffic.data;

      
    }
  } catch (error) {
    console.log("Error fetching Officer data:", error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchOfficerData();
});
</script>