<template>
    <!-- Radio input -->
    <div :class="`from-control w-full ${customDiv}`">
        <label class="w-full flex flex-col">
            <div class="flex flex-row items-center">
                <input type="radio" :class="`radio radio-sm mr-2 ${customClass}`" :value="value" :name="name"
                    :disabled="disabled" @input="$emit('input, $event.target.value')" />
                <span :class="` ${customLabel}`">{{ label }}</span>
            </div>

            <textarea :class="`textarea textarea-bordered mt-2 w-full ${customInput}`" :placeholder="placeholder"
                :disabled="disabled" :value="value"></textarea>
        </label>
    </div>
</template>

<script setup>
defineProps({
    customDiv: {
        type: String,
        default: "",
    },
    customLabel: {
        type: String,
        default: "",
    },
    label: {
        type: String,
        required: true,
    },
    value: {
        type: [String, Number],
        default: "",
    },
    name: {
        type: String,
        default: "",
    },
    customClass: {
        type: String,
        default: "",
    },
    disabled: {
        type: Boolean,
        default: false,
    }, placeholder: {
        type: String,
        default: "",
    },
    customInput: {
        type: String,
        default: "",
    },
});
</script>
