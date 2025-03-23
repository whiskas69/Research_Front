<template>
  <div class="bg-white p-5 rounded-lg shadow h-[420px] w-[400px]">
    <h2 class="text-lg font-semibold">จำนวนเอกสารทั้งหมด</h2>
    <p class="font-bold text-[#9291A5]">ปี {{ currentYear }}</p>
    <hr />
    <div class="mt-4 text-center">
      <p class="text-sm">จำนวนเอกสารทั้งหมด</p>
      <span class="text-xl font-bold">{{ allCount }} รายการ</span>
    </div>
    <div class="flex justify-center items-center w-full h-[250px]">
      <canvas ref="chartCanvas" style="width: 100%; height: 100%"></canvas>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { DateTime } from "luxon";
import api from "@/setting/api";

const currentYear = DateTime.now().year + 543;

const allCount = ref(0);
const countKris = ref(0);
const countConfer = ref(0);
const countPc = ref(0);

Chart.register(ArcElement, Tooltip, Legend);
const chartCanvas = ref(null);
let chartInstance = null;

const getData = async () => {
  try {
    const response = await api.get("/count");

    console.log(response.data);
    countConfer.value = response.data[0].total_count || 0;
    countPc.value = response.data[1].total_count || 0;
    countKris.value = response.data[2].total_count || 0;
    allCount.value = countConfer.value + countConfer.value + countKris.value;

    creatChart();
  } catch (error) {
    console.log("Error fetching data:", error)
  }
}

const creatChart = () => {
  if (chartInstance) {
    chartInstance.destroy();
  }

  chartInstance = new Chart(chartCanvas.value, {
    type: "pie",
    data: {
      labels: ["การประชุมวิชาการ", "Page Change", "ขอทุนโครงการวิจัย"],
      datasets: [
        {
          data: [countConfer.value, countPc.value, countKris.value],
          backgroundColor: ["#2557A1", "#E85F19", "#E5EAFC"],
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    }
  })
}

onMounted(getData);
</script>
