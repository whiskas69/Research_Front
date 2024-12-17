<template>
  <Mainbox>
    <SectionWrapper>
      <TextInputLabelLeft
      :label="props.Professor.Name.label"
      :customLabel="props.Professor.Name.customLabel"
      :placeholder="props.Professor.Name.placeholder"
      :disabled="props.Professor.Name.disabled" />

      <TextInputLabelLeft
      :label="props.Professor.Position.label"
      :customLabel="props.Professor.Position.customLabel"
      :placeholder="props.Professor.Position.placeholder"
      :disabled="props.Professor.Position.disabled" />

      <div class="flex flex-row">
        <TextInputLabelLeft :label="props.Professor.Textother1.label" :customLabel="props.Professor.Textother1.customLabel"
        :customInput="props.Professor.Textother1.customInput"
        :customDiv="props.Professor.Textother1.customDiv"
        :disabled="props.Professor.Textother1.disabled"
       />
        <TextInputLabelLeft :label="props.Professor.Textother2.label" :customLabel="props.Professor.Textother2.customLabel"
        :customInput="props.Professor.Textother2.customInput" :type="props.Professor.Textother2.type"
        :disabled="props.Professor.Textother2.disabled"/>
      </div>

      <p class="text-red-500 text-sm">สามารถตรวจสอบรายชื่อ List
        ของคณะได้ที่เว็บไซต์คณะที่ Share online-การวิจัย และ
        <a href="https://erp.it.kmitl.ac.th/journal_conf_list">https://erp.it.kmitl.ac.th/journal_conf_list</a>
      </p>
    </SectionWrapper>
  </Mainbox>
</template>

<script setup>
import { ref } from "vue";

import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import TextInputLabelLeft from "@/components/Input/TextInputLabelLeft.vue";

const props = defineProps({
  Professor: {
    type: Object,
    required: true,
  }
})
</script>
