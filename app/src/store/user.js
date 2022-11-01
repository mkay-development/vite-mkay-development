import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state() {
    return {
      id: "",
      token: "",
      isLoggedIn: false,
    };
  },
  actions: {
    init: function () {
      let userid = localStorage.getItem("userid");
      let token = localStorage.getItem("token");
      if (userid && token) {
        this.login(userid, token);
      }
    },
    login: function (id, token) {
      this.id = id;
      this.token = token;
      this.isLoggedIn = true;
      this.save();
    },
    save: function () {
      localStorage.setItem("userid", this.id);
      localStorage.setItem("token", this.token);
    },
  },
});
