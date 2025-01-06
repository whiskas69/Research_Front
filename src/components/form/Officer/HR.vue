<template>
    <Mainbox>
        <SectionWrapper>
            <p>ตรวจหลักฐานตามหลักเกณฑ์ที่กำหนดในประกาศ สจล. และประกาศคณะ</p>

            <div v-for="(value, key) in props.HRForm" :key="key">
                <div v-if="value.name != 'Input'">

                    <CheckInput v-if="value.name != 'Radio'" :label="value.label" :disabled="value.disabled" />

                    <p v-if="value.name == 'Radio'">{{ value.label }}</p>
                    <div v-if="value.Choice1 || value.Choice2" class="pt-2 px-5">
                        <RadioInput :label="value.Choice1.label" :name="value.Choice1.name" :disabled="value.Choice1.disabled"/>
                        <RadioInput :label="value.Choice2.label" :name="value.Choice2.name" :disabled="value.Choice2.disabled"/>
                    </div>
                </div>

                <div v-if="value.name == 'Input'" class="flex flex-row">
                    <CheckInput :customDiv="value.customDiv" :disabled="value.disabled"/>
                    <TextInputLabelLeft
                    :customInput="value.customInput"
                    :label="value.label"
                    :disabled="value.disabled" />
                </div>
            </div>
        </SectionWrapper>
    </Mainbox>
</template>

<script setup>
import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import CheckInput from "@/components/Input/CheckInput.vue";
import TextInputLabelLeft from "@/components/Input/TextInputLabelLeft.vue";
import RadioInput from "@/components/Input/RadioInput.vue";

const props = defineProps({
    HRForm: {
        type: Object,
        required: true,
    },
});
</script>
