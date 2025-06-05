<template>
  <div :class="`from-control w-full ${customDiv}`">
    <label class="w-full flex items-center">
      <input
        type="radio"
        :class="`radio radio-sm mr-2 ${customClass}`"
        :value="value"
        :name="name"
        :disabled="disabled"
        :checked="modelValue === value"
        @change="$emit('update:modelValue', value)"
      />
      <span :class="`${customLabel}`"> {{ label }}</span>
    </label>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: [String, Number, Boolean],
    required: true,
  },
  value: {
    type: [String, Number, Boolean],
    default: "",
  },
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
  },
  checked: {
    type: Boolean,
    default: false,
  },
});
</script>