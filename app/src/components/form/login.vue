<template>
  <form>
    <div class="form-input">
      <label for="">Email</label>
      <input type="email" v-model="email" placeholder="test@jmartz.de" />
    </div>
    <div class="form-input">
      <label for="">Password</label>
      <input type="password" v-model="password" placeholder="test123" />
    </div>
    <div class="form-input">
      <button @click.prevent="login()">Login</button>
    </div>
  </form>
</template>

<script setup>
import { onMounted, ref } from "vue";
let email = ref("");
let password = ref("");

let login = function () {
  fetch("https://admin.mkay-development.de/api/users/auth-via-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email.value, password: password.value }),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
};
</script>
