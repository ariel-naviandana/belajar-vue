<script setup lang="ts">
defineEmits(['drawerChange'])
</script>

<template>
  <v-app-bar
    color="indigo"
    prominent
  >
    <v-app-bar-nav-icon @click.stop="$emit('drawerChange')"></v-app-bar-nav-icon>

    <v-toolbar-title>Vue App</v-toolbar-title>

    <v-btn icon="mdi-logout"></v-btn>
  </v-app-bar>
</template>

<style scoped>

</style>
