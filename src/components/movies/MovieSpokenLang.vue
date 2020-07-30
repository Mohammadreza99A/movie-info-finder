<template>
  <ul class="uk-margin-remove-top" uk-accordion>
    <li>
      <a class="uk-accordion-title uk-text-emphasis" href="#"
        >Spoken Languages</a
      >
      <div class="uk-accordion-content">
        <ul class="uk-list uk-list-striped">
          <li
            v-for="lang in spoken_languages"
            :key="lang.iso_639_1"
            class="uk-text-emphasis"
          >
            {{ originalLanguage(lang.iso_639_1) }}
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<script>
import ISO6391 from 'iso-639-1';

export default {
  name: 'MovieSpokenLang',

  props: ['spoken_languages'],

  methods: {
    originalLanguage(iso_lan) {
      return ISO6391.getName(iso_lan);
    },
  },
};
</script>

<style scoped>
li a {
  font-size: 1rem;
}
</style>
