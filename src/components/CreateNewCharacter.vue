<script>
 export default {
    data: () => ({
        newCharacter: ''
    }),
    // emits: ['create-new-character']
    methods: {
        createCharacter(){
            this.$emit('create-new-character', this.newCharacter)
            this.newCharacter = ''
        }
    }

 }

</script>

<template>
    <h1>New character</h1>
     <label>New character:</label>
     <input type="text" v-model="newCharacter" @keyup.enter="createCharacter"/>
</template>