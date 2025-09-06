<template>
  <router-link v-if="getLink(form)" :to="getLink(form)">
    <div
      class="my-2 p-4 border border-[#D9D9D9] rounded-md text-black hover:cursor-pointer"
    >
      <h2 class="text-lg font-bold">{{ getTitle(form) }}</h2>

      <div class="mt-2 ml-5">
        <div class="flex">
          <h4 class="mr-5">ชื่อผู้ขออนุมัติ : {{ form.user_nameth }}</h4>
        </div>

        <div class="flex" v-if="form.article_name">
          <h4 class="mr-5">
            {{
              form.form_type === "Page_Charge" ? "ชื่อวารสาร" : "ชื่องานประชุม"
            }}
            : {{ form.article_name }}
          </h4>
        </div>

        <div
          class="flex"
          v-if="form.article_title && form.form_type !== 'Research_KRIS'"
        >
          <h4 class="mr-5">ชื่อบทความ : {{ form.article_title }}</h4>
        </div>

        <div class="flex" v-if="form.form_type === 'Research_KRIS'">
          <h4 class="mr-5">ชื่อโครงงานวิจัย : {{ form.article_title }}</h4>
        </div>

        <div class="flex" v-if="showAmount == 'show'">
          <h4 class="mr-5">
            วงเงินที่เบิกได้ : {{ form.form_type === "Research_KRIS" ? form.Research_kris_amount : form.amount_approval }} บาท
          </h4>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script setup>
import { onMounted, watch } from "vue";
import { useUserStore } from "@/store/userStore";

const props = defineProps({
  form: { type: Object, required: true },
  rolePathMap: { type: Object, required: false, default: () => ({}) },
  rolePageChargeMap: { type: Object, required: false, default: () => ({}) },
  showAmount: { type: String, default: 'notShow' },
});

onMounted(() => {
  console.log("FormCard mounted -> form:", props.form);
  console.log("showAmount:", props.showAmount);
});

watch(
  () => props.form,
  (newVal) => {
    console.log("FormCard updated -> form:", newVal);
  },
  { deep: true }
);


const userStore = useUserStore();

const getLink = (form) => {
  const role = userStore.user.user_role;
  if (form.form_type === "Conference") {
    return props.rolePathMap[role]
      ? props.rolePathMap[role] + form.conf_id
      : null;
  }
  if (form.form_type === "Page_Charge") {
    return props.rolePageChargeMap[role]
      ? props.rolePageChargeMap[role] + form.pageC_id
      : null;
  }
  if (form.form_type === "Research_KRIS") {
    return "/officeFormKris/research/" + form.kris_id;
  }
  return null;
};

const getTitle = (form) => {
  switch (form.form_type) {
    case "Conference":
      return "ขออนุมัติเดินทางไปเผยแพร่ผลงานในการประชุมทางวิชาการ";
    case "Page_Charge":
      return "ขออนุมัติค่า Page Charge";
    case "Research_KRIS":
      return "แบบเสนอโครงการวิจัย";
    default:
      return "";
  }
};
</script>
