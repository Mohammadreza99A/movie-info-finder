<template>
  <div class="bg-dark">
    <nav class="uk-container uk-navbar">
      <div class="uk-navbar-left">
        <router-link to="/" class="uk-navbar-item uk-logo uk-visible@s">
          Movie Info Finder
        </router-link>
        <ul class="uk-navbar-nav uk-visible@s">
          <li>
            <router-link to="/" class="uk-text-bold">
              Home
            </router-link>
          </li>
          <li>
            <router-link to="/about" class="uk-text-bold">
              About
            </router-link>
          </li>
        </ul>
      </div>
      <div class="uk-navbar-right">
        <ul class="uk-navbar-nav">
          <li>
            <a
              href="#"
              class="uk-text-large uk-navbar-toggle uk-hidden@s"
              style="padding: 0; margin-right:10px"
              uk-navbar-toggle-icon
              uk-toggle="target: #sidenav"
            />
          </li>
          <li style="display:flex;align-items:center">
            <SearchForm />
          </li>
          <li class="toggle-box">
            <input
              type="checkbox"
              id="toggle-box-checkbox"
              @click="changeTheme"
              :checked="theme === 'dark'"
            />
            <label
              for="toggle-box-checkbox"
              class="toggle-box-label-left"
            ></label>
            <label for="toggle-box-checkbox" class="toggle-box-label"></label>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Mobile View -->
    <div id="sidenav" uk-offcanvas class="uk-offcanvas">
      <div class="uk-offcanvas-bar">
        <router-link to="/" class="uk-navbar-item uk-logo uk-hidden@s">
          Movie Info Finder
        </router-link>
        <ul class="uk-nav">
          <li>
            <router-link to="/" class="uk-text-large">
              Home
            </router-link>
          </li>
          <li>
            <router-link to="/about" class="uk-text-large">
              About
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import SearchForm from './SearchForm';

export default {
  name: 'Navbar',

  components: {
    SearchForm,
  },

  computed: {
    ...mapGetters({
      theme: 'getTheme',
    }),
  },

  methods: {
    ...mapActions(['changeTheme']),
  },
};
</script>

<style scoped>
.bg-dark {
  background-color: #222 !important;
}

.toggle-box {
  display: flex;
  align-items: center;
  align-content: center;
}

.toggle-box-label-left:empty {
  margin-left: 10px;
}

.toggle-box-label-left:before,
.toggle-box-label-left:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  /*transition*/
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
  outline: none;
}

.toggle-box input[type='checkbox'],
.toggle-box input[type='checkbox']:active {
  position: absolute;
  top: -5000px;
  height: 0;
  width: 0;
  opacity: 0;
  border: none;
  outline: none;
}

.toggle-box label {
  display: inline-block;
  position: relative;
  padding: 0px;
  margin-bottom: 0px;
  font-size: 14px;
  line-height: 16px;
  cursor: pointer;
  color: rgba(149, 149, 149, 0.51);
  font-weight: normal;
}

.toggle-box-label-left:before {
  content: '';
  display: block;
  position: absolute;
  z-index: 1;
  line-height: 34px;
  text-indent: 40px;
  height: 16px;
  width: 16px;
  margin: 4px;
  /*border-radius*/
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  border-radius: 100%;
  right: 26px;
  bottom: 0px;
  background: #ffb200;
  transform: rotate(-45deg);
  box-shadow: 0 0 10px white;
}

.toggle-box-label-left:after {
  content: '';
  display: inline-block;
  width: 40px;
  height: 24px;
  /*border-radius*/
  -webkit-border-radius: 16px;
  -moz-border-radius: 16px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.15);
  vertical-align: middle;
  margin: 0 10px;
  border: 2px solid #ffb200;
}
.toggle-box input[type='checkbox']:checked + .toggle-box-label-left:before {
  right: 17px;
  box-shadow: 5px 5px 0 0 #eee;
  background: transparent;
}
.toggle-box input[type='checkbox']:checked + .toggle-box-label-left:after {
  background: rgba(0, 0, 0, 0.15);
  border: 2px solid white;
}
.toggle-box input[type='checkbox'] + .toggle-box-label-left {
  color: rgba(250, 250, 250, 0.51);
  font-weight: bold;
}
.toggle-box input[type='checkbox']:checked + .toggle-box-label-left {
  color: rgba(149, 149, 149, 0.51);
  font-weight: normal;
}
.toggle-box
  input[type='checkbox']:checked
  + .toggle-box-label-left
  + .toggle-box-label {
  color: rgba(250, 250, 250, 0.51);
  font-weight: bold;
}
</style>
