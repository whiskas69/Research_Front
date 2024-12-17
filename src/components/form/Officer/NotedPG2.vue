<template>
    <Mainbox>
        <SectionWrapper>
            <p class="text-lg font-bold">เรียน คณบดีคณะเทคโนโลยีสารสนเทศ (ครั้งที่ 2) </p>
            <p class="text-base mt-1">
                ขณะนี้บทความได้รับการตอบรับแล้ว (Letter of acceptance) เมื่อวันที่ 6/11/2567
                ตามหลักฐานที่แนบจึงเรียนมาเพื่อโปรดพิจารณา
            </p>
            <div v-for="(value, key) in props.PG2" :key="key">
                <div v-if="value.name == 'comment'" class="px-2">
                    <RadioInput :label="value.label" :name="value.name" :disabled="value.disabled" />
                </div>

                <div v-if="value.name == 'textArea'">
                    <TextArea :label="value.label" :disabled="value.disabled" />
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
    PG2: {
        type: Object,
        required: true,
    },
});

</script>
