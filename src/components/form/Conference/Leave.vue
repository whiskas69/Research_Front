<template>
    <Mainbox>
        <p class="text-lg font-bold">4.  การลาและการขอเบิกค่าลงทะเบียนและค่าใช้จ่ายอื่น ๆ</p>

        <SectionWrapper>
            <p class="font-bold text-base pt-3">4.2 ครั้งที่ในการลา</p>
            <SectionWrapper>
                <div v-for="(value, key) in props.LeaveForm.TimeLeave" :key="key">
                    <RadioInput :label="value.label" :name="value.name" :disabled="value.disabled" />

                    <p v-if="value.label == 'ครั้งที่ 2'" class="py-1 px-7">ในกรณีลาครั้งที่ 2 (การประชุมฯ ณ ต่างประเทศ)
                        มีผลงานตีพิมพ์ในวารสารในฐานข้อมูล</p>

                    <div class="flex flex-row px-7 mt-1">
                        <div class="mr-24" v-for="(value, key) in value.Where" :key="key">
                            <RadioInput :label="value.label" :name="value.name" :disabled="value.disabled" />
                        </div>
                    </div>

                    <div v-if="value.label == 'ครั้งที่ 2'" class="px-7 py-2">
                        <TextInputLabelLeft :label="value.NameRec.label" :disabled="value.NameRec.disabled"
                            :customLabel="value.NameRec.customLabel" :customDiv="value.customDiv"
                            :customInput="value.customInput" />
                    </div>
                </div>
            </SectionWrapper>

            <p class="font-bold text-base pt-3">4.2 กรณีที่จัดการประชุมฯ ณ ต่างประเทศ</p>
            <SectionWrapper>
                <p>ขอเบิกค่าลงทะเบียนตามที่จ่ายจริง และค่าใช้จ่ายอื่น ๆ</p>
                <div v-for="(value, key) in props.LeaveForm.NotThai" :key="key">
                    <RadioInput :label="value.label" :name="value.name" :disabled="value.disabled" />

                    <div class="flex flex-row px-7 mt-1">
                        <div class="mr-24" v-for="(value, key) in value.Where" :key="key">
                            <RadioInput :label="value.label" :name="value.name" :disabled="value.disabled" />
                        </div>
                    </div>

                    <div v-if="value.label != 'ไม่เกิน 50%'" class="px-7 py-2">
                        <TextInputLabelLeft :label="value.NameRec.label" :disabled="value.NameRec.disabled"
                            :customLabel="value.NameRec.customLabel" :customDiv="value.customDiv"
                            :customInput="value.customInput" />
                    </div>
                </div>
            </SectionWrapper>
        </SectionWrapper>
    </Mainbox>
</template>

<script setup>
import { ref } from "vue";
// import type { PropType } from 'vue';
import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import RadioInput from "@/components/Input/RadioInput.vue";
import TextInputLabelLeft from "@/components/Input/TextInputLabelLeft.vue";

// For reciving data from ConferUse.vue in tag Author
const props = defineProps({
    LeaveForm: {
        type: Object,
        required: true,
    },
});

// ฟอร์มข้อมูล
const formData = ref({
    travel: { start: "", end: "" },
    researchName: "",
    conferenceName: "",
});

// ส่งข้อมูลไปยัง backend
const submitForm = async () => {
    try {
        const response = await fetch("https://api.yourbackend.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData.value),
        });

        if (response.ok) {
            console.log("Data saved successfully!");
        } else {
            console.error("Failed to save data");
        }
    } catch (error) {
        console.error("Error:", error);
    }
};
</script>
