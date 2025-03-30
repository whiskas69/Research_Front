<template>
  <div class="bg-white p-5 rounded-lg shadow h-[420px] w-[700px]">
    <h2 class="text-lg font-semibold">สถิติการเบิกจ่ายในแต่ละปี</h2>
    <p class="font-bold text-[#9291A5]">ปีงบประมาณ {{ currentYear - 2 }} - {{ currentYear + 2 }}</p>
    <hr />
    <div class="flex justify-center w-full h-[345px]">
      <canvas ref="chartCanvas" style="width: 100%; height: 100%"></canvas>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { DateTime } from "luxon";
import api from "@/setting/api";

const currentYear = DateTime.now().year + 543;

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
const chartCanvas = ref(null);
let chartInstance = null;

const creatChart = () => {
  if (!chartCanvas.value) {
    console.log("Canvas not found!");
    return;
  }

  if (chartInstance) {
    chartInstance.destroy();
  }

  chartInstance = new Chart(chartCanvas.value, {
    type: "bar",
    data: {
      labels: [2564, 2565, 2566, 2567],
      datasets: [
        {
          label: "การประชุมวิชาการ",
          data: [1, 2, 3, 7],
          backgroundColor: "#4A3AFF",
        },
        {
          label: "Page Change",
          data: [0, 1, 4, 6],
          backgroundColor: "#C893FD",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  })
}

onMounted(() => {
  new Chart(chartCanvas.value, {
    type: "bar",
    data: {
      labels: [2564, 2565, 2566, 2567],
      datasets: [
        {
          label: "การประชุมวิชาการ",
          data: [1, 2, 3, 7],
          backgroundColor: "#4A3AFF",
        },
        {
          label: "Page Change",
          data: [0, 1, 4, 6],
          backgroundColor: "#C893FD",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  });
});
</script>
