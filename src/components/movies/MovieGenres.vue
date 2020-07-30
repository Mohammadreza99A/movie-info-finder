<template>
  <div class="uk-text-meta uk-margin-remove-top">
    <span
      v-for="genre in genres"
      :key="genre.id"
      class="uk-badge uk-margin-small-right"
      >{{ genre.name }}</span
    >
  </div>
</template>

<script>
export default {
  name: 'MovieGenres',

  props: ['genres'],
};
</script>

<style scoped></style>
