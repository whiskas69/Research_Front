<template>
  <div :class="`form-control w-full ${customDiv}`">
    <label class="w-full flex items-center">
      <input
        :type="type"
        :class="`input input-bordered mx-1 w-full ${customInput}`"
        :placeholder="placeholder"
        :disabled="disabled"
      />
      <span :class="`ml-2 ${customLabel}`"> {{ label }}</span>
    </label>
  </div>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  inputtext: {
    type: String,
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
  customInput: {
    type: String,
    default: "",
  },
});
</script>
