<template>
  <div class="container my-10 mx-auto">
    <Mainbox>
      <SectionWrapper>
        <p>ชื่อผู้เขียนทั้งหมดตามลำดับ</p>
        <TextInputLabelLeft label="ชื่อ-นามสกุล" customLabel="w-64" />
        <TextInputLabelLeft label="ชื่อ-นามสกุล" customLabel="w-64" />
        <TextInputLabelLeft label="ชื่อ-นามสกุล" customLabel="w-64" />
        
        <TextInputLabelLeft label="Pages" customLabel="w-64" />
      </SectionWrapper>
    </Mainbox>
    <Mainbox>
        <p>ผลงาน</p>
        <SectionWrapper>
            <TextInputLabelLeft label="ชื่อบทความ" customLabel="w-64" />
        <TextInputLabelLeft label="แหล่งเผยแพร่" customLabel="w-64" />
        <TextInputLabelLeft label="Volume" customLabel="w-64" />
        <TextInputLabelLeft label="Issue" customLabel="w-64" />
        <TextInputLabelLeft label="Pages" customLabel="w-64" />
        <TextInputLabelLeft label="วันประกาศผลพิจารณา" customLabel="w-64" type="date"/>
        <TextInputLabelLeft label="วันที่เผยแพร่" customLabel="w-64" type="date"/>
        <p>ประเภทผลงาน</p>
        <RadioInput
            label="บทความวิจัย"
            value=""
            name="tpyeWork"
          />
          <RadioInput
            label="บทความวิชาการ"
            value=""
            name="tpyeWork"
          />
          <RadioInput
            label="ผลงานสร้างสรรค์"
            value=""
            name="tpyeWork"
          />
          <RadioInput
            label="สิ่งประดิษฐ์"
            value=""
            name="tpyeWork"
          />
          <p>ระดับผลงาน</p>
        <RadioInput
            label="ภายในสถาบัน"
            value=""
            name="level"
          />
          <RadioInput
            label="ชาติ"
            value=""
            name="level"
          />
          <RadioInput
            label="ภูมิภาค"
            value=""
            name="level"
          />
          <RadioInput
            label="นานาชาติ"
            value=""
            name="level"
          />
          <TextInputLabelLeft label="Quartile" customLabel="w-64" />
          <TextInputLabelLeft label="DOI" customLabel="w-64" />
          <TextInputLabelLeft label="จำนวนเงิน/บ." customLabel="w-64" />
        </SectionWrapper>
    </Mainbox>
    <div class="flex justify-end">
        <button class="btn btn-success text-white">
          บันทึกข้อมูล
        </button>
      </div>
  </div>
</template>
<script setup>
import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import TextInputLabelLeft from "@/components/Input/TextInputLabelLeft.vue";
import RadioInput from "@/components/Input/RadioInput.vue";
// id form pc
</script>
