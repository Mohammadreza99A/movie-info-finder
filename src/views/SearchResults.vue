<template>
  <div
    v-if="typeof searched === 'undefined' || Object.keys(searched).length === 0"
  >
    <Spinner />
  </div>
  <div v-else class="uk-container">
    <div class="uk-card uk-card-body uk-box-shadow-large uk-margin-bottom">
      <h4 class="uk-text-bold uk-text-emphasis uk-text-center">
        <i class="fas fa-film"></i> Search Results
      </h4>
      <SearchPagination />
      <div
        class="uk-grid-column-small uk-grid-row-large uk-child-width-1-3@s uk-text-center"
        uk-grid
        uk-scrollspy="cls: uk-animation-slide-bottom; target: .uk-card; delay: 100; repeat: false"
      >
        <div v-for="movie in searched.results" :key="movie.id">
          <Movie v-bind:movie="movie" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Movie from '../components/movies/Movie';
import Spinner from '../components/layout/Spinner';
import SearchPagination from '../components/movies/SearchPagination';
import { mapGetters } from 'vuex';

export default {
  name: 'SearchResults',

  components: {
    Movie,
    Spinner,
    SearchPagination,
  },

  computed: {
    ...mapGetters({
      searched: 'getSearched',
    }),
  },
};
</script>

<style></style>
