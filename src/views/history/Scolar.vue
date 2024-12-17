<template>
  <div>
    <Navbar />

    <div class="container my-10 mx-auto">
      <p class="text-xl font-bold mb-5">
        แบบเสนอโครงการวิจัย ทุนวิจัยส่งเสริมส่วนงานวิชาการ
      </p>

      <Research :ResearchForm="ResearchForm" />

      <Mainbox>
        <p class="text-lg font-bold">เอกสารหลักฐานที่แนบ</p>
        <div class="flex flex-rowitems-center">
          <p>แบบเสนอโครงการวิจัย (Research Project)</p>
          <div class="ml-80">
            <button class="btn bg-[#E85F19] text-white mr-5">ดูเอกสาร</button>
            <button class="btn bg-[#4285F4] text-white">โหลดเอกสาร</button>
          </div>
        </div>
      </Mainbox>

      <p class="text-xl font-bold pb-5">ตรวจสอบข้อมูลและหลักฐาน</p>

      <Noted :ResearchForm="ResearchForm" />

      <div class="flex justify-end">
        <button class="btn bg-[#4285F4] text-white">นำออกเอกสารเป็น PDF</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Navbar from "@/components/Navbar.vue";
import Research from "@/components/form/Research/Research.vue";
import Mainbox from "@/components/form/Mainbox.vue";
import Noted from "@/components/form/Officer/Noted.vue";
import FileResearch from "@/components/form/Research/FileResearch.vue";

// For sending to Research.vue in component
const ResearchForm = {
  ResearchName: {
    NameThai: {
      label: "(ภาษาไทย)",
      customLabel: "w-1/12",
      disabled: true,
    },
    NameEng: {
      label: "(ภาษาอังกฤษ)",
      customLabel: "w-1/12",
      disabled: true,
    },
  },
  ResearchCluster: {
    FirstRow: {
      first: {
        label: "ICT: Robotics & Automation",
        disabled: true,
      },
      second: {
        label: "ICT: Smart City & IoT",
        disabled: true,
      },
      third: {
        label: "Battery & EV",
        disabled: true,
      },
      fourth: {
        label: "Renewable Energy",
        disabled: true,
      },
      fifth: {
        label: "Biomedical",
        disabled: true,
      },
    },
    SecondRow: {
      first: {
        label: "Agriculture & Food",
        disabled: true,
      },
      second: {
        label: "Future Mobility & Logistic",
        disabled: true,
      },
      third: {
        label: "Materials",
        disabled: true,
      },
      fourth: {
        label: "Creative Economy",
        disabled: true,
      },
      fifth: {
        label: "อื่น ๆ ระบุ",
        disabled: true,
        customDiv: "max-w-32"
      },
      textinput: {
        label: "",
        disabled: true,
      },
    },
  },
  ResearchStandards: {
    first: {
      label: "มีการใช้สัตว์ทดลอง",
      disabled: true,
    },
    second: {
      label: "มีการวิจัยในมนุษย์",
      disabled: true,
    },
    third: {
      label: "มีการวิจัยด้านเทคโนโลยีชีวภาพสมัยใหม่หรือพันธุวิศวกรรม",
      disabled: true,
    },
    fourth: {
      label: "มีการใช้พันธุ์พืช",
      disabled: true,
    },
    fifth: {
      label: "มาตรา 52 (เพื่อประโยชน์ทางการค้า)",
      disabled: true,
      customDiv: "max-w-80"
    },
    sixth: {
      label: "มาตรา 53 (ไม่มีวัตถุประสงค์เพื่อประโยชน์ทางการค้า)",
      disabled: true,
    },
  },
  Researcher: {
    NameThai: {
      label: "ชื่อ - สกุล (ภาษาไทย)",
      customLabel: "w-2/12",
      placeholder: "นายจารุวัฒน์ วรรณวนัช",
      disabled: true,
    },
    NameEng: {
      label: "ชื่อ - สกุล (ภาษาอังกฤษ)",
      customLabel: "w-2/12",
      placeholder: "Mr. Jaruwat Wannawanat",
      disabled: true,
    },
    HIndex: {
      label: "ดัชนี H-Index",
      customLabel: "w-2/12",
      disabled: true
    },
    History: {
      label: "ประวัติด้านสิ่งประดิษฐ์ /นวัตกรรม",
      customLabel: "w-1/6",
      disabled: true
    },
    Persent: {
      label: "ร้อยละการมีส่วนร่วมในโครงการ",
      customLabel: "w-4/6",
      customDiv: "max-w-96 w-auto",
      customInput: "max-w-32",
      disabled: true
    }
  },
  Time: {
    years: {
      label: "ปี",
      customDiv: "max-w-32 w-auto ",
      customInput: "max-w-32",
      disabled: true
    },
    start: {
      label: "เริ่ม",
      type: "date",
      customInput: "max-w-fit ml-5",
      customDiv: "max-w-fit mr-5",
      disabled: true
    },
    end: {
      label: "สิ้นสุด",
      type: "date",
      customLabel: "w-1/12",
      customInput: "max-w-fit ml-[-20px]",
      disabled: true
    }
  },
  Noted: {
    first: {
      label : "รับทราบ",
      name : "noted",
      disabled: true
    },
    second: {
      label : "ไม่รับทราบ",
      name : "noted",
      disabled: true
    }
  }
};

</script>
