<template>
  <div class="bg-white p-5 rounded-lg shadow h-[500px] w-[700px]">
    <h2 class="text-lg font-semibold">จำนวนเอกสารทั้งหมด</h2>
    <p class="font-bold text-gray-700">ปีงบประมาณ 2567</p>
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

const chartCanvas = ref(null);

onMounted(() => {
  new Chart(chartCanvas.value, {
    type: "pie",
    data: {
      labels: ["การประชุมวิชาการ", "Page Change", "ขอทุนโครงการวิจัย"],
      datasets: [
        {
          data: [5, 4, 1],
          backgroundColor: ["#2557A1", "#E85F19", "#E5EAFC"],
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
