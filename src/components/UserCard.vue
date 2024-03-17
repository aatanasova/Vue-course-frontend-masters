<script>
import { useCount } from '@/composables/countStore';
export default {
    setup() {
        const countStore = useCount()
        return {
            countStore
        }
    },
    props: {
        user: {
            type: Object,
            required: true
        }
    },

    emits: ['change-name']
}
</script>

<template> 
      <h2> New Counter</h2>
      <p>Global count: {{ countStore.globalCount }}</p>
      <p>Local count: {{ countStore.localCount }}</p>
      <button @click="countStore.incrementGlobalCount">Global</button>
      <button @click="countStore.incrementLocalCount">Local</button>

      <hr />
    <h1>User: {{ user.name }}</h1>
    <p>Favorite Food: {{ user.food }}</p>
    <button @click="$emit('change-name')">Change Name</button>
</template>