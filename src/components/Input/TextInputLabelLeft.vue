<template>
  <div :class="`form-control w-full ${customDiv}`">
    <label class="w-full flex items-center">
      <span :class="`${customLabel}`"> {{ label }}</span>
      <input
        :type="type"
        :class="`input input-bordered mx-1 w-full ${customInput}`"
        :placeholder="placeholder"
        :disabled="disabled"
        v-model="inputtext"
        @input="handleInput"
      />
    </label>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

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

const inputtext = ref(props.inputtext);
const emit = defineEmits();

// Method to handle input changes and log them
const handleInput = (event) => {
  console.log("Text Input updated:", event.target.value);
  emit("update:modelValue", event.target.value);
};
</script>
