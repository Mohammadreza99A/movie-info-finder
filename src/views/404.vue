<template>
  <div class="body uk-contanier">
    <div class="mainbox">
      <div class="err">4</div>
      <i class="far fa-question-circle fa-spin"></i>
      <div class="err2">4</div>
      <div class="msg">
        Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
        existed in the first place?
        <p>
          <button
            type="button"
            v-on:click="goToHome"
            class="uk-margin-top uk-button uk-button-secondary"
          >
            <i class="fas fa-home"></i> Go Home
          </button>
        </p>
      </div>
    </div>
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
.mainbox {
  margin: auto;
  height: 100vh;
  width: 100vh;
  position: relative;
}

.err {
  color: #000;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 11rem;
  position: absolute;
  left: 20%;
  top: 8%;
}

.far {
  position: absolute;
  font-size: 8.5rem;
  left: 42%;
  top: 15%;
  color: #000;
}

.err2 {
  color: #000;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 11rem;
  position: absolute;
  left: 68%;
  top: 8%;
}

.msg {
  text-align: center;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 1.6rem;
  position: absolute;
  left: 16%;
  top: 45%;
  width: 75%;
}
</style>
