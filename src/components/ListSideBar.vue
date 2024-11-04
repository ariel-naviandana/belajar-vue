<script setup lang="ts">
import { inject } from 'vue'

defineProps({
  items:{
    type: Object,
    required: true
  }
})
const username = inject('username')
</script>

<template>
  <v-list density="compact">
    <v-list-subheader color="white" class="my-3 text-h5 text-uppercase">{{username}}</v-list-subheader>

    <v-list-item
      v-for="(item, i) in items"
      :key="i"
      :value="item"
      :to="{name: item.pathName}"
      color="white"
    >
      <template v-slot:prepend>
        <v-icon :icon="item.icon"></v-icon>
      </template>

      <v-list-item-title v-text="item.text"></v-list-item-title>
    </v-list-item>
  </v-list>
</template>

<style scoped>

</style>
