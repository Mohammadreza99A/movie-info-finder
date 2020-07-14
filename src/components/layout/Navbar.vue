<template>
  <div class="bg-dark">
    <nav class="navbar uk-margin-xlarge-left uk-margin-xlarge-right">
      <span class="navbar-toggle" id="js-navbar-toggle">
        <i class="fas fa-bars"></i>
      </span>
      <a href="#" class="logo">Movie Info Finder</a>
      <ul class="main-nav" id="js-menu">
        <li>
          <a @click="goHome" class="nav-links">Home</a>
        </li>
        <li>
          <a @click="goAbout" class="nav-links">About</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',

  methods: {
    goHome() {
      this.$router.push({ name: 'Home' });
    },
    goAbout() {
      this.$router.push({ name: 'About' });
    },
  },

  mounted() {
    let mainNav = document.getElementById('js-menu');
    let navBarToggle = document.getElementById('js-navbar-toggle');

    navBarToggle.addEventListener('click', function() {
      mainNav.classList.toggle('active');
    });
  },
};
</script>

<style scoped>
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
</style>
