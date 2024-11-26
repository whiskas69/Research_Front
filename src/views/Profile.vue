<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div class="p-6">
    <h1 class="text-xl font-bold">ข้อมูลส่วนตัว</h1>
    <form>
      <!-- Thai Name -->
      <div class="thaiName columns-2">
        <label for="thaiName ">ชื่อ (ภาษาไทย)</label>
        <p>นายจารุวัฒน์ วรรณวัฒน์</p>
      </div>

      <!-- English Name -->
      <div class="engName columns-2 ">
        <label for="engName" class="hEngName">ชื่อ (ภาษาอังกฤษ)</label>
        <input type="text" id="engName" placeholder="Mr. J`aruwat Wannawanat" class="input input-bordered w-full max-w-xs" />
      </div>

      <!-- Position -->
      <div class="position columns-2 ">
        <label for="position" class="hposition">ตำแหน่ง</label>
        <input type="text" id="position" placeholder="อาจารย์" class="input input-bordered w-full max-w-xs" />
      </div>

      <!-- Email -->
      <div class="email columns-2 ">
        <label for="email">อีเมล</label>
        <p>Jaruwat@it.kmitl.ac.th</p>
      </div>

      <!-- Amount -->
      <div class="amount columns-4 ">
        <label for="amount">
          ยอดคงเหลือของการขออนุมัติเดินทาง
          ไปเผยแพร่ผลงานในการประชุมวิชาการ
        </label>
        <p>50000</p>
        <p>บาท</p>
      </div>
      <button class="btn bg-blue-600 text-white">ตกลง</button>
      <!-- <button type="submit" class="submit bg-pink-200">ตกลง</button> -->
    </form>

    <h1 class="text-xl font-bold">ลายเซ็น</h1>
    <form>
      <p class="text-red-600">
        สามารถอัปโหลดลายเซ็นได้เพียง 1 ครั้งเท่านั้น และสกุลไฟล์เป็น png
        กรุณาตรวจสอบความถูกต้องก่อนกดยืนยัน
      </p>
      <input type="file" class="file-input file-input-bordered w-full max-w-xs" />
      <!-- Submit Button -->
      <button class="btn bg-blue-600 text-white">ตกลง</button>
    </form>
  </div>
</template>

<style>
form {
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding-left: 5%;
}
.thaiName{
  padding-top: 2%;
  width: 40%;
}
.email{
  width: 40%;
}
.amount{
  width: 80%;
}
.hEngName{
  padding-right: 27%;
}
.hposition{
  padding-right: 34%;
}
input[type="text"],
input[type="email"]{
  width: 300px;
  padding: 0.5em;
}
input[type="file"] {
  width: 300px;
  padding: 0.5em;
  width: 100%;
}
button {
  border: none;
  border-radius: 5px;
  /* cursor: pointer; */
  width: 10%;
}
button:hover {
  background-color: #0056b3;
}
</style>

