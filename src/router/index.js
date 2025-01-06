import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'
import Search from '@/views/Search.vue'

import StatusView from '@/views/StatusView.vue'
import StatusConferView from '@/views/StatusConferView.vue'
import StatusPCView from '@/views/StatusPCView.vue'
import StatusKRISView from '@/views/StatusKRISView.vue'

import HistoryView from '@/views/HistoryView.vue'
import Confer from '@/views/history/Confer.vue'
import Page from '@/views/history/Page.vue'
import Scolar from '@/views/history/Scolar.vue'

import HomePage_Profes from '@/views/Homepage/HomePage_Profes.vue'
import HomePage_Offi from '@/views/Homepage/HomePage_Offi.vue'
import Homepage_Admin from '@/views/Homepage/Homepage_Admin.vue'

import Pro_Confer from '@/views/form/Profess/Pro_Confer.vue'
import Pro_Page from '@/views/form/Profess/Pro_Page.vue'
import Pro_Scolar from '@/views/form/Profess/Pro_Scolar.vue'

import Profile from '@/views/Profile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePageProfes',
      component: HomePage_Profes,
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage,
    },
    {
      path: '/allstatus',
      name: 'Status',
      component : StatusView,
    },
    {
      path: '/statusConfer',
      name: 'StatusConfer',
      component: StatusConferView
    },
    {
      path: '/statusPC',
      name: 'StatusPC',
      component: StatusPCView
    },
    {
      path: '/statusKris',
      name: 'StatusKris',
      component: StatusKRISView
    },
    {
      path: '/allhistory',
      name: 'History',
      component: HistoryView
    },
    {
      path: '/historyConfer',
      name: 'HistoryConfer',
      component: Confer
    },
    {
      path: '/historyPC',
      name: 'HistoryPC',
      component: Page
    },
    {
      path: '/historyKris',
      name: 'HistoryKris',
      component: Scolar
    },
    {
      path: '/formConfer',
      name: 'Form_Confer',
      component: Pro_Confer
    },
    {
      path: '/formPC',
      name: 'FormPC',
      component: Pro_Page
    },
    {
      path: '/formKris',
      name: 'FormKris',
      component: Pro_Scolar
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ],
})

export default router
