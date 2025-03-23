<template>
  <div class="container my-10 mx-auto">
    <div class="flex justify-end">
      <button class="btn btn-success text-white">Export to Excel.CSV</button>
    </div>
    <div class="tabs tabs-lift">
      <input
        type="radio"
        name="mytabs"
        class="tab"
        aria-label="การประชุมวิชาการนานาชาติ"
        checked="checked"
      />
      <div class="tab-content bg-base-100 border-base-300 p-6">
        <h2>ข้อมูลทั้งหมดของ Conference</h2>
        <div class="overflow-x-auto mt-5">
          <table class="table w-full">
            <thead>
              <tr class="text-center">
                <th>ลำดับที่</th>
                <th>ชื่อ</th>
                <th>ชื่อผลงานวิจัย</th>
                <th>ชื่อการประชุม</th>
                <th>จังหวัด/ประเทศ</th>
                <th>คณะร่วมจัด/อยู่ใน Scopus</th>
                <th>คุณภาพการประชุม</th>
                <th>ครั้งที่ในการลา</th>
                <th>ขอเบิก</th>
                <th>ค่าลงทะเบียน</th>
                <th>ค่าใช้จ่ายอื่น ๆ</th>
                <th>ค่าใช้จ่ายทั้งหมด</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, index) in conferenceData" :key="index" class="text-center">
                <td>{{ row.conf_id }}</td>
                <td>{{ row.user_nameth }}</td>
                <td>{{ row.conf_name }}</td>
                <td>{{ row.conf_research }}</td>
                <td>{{ row.location }}</td>
                <td>{{ row.meeting_type }}</td>
                <td>{{ row.quality_meeting }}</td>
                <td>{{ row.time_of_leave }}</td>
                <td>{{ row.withdraw }}</td>
                <td>{{ row.num_register_articles }}</td>
                <td>{{ row.all_money - row.num_register_articles }}</td>
                <td>{{ row.all_money }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <input type="radio" name="mytabs" class="tab" aria-label="Page Charge" />
      <div class="tab-content bg-base-100 border-base-300 p-6">
        <h2>Page Charge</h2>
      </div>

      <input
        type="radio"
        name="mytabs"
        class="tab"
        aria-label="โครงงานวิชาการ"
      />
      <div class="tab-content bg-base-100 border-base-300 p-6">
        <h2>โครงงานวิชาการ</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import api from "@/setting/api";

const conferenceData = ref([]);

const getConferenceData = async () => {
  const response = await api.get("/all_summary_conference");

  conferenceData.value = response.data;
  console.log(response.data);
};

onMounted(() => {
  getConferenceData();
});
</script>
