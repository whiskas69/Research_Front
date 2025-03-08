<template>
  <Mainbox>

    <SectionWrapper>
      <p class="text-lg font-bold">เอกสารหลักฐานที่แนบ</p>

      <div v-for="(value, key) in props.FileForm" :key="key">

        <FileInput v-if="value.name != 'Second' && value.name != 'Ninth'" :label="value.label"
          :customLabel="value.customLabel" :span="value.span" :customSpan="value.customSpan" />

        <FileInputWithInput v-if="value.name == 'Second' || value.name == 'Ninth'" :label="value.label"
          :customLabel="value.customLabel" :span="value.span" :customSpan="value.customSpan" />
      </div>

    </SectionWrapper>

  </Mainbox>
</template>

<script setup>
import { ref } from "vue";

import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import FileInput from "@/components/Input/FileInput.vue"
import FileInputWithInput from "@/components/Input/FileInputWithInput.vue";

// For reciving data from Kris.vue in tag Research
const props = defineProps({
  FileForm: {
    type: Object,
    required: true,
  },
});
</script>
