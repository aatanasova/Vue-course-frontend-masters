<script>
import { useCount } from '../composables/countStore';
import { useCountStore } from '../stores/CountStore';

    export default {

      setup() {
        const newCountStore = useCountStore()
        const countStore = useCount();
        console.log("COUNT STORE",countStore)
        return {
          countStore,
          newCountStore
        }
      },
        data: () => ({
            count: 10,
            counterTitle: 'Counter Standard',
            incrementAmount: 8,
        }),
        computed: {
            displayTitle(){
            if(this.count > 20) {
              return 'Counter Standard - Very Long'
             } else {
              return 'Counter Standard'
             }
          },
          optimizedIncrementAmount() {
            return this.displayTitle.length * this.incrementAmount
          }
        },
        methods: {
            incrementCount(){
            this.count += this.optimizedIncrementAmount
            // this.newCount += 10;
          }
        },
        
    }

</script>

<template>
      <h1>{{ displayTitle }}</h1>
      <h2>Third counter version: {{ newCountStore.count }}</h2>
      <button @click="newCountStore.increment">New increment</button>
      <h2> New Counter</h2>
      <p>Global count: {{ countStore.globalCount }}</p>
      <p>Local count: {{ countStore.localCount }}</p>
      <button @click="countStore.incrementGlobalCount">Global</button>
      <button @click="countStore.incrementLocalCount">Local</button>

      <hr />


      <p>{{ count }}</p>
      <button @click="incrementCount">Increment count</button>
      <h1>{{ incrementAmount }}</h1>
      <p>{{ optimizedIncrementAmount }}</p>
      <div>
        <label for="incrementAmount">Increment by:</label>
        <input type="number" v-model="incrementAmount"/>
      </div>

</template>