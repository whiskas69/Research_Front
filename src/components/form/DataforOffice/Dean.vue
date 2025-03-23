<template>
  <div class="container my-10 mx-auto">
    <Mainbox v-if="props.type == 'Conference'">
      <SectionWrapper>
        <p class="text-lg font-bold">
          เพื่อโปรดทราบการจัดสรรวงเงิน ก่อนการตอบรับบทความจากผู้จัด
        </p>
        <RadioInput
          label="รับทราบ"
          disabled="true"
          :checked="formData.offic.c_approve_result == 'รับทราบ' ? true : false"
        />
      </SectionWrapper>
    </Mainbox>

    <div v-if="props.type == 'Page_Charge'">
      <Mainbox>
        <SectionWrapper>
          <p class="text-lg font-bold">
            เรียน คณบดีคณะเทคโนโลยีสารสนเทศ (ครั้งที่ 1)
          </p>
          <p class="text-base mt-1">
            เพื่อโปรดทราบการจัดสรรวงเงิน ก่อนการตอบรับบทความ
          </p>
          <RadioInput
            label="รับทราบ"
            value="รับทราบ"
            disabled="true"
            :checked="formData.offic.p_acknowledge == 'รับทราบ' ? true : false"
          />
        </SectionWrapper>
      </Mainbox>

      <Mainbox>
        <SectionWrapper>
          <p class="text-lg font-bold">
            เรียน คณบดีคณะเทคโนโลยีสารสนเทศ (ครั้งที่ 2)
          </p>
          <p class="text-base mt-1">
            ขณะนี้บทความได้รับการตอบรับแล้ว (Letter of acceptance) เมื่อวันที่
            <b>{{ formatThaiDate(formData.offic.p_date_accepted_approve) }} </b>
            ตามหลักฐานที่แนบจึงเรียนมาเพื่อโปรดพิจารณา
          </p>
          <div class="px-2">
            <RadioInput
              label="อนุมัติ"
              value="อนุมัติ"
              name="comment"
              disabled="true"
              :checked="
                formData.offic.p_approve_result == 'อนุมัติ' ? true : false
              "
            />
          </div>
          <div class="px-2">
            <RadioInput
              label="ไม่อนุมัติ"
              value="ไม่อนุมัติ"
              name="comment"
              disabled="true"
              :checked="
                formData.offic.p_approve_result == 'ไม่อนุมัติ' ? true : false
              "
            />
          </div>
          <div>
            <TextArea
              label="เนื่องจาก"
              disabled="true"
              :placeholder="formData.offic.p_reason_dean_appeove"
            />
          </div>
          <div class="px-2">
            <RadioInput
              label="อื่น ๆ"
              value="อื่น ๆ"
              name="comment"
              disabled="true"
              :checked="
                formData.offic.p_approve_result == 'อื่น ๆ' ? true : false
              "
            />
          </div>
          <div>
            <TextArea
              label="เนื่องจาก"
              disabled="true"
              :placeholder="formData.offic.p_reason_dean_appeove"
            />
          </div>
        </SectionWrapper>
      </Mainbox>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from "vue";
import api from "@/setting/api";

import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import RadioInput from "@/components/Input/RadioInput.vue";
import TextArea from "@/components/Input/TextArea.vue";

// จัดการข้อมูลหลัก
const formData = reactive({
  offic: [],
});

const formatThaiDate = (dateString) => {
  console.log("formatThaiDate input: ", dateString);
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
  console.log("new date: ", `${day} ${month} ${year}`);
  return `${day} ${month} ${year}`;
};

const props = defineProps(["id", "type"]);
const isLoading = ref(true);
console.log("params.id", props.id);
console.log("params.type", props.type);

const fetchOfficerData = async () => {
  try {
    if (props.type == "Conference") {
      const responseoffic = await api.get(`/opinionConf/${props.id}`);
      formData.offic = responseoffic.data;
    } else if (props.type == "Page_Charge") {
      const responseoffic = await api.get(`/opinionPC/${props.id}`);
      formData.offic = responseoffic.data;
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
