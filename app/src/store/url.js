import { defineStore } from "pinia";

export const useUrlStore = defineStore("url", {
  state() {
    return {
      baseurl: "http://www.mkay-development.de",
    };
  },
  actions: {},
});
