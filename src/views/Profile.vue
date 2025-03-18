<template>
  <div class="container my-10 mx-auto">
    <h1 class="text-xl font-bold">ข้อมูลส่วนตัว</h1>
    <div class="my-5">
      <TextInputLabelLeft
        label="ชื่อ (ภาษาไทย)"
        customLabel="w-4/12"
        customInput="w-full"
        :placeholder="user.user_nameth"
        disabled="true"
      />
    </div>

    <div class="my-5">
      <TextInputLabelLeft
        label="ชื่อ (ภาษาอังกฤษ)"
        customLabel="w-4/12"
        customInput="w-full"
        :placeholder="user.user_nameeng"
        disabled="true"
      />
    </div>

    <div class="my-5">
      <TextInputLabelLeft
        label="ตำแหน่ง (ภาษาไทย)"
        customLabel="w-4/12"
        customInput="w-full"
        :placeholder="user.user_positionth"
        disabled="true"
      />
    </div>

    <div class="my-5">
      <TextInputLabelLeft
        label="ตำแหน่ง (ภาษาอังกฤษ)"
        customLabel="w-4/12"
        customInput="w-full"
        :placeholder="user.user_positioneng"
        disabled="true"
      />
    </div>

    <div class="my-5">
      <TextInputLabelLeft
        label="อีเมล"
        customLabel="w-4/12"
        customInput="w-full"
        :placeholder="user.user_email"
        disabled="true"
      />
    </div>

    <div class="my-5">
      <TextInputLabelLeft
        label="ยอดคงเหลือของการขออนุมัติเดินทางไปเผยแพร่ผลงานในการประชุมวิชาการ"
        customLabel="w-full max-w-fit mr-5"
        customInput="w-full"
        :placeholder="user.user_moneyCF"
        disabled="true"
      />
    </div>

    <div class="my-5">
      <TextInputLabelLeft
        label="ยอดที่ใช้ของการขออนุมัติค่า Page Charge เพื่อตีพิมพ์ผลงานในวารสารวิชาการระดับนานาชาติ"
        customLabel="w-full max-w-fit mr-5"
        customInput="w-full"
        :placeholder="user.user_moneyPC"
        disabled="true"
      />
    </div>

    <div class="my-10 flex flex-col">
      <h1 class="text-xl font-bold">ลายเซ็น</h1>

      <div v-if="user.user_signature == null || user.user_signature == ''">
        <p class="text-red-600">
          สามารถอัปโหลดลายเซ็นได้เพียง 1 ครั้งเท่านั้น และสกุลไฟล์เป็น png
          กรุณาตรวจสอบความถูกต้องก่อนกดยืนยัน
        </p>

        <div class="my-5">
          <input
            type="file"
            class="file-input file-input-bordered w-full max-w-xs"
            @change="handleFile($event, 'signature')"
          />
        </div>

        <span v-if="v$.signature.$error" class="text-base ml-2 text-red-500">
          {{ v$.signature.$errors[0].$message }}
        </span>

        <div class="flex justify-end mr-5">
          <button @click="updatesignature" class="btn bg-blue-500 text-white">
            ตกลง
          </button>
        </div>
      </div>

      <div v-else>
        <p class="text-red-600">
          หากมีข้อผิดพลาดโปรดติดต่อเจ้าหน้าที่ที่เกี่ยวข้อง เพื่อแก้ไข
        </p>
        <div class="flex flex-row items-center w-full">
          <div class="flex flex-row items-center w-full">
            <div class="flex flex-row">
              <p>ดูลายเซ็นที่อัปโหลด</p>
            </div>
            <div class="">
              <button
                @click="getSignature"
                class="btn bg-[#E85F19] text-white ml-10"
              >
                ดูเอกสาร
              </button>
            </div>
          </div>
        </div>

        <img
          v-if="data.signature"
          :src="data.signature"
          alt="signature"
          class="w-64 h-64 mt-5"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, reactive } from "vue";

import { useVuelidate } from "@vuelidate/core";
import { helpers, required } from "@vuelidate/validators";

import { useUserStore } from "@/store/userStore";
import TextInputLabelLeft from "@/components/Input/TextInputLabelLeft.vue";
import api from "@/setting/api";

const userStore = useUserStore();

const user = computed(() => userStore.user);

const data = reactive({
  id: "",
  signature: null,
});

//validate rule
const rules = {
  signature: {
    required: helpers.withMessage("* กรุณาอัปโหลดไฟล์ *", required),
    fileType: helpers.withMessage(
      "* อัปโหลดได้เฉพาะไฟล์ png เท่านั้น *",
      (value) => {
        if (!value) return false;
        const allowedTypes = ["image/png"];
        return allowedTypes.includes(value.type);
      }
    ),
  },
};

const v$ = useVuelidate(rules, data);

onMounted(async () => {
  await userStore.fetchUser();

  data.id = user.value?.user_id;
});

const handleFile = (event, fieldName) => {
  const signature = event.target.files[0];
  if (signature) {
    data[fieldName] = signature;
    console.log(`File assigned to ${fieldName}:`, data[fieldName]);
    console.log("Updated data:", data);
  } else {
    console.error(`No file selected for ${fieldName}.`);
  }
};

const updatesignature = async () => {
  const result = await v$.value.$validate();

  if (result) {
    try {
      const DataforUpdate = {
        user_id: data.id,
        user_signature: data.signature,
      };

      console.log("DataforUpdate : ", DataforUpdate);

      const response = await api.put("/uploadSignature", DataforUpdate, {
        headers: {
          "Content-Type": "multipart/form-data", // Required for file uploads
        },
      });

      console.log(response)

      alert("อัปโหลดลายเซ็นเรียบร้อยแล้ว");

      location.reload();
    } catch (error) {
      console.log("error", error);
    }
  } else {
    alert("โปรดกรอกข้อมูลให้ครบถ้วน");
  }
};

const getSignature = async () => {
  const user_id = data.id;

  const res = await api.get(`/mySignature?user_id=${user_id}`);

  console.log(res);
  data.signature = res.data.fileUrl;
};
</script>
