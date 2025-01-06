<template>
  <Mainbox>
    <p class="text-lg font-bold">เอกสารหลักฐานที่แนบ</p>

      <SectionWrapper>
        <FileInput
          :label="props.ResearchForm.File.label"
          :disabled="props.ResearchForm.File.disabled"
        />
      </SectionWrapper>

  </Mainbox>
</template>

<script setup>
import { ref } from "vue";

import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import FileInput from "@/components/Input/FileInput.vue"

// For reciving data from Scolaruse.vue in tag Research
const props = defineProps({
  ResearchForm: {
    type: Object,
    required: true,
  },
});
</script>
