<template>
  <div>
    <button
      uk-toggle="target: #overviewModal"
      type="button"
      class="uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom"
    >
      Overview
    </button>
    <!-- Overview Modal -->
    <div class="uk-flex-top" id="overviewModal" uk-modal>
      <div
        v-bind:class="theme === 'dark' ? 'theme-dark' : ''"
        class="uk-modal-dialog uk-modal-body"
        uk-overflow-auto
      >
        <button class="uk-modal-close-default" type="button" uk-close></button>
        <h2 class="uk-modal-title">Overview</h2>
        <p class="uk-text-emphasis">
          {{ overview }}
        </p>
        <p class="uk-text-right">
          <button
            class="uk-button uk-button-default uk-modal-close"
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
  name: 'MovieOverview',

  props: ['overview', 'theme'],
};
</script>

<style></style>
