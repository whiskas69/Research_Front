<template>
  <div class="container my-10 mx-auto">
    <h1 class="text-xl font-bold p-5">เอกสารที่รออนุมัติใน E-Office</h1>
    <div v-for="form in data.allForm" :key="form.form_id">
      <div
        class="p-5 shadow m-5 rounded-xl hover:cursor-pointer mb-2"
        v-if="form.form_type == 'Research_KRIS'"
      >
        <router-link :to="`/history/kris/${form.kris_id}`">
          <h2 class="text-lg font-bold">
            แบบเสนอโครงการวิจัย ทุนวิจัยส่งเสริมส่วนงานวิชาการ
          </h2>
          <div class="mt-2 ml-5">
            <div>
              <div class="flex">
                <h4 class="mr-5">ชื่อผู้ขออนุมัติ : {{ form.user_nameth }}</h4>
              </div>
              <div class="flex">
                <h4 class="mr-5">
                  ชื่อโครงการวิจัย : {{ form.article_title }}
                </h4>
              </div>
            </div>
          </div>
        </router-link>
        <div class="flex justify-end mr-10">
          <CheckInput
          label="คลิกที่กล่องสี่เหลี่ยมเมื่อเอกสารได้รับการอนุมัติ"
          customDiv="max-w-72 flex items-center"
          :checked="data.approvedForms.includes(form.form_id)"
          @input="handleCheckbox(form.form_id, 'อนุมัติ')"
        />
        </div>
      </div>

      <div
        class="p-5 shadow m-5 rounded-xl hover:cursor-pointer mb-2"
        v-if="form.form_type == 'Conference'"
      >
        <router-link :to="`/history/confer/${form.conf_id}`">
          <h2 class="text-lg font-bold">
            ขออนุมัติเดินทางไปเผยแพร่ผลงานในการประชุมทางวิชาการ
          </h2>
          <div class="columns-2 mt-2 ml-5">
            <div>
              <div class="flex">
                <h4 class="mr-5">ชื่อผู้ขออนุมัติ : {{ form.user_nameth }}</h4>
              </div>
              <div class="flex">
                <h4 class="mr-5">ชื่องานประชุม : {{ form.article_name }}</h4>
              </div>
              <div class="flex">
                <h4 class="mr-5">ชื่อบทความ : {{ form.article_title }}</h4>
              </div>
              <div class="flex">
                <h4 class="mr-5">
                  วงเงินที่เบิกได้ : {{ form.form_money }} บาท
                </h4>
              </div>
              <div class="flex justify-end h-20 mr-10">
                <label class="label cursor-pointer">
                  <input
                    type="checkbox"
                    class="checkbox checkbox-accent mr-2"
                  />
                  <span class="label-text"
                    >คลิกที่กล่องสี่เหลี่ยมเมื่อเอกสารได้รับการอนุมัติ</span
                  >
                </label>
              </div>
            </div>
          </div>
        </router-link>
      </div>

      <div
        class="p-5 shadow m-5 rounded-xl hover:cursor-pointer mb-2"
        v-if="form.form_type == 'Page_Charge'"
      >
        <router-link :to="`/history/pageCharge/${form.pageC_id}`">
          <h2 class="text-lg font-bold">
            ขออนุมัติค่า Page
            Chargeเพื่อตีพิมพ์ผลงานในวารสารวิชาการระดับนานาชาติ
          </h2>
          <div class="columns-2 mt-2 ml-5">
            <div>
              <div class="flex">
                <h4 class="mr-5">ชื่อผู้ขออนุมัติ : {{ form.user_nameth }}</h4>
              </div>
              <div class="flex">
                <h4 class="mr-5">ชื่อวารสาร : {{ form.article_name }}</h4>
              </div>
              <div class="flex">
                <h4 class="mr-5">ชื่อบทความ : {{ form.article_title }}</h4>
              </div>
              <div class="flex">
                <h4 class="mr-5">
                  วงเงินที่เบิกได้ : {{ form.form_money }} บาท
                </h4>
              </div>
              <div class="flex justify-end h-20 mr-10">
                <label class="label cursor-pointer">
                  <input
                    type="checkbox"
                    class="checkbox checkbox-accent mr-2"
                  />
                  <span class="label-text"
                    >คลิกที่กล่องสี่เหลี่ยมเมื่อเอกสารได้รับการอนุมัติ</span
                  >
                </label>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>

    <!-- 2 -->
    <h1 class="text-xl font-bold p-5">เอกสารที่อนุมัติแล้ว</h1>
  </div>
</template>
<script setup>
import { computed, onMounted, reactive } from "vue";
import { useUserStore } from "@/store/userStore";
import api from "@/setting/api";
import CheckInput from "@/components/Input/CheckInput.vue";

const data = reactive({
  userID: "",
  userRole: "",
  allForm: [],
  approvedForms: [], //id form approved
});

const userStore = useUserStore();
const user = computed(() => userStore.user);

const handleCheckbox = (formId, status) => {
  if (status === "อนุมัติ") {
    if (!data.approvedForms.includes(formId)) {
      data.approvedForms.push(formId); // เพิ่ม form_id
    } else {
      data.approvedForms = data.approvedForms.filter(id => id !== formId); // ยกเลิกการอนุมัติ
    }
  }
  console.log("Approved Forms:", data.approvedForms);
};
//pull data
const pulldata = async () => {
  try {
    const res = await api.get(`/allForms`);
    console.log("res", res.data);

    const filteredForms = res.data
      .filter((form) => form.form_status === "รออนุมัติ")
      .sort((a, b) => b.form_id - a.form_id);
    console.log("filteredForms", filteredForms);

    data.allForm = filteredForms;
  } catch (error) {
    console.log(error);
  }
};

onMounted(async () => {
  await userStore.fetchUser();

  data.userID = user.value?.user_id;

  pulldata();
});
</script>
