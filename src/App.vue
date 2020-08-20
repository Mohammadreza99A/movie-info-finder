<template>
  <div id="app" v-bind:class="theme === 'dark' ? 'theme-dark' : ''">
    <Navbar />
    <div v-if="$router.currentRoute.name !== 'Home'" class="uk-container"></div>
    <div class="content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  },
  methods: { ...mapActions(['changePrefredTheme']) },
  computed: {
    ...mapGetters({
      theme: 'getTheme',
    }),
  },
  watch: {
    $route(to) {
      document.title = to.meta.title || 'Movie Info Finder';
    },
  },
  mounted() {
    // get the prefred theme mode from the local storage
    if (localStorage.theme) {
      this.changePrefredTheme(localStorage.theme);
    } else {
      localStorage.setItem('theme', 'light');
    }
  },
};
</script>

<style>
html,
body {
  height: 100%;
  overflow-x: hidden;
}

.theme-dark {
  background-color: #1a1919;
  color: #fff !important;
}

.theme-dark body {
  background-color: #1a1919 !important;
  color: #fff !important;
}

.theme-dark .uk-text-emphasis {
  color: #fff !important;
}

.theme-dark .uk-text-secondary {
  color: rgba(248, 246, 246, 0.931) !important;
}

.theme-dark h1 {
  color: #fff9f9 !important;
}

.theme-dark h4 {
  color: #fff9f9 !important;
}

.theme-dark h3 {
  color: #fff9f9 !important;
}

.theme-dark .uk-card-default {
  background-color: #242222;
  color: #fff9f9 !important;
}

.theme-dark .uk-card-title {
  color: #fff9f9 !important;
}

.theme-dark .uk-button-secondary {
  background-color: #fff !important;
  color: #000 !important;
}

.theme-dark .uk-button-secondary:hover {
  background-color: #fff !important;
  color: #000 !important;
}

.theme-dark .uk-button-default {
  background-color: rgb(88, 87, 87) !important;
  color: rgb(255, 255, 255) !important;
}

.theme-dark .uk-accordion-title {
  color: #fff !important;
}

.theme-dark .uk-accordion-title::before {
  background-color: rgb(209, 204, 204) !important;
  color: #000 !important;
}

.theme-dark .uk-list-striped > li:nth-of-type(2n + 1) {
  background: none;
}

.theme-dark .uk-modal {
  background: rgba(0, 0, 0, 0.6) !important;
}

.theme-dark .uk-modal-title {
  color: #fff9f9 !important;
}

.theme-dark .uk-modal-dialog {
  background-color: #242222;
  color: #fff9f9 !important;
}

.content {
  height: 100%;
}
</style>
