<template>
  <Mainbox>
    <SectionWrapper>
      <div v-for="(value, key) in props.AssociateForm" :key="key">
        <p v-if="value.name == 'maintext'" class="text-lg font-bold">{{ value.label }}</p>
        <div v-if="value.name == 'comment'" class="px-2">
          <RadioInput :label="value.label" :name="value.name" :disabled="value.disabled"/>
        </div>

        <div v-if="value.name == 'textArea'">
          <TextArea :label="value.label" :disabled="value.disabled"/>
        </div>
      </div>

    </SectionWrapper>
  </Mainbox>
</template>

<script setup>
import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import RadioInput from "@/components/Input/RadioInput.vue";
import TextArea from "@/components/Input/TextArea.vue";

const props = defineProps({
  AssociateForm: {
    type: Object,
    required: true,
  },
});

</script>
