<template>
  <div>
    <div class="container my-10 mx-auto">
      <p class="text-xl font-bold pb-5">การจัดการผู้ใช้</p>
      <!-- table -->
      <div class="overflow-x-auto">
        <table class="table">
          <!-- head -->
          <thead>
            <tr>
              <th></th>

              <th class="text-xl text-black text-center">ชื่อผู้ใช้</th>
              <th class="text-xl text-black text-center">หน้าที่ของผู้ใช้</th>
              <th class="text-xl text-black text-center">
                ยอดเงินการขออนุมัติเดินทางไปเผยแพร่ผลงานในการประชุมวิชาการ
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody v-for="(user, index) in formData.users" :key="user.user_id">
            <!-- row 1 -->
            <tr>
              <th class="text-center">{{ index + 1 }}</th>

              <td class="text-center">{{ user.user_nameth }}</td>
              <td class="text-center">{{ user.user_role }}</td>
              <td class="text-center">
                <select
                  class="select select-bordered w-full max-w-xs"
                  v-model="selectedRole"
                >
                  <option
                    v-for="(thai, eng) in roleMapping"
                    :key="eng"
                    :value="thai"
                  >
                    {{ thai }}
                  </option>
                </select>
              </td>
              <td class="text-center">{{ user.user_moneyCF }}</td>
              <td class="text-center">
                <button class="btn btn-error text-base text-white">
                  ลบผู้ใช้
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex justify-end mt-5">
        <button class="btn btn-success text-white">ยืนยัน</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, reactive, onMounted } from "vue";
import axios from "axios";
const formData = reactive({
  users: [],
});

const roleMapping = {
  professor: "อาจารย์",
  admin: "ผู้ดูแล",
  hr: "เจ้าหน้าที่ HR",
  research: "เจ้าหน้าที่งานวิจัย",
  finance: "เจ้าหน้าที่การเงิน",
  associate: "รองคณบดี",
  dean: "คณบดี",
};

const reverseRoleMapping = Object.fromEntries(
  Object.entries(roleMapping).map(([key, value]) => [value, key])
);

// คำนวณค่าเริ่มต้น
const selectedRole = computed({
  get: () => {
    console.log("user.user_role:", formData.users.user_role);
    roleMapping[formData.users.user_role] || "อาจารย์";
  }, // ถ้าไม่มีค่าให้ default เป็น "อาจารย์"
  set: (newValue) => {
    console.log("newValue:", newValue);
    formData.users.user_role = reverseRoleMapping[newValue];
  },// ค่าที่ selece มาใหม่
});
const fetchOfficerData = async () => {
  try {
    const responseUser = await axios.get(`http://localhost:3000/users`);
    console.log("get all user: ", responseUser.data);
    formData.users = responseUser.data;
    console.log("user123", formData.users);
    console.log("user_nameth", formData.users.user_nameth);
  } catch (error) {
    console.error("Error fetching Officer data:", error);
  } finally {
    isLoading.value = false;
  }
};
onMounted(async () => {
  await fetchOfficerData();
  console.log("user.user_role ตอนโหลด:", user.user_role);
});
</script>
