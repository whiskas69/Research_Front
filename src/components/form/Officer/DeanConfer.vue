<template>
    <Mainbox>
        <SectionWrapper>
            <div v-for="(value, key) in props.DeanForm" :key="key">
                <p v-if="value.name == 'maintext'" class="text-lg font-bold">{{ value.label }}</p>
                <p v-if="value.name == 'subtext'">{{ value.label }}</p>

                <div v-if="value.name == 'yes'">
                    <RadioInput :label="value.label" :name="value.name" :disabled="value.disabled" />
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
    DeanForm: {
        type: Object,
        required: true,
    },
});

</script>
