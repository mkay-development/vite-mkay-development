<template>
  <div>Services</div>
  <div class="grid grid-cols-6 gap-3">
    <div class="col-span-6 md:col-span-2">
      <section class="card">
        <img src="https://picsum.photos/320/180" alt="" />
        <h2 class="px-2 mt-2 font-bold">Test</h2>
        <p class="px-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis id
          molestiae odio veniam, accusantium architecto temporibus doloremque
          consequatur commodi quo nisi ipsam, incidunt facilis sed maiores.
          Fugiat necessitatibus accusantium sit!
        </p>
      </section>
    </div>
    <div class="col-span-6 md:col-span-2">
      <section class="card">
        <img src="https://picsum.photos/320/180" alt="" />
        <h2 class="px-2 mt-2 font-bold">Test</h2>
        <p class="px-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis id
          molestiae odio veniam, accusantium architecto temporibus doloremque
          consequatur commodi quo nisi ipsam, incidunt facilis sed maiores.
          Fugiat necessitatibus accusantium sit!
        </p>
      </section>
    </div>
    <div class="col-span-6 md:col-span-2">
      <section class="card">
        <img src="https://picsum.photos/320/180" alt="" />
        <h2 class="px-2 mt-2 font-bold">Test</h2>
        <p class="px-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis id
          molestiae odio veniam, accusantium architecto temporibus doloremque
          consequatur commodi quo nisi ipsam, incidunt facilis sed maiores.
          Fugiat necessitatibus accusantium sit!
        </p>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useBreadcrumbStore } from '@/store/breadcrumb'
const breadcrumbStore = useBreadcrumbStore()
const kunden = ref([{
  pic: ''
}])

breadcrumbStore.add({
  link: '/services',
  label: 'Services'
})
</script>
