<script setup>
// go to /about/1
import { useRoute } from 'vue-router'

const route = useRoute()

console.log("ROUTE", route.params.id)
</script>

<template>
    <h1>About card page with id: {{ route.params.id }}</h1>
</template>