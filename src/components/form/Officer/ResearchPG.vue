<template>
    <Mainbox>
        <SectionWrapper>
            <p>ตรวจสอบหลักฐานตามหลักเกณฑ์ที่กำหนดในประกาศ ส.จ.ล และประกาศคณะ</p>
            
            <div v-for="(value, key) in props.Research" :key="key">
                <RadiowithArea :label="value.label" :disabled="value.disabled" />
            </div>
        </SectionWrapper>
    </Mainbox>
</template>

<script setup>
import { ref } from "vue";
import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import RadiowithArea from "@/components/Input/RadiowithArea.vue";

const props = defineProps({
    Research: {
        type: Object,
        required: true,
    },
})
</script>
