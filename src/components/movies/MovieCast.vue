<template>
  <div>
    <button
      uk-toggle="target: #castModal"
      type="button"
      class="uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom"
    >
      Cast
    </button>
    <!-- Cast Modal -->
    <div class="uk-flex-top" id="castModal" uk-modal>
      <div
        v-bind:class="theme === 'dark' ? 'theme-dark' : ''"
        class="uk-modal-dialog uk-modal-body"
        uk-overflow-auto
      >
        <button class="uk-modal-close-default" type="button" uk-close></button>
        <h2 class="uk-modal-title">
          Cast <span class="uk-text-muted">of</span>
          {{ title }}
        </h2>
        <div class="uk-card uk-card-body uk-padding-remove-horizontal">
          <ul
            class="uk-list uk-text-center uk-list-striped uk-list-large uk-text-emphasis"
          >
            <li v-for="cast in cast" :key="cast.id">
              {{ cast.name }}
              <small class="uk-text-muted">as</small>
              {{ cast.character }}
            </li>
          </ul>
        </div>
        <p class="uk-text-right">
          <button
            class="uk-button uk-button-default uk-modal-close uk-margin-bottom"
            type="button"
          >
            Close
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieCast',

  props: ['title', 'cast', 'theme'],
};
</script>

<style></style>
