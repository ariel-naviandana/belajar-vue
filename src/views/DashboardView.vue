<script setup lang="ts">
import { userStorage } from '@/stores/UserStorage'

const usersData = userStorage();

const submitData = ()=>{
  usersData.tambahUser()
}
</script>

<template>
  <h1>Halaman Dashboard</h1>
  <h2>Jumlah User : {{usersData.jumlahUser}}</h2>
  <div v-for="user in usersData.userData" :key="user.name">
    <p>Name : {{user.name}}</p>
    <p>Email : {{user.email}}</p>
  </div>
  <br>
  <br>

  <form @submit.prevent="submitData">
    <label>Name:</label><br>
    <input type="text" v-model="usersData.userInput.name"><br><br>
    <label>Email:</label><br>
    <input type="email" v-model="usersData.userInput.email"><br><br>
    <input type="submit" value="Tambah">
  </form>
</template>

<style scoped>
input{
  border: 1px black solid;
}
</style>
