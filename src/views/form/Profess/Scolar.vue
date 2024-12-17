<template>
  <div>
    <Navbar />

    <div class="container my-10 mx-auto">
      <p class="text-xl font-bold mb-5">
        แบบเสนอโครงการวิจัย ทุนวิจัยส่งเสริมส่วนงานวิชาการ
      </p>

      <Research :ResearchForm="ResearchForm" />

      <FileResearch :ResearchForm="ResearchForm" />

      <div class="flex justify-end">
        <button class="btn btn-success text-white">บันทึกข้อมูล</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Navbar from "@/components/Navbar.vue";
import Research from "@/components/form/Research/Research.vue";
import FileResearch from "@/components/form/Research/FileResearch.vue";

// For sending to Research.vue in component
const ResearchForm = {
  ResearchName: {
    NameThai: {
      label: "(ภาษาไทย)",
      customLabel: "w-1/12",
      disabled: false,
    },
    NameEng: {
      label: "(ภาษาอังกฤษ)",
      customLabel: "w-1/12",
      disabled: false,
    },
  },
  ResearchCluster: {
    FirstRow: {
      first: {
        label: "ICT: Robotics & Automation",
        disabled: false,
      },
      second: {
        label: "ICT: Smart City & IoT",
        disabled: false,
      },
      third: {
        label: "Battery & EV",
        disabled: false,
      },
      fourth: {
        label: "Renewable Energy",
        disabled: false,
      },
      fifth: {
        label: "Biomedical",
        disabled: false,
      },
    },
    SecondRow: {
      first: {
        label: "Agriculture & Food",
        disabled: false,
      },
      second: {
        label: "Future Mobility & Logistic",
        disabled: false,
      },
      third: {
        label: "Materials",
        disabled: false,
      },
      fourth: {
        label: "Creative Economy",
        disabled: false,
      },
      fifth: {
        label: "อื่น ๆ ระบุ",
        disabled: false,
        customDiv: "max-w-32"
      },
      textinput: {
        label: "",
        disabled: false,
      },
    },
  },
  ResearchStandards: {
    first: {
      label: "มีการใช้สัตว์ทดลอง",
      disabled: false,
    },
    second: {
      label: "มีการวิจัยในมนุษย์",
      disabled: false,
    },
    third: {
      label: "มีการวิจัยด้านเทคโนโลยีชีวภาพสมัยใหม่หรือพันธุวิศวกรรม",
      disabled: false,
    },
    fourth: {
      label: "มีการใช้พันธุ์พืช",
      disabled: false,
    },
    fifth: {
      label: "มาตรา 52 (เพื่อประโยชน์ทางการค้า)",
      disabled: false,
      customDiv: "max-w-80"
    },
    sixth: {
      label: "มาตรา 53 (ไม่มีวัตถุประสงค์เพื่อประโยชน์ทางการค้า)",
      disabled: false,
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
        disabled: false
    },
    History: {
        label: "ประวัติด้านสิ่งประดิษฐ์ /นวัตกรรม",
        customLabel: "w-1/6",
        disabled: false
    },
    Persent: {
        label: "ร้อยละการมีส่วนร่วมในโครงการ",
        customLabel: "w-4/6",
        customDiv: "max-w-96 w-auto",
        customInput: "max-w-32",
        disabled: false
    }
  },
  Time: {
    years: {
        label: "ปี",
        customDiv: "max-w-32 w-auto ",
        customInput: "max-w-32",
        disabled: false
    },
    start: {
        label: "เริ่ม",
        type: "date",
        customInput: "max-w-fit ml-5",
        customDiv: "max-w-fit mr-5",
        disabled: false
    },
    end: {
        label: "สิ้นสุด",
        type: "date",
        customLabel: "w-1/12",
        customInput: "max-w-fit ml-[-20px]",
        disabled: false
    }
  },
  File: {
    label: "แบบเสนอโครงการวิจัย (Research Project)",
    disabled: false
  }
};

</script>
