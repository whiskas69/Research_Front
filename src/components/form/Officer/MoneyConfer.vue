<template>
    <Mainbox>
        <SectionWrapper>
            <div v-for="(value, key) in props.MoneyForm" :key="key">
                <p v-if="value.name == 'maintext'">{{ value.label }}</p>
                <TextInputLabelLeft v-if="value.name == 'years'" :label="value.label"
                    :customInput="value.customInput" :disabled="value.disabled"/>

                <div v-if="!value.name" class="flex justify-end">
                    <div class="flex flex-row justify-between">
                        <TextInputLabelLeft :label="value.label" :customInput="value.customInput"
                            :customDiv="value.customDiv" :customLabel="value.customLabel" :disabled="value.disabled"
                            :placeholder="value.placeholder" />
                        <p v-show="!value.text" class="flex items-center w-12">บาท</p>
                        <p v-show="value.text" class="flex items-center w-12">รายการ</p>
                    </div>
                </div>
            </div>

            <div class="flex justify-end">
                <button class="btn text-black btn-warning mr-5">คำนวณ</button>
            </div>

            <div class="flex justify-end mt-5">
                <p class="text-red-500 mr-5">{{ props.MoneyForm.text.label }}</p>
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
    MoneyForm: {
        type: Object,
        required: true,
    },
});

</script>
