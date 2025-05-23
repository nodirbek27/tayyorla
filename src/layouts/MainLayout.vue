<script setup lang="ts">
import TheNavbar from 'src/components/TheNavbar.vue';
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <TheNavbar />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
