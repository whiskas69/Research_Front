<template>
  <div class="container my-10 mx-auto">
    <h1 class="text-xl font-bold">ข้อมูลส่วนตัว</h1>
    <div class="my-5">
      <TextInputLabelLeft
        label="ชื่อ (ภาษาไทย)"
        customLabel="w-1/6"
        customInput="w-full"
        placeholder="นายจารุวัฒน์ วรรณวัฒน์"
        disabled="true"
      />
    </div>

    <div class="my-5">
      <TextInputLabelLeft
        label="ชื่อ (ภาษาอังกฤษ)"
        customLabel="w-1/6"
        customInput="w-full"
      />
    </div>

    <div class="my-5">
      <TextInputLabelLeft
        label="ตำแหน่ง"
        customLabel="w-1/6"
        customInput="w-full"
      />
    </div>

    <div class="my-5">
      <TextInputLabelLeft
        label="อีเมล"
        customLabel="w-1/6"
        customInput="w-full"
        disabled="true"
      />
    </div>

    <div class="my-5">
      <TextInputLabelLeft
        label="ยอดคงเหลือของการขออนุมัติเดินทาง ไปเผยแพร่ผลงานในการประชุมวิชาการ"
        customLabel="w-full max-w-fit mr-5"
        customInput="w-full"
        placeholder="2000"
        disabled="true"
      />
    </div>

    <button class="btn bg-blue-500 text-white">ตกลง</button>

    <div class="my-10 flex flex-col">
      <h1 class="text-xl font-bold">ลายเซ็น</h1>
      <p class="text-red-600">
        สามารถอัปโหลดลายเซ็นได้เพียง 1 ครั้งเท่านั้น และสกุลไฟล์เป็น png
        กรุณาตรวจสอบความถูกต้องก่อนกดยืนยัน
      </p>

      <div class="my-5">
        <input
          type="file"
          class="file-input file-input-bordered w-full max-w-xs"
        />
      </div>

      <button class="btn bg-blue-500 text-white">ตกลง</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TextInputLabelLeft from "@/components/Input/TextInputLabelLeft.vue";
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding-left: 5%;
}
.thaiName {
  padding-top: 2%;
  width: 40%;
}
.email {
  width: 40%;
}
.amount {
  width: 80%;
}
.hEngName {
  padding-right: 27%;
}
.hposition {
  padding-right: 34%;
}
input[type="text"],
input[type="email"] {
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
