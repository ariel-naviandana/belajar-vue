import {defineStore} from 'pinia'
import { ref, reactive, computed } from 'vue'

export const userStorage = defineStore('User', ()=>{
  const userData = ref([
    {
      name: 'Ariel',
      email: 'ariel@gmail.com'
    },
    {
      name: 'Putra',
      email: 'putra@gmail.com'
    }
  ])

  const userInput = reactive({
    name: '',
    email: ''
  })

  const clearInput = ()=>{
    userInput.name = ''
      userInput.email = ''
  }

  const tambahUser = () => {
    userData.value.push({
      name: userInput.name,
      email: userInput.email
    })

    clearInput()
  }

  const jumlahUser = computed(()=>{
    return userData.value.length
  })

  return {userData, userInput, tambahUser, jumlahUser}
})
