<script>
export default {
    data: () => ({
        favoritesCharacters: [],
        friendsCharacters: [
                  {
                    name: 'Ross Geller',
                    occupation: 'Paleontologist',
                    relationshipStatus: 'Complicated',
                  },
                  {
                    name: 'Rachel Green',
                    occupation: 'Fashion Executive',
                    relationshipStatus: 'On and Off with Ross',
                  },
                  {
                    name: 'Monica Geller',
                    occupation: 'Chef',
                    relationshipStatus: 'Married to Chandler',
                  },
                  {
                    name: 'Chandler Bing',
                    occupation: 'Statistical Analyst',
                    relationshipStatus: 'Married to Monica',
                  },
                  {
                    name: 'Joey Tribbiani',
                    occupation: 'Actor',
                    relationshipStatus: 'Single',
                  },
                  {
                    name: 'Phoebe Buffay',
                    occupation: 'Massage Therapist',
                    relationshipStatus: 'Married to Mike',
                  },
            ]
       
    }),
    methods: {
          favoriteCharacter(character) {
            this.favoritesCharacters.push(character)
          }
        }
}
</script>

<template>
    <h3>Friends</h3>
      <ul v-if="friendsCharacters.length > 0">Most popular characters: </ul>
      <div v-else>Not found characters</div>
      <li v-for="(character, index) in friendsCharacters" :key="`character-${index}`" >
        {{ character.name }}
        <button @click="favoriteCharacter(character)">Favorite</button>
      </li>
      <h1>Favorite</h1>
      <ul>Favorite characters: </ul>
      <li v-for="(character, index) in favoritesCharacters" :key="`item-${index}`">
        {{ character.name }}
      </li>
</template>