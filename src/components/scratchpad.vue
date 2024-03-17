
<script>
import UserCard from './components/UserCard.vue';
import BaseCounter from './components/BaseCounter.vue';
export default {
components: {
  BaseCounter,
  UserCard
},
data() {
        return {
          message: 'Hello it works',
          listOfNumbers: [1, 2, 3, 4, 5],
          userData: {
           name: 'Angela',
           favoriteFood: 'pizza'
          }
        }
      },


      computed: {
       refinedUserData() {
         return {
           name: this.userData.name,
           food: this.userData.favoriteFood
         }
       }
      },


      methods: {
       changeName() {
         this.userData.name = "Charlie"
       }
      }




}
</script>




<template>
 <UserCard :user="refinedUserData" @change-name="changeName"/>
  <BaseCounter />
  <h1>Test Playground</h1>
  <div id="app">
    <p v-if="message.length % 2 === 0">Even: {{ message.toUpperCase() }}</p>
    <p v-else>Odd: {{ message }}</p>
    <ul>List of Numbers:</ul>
    <li v-for="(number, index) in listOfNumbers" :key="`item-${index}`">{{ number }}</li>
    <hr />
  </div>
</template>
