<template>
  <div class="uk-container">
    <div class="uk-card uk-card-body uk-box-shadow-large uk-margin-bottom">
      <h1 class="uk-text-bold uk-text-emphasis uk-text-center">
        <i class="fas fa-film"></i> Search For a Movie
      </h1>
      <h5 class="uk-text-secondary uk-text-center">
        Get relative information for any given movie.
      </h5>
      <SearchForm />
    </div>
    <hr class="uk-divider-icon" />
    <Movies />
  </div>
</template>

<script>
import Movies from '../movies/Movies';
import SearchForm from '../layout/SearchForm';

export default {
  name: 'Index',
  components: {
    Movies,
    SearchForm,
  },
};
</script>

<style></style>
