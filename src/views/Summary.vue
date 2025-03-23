<template>
  <div class="container my-10 mx-auto">
    <!-- <div class="flex justify-end">
      <button class="btn btn-success text-white">Export to Excel.CSV</button>
    </div> -->
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
                <th class="border px-3 py-2">ลำดับที่</th>
                <th class="border px-3 py-2">ชื่อ</th>
                <th class="border px-3 py-2">ชื่อผลงานวิจัย</th>
                <th class="border px-3 py-2">ชื่อการประชุม</th>
                <th class="border px-3 py-2">จังหวัด/ประเทศ</th>
                <th class="border px-3 py-2">คณะร่วมจัด/อยู่ใน Scopus</th>
                <th class="border px-3 py-2">คุณภาพการประชุม</th>
                <th class="border px-3 py-2">ลาครั้งที่</th>
                <th class="border px-3 py-2">ขอเบิก</th>
                <th class="border px-3 py-2">ค่าลงทะเบียน</th>
                <th class="border px-3 py-2">ค่าใช้จ่ายอื่น ๆ</th>
                <th class="border px-3 py-2">ค่าใช้จ่ายทั้งหมด</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(row, index) in conferenceData"
                :key="index"
                class="text-center"
              >
                <td class="border px-3 py-2">{{ row.conf_id }}</td>
                <td class="border px-3 py-2">{{ row.user_nameth }}</td>
                <td class="border px-3 py-2">{{ row.conf_name }}</td>
                <td class="border px-3 py-2">{{ row.conf_research }}</td>
                <td class="border px-3 py-2">{{ row.location }}</td>
                <td class="border px-3 py-2">{{ row.meeting_type }}</td>
                <td class="border px-3 py-2">{{ row.quality_meeting }}</td>
                <td class="border px-3 py-2">{{ row.time_of_leave }}</td>
                <td class="border px-3 py-2">{{ row.withdraw }}</td>
                <td class="border px-3 py-2">{{ row.num_register_articles }}</td>
                <td class="border px-3 py-2">{{ row.all_money - row.num_register_articles }}</td>
                <td class="border px-3 py-2">{{ row.all_money }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <input type="radio" name="mytabs" class="tab" aria-label="Page Charge" />
      <div class="tab-content bg-base-100 border-base-300 p-6">
        <h2>ข้อมูลทั้งหมดของ Page Charge</h2>
        <div class="overflow-x-auto mt-5">
          <table class="table w-full">
            <thead>
              <tr class="text-center">
                <th class="border px-3 py-2" rowspan="2">ลำดับที่</th>
                <th class="border px-3 py-2" rowspan="2">ชื่อ</th>
                <th class="border px-3 py-2" rowspan="2">ชื่อบทความ</th>
                <th class="border px-3 py-2" rowspan="2">ชื่อวารสาร</th>
                <th class="border px-3 py-2" colspan="4">วารสารอยู่ในข้อมูลสากล ใน Quartile</th>
                <th class="border px-3 py-2" rowspan="2">คาดว่าจะตีพิมพ์ในวารสาร</th>
                <th class="border px-3 py-2" rowspan="2">ผลงานจากโครงการวิจัยเรื่อง</th>
                <th class="border px-3 py-2" rowspan="2">ประเภทโครงการวิจัย</th>
                <th class="border px-3 py-2" rowspan="2">ค่าใช้จ่ายในการลงตีพิมพ์</th>
              </tr>
              <tr class="text-center">
                <th class="border px-3 py-2">ISI</th>
                <th class="border px-3 py-2">SJR</th>
                <th class="border px-3 py-2">Scopus</th>
                <th class="border px-3 py-2">Nature</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(row, index) in pageChargeData"
                :key="index"
                class="text-center"
              >
                <td class="border px-3 py-2">{{ row.pageC_id }}</td>
                <td class="border px-3 py-2">{{ row.user_nameth }}</td>
                <td class="border px-3 py-2">{{ row.journal_name }}</td>
                <td class="border px-3 py-2">{{ row.article_title }}</td>
                <td class="border px-3 py-2">{{ row.qt_isi ? `Quartile ${row.qt_isi}` : '-' }}</td>
                <td class="border px-3 py-2">{{ row.qt_sjr ? `Quartile ${row.qt_sjr}` : '-' }}</td>
                <td class="border px-3 py-2">{{ row.qt_scopus ? `Quartile ${row.qt_scopus}` : '-' }}</td>
                <td class="border px-3 py-2">{{ row.quality_journal && row.quality_journal.includes('nature') ? '✔' : '-' }}</td>
                <td class="border px-3 py-2">{{ row.month }} {{ row.year }}</td>
                <td class="border px-3 py-2">{{ row.article_research_ject }}</td>
                <td class="border px-3 py-2">{{ row.research_type }}</td>
                <td class="border px-3 py-2">{{ row.request_support }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <input type="radio" name="mytabs" class="tab" aria-label="โครงงานวิชาการ"/>
      <div class="tab-content bg-base-100 border-base-300 p-6">
        <h2>ข้อมูลทั้งหมดของโครงงานวิชาการ</h2>
        <div class="overflow-x-auto mt-5">
          <table class="table w-full">
            <thead>
              <tr class="text-center">
                <th class="border px-3 py-2">ลำดับที่</th>
                <th class="border px-3 py-2">ชื่อ</th>
                <th class="border px-3 py-2">ชื่อผลงานวิจัย</th>
                <th class="border px-3 py-2">กลุ่มวิจัย</th>
                <th class="border px-3 py-2">มาตรฐานการวิจัย</th>
                <th class="border px-3 py-2">มาตราทางการค้า</th>
                <th class="border px-3 py-2">ระยะเวลาโครงการ(ปี)</th>
                <th class="border px-3 py-2">วันที่เริ่ม</th>
                <th class="border px-3 py-2">วันสิ้นสุด</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(row, index) in krisData"
                :key="index"
                class="text-center"
              >
                <td class="border px-3 py-2" >{{ row.kris_id }}</td>
                <td class="border px-3 py-2">{{ row.user_nameth }}</td>
                <td class="border px-3 py-2">{{ row.name_research_th }}</td>
                <td class="border px-3 py-2">{{ row.formattedResearch_cluster }}, {{ row.res_cluster_other }}</td>
                <td class="border px-3 py-2 w-1/6">{{ row.formattedres_standard }}</td>
                <td class="border px-3 py-2" v-if="row.res_standard_trade == '52'">มาตรา 52 (เพื่อประโยชน์ทางการค้า)</td>
                <td class="border px-3 py-2" v-if="row.res_standard_trade == '53'">มาตรา 53 (ไม่มีวัตถุประสงค์เพื่อประโยชน์ทางการค้า)</td>
                <td class="border px-3 py-2" v-if="row.res_standard_trade == '' || row.res_standard_trade == null">{{ row.res_standard_trade }}</td>
                <td class="border px-3 py-2">{{ row.year }}</td>
                <td class="border px-3 py-2">{{ row.formattedStartDate }}</td>
                <td class="border px-3 py-2">{{ row.formattedEndDate }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import api from "@/setting/api";
import { DateTime } from "luxon";

const conferenceData = ref([]);
const pageChargeData = ref([]);
const krisData = ref([]);

const getConferenceData = async () => {
  const response = await api.get("/all_summary_conference");

  conferenceData.value = response.data;
};

const getPageChargeData = async () => {
  const response = await api.get("/all_summary_page_charge");

  pageChargeData.value = response.data;
};

const getKrisData = async () => {
  const response = await api.get("/all_summary_kris");

  krisData.value = response.data.map(item => ({
    ...item,
    formattedStartDate: item.project_periodStart
      ? DateTime.fromISO(item.project_periodStart).toFormat('dd-MM-yyyy')
      : "N/A",
    formattedEndDate: item.project_periodEnd
      ? DateTime.fromISO(item.project_periodEnd).toFormat('dd-MM-yyyy')
      : "N/A",
      formattedResearch_cluster : item.research_cluster.filter(item => item !== "อื่น ๆ").join(", "),
      formattedres_standard : item.res_standard.join(", ")
}));
}

onMounted(() => {
  getConferenceData();
  getPageChargeData();
  getKrisData();
});
</script>
