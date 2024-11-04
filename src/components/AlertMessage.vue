<script setup lang="ts">
defineProps({
  typeValue: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <v-alert
    :type="typeValue"
  close-label="Close Alert"
  closable
  >
    <slot name="title"></slot>
    <slot></slot>

  </v-alert>
</template>

<style scoped>

</style>
