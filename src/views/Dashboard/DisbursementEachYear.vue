<template>
    <div class="bg-white p-5 rounded-lg shadow h-[500px] w-[700px]">
      <h2 class="text-lg font-semibold">สถิติการเบิกจ่ายในแต่ละปี</h2>
      <p class="font-bold text-gray-700">ปีงบประมาณ 2566 - 2567</p>
      <canvas ref="chartCanvas"></canvas>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
  
  Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
  
  const chartCanvas = ref(null);
  
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
  