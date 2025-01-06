<template>
    <div :class="`from-control w-full ${customDiv}`">

        <select class="select select-error w-full max-w-xs">
            <option disabled selected>What is the best headless CMS</option>
            <option>Strapi</option>
            <option>Ghost</option>
            <option>Netlify CMS</option>
            <option>Sanity</option>
        </select>
        
        <label class="w-full flex items-center">
            <input type="checkbox" :class="`checkbox mx-1 ml-2 ${customClass}`" :disabled="disabled"
                @input="$emit('input, $event.target.value')" />
            <span :class="`${customLabel}`"> {{ label }}</span>
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
    disabled: {
        type: Boolean,
        default: false,
    },
    customClass: {
        type: String,
        default: "",
    },
});
</script>
