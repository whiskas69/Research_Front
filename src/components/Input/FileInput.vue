<template>
  <div :class="`from-control w-full ${customDiv}`">
    <label class="flex flex-col">
      <div class="flex flex-row items-center">
        <span :class="`${customSpan}`"> {{ span }}</span>
        <span :class="`mb-1 ${customLabel}`"> {{ label }}</span>
      </div>

      <input type="file" :class="`file-input file-input-bordered w-full ${customInput}`" :value="value"
        :disabled="disabled" @input="$emit('input, $event.target.value')" />
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
  customSpan: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    required: false,
  },
  span: {
    type: String,
    required: false,
  },
  value: {
    type: [String, Number],
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  customInput: {
    type: String,
    default: "",
  },
});
</script>
