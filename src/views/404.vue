<template>
  <div
    uk-height-viewport="offset-top: true"
    class="body uk-contanier uk-text-center"
  >
    <h1
      class="uk-text-lead uk-text-large uk-text-bold uk-text-uppercase uk-text-emphasis"
    >
      4<strong class="far fa-question-circle"></strong>4
    </h1>
    <p class="uk-text-emphasis">
      Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
      existed in the first place?
    </p>
    <button
      type="button"
      v-on:click="goToHome"
      class="uk-margin-top uk-button uk-button-secondary"
    >
      <i class="fas fa-home"></i> Go Home
    </button>
  </div>
</template>

<script>
export default {
  name: '404',

  methods: {
    goToHome() {
      this.$router.push({
        name: 'Home',
      });
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 6rem;
}
</style>
