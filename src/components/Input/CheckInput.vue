<template>
  <div :class="`from-control w-full ${customDiv}`">
    <label class="w-full flex items-center">
      <input
        type="checkbox"
        :class="`checkbox mx-1 ml-2 ${customClass}`"
        :disabled="disabled"
        :checked="checked"
        @input="$emit('input, $event.target.value')"
      />
      <span :class="`ml-1${customLabel}`"> {{ label }}</span>
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
  checked: {
    type: Boolean,
    default: false,
  },
  customClass: {
    type: String,
    default: "",
  },
});
</script>
