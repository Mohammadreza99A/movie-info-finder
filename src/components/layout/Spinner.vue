<template>
  <div class="uk-flex uk-flex-center vh-100">
    <span uk-spinner="ratio: 4.5"></span>
  </div>
</template>

<script>
export default {
  name: 'Spinner',
};
</script>

<style scoped>
img {
  background-color: #e0e0e0;
  width: 200px;
  margin: 40px auto;
  display: block;
}

.container {
  margin-top: 40%;
}

.vh-100 {
  min-height: 100vh;
}
</style>
