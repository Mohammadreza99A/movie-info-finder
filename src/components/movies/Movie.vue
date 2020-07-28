<template>
  <div>
    <div class="uk-card uk-card-default">
      <div class="uk-card-media-top">
        <img
          :src="`http://image.tmdb.org/t/p/w500/${movie.poster_path}`"
          alt="Poster"
        />
      </div>
      <div class="uk-card-body">
        <div class="uk-card-badge uk-label ">{{ movie.vote_average }}</div>
        <h3 v-if="movie.title" class="uk-card-title">{{ movie.title }}</h3>
        <h3 v-else-if="movie.name">{{ movie.name }}</h3>
      </div>
      <div class="uk-card-footer">
        <button
          type="button"
          v-on:click="goToMovieInfoPage"
          class="uk-button uk-button-secondary uk-width-1-1"
        >
          <i class="fas fa-info"></i> See info
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Movie',

  props: ['movie'],

  methods: {
    goToMovieInfoPage() {
      this.$router.push({
        name: 'MovieInfo',
        params: { id: this.$props.movie.id },
      });
    },
  },
};
</script>

<style scoped>
.card {
  background-color: #f2f2f2;
  margin: 10px 0;
}
</style>
