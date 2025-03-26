<template>
  <div class="container my-10 mx-auto">
    <p class="text-2xl font-bold text-center no-print">export pdf confer</p>
    <div class="flex flex-col gap-1">
      <div class="flex flex-col justify-center items-center gap-1">
        <p class="text-[15px] font-bold pt-7">
          แบบขอรับการสนับสนุนค่าใช้จ่ายในการเผยแพร่ผลงานทางวิชาการ
        </p>
        <p class="text-[11px]">
          ตามประกาศคณะฯ เรื่อง
          การสนับสนุนค่าใช้จ่ายในการเผยแพร่ผลงานทางวิชาการของอาจารย์ประจำคณะเทคโนโลยีสารสนเทศ
          พ.ศ. 2567
        </p>
      </div>
      <div class="flex mt-1 mx-5 py-2 border border-black justify-center">
        <p class="text-[14px] font-bold pr-3">
          แบบที่ 1 ขออนุมัติเดินทางไปเผยแพร่ผลงานในการประชุมทางวิชาการ
        </p>
      </div>
      <div class="text-[12px]">
      <div class="flex flex-row mx-8 pt-1">
        <p>ข้าพเจ้า {{ formData.user.user_nameth }}</p>
        <p class="pl-5">
          ตำแหน่ง {{ formData.user.user_positionth }}
        </p>
      </div>
        <p>
          มีความประสงค์ขออนุมัติไปเผยแพร่ผลงานในการประชุมทางวิชาการ
          ซึ่งมีรายชื่ออยู่ใน List* ที่คณะได้ให้การรับรองแล้ว โดยมติคณะ ครั้งที่
          {{ formData.confer.conf_times }} เมื่อวันที่
          {{ formatThaiDate(formData.confer.conf_days) }}
        </p>
        <p>
          ขออนุมัติเดินทางในระหว่างวันที่
          {{ formatThaiDate(formData.confer.trav_dateStart) }} -
          {{ formatThaiDate(formData.confer.trav_dateEnd) }} มีรายละเอียดดังนี้
        </p>
        <p>1. ชื่อผลงานวิจัยที่นำเสนอ: {{ formData.confer.conf_research }}</p>
        <p>2. ชื่อการประชุมทางวิชาการ: {{ formData.confer.conf_name }}</p>
        <div class="flex flex-row gap-4">
          <p>3. การประชุมวิชาการจัดในประเทศ หรือต่างประเทศ</p>
          <input
            type="radio"
            disabled="false"
            :checked="
              formData.confer.country_conf == 'ภายในประเทศ' ? true : false
            "
          />
          <span>ภายในประเทศ</span>
          <input
            type="radio"
            disabled="false"
            :checked="
              formData.confer.country_conf == 'ณ ต่างประเทศ' ? true : false
            "
          />
          <span>ณ ต่างประเทศ</span>
        </div>
        <div class="flex flex-row gap-4">
          <p>
            4. วันที่จัด: {{ formatThaiDate(formData.confer.meeting_date) }}
          </p>
          <p>สถานที่จัด: {{ formData.confer.meeting_venue }}</p>
          <p v-if="formData.confer.country_conf == 'ณ ต่างประเทศ'">
            ประเทศ{{ formData.confer.location }}
          </p>
          <p v-if="formData.confer.country_conf == 'ภายในประเทศ'">
            จังหวัด{{ formData.confer.location }}
          </p>
        </div>
        <div class="flex flex-row gap-4">
          <p>
            5. วันที่ส่งบทความไปยังผู้จัด:
            {{ formatThaiDate(formData.confer.date_submit_organizer) }}
          </p>
          <p>
            วันประกาศผลการพิจารณาบทความ:
            {{ formatThaiDate(formData.confer.argument_date_review) }}
          </p>
        </div>
        <p>
          6. วันสุดท้ายของการลงทะเบียน:
          {{ formatThaiDate(formData.confer.last_day_register) }}
        </p>
        <p>7. คุณภาพของการประชุมทางวิชาการ</p>
        <div class="flex flex-col ml-4 gap-1 my-1">
          <div class="flex flex-row gap-3">
            <input
              type="radio"
              disabled="false"
              :checked="
                formData.confer.meeting_type == 'คณะจัด ไม่อยู่scopus'
                  ? true
                  : false
              "
            />
            <span
              >การประชุมทางวิชาการที่คณะจัดหรือร่วมจัดในประเทศ
              และไม่อยู่ในฐานข้อมูลสากล SCOPUS</span
            >
          </div>
          <div class="flex flex-row gap-3">
            <input
              type="radio"
              disabled="false"
              :checked="
                formData.confer.meeting_type == 'อยู่ในscopus' ? true : false
              "
            />
            <span
              >การประชุมทางวิชาการที่อยู่ในฐานข้อมูลสากล SCOPUS
              โดยมีการกำหนดคุณภาพแบ่งเป็น 2 ระดับ</span
            >
          </div>
        </div>

        <div class="flex flex-col ml-10 gap-1 my1">
          <div class="flex flex-row gap-3">
            <input
              type="radio"
              disabled="false"
              :checked="
                formData.confer.quality_meeting == 'มาตรฐาน' ? true : false
              "
            />
            <span>ระดับมาตรฐาน</span>
          </div>
          <div class="flex flex-row gap-3">
            <input
              type="radio"
              disabled="false"
              :checked="
                formData.confer.quality_meeting == 'ดีมาก' ? true : false
              "
            />
            <span>ระดับดีมาก</span>
          </div>
        </div>
        <div class="flex flex-col ml-[60px] gap-1 my-1">
          <div class="flex flex-row gap-3">
            <input
              type="radio"
              disabled="false"
              :checked="formData.score.score_type == 'SJR' ? true : false"
            />
            <span
              >ใช้คะแนนที่คำนวณจาก SJR indicator และ H Index ที่ได้มาจาก SCImago
              Journal & Country Rank</span
            >
          </div>
          <div
            v-if="formData.score.score_type == 'SJR'"
            class="flex flex-row ml-10 gap-4"
          >
            <p>
              ค่า SJR = {{ formData.score.sjr_score }} (ปี
              {{ formData.score.sjr_year }})
            </p>
            <p>
              ค่า H-Index = {{ formData.score.hindex_score }} (ปี
              {{ formData.score.hindex_year }})
            </p>
            <p>มีค่าคะแนน = {{ formData.score.score_result }}</p>
          </div>
          <div class="flex flex-row gap-3">
            <input
              type="radio"
              disabled="false"
              :checked="formData.score.score_type == 'CIF' ? true : false"
            />
            <span>ใช้ผลการจัดระดับ CIF (Conference Impact Factor)</span>
          </div>
          <div
            v-if="formData.score.score_type == 'CIF'"
            class="flex flex-row ml-10 gap-4"
          >
            <p>ค่า Citation total = {{ formData.score.sjr_score }}</p>
            <p>ค่า H-Index = {{ formData.score.hindex_score }}</p>
            <p>มีค่าคะแนน = {{ formData.score.score_result }}</p>
          </div>
          <div class="flex flex-row gap-3">
            <input
              type="radio"
              disabled="false"
              :checked="formData.score.score_type == 'CORE' ? true : false"
            />
            <span>ใช้ผลการจัดระดับ CORE Conference Ranking</span>
          </div>
          <div
            v-if="formData.score.score_type == 'CORE'"
            class="flex flex-row ml-10 gap-4"
          >
            <p>ค่า CORE = {{ formData.score.core_rank }}</p>
          </div>
        </div>

        <div class="flex flex-row gap-3">
          <p>8. ผู้ขอรับการสนับสนุนเป็นผู้นำเสนอผลงานและผู้วิจัยหลัก</p>
          <input
            type="radio"
            disabled="false"
            :checked="
              formData.confer.presenter_type == 'First Author' ? true : false
            "
          />
          <span>First Author</span>
          <input
            type="radio"
            disabled="false"
            :checked="
              formData.confer.presenter_type == 'Corresponding Author'
                ? true
                : false
            "
          />
          <span>Corresponding Author</span>
        </div>
        <p>9. การลาและการขอเบิกค่าลงทะเบียนและค่าใช้จ่ายอื่น ๆ</p>
        <div class="flex flex-row gap-3">
          <p class="ml-4">9.1 ครั้งที่ในการลา</p>
          <input
            type="radio"
            disabled="false"
            :checked="formData.confer.time_of_leave == '1' ? true : false"
          />
          <span>ครั้งที่ 1</span>
          <input
            type="radio"
            disabled="false"
            :checked="formData.confer.time_of_leave == '2' ? true : false"
          />
          <span>ครั้งที่ 2</span>
        </div>
        <div
          v-if="
            formData.confer.time_of_leave == '2' &&
            formData.confer.country_conf == 'ณ ต่างประเทศ'
          "
          class="ml-12"
        >
          <p>
            ในกรณีลาครั้งที่ 2 (การประชุมฯ ณ ต่างประเทศ)
            มีผลงานตีพิมพ์ในวารสารในฐานข้อมูล
          </p>
          <div class="flex flex-row gap-3 ml-4">
            <input
              type="radio"
              disabled="false"
              :checked="formData.confer.wos_2_leave == 'WoS-Q1' ? true : false"
            />
            <span>WoS-Q1</span>
            <input
              type="radio"
              disabled="false"
              :checked="formData.confer.wos_2_leave == 'WoS-Q2' ? true : false"
            />
            <span>WoS-Q2</span>
          </div>
          <p class="ml-4">เรื่อง: {{ formData.confer.name_2_leave }}</p>
        </div>
        <p class="ml-4">9.2 กรณีที่จัดการประชุมฯ ณ ต่างประเทศ</p>
        <p class="ml-10">
          ขอเบิกค่าลงทะเบียนตามที่จ่ายจริง และค่าใช้จ่ายอื่น ๆ
        </p>
        <div class="flex flex-row gap-3 ml-10">
          <input
            type="radio"
            disabled="false"
            :checked="formData.confer.withdraw == '50%' ? true : false"
          />
          <span>ไม่เกิน 50%</span>
        </div>
        <div class="flex flex-row gap-3 ml-10">
          <input
            type="radio"
            disabled="false"
            :checked="formData.confer.withdraw == '100%' ? true : false"
          />
          <span>ไม่เกิน 100%</span>
        </div>
        <div v-if="formData.confer.withdraw == '100%'" class="ml-16">
          <p>มีผลงานตีพิมพ์ในวารสารในฐานข้อมูล</p>
          <div class="flex flex-row gap-3">
            <input
              type="radio"
              disabled="false"
              :checked="
                formData.confer.wd_100_quality == 'WoS-Q1' ? true : false
              "
            />
            <span>WoS-Q1</span>
            <input
              type="radio"
              disabled="false"
              :checked="
                formData.confer.wd_100_quality == 'WoS-Q2' ? true : false
              "
            />
            <span>WoS-Q2</span>
            <input
              type="radio"
              disabled="false"
              :checked="
                formData.confer.wd_100_quality == 'WoS-Q3' ? true : false
              "
            />
            <span>WoS-Q3</span>
            <input
              type="radio"
              disabled="false"
              :checked="
                formData.confer.wd_100_quality == 'SJR-Q1' ? true : false
              "
            />
            <span>SJR-Q1</span>
            <input
              type="radio"
              disabled="false"
              :checked="
                formData.confer.wd_100_quality == 'SJR-Q2' ? true : false
              "
            />
            <span>SJR-Q2</span>
          </div>
          <p>เรื่อง: {{ formData.confer.wd_name_100 }}</p>
        </div>

        <p class="underline">รายการค่าใช้จ่ายที่ขอเบิกจ่าย</p>

        <div class="flex flex-row justify-between my-1">
          <div class="flex flex-row max-w-max">
            <p>1) ค่าลงทะเบียน (ตามที่จ่ายจริง) จำนวน</p>
            <p class="px-2">{{ formData.confer.num_register_articles }}</p>
            <p>บทความ ๆ ละ</p>
            <p class="px-2">{{ formData.confer.regist_amount_1_article }}</p>
            <p class="flex pl-2">บาท</p>
          </div>
          <p>รวม {{ formData.confer.total_amount }} บาท</p>
        </div>
        <p>2. ค่าพาหนะเดินทาง</p>
        <div class="flex flex-col my-1 ml-4">
          <div class="flex flex-row mb-1">
            <p>- เดินทางในประเทศ</p>
            <p class="px-2">{{ formData.confer.domestic_expenses ?? 0 }}</p>
            <p class="flex pl-2">บาท</p>
          </div>
          <div class="flex flex-row mb-1">
            <p>- เดินทางในต่างประเทศ</p>
            <p class="px-2">{{ formData.confer.overseas_expenses ?? 0 }}</p>
            <p class="flex pl-2">บาท</p>
          </div>
          <div class="flex flex-row mb-1">
            <p>- เดินทางระหว่างประเทศ กรุงเทพฯ -</p>
            <p class="px-2">{{ formData.confer.travel_country ?? "-" }}</p>
            <p>- กรุงเทพฯ</p>
            <p class="px-2">{{ formData.confer.inter_expenses ?? 0 }}</p>
            <p class="flex pl-2">บาท</p>
          </div>
        </div>
        <div class="flex flex-row gap-3">
          <p>3) ค่าภาษีสนามบิน (ถ้ามี)</p>
          <p>{{ formData.confer.airplane_tax ?? "-" }}</p>
          <p class="flex items-center pl-2">บาท</p>
        </div>
        <div class="flex flex-row justify-between my-1">
          <div class="flex flex-row max-w-max">
            <p>4) ค่าเช่าที่พัก</p>
            <p class="px-2">{{ formData.confer.num_days_room }}</p>
            <p>คืน ๆ ละ</p>
            <p class="px-2">{{ formData.confer.room_cost_per_night }}</p>
            <p class="flex pl-2">บาท</p>
          </div>
          <p>รวม {{ formData.confer.total_room }} บาท</p>
        </div>
        <div class="flex flex-row justify-between my-1">
          <div class="flex flex-row max-w-max">
            <p>5) ค่าเบี้ยเลี้ยงเดินทาง</p>
            <p class="px-2">{{ formData.confer.num_travel_days }}</p>
            <p>วัน ๆ ละ</p>
            <p class="px-2">{{ formData.confer.daily_allowance }}</p>
            <p class="flex pl-2">บาท</p>
          </div>
          <p>รวม {{ formData.confer.total_allowance }} บาท</p>
        </div>
        <div class="flex flex-row pt-1 justify-end gap-3">
          <p>รวมทั้งสิ้น</p>
          <p class="underline"> {{ formData.confer.all_money }}</p>
          <p>บาท</p>
        </div>
        <div class="flex flex-row pt-3 justify-end gap-2">
      <p>ลงนาม</p>
      <img
        :src="`http://localhost:3000/uploads/${formData.user.user_signature}`"
        class="h-[50px] w-[170px]"
        alt="user signature"
      />
      <p>ผู้เสนอขออนุมัติ</p>
      <p>ลงวันที่</p>
      <p>{{ formatThaiDate(formData.confer.doc_submit_date) }}</p>
    </div>
      </div>
    </div>

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
  confer: [],
  score: [],
  user: [],
  offic: [],
  budget: [],
  // formattedNumbers: "",
  // formattedBudget: "",
  file: [],
  signatureOffice: [],
});

const formatThaiDate = (dateString) => {
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
    const responseConfer = await api.get(`/conference/${id}`);
    formData.confer = responseConfer.data;

    const userID = responseConfer.data.user_id;
    const responseUser = await api.get(`/user/${userID}`);
    formData.user = responseUser.data;

    const responseScore = await api.get(`/score/${id}`);
    console.log("score123", responseScore);
    formData.score = responseScore.data;
    // formData.formattedNumbers = {
    //   support_limit: Number(formData.pageChange.support_limit).toLocaleString(),
    //   request_support: Number(
    //     formData.pageChange.request_support
    //   ).toLocaleString(),
    // };
    const responseoffic = await api.get(`/opinionPC/${id}`);
    formData.offic = responseoffic.data;

    const responsebudget = await api.get(`/budget/pageCharge/${id}`);
    formData.budget = responsebudget.data;
    // formData.formattedBudget = {
    //   total_amount: Number(formData.budget.total_amount).toLocaleString(),
    //   total_amount_approved: Number(
    //     formData.budget.total_amount_approved
    //   ).toLocaleString(),
    //   remaining_credit_limit: Number(
    //     formData.budget.remaining_credit_limit
    //   ).toLocaleString(),
    //   amount_approval: Number(formData.budget.amount_approval).toLocaleString(),
    //   total_remaining_credit_limit: Number(
    //     formData.budget.total_remaining_credit_limit
    //   ).toLocaleString(),
    // };

    const responseFile = await api.get(`/pdf/${id}`);
    formData.file = responseFile.data;

    const responseSignature = await api.get("/users");
    console.log("responseSignature 123", responseSignature.data);

    for (let i = 0; i < responseSignature.data.length; i++) {
      console.log("i", i);
      if (
        ["research", "finance", "associate", "dean"].includes(
          responseSignature.data[i].user_role
        )
      ) {
        const signature = {
          user_role: responseSignature.data[i].user_role,
          user_signature: responseSignature.data[i].user_signature,
        };
        console.log("er", signature);
        formData.signatureOffice.push(signature);
      }
    }
    console.log("formData.signatureOffice", formData.signatureOffice);
  } catch (error) {
    console.error("Error fetching professor data:", error);
  } finally {
    isLoading.value = false;
  }
  // console.log("Fetching professor data...");
};
// ดึงข้อมูลเมื่อ component ถูกโหลด
onMounted(async () => {
  await fetchProfessorData();
});
</script>

<style>
@media print {
  img {
    object-fit: cover;
  }
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
