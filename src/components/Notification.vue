<template>
  <div class="dropdown dropdown-bottom dropdown-end" @click="updateNotifications">
    <div tabindex="0" role="button" class="btn relative">
      <span
        v-if="unreadCount > 0"
        class="absolute top-0 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-s font-bold text-white"
      >
        {{ unreadCount }}
      </span>
      <i class="color-black text-xl fa fa-bell"></i>
    </div>

    <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-max p-2 shadow-sm">
      <li v-for="item in notifications" :key="item.noti_id">
        <div
          class="flex flex-col items-start border border-gray-200 my-1"
          v-if="item.form_type === 'Research_KRIS'"
        >
          <p>แบบเสนอโครงการวิจัย</p>
          <p>ชื่องานวิจัย : {{ item.name_form }}</p>
          <p>สถานะ : {{ item.form_status }}</p>
        </div>
        <div
          class="flex flex-col items-start border border-gray-200 my-1"
          v-else-if="item.form_type === 'Conference'"
        >
          <p>ประชุมทางวิชาการ</p>
          <p>ชื่อบทความ : {{ item.name_form }}</p>
          <p>สถานะ : {{ item.form_status }}</p>
        </div>
        <div
          class="flex flex-col items-start border border-gray-200 my-1"
          v-else-if="item.form_type === 'Page_Charge'"
        >
          <p>ค่า Page Charge</p>
          <p>ชื่อบทความ : {{ item.name_form }}</p>
          <p>สถานะ : {{ item.form_status }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, reactive, computed } from 'vue';
import api from '@/setting/api';
import { useUserStore } from '@/store/userStore';

const props = defineProps({
  type: {
    type: String,
    required: true, // 'pro' หรือ 'officer'
  },
});

const userStore = useUserStore();

const state = reactive({
  notifications: [],
  roleLabel: '',
});

const unreadCount = computed(() =>
  state.notifications.filter((n) => n.is_read === 0).length
);

const fetchNotifications = async () => {
  if (props.type === 'pro') {
    try {
      const { data } = await api.get(`/notification/${userStore.user.user_id}`);
      state.notifications = Array.isArray(data)
        ? data.filter((item) => !(
            (item.form_status === 'เจ้าหน้าที่งานวิจัย' && ['Research_KRIS', 'Page_Charge'].includes(item.form_type)) ||
            (item.form_status === 'เจ้าหน้าที่บริหารทรัพยากรบุคคล' && item.form_type === 'Conference')
          ))
        : [];
    } catch (err) {
      console.error('Error fetching Pro notifications:', err);
    }
  } else if (props.type === 'officer') {
    try {
      const roleMap = {
        hr: 'เจ้าหน้าที่บริหารทรัพยากรบุคคล',
        research: 'เจ้าหน้าที่งานวิจัย',
        finance: 'เจ้าหน้าที่การเงิน',
        associate: 'รองคณบดี',
        dean: 'คณบดี'
      };
      state.roleLabel = roleMap[userStore.user.user_role] || '';
      const { data } = await api.get(`/status_notification/${state.roleLabel}`);
      state.notifications = data;
    } catch (err) {
      console.error('Error fetching Officer notifications:', err);
    }
  }
};

const updateNotifications = async () => {
  try {
    const notiIds = state.notifications.map((n) => n.noti_id);
    await api.put('/notifications/update_read', { notiIds });
    state.notifications.forEach((n) => (n.is_read = 1));
  } catch (err) {
    console.error('Error updating notifications:', err);
  }
};

onMounted(() => {
  fetchNotifications();
});
</script>
