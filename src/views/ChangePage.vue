<template>
  <div class="container my-10 mx-auto">
    <h1 class="text-xl font-bold mb-5">แก้ไขเงือนไขในการพิจารณาการสนับสนุน</h1>
    <Mainbox class="collapse collapse-arrow">
      <input type="checkbox" />
      <p class="collapse-title text-lg font-bold">Page Change</p>
      <SectionWrapper class="collapse-content">
        <TextInputLabelLeft
          label="จำนวนเงินที่เบิกได้เมื่ออยู่ใน Nature"
          customLabel="w-4/12 mr-2"
        />
        <SectionWrapper>
          <p>วารสารอยู่ในฐานข้อมูลสากล ISI, SJR หรือ Scopus</p>
          <SectionWrapper>
            <p>ถ้าวารสารเป็นของสำนักพิมพ์ MDPI, Frontiers, Hindawi</p>
            <TextInputLabelLeft
              label="จำนวนเงินที่เบิกได้เมื่ออยู่ใน Quartile 1"
              customLabel="w-4/12 mr-2"
            />
            <TextInputLabelLeft
              label="จำนวนเงินที่เบิกได้เมื่ออยู่ใน Quartile 2"
              customLabel="w-4/12 mr-2"
            />
          </SectionWrapper>
          <SectionWrapper>
            <p>ถ้าวารสารเป็นของสำนักพิมพ์อื่น ๆ</p>
            <TextInputLabelLeft
              label="จำนวนเงินที่เบิกได้เมื่ออยู่ใน Quartile 1"
              customLabel="w-4/12 mr-2"
            />
            <TextInputLabelLeft
              label="จำนวนเงินที่เบิกได้เมื่ออยู่ใน Quartile 2"
              customLabel="w-4/12 mr-2"
            />
            <TextInputLabelLeft
              label="จำนวนเงินที่เบิกได้เมื่ออยู่ใน Quartile 3"
              customLabel="w-4/12 mr-2"
            />
            <TextInputLabelLeft
              label="จำนวนเงินที่เบิกได้เมื่ออยู่ใน Quartile 4"
              customLabel="w-4/12 mr-2"
            />
          </SectionWrapper>
        </SectionWrapper>
      </SectionWrapper>
    </Mainbox>

    <Mainbox class="collapse collapse-arrow">
      <input type="checkbox" />
      <p class="collapse-title text-lg font-bold">Conference</p>
      <SectionWrapper class="collapse-content">
        <TextInputLabelLeft
          label="จำนวนครั้งในการลามากที่สุด"
          customLabel="w-4/12 mr-2"
        />
        <TextInputLabelLeft
          label="พนักงานที่ม่เคยไปประชุมวิชาการ ต้องทำงานไม่เกินกี่ปี"
          customLabel="w-4/12 mr-2"
        />
        <TextInputLabelLeft
          label="วารสารใน WOS Q1 ,2 ,3 หรือ SJR Q1, 2 ไม่เกินกี่ปี"
          customLabel="w-4/12 mr-2"
        />
        <SectionWrapper>
          <p>ระดับคะแนนคุณภาพของการประชุมวิชาการ (ดีมาก)</p>
          <SectionWrapper>
            <p></p>
            <TextInputLabelLeft
              label="คำนวณแบบ SJR ได้คะแนนไม่ต่ำกว่า"
              customLabel="w-4/12 mr-2"
            />
            <TextInputLabelLeft
              label="คำนวณแบบ CIF ได้คะแนนไม่ต่ำกว่า"
              customLabel="w-4/12 mr-2"
            />
            <TextInputLabelLeft
              label="คำนวณแบบ CORE ได้คะแนนไม่ต่ำกว่า"
              customLabel="w-4/12 mr-2"
            />
          </SectionWrapper>
        </SectionWrapper>

        <SectionWrapper>
          <p>การเบิกค่าใช้จ่าย (100%)</p>
          <SectionWrapper>
            <p></p>
            <TextInputLabelLeft
              label="ปประเทศใกล้เคียง (ASEAN) ได้เบิก"
              customLabel="w-4/12 mr-2"
            />
            <TextInputLabelLeft
              label="ปประเทศเอเชีย ได้เบิก"
              customLabel="w-4/12 mr-2"
            />
            <TextInputLabelLeft
              label="ปประเทศประเทศในโซนยุโรป หรือ อเมริกาเหนือ หรือ อเมริกาใต้ หรือ ออสเตรเลีย หรือ แอฟริกา ได้เบิก"
              customLabel="w-4/12 mr-2"
            />
          </SectionWrapper>
        </SectionWrapper>

        <SectionWrapper>
          <p>การเบิกค่าใช้จ่าย (50%)</p>
          <SectionWrapper>
            <p></p>
            <TextInputLabelLeft
              label="ปประเทศใกล้เคียง (ASEAN) ได้เบิก"
              customLabel="w-4/12 mr-2"
            />
            <TextInputLabelLeft
              label="ปประเทศเอเชีย ได้เบิก"
              customLabel="w-4/12 mr-2"
            />
            <TextInputLabelLeft
              label="ปประเทศประเทศในโซนยุโรป หรือ อเมริกาเหนือ หรือ อเมริกาใต้ หรือ ออสเตรเลีย หรือ แอฟริกา ได้เบิก"
              customLabel="w-4/12 mr-2"
            />
          </SectionWrapper>
        </SectionWrapper>
      </SectionWrapper>
    </Mainbox>
  </div>
</template>

<script setup>
import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import TextInputLabelLeft from "@/components/Input/TextInputLabelLeft.vue";
import RadioInput from "@/components/Input/RadioInput.vue";
import FileInput from "@/components/Input/FileInput.vue";
import location from "@/location.json";
</script>
