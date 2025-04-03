<template>
  <Mainbox>
    <p class="text-lg font-bold">3. ผู้ขอรับการสนับสนุน</p>

    <SectionWrapper>
      <div v-for="(value, key) in props.AuthForm" :key="key">
        <RadioInput :label="value.label" :name="value.name" :disabled="value.disabled" />
      </div>
    </SectionWrapper>
    <!-- <button @click="submitForm" class="btn btn-primary mt-5">Submit</button> -->
  </Mainbox>
</template>

<script setup>
import { ref } from "vue";
// import type { PropType } from 'vue';
import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import RadioInput from "@/components/Input/RadioInput.vue";

// For reciving data from ConferUse.vue in tag Author
const props = defineProps({
  AuthForm: {
    type: Object,
    required: true,
  },
});

// ฟอร์มข้อมูล
const formData = ref({
  travel: { start: "", end: "" },
  researchName: "",
  conferenceName: "",
});

// ส่งข้อมูลไปยัง backend
const submitForm = async () => {
  try {
    const response = await fetch("https://api.yourbackend.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData.value),
    });

    if (response.ok) {
      console.log("Data saved successfully!");
    } else {
      console.log("Failed to save data");
    }
  } catch (error) {
    console.log("Error:", error);
  }
};
</script>
