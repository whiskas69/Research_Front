<template>
    <div>
        <Navbar />

        <div class="container my-10 mx-auto">
            <p class="text-xl font-bold mb-5">ขออนุมัติค่า Page Charge เพื่อตีพิมพ์ผลงานในวารสารวิชาการระดับนานาชาติ</p>

            <ProfDetail :Professor="Professor" />
            <DetailPage :PageDetail="PageDetail" />
            <DetailReach :ReachDetail="ReachDetail"/>
            <Author :AuthForm="AuthForm"/>
            <MoneyPageChange :MoneyPG="MoneyPG"/>
            <File :FileForm="FileForm"/>

            <p class="text-xl font-bold my-5">ตรวจสอบข้อมูลและหลักฐาน</p>

            <ResearchPG :Research="Research"/>
            <MoneyConfer :MoneyForm="MoneyForm"/>
            <AssociarConfer :AssociateForm="AssociateForm"/>

            <NotedPG1 :PG1="PG1"/>

            <NotedPG2 :PG2="PG2"/>

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
import DetailPage from '@/components/form/PageCharge/DetailPage.vue';
import DetailReach from '@/components/form/PageCharge/DetailReach.vue';
import Author from '@/components/form/Conference/Author.vue';
import MoneyPageChange from '@/components/form/PageCharge/MoneyPageChange.vue';
import File from '@/components/form/Officer/File.vue';
import ResearchPG from '@/components/form/Officer/ResearchPG.vue';
import MoneyConfer from '@/components/form/Officer/MoneyConfer.vue';
import AssociarConfer from '@/components/form/Officer/AssociarConfer.vue';
import NotedPG1 from '@/components/form/Officer/NotedPG1.vue';
import NotedPG2 from '@/components/form/Officer/NotedPG2.vue';

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

const PageDetail = {
    Input1: {
        label: "ชื่อวารสาร",
        disabled: true,
        name: "Input",
        customLabel: "w-24"
    },
    Database: {
        Maintext: {
            label: "เป็นวารสารที่อยู่ในฐานข้อมูลสากล",
        },
        ISI: {
            Check:{
                label: "ISI ได้รับการจัดลำดับ Quartile ",
                disabled: true,
                customDiv: 'max-w-72 flex items-center'
            },
            Input1: {
                label: "ปี",
                disabled: true,
                customLabel: 'mr-2',
                customInput: 'max-w-max',
                customDiv: 'max-w-max'
            },
            Input2: {
                label: "Impact Factor",
                disabled: true,
                customLabel: 'w-28 mx-2',
                customInput: 'max-w-max',
                customDiv: 'max-w-max'
            }
        },
        SJR: {
            Check:{
                label: "SJR ได้รับการจัดลำดับ Quartile ",
                disabled: true,
                customDiv: 'max-w-72 flex items-center'
            },
            Input1: {
                label: "ปี",
                disabled: true,
                customLabel: 'mr-2',
                customInput: 'max-w-max',
                customDiv: 'max-w-max'
            },
            Input2: {
                label: "SJR Score",
                disabled: true,
                customLabel: 'w-28 mx-2',
                customInput: 'max-w-max',
                customDiv: 'max-w-max'
            }
        },
        Scopus: {
            Check:{
                label: "Scopus ได้รับการจัดลำดับ Quartile ",
                disabled: true,
                customDiv: 'max-w-72 flex items-center'
            },
            Input1: {
                label: "ปี",
                disabled: true,
                customLabel: 'mr-2',
                customInput: 'max-w-max',
                customDiv: 'max-w-max'
            },
            Input2: {
                label: "Cite Score",
                disabled: true,
                customLabel: 'w-28 mx-2',
                customInput: 'max-w-max',
                customDiv: 'max-w-max'
            }
        },
        Nature: {
            label: "Nature",
            disabled: true
        }
    },
    Option: {
        textOption: {
            label: "วงเงินตามเกณฑ์การให้การสนับสนุนไม่เกิน",
            name: "select",
            disabled: true
        },
        Op1: {
            label: "เลือกวงเงินสนับสนุน",
            mainselect: true,
            selected: true
        },
        Op2: {
            label: "20,000 บาท",
        },
        Op3: {
            label: "30,000 บาท",
        },
        Op4: {
            label: "40,000 บาท",
        },
        Op5: {
            label: "60,000 บาท",
        },
        Op6: {
            label: "70,000 บาท",
        },

    }
}

const ReachDetail = {
    NameReach : {
        label : "ชื่อบทความ",
        disabled : true,
        customLabel : "w-auto min-w-fit"
    },
    Schedule : {
        Vol : {
            label : "ปีที่ (Vol.)",
            disabled: true,
            customLabel: "w-auto min-w-fit",
            customDiv: "max-w-fit"
        },
        Issue : {
            label : "ฉบับที่ (Issue)",
            disabled : true,
            customLabel : "w-auto min-w-fit",
            customDiv: "max-w-fit"
        },
        Months : {
            label : "เดือน",
            disabled : true,
            customLabel : "w-auto min-w-fit",
            customDiv: "max-w-fit"
        },
        Year : {
            label : "ปี ค.ศ./พ.ศ.",
            disabled : true,
            customLabel : "w-auto min-w-fit",
            customDiv: "max-w-fit"
        },
        ISSN : {
            label : "เลขที่ ISSN/ISBN (อื่นๆ)",
            disabled : true,
            customLabel : "w-auto min-w-fit",
            customDiv: "max-w-fit"
        }
    },
    Publisher :{
        SubmitReach : {
            label : "วันที่ส่งบทความไปยังสำนักพิมพ์เจ้าของวารสาร",
            type : "date",
            disabled : true,
            customLabel : "w-auto min-w-fit",
            customDiv : "max-w-fit"
        },
        Announce : {
            label : "วันประกาศผลการพิจารณา",
            type : "date",
            disabled : true,
            customLabel : "w-auto min-w-fit",
            customDiv : "max-w-fit"
        },
        LatePay : {
            label : "วันสุดท้ายของการจ่ายค่าตีพิมพ์",
            type : "date",
            disabled : true,
            customLabel : "w-auto min-w-fit",
            customDiv : "max-w-fit"
        }

    },
    Other : {
        ReachOther : {
            label : "บทความวิจัยนี้เป็นผลงานจากโครงการวิจัยเรื่อง",
            disabled : true,
            customLabel : "w-auto min-w-fit",
        },
        TypeReach : {
            Basic : {
                label : "วิจัยพื้นฐาน",
                disabled : true,
                name : "type",
                customDiv : "max-w-fit mr-10 flex items-center"
            },
            Applied : {
                label : "วิจัยประยุกต์",
                disabled : true,
                name : "type",
                customDiv : "max-w-fit mr-10 flex items-center"
            },
            Develop : {
                label : "วิจัยและพัฒนา",
                disabled : true,
                name : "type",
                customDiv : "max-w-fit mr-10 flex items-center"
            },
            Other : {
                label : "วิจัยอื่น ๆ ",
                disabled : true,
                name : "type",
                customDiv : "max-w-fit mr-2 flex items-center"
            },
            OtherInput : {
                label : "(ระบุ)",
                disabled : true,
                name : "type",
                customDiv : "max-w-fit flex items-center"
            }
        },
        Source : {
            label : "ชื่อแหล่งทุนวิจัย",
            disabled : true,
            customLabel : "w-auto min-w-fit",
        },
        Credit : {
            label : "วงเงินงบประมาณการวิจัย",
            disabled : true,
            customLabel : "w-auto min-w-fit",
            customDiv : "max-w-max mr-10"
        },
        InYears : {
            label : "ประจำปี",
            disabled : true,
            customLabel : "w-auto min-w-fit",
            customDiv : "max-w-max"
        }
    }
}

const AuthForm = {
    First: {
        label: "ผู้ประพันธ์อันดับแรก First Author",
        name: "Author",
        disabled: true
    },
    Second: {
        label: "ผู้ประพันธ์บรรณกิจ Corresponding Author",
        name: "Author",
        disabled: true
    }
}

const MoneyPG = {
    label : "จำนวนเงิน",
    disabled : true,
    customLabel : "w-auto min-w-fit",
    customInput : "max-w-fit"
}

const FileForm = {
    First : {
        label: "หลักฐานแสดงการอยู่ในฐานข้อมูลสากล ISI หรือ SJR หรือ Scopus หรือ Nature",
        name: "First"
    },
    Second : {
        label: "หลักฐานแสดงการจัดลำดับ Quartile ของฐานข้อมูลสากล ISI หรือ SJR หรือ Scopus",
        name: "Second"
    },
    Third : {
        label: "ใบแจ้งหนี้ค่าใช้จ่ายสำหรับการตีพิมพ์ / อัตราค่าใช้จ่ายที่ประกาศบนหน้าเว็บไซต์",
        name: "Third"
    },
    Fourth : {
        label: "หลักฐานการส่งบทความ หนังสือตอบรับบทความ",
        name: "Fourth"
    },
    Fifth : {
        label: "สำเนาบทความ และ Upload บทความเข้าระบบ IT Scholar",
        name: "Fifth"
    }
}

const Research  = {
    Correct : {
        label : "ถูกต้องตามเงื่อนไขการสนับสนุน ดังนี้",
        disabled : false
    },
    Again : {
        label : "ถูกต้องตามเงื่อนไขการสนับสนุน กรณีส่งหนังตอบรับย้อนหลัง ดังนี้",
        disabled : false
    },
    Other : {
        label : "อื่น ๆ",
        disabled : false
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
        customInput: "max-w-max text-center"
    },
    Input2: {
        label: "วงเงินที่คณะจัดสรรไว้ จำนวนเงินทั้งสิ้น",
        customInput: "max-w-max text-center",
        disabled: false
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
        label: "จำนวนเงินที่ขออนุมัติจค่า Page Charge ในครั้งนี้  เป็นจำนวนเงิน",
        customInput: "max-w-max text-center",
        disabled: false
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
        disabled: false
    },
    Choice1: {
        label: "เห็นชอบ",
        name: "comment",
        disabled: false
    },
    Choice2: {
        label: "ไม่เห็นชอบ",
        name: "comment",
        disabled: false
    },
    comments: {
        label: "ความคิดเห็น",
        name: "textArea",
        disabled: false
    }
}

const PG1 = {
    label : "รับทราบ",
    disabled : false
}

const PG2 = {
    Choice1: {
        label: "อนุมัติ",
        name: "comment",
        disabled: false
    },
    Choice2: {
        label: "ไม่อนุมัติ",
        name: "comment",
        disabled: false
    },
    Choice3: {
        label: "อื่น ๆ",
        name: "comment",
        disabled: false
    },
    comments: {
        label: "เนื่องจาก",
        name: "textArea",
        disabled: false
    }
}

</script>
