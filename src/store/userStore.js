import { defineStore } from "pinia";
import api from "@/setting/api";

//ดึง token จาก cookies
// function getToken() {
//   const match = document.cookie.match(new RegExp('(^| )token=([^;]+)'));
//   if (match) return match[2];
//   return null;
// }

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null, //เก็บข้อมูล user
    // token: getToken(),
  }),

  actions: {
    async fetchUser() {

      // if (!this.token) return

      try {
        const response = await api.get("/me", {
          withCredentials: true,
        });

        console.log("response.data :", response.data.user)
        this.user = response.data.user;
        console.log("this user", this.user);

        localStorage.setItem("loggedIn", "true"); //remember status login\

      } catch (error) {

        console.error("Error fetching user: ", error);
        this.user = null;
        localStorage.removeItem("loggedIn");
      }
    },

    async logout() {
      try {
        await api.post("/logout");
        this.user = null;
        localStorage.removeItem("loggedIn");
        console.log("login success");
      } catch (error) {
        console.error("logout error:", error);
      }
    },
  },
});
