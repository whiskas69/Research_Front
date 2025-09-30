<template>
  <div class="container my-10 mx-auto">
    <h1 class="text-xl font-bold mb-5">ประวัติเอกสารทั้งหมด</h1>

    <div class="flex flex-row mb-4 w-full">
      <div class="flex flex-row mb-4 w-full">
        <span class="flex mr-2 items-center">ปีงบประมาณ</span>
        <select class="select select-bordered w-1/6" v-model="data.findFiscalYear">
          <option v-for="n in 5" :key="n" :value="fiscalYear - (n - 1)">
            {{ fiscalYear - (n - 1) }}
          </option>
        </select>

        <span class="flex ml-2 mr-2 items-center">ประเภทเอกสาร</span>
        <select class="select select-bordered w-1/6" v-model="data.typeOfDoc">
          <option selected :value="'all'">ทั้งหมด</option>
          <option :value="'Conference'">ประชุมวิชาการ</option>
          <option :value="'Page_Charge'">ตีพิมพ์วารสาร</option>
          <option :value="'Research_KRIS'">ทุนวิจัย</option>
        </select>

        <span class="flex ml-2 mr-2 items-center">สถานะเอกสาร</span>
        <select class="select select-bordered w-1/6" v-model="data.typeStatus">
          <option selected :value="'all'">ทั้งหมด</option>
          <option :value="'hr'">ฝ่ายบริหารทรัพยากรบุคคล</option>
          <option :value="'research'">ฝ่ายบริหารงานวิจัย</option>
          <option :value="'finance, pending'">ฝ่ายบริหารการเงิน</option>
          <option :value="'associate'">รองคณบดี</option>
          <option :value="'dean'">คณบดี</option>
          <option :value="'waitingApproval'">รออนุมัติ</option>
          <option :value="'approve'">อนุมัติ</option>
          <option :value="'notApproved'">ไม่อนุมัติ</option>
        </select>
      </div>
    </div>

    <FormCard v-for="form in data.allForm" :key="form.form_id" :form="form" :page="'history'"
      :roleConferenceMap="roleConferenceMap" :rolePageChargeMap="rolePageChargeMap"
      :roleResearchKRISMap="roleResearchKRISMap" :showAmount="true" :showStatus="true" />
  </div>
</template>
<script setup>
import { onMounted, reactive, watch } from "vue";
import { DateTime } from "luxon";
import api from "@/setting/api";
import FormCard from "@/components/form/FormCard.vue";

const data = reactive({
  allForm: [],
  findFiscalYear: "",
  typeOfDoc: "",
  typeStatus: "",
});

const roleConferenceMap = {
  conference: "/history/conference/",
};

const rolePageChargeMap = {
  pageCharge: "/history/pageCharge/",
};

const roleResearchKRISMap = {
  kris: "/history/kris/",
};

const getThaiFiscalYear = () => {
  const now = DateTime.now();
  const year = now.year + 543;
  return now.month >= 10 ? year + 1 : year;
};
const fiscalYear = getThaiFiscalYear();

//pull data of profess
const pulldata = async () => {
  try {
    const res = await api.get(`/allForms`, {
      params: {
        fiscalYear: data.findFiscalYear || "", // ส่งว่างถ้าไม่ได้เลือก
        type: data.typeOfDoc || "",
        typeStatus: data.typeStatus || "",
      },
    });

    data.allForm = res.data.map((form) => {
      return {
        ...form, // คัดลอกทุกค่าในออบเจกต์ `form` มา
        amount_approval: parseFloat(form.amount_approval).toLocaleString(
          "en-US",
          {
            minimumFractionDigits: 2,
          }
        ),
        Research_kris_amount: parseFloat(form.Research_kris_amount).toLocaleString(
          "en-US",
          {
            minimumFractionDigits: 2,
          }
        ),
      };
    });
  } catch (error) {
    console.log(error);

    alert("ไม่มีเอกสาร");
  }
};

const showTHstatus = (status) => {
  if (status == "approve") {
    return "อนุมัติ";
  } else if (status == "notApproved") {
    return "ไม่อนุมัติ";
  } else if (status == "hr") {
    return "ฝ่ายบริหารทรัพยากรบุคคล";
  } else if (status == "research") {
    return "ฝ่ายบริหารงานวิจัย";
  } else if (status == "finance" || status == "pending") {
    return "ฝ่ายบริหารการเงิน";
  } else if (status == "associate") {
    return "รองคณบดี";
  } else if (status == "dean") {
    return "คณบดี";
  } else if (status == "waitingApproval") {
    return "รออนุมัติ";
  }
};

onMounted(async () => {
  if (!data.findFiscalYear) {
    data.findFiscalYear = fiscalYear;
  }
  if (!data.typeOfDoc) {
    data.typeOfDoc = "all";
  }
  if (!data.typeStatus) {
    data.typeStatus = "all";
  }
  pulldata();
});

watch(
  () => [data.findFiscalYear, data.typeOfDoc, data.typeStatus],
  () => {
    pulldata();
  }
);
</script>
