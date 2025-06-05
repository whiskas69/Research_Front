<template>
  <div class="container my-10 mx-auto">
    <p class="text-2xl font-bold text-center my-10">ขออนุมัติเบิกเงินรายได้</p>
    <p class="text-xl font-bold mb-5">
      Page Charge เพื่อตีพิมพ์ผลงานในวารสารวิชาการระดับนานาชาติ
    </p>
    <Mainbox>
      <SectionWrapper>
        <TextInputLabelLeft
          label="ชื่อ"
          customLabel="w-2/12 text-lg font-bold"
          :disabled="true"
          v-model="data.user.user_nameth"
        />
        <TextInputLabelLeft
          label="ตำแหน่ง"
          customLabel="w-2/12 text-lg font-bold"
          :disabled="true"
          v-model="data.user.user_positionth"
        />

        <div class="flex flex-row">
          <TextInputLabelLeft
            label="มีรายชื่ออยู่ใน List ที่คณะได้ให้การรับรองแล้ว โดยมติคณะ ครั้งที่"
            customLabel="w-auto"
            customInput="max-w-max"
            customDiv="max-w-max"
            :disabled="true"
            v-model="data.conference.conf_times"
          />
          <TextInputLabelLeft
            label="วันที่"
            type="date"
            customLabel="ml-2 w-10"
            customInput="max-w-max"
            :disabled="true"
            v-model="data.conference.conf_days"
          />
        </div>
      </SectionWrapper>
    </Mainbox>
    <!-- 1.  รายละเอียดวารสารที่ส่งเสนอพิจารณา / การตอบรับให้ลงตีพิมพ์  -->
    <Mainbox>
      <p class="leading-9 text-lg font-bold">
        1.  รายละเอียดวารสารที่ส่งเสนอพิจารณา / การตอบรับให้ลงตีพิมพ์
      </p>
      <SectionWrapper>
        <TextInputLabelLeft
          label="ชื่อวารสาร"
          name="Input"
          customLabel="w-24"
          :disabled="true"
          :placeholder="formData.pageChange.journal_name"
        />
        <p>เป็นวารสารที่อยู่ในฐานข้อมูลสากล</p>

        <div class="flex flex-row">
          <CheckInput
            label="ISI ได้รับการจัดลำดับ Quartile "
            customDiv="max-w-72 flex items-center"
            v-model="formData.checkISI"
            :checked="formData.checkISI == 'ISI' ? true : false"
            :disabled="true"
          />
          <TextInputLabelLeft
            v-if="formData.checkISI == 'ISI'"
            label="ปี"
            customLabel="mr-2"
            customInput="max-w-max"
            customDiv="max-w-max"
            :disabled="true"
            :placeholder="formData.pageChange.pc_isi_year"
          />
          <TextInputLabelLeft
            v-if="formData.checkISI == 'ISI'"
            label="ลำดับ Quartile"
            customLabel="mr-2"
            customInput="max-w-max"
            customDiv="max-w-max"
            :disabled="true"
            :placeholder="formData.pageChange.qt_isi"
          />
          <TextInputLabelLeft
            v-if="formData.checkISI == 'ISI'"
            label="Impact Factor"
            customLabel="w-28 mx-2"
            customInput="max-w-max"
            customDiv="max-w-max"
            :disabled="true"
            :placeholder="formData.pageChange.impact_factor"
          />
        </div>

        <div class="flex flex-row">
          <CheckInput
            label="SJR ได้รับการจัดลำดับ Quartile "
            customDiv="max-w-72 flex items-center"
            v-model="formData.checkSJR"
            :checked="formData.checkSJR == 'SJR' ? true : false"
            :disabled="true"
          />
          <TextInputLabelLeft
            v-if="formData.checkSJR == 'SJR'"
            label="ปี"
            customLabel="mr-2"
            customInput="max-w-max"
            customDiv="max-w-max"
            :disabled="true"
            :placeholder="formData.pageChange.pc_sjr_year"
          />
          <TextInputLabelLeft
            v-if="formData.checkSJR == 'SJR'"
            label="ลำดับ Quartile"
            customLabel="mr-2"
            customInput="max-w-max"
            customDiv="max-w-max"
            :disabled="true"
            :placeholder="formData.pageChange.qt_sjr"
          />
          <TextInputLabelLeft
            v-if="formData.checkSJR == 'SJR'"
            label="SJR Score"
            customLabel="w-28 mx-2"
            customInput="max-w-max"
            customDiv="max-w-max"
            :disabled="true"
            :placeholder="formData.pageChange.sjr_score"
          />
        </div>

        <div class="flex flex-row">
          <CheckInput
            label="Scopus ได้รับการจัดลำดับ Quartile "
            customDiv="max-w-72 flex items-center"
            v-model="formData.checkScopus"
            :checked="formData.checkScopus == 'Scopus' ? true : false"
            :disabled="true"
          />
          <TextInputLabelLeft
            v-if="formData.checkScopus == 'Scopus'"
            label="ปี"
            customLabel="mr-2"
            customInput="max-w-max"
            customDiv="max-w-max"
            :disabled="true"
            :placeholder="formData.pageChange.pc_scopus_year"
          />
          <TextInputLabelLeft
            v-if="formData.checkScopus == 'Scopus'"
            label="ลำดับ Quartile"
            customLabel="mr-2"
            customInput="max-w-max"
            customDiv="max-w-max"
            :disabled="true"
            :placeholder="formData.pageChange.qt_scopus"
          />
          <TextInputLabelLeft
            v-if="formData.checkScopus == 'Scopus'"
            label="Cite Score"
            customLabel="w-28 mx-2"
            customInput="max-w-max"
            customDiv="max-w-max"
            :disabled="true"
            :placeholder="formData.pageChange.cite_score"
          />
        </div>

        <div class="flex flex-row">
          <CheckInput
            label="Nature"
            customDiv="max-w-72 flex items-center"
            v-model="formData.nature"
            :checked="formData.nature == 'nature' ? true : false"
            :disabled="true"
          />
        </div>
        <label class="form-control">
          <div class="flex flex-row">
            <TextInputLabelLeft
              label="วงเงินตามเกณฑ์การให้การสนับสนุนไม่เกิน"
              customLabel="w-auto mx-2"
              customInput="max-w-max"
              customDiv="max-w-max"
              :disabled="true"
              :placeholder="
                parseFloat(formData.pageChange.support_limit).toLocaleString(
                  'en-US',
                  {
                    minimumFractionDigits: 2,
                  }
                )
              "
            />
            <span class="flex items-center">บาท</span>
          </div>
        </label>
      </SectionWrapper>
    </Mainbox>
    <!-- ขอรับการสนับสนุนค่าใช้จ่ายในการลงตีพิมพ์ (Page Charge) -->
    <Mainbox>
      <p class="leading-9 text-lg font-bold">
        ขอรับการสนับสนุนค่าใช้จ่ายในการลงตีพิมพ์ (Page Charge)
      </p>
      <SectionWrapper>
        <TextInputLabelLeft
          label="จำนวนเงิน"
          customLabel="w-auto min-w-fit"
          customInput="max-w-fit"
          :disabled="true"
          :placeholder="
            parseFloat(formData.pageChange.request_support).toLocaleString(
              'en-US',
              {
                minimumFractionDigits: 2,
              }
            )
          "
        />
      </SectionWrapper>
    </Mainbox>
    <!-- ตั้งเบิก -->
    <Mainbox>
      <SectionWrapper>
        <TextInputLabelLeft label="ขออนุมัติเป็นจำนวนเงิน" />
        <TextInputLabelLeft label="เบิกได้" />
        <TextInputLabelLeft label="รวมเป็นเงิน" />
      </SectionWrapper>
    </Mainbox>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import api from "@/setting/api";

import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import TextInputLabelLeft from "@/components/Input/TextInputLabelLeft.vue";
import RadioInput from "@/components/Input/RadioInput.vue";
import CheckInput from "@/components/Input/CheckInput.vue";

// จัดการข้อมูลหลัก
  const formData = reactive({
    pageChange: [],
    user: [],
  
    check: [],
    checkISI: "",
    checkSJR: "",
    checkScopus: "",
    nature: "",
  });
  
  const formatThaiDate = (dateString) => {
    console.log("formatThaiDate input: ", dateString);
    const date = new Date(dateString);
    const months = [
      "ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", 
      "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."
    ];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear() + 543;
    console.log("new date: ",`${day} ${month} ${year}`)
    return `${day} ${month} ${year}`;
  };
  
  //isLoading เพื่อแสดงสถานะว่ากำลังโหลดข้อมูล
  const isLoading = ref(true);
  // Access route parameters
  const route = useRoute();
  const id = route.params.id;
  console.log("params.id", id);
  // ตัวแปรสำหรับเก็บข้อมูลจาก backend
  const fetchProfessorData = async () => {
    try {
      const responsePC = await api.get(`/page_charge/${id}`);
      const userID = responsePC.data.user_id;
      const responseUser = await api.get(`/user/${userID}`);
      formData.user = responseUser.data;
  
      console.log("get user: ", formData.user);
      console.log("get userid: ", responsePC.data.user_id);
      console.log("get responsePC: ", responsePC.data);
  
      formData.pageChange = responsePC.data;
      console.log("pageChange", formData.pageChange);
      formData.check = formData.pageChange.quality_journal;
    } catch (error) {
      console.log("Error fetching professor data:", error);
    } finally {
      isLoading.value = false;
    }
    console.log("Fetching professor data...");
  };
  
  const loopdata = async () => {
    console.log("in loop");
  
    fetchProfessorData();
  
    console.log("formdata, ", formData.check);
    for (let i = 0; i < formData.check.length; i++) {
      console.log("checking journal", formData.check[i]);
      if (formData.check[i] == "nature") {
        formData.nature = "nature";
        console.log("Journal have 'nature'");
      }
      if (formData.check[i] == "ISI") {
        formData.checkISI = "ISI";
        console.log("Journal have 'ISI'");
      }
      if (formData.check[i] == "SJR") {
        formData.checkSJR = "SJR";
        console.log("Journal have 'SJR'");
      }
      if (formData.check[i] == "Scopus") {
        formData.checkScopus = "Scopus";
        console.log("Journal have 'Scopus'");
      }
    }
  };
  
  // ดึงข้อมูลเมื่อ component ถูกโหลด
  onMounted(async () => {
    await fetchProfessorData();
    loopdata();
  });
  </script>
  