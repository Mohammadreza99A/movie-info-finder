<template>
  <div v-if="!heading || heading === '' || movies.length === 0 || !movies">
    <Spinner />
  </div>
  <div
    v-else
    class=" uk-card uk-card-body uk-box-shadow-xlarge uk-margin-bottom"
  >
    <h4 class="uk-text-center uk-text-bold uk-card-title">{{ heading }}</h4>
    <div
      class="uk-grid-column-small uk-grid-row-large uk-child-width-1-3@s uk-text-center"
      uk-grid
      uk-scrollspy="cls: uk-animation-slide-bottom; target: .uk-card; delay: 100; repeat: false"
    >
      <div v-for="movie in movies" :key="movie.id">
        <Movie v-bind:movie="movie" />
      </div>
    </div>
  </div>
</template>

<script>
import Spinner from '../layout/Spinner';
import Movie from './Movie';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Movies',

  components: {
    Spinner,
    Movie,
  },

  methods: {
    ...mapActions(['fetchTopRatedMovies']),
  },

  computed: {
    ...mapGetters({
      heading: 'getHeading',
      movies: 'getMovies',
    }),
  },

  created() {
    this.fetchTopRatedMovies();
  },
};
</script>

<style scoped>
.card {
  padding: 5px 5px;
  background-color: inherit;
}
</style>
