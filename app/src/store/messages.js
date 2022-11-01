import { defineStore } from "pinia";

export const useMessageStore = defineStore("messages", {
  state() {
    return {
      messages: [],
    };
  },
  actions: {
    add: function (message) {
      this.messages.push(message);
      
      let that = this;
      setInterval(function () {
        that.remove(that.messages.length - 1);
      }, 5000);
    },
    remove: function (index) {
      this.messages.splice(index, 1);
    },
  },
});
