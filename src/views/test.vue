<template>
    <div>
      <!-- 🔹 ปุ่มสลับ Tab -->
      <button @click="activeTab = 'tab1'">📄 ข้อมูล 1</button>
      <button @click="activeTab = 'tab2'">📊 ข้อมูล 2</button>
  
      <!-- 🔹 ปุ่ม Export -->
      <button @click="exportCSV">📄 Export CSV</button>
      <button @click="exportExcel">📊 Export Excel</button>
  
      <!-- 🔹 ตารางข้อมูล 1 -->
      <table v-if="activeTab === 'tab1'" ref="dataTable1">
        <thead>
          <tr>
            <th>ชื่อ</th>
            <th>อายุ</th>
            <th>ที่อยู่</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in data1" :key="index">
            <td>{{ item.ชื่อ }}</td>
            <td>{{ item.อายุ }}</td>
            <td>{{ item.ที่อยู่ }}</td>
          </tr>
        </tbody>
      </table>
  
      <!-- 🔹 ตารางข้อมูล 2 -->
      <table v-if="activeTab === 'tab2'" ref="dataTable2">
        <thead>
          <tr>
            <th>สินค้า</th>
            <th>จำนวน</th>
            <th>ราคา</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in data2" :key="index">
            <td>{{ item.สินค้า }}</td>
            <td>{{ item.จำนวน }}</td>
            <td>{{ item.ราคา }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import * as XLSX from "xlsx";
  import { saveAs } from "file-saver";
  
  export default {
    data() {
      return {
        activeTab: "tab1", // 🔹 เริ่มต้นที่ Tab 1
        data1: [
          { ชื่อ: "สมชาย", อายุ: 25, ที่อยู่: "กรุงเทพ" },
          { ชื่อ: "อารีย์", อายุ: 30, ที่อยู่: "เชียงใหม่" },
        ],
        data2: [
          { สินค้า: "น้ำดื่ม", จำนวน: 10, ราคา: 15 },
          { สินค้า: "ขนมปัง", จำนวน: 5, ราคา: 25 },
        ],
      };
    },
    methods: {
      // 🔹 Export CSV เฉพาะตารางที่แสดงอยู่
      exportCSV() {
        let tableRef = this.activeTab === "tab1" ? this.$refs.dataTable1 : this.$refs.dataTable2;
        let rows = tableRef.querySelectorAll("tr");
        let csvContent = "";
  
        rows.forEach((row) => {
          let cols = row.querySelectorAll("th, td");
          let rowData = [];
          cols.forEach((col) => rowData.push(`"${col.innerText}"`));
          csvContent += rowData.join(",") + "\n";
        });
  
        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        saveAs(blob, `export_${this.activeTab}.csv`);
      },
  
      // 🔹 Export Excel เฉพาะตารางที่แสดงอยู่
      exportExcel() {
        let tableRef = this.activeTab === "tab1" ? this.$refs.dataTable1 : this.$refs.dataTable2;
        let worksheet = XLSX.utils.table_to_sheet(tableRef);
        let workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  
        const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
        const blob = new Blob([excelBuffer], {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
        });
        saveAs(blob, `export_${this.activeTab}.xlsx`);
      },
    },
  };
  </script>
  