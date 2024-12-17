<template>
    <div>
        <Mainbox>
            <SectionWrapper>
                <p>{{ props.ResearchForm.MainLabel }}</p>

                <p>{{ props.ResearchForm.Sub.First.MainLabel }}</p>

                <div class="px-5">
                    <RadioInput :label="props.ResearchForm.Sub.First.Choice1"
                        :name="props.ResearchForm.Sub.First.name" :disabled="props.ResearchForm.Sub.First.disabled"/>
                    <RadioInput :label="props.ResearchForm.Sub.First.Choice2"
                        :name="props.ResearchForm.Sub.First.name" :disabled="props.ResearchForm.Sub.First.disabled"/>
                    <div class="py-1">
                        <TextInputLabelLeft :label="props.ResearchForm.Sub.First.Input.label"
                            :customLabel="props.ResearchForm.Sub.First.Input.customLabel" :disabled="props.ResearchForm.Sub.First.Input.disabled"/>
                    </div>
                </div>

                <TextArea :label="props.ResearchForm.Sub.Second.label" :disabled="props.ResearchForm.Sub.Second.disabled" />
            </SectionWrapper>
        </Mainbox>
    </div>
</template>

<script setup>
import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import RadioInput from "@/components/Input/RadioInput.vue";
import TextInputLabelLeft from "@/components/Input/TextInputLabelLeft.vue";
import TextArea from "@/components/Input/TextArea.vue";

const props = defineProps({
    ResearchForm: {
        type: Object,
        required: true
    }
})
</script>
