<template>
    <Mainbox>
        <SectionWrapper>
            <p class="text-lg font-bold">เอกสารหลักฐานที่แนบ</p>

            <div class="flex flex-row items-center w-full" v-for="(value, key) in props.FileForm" :key="key">
                <div v-if="value.name != 'Input'" class="flex flex-row items-center w-full justify-between">
                    <div class="flex flex-row">
                        <span class="text-blue-500 mr-2">{{ value.span }}</span>
                        <p>{{ value.label }}</p>
                    </div>

                    <div class="">
                        <button class="btn bg-[#E85F19] text-white mr-5">ดูเอกสาร</button>
                        <button class="btn bg-[#4285F4] text-white">โหลดเอกสาร</button>
                    </div>
                </div>

                <div v-if="value.name == 'Input'" class="flex flex-row items-center w-full justify-between">
                    <div class="flex flex-row">
                        <span v-show="value.span" class="w-[15rem] flex items-center text-blue-500 mr-2">{{ value.span }}</span>
                        <TextInputLabelLeft
                        :customInput="value.customInput"
                        :label="value.label" :disabled="value.disabled" />
                    </div>

                    <div class="">
                        <button class="btn bg-[#E85F19] text-white mr-5">ดูเอกสาร</button>
                        <button class="btn bg-[#4285F4] text-white">โหลดเอกสาร</button>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    </Mainbox>
</template>

<script setup>
import { ref } from "vue";
import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import TextInputLabelLeft from "@/components/Input/TextInputLabelLeft.vue";

const props = defineProps({
    FileForm: {
        type: Object,
        required: true,
    },
})
</script>
