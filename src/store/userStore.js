import { defineStore } from "pinia";
import api from "@/setting/api";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null, //เก็บข้อมูล user
    loggedIn: localStorage.getItem("loggedIn") === "true",
  }),

  actions: {
    async fetchUser() {
      //check user login
      if (!this.loggedIn) {
        console.log("User not logged in.");

        alert("กรุณาทำการเข้าสู่ระบบ");

        if (window.location.pathname !== "/login") {
          window.location.href = "/login";
        }

        return;
      }

      try {
        const response = await api.get("/me", {
          withCredentials: true,
        });

        this.user = response.data.user;
      } catch (error) {
        console.log("Userstore", error.response.data.message)
        alert(error.response.data.message);

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
      } catch (error) {
        alert(error.response.data.message);
        console.error("logout error:", error);
      }
    },
  },
});
