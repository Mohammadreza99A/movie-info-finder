<template>
  <ul class="uk-margin-remove-top" uk-accordion>
    <li>
      <a class="uk-accordion-title uk-text-emphasis" href="#"
        >Production Companies</a
      >
      <div class="uk-accordion-content">
        <ul class="uk-list uk-list-striped">
          <li
            v-for="company in production_companies"
            :key="company.id"
            class="uk-text-emphasis"
          >
            {{ company.name }}
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'MovieProCompanies',

  props: ['production_companies'],
};
</script>

<style scoped>
li a {
  font-size: 1rem;
}
</style>
