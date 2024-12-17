<template>
    <div>
        <Navbar />

        <div class="container my-10 mx-auto">
            <p class="text-xl font-bold mb-5">ขออนุมัติเดินทางไปเผยแพร่ผลงานในการประชุมทางวิชาการ</p>

            <!-- รายละเอียดคนส่ง -->
            <ProfDetail :Professor="Professor" />

            <DetailTravel :Travel="Travel" />

            <Qualitywork :Work="Work" />

            <Author :AuthForm="AuthForm" />

            <Leave :LeaveForm="LeaveForm" />

            <Venue :VenueForm="VenueForm" />

            <MoneyBox :Money="Money" />

            <FileResearch :FileForm="FileForm" />

            <div class="flex justify-end">
                <button class="btn btn-success text-white">บันทึกข้อมูล</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Navbar from "@/components/Navbar.vue";
import ProfDetail from "@/components/form/Conference/ProfDetail.vue"
import DetailTravel from "@/components/form/Conference/DetailTravel.vue"
import Qualitywork from "@/components/form/Conference/Qualitywork.vue"
import Author from "@/components/form/Conference/Author.vue"
import Leave from '@/components/form/Conference/Leave.vue';
import Venue from '@/components/form/Conference/Venue.vue';
import MoneyBox from '@/components/form/Conference/MoneyBox.vue';
import FileResearch from '@/components/form/Conference/FileResearch.vue';


// For sending to ProfDetail.vue in component
const Professor = {
    Name: {
        label: "ชื่อ",
        customLabel: "w-2/12 text-lg font-bold",
        placeholder: "นายจารุวัฒน์ วรรณวนัช",
        disabled: true,
    },
    Position: {
        label: "ตำแหน่ง",
        customLabel: "w-2/12 text-lg font-bold",
        placeholder: "อาจารย์",
        disabled: true,
    },
    Textother1: {
        label: "มีรายชื่ออยู่ใน List ที่คณะได้ให้การรับรองแล้ว โดยมติคณะ ครั้งที่",
        customLabel: "w-auto",
        customInput: "max-w-max",
        customDiv: "max-w-max"
    },
    Textother2: {
        label: "วันที่",
        customLabel: "ml-2 w-10",
        customInput: "max-w-max",
        type: "date"
    }
}

const Travel = {
    StartDate: {
        label: "เดินทางวันที่",
        customLabel: "w-auto mr-1",
        customDiv: "max-w-max",
        customInput: "max-w-max",
        type: "date"
    },
    EndDate: {
        label: "ถึงวันที่",
        customLabel: "w-auto mr-8",
        customDiv: "max-w-max ml-36",
        customInput: "max-w-max",
        type: "date"
    },
    NameResearch: {
        label: "ชื่อผลงานวิจัยที่นำเสนอ",
        customLabel: "w-1/6"
    },
    NameConfer: {
        label: "ชื่อการประชุมทางวิชาการ",
        customLabel: "w-1/6"
    },
    Date: {
        label: "วันที่จัด",
        customLabel: "w-auto mr-8",
        type: "date",
        customDiv: "max-w-max mr-36",
        customInput: "max-w-max",
    },
    Where: {
        label: "สถานที่จัด",
        customLabel: "w-24"
    },
    ArticleDate: {
        label: "วันที่ส่งบทความไปยังผู้จัด",
        type: "date",
        customLabel: "w-auto mr-1",
        customInput: "max-w-max",
        customDiv: "max-w-max"
    },
    AnnounDate: {
        label: "วันประกาศผลการพิจารณาบทความ",
        type: "date",
        customLabel: "w-auto mr-1",
        customInput: "max-w-max",
        customDiv: "max-w-max"
    },
    LastDate: {
        label: "วันสุดท้ายของการลงทะเบียน",
        type: "date",
        customLabel: "w-auto mr-1",
        customInput: "max-w-max",
        customDiv: "max-w-max"
    }

}

const Work = {
    Scopus: {
        Out: {
            label: "การประชุมทางวิชาการที่คณะจัดหรือร่วมจัดในประเทศ และไม่อยู่ในฐานข้อมูล SCOPUS",
            name: "Scopus",
            disabled: false
        },
        In: {
            label: "การประชุมทางวิชาการที่อยู่ในฐานข้อมูลสากล SCOPUS โดยมีการกำหนดคุณภาพแบ่งเป็น 2 ระดับ",
            name: "Scopus",
            disabled: false
        }
    }, Level: {
        basic: {
            label: "ระดับมาตรฐาน",
            name: "Level",
            disabled: false
        },
        good: {
            label: "ระดับดีมาก",
            name: "Level",
            disabled: false
        }
    },
    Score: {
        SJR: {
            label: "ใช้คะแนนที่คำนวณจาก SJR indicator และ H Index ที่ได้มาจาก SCImago Journal & Country Rank",
            name: "Score",
            disabled: false,
            value: "SJR",
            Input: {
                First: {
                    label: "• ค่า SJR",
                    disabled: false,
                    customLabel: "w-auto mr-1",
                    customDiv: "max-w-max",
                    customInput: "max-w-max mr-3",
                },
                Second: {
                    label: "ปี",
                    disabled: false,
                    customLabel: "w-auto mr-1",
                    customDiv: "max-w-max",
                    customInput: "max-w-max mr-3",
                },
                Third: {
                    label: "x H-Index",
                    disabled: false,
                    customLabel: "w-auto mr-1",
                    customDiv: "max-w-max",
                    customInput: "max-w-max mr-3",
                },
                fourth: {
                    label: "ปี",
                    disabled: false,
                    customLabel: "w-auto mr-1",
                    customDiv: "max-w-max",
                    customInput: "max-w-max mr-3",
                }
            }
        },
        CIF: {
            label: "ใช้ผลการจัดระดับ CIF (Conference Impact Factor)",
            name: "Score",
            disabled: false,
            value: "CIF",
            Input: {
                First: {
                    label: "• ค่า Citation total",
                    disabled: false,
                    customLabel: "w-auto mr-1",
                    customDiv: "max-w-max",
                    customInput: "max-w-max mr-3",
                },
                Third: {
                    label: "x H-Index",
                    disabled: false,
                    customLabel: "w-auto mr-1",
                    customDiv: "max-w-max",
                    customInput: "max-w-max mr-3",
                }
            }
        },
        CORE: {
            label: "ใช้ผลการจัดระดับ CORE Conference Ranking",
            name: "Score",
            disabled: false,
            value: "CORE",
            Input: {
                First: {
                    label: "• ค่า",
                    disabled: false,
                    customLabel: "w-auto mr-1",
                    customDiv: "max-w-max",
                    customInput: "max-w-max mr-3",
                }
            }
        },
    }
}

const AuthForm = {
    First: {
        label: "ผู้ประพันธ์อันดับแรก First Author",
        name: "Author"
    },
    Second: {
        label: "ผู้ประพันธ์บรรณกิจ Corresponding Author",
        name: "Author",
    }
}

const LeaveForm = {
    TimeLeave: {
        First: {
            label: "ครั้งที่ 1",
            name: "TimeLeave",
            disabled: false,
            Where: {
                Thai: {
                    label: "สถานที่จัดภายในประเทศ",
                    disabled: false,
                    name: "thai"
                },
                Not: {
                    label: "สถานที่จัด ณ ต่างประเทศ",
                    disabled: false,
                    name: "thai"
                }
            }
        },
        Second: {
            label: "ครั้งที่ 2",
            name: "TimeLeave",
            disabled: false,
            Where: {
                Thai: {
                    label: "WoS-Q1",
                    disabled: false,
                    name: "WoS"
                },
                Not: {
                    label: "WoS-Q2",
                    disabled: false,
                    name: "WoS"
                }
            },
            NameRec: {
                label: "เรื่อง",
                disabled: false,
                customLabel: "pr-2"
            }
        }
    },
    NotThai: {
        First: {
            label: "ไม่เกิน 50%",
            disabled: false,
            name: 'country'
        },
        Second: {
            label: "ไม่เกิน 100% มีผลงานตีพิมพ์ในวารสารในฐานข้อมูล",
            name: "country",
            disabled: false,
            Where: {
                WoSQ1: {
                    label: "WoS-Q1",
                    disabled: false,
                    name: "WoS"
                },
                WoSQ2: {
                    label: "WoS-Q2",
                    disabled: false,
                    name: "WoS"
                },
                WoSQ3: {
                    label: "WoS-Q3",
                    disabled: false,
                    name: "WoS"
                },
                SJRQ1: {
                    label: "SJR-Q1",
                    disabled: false,
                    name: "WoS"
                },
                SJRQ2: {
                    label: "SJR-Q2",
                    disabled: false,
                    name: "WoS"
                }
            },
            NameRec: {
                label: "เรื่อง",
                disabled: false,
                customLabel: "pr-2"
            }
        }
    }
}

const VenueForm = {
    First: {
        label: "ณ ต่างประเทศ",
        name: "Venue"
    },
    Second: {
        label: "ภายในประเทศ",
        name: "Venue",
    }
}

const Money = {
    First: {
        Input1: {
            label: "1. ค่าลงทะเบียน (ตามที่จ่ายจริง) จำนวน",
            disabled: false,
            customLabel: "w-auto pr-2",
            customDiv: "max-w-max",
            customInput: "max-w-max"
        },
        Input2: {
            label: "บทความ ๆ ละ",
            disabled: false,
            customLabel: "w-auto px-2",
            customDiv: "max-w-max",
            customInput: "max-w-max"
        }
    },
    Second: {
        // label: "ค่าพาหนะเดินทาง",
        Input1: {
            label: "• เดินทางในประเทศ",
            disabled: false,
            customLabel: "w-64 pr-2",
            customDiv: "max-w-[50rem]",
            customInput: "max-w-[50rem]"
        },
        Input2: {
            label: "• เดินทางในต่างประเทศ",
            disabled: false,
            customLabel: "w-64 pr-2",
            customDiv: "max-w-[50rem]",
            customInput: "max-w-[50rem]"
        },
        Input3: {
            label: "• เดินทางระหว่างประเทศ กรุงเทพฯ -",
            disabled: false,
            customLabel: "w-96 pr-2",
            customDiv: "max-w-[30rem]",
            customInput: "max-w-[14rem]"
        },
        Input4: {
            label: "- กรุงเทพฯ",
            disabled: false,
            customLabel: "w-22 px-2",
            customDiv: "max-w-[20rem]",
            customInput: "max-w-[14rem]"
        }
    },
    Third: {
        label: "3. ค่าภาษีสนามบิน (ถ้ามี)",
        disabled: false,
        customLabel: "w-auto pr-2",
        customDiv: "max-w-[51.4rem]",
        customInput: "max-w-[40.2rem]"
    },
    Fourth: {
        Input1: {
            label: "4. ค่าเช่าที่พัก",
            disabled: false,
            customLabel: "w-auto pr-2",
            customDiv: "max-w-[26rem]",
            customInput: "max-w-[19rem]"
        },
        Input2: {
            label: "คืน ๆ ละ",
            disabled: false,
            customLabel: "w-auto px-2",
            customDiv: "max-w-[25.5rem]",
            customInput: "max-w-[20.5rem]"
        }
    },
    Fifth: {
        Input1: {
            label: "5. ค่าเบี้ยเลี้ยงเดินทาง",
            disabled: false,
            customLabel: "w-auto pr-2",
            customDiv: "max-w-[26rem]",
            customInput: "max-w-[16rem]"
        },
        Input2: {
            label: "คืน ๆ ละ",
            disabled: false,
            customLabel: "w-auto px-2",
            customDiv: "max-w-[25.5rem]",
            customInput: "max-w-[20.5rem]"
        }
    },
}

const FileForm = {
    First : {
        label: "สำเนาบทความ (Full Paper)",
        name: "First"
    },
    Second : {
        span: "*กรณีเบิกค่าใช้จ่ายเต็มวงเงิน*",
        name: "Second",
        customSpan: "text-blue-500",
        label: "(Full Paper ประกอบการเบิก) มีผลงานตีพิมพ์ในวารสารในฐานข้อมูล WoS/SJR ซึ่งได้รับการตีพิมพ์ไม่เกิน 2 ปี ก่อนการประชุม เมื่อ"

    },
    Third : {
        span: "*กรณีเบิกค่าใช้จ่ายเต็มวงเงิน*",
        name: "Third",
        customSpan: "text-blue-500",
        label: "หลักฐานเอกสาร Quartile ของ Paper ที่ใช้ประกอบการเบิก"
    },
    Fourth : {
        label: "เอกสารประชาสัมพันธ์การจัดการประชุมทางวิชาการ (Call for paper)",
        name: "Fourth"
    },
    Fifth : {
        label: "จดหมายการตอบรับเข้าร่วมประชุม (Accepted)",
        name: "Fifth"
    },
    Sixth : {
        label: "เอกสารแสดงค่าลงทะเบียน",
        name: "Sixth"
    },
    Seventh : {
        label: "เอกสารแสดงอัตราแลกเปลี่ยน (ณ วันที่ยื่น)",
        name: "Seventh"
    },
    Eighth : {
        label: "หลักฐานการประชุมวิชาการอยู่ในฐาน Scopus",
        name: "Eighth"
    },
    Ninth : {
        label: "อื่นๆ",
        name: "Ninth"
    },

}
</script>
