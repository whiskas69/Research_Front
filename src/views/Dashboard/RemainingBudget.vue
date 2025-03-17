<template>
    <div class="bg-white p-5 rounded-lg shadow h-[500px] w-[500px]">
      <h2 class="text-lg font-semibold">งบประมาณคงเหลือ</h2>
      <p class="font-bold text-gray-700">ปี {{ currentYear }}</p>
      <div class="mt-4 text-center">
        <p class="text-xl font-bold">120,000 บาท</p>
        <p class="text-sm text-gray-500">งบประมาณทั้งหมด</p>
      </div>
      <canvas ref="chartCanvas"></canvas>
      
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
  import { DateTime } from "luxon";

  const currentYear = DateTime.now().year + 543;
  const usedBudget = 78000;
  const remainingBudget = 42000;

  Chart.register(ArcElement, Tooltip, Legend);
  
  const chartCanvas = ref(null);
  
  onMounted(() => {
    new Chart(chartCanvas.value, {
      type: "doughnut",
      data: {
        labels: [`จำนวนเงินที่ใช้ไปแล้ว ${usedBudget} บาท`, `จำนวนเงินคงเหลือทั้งหมด ${remainingBudget} บาท`],
        datasets: [
          {
            data: [usedBudget, remainingBudget],
            backgroundColor: [ "#2557A1","#E85F19"],
          },
        ],
      },
      options: {
        responsive: false,
        maintainAspectRatio: false,
      },
    });
  });
  </script>
  