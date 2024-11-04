<script setup lang="ts">
import { ref, provide } from 'vue'
// import SideBar from '@/components/SideBar.vue'
// import NavBar from '@/components/NavBar.vue'
import { RouterView } from 'vue-router'
// import AlertMessage from '@/components/AlertMessage.vue'

const drawer = ref(true)

const drawerChange = () => {
  drawer.value = !drawer.value
}

// const showSuccess = ref(false)
// const showError = ref(false)

provide('username', 'Ariel')
</script>

<template>
<!--    <v-layout>-->
<!--      <NavBar @drawerChange="drawerChange"/>-->

<!--      <SideBar v-model="drawer"/>-->

<!--      <v-main style="height: 500px;">-->
<!--        <v-card-text>-->
          <RouterView/>
<!--          Dashboard-->
<!--          <br>-->
<!--          <br>-->
<!--          <v-btn @click="showSuccess = !showSuccess" type="button">Show Success</v-btn>-->
<!--          <v-btn @click="showError = !showError" type="button">Show Error</v-btn>-->
<!--          <AlertMessage v-model="showSuccess" typeValue="success">-->
<!--            <template #title>-->
<!--              <span class="text-h5">Success</span>-->
<!--            </template>-->
<!--            <template #default>-->
<!--              <ul>-->
<!--                <li>Success</li>-->
<!--                <li>Nice</li>-->
<!--              </ul>-->
<!--            </template>-->
<!--          </AlertMessage>-->
<!--          <AlertMessage v-model="showError" typeValue="error">-->
<!--            <template #title>-->
<!--              <span class="text-h5">Error</span>-->
<!--            </template>-->
<!--            <template #default>-->
<!--              <ul>-->
<!--                <li>Error</li>-->
<!--                <li>Damn</li>-->
<!--              </ul>-->
<!--            </template>-->
<!--          </AlertMessage>-->
<!--        </v-card-text>-->
<!--      </v-main>-->
<!--    </v-layout>-->
</template>
