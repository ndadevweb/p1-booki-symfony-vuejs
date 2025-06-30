<script setup>
import { useRoute } from 'vue-router'
import HomeLayout from '@/layouts/HomeLayout.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
const layouts = { HomeLayout, DefaultLayout }
const route = useRoute()
</script>

<template>
  <component :is="layouts[route.meta.layout] || DefaultLayout">
    <router-view />
  </component>
</template>