<template>
  <ul
    v-if="searched.total_pages > 1"
    class="uk-pagination uk-flex-center"
    uk-margin
  >
    <li v-if="currentPage !== 1">
      <a href="#"><span uk-pagination-previous @click="getPrevPage"></span></a>
    </li>

    <li v-if="currentPage !== 1">
      <a class="nav-links" @click="getFirstPage">1</a>
    </li>

    <li v-if="currentPage > 2" class="uk-disabled"><span>...</span></li>

    <li v-if="currentPage > 2">
      <a class="nav-links" @click="getPrevPage">{{ currentPage - 1 }}</a>
    </li>

    <li class="uk-active">
      <span>{{ currentPage }}</span>
    </li>

    <li v-if="currentPage < searched.total_pages">
      <a class="nav-links" @click="getNextPage">{{ currentPage + 1 }}</a>
    </li>

    <li v-if="currentPage < searched.total_pages">
      <a @click="getNextPage"><span uk-pagination-next></span></a>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'SearchPagination',

  data() {
    return {
      currentPage: 0,
    };
  },

  updated() {
    this.currentPage = this.searched.page;
  },

  created() {
    this.currentPage = this.searched.page;
  },

  beforeDestroy() {
    this.currentPage = 0;
  },

  methods: {
    ...mapActions(['fetchPage']),

    getPrevPage() {
      const movieTitle = this.searchedQ;
      const page = this.searched.page - 1;
      this.fetchPage({
        movieTitle,
        page,
      });
      this.currentPage--;
    },

    getNextPage() {
      const movieTitle = this.searchedQ;
      const page = this.searched.page + 1;
      this.fetchPage({
        movieTitle,
        page,
      });
      this.currentPage++;
    },

    getFirstPage() {
      const movieTitle = this.searchedQ;
      const page = 1;
      this.fetchPage({
        movieTitle,
        page,
      });
      this.currentPage = 1;
    },
  },

  computed: {
    ...mapGetters({
      searched: 'getSearched',
      searchedQ: 'getSearchedQ',
    }),
  },
};
</script>

<style></style>
