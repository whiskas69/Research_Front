<template>
    <div>

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

            <File :FileForm="FileForm"/>

            <p class="text-xl font-bold my-5">ตรวจสอบข้อมูลและหลักฐาน</p>

            <HR :HRForm="HRForm"/>

            <ResearchCon :ResearchForm="ResearchForm"/>

            <MoneyConfer :MoneyForm="MoneyForm"/>

            <AssociarConfer :AssociateForm="AssociateForm"/>

            <DeanConfer :DeanForm="DeanForm"/>

            <div class="flex justify-end">
                <button class="btn btn-success text-white">บันทึกข้อมูล</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import ProfDetail from "@/components/form/Conference/ProfDetail.vue"
import DetailTravel from "@/components/form/Conference/DetailTravel.vue"
import Qualitywork from "@/components/form/Conference/Qualitywork.vue"
import Author from "@/components/form/Conference/Author.vue"
import Leave from '@/components/form/Conference/Leave.vue';
import Venue from '@/components/form/Conference/Venue.vue';
import MoneyBox from '@/components/form/Conference/MoneyBox.vue';
import File from '@/components/form/Officer/File.vue'
import HR from '@/components/form/Officer/HR.vue'
import ResearchCon from '@/components/form/Officer/ResearchCon.vue';
import MoneyConfer from '@/components/form/Officer/MoneyConfer.vue';
import AssociarConfer from '@/components/form/Officer/AssociarConfer.vue';
import DeanConfer from '@/components/form/Officer/DeanConfer.vue';

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
        customDiv: "max-w-max",
        disabled: true,
    },
    Textother2: {
        label: "วันที่",
        customLabel: "ml-2 w-10",
        customInput: "max-w-max",
        type: "date",
        disabled: true,
    }
}

const Travel = {
    StartDate: {
        label: "เดินทางวันที่",
        customLabel: "w-auto mr-1",
        customDiv: "max-w-max",
        customInput: "max-w-max",
        type: "date",
        disabled: true,
    },
    EndDate: {
        label: "ถึงวันที่",
        customLabel: "w-auto mr-8",
        customDiv: "max-w-max ml-36",
        customInput: "max-w-max",
        type: "date",
        disabled: true,
    },
    NameResearch: {
        label: "ชื่อผลงานวิจัยที่นำเสนอ",
        customLabel: "w-1/6",
        disabled: true,
    },
    NameConfer: {
        label: "ชื่อการประชุมทางวิชาการ",
        customLabel: "w-1/6",
        disabled: true,
    },
    Date: {
        label: "วันที่จัด",
        customLabel: "w-auto mr-8",
        type: "date",
        customDiv: "max-w-max mr-36",
        customInput: "max-w-max",
        disabled: true,
    },
    Where: {
        label: "สถานที่จัด",
        customLabel: "w-24",
        disabled: true,
    },
    ArticleDate: {
        label: "วันที่ส่งบทความไปยังผู้จัด",
        type: "date",
        customLabel: "w-auto mr-1",
        customInput: "max-w-max",
        customDiv: "max-w-max",
        disabled: true,
    },
    AnnounDate: {
        label: "วันประกาศผลการพิจารณาบทความ",
        type: "date",
        customLabel: "w-auto mr-1",
        customInput: "max-w-max",
        customDiv: "max-w-max",
        disabled: true,
    },
    LastDate: {
        label: "วันสุดท้ายของการลงทะเบียน",
        type: "date",
        customLabel: "w-auto mr-1",
        customInput: "max-w-max",
        customDiv: "max-w-max",
        disabled: true,
    }

}

const Work = {
    Scopus: {
        Out: {
            label: "การประชุมทางวิชาการที่คณะจัดหรือร่วมจัดในประเทศ และไม่อยู่ในฐานข้อมูล SCOPUS",
            name: "Scopus",
            disabled: true
        },
        In: {
            label: "การประชุมทางวิชาการที่อยู่ในฐานข้อมูลสากล SCOPUS โดยมีการกำหนดคุณภาพแบ่งเป็น 2 ระดับ",
            name: "Scopus",
            disabled: true
        }
    }, Level: {
        basic: {
            label: "ระดับมาตรฐาน",
            name: "Level",
            disabled: true
        },
        good: {
            label: "ระดับดีมาก",
            name: "Level",
            disabled: true
        }
    },
    Score: {
        SJR: {
            label: "ใช้คะแนนที่คำนวณจาก SJR indicator และ H Index ที่ได้มาจาก SCImago Journal & Country Rank",
            name: "Score",
            disabled: true,
            value: "SJR",
            Input: {
                First: {
                    label: "• ค่า SJR",
                    disabled: true,
                    customLabel: "w-auto mr-1",
                    customDiv: "max-w-max",
                    customInput: "max-w-max mr-3",
                },
                Second: {
                    label: "ปี",
                    disabled: true,
                    customLabel: "w-auto mr-1",
                    customDiv: "max-w-max",
                    customInput: "max-w-max mr-3",
                },
                Third: {
                    label: "x H-Index",
                    disabled: true,
                    customLabel: "w-auto mr-1",
                    customDiv: "max-w-max",
                    customInput: "max-w-max mr-3",
                },
                fourth: {
                    label: "ปี",
                    disabled: true,
                    customLabel: "w-auto mr-1",
                    customDiv: "max-w-max",
                    customInput: "max-w-max mr-3",
                }
            }
        },
        CIF: {
            label: "ใช้ผลการจัดระดับ CIF (Conference Impact Factor)",
            name: "Score",
            disabled: true,
            value: "CIF",
            Input: {
                First: {
                    label: "• ค่า Citation total",
                    disabled: true,
                    customLabel: "w-auto mr-1",
                    customDiv: "max-w-max",
                    customInput: "max-w-max mr-3",
                },
                Third: {
                    label: "x H-Index",
                    disabled: true,
                    customLabel: "w-auto mr-1",
                    customDiv: "max-w-max",
                    customInput: "max-w-max mr-3",
                }
            }
        },
        CORE: {
            label: "ใช้ผลการจัดระดับ CORE Conference Ranking",
            name: "Score",
            disabled: true,
            value: "CORE",
            Input: {
                First: {
                    label: "• ค่า",
                    disabled: true,
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
        name: "Author",
        disabled: true,
    },
    Second: {
        label: "ผู้ประพันธ์บรรณกิจ Corresponding Author",
        name: "Author",
        disabled: true,
    }
}

const LeaveForm = {
    TimeLeave: {
        First: {
            label: "ครั้งที่ 1",
            name: "TimeLeave",
            disabled: true,
            Where: {
                Thai: {
                    label: "สถานที่จัดภายในประเทศ",
                    disabled: true,
                    name: "thai"
                },
                Not: {
                    label: "สถานที่จัด ณ ต่างประเทศ",
                    disabled: true,
                    name: "thai"
                }
            }
        },
        Second: {
            label: "ครั้งที่ 2",
            name: "TimeLeave",
            disabled: true,
            Where: {
                Thai: {
                    label: "WoS-Q1",
                    disabled: true,
                    name: "WoS"
                },
                Not: {
                    label: "WoS-Q2",
                    disabled: true,
                    name: "WoS"
                }
            },
            NameRec: {
                label: "เรื่อง",
                disabled: true,
                customLabel: "pr-2"
            }
        }
    },
    NotThai: {
        First: {
            label: "ไม่เกิน 50%",
            disabled: true,
            name: 'country'
        },
        Second: {
            label: "ไม่เกิน 100% มีผลงานตีพิมพ์ในวารสารในฐานข้อมูล",
            name: "country",
            disabled: true,
            Where: {
                WoSQ1: {
                    label: "WoS-Q1",
                    disabled: true,
                    name: "WoS"
                },
                WoSQ2: {
                    label: "WoS-Q2",
                    disabled: true,
                    name: "WoS"
                },
                WoSQ3: {
                    label: "WoS-Q3",
                    disabled: true,
                    name: "WoS"
                },
                SJRQ1: {
                    label: "SJR-Q1",
                    disabled: true,
                    name: "WoS"
                },
                SJRQ2: {
                    label: "SJR-Q2",
                    disabled: true,
                    name: "WoS"
                }
            },
            NameRec: {
                label: "เรื่อง",
                disabled: true,
                customLabel: "pr-2"
            }
        }
    }
}

const VenueForm = {
    First: {
        label: "ณ ต่างประเทศ",
        name: "Venue",
        disabled: true,
    },
    Second: {
        label: "ภายในประเทศ",
        name: "Venue",
        disabled: true,
    }
}

const Money = {
    First: {
        Input1: {
            label: "1. ค่าลงทะเบียน (ตามที่จ่ายจริง) จำนวน",
            disabled: true,
            customLabel: "w-auto pr-2",
            customDiv: "max-w-max",
            customInput: "max-w-max"
        },
        Input2: {
            label: "บทความ ๆ ละ",
            disabled: true,
            customLabel: "w-auto px-2",
            customDiv: "max-w-max",
            customInput: "max-w-max"
        }
    },
    Second: {
        // label: "ค่าพาหนะเดินทาง",
        Input1: {
            label: "• เดินทางในประเทศ",
            disabled: true,
            customLabel: "w-64 pr-2",
            customDiv: "max-w-[50rem]",
            customInput: "max-w-[50rem]"
        },
        Input2: {
            label: "• เดินทางในต่างประเทศ",
            disabled: true,
            customLabel: "w-64 pr-2",
            customDiv: "max-w-[50rem]",
            customInput: "max-w-[50rem]"
        },
        Input3: {
            label: "• เดินทางระหว่างประเทศ กรุงเทพฯ -",
            disabled: true,
            customLabel: "w-96 pr-2",
            customDiv: "max-w-[30rem]",
            customInput: "max-w-[14rem]"
        },
        Input4: {
            label: "- กรุงเทพฯ",
            disabled: true,
            customLabel: "w-22 px-2",
            customDiv: "max-w-[20rem]",
            customInput: "max-w-[14rem]"
        }
    },
    Third: {
        label: "3. ค่าภาษีสนามบิน (ถ้ามี)",
        disabled: true,
        customLabel: "w-auto pr-2",
        customDiv: "max-w-[51.4rem]",
        customInput: "max-w-[40.2rem]"
    },
    Fourth: {
        Input1: {
            label: "4. ค่าเช่าที่พัก",
            disabled: true,
            customLabel: "w-auto pr-2",
            customDiv: "max-w-[26rem]",
            customInput: "max-w-[19rem]"
        },
        Input2: {
            label: "คืน ๆ ละ",
            disabled: true,
            customLabel: "w-auto px-2",
            customDiv: "max-w-[25.5rem]",
            customInput: "max-w-[20.5rem]"
        }
    },
    Fifth: {
        Input1: {
            label: "5. ค่าเบี้ยเลี้ยงเดินทาง",
            disabled: true,
            customLabel: "w-auto pr-2",
            customDiv: "max-w-[26rem]",
            customInput: "max-w-[16rem]"
        },
        Input2: {
            label: "คืน ๆ ละ",
            disabled: true,
            customLabel: "w-auto px-2",
            customDiv: "max-w-[25.5rem]",
            customInput: "max-w-[20.5rem]"
        }
    },
}

const FileForm = {
    First : {
        label: "สำเนาบทความ (Full Paper)",
    },
    Second : {
        span: "*กรณีเบิกค่าใช้จ่ายเต็มวงเงิน*",
        name: "Input",
        label: "(Full Paper ประกอบการเบิก) มีผลงานตีพิมพ์ในวารสารในฐานข้อมูล WoS/SJR ซึ่งได้รับการตีพิมพ์ไม่เกิน 2 ปี ก่อนการประชุม เมื่อ",
        disabled: true,
        customInput: "max-w-24"

    },
    Third : {
        span: "*กรณีเบิกค่าใช้จ่ายเต็มวงเงิน*",
        label: "หลักฐานเอกสาร Quartile ของ Paper ที่ใช้ประกอบการเบิก"
    },
    Fourth : {
        label: "เอกสารประชาสัมพันธ์การจัดการประชุมทางวิชาการ (Call for paper)",
    },
    Fifth : {
        label: "จดหมายการตอบรับเข้าร่วมประชุม (Accepted)",
    },
    Sixth : {
        label: "เอกสารแสดงค่าลงทะเบียน",
    },
    Seventh : {
        label: "เอกสารแสดงอัตราแลกเปลี่ยน (ณ วันที่ยื่น)",
    },
    Eighth : {
        label: "หลักฐานการประชุมวิชาการอยู่ในฐาน Scopus",
    },
    Ninth : {
        span: "",
        label: "อื่นๆ",
        name: "Input",
        disabled: true,
        customInput: "max-w-max"
    },

}

const HRForm = {
    First : {
        label: "สำเนาบทความ (Full Paper)",
        disabled: true
    },
    Second : {
        name: "Input",
        label: "*กรณีเบิกค่าใช้จ่ายเต็มวงเงิน*(Full Paper ประกอบการเบิก) มีผลงานตีพิมพ์ในวารสารในฐานข้อมูล WoS/SJR ซึ่งได้รับการตีพิมพ์ไม่เกิน 2 ปี ก่อนการประชุม เมื่อ",
        disabled: true,
        customInput: "max-w-24",
        customDiv: "max-w-min flex items-center"

    },
    Third : {
        label: "*กรณีเบิกค่าใช้จ่ายเต็มวงเงิน*หลักฐานเอกสาร Quartile ของ Paper ที่ใช้ประกอบการเบิก",
        disabled: true
    },
    Fourth : {
        label: "เอกสารประชาสัมพันธ์การจัดการประชุมทางวิชาการ (Call for paper)",
        disabled: true
    },
    Fifth : {
        label: "จดหมายการตอบรับเข้าร่วมประชุม (Accepted)",
        disabled: true
    },
    Sixth : {
        label: "เอกสารแสดงค่าลงทะเบียน",
        disabled: true
    },
    Seventh : {
        label: "เอกสารแสดงอัตราแลกเปลี่ยน (ณ วันที่ยื่น)",
        disabled: true
    },
    Eighth : {
        label: "หลักฐานการประชุมวิชาการอยู่ในฐาน Scopus",
        disabled: true
    },
    Ninth : {
        label: "เป็นพนักงานสถาบันที่ปฏิบัติงานมาแล้วไม่เกิน 3 ปีนับตั้งแต่วันบรรจุและยังไม่เคยลาเข้าร่วมประชุมทางวิชาการ ณ ต่างประเทศ",
        disabled: true
    },
    Ten :{
        label: "ผู้ขอรับการสนับสนุนเป็น",
        name: "Radio",
        Choice1: {
            label: "First Author",
            name: "People",
            disabled: true
        },
        Choice2: {
            label: "Corresponding Author",
            name: "People",
            disabled: true
        }
    },
    Eleventh : {
        label: "อื่นๆ",
        name: "Input",
        disabled: true,
        customInput: "max-w-max",
        customDiv: "max-w-min flex items-center"
    },
}

const ResearchForm = {
    MainLabel: "ตรวจหลักฐานคุณภาพของการจัดประชุมทางวิชาการ",
    Sub: {
        First: {
            MainLabel: "• คุณภาพของการประชุม ฯ",
            Choice1: "ระดับมาตรฐาน",
            Choice2: "ระดับดีมาก",
            name: "Sub1",
            disabled: true,
            Input: {
                label: "เหตุผล : ",
                customLabel: "w-16",
                disabled: true,
            }
        },
        Second: {
            label: "• กรณี ที่เป็นการประชุมวิชาการระดับดีมาก เลือกวิธีคิดค่าคะแนนตุณภาพ และมีระดับคะแนนคุณภาพของการประชุมฯ ดังนี้",
            disabled: true,
        }
    }
}

const MoneyForm = {
    MainLabel :{
        label: "ตรวจสอบเงินงบประมาณประจำปีที่จัดสรรในการเผยแพร่ผลงานวิชาการ",
        name: "maintext"
    },
    Input1: {
        label: "ปีงบประมาณ พ.ศ.",
        name: "years",
        customInput: "max-w-max text-center",
        disabled: true
    },
    Input2: {
        label: "วงเงินที่คณะจัดสรรไว้ จำนวนเงินทั้งสิ้น",
        customInput: "max-w-max text-center",
        disabled: true
    },
    Input3: {
        label: "โดยคณะได้อนุมัติค่าใช้จ่ายในการเสนอผลงานวิชาการไปแล้ว จำนวน",
        customInput: "max-w-max text-center",
        disabled: true,
        placeholder: "0",
        text: "รายการ"
    },
    Input4: {
        label: "รวมเป็นเงิน",
        customInput: "max-w-max text-center",
        disabled: true,
        placeholder: "0"
    },
    Input5: {
        label: "วงเงินที่คณะจัดสรรไว้ คงเหลือ",
        customInput: "max-w-max text-center",
        disabled: true,
        placeholder: "0"
    },
    Input6: {
        label: "จำนวนเงินที่ขออนุมัติจัดสรรในครั้งนี้  เป็นจำนวนเงิน",
        customInput: "max-w-max text-center",
        disabled: true
    },
    Input7: {
        label: "วงเงินที่คณะจัดสรรไว้ คงเหลือทั้งสิ้น",
        customInput: "max-w-max text-center",
        disabled: true,
        placeholder: "0"
    },
    text: {
        label: "วงเงินที่สามารถเบิกได้ 0 บาท",
        name: 'text'
    },
}

const AssociateForm = {
    Maintext: {
        label: "รองคณบดีฝ่ายงานวิจัย",
        name: "maintext",
        disabled: true
    },
    Choice1: {
        label: "เห็นชอบ",
        name: "comment",
        disabled: true
    },
    Choice2: {
        label: "ไม่เห็นชอบ",
        name: "comment",
        disabled: true
    },
    comments: {
        label: "ความคิดเห็น",
        name: "textArea",
        disabled: true
    }
}

const DeanForm = {
    Maintext: {
        label: "คณบดี",
        name: "maintext"
    },
    Subtext: {
        label: "เพื่อโปรดทราบการจัดสรรวงเงิน ก่อนการตอบรับบทความจากผู้จัด",
        name: "subtext"
    },
    Choice1: {
        label: "รับทราบ",
        name: "yes",
        disabled: true
    }
}
</script>
