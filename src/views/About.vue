<template>
  <div class="uk-text-center">
    <h1 class="uk-text-center uk-margin-top">About Page</h1>
    <p class="uk-text-emphasis">
      An Application for finding all sorts of information regarding movies.
    </p>
    <p class="uk-text-emphasis">
      This application uses
      <a href="https://developers.themoviedb.org/3/" target="_blank"
        >TMDB API</a
      >
      in order to get information for a given movie.
    </p>
    <h4>Developper: Mohammadreza Amini</h4>
    <h4>Email: mohammadreza99a@yahoo.com</h4>
    <a
      href="https://www.facebook.com/mohammadreza.amini.33"
      rel="noopener noreferrer"
      target="_blank"
      class="uk-button uk-button-secondary uk-border-circle uk-button-large"
    >
      <i class="fab fa-facebook-f fa-lg"> </i>
    </a>
    <a
      href="https://www.instagram.com/mohammadreza99a/"
      rel="noopener noreferrer"
      target="_blank"
      class="uk-button uk-button-secondary uk-border-circle uk-button-large"
    >
      <i class="fab fa-instagram fa-lg"> </i>
    </a>
    <a
      href="https://github.com/Mohammadreza99A"
      target="_blank"
      rel="noopener noreferrer"
      class="uk-button uk-button-secondary uk-border-circle uk-button-large"
    >
      <i class="fab fa-github fa-lg"> </i>
    </a>
    <div class="uk-container"></div>
  </div>
</template>

<style scoped>
.uk-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.theme-dark h1 {
  color: azure;
}

.theme-dark h4 {
  color: azure;
}
</style>
