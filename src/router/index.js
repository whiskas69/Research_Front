import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "@/store/userStore";

import LoginPage from "@/views/LoginPage.vue";
import Search from "@/views/Search.vue";

import StatusView from "@/views/StatusView/StatusView.vue";
import StatusViewOffice from "@/views/StatusView/StatusViewOffice.vue";
import StatusConferView from "@/views/status/StatusConferView.vue";
import StatusPCView from "@/views/status/StatusPCView.vue";
import StatusKRISView from "@/views/status/StatusKRISView.vue";

import HistoryView from "@/views/HistoryView/MyHistory.vue";
import HistoryViewOffice from "@/views/HistoryView/HistoryOffice.vue";
import AllHistory from "@/views/HistoryView/AllHistory.vue";
import his_confer from "@/views/history/Confer.vue";
import his_pageCharge from "@/views/history/Page.vue";
import his_kris from "@/views/history/Kris.vue";

import ConferPDF from "@/views/ToPDF/ConferPDF.vue";
import PageCPDF from "@/views/ToPDF/PageCPDF.vue";

import eOffice from "@/views/StatusView/EofficeView.vue";

import HomePage_Profes from "@/views/Homepage/HomePage_Profes.vue";
import HomePage_Offi from "@/views/Homepage/HomePage_Offi.vue";
import Homepage_Admin from "@/views/Homepage/Homepage_Admin.vue";

import Pro_Confer from "@/views/form/Profess/Pro_Confer.vue";
import Pro_Page from "@/views/form/Profess/Pro_Page.vue";
import Pro_Kris from "@/views/form/Profess/Pro_Kris.vue";

import offic_hrConfer from "@/views/form/Officer/Conference/HRConfer.vue";
import offic_resConfer from "@/views/form/Officer/Conference/ResearchConfer.vue";
import offic_fincConfer from "@/views/form/Officer/Conference/FinanceConfer.vue";
import offic_associateConfer from "@/views/form/Officer/Conference/AssociateConfer.vue";
import offic_deanConfer from "@/views/form/Officer/Conference/DeanConfer.vue";

import offic_resPage from "@/views/form/Officer/PageCharge/ResearchPage.vue";
import offic_financePage from "@/views/form/Officer/PageCharge/FinancePag.vue";
import offic_associatePage from "@/views/form/Officer/PageCharge/AssociatePage.vue";
import offic_deanPage from "@/views/form/Officer/PageCharge/DeanPage.vue";

import offic_Kris from "@/views/form/Officer/Kris.vue";
import Profile from "@/views/Profile.vue";
import summary from "@/views/Summary.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/eoffice",
      name: "eOffice",
      component: eOffice,
      meta: { requiresAuth: true, role: ["hr", "research"] },
    },
    {
      path: "/",
      name: "Search",
      component: Search,
    },
    {
      path: "/homepage",
      name: "HomePageProfes",
      component: HomePage_Profes,
      meta: { requiresAuth: true },
    },
    {
      path: "/officer",
      name: "HomePageOfficer",
      component: HomePage_Offi,
      meta: { requiresAuth: true, role: ["hr", "research", "finance", "associate", "dean"] },
    },
    {
      path: "/admin",
      name: "HomepageAdmin",
      component: Homepage_Admin,
      meta: { requiresAuth: true, role: ["admin"] },
    },
    {
      path: "/login",
      name: "Login",
      component: LoginPage,
    },
    {
      path: "/mystatus",
      name: "Status",
      component: StatusView,
      meta: { requiresAuth: true },
    },
    {
      path: "/statusOffice",
      name: "StatusofOffice",
      component: StatusViewOffice,
      meta: { requiresAuth: true, role: ["hr", "research"] },
    },
    {
      path: "/myhistory",
      name: "History",
      component: HistoryView,
      meta: { requiresAuth: true },
    },
    {
      path: "/historyOffice",
      name: "HistoryofOffice",
      component: HistoryViewOffice,
      meta: { requiresAuth: true, role: ["hr", "research"] },
    },
    {
      path: "/allhistory",
      name: "allhistory",
      component: AllHistory,
      meta: { requiresAuth: true, role: ["hr", "research", "finance", "associate", "dean"] },
    },
    {
      path: "/formConfer",
      name: "Form_Confer",
      component: Pro_Confer,
      meta: { requiresAuth: true },
    },
    {
      path: "/formPC",
      name: "FormPC",
      component: Pro_Page,
      meta: { requiresAuth: true },
    },
    {
      path: "/formKris",
      name: "FormKris",
      component: Pro_Kris,
      meta: { requiresAuth: true },
    },
    {
      path: "/officFormConfer/hr/:id",
      name: "officFormConferHr",
      component: offic_hrConfer,
      meta: { requiresAuth: true, role: ["hr"] },
    },
    {
      path: "/officFormConfer/research/:id",
      name: "officFormConferRes",
      component: offic_resConfer,
      meta: { requiresAuth: true, role: ["research"] },
    },
    {
      path: "/officFormConfer/finance/:id",
      name: "officFormConferFinc",
      component: offic_fincConfer,
      meta: { requiresAuth: true, role: ["finance"] },
    },
    {
      path: "/officFormConfer/associate/:id",
      name: "officFormConferAssoc",
      component: offic_associateConfer,
      meta: { requiresAuth: true, role: ["associate"] },
    },
    {
      path: "/officFormConfer/dean/:id",
      name: "officFormConferDean",
      component: offic_deanConfer,
      meta: { requiresAuth: true, role: ["dean"] },
    },
    {
      path: "/officFormPC/research/:id",
      name: "OfficFormPCRes",
      component: offic_resPage,
      meta: { requiresAuth: true, role: ["research"] },
    },
    {
      path: "/officFormPC/finance/:id",
      name: "OfficFormPCFin",
      component: offic_financePage,
      meta: { requiresAuth: true, role: ["finance"] },
    },
    {
      path: "/officFormPC/associate/:id",
      name: "OfficFormPCAssoc",
      component: offic_associatePage,
      meta: { requiresAuth: true, role: ["associate"] },
    },
    {
      path: "/officFormPC/dean/:id",
      name: "OfficFormPCDean",
      component: offic_deanPage,
      meta: { requiresAuth: true, role: ["dean"] },
    },
    {
      path: "/officFormKris/research/:id",
      name: "OfficFormKris",
      component: offic_Kris,
      meta: { requiresAuth: true, role: ["research"] },
    },
    {
      path: "/status/Conference/:id",
      name: "StatusConfer",
      component: StatusConferView,
      meta: { requiresAuth: true },
    },
    {
      path: "/status/PageCharge/:id",
      name: "StatusPC",
      component: StatusPCView,
      meta: { requiresAuth: true },
    },
    {
      path: "/status/Kris/:id",
      name: "StatusKris",
      component: StatusKRISView,
      meta: { requiresAuth: true },
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
      meta: { requiresAuth: true },
    },
    {
      path: "/history/confer/:id",
      name: "HistoryConfer",
      component: his_confer,
      meta: { requiresAuth: true },
    },
    {
      path: "/history/pageCharge/:id",
      name: "HistoryPageCharge",
      component: his_pageCharge,
      meta: { requiresAuth: true },
    },
    {
      path: "/history/kris/:id",
      name: "HistoryKris",
      component: his_kris,
      meta: { requiresAuth: true },
    },
    {
      path: "/pdf/confer/:id",
      name: "ConferPDF",
      component: ConferPDF,
      meta: { hideNavbar: true, requiresAuth: true },
    },
    {
      path: "/pdf/pageCharge/:id",
      name: "PageCPDF",
      component: PageCPDF,
      meta: { hideNavbar: true, requiresAuth: true },
    },
    {
      path: "/summary",
      name: "summary",
      component: summary,
      meta: { requiresAuth: true, role: ["hr", "research", "finance", "associate", "dean", "admin"] },
    },
  ],
});

//check login
router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore();
  console.log("User isAuthenticated:", userStore.isAuthenticated);

   // ถ้าต้องการล็อกอิน และ user ยังไม่ได้ล็อกอิน
   if (to.meta.requiresAuth && !userStore.isAuthenticated) {
    return next("/login");
  }

  // ถ้ามี role ที่กำหนด และ user ไม่มี role หรือ role ไม่อยู่ในรายการที่อนุญาต
  if (to.meta.role && !to.meta.role.includes(userStore.userRole)) {
    return next("/");
  }

  next(); // อนุญาตให้เข้าหน้า
});
export default router;
