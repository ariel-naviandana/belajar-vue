<script setup lang="ts">
import { userStorage } from '@/stores/UserStorage'
import DialogComponent from '@/components/DialogComponent.vue'
import { reactive, ref } from 'vue'

// const usersData = userStorage();
const dialog = ref(false)
const form = ref(false)
const categories = [
  {
    id:1,
    nama:'Politik'
  },
  {
    id:2,
    nama:'Ekonomi'
  },
  {
    id:1,
    nama:'Olahraga'
  },
]

const category = reactive({
  nama: '',
  deskripsi: ''
})

const onSubmitData = ()=>{
  if(!form.value) return
  // console.log(category)
  alert('Berhasil')
}

const nameRules = [
  (value: any) => {
  if(value) return true
    return 'nama harus diisi'
  }
]

const descRules = [
  (value: any) => {
  if(value) return true
    return 'deskripsi harus diisi'
  }
]
</script>

<template>
<!--  <v-list>-->
<!--    <v-list-item :to="{name: 'CategoryName', params: {name: 'Politik'}}">Politik</v-list-item>-->
<!--    <v-list-item :to="{name: 'CategoryName', params: {name: 'Ekonomi'}}">Eknonomi</v-list-item>-->
<!--    <v-list-item :to="{name: 'CategoryName', params: {name: 'Olahraga'}}">Olahraga</v-list-item>-->
<!--  </v-list>-->
<!--  <div v-for="user in usersData.userData" :key="user.name">-->
<!--    <p>Name : {{user.name}}</p>-->
<!--    <p>Email : {{user.email}}</p>-->
<!--  </div>-->
  <h1>Halaman Kategori</h1>
  <div class="d-flex justify-end my-6">
    <v-btn color="indigo" @click="dialog = true" size="large" icon="mdi-plus"/>
  </div>
  <DialogComponent v-model="dialog">
    <template #title>
      Tambah Kategori
    </template>
    <template #content>
      <v-form @submit.prevent="onSubmitData" v-model="form">
        <v-text-field class="mb-1" v-model="category.nama" label="Nama" :rules="nameRules"></v-text-field>
<!--        {{category.nama}}-->
        <v-textarea class="mb-1" v-model="category.deskripsi" label="Deskripsi" :rules="descRules"></v-textarea>
<!--        {{category.deskripsi}}-->
        <v-btn :disabled="!form" block color="success" size="large" type="submit" variant="elevated">Tambah</v-btn>
      </v-form>
    </template>
  </DialogComponent>
  <v-table hover>
    <thead>
    <tr>
      <th class="text-left">
        No
      </th>
      <th class="text-left">
        Nama
      </th>
      <th class="text-center">
        Action
      </th>
    </tr>
    </thead>
    <tbody>
    <tr
      v-for="(item, index) in categories"
      :key="item.id"
    >
      <td>{{ index + 1 }}</td>
      <td>{{ item.nama }}</td>
      <td class="text-center">
        <v-btn size="x-small" color="info" icon="mdi-information"/>
        <v-btn size="x-small" color="primary" icon="mdi-pencil" class="mx-3"/>
        <v-btn size="x-small" color="red" icon="mdi-trash-can"/>
      </td>
    </tr>
    </tbody>
  </v-table>
</template>
