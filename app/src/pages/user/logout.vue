<template>
  <div>Test</div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";

let router = useRouter();

onMounted(function () {
  let userid = localStorage.getItem("userid");
  if (userid) {
    setTimeout(function () {
        localStorage.removeItem('userid');
        localStorage.removeItem('token');
      router.push("/");
    }, 2500);
  }
  else {
    router.push("/");
  }
});
</script>
