<template>
  <div>
    <h3>Similar Movies</h3>
    <div uk-slider>
      <div class="uk-position-relative uk-margin">
        <div class="uk-slider-container uk-dark uk-margin">
          <ul
            class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-grid "
          >
            <li v-for="movie in movies" :key="movie.id">
              <button
                @click="goToMovie(movie.id)"
                class="uk-button uk-button-text"
              >
                <div
                  class="uk-card uk-card-small uk-card-default uk-margin-bottom"
                >
                  <div class="uk-card uk-card-default">
                    <img
                      :src="
                        `http://image.tmdb.org/t/p/w342/${movie.poster_path}`
                      "
                      :alt="movie.title"
                    />
                  </div>
                  <div class="uk-card-body uk-margin-top">
                    <div class="uk-position-bottom">
                      <p>{{ movie.title }}</p>
                    </div>
                  </div>
                </div>
              </button>
            </li>
          </ul>
        </div>

        <div class="uk-hidden@s uk-light">
          <a
            class="uk-position-center-left uk-position-small"
            href="#"
            uk-slidenav-previous
            uk-slider-item="previous"
          ></a>
          <a
            class="uk-position-center-right uk-position-small"
            href="#"
            uk-slidenav-next
            uk-slider-item="next"
          ></a>
        </div>

        <div class="uk-visible@s uk-margin">
          <a
            class="uk-position-center-left-out uk-position-small"
            href="#"
            uk-slidenav-previous
            uk-slider-item="previous"
          ></a>
          <a
            class="uk-position-center-right-out uk-position-small"
            href="#"
            uk-slidenav-next
            uk-slider-item="next"
          ></a>
        </div>
      </div>

      <ul
        class="uk-hidden-touch uk-slider-nav uk-dotnav uk-flex-center uk-margin uk-padding"
      ></ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SimilarMovies',

  props: ['movies', 'goToMovie'],

  methods: {},
};
</script>

<style scoped></style>
