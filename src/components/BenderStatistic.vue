<script>
export default {
    props: {
        favoritesCharacters: {
            type: Array,
            required: true
        },
        friendsCharacters: {
            type: Array,
            required: true
        },

    },
    computed: {
          percentageOfFavoriteCharacter () {
            const intersection = this.friendsCharacters.filter(character =>
                this.favoritesCharacters.some(favorite => favorite.name === character.name)
              );
            const percentage = (intersection.length / this.friendsCharacters.length) * 100;

            console.log("percentage", intersection)
             return percentage;
          }

        },
}
</script>

<template>
        <h1>Statistic</h1>
      <p>{{percentageOfFavoriteCharacter}}%</p>
</template>