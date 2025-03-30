<template>
  <p class="text-2xl font-bold text-center my-10">ประวัติเอกสาร</p>
  <PageChageData :id="id"/>
      <Research :id="id" :type="'Page_Charge'"/>
      <FinanceAll :id="id" :type="'Page_Charge'"/>
      <Assosiate :id="id" :type="'Page_Charge'"/>
      <Dean :id="id" :type="'Page_Charge'"/>
  <div class="container my-10 mx-auto">
    <div class="flex justify-end no-print">
      <router-link :to="`/pdf/pageCharge/${id}`">
      <button
        class="btn text-white bg-[#4285F4] hover:bg-[#4285F4]"
      >
        พิมพ์แบบฟอร์ม
      </button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { jsPDF } from "jspdf";

import PageChageData from "@/components/form/DataforOffice/PageChage.vue";
import Research from "@/components/form/DataforOffice/Research.vue";
import FinanceAll from "@/components/form/DataforOffice/FinanceAll.vue";
import Assosiate from "@/components/form/DataforOffice/Assosiate.vue";
import Dean from "@/components/form/DataforOffice/Dean.vue";

// Access route parameters
const route = useRoute();
const id = route.params.id;
console.log("params.id", id);

const exportToPDF = async () => {
  const pdf = new jsPDF();
  // กำหนด URL ฟอนต์
  const fontUrls = {
    normal: "/src/assets/fonts/THSarabunNew-normal.js",
    bold: "/src/assets/fonts/THSarabunNewBold-bold.js", // เพิ่มฟอนต์อื่น ๆ ตามต้องการ
  };
  
  try {
// โหลดฟอนต์ THSarabunNew สำหรับ normal
const normalFontModule = await import(fontUrls.normal);
    pdf.addFileToVFS("THSarabunNew.ttf", normalFontModule.font);
    pdf.addFont("THSarabunNew.ttf", "THSarabunNew", "normal");

    // โหลดฟอนต์ THSarabunNew สำหรับ normal
    const boldFontModule = await import(fontUrls.normal);
    pdf.addFileToVFS("THSarabunNewBold.ttf", boldFontModule.font);
    pdf.addFont("THSarabunNewBold.ttf", "THSarabunNew", "Bold");

    
    // ใช้ฟอนต์ THSarabunNew สำหรับข้อความปกติ
    pdf.setFont("THSarabunNew", "normal");
    pdf.setFontSize(12);
    pdf.text("เอกสารนี้ใช้ฟอนต์ THSarabunNew สำหรับข้อความปกติ", 15, 20);

    // ใช้ฟอนต์ Angsana New Regular สำหรับข้อความตัวหนา
    pdf.setFont("THSarabunNew", "bold");
    pdf.setFontSize(26);
    pdf.text("ข้อความนี้เป็นตัวหนาโดยใช้ THSarabunNew-Bold", 15, 35);

    // บันทึกไฟล์ PDF
    pdf.save("export.pdf");
  } catch (error) {
    console.error("Error loading font:", error);
  }
};
</script>

<style>
@media print {
  .no-print {
    display: none !important;
  }
}
</style>

<!-- const exportToPDF = async () => {
  const pdf = new jsPDF();
  
    // โหลดฟอนต์ภาษาไทย
    const fontUrl = "/src/assets/fonts/THSarabunNew-normal.js"; // ตรวจสอบเส้นทางให้ถูกต้อง
    const fontModule = await import(fontUrl);
  
    // ลงทะเบียนฟอนต์กับ jsPDF
    pdf.addFileToVFS("THSarabunNew.ttf", fontModule.font);
    pdf.addFont("THSarabunNew.ttf", "THSarabunNew", "normal");
    pdf.setFont("THSarabunNew", "normal");
  
    // ตั้งค่าขนาดฟอนต์เริ่มต้น
    pdf.setFontSize(12);
  
    // เพิ่มข้อความหัวเรื่อง
    pdf.setFontSize(16);
    pdf.setFont("THSarabunNew", "bold");
    pdf.text("แบบขอรับการสนับสนุนค่าใช้จ่ายในการเผยแพร่ผลงานทางวิชาการ", 15, 20);
  
    // เพิ่มข้อความรายละเอียด
    pdf.setFontSize(12);
    pdf.setFont("THSarabunNew", "normal");
    pdf.text("ตามประกาศคณะฯ เรื่อง การสนับสนุนค่าใช้จ่ายในการเผยแพร่ผลงานทางวิชาการของอาจารย์ประจำคณะเทคโนโลยีสารสนเทศ พ.ศ. 2567", 15, 30);
    pdf.text("และประกาศ สจล. เรื่อง การสนับสนุนค่าใช้จ่ายสำหรับการนำเสนอบทความวิจัยลงตีพิมพ์", 15, 35);
    pdf.text("ในวารสารวิชาการระดับนานาชาติ ด้วยเงินรายได้ ลงวันที่ 11 กรกฎาคม 2565 และฉบับที่ 2 ลงวันที่ 19 กรกฎาคม 2565", 15, 40);
  
    // เพิ่มหัวข้อ "แบบที่ 2"
    pdf.setFontSize(14);
    pdf.setFont("THSarabunNew", "bold");
    pdf.text("แบบที่ 2 ขออนุมัติค่า Page Charge เพื่อตีพิมพ์ผลงานในวารสารวิชาการระดับนานาชาติ", 15, 50);
  
    // เพิ่มข้อความรายละเอียดแบบฟอร์ม
    pdf.setFontSize(12);
    pdf.setFont("THSarabunNew", "normal");
    pdf.text("ข้าพเจ้า ตำแหน่ง", 15, 60);
    pdf.text("มีความประสงค์ขออนุมัติค่าใช้จ่ายในการเผยแพร่บทความวิจัยลงตีพิมพ์ (Page Charge) ในวารสารทางวิชาการระดับนานาชาติ", 15, 65);
    pdf.text("ด้วยเงินรายได้ ซึ่งมีรายชื่ออยู่ใน List[®] ที่คณะได้ให้การรับรองแล้ว โดยมติคณะ ครั้งที่_____เมื่อวันที่_____ มีรายละเอียดดังนี้", 15, 70);
  
    // เพิ่มหัวข้อ "1. รายละเอียดวารสารที่ส่งเสนอพิจารณา / การตอบรับให้ลงตีพิมพ์"
    pdf.setFontSize(14);
    pdf.setFont("THSarabunNew", "bold");
    pdf.text("1. รายละเอียดวารสารที่ส่งเสนอพิจารณา / การตอบรับให้ลงตีพิมพ์", 15, 80);
  
    // เพิ่มข้อความรายละเอียดวารสาร
    pdf.setFontSize(22);
    pdf.setFont("THSarabunNew", "normal");
    pdf.text("ชื่อวารสาร:____บอกสำนักพิมพ์_____", 15, 85);
    pdf.text("- เป็นวารสารที่อยู่ในฐานข้อมูลสากล: ISI ได้รับการจัดลำดับ Quartile ปู_____ Impact Factor =_____", 15, 90);
    pdf.text("SJR ได้รับการจัดลำดับ Quartile ปู_____ SJR Score    =_____", 15, 95);
    pdf.text("Scopus ได้รับการจัดลำดับ Quartile ปู_____ CiteScore   =_____", 15, 100);
    pdf.text("Nature", 15, 105);
    pdf.text("วงเงินตามเกณฑ์การให้การสนับสนุน ไม่เกิน_____บาท", 15, 110);
  
    // เพิ่มหัวข้อ "2. รายละเอียดผลงานวิจัยที่ส่งเสนอพิจารณา / ได้รับการตอบรับให้ตีพิมพ์"
    pdf.setFontSize(14);
    pdf.setFont("THSarabunNew", "bold");
    pdf.text("2. รายละเอียดผลงานวิจัยที่ส่งเสนอพิจารณา / ได้รับการตอบรับให้ตีพิมพ์", 15, 120);
  
    // เพิ่มข้อความรายละเอียดผลงานวิจัย
    pdf.setFontSize(12);
    pdf.setFont("THSarabunNew", "normal");
    pdf.text("ชื่อบทความ:_____", 15, 125);
  
    // บันทึกไฟล์ PDF
    pdf.save("export.pdf");
  }; -->
