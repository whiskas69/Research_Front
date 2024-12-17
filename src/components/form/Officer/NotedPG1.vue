<template>
    <Mainbox>
        <SectionWrapper>
            <p class="text-lg font-bold">เรียน คณบดีคณะเทคโนโลยีสารสนเทศ (ครั้งที่ 1) </p>
            <p class="text-base mt-1">
                เพื่อโปรดทราบการจัดสรรวงเงิน ก่อนการตอบรับบทความ
            </p>

            <RadioInput :label="props.PG1.label" :disabled="props.PG1.disabled"/>

        </SectionWrapper>
    </Mainbox>
</template>

<script setup>
import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import RadioInput from "@/components/Input/RadioInput.vue";

const props = defineProps({
    PG1: {
        type: Object,
        required: true,
    },
});

</script>
