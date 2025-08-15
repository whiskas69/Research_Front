<template>
  <div class="container my-10 mx-auto">
    <h1 class="text-xl font-bold mb-5">ประวัติเอกสาร</h1>
    
    <div class="flex flex-row mb-4 w-full">
      <div class="flex flex-row mb-4 w-full">
        <span class="flex mr-2 items-center">ปีงบประมาณ</span>
        <select class="select select-bordered w-1/6" v-model="data.findFiscalYear">
            <option v-for="n in 5" :key="n" :value="fiscalYear - (n - 1)">
              {{ fiscalYear - (n - 1) }}
            </option>
        </select>
        
        <span class="flex ml-2 mr-2 items-center">ประเภทเอกสาร</span>
        <select class="select select-bordered w-1/6" v-model="data.typeOfDoc">
          <option selected :value="'all'">ทั้งหมด</option>
          <option :value="'Conference'">ประชุมวิชาการ</option>
          <option :value="'Page_Charge'">ตีพิมพ์วารสาร</option>
          <option :value="'Research_KRIS'">ทุนวิจัย</option>
        </select>
      </div>
    </div>

    <div v-for="form in data.allForm" :key="form.form_id">

      <div class="p-5 shadow m-5 rounded-xl hover:cursor-pointer mb-2" v-if="form.form_type == 'Research_KRIS'">
        <router-link :to="`/history/kris/${form.kris_id}`">
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
                <p class="text-red-500 mr-5" v-if="form.form_status == 'notApproved'">
                  สถานะ{{ showTHstatus(form.form_status) }}
                </p>
                <p class="text-green-500 mr-5" v-else-if="form.form_status == 'approve'">
                  สถานะ{{ showTHstatus(form.form_status) }}
                </p>
              </div>
            </div>
          </div>
        </router-link>
      </div>

      <div class="p-5 shadow m-5 rounded-xl hover:cursor-pointer mb-2"  v-if="form.form_type == 'Conference'">
        <router-link :to="`/history/conference/${form.conf_id}`">
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
              <div class="flex">
                <h4 class="mr-5">
                  วงเงินที่เบิกได้ : {{ form.amount_approval }} บาท
                </h4>
              </div>
              <div class="flex justify-end h-20 items-center">
                <p class="text-red-500 mr-5" v-if="form.form_status == 'notApproved'">
                  สถานะ{{ showTHstatus(form.form_status) }}
                </p>
                <p class="text-green-500 mr-5" v-else-if="form.form_status == 'approve'">
                  สถานะ{{ showTHstatus(form.form_status) }}
                </p>
              </div>
            </div>
          </div>
        </router-link>
      </div>

      <div class="p-5 shadow m-5 rounded-xl hover:cursor-pointer mb-2" v-if="form.form_type == 'Page_Charge'">
        <router-link :to="`/history/pageCharge/${form.pageC_id}`">
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
              <div class="flex">
                <h4 class="mr-5">
                  วงเงินที่เบิกได้ : {{ form.amount_approval }} บาท
                </h4>
              </div>
              <div class="flex justify-end h-20 items-center">
                <p class="text-red-500 mr-5" v-if="form.form_status == 'notApproved'">
                  สถานะ{{ showTHstatus(form.form_status) }}
                </p>
                <p class="text-green-500 mr-5" v-else-if="form.form_status == 'approve'">
                  สถานะ{{ showTHstatus(form.form_status) }}
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
import { computed, onMounted, reactive, watch } from "vue";
import { useUserStore } from "@/store/userStore";
import { DateTime } from "luxon";
import api from "@/setting/api";

const data = reactive({
  userID: "",
  userRole: "",
  allForm: "",
  findFiscalYear: '',
  typeOfDoc: '',
});

const userStore = useUserStore();
const user = computed(() => userStore.user);

const getThaiFiscalYear = () => {
  const now = DateTime.now();
  const year = now.year + 543;
  return now.month >= 10 ? year + 1 : year;
};
const fiscalYear = getThaiFiscalYear();

//pull data of profess
const pulldata = async () => {
  try {
    const res = await api.get(`/form/${data.userID}`,{
      params: {
        fiscalYear: data.findFiscalYear || '', // ส่งว่างถ้าไม่ได้เลือก
        type: data.typeOfDoc || ''
      }
    });
    console.log("res", res.data)

    const filteredForms = res.data.filter(
      (form) => form.form_status === "approve" || form.form_status === "notApproved"
    );
    console.log("filteredForms", filteredForms);

    
    data.allForm = filteredForms.map(form => {
      return {
        ...form, // คัดลอกทุกค่าในออบเจกต์ `form` มา
        amount_approval: parseFloat(form.amount_approval).toLocaleString("en-US", {
          minimumFractionDigits: 2,
        }) //แทนที่เฉพาะ `amount_approval`
      };
    });
    console.log("Updated allForm:", data.allForm);
  } catch (error) {
    console.log(error);
  }
};

const showTHstatus = (status) => {
  if (status == "approve"){
    return "อนุมัติ"
  }else if (status == "notApproved"){
    return "ไม่อนุมัติ"
  }
}

onMounted(async () => {
  if (!data.findFiscalYear) {
    data.findFiscalYear = fiscalYear
  }
  if (!data.typeOfDoc) {
    data.typeOfDoc = "all"
  }

  await userStore.fetchUser();

  data.userID = user.value?.user_id;

  pulldata();
});

watch(
  () => [data.findFiscalYear, data.typeOfDoc],
  () => {
    if (data.userID) {
      pulldata();
    }
  }
);

</script>