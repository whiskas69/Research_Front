<template>
  <div class="bg-white p-5 rounded-lg shadow h-[400px] w-[700px]">
    <h2 class="text-lg font-semibold">สถิติการเบิกจ่ายในแต่ละปี</h2>
    <p class="font-bold text-[#9291A5]">
      ปีงบประมาณ {{ currentYear - 3 }} - {{ currentYear }}
    </p>
    <hr />
    <div class="flex justify-center w-full h-[325px]">
      <canvas ref="chartCanvas" style="width: 100%; height: 100%"></canvas>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import {
  Chart,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { DateTime } from "luxon";
import api from "@/setting/api";

const currentYear = DateTime.now().year + 543;
const year_now = ref(0);
const year_x = ref(0);
const year_y = ref(0);
const year_z = ref(0);

Chart.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);
const chartCanvas = ref(null);
let chartInstance = null;

const getData = async () => {
  try {
    const response = await api.get("/eachyears");

    year_now.value = response.data[0]
      ? {
          budget_year: currentYear,
          total_pagecharge: Number(response.data[0].total_pagecharge_amount),
          total_conference: Number(response.data[0].total_conference_amount),
        }
      : {
          budget_year: currentYear,
          total_pagecharge: 0,
          total_conference: 0,
        };
    year_x.value = response.data[1]
      ? {
          budget_year: currentYear - 1,
          total_pagecharge: Number(response.data[1].total_pagecharge_amount),
          total_conference: Number(response.data[1].total_conference_amount),
        }
      : {
          budget_year: currentYear - 1,
          total_pagecharge: 0,
          total_conference: 0,
        };
    year_y.value = response.data[2]
      ? {
          budget_year: currentYear - 2,
          total_pagecharge: Number(response.data[2].total_pagecharge_amount),
          total_conference: Number(response.data[2].total_conference_amount),
        }
      : {
          budget_year: currentYear - 2,
          total_pagecharge: 0,
          total_conference: 0,
        };
    year_z.value = response.data[3]
      ? {
          budget_year: currentYear - 3,
          total_pagecharge: Number(response.data[3].total_pagecharge_amount),
          total_conference: Number(response.data[3].total_conference_amount),
        }
      : {
          budget_year: currentYear - 3,
          total_pagecharge: 0,
          total_conference: 0,
        };

    creatChart();
  } catch (error) {
    console.log("Error fetching data: ", error);
  }
};

const creatChart = () => {
  if (!chartCanvas.value) {
    console.log("Canvas not found!");
    return;
  }

  if (chartInstance) {
    chartInstance.destroy();
  }

  chartInstance = new Chart(chartCanvas.value, {
    type: "line",
    data: {
      labels: [
        year_z.value.budget_year,
        year_y.value.budget_year,
        year_x.value.budget_year,
        year_now.value.budget_year,
      ],
      datasets: [
        {
          label: "จำนวนเงินการประชุมวิชาการ",
          data: [
            year_z.value.total_conference,
            year_y.value.total_conference,
            year_x.value.total_conference,
            year_now.value.total_conference,
          ],
          borderColor: "#4A3AFF",
          backgroundColor: "#4A3AFF",
          tension: 0.4,
        },
        {
          label: "จำนวนเงินPage Change",
          data: [
            year_z.value.total_pagecharge,
            year_y.value.total_pagecharge,
            year_x.value.total_pagecharge,
            year_now.value.total_pagecharge,
          ],
          borderColor: "#C893FD",
          backgroundColor: "#C893FD",
          tension: 0.4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  });
};

onMounted(getData);

watch([year_now, year_x, year_y, year_z], () => {
  creatChart();
});
</script>
