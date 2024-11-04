<script setup lang="ts">
import {useRouter} from 'vue-router'

const  route = useRouter()
const backCategory = ()=> {
  route.push({name: 'Category'})
}
</script>

<template>
<h1>Detail Kategori {{$route.params.name}}</h1>

  <v-btn @click="backCategory" class="my-3">Kembali</v-btn>
</template>

<style scoped>

</style>
