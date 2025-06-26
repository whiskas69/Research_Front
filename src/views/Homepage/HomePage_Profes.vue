<template>
  <div class="Main">
    <!-- Main in page -->
    <div class="container my-10 mx-auto">
      <p class="text-xl font-bold pb-5">เอกสารที่ต้องการยื่น</p>
      <!-- box first -->
      <div
        class="my-5 py-2 border border-[#D9D9D9] rounded-md text-black hover:cursor-pointer"
        :class="{
          'hover:cursor-pointer': data.formConfer < 2,
          'opacity-50 pointer-events-none': data.formConfer >= 2,
        }"
      >
        <router-link v-if="data.formConfer < 2" to="/formConfer">
          <p class="text-base px-5 py-1">
            ขออนุมัติเดินทางไปเผยแพร่ผลงานในการประชุมทางวิชาการ
          </p>
        </router-link>
        <p v-else class="text-base px-5 py-1">
          ขออนุมัติเดินทางไปเผยแพร่ผลงานในการประชุมทางวิชาการ
          <span class="flex justify-end text-red-600">ยื่นขอรับการสนับสนุน 2 ครั้ง</span>
        </p>
      </div>
      <div
        class="my-5 py-2 border border-[#D9D9D9] rounded-md text-black hover:cursor-pointer"
      >
        <router-link to="/formPC">
          <p class="text-base px-5 py-1">
            ขออนุมัติค่า Page Charge
            เพื่อตีพิมพ์ผลงานในวารสารวิชาการระดับนานาชาติ
          </p>
        </router-link>
      </div>
      <div
        class="my-5 py-2 border border-[#D9D9D9] rounded-md text-black hover:cursor-pointer"
      >
        <router-link to="/formKris">
          <p class="text-base px-5 py-1">
            แบบเสนอโครงการวิจัย ทุนวิจัยส่งเสริมส่วนงานวิชาการ
          </p>
        </router-link>
      </div>
    </div>
    <div class="container my-10 mx-auto">
      <p class="text-xl font-bold pb-5">เอกสารที่ได้รับการแก้ไข</p>
      <div v-for="editForm in data.editForm" :key="editForm.form_id">
        <div
          class="p-5 shadow m-5 rounded-xl hover:cursor-pointer mb-2"
          v-if="editForm.form_type == 'Research_KRIS'"
        >
          <router-link :to="`/modifiedKris/${editForm.kris_id}`">
            <h2 class="text-lg font-bold">
              แบบเสนอโครงการวิจัย ทุนวิจัยส่งเสริมส่วนงานวิชาการ
            </h2>
            <div class="mt-2 ml-5">
              <div>
                <div class="flex">
                  <h4 class="mr-5">
                    ชื่อโครงการวิจัย : {{ editForm.article_title }}
                  </h4>
                </div>
              </div>
            </div>
          </router-link>
        </div>

        <div
          class="p-5 shadow m-5 rounded-xl hover:cursor-pointer mb-2"
          v-if="editForm.form_type == 'Page_Charge'"
        >
          <router-link :to="`/modifiedPage/${editForm.pageC_id}`">
            <h2 class="text-lg font-bold">
              ขออนุมัติค่า Page
              Chargeเพื่อตีพิมพ์ผลงานในวารสารวิชาการระดับนานาชาติ
            </h2>
            <div class="mt-2 ml-5">
              <div>
                <div class="flex">
                  <h4 class="mr-5">ชื่อวารสาร : {{ editForm.article_name }}</h4>
                </div>
                <div class="flex">
                  <h4 class="mr-5">
                    ชื่อบทความ : {{ editForm.article_title }}
                  </h4>
                </div>
                <div class="flex">
                  <h4 class="mr-5">ผู้แก้ไขเอกสาร : {{ editForm.editor }}</h4>
                  <h4 class="mr-5">
                    วันที่แก้ไข : {{ formatThaiDate(editForm.date_form_edit) }}
                  </h4>
                </div>
              </div>
            </div>
          </router-link>
        </div>

        <div
          class="p-5 shadow m-5 rounded-xl hover:cursor-pointer mb-2"
          v-if="editForm.form_type == 'Conference'"
        >
          <router-link :to="`/modifiedConfer/${editForm.conf_id}`">
            <h2 class="text-lg font-bold">
              ขออนุมัติเดินทางไปเผยแพร่ผลงานในการประชุมทางวิชาการ
            </h2>
            <div class="mt-2 ml-5">
              <div>
                <div class="flex">
                  <h4 class="mr-5">
                    ชื่องานประชุม : {{ editForm.article_name }}
                  </h4>
                </div>
                <div class="flex">
                  <h4 class="mr-5">
                    ชื่อบทความ : {{ editForm.article_title }}
                  </h4>
                </div>
                <div class="flex">
                  <h4 class="mr-5">ผู้แก้ไขเอกสาร : {{ editForm.editor }}</h4>
                  <h4 class="mr-5">
                    วันที่แก้ไข : {{ formatThaiDate(editForm.date_form_edit) }}
                  </h4>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, computed } from "vue";
import { DateTime } from "luxon";
import { useUserStore } from "@/store/userStore";
import { useRouter } from "vue-router";
import api from "@/setting/api";

const data = reactive({
  id: "",
  formConfer: 0,
  editForm: [],
});

const getThaiFiscalYear = () => {
  const now = DateTime.now();
  const year = now.year;
  return now.month >= 10 ? year + 1 : year;
};
const fiscalYear = getThaiFiscalYear();

const router = useRouter();

const userStore = useUserStore();
const user = computed(() => userStore.user);

if (!userStore.user.user_signature) {
  alert("กรุณาอัปโหลดลายเซ็น");
  router.push("/profile");
}

const formatThaiDate = (dateString) => {
  console.log("formatThaiDate input: ", dateString);
  const date = new Date(dateString);
  const months = [
    "ม.ค.",
    "ก.พ.",
    "มี.ค.",
    "เม.ย.",
    "พ.ค.",
    "มิ.ย.",
    "ก.ค.",
    "ส.ค.",
    "ก.ย.",
    "ต.ค.",
    "พ.ย.",
    "ธ.ค.",
  ];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear() + 543;
  console.log("new date: ", `${day} ${month} ${year}`);
  return `${day} ${month} ${year}`;
};

const getData = async () => {
  console.log("id", data.id);
  const res = await api.get(`/sumBudgets/${user.value?.user_id}`);
  // console.log("res sumBudgets", res.data);
  data.approvedConfer = res.data.sumConfer.length;

  const response = await api.get(`/conference/${user.value?.user_id}`);
  console.log("response conference userid", response.data);
  // data.formConfer = response.data

  for (let i = 0; i < response.data.length; i++) {
    const docDateStr = response.data[i].doc_submit_date;
    if (docDateStr != null) {
      // แปลงวันที่เป็น DateTime
      const docDate = DateTime.fromISO(docDateStr);
      // คำนวณปีงบของ doc_submit_date
      const docFiscalYear =
        docDate.month >= 10 ? docDate.year + 1 : docDate.year;
      // เปรียบเทียบกับ fiscalYear ปัจจุบัน
      if (docFiscalYear === fiscalYear) {
        data.formConfer++;
      }
    }
  }

  const resEdit = await api.get(`/form/${user.value?.user_id}`);
  for (let i = 0; i < resEdit.data.length; i++) {
    if (resEdit.data[i].edit_data != null) {
      data.editForm.push(resEdit.data[i]);
    }
  }
  console.log("wow za", data.editForm);
};

onMounted(async () => {
  if (!userStore.user) {
    await userStore.fetchUser();
  }
  await userStore.fetchUser();
  data.id = user.value?.user_id;
  await getData();
});
</script>
