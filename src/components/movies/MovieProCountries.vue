<template>
  <ul class="uk-margin-remove-top" uk-accordion>
    <li>
      <a class="uk-accordion-title uk-text-emphasis" href="#"
        >Production Contries</a
      >
      <div class="uk-accordion-content">
        <ul class="uk-list uk-list-striped">
          <li
            v-for="country in production_countries"
            :key="country.iso_3166_1"
            class="uk-text-emphasis"
          >
            {{ country.name }}
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'MovieProCountries',

  props: ['production_countries'],
};
</script>

<style scoped>
li a {
  font-size: 1rem;
}
</style>
