<template>
  <div class="container my-10 mx-auto bg-yellow-300">
    <p class="text-2xl font-bold text-center my-10 no-print">export pdf pc</p>
    <div class="flex flex-col">
      <div class="flex flex-col justify-center items-center">
        <p class="text-[15px] font-bold pt-7">
          แบบขอรับการสนับสนุนค่าใช้จ่ายในการเผยแพร่ผลงานทางวิชาการ
        </p>
        <p class="text-[11px]">
          ตามประกาศคณะฯ เรื่อง
          การสนับสนุนค่าใช้จ่ายในการเผยแพร่ผลงานทางวิชาการของอาจารย์ประจำคณะเทคโนโลยีสารสนเทศ
          พ.ศ. 2567
        </p>
        <p class="text-[11px]">
          และประกาศ สจล. เรื่อง
          การสนับสนุนค่าใช้จ่ายสำหรับการนำเสนอบทความวิจัยลงตีพิมพ์
        </p>
        <p class="text-[11px]">
          ในวารสารวิชาการระดับนานาชาติ ด้วยเงินรายได้ ลงวันที่ 11 กรกฎาคม 2565
          และฉบับที่ 2 ลงวันที่ 19 กรกฎาคม 2565
        </p>
      </div>
      <div
        class="flex mt-1 mx-5 py-2 border-2 border-black justify-center bg-pink-300"
      >
        <p class="text-[14px] font-bold pr-3 bg-green-300">
          แบบที่ 2 ขออนุมัติค่า Page Charge
          เพื่อตีพิมพ์ผลงานในวารสารวิชาการระดับนานาชาติ
        </p>
      </div>
      <div class="flex flex-row mx-8 pt-2">
        <p class="text-[13px]">ข้าพเจ้า {{ formData.user.user_nameth }}</p>
        <p class="text-[13px] pl-5">
          ตำแหน่ง {{ formData.user.user_positionth }}
        </p>
      </div>
      <p class="text-[13px]">
        มีความประสงค์ขออนุมัติค่าใช้จ่ายในการเผยแพร่บทความวิจัยลงตีพิมพ์ (Page
        Charge) ในวารสารทางวิชาการระดับนานาชาติ ด้วยเงินรายได้
        ซึ่งมีรายชื่ออยู่ใน List* ที่คณะได้ให้การรับรองแล้ว โดยมติคณะ ครั้งที่
        {{ formData.pageChange.pageC_times }} เมื่อวันที่
        {{ formatThaiDate(formData.pageChange.pageC_days) }}
      </p>
      <!-- 1. รายละเอียดวารสารที่ส่งเสนอพิจารณา / การตอบรับให้ลงตีพิมพ์-->
      <p class="text-[13px] font-bold pt-3">
        1. รายละเอียดวารสารที่ส่งเสนอพิจารณา / การตอบรับให้ลงตีพิมพ์
      </p>
      <p class="text-[13px] pt-1 px-4">
        ชื่อวารสาร: {{ formData.pageChange.journal_name }}
      </p>
      <p class="text-[13px] pt-1 px-4">เป็นวารสารที่อยู่ในฐานข้อมูลสากล :</p>
      <div class="flex flex-row pt-1 px-5">
        <!-- checkbox edit -->
        <input
          type="checkbox"
          class="pt-1 px-5"
          v-model="formData.checkISI"
          :checked="formData.checkISI == 'ISI' ? true : false"
          disabled="false"
        />
        <span class="text-[13px] px-4"> ISI ได้รับการจัดลำดับ Quartile </span>
        <div v-if="formData.checkISI == 'ISI'" class="flex flex-row">
          <p class="text-[13px] px-4">
            ปี {{ formData.pageChange.pc_isi_year }}
          </p>
          <p class="text-[13px] px-4">
            ลำดับ Quartile {{ formData.pageChange.qt_isi }}
          </p>
          <p class="text-[13px] px-4">
            Impact Factor {{ formData.pageChange.impact_factor }}
          </p>
        </div>
      </div>

      <div class="flex flex-row pt-1 px-5">
        <input
          type="checkbox"
          class="pt-1 px-5"
          v-model="formData.checkSJR"
          :checked="formData.checkSJR == 'SJR' ? true : false"
          disabled="false"
        />
        <span class="text-[13px] px-4"> SJR ได้รับการจัดลำดับ Quartile </span>
        <div v-if="formData.checkSJR == 'SJR'" class="flex flex-row">
          <p class="text-[13px] px-4">
            ปี {{ formData.pageChange.pc_sjr_year }}
          </p>
          <p class="text-[13px] px-4">
            ลำดับ Quartile {{ formData.pageChange.qt_sjr }}
          </p>
          <p class="text-[13px] px-4">
            SJR Score {{ formData.pageChange.sjr_score }}
          </p>
        </div>
      </div>

      <div class="flex flex-row pt-1 px-5">
        <input
          type="checkbox"
          v-model="formData.checkScopus"
          :checked="formData.checkScopus == 'Scopus' ? true : false"
          disabled="false"
        />
        <span class="text-[13px] px-4">
          Scopus ได้รับการจัดลำดับ Quartile
        </span>
        <div v-if="formData.checkScopus == 'Scopus'" class="flex flex-row">
          <p class="text-[13px] px-4">
            ปี {{ formData.pageChange.pc_scopus_year }}
          </p>
          <p class="text-[13px] px-4">
            ลำดับ Quartile {{ formData.pageChange.qt_scopus }}
          </p>
          <p class="text-[13px] px-4">
            Cite Score{{ formData.pageChange.cite_score }}
          </p>
        </div>
      </div>

      <div class="flex flex-row pt-1 px-5">
        <input
          type="checkbox"
          class="pt-1 px-5"
          v-model="formData.nature"
          :checked="formData.nature == 'nature' ? true : false"
          disabled="false"
        />
        <span class="text-[13px] px-4"> Nature </span>
      </div>
    </div>
    <p class="text-[13px] px-4 pt-1">
      วงเงินตามเกณฑ์การให้การสนับสนุน ไม่เกิน
      {{ formData.formattedNumbers.support_limit }} บาท
    </p>
    <!-- 2.	รายละเอียดผลงานวิจัยที่ส่งเสนอพิจารณา / ได้รับการตอบรับให้ตีพิมพ์ -->
    <p class="text-[13px] font-bold pt-3">
      2. รายละเอียดผลงานวิจัยที่ส่งเสนอพิจารณา / ได้รับการตอบรับให้ตีพิมพ์
    </p>

    <p class="text-[13px] px-4 pt-1">
      ชื่อบทความ: {{ formData.pageChange.article_title }}
    </p>
    <p class="text-[13px] px-4 pt-1">
      กำหนดการที่คาดว่าจะได้รับการลงตีพิมพ์ในวารสาร:
    </p>
    <div class="flex flex-row text-[13px] pt-1 px-8 gap-x-5">
      <p>ปีที่ (Vol.) {{ formData.pageChange.vol_journal }}</p>
      <p>ฉบับที่ (Issue) {{ formData.pageChange.issue_journal }}</p>
      <p>เดือน {{ formData.pageChange.month }}</p>
      <p>ปี ค.ศ. {{ formData.pageChange.year }}</p>
      <p>เลขที่ ISSN/ISBN (อื่นๆ) {{ formData.pageChange.ISSN_ISBN }}</p>
    </div>
    <div class="flex flex-row text-[13px] px-4 pt-1 gap-x-5">
      <p>
        วันที่ส่งบทความไปยังสำนักพิมพ์เจ้าของวารสาร:
        {{ formatThaiDate(formData.pageChange.submission_date) }}
      </p>
      <p>
        วันประกาศผลการพิจารณา:
        {{ formatThaiDate(formData.pageChange.date_review_announce) }}
      </p>
    </div>
    <p class="text-[13px] px-4 pt-1">
      วันสุดท้ายของการจ่ายค่าตีพิมพ์:
      {{ formatThaiDate(formData.pageChange.final_date) }}
    </p>

    <p class="text-[13px] px-4 pt-1">
      (ถ้ามี) บทความวิจัยนี้เป็นผลงานจากโครงการวิจัยเรื่อง
      {{ formData.pageChange.article_research_ject }}
    </p>
    <div class="flex flex-row text-[13px] px-[50px] pt-1 gap-x-3">
      <p>ประเภทโครงการวิจัย:</p>
      <input
        type="radio"
        disabled="false"
        :checked="
          formData.pageChange.research_type == 'วิจัยพื้นฐาน' ? true : false
        "
      />
      <span>วิจัยพื้นฐาน</span>
      <input
        type="radio"
        disabled="false"
        :checked="
          formData.pageChange.research_type == 'วิจัยประยุกต์' ? true : false
        "
      />
      <span>วิจัยประยุกต์</span>
      <input
        type="radio"
        disabled="false"
        :checked="
          formData.pageChange.research_type == 'วิจัยและพัฒนา' ? true : false
        "
      />
      <div class="flex flex-row gap-x-4">
        <span>วิจัยและพัฒนา</span>
        <input
          type="radio"
          disabled="false"
          :checked="
            formData.pageChange.research_type == 'วิจัยอื่น ๆ' ? true : false
          "
        />
        <span>วิจัยอื่น ๆ</span>
        <p v-if="formData.pageChange.research_type == 'วิจัยอื่น ๆ '">
          {{ formData.pageChange.research_type2 }}
        </p>
      </div>
    </div>
    <p class="text-[13px] px-[50px] pt-1">
      ชื่อแหล่งทุนวิจัย: {{ formData.pageChange.name_funding_source }}
    </p>
    <div class="flex flex-row text-[13px] px-[50px] pt-1 gap-x-4">
      <p>วงเงินงบประมาณการวิจัย: {{ formData.pageChange.budget_limit }}</p>
      <p>ประจำปี: {{ formData.pageChange.annual }}</p>
    </div>

    <!-- 3.	ผู้ขอรับการสนับสนุน -->
    <p class="text-[13px] font-bold pt-3">3. ผู้ขอรับการสนับสนุน</p>
    <div class="flex flex-row text-[13px] pt-1 gap-x-4 px-5">
      <input
        type="radio"
        disabled="false"
        :checked="
          formData.pageChange.presenter_type == 'First Author' ? true : false
        "
      />
      <span>ผู้ประพันธ์บรรณกิจ Corresponding Author</span>
      <input
        type="radio"
        disabled="false"
        :checked="
          formData.pageChange.presenter_type == 'Corresponding Author'
            ? true
            : false
        "
      />
      <span>ผู้ประพันธ์บรรณกิจ Corresponding Author</span>
    </div>
    <!-- 4. เอกสารหลักฐานที่แนบมาพร้อมนี้ -->
    <p class="text-[13px] font-bold pt-3">4. เอกสารหลักฐานที่แนบมาพร้อมนี้</p>
    <p>รอเช็คเอกสาร</p>
    <p>รอเช็คเอกสาร</p>
    <p>รอเช็คเอกสาร</p>
    <p>รอเช็คเอกสาร</p>
    {{ formData.file }}
    <!-- 5.	ขอรับการสนับสนุนค่าใช้จ่ายในการลงตีพิมพ์ (Page Charge)  -->
    <div class="flex flex-row gap-x-4">
      <p class="text-[13px] font-bold pt-3">
        5. ขอรับการสนับสนุนค่าใช้จ่ายในการลงตีพิมพ์ (Page Charge)
      </p>
      <p class="text-[13px] pt-3">
        เป็นจำนวนเงิน {{ formData.formattedNumbers.request_support }} บาท
      </p>
    </div>

    <div class="flex flex-col text-[13px] pt-3 items-end">
      <p>ลงชื่อ ผู้เสนอขออนุมัติ</p>
      <p>img ja</p>
      <img :src="formData.user.user_signature" alt="" />
      <p>{{ formatThaiDate(formData.pageChange.doc_submit_date) }}</p>
    </div>

    <div class="page-break"></div>
    <p>wow</p>

    <div class="container my-10 mx-auto">
      <div class="flex justify-end no-print">
        <button
          onclick="window.print()"
          class="btn text-white bg-[#4285F4] hover:bg-[#4285F4]"
        >
          พิมพ์แบบฟอร์ม
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import api from "@/setting/api";

// จัดการข้อมูลหลัก
const formData = reactive({
  pageChange: [],
  user: [],
  offic: [],
  budget: [],
  formattedNumbers: "",
  file: [],

  check: [],
  checkISI: "",
  checkSJR: "",
  checkScopus: "",
  nature: "",
});
const formatThaiDate = (dateString) => {
  // console.log("formatThaiDate input: ", dateString);
  const date = new Date(dateString);
  const months = [
    "ม.ค.",
    "ก.พ.",
    "มี.ค.",
    "เม.ย.",
    "พ.ค.",
    "มิ.ย.",
    "ก.ค.",
    "ส.ค.",
    "ก.ย.",
    "ต.ค.",
    "พ.ย.",
    "ธ.ค.",
  ];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear() + 543;
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

    // console.log("get user: ", formData.user);

    formData.pageChange = responsePC.data;
    // console.log("pageChange", formData.pageChange);
    formData.check = formData.pageChange.quality_journal;

    formData.formattedNumbers = {
      support_limit: Number(formData.pageChange.support_limit).toLocaleString(),
      request_support: Number(
        formData.pageChange.request_support
      ).toLocaleString(),
    };
    const responseoffic = await api.get(`/opinionPC/${id}`);
    // console.log("offic123", responseoffic);
    formData.offic = responseoffic.data;

    const responsebudget = await api.get(`/budget/pageCharge/${id}`);
    // console.log("budget 123", responsebudget);
    formData.budget = responsebudget.data;
    // console.log("budget", JSON.stringify(formData.budget));

    const responseFile = await api.get(`/pdf/${id}`);
    console.log("file 123", responseFile);
    formData.file = responseFile.data;
    console.log("file", JSON.stringify(formData.file));
  } catch (error) {
    console.error("Error fetching professor data:", error);
  } finally {
    isLoading.value = false;
  }
  // console.log("Fetching professor data...");
};

const loopdata = async () => {
  // console.log("in loop");
  fetchProfessorData();
  // console.log("formdata, ", formData.check);
  for (let i = 0; i < formData.check.length; i++) {
    // console.log("checking journal", formData.check[i]);
    if (formData.check[i] == "nature") {
      formData.nature = "nature";
      // console.log("Journal have 'nature'");
    }
    if (formData.check[i] == "ISI") {
      formData.checkISI = "ISI";
      // console.log("Journal have 'ISI'");
    }
    if (formData.check[i] == "SJR") {
      formData.checkSJR = "SJR";
      // console.log("Journal have 'SJR'");
    }
    if (formData.check[i] == "Scopus") {
      formData.checkScopus = "Scopus";
      // console.log("Journal have 'Scopus'");
    }
  }
};

// ดึงข้อมูลเมื่อ component ถูกโหลด
onMounted(async () => {
  await fetchProfessorData();
  loopdata();
});
</script>

<style>
@media print {
  .no-print {
    display: none !important;
  }
  @page {
    margin: 0;
  }
  body {
    margin: 0;
  }
  header,
  footer {
    display: none;
  }
  .page-break {
    page-break-before: always;
  }
}
</style>
