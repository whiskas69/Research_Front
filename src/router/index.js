import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/views/LoginPage.vue";
import Search from "@/views/Search.vue";

import StatusView from "@/views/StatusView.vue";
import StatusConferView from "@/views/StatusConferView.vue";
import StatusPCView from "@/views/StatusPCView.vue";
import StatusKRISView from "@/views/StatusKRISView.vue";

import HistoryView from "@/views/HistoryView.vue";
import Confer from "@/views/history/Confer.vue";
import Page from "@/views/history/Page.vue";
import Scolar from "@/views/history/Scolar.vue";

import HomePage_Profes from "@/views/Homepage/HomePage_Profes.vue";
import HomePage_Offi from "@/views/Homepage/HomePage_Offi.vue";
import Homepage_Admin from "@/views/Homepage/Homepage_Admin.vue";

import Pro_Confer from "@/views/form/Profess/Pro_Confer.vue";
import Pro_Page from "@/views/form/Profess/Pro_Page.vue";
import Pro_Scolar from "@/views/form/Profess/Pro_Scolar.vue";

import offic_hrConfer from "@/views/form/Officer/Conference/HRConfer.vue";
import offic_resConfer from "@/views/form/Officer/Conference/ResearchConfer.vue";
import offic_fincConfer from "@/views/form/Officer/Conference/FinanceConfer.vue";
import offic_associateConfer from "@/views/form/Officer/Conference/AssociateConfer.vue";
import offic_deanConfer from "@/views/form/Officer/Conference/DeanConfer.vue";

import offic_resPage from "@/views/form/Officer/PageCharge/ResearchPage.vue";
import offic_financePage from "@/views/form/Officer/PageCharge/FinancePag.vue";
import offic_associatePage from "@/views/form/Officer/PageCharge/AssociatePage.vue";
import offic_deanPage from "@/views/form/Officer/PageCharge/DeanPage.vue";

import offic_Scolar from "@/views/form/Officer/Scolar.vue";

import Profile from "@/views/Profile.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Search",
      component: Search,
    },
    {
      path: "/homepage",
      name: "HomePageProfes",
      component: HomePage_Profes,
    },
    {
      path: "/officer",
      name: "HomePageOfficer",
      component: HomePage_Offi,
    },
    {
      path: "/admin",
      name: "HomepageAdmin",
      component: Homepage_Admin,
    },
    {
      path: "/login",
      name: "Login",
      component: LoginPage,
    },
    {
      path: "/allstatus",
      name: "Status",
      component: StatusView,
      meta: { requiresAuth: true },
    },
    {
      path: "/allhistory",
      name: "History",
      component: HistoryView,
    },
    {
      path: "/historyConfer",
      name: "HistoryConfer",
      component: Confer,
    },
    {
      path: "/historyPC",
      name: "HistoryPC",
      component: Page,
    },
    {
      path: "/historyKris",
      name: "HistoryKris",
      component: Scolar,
    },
    {
      path: "/formConfer",
      name: "Form_Confer",
      component: Pro_Confer,
    },
    {
      path: "/formPC",
      name: "FormPC",
      component: Pro_Page,
    },
    {
      path: "/formKris",
      name: "FormKris",
      component: Pro_Scolar,
    },
    {
      path: "/officFormConfer/hr/:id",
      name: "officFormConferHr",
      component: offic_hrConfer,
    },
    {
      path: "/officFormConfer/research/:id",
      name: "officFormConferRes",
      component: offic_resConfer,
    },
    {
      path: "/officFormConfer/finance/:id",
      name: "officFormConferFinc",
      component: offic_fincConfer,
    },
    {
      path: "/officFormConfer/associate/:id",
      name: "officFormConferAssoc",
      component: offic_associateConfer,
    },
    {
      path: "/officFormConfer/deane/:id",
      name: "officFormConferDean",
      component: offic_deanConfer,
    },
    {
      path: "/officFormPC/research/:id",
      name: "OfficFormPCRes",
      component: offic_resPage,
    },
    {
      path: "/officFormPC/finance/:id",
      name: "OfficFormPCFin",
      component: offic_financePage,
    },
    {
      path: "/officFormPC/associate/:id",
      name: "OfficFormPCAssoc",
      component: offic_associatePage,
    },
    {
      path: "/officFormPC/dean/:id",
      name: "OfficFormPCDean",
      component: offic_deanPage,
    },
    {
      path: "/officFormKris/research/:id",
      name: "OfficFormKris",
      component: offic_Scolar,
    },
    {
      path: "/status/Conference/:id",
      name: "StatusConfer",
      component: StatusConferView,
    },
    {
      path: "/status/PageCharge/:id",
      name: "StatusPC",
      component: StatusPCView,
    },
    {
      path: "/status/Kris/:id",
      name: "StatusKris",
      component: StatusKRISView,
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
    },
  ],
});

//check login
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("loggedIn");
  if (to.meta.requiresAuth && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router;
