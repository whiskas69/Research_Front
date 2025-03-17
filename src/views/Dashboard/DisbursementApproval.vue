<template>
  <div class="bg-white p-5 rounded-lg shadow h-[500px] w-[700px]">
    <h2 class="text-lg font-semibold">สถิติการอนุมัติการเบิกจ่าย</h2>
    <p class="font-bold text-gray-700">ปีงบประมาณ 2560 - 2571</p>
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Chart, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { DateTime } from "luxon";

  const currentYear = DateTime.now().year + 543;
Chart.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

const chartCanvas = ref(null);

onMounted(() => {
  new Chart(chartCanvas.value, {
    type: "line",
    data: {
      labels: [currentYear-4, currentYear-3, currentYear-2, currentYear-1, currentYear],
      datasets: [
        {
          label: "จำนวนเงิน",
          data: [ 20450, 0, 0, 90000, 0],
          borderColor: "#E85F19",
          backgroundColor: "rgba(230, 81, 0, 0.2)",
          fill: true,
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
