<template>
  <div class="Main">
    <!-- Main in page -->
    <div class="container my-10 mx-auto">
      <p class="text-xl font-bold pb-5">เอกสารที่ต้องการยื่น</p>
      <!-- box first -->
      <div
        class="my-5 py-2 border border-[#D9D9D9] rounded-md text-black hover:cursor-pointer"
        :class="{
          'hover:cursor-pointer': data.approvedConfer < 2,
          'opacity-50 pointer-events-none': data.approvedConfer >= 2,
        }"
      >
        <router-link v-if="data.approvedConfer < 2" to="/formConfer">
          <p class="text-base px-5 py-1">
            ขออนุมัติเดินทางไปเผยแพร่ผลงานในการประชุมทางวิชาการ
          </p>
        </router-link>
        <p v-else class="text-base px-5 py-1">
          ขออนุมัติเดินทางไปเผยแพร่ผลงานในการประชุมทางวิชาการ
          <span class="flex justify-end text-red-600">ยื่นขอรับการสนับสนุนครบ 2 ครั้ง</span>
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
                  <h4 class="mr-5">ชื่อบทความ : {{ editForm.article_title }}</h4>
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
                  <h4 class="mr-5">ชื่องานประชุม : {{ editForm.article_name }}</h4>
                </div>
                <div class="flex">
                  <h4 class="mr-5">ชื่อบทความ : {{ editForm.article_title }}</h4>
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
import { useUserStore } from "@/store/userStore";
import { useRouter } from "vue-router";
import api from "@/setting/api";

const data = reactive({
  id: "",
  approvedConfer: 0,
  editForm: [],
});

const router = useRouter();

const userStore = useUserStore();
const user = computed(() => userStore.user);

if (!userStore.user.user_signature) {
  alert("กรุณาอัปโหลดลายเซ้นต์");
  router.push("/profile");
}

const getData = async () => {
  console.log("id", data.id);
  const res = await api.get(`/sumBudgets/${user.value?.user_id}`);
  console.log("res", res.data);
  data.approvedConfer = res.data.sumConfer.length;
  console.log("data.approvedConfer", data.approvedConfer);
  const resEdit = await api.get(`/form/${user.value?.user_id}`)
  console.log("data", resEdit.data);
  for(let i = 0; i < resEdit.data.length; i++){
    console.log("have edit ja", i)
    if(resEdit.data[i].edit_data != null){
      console.log("have edit ja", resEdit.data[i])
      data.editForm.push(resEdit.data[i])
    }
  }
  console.log("wow za", data.editForm)

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
