import { defineStore } from 'pinia';

import PocketBase from 'pocketbase';
export const useBackendStore = defineStore('backend', {
  state () {
    return {
      client: false
    };
  },
  actions: {
    init: function () {
      if (this.client) {
        return this.client;
      } else {
        this.client = new PocketBase('https://admin.mkay-development.de');
        return this.client;
      }
    }
  }
});
