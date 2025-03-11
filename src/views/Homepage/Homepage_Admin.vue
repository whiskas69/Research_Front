<template>
  <div class="relative">
    <div class="container my-10 mx-auto">
      <p class="text-xl font-bold pb-5">การจัดการผู้ใช้</p>
      <p class="text-xl font-bold pb-5">มีการเพิ่มผุใช้ด้วย</p>
      <TextInputLabelLeft
        label="ชื่อ (ภาษาไทย)"
        customLabel="mr-2"
        customInput="max-w-max"
        customDiv="max-w-max"
        @input="handleInputUser('nameth', $event)"
      />
      <TextInputLabelLeft
        label="ชื่อ (ภาษาอังกฤษ)"
        customLabel="mr-2"
        customInput="max-w-max"
        customDiv="max-w-max"
        @input="handleInputUser('nameeng', $event)"
      />
      <select
        class="select select-bordered flex-1"
        @change="handleInputUser('role', $event)"
      >
        <option disabled selected>เลือกหน้าที่ผู้ใช้</option>
        <option :value="'professor'">อาจารย์</option>
        <option :value="'hr'">เจ้าหน้าที่บริหารทรัพยากรบุคคล</option>
        <option :value="'research'">เจ้าหน้าที่งานวิจัย</option>
        <option :value="'finance'">เจ้าหน้าที่การเงิน</option>
        <option :value="'associate'">รองคณบดี</option>
        <option :value="'dean'">คณบดี</option>
        <option :value="'admin'">ผู้ดูแล</option>
      </select>
      <TextInputLabelLeft
        label="อีเมล"
        customLabel="mr-2"
        customInput="max-w-max"
        customDiv="max-w-max"
        @input="handleInputUser('email', $event)"
      />
      <TextInputLabelLeft
        label="ตำแหน่ง (ภาษาไทย)"
        customLabel="mr-2"
        customInput="max-w-max"
        customDiv="max-w-max"
        @input="handleInputUser('positionth', $event)"
      />
      <TextInputLabelLeft
        label="ตำแหน่ง (ภาษาอังกฤษ)"
        customLabel="mr-2"
        customInput="max-w-max"
        customDiv="max-w-max"
        @input="handleInputUser('positioneng', $event)"
      />
      <TextInputLabelLeft
        label="วันที่เริ่มทำงาน"
        type="date"
        customLabel="mr-2"
        customInput="max-w-max"
        customDiv="max-w-max"
        @input="handleInputUser('startwork', $event)"
      />
      <TextInputLabelLeft
        label="จำนวนปีที่เริ่มทำงาน"
        customLabel="mr-2"
        customInput="max-w-max"
        customDiv="max-w-max"
        @input="handleInputUser('year', $event)"
      />
      <TextInputLabelLeft
        label="ยอดเงินการขออนุมัติเดินทางไปเผยแพร่ผลงานในการประชุมวิชาการ"
        customLabel="mr-2"
        customInput="max-w-max"
        customDiv="max-w-max"
        @input="handleInputUser('moneyCF', $event)"
      />
      <button @click="addUser" class="btn btn-error text-base text-white">
        เพิ่มผู้ใช้
      </button>
      <!-- ปุ่มแก้ไข -->
      <div class="flex justify-end mt-5">
        <button @click="openEdit" class="btn btn-success text-base text-white">
          แก้ไข
        </button>
      </div>

      <!-- Overlay แสดงทับ -->
      <div
        v-show="showEdit"
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 pt-6"
      >
        <div
          class="bg-white p-5 rounded-lg shadow-lg w-5xl max-h-screen overflow-auto"
        >
          <button
            @click="closeEdit"
            class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            <b>x</b>
          </button>

          <p class="text-xl font-bold">แก้ไขข้อมูล</p>

          <!-- table -->
          <div class="overflow-x-auto">
            <table class="table">
              <!-- head -->
              <thead>
                <tr>
                  <th></th>
                  <th class="text-xl text-black text-center">ชื่อผู้ใช้</th>
                  <th class="text-xl text-black text-center">
                    หน้าที่ของผู้ใช้เดิม
                  </th>
                  <th class="text-xl text-black text-center">
                    แก้ไขหน้าที่ของผู้ใช้
                  </th>
                  <th class="text-xl text-black text-center">
                    ยอดเงินการขออนุมัติเดินทางไปเผยแพร่ผลงานในการประชุมวิชาการ
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody
                v-for="(user, index) in formData.users"
                :key="user.user_id"
              >
                <tr>
                  <th class="text-center">{{ index + 1 }}</th>
                  <td class="text-center">{{ user.user_nameth }}</td>
                  <td class="text-center">{{ user.user_role }}</td>
                  <td class="text-center">
                    <select
                      class="select select-bordered flex-1"
                      @change="handleInput(user.user_id, $event, 'role')"
                    >
                      <option disabled selected>เลือกหน้าที่ผู้ใช้</option>
                      <option :value="'professor'">อาจารย์</option>
                      <option :value="'hr'">
                        เจ้าหน้าที่บริหารทรัพยากรบุคคล
                      </option>
                      <option :value="'research'">เจ้าหน้าที่งานวิจัย</option>
                      <option :value="'finance'">เจ้าหน้าที่การเงิน</option>
                      <option :value="'associate'">รองคณบดี</option>
                      <option :value="'dean'">คณบดี</option>
                      <option :value="'admin'">ผู้ดูแล</option>
                    </select>
                  </td>
                  <td class="text-center">
                    <TextInputLabelLeft
                      v-if="user.user_role == 'professor'"
                      customLabel="w-auto min-w-fit"
                      customDiv="max-w-max mr-10"
                      :placeholder="user.user_moneyCF"
                      @input="handleInput(user.user_id, $event, 'money')"
                    />
                  </td>
                  <td class="text-center">
                    <button
                      @click="deleteUser(user.user_id)"
                      class="btn btn-error text-base text-white"
                    >
                      ลบผู้ใช้
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="flex justify-end mt-5">
              <button @click="closeEdit" class="btn btn-success text-white">
                ยืนยัน
              </button>
              <button @click="updateUserRoles" class="btn btn-primary">
                อัปเดตข้อมูล
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- table -->
      <div class="overflow-x-auto">
        <table class="table">
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
            <tr>
              <th class="text-center">{{ index + 1 }}</th>
              <td class="text-center">{{ user.user_nameth }}</td>
              <td class="text-center">{{ user.user_role }}</td>
              <td class="text-center" v-if="user.user_role == 'professor'">
                {{ user.user_moneyCF }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from "vue";
import axios from "axios";
import api from "@/setting/api";
import TextInputLabelLeft from "@/components/Input/TextInputLabelLeft.vue";

const showEdit = ref(false);

// เปิด Overlay และปิด Scroll ของ body
const openEdit = () => {
  showEdit.value = true;
  document.body.classList.add("overflow-hidden"); // ปิด Scroll ของหน้าเว็บ
};

// ปิด Overlay และคืนค่า Scroll ของ body
const closeEdit = () => {
  showEdit.value = false;
  document.body.classList.remove("overflow-hidden"); // เปิด Scroll กลับ
};

const formData = reactive({
  users: [],
  userRoles: [],
  userMoneyCF: [],

  role: "",
  nameth: "",
  nameeng: "",
  email: "",
  moneyCF: "",
  positionth: "",
  positioneng: "",
  startwork: "",
  year: "",
});
const inputTypes = {
  role: "string",
  nameth: "string",
  nameeng: "string",
  email: "string",
  moneyCF: "number",
  positionth: "string",
  positioneng: "string",
  startwork: "date",
  year: "number",
};
const handleInputUser = (key, event) => {
  const value = event.target.value.trim();
  const type = inputTypes[key];
  if (type === "number") {
    formData[key] = value === "" ? null : parseInt(value, 10);
  } else {
    formData[key] = value;
  }
  console.log(`Updated formData ${key} is ${value}:`);
  // JSON.stringify(formData)
};

const handleInput = (id, event, type) => {
  let value = event.target.value.trim(); // ตัดช่องว่าง
  let targetArray =
    type === "money" ? formData.userMoneyCF : formData.userRoles;

  // แปลงค่าเป็นตัวเลขถ้าเป็น `money`
  if (type === "money") {
    value = value ? parseInt(value, 10) : 0; // ถ้าเป็นค่าว่างให้เป็น `0`
  }
  // ตรวจสอบว่ามี `id` นี้อยู่แล้วหรือไม่
  const index = targetArray.findIndex((item) => item.id === id);
  console.log("index", index);
  if (index !== -1) {
    // ถ้ามีแล้วให้อัปเดตค่าใหม่
    targetArray[index].value = value;
  } else {
    // ถ้ายังไม่มีให้เพิ่ม Object ใหม่เข้าไป
    targetArray.push({ id, value });
  }

  console.log(`Updated ${type} ${index}:`, JSON.stringify(targetArray));
};

const isLoading = ref(true);

const fetchOfficerData = async () => {
  try {
    const responseUser = await axios.get(`http://localhost:3000/users`);
    formData.users = responseUser.data;
  } catch (error) {
    console.error("Error fetching Officer data:", error);
  } finally {
    isLoading.value = false;
  }
};

const updateUserRoles = async () => {
  try {
    const mergedData = [...formData.userRoles, ...formData.userMoneyCF];
    console.log("mergedData", mergedData);
    const response = await axios.put("http://localhost:3000/updateRoles", {
      userUpdates: mergedData, // ส่ง userRoles [{ id: 1, value: 'admin' }, ...]
    });

    console.log("Response from server:", response.data);

    alert("บันทึกข้อมูลเรียบร้อยแล้ว");
    location.reload();
  } catch (error) {
    console.error("Error updating user roles:", error);
    alert("เกิดข้อผิดพลาดในการอัปเดตข้อมูล");
  }
};
const addUser = async () => {
  try {
    const dataForBackend = {
      user_role: formData.role,
      user_nameth: formData.nameth,
      user_nameeng: formData.nameeng,
      user_email: formData.email,
      user_moneyCF: formData.moneyCF,
      user_positionth: formData.positionth,
      user_positioneng: formData.positioneng,
      user_startwork: formData.startwork,
      user_year: formData.year,
    };
    console.log("post user: ", JSON.stringify(dataForBackend));
    const response = await api.post("/user", dataForBackend, {
      headers: {
     "Content-Type": "application/json",
  },
    });
    console.log("post response: ", response);
    alert("บันทึกข้อมูลเรียบร้อยแล้ว");
    
  } catch (error) {
    console.log("Error saving code : ", error);

    alert("ไม่สามารถส่งข้อมูล โปรดลองอีกครั้งในภายหลัง");
  }
};

const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:3000/user/${id}`, {
      id, // ส่ง userRoles [{ id: 1, value: 'admin' }, ...]
    });

    console.log("delete id:", response.data);

    alert("ลบผู้ใช้เรียบร้อย");
    window.location.reload();
  } catch (error) {
    console.error("Error updating user roles:", error);
    alert("เกิดข้อผิดพลาดในการอัปเดตข้อมูล");
  }
};

onMounted(async () => {
  await fetchOfficerData();
});
</script>

<style>
/* ป้องกันการ Scroll ของหน้าเว็บเมื่อ Overlay เปิด */
body.overflow-hidden {
  overflow: hidden;
}
</style>
