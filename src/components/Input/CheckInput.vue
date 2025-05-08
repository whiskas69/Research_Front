<template>
  <div :class="`from-control w-full ${customDiv}`">
    <label class="w-full flex items-center">
      <input
        type="checkbox"
        :class="`checkbox mx-1 ml-2 ${customClass}`"
        :disabled="disabled"
        :checked="isChecked"
        @change="handleChange"
      />
      <span :class="`${customLabel}`"> {{ label }}</span>
    </label>
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  modelValue: {
    type: [Boolean, Array],
    required: true,
  },
  value: {
    type: [String, Number, Boolean],
    default: true, // สำหรับ checkbox หลายตัว
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
  disabled: {
    type: Boolean,
    default: false,
  },
  customClass: {
    type: String,
    default: "",
  },
});
const emit = defineEmits(["update:modelValue"]);

const isChecked = computed(() => {
  if (Array.isArray(props.modelValue)) {
    return props.modelValue.includes(props.value);
  } else {
    return props.modelValue === props.trueValue;
  }
});

const handleChange = (e) => {
  if (Array.isArray(props.modelValue)) {
    const newVal = [...props.modelValue];
    if (e.target.checked) {
      if (!newVal.includes(props.value)) newVal.push(props.value);
    } else {
      const index = newVal.indexOf(props.value);
      if (index > -1) newVal.splice(index, 1);
    }
    emit("update:modelValue", newVal);
  } else {
    emit("update:modelValue", e.target.checked ? props.trueValue : props.falseValue);
  }
};
</script>
