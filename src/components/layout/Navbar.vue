<template>
  <div class="bg-dark">
    <div class="uk-container">
      <nav class="navbar">
        <span class="navbar-toggle" id="js-navbar-toggle">
          <i class="fas fa-bars"></i>
        </span>
        <span class="logo">Movie Info Finder</span>

        <ul class="main-nav" id="js-menu">
          <li>
            <a @click="goHome" class="nav-links">Home</a>
          </li>
          <li>
            <a @click="goAbout" class="nav-links">About</a>
          </li>
          <li class="toggle-box mx-auto nav-links">
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
          <li><SearchForm /></li>
        </ul>
      </nav>
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

  mounted() {
    let mainNav = document.getElementById('js-menu');
    let navBarToggle = document.getElementById('js-navbar-toggle');
    navBarToggle.addEventListener('click', function() {
      mainNav.classList.toggle('active');
    });
  },

  methods: {
    ...mapActions(['changeTheme']),
    goHome() {
      this.$router.push({ name: 'Home' });
    },
    goAbout() {
      this.$router.push({ name: 'About' });
    },
  },
};
</script>

<style scoped>
address,
dl,
fieldset,
figure,
ol,
p,
pre,
ul {
  margin: 0;
  padding: 0;
  align-items: center;
  align-content: center;
}

.bg-dark {
  background-color: #222 !important;
}

.navbar {
  font-size: 18px;
  background-color: #222 !important;
  padding-bottom: 10px;
}

.main-nav {
  list-style-type: none;
  display: none;
}

.nav-links,
.logo {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.7);
}

.main-nav li {
  text-align: center;
  margin: 15px auto;
}

.logo {
  display: inline-block;
  font-size: 22px;
  margin-top: 10px;
  margin-left: 20px;
}

.navbar-toggle {
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);
  font-size: 24px;
}

.active {
  display: block;
}

@media screen and (min-width: 768px) {
  .navbar {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0;
    height: 70px;
    align-items: center;
  }

  .main-nav {
    display: flex;
    margin-right: 30px;
    flex-direction: row;
    justify-content: flex-end;
  }

  .main-nav li {
    margin: 0;
  }

  .nav-links {
    margin-left: 40px;
  }

  .logo {
    margin-top: 0;
  }

  .navbar-toggle {
    display: none;
  }

  .logo:hover,
  .nav-links:hover {
    color: rgba(255, 255, 255, 1);
  }
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
