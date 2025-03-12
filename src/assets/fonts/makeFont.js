const fs = require("fs");
const { execSync } = require("child_process");

const inputFont = process.argv[2]; // ชื่อไฟล์ฟอนต์ .ttf ที่จะใช้แปลง
const outputName = process.argv[3]; // ชื่อฟอนต์ที่ต้องการตั้ง

if (!inputFont || !outputName) {
  console.error("❌ Usage: node makeFont.js <input.ttf> <output-name>");
  process.exit(1);
}

// ตรวจสอบว่ามีไฟล์ ttf หรือไม่
if (!fs.existsSync(inputFont)) {
  console.error(`❌ Font file "${inputFont}" not found!`);
  process.exit(1);
}

// คำสั่งแปลงฟอนต์เป็น js
const command = `npx ttf2js ${inputFont} -o ${outputName}.js`;

try {
  console.log("🔄 Converting font...");
  execSync(command, { stdio: "inherit" });
  console.log(`✅ Font converted successfully! File saved as "${outputName}.js"`);
} catch (error) {
  console.error("❌ Error converting font:", error.message);
}
