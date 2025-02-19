<template>
  <div class="container my-10 mx-auto">
    <h1 class="text-xl font-bold mb-5">สถานะเอกสาร</h1>
    <div v-for="form in data.allForm" :key="form.form_id">

      <div class="p-5 shadow m-5 rounded-xl hover:cursor-pointer mb-2" v-if="form.form_type == 'Research_KRIS'">
        <router-link to="/statusConfer">
          <h2 class="text-lg font-bold">
            แบบเสนอโครงการวิจัย ทุนวิจัยส่งเสริมส่วนงานวิชาการ
          </h2>
          <div class="columns-2 mt-2 ml-5">
            <div>
              <div class="flex">
                <h4 class="mr-5">
                  ชื่อโครงการวิจัย : {{ form.article_title }}
                </h4>
              </div>
              <div class="flex justify-end items-center">
                <p class="text-red-500 mr-5" v-if="form.form_status == 'ไม่อนุมัติ'">
                  สถานะ{{ form.form_status }}
                </p>
                <p class="text-green-500 mr-5" v-else-if="form.form_status == 'อนุมัติ'">
                  สถานะ{{ form.form_status }}
                </p>
                <p class="text-yellow-500 mr-5" v-else>
                  สถานะ{{ form.form_status }}
                </p>
              </div>
            </div>
          </div>
        </router-link>
      </div>

      <div class="p-5 shadow m-5 rounded-xl hover:cursor-pointer mb-2"  v-if="form.form_type == 'Conference'">
        <router-link to="/statusConfer">
          <h2 class="text-lg font-bold">
            ขออนุมัติเดินทางไปเผยแพร่ผลงานในการประชุมทางวิชาการ
          </h2>
          <div class="columns-2 mt-2 ml-5">
            <div>
              <div class="flex">
                <h4 class="mr-5">
                  ชื่องานประชุม : {{ form.article_name }}
                </h4>
              </div>
              <div class="flex">
                <h4 class="mr-5">
                  ชื่อบทความ : {{ form.article_title }}
                </h4>
              </div>
              <div class="flex justify-end h-20 items-center">
                <p class="text-red-500 mr-5" v-if="form.form_status == 'ไม่อนุมัติ'">
                  สถานะ{{ form.form_status }}
                </p>
                <p class="text-green-500 mr-5" v-else-if="form.form_status == 'อนุมัติ'">
                  สถานะ{{ form.form_status }}
                </p>
                <p class="text-yellow-500 mr-5" v-else>
                  สถานะ{{ form.form_status }}
                </p>
              </div>
            </div>
          </div>
        </router-link>
      </div>

      <div class="p-5 shadow m-5 rounded-xl hover:cursor-pointer mb-2" v-if="form.form_type == 'Page_Charge'">
        <router-link to="/statusConfer">
          <h2 class="text-lg font-bold">
            ขออนุมัติค่า Page Chargeเพื่อตีพิมพ์ผลงานในวารสารวิชาการระดับนานาชาติ
          </h2>
          <div class="columns-2 mt-2 ml-5">
            <div>
              <div class="flex">
                <h4 class="mr-5">
                  ชื่อวารสาร : {{ form.article_name }}
                </h4>
              </div>
              <div class="flex">
                <h4 class="mr-5">
                  ชื่อบทความ : {{ form.article_title }}
                </h4>
              </div>
              <div class="flex justify-end h-20 items-center">
                <p class="text-red-500 mr-5" v-if="form.form_status == 'ไม่อนุมัติ'">
                  สถานะ{{ form.form_status }}
                </p>
                <p class="text-green-500 mr-5" v-else-if="form.form_status == 'อนุมัติ'">
                  สถานะ{{ form.form_status }}
                </p>
                <p class="text-yellow-500 mr-5" v-else>
                  สถานะ{{ form.form_status }}
                </p>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, reactive } from "vue";
import { useUserStore } from "@/store/userStore";
import api from "@/setting/api";

const data = reactive({
  userID: "",
  userRole: "",
  allForm: "",
});

const userStore = useUserStore();
const user = computed(() => userStore.user);

//pull data
const pulldata = async () => {
  try {
    const res = await api.get(`/form/${data.userID}`);

    console.log("res, ", res.data);
    data.allForm = res.data;
  } catch (error) {
    console.log(error);
  }
};

onMounted(async () => {
  await userStore.fetchUser();

  data.userID = user.value?.user_id;
  // data.userRole = user

  pulldata();
});
</script>
