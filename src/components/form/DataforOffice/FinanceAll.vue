<template>
  <div class="container my-10 mx-auto">
    <Mainbox>
      <SectionWrapper>
        <p>ตรวจสอบเงินงบประมาณประจำปีที่จัดสรรในการเผยแพร่ผลงานวิชาการ</p>
        <TextInputLabelLeft
          label="ปีงบประมาณ พ.ศ."
          customInput="max-w-max text-center"
          :disabled="true"
          :placeholder="formData.budget.budget_year"
        />
        <div class="flex justify-end">
          <div class="flex flex-row justify-between">
            <TextInputLabelLeft
              v-if="props.type == 'Conference'"
              label="วงเงินที่คณะจัดสรรไว้ จำนวนเงินทั้งสิ้น"
              customInput="max-w-max text-center"
              :disabled="true"
              :placeholder="parseFloat(formData.budget.Conference_amount).toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                  })"
            />
            <TextInputLabelLeft
              v-if="props.type == 'Page_Charge'"
              label="วงเงินที่คณะจัดสรรไว้ จำนวนเงินทั้งสิ้น"
              customInput="max-w-max text-center"
              :disabled="true"
              :placeholder="parseFloat(formData.budget.Page_Charge_amount).toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                  })"
            />
            <p class="flex items-center w-12">บาท</p>
          </div>
        </div>
        <div class="flex justify-end">
          <div class="flex flex-row justify-between">
            <TextInputLabelLeft
              v-if="props.type == 'Conference'"
              label="โดยคณะได้อนุมัติค่าใช้จ่ายไปแล้ว จำนวน"
              customInput="max-w-max text-center"
              :disabled="true"
              :placeholder="parseFloat(formData.budget.num_expenses_approved).toLocaleString('en-US', {
                    minimumFractionDigits: 0,
                  })"
            />
            <TextInputLabelLeft
              v-if="props.type == 'Page_Charge'"
              label="โดยคณะได้อนุมัติค่าใช้จ่ายในการเสนอผลงานวิชาการไปแล้ว จำนวน"
              customInput="max-w-max text-center"
              :disabled="true"
              :placeholder="parseFloat(formData.budget.num_expenses_approved).toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                  })"
            />
            <p class="flex items-center w-12">รายการ</p>
          </div>
        </div>
        <div class="flex justify-end">
          <div class="flex flex-row justify-between">
            <TextInputLabelLeft
              label="รวมเป็นเงิน"
              customInput="max-w-max text-center"
              :disabled="true"
              :placeholder="parseFloat(formData.budget.total_amount_approved).toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                  })"
            />
            <p class="flex items-center w-12">บาท</p>
          </div>
        </div>
        <div class="flex justify-end">
          <div class="flex flex-row justify-between">
            <TextInputLabelLeft
              label="วงเงินที่คณะจัดสรรไว้ คงเหลือ"
              customInput="max-w-max text-center"
              :disabled="true"
              :placeholder="parseFloat(formData.budget.remaining_credit_limit).toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                  })"
            />
            <p class="flex items-center w-12">บาท</p>
          </div>
        </div>
        <div class="flex justify-end">
          <div class="flex flex-row justify-between">
            <TextInputLabelLeft
              v-if="props.type == 'Conference'"
              label="จำนวนเงินที่ขออนุมัติจัดสรรในครั้งนี้ เป็นจำนวนเงิน"
              customInput="max-w-max text-center"
              :disabled="true"
              :placeholder="parseFloat(formData.budget.amount_approval).toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                  })"
            />
            <TextInputLabelLeft
              v-if="props.type == 'Page_Charge'"
              label="จำนวนเงินที่ขออนุมัติจค่า Page Charge ในครั้งนี้ เป็นจำนวนเงิน"
              customInput="max-w-max text-center"
              :disabled="true"
              :placeholder="parseFloat(formData.budget.amount_approval).toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                  })"
            />
            <p class="flex items-center w-12">บาท</p>
          </div>
        </div>
        <div class="flex justify-end">
          <div class="flex flex-row justify-between">
            <TextInputLabelLeft
              label="วงเงินที่คณะจัดสรรไว้ คงเหลือทั้งสิ้น"
              customInput="max-w-max text-center"
              :disabled="true"
              :placeholder="parseFloat(formData.budget.total_remaining_credit_limit).toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                  })"
            />
            <p class="flex items-center w-12">บาท</p>
          </div>
        </div>
        <div
          v-if="props.type == 'Conference'"
          class="flex flex-col items-end mt-5"
        >
          <div class="text-red-500 flex justify-end mr-5">
            <div class="flex flex-col items-end">
              <p v-if="formData.canWithdrawn.inOutC == 'Out_Country'">
                วงเงินที่สามารถเบิกได้ {{ expenses.withdrawn }} บาท
              </p>
              <div v-if="formData.canWithdrawn.inOutC == 'In_Country'" class="flex flex-col items-end">
                <p>วงเงินที่สามารถเบิกได้ {{ expenses.withdrawn }} บาท</p>
                <p>{{ formData.canWithdrawn.inthai }}</p>
              </div>
              <p>
                {{ formData.canWithdrawn.message }} ค่าลงทะเบียน
                {{ expenses.regits }} บาท
              </p>
              <div v-if="formData.canWithdrawn.inOutC == 'Out_Country'" class="flex flex-col items-end">
                <p>ค่าเบี้ยเลี้ยงเดินทางไม่เกิน {{ expenses.allowance }} บาท</p>
                <p>ค่าที่พักวันละไม่เกิน {{ expenses.accom }} บาท</p>
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="props.type == 'Page_Charge'"
          class="flex flex-col items-end mt-5"
        >
          <p class="text-red-500 mr-5">
            วงเงินที่สามารถเบิกได้ {{ formData.canWithdrawn }} บาท
          </p>
        </div>
      </SectionWrapper>
    </Mainbox>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive, computed } from "vue";
import api from "@/setting/api";

import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import TextInputLabelLeft from "@/components/Input/TextInputLabelLeft.vue";

const formData = reactive({
  conference: [],
  budget: [],
  canWithdrawn: "",
});

const expenses = computed(() => {
  const withdrawn = parseFloat(formData.canWithdrawn.money).toLocaleString(
    "en-US",
    {
      minimumFractionDigits: 2,
    }
  );
  const regits = parseFloat(formData.conference.total_amount).toLocaleString(
    "en-US",
    {
      minimumFractionDigits: 2,
    }
  );
  const allowance = parseFloat(
    3500 * formData.conference.num_travel_days
  ).toLocaleString("en-US", {
    minimumFractionDigits: 2,
  });
  const accom = parseFloat(
    8000 * formData.conference.num_days_room
  ).toLocaleString("en-US", {
    minimumFractionDigits: 2,
  });

  return { withdrawn, regits, allowance, accom };
});

const props = defineProps(["id", "type"]);
const isLoading = ref(true);
console.log("params.id", props.id);
console.log("params.type", props.type);

const fetchOfficerData = async () => {
  try {
    if (props.type == "Conference") {
      const responsebudget = await api.get(`/budget/conference/${props.id}`);
      console.log("responsebudget.data", responsebudget.data);
      formData.budget = responsebudget.data;
      console.log("finance");
      console.log("formData.budget", formData.budget);

      const responseCalConfer = await api.get(`/confer/calc/${props.id}`);
      console.log("responseCalConfer", responseCalConfer.data);
      formData.canWithdrawn = responseCalConfer.data;
      console.log(
        "responseCalConfer formData.canWithdrawn",
        formData.canWithdrawn
      );

      const responseConfer = await api.get(`/conference/${props.id}`);
      console.log("conference123", responseConfer);
      formData.conference = responseConfer.data;
    } else if (props.type == "Page_Charge") {
      const responsebudget = await api.get(`/budget/pageCharge/${props.id}`);
      formData.budget = responsebudget.data;
      console.log("finance");
      console.log("formData.budget", formData.budget);

      const responseCalPC = await api.get(`/page_charge/calc/${props.id}`);
      console.log("responseCalPC", responseCalPC);
      formData.canWithdrawn = responseCalPC.data.withdrawn;
    }
  } catch (error) {
    console.log("Error fetching Officer data:", error);
  } finally {
    isLoading.value = false;
  }
};
onMounted(() => {
  fetchOfficerData();
});
</script>
