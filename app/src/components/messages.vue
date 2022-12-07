<template>
  <ul>
    <li
      v-for="(message, index) in messages"
      :class="{
        'bg-orange-400': message.status == 'warning',
        'px-2 py-2 mt-2 flex justify-between': true,
      }"
    >
      <div>
        {{ message.message }}
      </div>
      <div class="actions">
        <fa icon="times" @click="store.remove(index)" />
      </div>
    </li>
  </ul>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useMessageStore } from '../store/messages'

const store = useMessageStore()

const { messages } = storeToRefs(store)
</script>
