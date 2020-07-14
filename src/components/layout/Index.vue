<template>
  <div class="uk-container">
    <Search />
    <hr class="uk-divider-icon" />
    <Movies />
  </div>
</template>

<script>
import Movies from '../movies/Movies';
import Search from '../movies/Search';

export default {
  name: 'Index',
  components: {
    Movies,
    Search,
  },
};
</script>

<style></style>
