<script setup lang="ts">
import ListSideBar from '@/components/ListSideBar.vue'
const items = [
  { text: 'Dashboard', icon: 'mdi-view-dashboard', pathName: 'Dashboard'},
  { text: 'Category', icon: 'mdi-shape-plus', pathName: 'Category'},
]
</script>

<template>
  <v-navigation-drawer color="indigo" :location="left">
    <ListSideBar :items="items"/>
  </v-navigation-drawer>
</template>

<style scoped></style>
