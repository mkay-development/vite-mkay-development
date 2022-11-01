import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state() {
    return {
      id: "",
      token: "",
    };
  },
  actions: {
    login: function (id, token) {
      this.id = id;
      this.token = token;
      this.save();
    },
    save: function () {
      localStorage.setItem("userid", this.id);
      localStorage.setItem("token", this.token);
    },
  },
});
