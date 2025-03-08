<template>
    <Mainbox>
        <p class="text-lg font-bold">ตรวจสอบ และรับทราบเอกสาร</p>

        <SectionWrapper>
            <div v-for="(value, key) in props.ResearchForm.Noted" :key="key">
                <RadioInput :label="value.label" :name="value.name" :disabled="value.disabled" />
            </div>
        </SectionWrapper>

    </Mainbox>
</template>

<script setup>
import { ref } from "vue";

import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import RadioInput from "@/components/Input/RadioInput.vue"

// For reciving data from Krisuse.vue in tag Research
const props = defineProps({
    ResearchForm: {
        type: Object,
        required: true,
    },
});
</script>
