<script>
export default {
    data: ()=> ({
        favoritesCharacters: []
    })
}
</script>

<template>
    <h1>Favorite</h1>
    <ul v-if="favoritesCharacters.length > 0">Favorite characters:
     <li v-for="(character, index) in favoritesCharacters" :key="`item-${index}`">
       {{ character.name }}
     </li>
    </ul>
     <p v-else>No favorite Characters</p>

</template>