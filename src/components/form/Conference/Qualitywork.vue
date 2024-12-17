<template>
  <Mainbox>
    <p class="leading-9 text-lg font-bold"> 2.  รายละเอียดการขออนุมัติเดินทาง</p>

    <SectionWrapper>
      <div v-for="(value, key) in props.Work.Scopus" :key="key">
        <RadioInput :label="value.label" :name="value.name" :disabled="value.disabled" />
      </div>

      <SectionWrapper>
        <div v-for="(value, key) in props.Work.Level" :key="key">
          <RadioInput :label="value.label" :name="value.name" :disabled="value.disabled" />
        </div>

        <SectionWrapper>
          <div v-for="(value, key) in props.Work.Score" :key="key">
            <RadioInput :label="value.label" :name="value.name" :disabled="value.disabled" />

            <div class="flex flex-row w-full px-7 my-2">
              <div v-for="(value, key) in value.Input" :key="key" class="flex flex-row">
                <TextInputLabelLeft :label="value.label" :disabled="value.disabled" :customLabel="value.customLabel"
                  :customDiv="value.customDiv" :customInput="value.customInput" />
              </div>
              <span v-if="value.value != 'CORE'" class="place-self-center">มีค่าคะแนน = ............ คะแนน</span>
              <span v-if="value.value == 'CORE'" class="place-self-center">(ตั้งแต่ A ขึ้นไป)</span>
            </div>

            <p v-if="value.value == 'CORE'" class="px-7 text-sm text-red-500">เช็คคะแนนได้จาก http://portal.core.edu.au/conf-ranks</p>
          </div>
        </SectionWrapper>
      </SectionWrapper>
    </SectionWrapper>
  </Mainbox>
</template>

<script setup>
import { ref } from "vue";
import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import RadioInput from "@/components/Input/RadioInput.vue"
import TextInputLabelLeft from "@/components/Input/TextInputLabelLeft.vue";

const props = defineProps({
  Work: {
    type: Object,
    required: true,
  },
})
</script>
