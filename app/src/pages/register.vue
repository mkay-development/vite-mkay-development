<template>
  <div class="grid grid-cols-6 gap-x-5">
    <div class="col-span-6 md:col-span-3">
      <FormRegister />
    </div>
  </div>
</template>

<script setup>
import FormRegister from '@/components/form/register.vue'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(function () {
  const userid = localStorage.getItem('userid')
  if (userid) {
    router.push('/')
  }
})
</script>
