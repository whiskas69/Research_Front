<template>
  <Mainbox>
    <p class="leading-9 text-lg font-bold"> 1.  รายละเอียดการขออนุมัติเดินทาง</p>

    <SectionWrapper>
      <div class="flex flex-row">
        <TextInputLabelLeft
        :label="props.Travel.StartDate.label" :type="props.Travel.StartDate.type"
          :customLabel="props.Travel.StartDate.customLabel" :customInput="props.Travel.StartDate.customInput"
          :customDiv="props.Travel.StartDate.customDiv"
          :disabled="props.Travel.StartDate.disabled"/>
        <TextInputLabelLeft :label="props.Travel.EndDate.label" :type="props.Travel.EndDate.type"
          :customLabel="props.Travel.EndDate.customLabel" :customInput="props.Travel.EndDate.customInput"
          :customDiv="props.Travel.EndDate.customDiv"
          :disabled="props.Travel.EndDate.disabled"/>
      </div>

      <TextInputLabelLeft :label="props.Travel.NameResearch.label"
        :customLabel="props.Travel.NameResearch.customLabel"
        :disabled="props.Travel.NameResearch.disabled"/>

      <TextInputLabelLeft :label="props.Travel.NameConfer.label" :customLabel="props.Travel.NameConfer.customLabel"
      :disabled="props.Travel.NameConfer.disabled"/>

      <div class="flex flex-row">
        <TextInputLabelLeft :label="props.Travel.Date.label" :type="props.Travel.Date.type"
          :customLabel="props.Travel.Date.customLabel" :customInput="props.Travel.Date.customInput"
          :customDiv="props.Travel.Date.customDiv"
          :disabled="props.Travel.Date.disabled"/>
        <TextInputLabelLeft :label="props.Travel.Where.label" :customLabel="props.Travel.Where.customLabel" :disabled="props.Travel.Where.disabled"/>
      </div>

      <div class="flex flex-row justify-between">
        <TextInputLabelLeft :label="props.Travel.ArticleDate.label" :type="props.Travel.ArticleDate.type"
          :customLabel="props.Travel.ArticleDate.customLabel" :customInput="props.Travel.ArticleDate.customInput"
          :customDiv="props.Travel.ArticleDate.customDiv"
          :disabled="props.Travel.ArticleDate.disabled"/>
        <TextInputLabelLeft :label="props.Travel.AnnounDate.label" :type="props.Travel.AnnounDate.type"
          :customLabel="props.Travel.AnnounDate.customLabel" :customInput="props.Travel.AnnounDate.customInput"
          :customDiv="props.Travel.AnnounDate.customDiv"
          :disabled="props.Travel.AnnounDate.disabled"/>
        <TextInputLabelLeft :label="props.Travel.LastDate.label" :type="props.Travel.LastDate.type"
          :customLabel="props.Travel.LastDate.customLabel" :customInput="props.Travel.LastDate.customInput"
          :customDiv="props.Travel.LastDate.customDiv"
          :disabled="props.Travel.LastDate.disabled"/>
      </div>
    </SectionWrapper>
  </Mainbox>
</template>

<script setup>
import { ref } from "vue";
import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import TextInputLabelLeft from "@/components/Input/TextInputLabelLeft.vue";

const props = defineProps({
  Travel: {
    type: Object,
    required: true,
  },
})
</script>
