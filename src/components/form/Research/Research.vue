<template>
  <Mainbox>
    <p class="text-lg font-bold">รายละเอียดเบื้องต้น</p>

    <div class="py-2 px-5">
      <p class="font-bold">1. ชื่อโครงการวิจัย</p>
      <SectionWrapper>
        <TextInputLabelLeft :label="props.ResearchForm.ResearchName.NameThai.label"
          :customLabel="props.ResearchForm.ResearchName.NameThai.customLabel"
          :disabled="props.ResearchForm.ResearchName.NameThai.disabled" />
        <TextInputLabelLeft :label="props.ResearchForm.ResearchName.NameEng.label"
          :customLabel="props.ResearchForm.ResearchName.NameEng.customLabel"
          :disabled="props.ResearchForm.ResearchName.NameEng.disabled" />
      </SectionWrapper>
    </div>

    <div class="py-2 px-5">
      <p class="font-bold">
        2. สอดคล้องกับกลุ่มวิจัย (Research Cluster) ของ สจล.
      </p>
      <SectionWrapper>
        <div class="flex flex-row w-full">
          <div class="flex flex-col w-1/3">
            <CheckInput class="pb-3" :label="props.ResearchForm.ResearchCluster.FirstRow.first.label" :disabled="props.ResearchForm.ResearchCluster.FirstRow.first.disabled
              " />
            <CheckInput class="pb-3" :label="props.ResearchForm.ResearchCluster.FirstRow.second.label" :disabled="props.ResearchForm.ResearchCluster.FirstRow.second.disabled
              " />
            <CheckInput class="pb-3" :label="props.ResearchForm.ResearchCluster.FirstRow.third.label" :disabled="props.ResearchForm.ResearchCluster.FirstRow.third.disabled
              " />
            <CheckInput class="pb-3" :label="props.ResearchForm.ResearchCluster.FirstRow.fourth.label" :disabled="props.ResearchForm.ResearchCluster.FirstRow.fourth.disabled
              " />
            <CheckInput :label="props.ResearchForm.ResearchCluster.FirstRow.fifth.label" :disabled="props.ResearchForm.ResearchCluster.FirstRow.fifth.disabled
              " />
          </div>

          <div class="flex flex-col w-full">
            <CheckInput class="pb-3" :label="props.ResearchForm.ResearchCluster.SecondRow.first.label" :disabled="props.ResearchForm.ResearchCluster.SecondRow.first.disabled
              " />
            <CheckInput class="pb-3" :label="props.ResearchForm.ResearchCluster.SecondRow.second.label" :disabled="props.ResearchForm.ResearchCluster.SecondRow.second.disabled
              " />
            <CheckInput class="pb-3" :label="props.ResearchForm.ResearchCluster.SecondRow.third.label" :disabled="props.ResearchForm.ResearchCluster.SecondRow.third.disabled
              " />
            <CheckInput class="pb-3" :label="props.ResearchForm.ResearchCluster.SecondRow.fourth.label" :disabled="props.ResearchForm.ResearchCluster.SecondRow.fourth.disabled
              " />

            <div class="flex flex-row items-center">
              <CheckInput class="flex items-center w-[125px]"
                :label="props.ResearchForm.ResearchCluster.SecondRow.fifth.label"
                :customDiv="props.ResearchForm.ResearchCluster.SecondRow.fifth.customDiv"
                :disabled="props.ResearchForm.ResearchCluster.SecondRow.fifth.disabled" />
              <TextInputLabelLeft flex items-center :label="props.ResearchForm.ResearchCluster.SecondRow.textinput.label
                " :disabled="props.ResearchForm.ResearchCluster.SecondRow.textinput
                  .disabled
                  " />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>

    <div class="py-2 px-5">
      <p class="font-bold">3. มาตรฐานการวิจัย</p>
      <SectionWrapper>
        <div class="flex flex-col w-full">
          <CheckInput class="pb-3" :label="props.ResearchForm.ResearchStandards.first.label"
            :disabled="props.ResearchForm.ResearchStandards.first.disabled" />
          <CheckInput class="pb-3" :label="props.ResearchForm.ResearchStandards.second.label"
            :disabled="props.ResearchForm.ResearchStandards.second.disabled" />
          <CheckInput class="pb-3" :label="props.ResearchForm.ResearchStandards.third.label"
            :disabled="props.ResearchForm.ResearchStandards.third.disabled" />
          <CheckInput class="pb-3" :label="props.ResearchForm.ResearchStandards.fourth.label"
            :disabled="props.ResearchForm.ResearchStandards.fourth.disabled" />

          <div class="flex flex-row items-center">
            <CheckInput class="flex items-center w-1/3" :label="props.ResearchForm.ResearchStandards.fifth.label"
              :customDiv="props.ResearchForm.ResearchStandards.fifth.customDiv"
              :disabled="props.ResearchForm.ResearchStandards.fifth.disabled" />
            <CheckInput class="flex items-center" :label="props.ResearchForm.ResearchStandards.sixth.label"
              :disabled="props.ResearchForm.ResearchStandards.sixth.disabled" />
          </div>
        </div>
      </SectionWrapper>
    </div>

    <div class="py-5 px-5">
      <p class="font-bold">4. ข้อมูลนักวิจัย</p>
      <SectionWrapper>
        <p>4.1 ข้อมูลผู้ขอทุน (หัวหน้าโครงการ)</p>
        <div class="grid px-5 gap-3">
          <TextInputLabelLeft :label="props.ResearchForm.Researcher.NameThai.label"
            :customLabel="props.ResearchForm.Researcher.NameThai.customLabel"
            :placeholder="props.ResearchForm.Researcher.NameThai.placeholder"
            :disabled="props.ResearchForm.Researcher.NameThai.disabled" />
          <TextInputLabelLeft :label="props.ResearchForm.Researcher.NameEng.label"
            :customLabel="props.ResearchForm.Researcher.NameEng.customLabel"
            :placeholder="props.ResearchForm.Researcher.NameEng.placeholder"
            :disabled="props.ResearchForm.Researcher.NameEng.disabled" />
          <div class="flex flex-col">
            <TextInputLabelLeft :label="props.ResearchForm.Researcher.HIndex.label"
              :customLabel="props.ResearchForm.Researcher.HIndex.customLabel"
              :placeholder="props.ResearchForm.Researcher.HIndex.placeholder"
              :disabled="props.ResearchForm.Researcher.HIndex.disabled" />
            <p class="text-sm text-red-500 py-2 px-48">
              (search ชื่อตนเองในฐาน https://www.scopus.com/)
            </p>
          </div>
          <TextInputLabelLeft :label="props.ResearchForm.Researcher.History.label"
            :customLabel="props.ResearchForm.Researcher.History.customLabel"
            :disabled="props.ResearchForm.Researcher.History.disabled" />
          <div class="flex flex-row">
            <TextInputLabelLeft :label="props.ResearchForm.Researcher.Persent.label"
              :customLabel="props.ResearchForm.Researcher.Persent.customLabel"
              :customInput="props.ResearchForm.Researcher.Persent.customInput"
              :customDiv="props.ResearchForm.Researcher.Persent.customDiv"
              :disabled="props.ResearchForm.Researcher.Persent.disabled" />
            <span class="text-sm text-red-500 w-1/6 flex items-center">(สัดส่วนการวิจัย)</span>
          </div>
        </div>
      </SectionWrapper>
    </div>

    <div class="py-2 px-5">
      <p class="font-bold">
        5. ระยะเวลาโครงการ
        <span class="font-bold text-red-500">(ระบุจำนวนปีและระยะเริ่มต้นจนสิ้นสุดโครงการ)</span>
      </p>
      <SectionWrapper>
        <div class="flex flex-row w-full">
          <text-input-label-right :label="props.ResearchForm.Time.years.label"
            :customDiv="props.ResearchForm.Time.years.customDiv"
            :customInput="props.ResearchForm.Time.years.customInput"
            :disabled="props.ResearchForm.Time.years.disabled" />
          <TextInputLabelLeft :label="props.ResearchForm.Time.start.label" :type="props.ResearchForm.Time.start.type"
            :customInput="props.ResearchForm.Time.start.customInput"
            :customDiv="props.ResearchForm.Time.start.customDiv" :disabled="props.ResearchForm.Time.start.disabled" />
          <TextInputLabelLeft :label="props.ResearchForm.Time.end.label" :type="props.ResearchForm.Time.end.type"
            :customInput="props.ResearchForm.Time.end.customInput"
            :customLabel="props.ResearchForm.Time.end.customLabel" :disabled="props.ResearchForm.Time.end.disabled" />
        </div>
      </SectionWrapper>
    </div>
  </Mainbox>
</template>

<script setup>
import { ref } from "vue";

import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import TextInputLabelLeft from "@/components/Input/TextInputLabelLeft.vue";
import TextInputLabelRight from "@/components/Input/TextInputLabelRight.vue";
import CheckInput from "@/components/Input/CheckInput.vue";

// For reciving data from Scolaruse.vue in tag Research
const props = defineProps({
  ResearchForm: {
    type: Object,
    required: true,
  },
});
</script>
