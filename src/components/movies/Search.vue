<template>
  <div class="uk-card uk-card-body uk-box-shadow-large uk-margin-bottom">
    <h1 class="uk-text-bold uk-text-emphasis uk-text-center">
      <i class="fas fa-film"></i> Search For a Movie
    </h1>
    <h5 class="uk-text-secondary uk-text-center">
      Get relative information for any given movie.
    </h5>
    <nav class="uk-navbar-container" uk-navbar>
      <div class="uk-navbar-left">
        <div class="uk-navbar-item">
          <form @submit.prevent="onSubmit" class="uk-search uk-search-navbar">
            <button uk-search-icon></button>
            <input
              class="uk-search-input"
              type="search"
              v-model="title"
              placeholder="Search..."
            />
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Search',

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
    },
  },
};
</script>

<style scoped></style>
