<template>
  <div :class="`form-control w-full ${customDiv}`">
    <label class="w-full flex items-center">
      <span :class="`${customLabel}`"> {{ label }}</span>
      <input
        :type="type"
        :class="`input input-bordered mx-1 w-full ${customInput}`"
        :placeholder="placeholder"
        :disabled="disabled"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </label>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: "",
  },
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
  }
});

const emit = defineEmits(["update:modelValue"]);
</script>
