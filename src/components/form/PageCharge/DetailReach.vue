<template>
    <Mainbox>

        <p class="leading-9 text-lg font-bold"> 2. รายละเอียดผลงานวิจัยที่ส่งเสนอพิจารณา / ได้รับการตอบรับให้ตีพิมพ์
        </p>
        <SectionWrapper>
            <TextInputLabelLeft :label="props.ReachDetail.NameReach.label"
                :disabled="props.ReachDetail.NameReach.disabled"
                :customLabel="props.ReachDetail.NameReach.customLabel" />

            <div>
                <p>กำหนดการที่คาดว่าจะได้รับการลงตีพิมพ์ในวารสาร</p>

                <div class="flex flex-row mt-2 justify-between">
                    <TextInputLabelLeft :label="props.ReachDetail.Schedule.Vol.label"
                        :disabled="props.ReachDetail.Schedule.Vol.disabled"
                        :customLabel="props.ReachDetail.Schedule.Vol.customLabel"
                        :customDiv="props.ReachDetail.Schedule.Vol.customDiv" />

                    <TextInputLabelLeft :label="props.ReachDetail.Schedule.Issue.label"
                        :disabled="props.ReachDetail.Schedule.Issue.disabled"
                        :customLabel="props.ReachDetail.Schedule.Issue.customLabel"
                        :customDiv="props.ReachDetail.Schedule.Issue.customDiv" />

                    <TextInputLabelLeft :label="props.ReachDetail.Schedule.Months.label"
                        :disabled="props.ReachDetail.Schedule.Months.disabled"
                        :customLabel="props.ReachDetail.Schedule.Months.customLabel"
                        :customDiv="props.ReachDetail.Schedule.Months.customDiv" />

                    <TextInputLabelLeft :label="props.ReachDetail.Schedule.Year.label"
                        :disabled="props.ReachDetail.Schedule.Year.disabled"
                        :customLabel="props.ReachDetail.Schedule.Year.customLabel"
                        :customDiv="props.ReachDetail.Schedule.Year.customDiv" />

                    <TextInputLabelLeft :label="props.ReachDetail.Schedule.ISSN.label"
                        :disabled="props.ReachDetail.Schedule.ISSN.disabled"
                        :customLabel="props.ReachDetail.Schedule.ISSN.customLabel"
                        :customDiv="props.ReachDetail.Schedule.ISSN.customDiv" />
                </div>

                <div class="flex flex-row mt-4 justify-between">
                    <TextInputLabelLeft :label="props.ReachDetail.Publisher.SubmitReach.label"
                        :type="props.ReachDetail.Publisher.SubmitReach.type"
                        :disabled="props.ReachDetail.Publisher.SubmitReach.disabled"
                        :customLabel="props.ReachDetail.Publisher.SubmitReach.customLabel"
                        :customDiv="props.ReachDetail.Publisher.SubmitReach.customDiv" />

                    <TextInputLabelLeft :label="props.ReachDetail.Publisher.Announce.label"
                        :type="props.ReachDetail.Publisher.Announce.type"
                        :disabled="props.ReachDetail.Publisher.Announce.disabled"
                        :customLabel="props.ReachDetail.Publisher.Announce.customLabel"
                        :customDiv="props.ReachDetail.Publisher.Announce.customDiv" />
                    <TextInputLabelLeft :label="props.ReachDetail.Publisher.LatePay.label"
                        :type="props.ReachDetail.Publisher.LatePay.type"
                        :disabled="props.ReachDetail.Publisher.LatePay.disabled"
                        :customLabel="props.ReachDetail.Publisher.LatePay.customLabel"
                        :customDiv="props.ReachDetail.Publisher.LatePay.customDiv" />

                </div>

                <SectionWrapper>
                    <div class="flex flex-row mt-3">
                        <p class="flex text-blue-500 w-12 items-center">(ถ้ามี)</p>
                        <TextInputLabelLeft :label="props.ReachDetail.Other.ReachOther.label"
                            :disabled="props.ReachDetail.NameReach.disabled"
                            :customLabel="props.ReachDetail.NameReach.customLabel" />

                    </div>
                    <p>ประเภทโครงการวิจัย</p>

                    <div class="flex flex-row ml-5">
                        <RadioInput :label="props.ReachDetail.Other.TypeReach.Basic.label"
                            :name="props.ReachDetail.Other.TypeReach.Basic.name"
                            :disabled="props.ReachDetail.Other.TypeReach.Basic.disabled"
                            :customDiv="props.ReachDetail.Other.TypeReach.Basic.customDiv" />

                        <RadioInput :label="props.ReachDetail.Other.TypeReach.Applied.label"
                            :name="props.ReachDetail.Other.TypeReach.Applied.name"
                            :disabled="props.ReachDetail.Other.TypeReach.Applied.disabled"
                            :customDiv="props.ReachDetail.Other.TypeReach.Applied.customDiv" />

                        <RadioInput :label="props.ReachDetail.Other.TypeReach.Develop.label"
                            :name="props.ReachDetail.Other.TypeReach.Develop.name"
                            :disabled="props.ReachDetail.Other.TypeReach.Develop.disabled"
                            :customDiv="props.ReachDetail.Other.TypeReach.Develop.customDiv" />

                        <div class="flex flex-row">
                            <RadioInput :label="props.ReachDetail.Other.TypeReach.Other.label"
                                :name="props.ReachDetail.Other.TypeReach.Other.name"
                                :disabled="props.ReachDetail.Other.TypeReach.Other.disabled"
                                :customDiv="props.ReachDetail.Other.TypeReach.Other.customDiv" />

                            <TextInputLabelLeft :label="props.ReachDetail.Other.TypeReach.OtherInput.label"
                                :name="props.ReachDetail.Other.TypeReach.OtherInput.name"
                                :disabled="props.ReachDetail.Other.TypeReach.OtherInput.disabled"
                                :customDiv="props.ReachDetail.Other.TypeReach.OtherInput.customDiv" />

                        </div>
                    </div>

                    <TextInputLabelLeft :label="props.ReachDetail.Other.Source.label"
                        :disabled="props.ReachDetail.Other.Source.disabled"
                        :customLabel="props.ReachDetail.Other.Source.customLabel" />

                    <div class="flex flex-row">
                        <TextInputLabelLeft :label="props.ReachDetail.Other.Credit.label"
                        :disabled="props.ReachDetail.Other.Credit.disabled"
                        :customLabel="props.ReachDetail.Other.Credit.customLabel"
                        :customDiv="props.ReachDetail.Other.Credit.customDiv" />

                        <TextInputLabelLeft :label="props.ReachDetail.Other.InYears.label"
                        :disabled="props.ReachDetail.Other.InYears.disabled"
                        :customLabel="props.ReachDetail.Other.InYears.customLabel"
                        :customDiv="props.ReachDetail.Other.InYears.customDiv" />
                    </div>

                </SectionWrapper>
            </div>
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
    ReachDetail: {
        type: Object,
        required: true,
    },
})
</script>
