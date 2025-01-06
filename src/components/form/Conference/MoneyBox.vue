<template>
  <Mainbox>
    <SectionWrapper>
      <p class="leading-9 text-lg font-bold"> รายการค่าใช้จ่ายที่ขอเบิกจ่าย</p>
      <SectionWrapper>
        <div class="flex flex-row mb-2 justify-between">
          <div class="flex flex-row">
            <TextInputLabelLeft :label="props.Money.First.Input1.label" :disabled="props.Money.First.Input1.disabled"
              :customLabel="props.Money.First.Input1.customLabel" :customDiv="props.Money.First.Input1.customDiv"
              :customInput="props.Money.First.Input1.customInput" />
            <TextInputLabelLeft :label="props.Money.First.Input2.label" :disabled="props.Money.First.Input2.disabled"
              :customLabel="props.Money.First.Input2.customLabel" :customDiv="props.Money.First.Input2.customDiv"
              :customInput="props.Money.First.Input2.customInput" />
            <p class="flex items-center pl-2">บาท</p>
          </div>

          <p class="flex items-center">รวม .................................... บาท</p>
        </div>

        <p>2. ค่าพาหนะเดินทาง</p>
        <div class="flex flex-col px-5">
          <div class="flex flex-row mb-2">
            <TextInputLabelLeft :label="props.Money.Second.Input1.label" :disabled="props.Money.Second.Input1.disabled"
              :customLabel="props.Money.Second.Input1.customLabel" :customDiv="props.Money.Second.Input1.customDiv"
              :customInput="props.Money.Second.Input1.customInput" />
            <p class="flex items-center pl-2">บาท</p>
          </div>
          <div class="flex flex-row mb-2">
            <TextInputLabelLeft :label="props.Money.Second.Input2.label" :disabled="props.Money.Second.Input2.disabled"
              :customLabel="props.Money.Second.Input2.customLabel" :customDiv="props.Money.Second.Input2.customDiv"
              :customInput="props.Money.Second.Input2.customInput" />
            <p class="flex items-center pl-2">บาท</p>
          </div>
          <div class="flex flex-row">
            <TextInputLabelLeft :label="props.Money.Second.Input3.label" :disabled="props.Money.Second.Input3.disabled"
              :customLabel="props.Money.Second.Input3.customLabel" :customDiv="props.Money.Second.Input3.customDiv"
              :customInput="props.Money.Second.Input3.customInput" />
            <TextInputLabelLeft :label="props.Money.Second.Input4.label" :disabled="props.Money.Second.Input4.disabled"
              :customLabel="props.Money.Second.Input4.customLabel" :customDiv="props.Money.Second.Input4.customDiv"
              :customInput="props.Money.Second.Input4.customInput" />
            <p class="flex items-center pl-2">บาท</p>
          </div>
        </div>

        <div class="flex flex-row">
          <TextInputLabelLeft :label="props.Money.Third.label" :disabled="props.Money.Third.disabled"
            :customLabel="props.Money.Third.customLabel" :customDiv="props.Money.Third.customDiv"
            :customInput="props.Money.Third.customInput" />
          <p class="flex items-center pl-2">บาท</p>
        </div>

        <div class="flex flex-row mb-2 justify-between">
          <div class="flex flex-row w-5/6">
            <TextInputLabelLeft :label="props.Money.Fourth.Input1.label" :disabled="props.Money.Fourth.Input1.disabled"
              :customLabel="props.Money.Fourth.Input1.customLabel" :customDiv="props.Money.Fourth.Input1.customDiv"
              :customInput="props.Money.Fourth.Input1.customInput" />
            <TextInputLabelLeft :label="props.Money.Fourth.Input2.label" :disabled="props.Money.Fourth.Input2.disabled"
              :customLabel="props.Money.Fourth.Input2.customLabel" :customDiv="props.Money.Fourth.Input2.customDiv"
              :customInput="props.Money.Fourth.Input2.customInput" />
            <p class="flex items-center pl-2">บาท</p>
          </div>

          <p class="flex items-center">รวม .................................... บาท</p>
        </div>

        <div class="flex flex-row mb-2 justify-between">
          <div class="flex flex-row w-5/6">
            <TextInputLabelLeft :label="props.Money.Fifth.Input1.label" :disabled="props.Money.Fifth.Input1.disabled"
              :customLabel="props.Money.Fifth.Input1.customLabel" :customDiv="props.Money.Fifth.Input1.customDiv"
              :customInput="props.Money.Fifth.Input1.customInput" />
            <TextInputLabelLeft :label="props.Money.Fifth.Input2.label" :disabled="props.Money.Fifth.Input2.disabled"
              :customLabel="props.Money.Fifth.Input2.customLabel" :customDiv="props.Money.Fifth.Input2.customDiv"
              :customInput="props.Money.Fifth.Input2.customInput" />
            <p class="flex items-center pl-2">บาท</p>
          </div>
          <p class="flex items-center">รวม .................................... บาท</p>
        </div>

        <p class="font-bold text-2xl pt-5 text-right">รวมทั้งสิ้น ............... บาท</p>

      </SectionWrapper>
    </SectionWrapper>
  </Mainbox>
</template>

<script setup>
import { ref } from "vue";

import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import TextInputLabelLeft from "@/components/Input/TextInputLabelLeft.vue";

const props = defineProps({
  Money: {
    type: Object,
    required: true,
  }
})
</script>
