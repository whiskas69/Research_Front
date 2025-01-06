<template>
  <Mainbox>
    <p class="leading-9 text-lg font-bold">
      1.  รายละเอียดวารสารที่ส่งเสนอพิจารณา / การตอบรับให้ลงตีพิมพ์
    </p>

    <SectionWrapper>
      <TextInputLabelLeft
        :label="props.PageDetail.Input1.label"
        :customLabel="props.PageDetail.Input1.customLabel"
        :disabled="props.PageDetail.Input1.disabled"
      />

      <p>{{ props.PageDetail.Database.Maintext.label }}</p>

      <div class="flex flex-row">
        <CheckInput
          :label="props.PageDetail.Database.ISI.Check.label"
          :disabled="props.PageDetail.Database.ISI.Check.disabled"
          :customDiv="props.PageDetail.Database.ISI.Check.customDiv"
        />
        <TextInputLabelLeft
          :label="props.PageDetail.Database.ISI.Input1.label"
          :disabled="props.PageDetail.Database.ISI.Input1.disabled"
          :customDiv="props.PageDetail.Database.ISI.Input1.customDiv"
          :customLabel="props.PageDetail.Database.ISI.Input1.customLabel"
          :customInput="props.PageDetail.Database.ISI.Input1.customInput"
        />

        <TextInputLabelLeft
          :label="props.PageDetail.Database.ISI.Input2.label"
          :disabled="props.PageDetail.Database.ISI.Input2.disabled"
          :customDiv="props.PageDetail.Database.ISI.Input2.customDiv"
          :customLabel="props.PageDetail.Database.ISI.Input2.customLabel"
          :customInput="props.PageDetail.Database.ISI.Input2.customInput"
        />
      </div>

      <div class="flex flex-row">
        <CheckInput
          :label="props.PageDetail.Database.SJR.Check.label"
          :disabled="props.PageDetail.Database.SJR.Check.disabled"
          :customDiv="props.PageDetail.Database.SJR.Check.customDiv"
        />

        <TextInputLabelLeft
          :label="props.PageDetail.Database.SJR.Input1.label"
          :disabled="props.PageDetail.Database.SJR.Input1.disabled"
          :customDiv="props.PageDetail.Database.SJR.Input1.customDiv"
          :customLabel="props.PageDetail.Database.SJR.Input1.customLabel"
          :customInput="props.PageDetail.Database.SJR.Input1.customInput"
        />

        <TextInputLabelLeft
          :label="props.PageDetail.Database.SJR.Input2.label"
          :disabled="props.PageDetail.Database.SJR.Input2.disabled"
          :customDiv="props.PageDetail.Database.SJR.Input2.customDiv"
          :customLabel="props.PageDetail.Database.SJR.Input2.customLabel"
          :customInput="props.PageDetail.Database.SJR.Input2.customInput"
        />
      </div>

      <div class="flex flex-row">
        <CheckInput
          :label="props.PageDetail.Database.Scopus.Check.label"
          :disabled="props.PageDetail.Database.Scopus.Check.disabled"
          :customDiv="props.PageDetail.Database.Scopus.Check.customDiv"
        />

        <TextInputLabelLeft
          :label="props.PageDetail.Database.Scopus.Input1.label"
          :disabled="props.PageDetail.Database.Scopus.Input1.disabled"
          :customDiv="props.PageDetail.Database.Scopus.Input1.customDiv"
          :customLabel="props.PageDetail.Database.Scopus.Input1.customLabel"
          :customInput="props.PageDetail.Database.Scopus.Input1.customInput"
        />

        <TextInputLabelLeft
          :label="props.PageDetail.Database.Scopus.Input2.label"
          :disabled="props.PageDetail.Database.Scopus.Input2.disabled"
          :customDiv="props.PageDetail.Database.Scopus.Input2.customDiv"
          :customLabel="props.PageDetail.Database.Scopus.Input2.customLabel"
          :customInput="props.PageDetail.Database.Scopus.Input2.customInput"
        />
      </div>

      <div class="flex flex-row">
        <CheckInput
          :label="props.PageDetail.Database.Nature.label"
          :disabled="props.PageDetail.Database.Nature.disabled"
        />
      </div>

      <label class="form-control">
        <div class="flex flex-row">
          <span class="flex mr-2 items-center">{{
            props.PageDetail.Option.textOption.label
          }}</span>
          <select
            class="select select-bordered w-3/12"
            :disabled="props.PageDetail.Option.textOption.disabled"
          >
            <option disabled selected>
              {{ props.PageDetail.Option.Op1.label }}
            </option>
            <option>{{ props.PageDetail.Option.Op2.label }}</option>
            <option>{{ props.PageDetail.Option.Op3.label }}</option>
            <option>{{ props.PageDetail.Option.Op4.label }}</option>
            <option>{{ props.PageDetail.Option.Op5.label }}</option>
            <option>{{ props.PageDetail.Option.Op6.label }}</option>
          </select>
        </div>
      </label>
    </SectionWrapper>
  </Mainbox>
</template>

<script setup>
import { ref } from "vue";
import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import RadioInput from "@/components/Input/RadioInput.vue";
import TextInputLabelLeft from "@/components/Input/TextInputLabelLeft.vue";
import CheckInput from "@/components/Input/CheckInput.vue";

const props = defineProps({
  PageDetail: {
    type: Object,
    required: true,
  },
});
</script>
