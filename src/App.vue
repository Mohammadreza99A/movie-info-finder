<template>
  <div id="app">
    <Navbar />
    <div class="content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  },
  watch: {
    $route(to) {
      document.title = to.meta.title || 'Movie Info Finder';
    },
  },
};
</script>

<style>
html,
body {
  height: 100%;
}

.content {
  height: 100%;
}
</style>
