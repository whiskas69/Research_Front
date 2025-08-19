<template>
    <div class="container my-10 mx-auto h-screen">
      <div class="h-[35%]">
        <p class="text-xl font-bold mb-2">เอกสารต้องตรวจสอบ</p>

        <div class="h-full p-2 mb-2 border rounded-lg overflow-auto">
          <!-- Loop forms ทั้งหมด -->
          <div v-for="form in listForm.forms" :key="form.form_id">
            <!-- Conference -->
            <div v-if="form.form_type == 'Conference'">
              <div v-if="userStore.user.user_role === 'hr'">
                <router-link :to="`/officeFormConference/hr/${form.conf_id}`">
                  <div
                    class="my-2 py-2 border border-[#D9D9D9] rounded-md text-black hover:cursor-pointer"
                  >
                    <p class="flex justify-between px-5 py-1 text-left">
                      <span class="text-base">{{
                        getNameById(listForm.nameC, form.conf_id)
                      }}</span>
                      <span class="text-base text-[#868181]"
                        >ขออนุมัติเดินทางไปประชุมวิชาการ</span
                      >
                    </p>
                  </div>
                </router-link>
              </div>

              <div v-if="userStore.user.user_role === 'research'">
                <router-link
                  :to="`/officeFormConference/research/${form.conf_id}`"
                >
                  <div
                    class="my-2 py-2 border border-[#D9D9D9] rounded-md text-black hover:cursor-pointer"
                  >
                    <p class="flex justify-between px-5 py-1 text-left">
                      <span class="text-base">{{
                        getNameById(listForm.nameC, form.conf_id)
                      }}</span>
                      <span class="text-base text-[#868181]"
                        >ขออนุมัติเดินทางไปประชุมวิชาการ</span
                      >
                    </p>
                  </div>
                </router-link>
              </div>

              <div v-if="userStore.user.user_role === 'finance'">
                <router-link
                  :to="`/officeFormConference/finance/${form.conf_id}`"
                >
                  <div
                    class="my-2 py-2 border border-[#D9D9D9] rounded-md text-black hover:cursor-pointer"
                  >
                    <p class="flex justify-between px-5 py-1 text-left">
                      <span class="text-base">{{
                        getNameById(listForm.nameC, form.conf_id)
                      }}</span>
                      <span class="text-base text-[#868181]"
                        >ขออนุมัติเดินทางไปประชุมวิชาการ</span
                      >
                    </p>
                  </div>
                </router-link>
              </div>

              <div v-if="userStore.user.user_role === 'associate'">
                <router-link
                  :to="`/officeFormConference/associate/${form.conf_id}`"
                >
                  <div
                    class="my-2 py-2 border border-[#D9D9D9] rounded-md text-black hover:cursor-pointer"
                  >
                    <p class="flex justify-between px-5 py-1 text-left">
                      <span class="text-base">{{
                        getNameById(listForm.nameC, form.conf_id)
                      }}</span>
                      <span class="text-base text-[#868181]"
                        >ขออนุมัติเดินทางไปประชุมวิชาการ</span
                      >
                    </p>
                  </div>
                </router-link>
              </div>

              <div v-if="userStore.user.user_role === 'dean'">
                <router-link :to="`/officeFormConference/dean/${form.conf_id}`">
                  <div
                    class="my-2 py-2 border border-[#D9D9D9] rounded-md text-black hover:cursor-pointer"
                  >
                    <p class="flex justify-between px-5 py-1 text-left">
                      <span class="text-base">{{
                        getNameById(listForm.nameC, form.conf_id)
                      }}</span>
                      <span class="text-base text-[#868181]"
                        >ขออนุมัติเดินทางไปประชุมวิชาการ</span
                      >
                    </p>
                  </div>
                </router-link>
              </div>
            </div>

            <!-- Page Charge -->
            <div v-if="form.form_type == 'Page_Charge'">
              <div v-if="userStore.user.user_role === 'research'">
                <router-link
                  :to="`/officeFormPageCharge/research/${form.pageC_id}`"
                >
                  <div
                    class="my-2 py-2 border border-[#D9D9D9] rounded-md text-black hover:cursor-pointer"
                  >
                    <p class="flex justify-between px-5 py-1 text-left">
                      <span>
                        <span class="text-base">{{
                          getNameById(listForm.nameP, form.pageC_id)
                        }}</span>
                        <span class="text-sm px-2 text-red-900">
                          ({{
                            getFileById(listForm.nameP, form.pageC_id)
                          }})</span
                        >
                      </span>
                      <span class="text-base text-[#868181]"
                        >ขออนุมัติค่า Page Charge</span
                      >
                    </p>
                  </div>
                </router-link>
              </div>

              <div v-if="userStore.user.user_role === 'finance'">
                <router-link
                  :to="`/officeFormPageCharge/finance/${form.pageC_id}`"
                >
                  <div
                    class="my-2 py-2 border border-[#D9D9D9] rounded-md text-black hover:cursor-pointer"
                  >
                    <p class="flex justify-between px-5 py-1 text-left">
                      <span>
                        <span class="text-base">{{
                          getNameById(listForm.nameP, form.pageC_id)
                        }}</span>
                        <span class="text-sm px-2 text-red-900">
                          ({{
                            getFileById(listForm.nameP, form.pageC_id)
                          }})</span
                        >
                      </span>
                      <span class="text-base text-[#868181]"
                        >ขออนุมัติค่า Page Charge</span
                      >
                    </p>
                  </div>
                </router-link>
              </div>

              <div v-if="userStore.user.user_role === 'associate'">
                <router-link
                  :to="`/officeFormPageCharge/associate/${form.pageC_id}`"
                >
                  <div
                    class="my-2 py-2 border border-[#D9D9D9] rounded-md text-black hover:cursor-pointer"
                  >
                    <p class="flex justify-between px-5 py-1 text-left">
                      <span>
                        <span class="text-base">{{
                          getNameById(listForm.nameP, form.pageC_id)
                        }}</span>
                        <span class="text-sm px-2 text-red-900">
                          ({{
                            getFileById(listForm.nameP, form.pageC_id)
                          }})</span
                        >
                      </span>
                      <span class="text-base text-[#868181]"
                        >ขออนุมัติค่า Page Charge</span
                      >
                    </p>
                  </div>
                </router-link>
              </div>

              <div v-if="userStore.user.user_role === 'dean'">
                <router-link
                  :to="`/officeFormPageCharge/dean/${form.pageC_id}`"
                >
                  <div
                    class="my-2 py-2 border border-[#D9D9D9] rounded-md text-black hover:cursor-pointer"
                  >
                    <p class="flex justify-between px-5 py-1 text-left">
                      <span>
                        <span class="text-base">{{
                          getNameById(listForm.nameP, form.pageC_id)
                        }}</span>
                        <span class="text-sm px-2 text-red-900">
                          ({{
                            getFileById(listForm.nameP, form.pageC_id)
                          }})</span
                        >
                      </span>
                      <span class="text-base text-[#868181]"
                        >ขออนุมัติค่า Page Charge</span
                      >
                    </p>
                  </div>
                </router-link>
              </div>
            </div>

            <!-- Research_KRIS -->
            <div v-if="form.form_type == 'Research_KRIS'">
              <router-link :to="`/officeFormKris/research/${form.kris_id}`">
                <div
                  class="my-2 py-2 border border-[#D9D9D9] rounded-md text-black hover:cursor-pointer"
                >
                  <p class="flex justify-between px-5 py-1 text-left">
                    <span class="text-base">{{
                      getNameById(listForm.nameK, form.kris_id)
                    }}</span>
                    <span class="text-base text-[#868181]"
                      >แบบเสนอโครงการวิจัย</span
                    >
                  </p>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <div class="h-[40%]">
        <p class="text-xl font-bold mt-10 mb-2 ">เอกสารที่ถูกตีกลับ</p>
        <div class="h-full p-2 mb-2 border rounded-lg overflow-auto">
          <!-- Loop forms ทั้งหมด -->
          <div v-for="form in listForm.return" :key="form.form_id">
            <!-- Conference -->
            <div v-if="form.form_type == 'Conference' && form.form_status == 'return'">
              <div v-if="userStore.user.user_role === 'hr' && form.return_to === 'hr'">
                <router-link :to="`/officeFormConference/hr/${form.conf_id}`">
                  <div class="my-2 py-2 border border-[#D9D9D9] rounded-md text-black hover:cursor-pointer">
                    <p class="flex justify-between px-5 py-1 text-left">
                      <span class="text-base">ชื่อผู้ยื่นขอสนับสนุน: {{ form.user_nameth }}</span>
                      <span class="text-base text-[#868181]"
                        >ขออนุมัติเดินทางไปประชุมวิชาการ</span
                      >
                    </p>
                    <p class="px-5 py-1 text-left">เหตุผลการตีกลับ: {{ form.return_note }}</p>
                  </div>
                </router-link>
              </div>

              <div v-if="userStore.user.user_role === 'research' && form.return_to === 'research'">
                <router-link
                  :to="`/officeFormConference/research/${form.conf_id}`"
                >
                  <div class="my-2 py-2 border border-[#D9D9D9] rounded-md text-black hover:cursor-pointer">
                    <p class="flex justify-between px-5 py-1 text-left">
                      <span class="text-base">ชื่อผู้ยื่นขอสนับสนุน: {{ form.user_nameth }}</span>
                      <span class="text-base text-[#868181]"
                        >ขออนุมัติเดินทางไปประชุมวิชาการ</span
                      >
                    </p>
                    <p class="px-5 py-1 text-left">เหตุผลการตีกลับ: {{ form.return_note }}</p>
                  </div>
                </router-link>
              </div>

              <div v-if="userStore.user.user_role === 'finance' && form.return_to === 'finance'">
                <router-link
                  :to="`/officeFormConference/finance/${form.conf_id}`"
                >
                  <div class="my-2 py-2 border border-[#D9D9D9] rounded-md text-black hover:cursor-pointer">
                    <p class="flex justify-between px-5 py-1 text-left">
                      <span class="text-base">ชื่อผู้ยื่นขอสนับสนุน: {{ form.user_nameth }}</span>
                      <span class="text-base text-[#868181]"
                        >ขออนุมัติเดินทางไปประชุมวิชาการ</span
                      >
                    </p>
                    <p class="px-5 py-1 text-left">เหตุผลการตีกลับ: {{ form.return_note }}</p>
                  </div>
                </router-link>
              </div>

              <div v-if="userStore.user.user_role === 'associate' && form.return_to === 'associate'">
                <router-link
                  :to="`/officeFormConference/associate/${form.conf_id}`"
                >
                  <div class="my-2 py-2 border border-[#D9D9D9] rounded-md text-black hover:cursor-pointer">
                    <p class="flex justify-between px-5 py-1 text-left">
                      <span class="text-base">ชื่อผู้ยื่นขอสนับสนุน: {{ form.user_nameth }}</span>
                      <span class="text-base text-[#868181]"
                        >ขออนุมัติเดินทางไปประชุมวิชาการ</span
                      >
                    </p>
                    <p class="px-5 py-1 text-left">เหตุผลการตีกลับ: {{ form.return_note }}</p>
                  </div>
                </router-link>
              </div>

              <div v-if="userStore.user.user_role === 'dean' && form.return_to === 'dean'">
                <router-link :to="`/officeFormConference/dean/${form.conf_id}`">
                  <div class="my-2 py-2 border border-[#D9D9D9] rounded-md text-black hover:cursor-pointer">
                    <p class="flex justify-between px-5 py-1 text-left">
                      <span class="text-base">ชื่อผู้ยื่นขอสนับสนุน: {{ form.user_nameth }}</span>
                      <span class="text-base text-[#868181]"
                        >ขออนุมัติเดินทางไปประชุมวิชาการ</span
                      >
                    </p>
                    <p class="px-5 py-1 text-left">เหตุผลการตีกลับ: {{ form.return_note }}</p>
                  </div>
                </router-link>
              </div>
            </div>

            <!-- Page Charge -->
            <div v-if="form.form_type == 'Page_Charge' && form.form_status == 'return'">
              <div v-if="userStore.user.user_role === 'research' && form.return_to === 'research'">
                <router-link
                  :to="`/officeFormPageCharge/research/${form.pageC_id}`"
                >
                  <div class="my-2 py-2 border border-[#D9D9D9] rounded-md text-black hover:cursor-pointer">
                    <p class="flex justify-between px-5 py-1 text-left">
                      <span class="text-base">ชื่อผู้ยื่นขอสนับสนุน: {{ form.user_nameth }}</span>
                      <span class="text-base text-[#868181]">ขออนุมัติค่า Page Charge</span>
                    </p>
                    <p class="px-5 py-1 text-left">เหตุผลการตีกลับ: {{ form.return_note }}</p>
                  </div>
                </router-link>
              </div>

              <div v-if="userStore.user.user_role === 'finance' && form.return_to === 'finance'">
                <router-link
                  :to="`/officeFormPageCharge/finance/${form.pageC_id}`"
                >
                  <div class="my-2 py-2 border border-[#D9D9D9] rounded-md text-black hover:cursor-pointer">
                    <p class="flex justify-between px-5 py-1 text-left">
                      <span class="text-base">ชื่อผู้ยื่นขอสนับสนุน: {{ form.user_nameth }}</span>
                      <span class="text-base text-[#868181]">ขออนุมัติค่า Page Charge</span>
                    </p>
                    <p class="px-5 py-1 text-left">เหตุผลการตีกลับ: {{ form.return_note }}</p>
                  </div>
                </router-link>
              </div>

              <div v-if="userStore.user.user_role === 'associate' && form.return_to === 'associate'">
                <router-link
                  :to="`/officeFormPageCharge/associate/${form.pageC_id}`"
                >
                  <div class="my-2 py-2 border border-[#D9D9D9] rounded-md text-black hover:cursor-pointer">
                    <p class="flex justify-between px-5 py-1 text-left">
                      <span class="text-base">ชื่อผู้ยื่นขอสนับสนุน: {{ form.user_nameth }}</span>
                      <span class="text-base text-[#868181]">ขออนุมัติค่า Page Charge</span>
                    </p>
                    <p class="px-5 py-1 text-left">เหตุผลการตีกลับ: {{ form.return_note }}</p>
                  </div>
                </router-link>
              </div>

              <div v-if="userStore.user.user_role === 'dean' && form.return_to === 'dean'">
                <router-link
                  :to="`/officeFormPageCharge/dean/${form.pageC_id}`"
                >
                  <div class="my-2 py-2 border border-[#D9D9D9] rounded-md text-black hover:cursor-pointer">
                    <p class="flex justify-between px-5 py-1 text-left">
                      <span class="text-base">ชื่อผู้ยื่นขอสนับสนุน: {{ form.user_nameth }}</span>
                      <span class="text-base text-[#868181]">ขออนุมัติค่า Page Charge</span>
                    </p>
                    <p class="px-5 py-1 text-left">เหตุผลการตีกลับ: {{ form.return_note }}</p>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref, onMounted, reactive } from "vue";
import { useUserStore } from "@/store/userStore";
import api from "@/setting/api";
import { useRouter } from "vue-router";

const router = useRouter();

const userStore = useUserStore();
const listForm = reactive({
  forms: [],
  nameC: [],
  nameP: [],
  nameK: [],
  return: [],
});

if (!userStore.user.user_signature) {
  alert("กรุณาอัปโหลดลายเซ็น");
  router.push("/profile");
}

const isLoading = ref(true);
const fetchOfficerData = async () => {
  try {
    const responseOffice = await api.get("/formsOffice");
    // ตรวจสอบว่ามีข้อมูลก่อน
    if (
      !responseOffice.data.forms ||
      !Array.isArray(responseOffice.data.forms)
    ) {
      console.log("Invalid forms data");
      return;
    }
    // ค้นหาทุก form ที่ตรงกับเงื่อนไข
    // กรองข้อมูลตาม user role
    let filteredForms = responseOffice.data.forms.filter((form) => {
      if (userStore.user.user_role === "hr") {
        return form.form_status === "hr";
      }
      if (userStore.user.user_role === "research") {
        return form.form_status === "research";
      }
      if (userStore.user.user_role === "finance") {
        return form.form_status === "finance";
      }
      if (userStore.user.user_role === "associate") {
        return form.form_status === "associate";
      }
      if (userStore.user.user_role === "dean") {
        return form.form_status === "dean";
      }
      return false;
    });
    for (let i = 0; i < filteredForms.length; i++) {
      if (filteredForms.length > 0) {
        if (
          filteredForms[i].edit_data == "" ||
          filteredForms[i].edit_data == null
        ) {
          listForm.forms.push(filteredForms[i]);
          listForm.nameC = responseOffice.data.confer;
          listForm.nameP = responseOffice.data.pageC;
          listForm.nameK = responseOffice.data.kris;
        } else if (
          filteredForms[i].professor_reedit == true &&
          filteredForms[i].edit_data !== ""
        ) {
          listForm.forms.push(filteredForms[i]);
          listForm.nameC = responseOffice.data.confer;
          listForm.nameP = responseOffice.data.pageC;
          listForm.nameK = responseOffice.data.kris;
        }
      }
    }

    // listForm.return = responseOffice.data.forms;

     listForm.return = responseOffice.data.forms.map((form) => {
      let userData = null;

      if (form.form_type === "Conference") {
        userData = responseOffice.data.confer.find(([id]) => id === form.conf_id)?.[1];
      } else if (form.form_type === "Page_Charge") {
        userData = responseOffice.data.pageC.find(([id]) => id === form.pageC_id)?.[1];
      } else if (form.form_type === "Kris") {
        userData = responseOffice.data.kris.find(([id]) => id === form.kris_id)?.[1];
      }

      return {
        ...form,
        ...(userData || {}) // ถ้าเจอ userData จะ merge เข้าไป
      };
    });
  } catch (error) {
    console.log("Error fetching Officer data:", error);
  } finally {
    isLoading.value = false;
  }
};

// ฟังก์ชันสำหรับดึงชื่อจาก nameC, nameP หรือ nameK
const getNameById = (nameList, id) => {
  const nameObj = nameList.find((item) => item[0] === id);
  return nameObj ? nameObj[1].user_nameth : "ไม่พบชื่อ";
};
const getFileById = (file, id) => {
  const fileObj = file.find((item) => item[0] === id);
  console.log("fileObj", fileObj);
  return fileObj[1].accepted ? "มีจดหมายตอบรับ" : "ไม่มีจดหมายตอบรับ";
};
onMounted(async () => {
  fetchOfficerData();
  if (!userStore.user) {
    await userStore.fetchUser();
  }
});
</script>
