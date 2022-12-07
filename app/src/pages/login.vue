<template>
  <div class="grid grid-cols-6 gap-x-5">
    <div class="col-span-6 md:col-span-3">
      <FormLogin />
    </div>
    <div class="col-span-6 md:col-span-3">
      <h2 class="font-bold text-lg">Register</h2>
      <p>Noch keinen Account angelegt ?</p>
      <button
        @click.prevent="router.push('/register')"
        class="px-2 py-2 bg-gray-50 border border-gray-300 rounded-lg"
      >
        Register
      </button>
    </div>
  </div>
</template>

<script setup>
import FormLogin from '@/components/form/login.vue';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(function () {
  const userid = localStorage.getItem('userid');
  if (userid) {
    router.push('/');
  }
});
</script>
