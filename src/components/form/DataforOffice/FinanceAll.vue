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
                label="วงเงินที่คณะจัดสรรไว้ จำนวนเงินทั้งสิ้น"
                customInput="max-w-max text-center"
                disabled="true"
                :placeholder="formData.budget.total_amount"
              />
              <p class="flex items-center w-12">บาท</p>
            </div>
          </div>
          <div class="flex justify-end">
            <div class="flex flex-row justify-between">
              <TextInputLabelLeft v-if="props.type == 'Conference'"
                label="โดยคณะได้อนุมัติค่าใช้จ่ายไปแล้ว จำนวน"
                customInput="max-w-max text-center"
                disabled="true"
                :placeholder="formData.budget.num_expenses_approved"
              />
              <TextInputLabelLeft v-if="props.type == 'Page_Charge'"
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
              <TextInputLabelLeft v-if="props.type == 'Conference'"
                label="จำนวนเงินที่ขออนุมัติจัดสรรในครั้งนี้ เป็นจำนวนเงิน"
                customInput="max-w-max text-center"
                disabled="true"
                :placeholder="formData.budget.amount_approval"
              />
              <TextInputLabelLeft v-if="props.type == 'Page_Charge'"
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
          <div class="flex justify-end mt-5">
            <p class="text-red-500 mr-5">
              วงเงินที่สามารถเบิกได้ {{ formData.budget.form_money }} บาท
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
  });
  
  const props = defineProps(["id", "type"]);
  const isLoading = ref(true);
  console.log("params.id", props.id);
  console.log("params.type", props.type);
  
  const fetchOfficerData = async () => {
    try {
      if (props.type == "Conference") {
          const responsebudget = await axios.get(`/budget/conference/${props.id}`);
          formData.budget = responsebudget.data;
      } else if (props.type == "Page_Charge") {
          const responsebudget = await api.get(`/budget/pageCharge/${props.id}`);
          formData.budget = responsebudget.data;
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
  