<template>
  <div>
    <div id="app" class="container my-10 mx-auto">
      <div id="testToPDF">
        <h1>Test to do export PDF</h1>
        <p class="text-xl font-bold mb-5">
          ขออนุมัติค่า Page Charge เพื่อตีพิมพ์ผลงานในวารสารวิชาการระดับนานาชาติ
        </p>
        <p> {{ formData.pageChange }}</p>
        
      </div>
      <button @click="exportTopdf" class="bg-red-500">Export to PDF</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

import { jsPDF } from "jspdf";

const exportTopdf = async () => {
  console.log('792034-12')
    const pdf = new jsPDF();

    // โหลดไฟล์ฟอนต์แบบไดนามิก
    // // const fontUrl = "@/assets/fonts/Sarabun-Regular-normal.js";
    // const response = await fetch(fontUrl);
    // const fontData = await response.text();

    // pdf.addFileToVFS("Sarabun-Regular.ttf", fontData);
    // pdf.addFont("Sarabun-Regular.ttf", "Sarabun", "normal");
    // pdf.setFont("Sarabun");
    pdf.setFont('Sarabun','normal');
      pdf.setTextColor('#025955'); 

    pdf.text("ทดสอบภาษาไทย (Thai text test)", 10, 20);
    pdf.text("ขออนุมัติค่า Page Charge เพื่อตีพิมพ์ผลงาน", 10, 30);

    pdf.save("export.pdf");
};

// จัดการข้อมูลหลัก
const formData = reactive({
  pageChange: [],
  user: [],
  offic: [],
  budget: [],

});

const route = useRoute();
const id = route.params.id;
console.log("params.id", id);
const fetchProfessorData = async () => {
  try {
    const responsePC = await axios.get(
      `http://localhost:3000/page_charge/${id}`
    );
    const userID = responsePC.data.user_id;
    const responseUser = await axios.get(
      `http://localhost:3000/user/${userID}`
    );
    formData.user = responseUser.data;

    console.log("get user: ", formData.user);
    console.log("get userid: ", responsePC.data.user_id);
    console.log("get responsePC: ", responsePC.data);

    formData.pageChange = responsePC.data;
    console.log("pageChange", formData.pageChange);
    formData.check = formData.pageChange.quality_journal;

    // const responseFile = await axios.get("http://localhost:3000/pdf/2");
    // const pdfData = responseFile.data;

    const responseoffic = await axios.get(
      `http://localhost:3000/opinionPC/${id}`
    );
    console.log("offic123", responseoffic);
    formData.offic = responseoffic.data;
    console.log("offic", JSON.stringify(formData.offic));

    const responsebudget = await axios.get(
      `http://localhost:3000/budget/pageCharge/${id}`
    );
    console.log("budget 123", responsebudget);
    formData.budget = responsebudget.data;
    console.log("budget", JSON.stringify(formData.budget));

    console.log("PDF JAAAA: ", pdfData);
  } catch (error) {
    console.error("Error fetching professor data:", error);
  } finally {
    isLoading.value = false;
  }
  console.log("Fetching professor data...");
};

// ดึงข้อมูลเมื่อ component ถูกโหลด
onMounted(async () => {
  await fetchProfessorData();
  // loopdata();
});
</script>