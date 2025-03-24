<template>
  <div class="container my-10 mx-auto">
    <Mainbox>
      <SectionWrapper>
        <p>ตรวจสอบเงินงบประมาณประจำปีที่จัดสรรในการเผยแพร่ผลงานวิชาการ</p>
        <TextInputLabelLeft
          label="ปีงบประมาณ พ.ศ."
          customInput="max-w-max text-center"
          disabled="true"
          :placeholder="formData.budget.budget_year"
        />
        <div class="flex justify-end">
          <div class="flex flex-row justify-between">
            <TextInputLabelLeft
            v-if="props.type == 'Conference'"
              label="วงเงินที่คณะจัดสรรไว้ จำนวนเงินทั้งสิ้น"
              customInput="max-w-max text-center"
              disabled="true"
              :placeholder="formData.budget.Conference_amount"
            />
            <TextInputLabelLeft
            v-if="props.type == 'Page_Charge'"
              label="วงเงินที่คณะจัดสรรไว้ จำนวนเงินทั้งสิ้น"
              customInput="max-w-max text-center"
              disabled="true"
              :placeholder="formData.budget.Page_Charge_amount"
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
              disabled="true"
              :placeholder="formData.budget.num_expenses_approved"
            />
            <TextInputLabelLeft
              v-if="props.type == 'Page_Charge'"
              label="โดยคณะได้อนุมัติค่าใช้จ่ายในการเสนอผลงานวิชาการไปแล้ว จำนวน"
              customInput="max-w-max text-center"
              disabled="true"
              :placeholder="formData.budget.num_expenses_approved"
            />
            <p class="flex items-center w-12">รายการ</p>
          </div>
        </div>
        <div class="flex justify-end">
          <div class="flex flex-row justify-between">
            <TextInputLabelLeft
              label="รวมเป็นเงิน"
              customInput="max-w-max text-center"
              disabled="true"
              :placeholder="formData.budget.total_amount_approved"
            />
            <p class="flex items-center w-12">บาท</p>
          </div>
        </div>
        <div class="flex justify-end">
          <div class="flex flex-row justify-between">
            <TextInputLabelLeft
              label="วงเงินที่คณะจัดสรรไว้ คงเหลือ"
              customInput="max-w-max text-center"
              disabled="true"
              :placeholder="formData.budget.remaining_credit_limit"
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
              disabled="true"
              :placeholder="formData.budget.amount_approval"
            />
            <TextInputLabelLeft
              v-if="props.type == 'Page_Charge'"
              label="จำนวนเงินที่ขออนุมัติจค่า Page Charge ในครั้งนี้ เป็นจำนวนเงิน"
              customInput="max-w-max text-center"
              disabled="true"
              :placeholder="formData.budget.amount_approval"
            />
            <p class="flex items-center w-12">บาท</p>
          </div>
        </div>
        <div class="flex justify-end">
          <div class="flex flex-row justify-between">
            <TextInputLabelLeft
              label="วงเงินที่คณะจัดสรรไว้ คงเหลือทั้งสิ้น"
              customInput="max-w-max text-center"
              disabled="true"
              :placeholder="formData.budget.total_remaining_credit_limit"
            />
            <p class="flex items-center w-12">บาท</p>
          </div>
        </div>
        <div v-if="props.type == 'Conference'" class="flex flex-col items-end mt-5">
            <p class="text-red-500 mr-5">
              วงเงินที่สามารถเบิกได้ {{ formData.canWithdrawn.money }} บาท
            </p>
            <p class="text-red-500 mr-5">
              {{ formData.canWithdrawn.message }}
            </p>
            <p class="text-red-500 mr-5">
              ค่าเบี้ยเลี้ยงเดินทางวันละไม่เกิน 3,500 บาท
            </p>
            <p class="text-red-500 mr-5">
              ค่าที่พักวันละไม่เกิน 8,000 บาท
            </p>
          </div>
          <div v-if="props.type == 'Page_Charge'" class="flex flex-col items-end mt-5">
            <p class="text-red-500 mr-5">
              วงเงินที่สามารถเบิกได้ {{ formData.canWithdrawn }} บาท
            </p>

          </div>
      </SectionWrapper>
    </Mainbox>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from "vue";
import api from "@/setting/api";

import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import TextInputLabelLeft from "@/components/Input/TextInputLabelLeft.vue";

const formData = reactive({
  budget: [],
  canWithdrawn: "",
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
      formData.canWithdrawn = responseCalConfer.data.withdrawn;
      console.log("canWithdrawn",formData.canWithdrawn)

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
    console.error("Error fetching Officer data:", error);
  } finally {
    isLoading.value = false;
  }
};
onMounted(() => {
  fetchOfficerData();
});
</script>
