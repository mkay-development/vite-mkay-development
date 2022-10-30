<template>
  <div class="grid grid-cols-6">
    <div class="col-span-6 md:col-span-3">
      <FormLogin />
    </div>
    <div class="col-span-6 md:col-span-3">
      <FormRegister />
    </div>
  </div>
</template>

<script setup>
import FormLogin from "@/components/form/login.vue";
import FormRegister from "@/components/form/register.vue";
</script>
