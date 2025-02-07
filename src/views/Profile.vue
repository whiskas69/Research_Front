<template>
  <div class="container my-10 mx-auto">
    <h1 class="text-xl font-bold">ข้อมูลส่วนตัว</h1>
    <div class="my-5">
      <TextInputLabelLeft
        label="ชื่อ (ภาษาไทย)"
        customLabel="w-1/6"
        customInput="w-full"
        :placeholder="profileData.nameth"
        v-model="profileData.nameth"
        @input="handleInput('nameth', $event.target.value)"
      />
    </div>

    <div class="my-5">
      <TextInputLabelLeft
        label="ชื่อ (ภาษาอังกฤษ)"
        customLabel="w-1/6"
        customInput="w-full"
        :placeholder="profileData.nameeng"
        v-model="profileData.nameeng"
        @input="handleInput('nameeng', $event.target.value)"
      />
    </div>

    <div class="my-5">
      <TextInputLabelLeft
        label="ตำแหน่ง"
        customLabel="w-1/6"
        customInput="w-full"
        :placeholder="profileData.position"
        v-model="profileData.position"
        @input="handleInput('position', $event.target.value)"
      />
    </div>

    <div class="my-5">
      <TextInputLabelLeft
        label="อีเมล"
        customLabel="w-1/6"
        customInput="w-full"
        :placeholder="profileData.email"
        v-model="profileData.email"
        disabled="true"
      />
    </div>

    <div class="my-5">
      <TextInputLabelLeft
        label="ยอดคงเหลือของการขออนุมัติเดินทาง ไปเผยแพร่ผลงานในการประชุมวิชาการ"
        customLabel="w-full max-w-fit mr-5"
        customInput="w-full"
        :placeholder="profileData.money"
        v-model="profileData.money"
        disabled="true"
      />
    </div>

    <button @click="updatedProfile" class="btn bg-blue-500 text-white">
      ตกลง
    </button>

    <div class="my-10 flex flex-col">
      <h1 class="text-xl font-bold">ลายเซ็น</h1>
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

      <div>
        <button @click="updatesignature" class="btn bg-blue-500 text-white">
          ตกลง
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, reactive } from "vue";

import { useUserStore } from "@/store/userStore";
import TextInputLabelLeft from "@/components/Input/TextInputLabelLeft.vue";
import api from "@/setting/api";

const userStore = useUserStore();

const profileData = reactive({
  Id: "",
  nameth: "",
  nameeng: "",
  position: "",
  email: "",
  money: "",
  signature: null,
});

const user = computed(() => userStore.user);

onMounted(async () => {
  await userStore.fetchUser();
  console.log("user : ", user.value?.user_id);

  // อัปเดตค่าหลังจาก `user` โหลดเสร็จ
  profileData.Id = user.value?.user_id;
  profileData.nameth = user.value?.user_nameth || "";
  profileData.nameeng = user.value?.user_nameeng || "";
  profileData.position = user.value?.user_position || "";
  profileData.email = user.value?.user_email || "";
  profileData.money = user.value?.user_money || "";
  profileData.signature = user.value?.user_signature || "";
});

const handleInput = (key, value) => {
  profileData[key] = value;
};

const handleFile = (event, fieldName) => {
  const signature = event.target.files[0];
  if (signature) {
    profileData[fieldName] = signature;
    console.log(`File assigned to ${fieldName}:`, profileData[fieldName]);
    console.log("Updated profileData:", profileData);
  } else {
    console.error(`No file selected for ${fieldName}.`);
  }
};

const updatedProfile = async () => {
  try {
    const DataforUpdate = {
      user_id: profileData.Id,
      user_nameth: profileData.nameth,
      user_nameeng: profileData.nameeng,
      user_position: profileData.position,
      user_email: profileData.email,
      user_money: profileData.money,
    };

    console.log("DataforUpdate : ", DataforUpdate);
    const response = await api.put("/profileupdate", DataforUpdate);

    alert("Update Success");
    console.log("response : ", response);

    location.reload();
  } catch (error) {
    console.log("error", error);
  }
};

const updatesignature = async () => {
  try {
    const DataforUpdate = {
      user_id: profileData.Id,
      user_signature: profileData.signature,
    };

    console.log("DataforUpdate : ", DataforUpdate);
    const response = await api.put("/signatureupdate", DataforUpdate, {
      headers: {
        "Content-Type": "multipart/form-data", // Required for file uploads
      },
    });

    alert("Update Success");
    console.log("response : ", response);

    location.reload();
  } catch (error) {
    console.log("error", error);
  }
};
</script>
