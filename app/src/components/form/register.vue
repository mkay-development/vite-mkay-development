<template>
  <form class="">
    <h2 class="font-bold text-lg mb-6">Register</h2>
    <div class="mb-6">
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900"
        >Your email</label
      >
      <input
        type="email"
        v-model="email"
        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
        placeholder="name@flowbite.com"
      />
    </div>
    <div class="mb-6">
      <label class="block mb-2 text-sm font-medium text-gray-900"
        >Your Password</label
      >
      <input
        type="password"
        v-model="password"
        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
        placeholder="password"
      />
    </div>
    <div class="mb-6">
      <label class="block mb-2 text-sm font-medium text-gray-900"
        >Your Password</label
      >
      <input
        type="password"
        v-model="passwordConfirm"
        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
        placeholder="password"
      />
    </div>
    <div class="form-input text-right">
      <button
        @click.prevent="register()"
        class="px-2 py-2 bg-gray-50 border border-gray-300 rounded-lg"
      >
        Register
      </button>
    </div>
  </form>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useMessageStore } from "@/store/messages";

let email = ref("");
let password = ref("");
let passwordConfirm = ref("");
let store = useMessageStore();

let register = function () {
  fetch("https://admin.mkay-development.de/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
      passwordConfirm: passwordConfirm.value,
    }),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data.code == 400) {
        store.add({
          message: "Es gibt bereits einen Benutzer mit dieser Email Adresse",
          status: "warning",
        });
      }
    });
};
</script>
