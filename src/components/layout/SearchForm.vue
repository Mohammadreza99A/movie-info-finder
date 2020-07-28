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
        />
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

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
  },
};
</script>
