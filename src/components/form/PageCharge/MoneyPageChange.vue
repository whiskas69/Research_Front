<template>
    <Mainbox>
        <p class="leading-9 text-lg font-bold">4. ขอรับการสนับสนุนค่าใช้จ่ายในการลงตีพิมพ์ (Page Charge)
        </p>

        <SectionWrapper>
            <TextInputLabelLeft
            :label="props.MoneyPG.label"
            :disabled="props.MoneyPG.disabled"
            :customLabel="props.MoneyPG.customLabel"
            :customInput="props.MoneyPG.customInput"/>

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
    MoneyPG: {
        type: Object,
        required: true,
    },
})
</script>
