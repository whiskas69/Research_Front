<template>
  <div :class="`from-control w-full ${customDiv}`">
    <label class="flex flex-col">
      <label class="flex flex-row">
        <span :class="`flex items-center ${customSpan}`"> {{ span }}</span>
        <span :class="`flex items-center ${customLabel}`"> {{ label }}</span>

        <input
          type="text"
          :class="`input input-bordered w-auto min-w-96 ml-2 mb-2 ${customInput2}`"
          :value="value"
          :placeholder="placeholder"
          :disabled="disabled"
        />
      </label>
      <input
        type="file"
        :class="`file-input file-input-bordered w-full ${customInput}`"
        :value="value"
        :disabled="disabled"
        @input="$emit('input, $event.target.value')"
      />
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
    required: true,
  },
  span: {
    type: String,
    required: false,
  },
  value: {
    type: [String, Number],
    default: "",
  },
  customInput: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>
