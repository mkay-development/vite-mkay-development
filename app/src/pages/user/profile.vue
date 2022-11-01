<template>
  <div>Profile</div>
</template>

<script setup>
import { useBackendStore } from '../../store/backend';

let store = useBackendStore();

let client = store.init();
</script>
