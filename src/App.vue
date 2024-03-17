<script setup>
import BaseCounter from './components/BaseCounter.vue';
import UserCard from './components/UserCard.vue';
import { useCount } from './composables/countStore';
import { watch } from 'vue';
import { useRouter } from 'vue-router';

const countStore = useCount();
const router = useRouter()
watch(countStore.globalCount, (val) => {
  if( val > 1200) {
    //navigate user to About page
    router.push('/about')
  }
})
</script>

<template>
  <h1>New app</h1>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <h2>{{ countStore.globalCount }}</h2>
    </nav>
  </header>
  <RouterView />
  <BaseCounter />
  <UserCard :user="{ name: 'Angela', food: 'pizza' }" />
</template>


<style>
</style>