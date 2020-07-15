<template>
  <div class="bg-dark uk-container">
    <footer>
      <div>
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
      </div>
      <div>
        <p>© 2020 Copyright : Mohammadreza Amini</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.uk-button-secondary {
  background-color: #222 !important;
  color: #fff !important;
  border: 1px solid transparent !important;
}

.uk-container {
  max-width: 100%;
}

.bg-dark {
  background-color: #222 !important;
  color: #f8f8f8 !important;
  padding-top: 15px;
  padding-bottom: 15px;
}

a {
  margin: 5px;
}

.uk-container > :last-child {
  margin-bottom: 0;
}
</style>
