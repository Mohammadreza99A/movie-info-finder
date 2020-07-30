<template>
  <div class="uk-navbar-left">
    <div class="uk-navbar-item">
      <form @submit.prevent="onSubmit" class="uk-search uk-search-navbar">
        <button uk-search-icon></button>
        <input
          class="uk-search-input"
          type="search"
          v-model="title"
          placeholder="Search..."
          @keyup.esc="onEscKey"
          @keyup="updateDropdown"
        />
        <div
          uk-dropdown
          v-if="title !== ''"
          :class="{ 'uk-open': title !== '' }"
        >
          <ul
            v-if="
              typeof searched !== 'undefined' ||
                typeof searched.results !== 'undefined' ||
                searched.results.length !== 0
            "
            class="uk-list uk-list-striped"
          >
            <li
              @click="goToMovieInfoPage(search.id)"
              v-for="search in searched.results"
              :key="search.id"
              class="movieBtn"
            >
              <span v-if="search.name">{{ search.name }}</span>
              <span v-else-if="search.title">{{ search.title }}</span>
            </li>
          </ul>
          <ul v-else class="uk-list uk-list-striped">
            <li>Loading...</li>
          </ul>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'SearchForm',

  data() {
    return {
      title: '',
    };
  },

  methods: {
    ...mapActions(['fetchSearchedMovie']),
    onSubmit() {
      this.fetchSearchedMovie(this.title);
      this.title = '';
      this.$router.push('Search');
    },
    onEscKey() {
      // clearing the input when ESC key is pressed
      this.title = '';
    },
    updateDropdown() {
      this.fetchSearchedMovie(this.title);
    },
    goToMovieInfoPage(id) {
      this.title = '';
      this.$router.push({
        name: 'MovieInfo',
        params: { id },
      });
    },
  },

  computed: {
    ...mapGetters({
      searched: 'getSearched',
    }),
  },
};
</script>

<style scoped>
.movieBtn {
  cursor: pointer;
  text-align: center;
}
</style>
