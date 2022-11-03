<template>
  <div>Test</div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useUserStore} from '@/store/user';

let router = useRouter();

onMounted(function () {
  let userid = localStorage.getItem("userid");
  if (userid) {
    setTimeout(function () {
        localStorage.removeItem('userid');
        localStorage.removeItem('token');
      router.push("/");
    }, 2500);
    useUserStore.logout();
  }
  else {
    router.push("/");
  }
});
</script>
