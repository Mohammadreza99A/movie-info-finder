<template>
  <div class="uk-container">
    <button
      type="button"
      v-on:click="goBack"
      class="uk-button uk-button-secondary uk-margin-top uk-margin-bottom"
    >
      Go Back
    </button>
    <div
      v-if="
        !movie ||
          Object.entries(movie).length === 0 ||
          !crew ||
          crew.length === 0 ||
          !cast ||
          cast.length === 0
      "
    >
      <div class="uk-margin-xlarge-top uk-margin-xlarge-bottom">
        <Spinner />
      </div>
    </div>
    <div
      v-else
      class="uk-card uk-box-shadow-xlarge uk-margin-bottom uk-text-center"
    >
      <h2 class="uk-text-bold uk-text-capitalize uk-text-emphasis">
        {{ movie.title }}
      </h2>
      <MovieGenres v-bind:genres="movie.genres" />
      <div
        class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin"
        uk-grid
      >
        <div class="uk-card-media-left uk-cover-container">
          <img
            :src="`http://image.tmdb.org/t/p/original/${movie.poster_path}`"
            :alt="`Poster of ${movie.title}`"
            uk-image
          />
        </div>
        <div>
          <div class="uk-card-body">
            <ul class="uk-list uk-list-striped uk-list uk-text-emphasis">
              <li>Status: {{ movie.status }}</li>
              <li>Release Date: {{ movie.release_date }}</li>
              <li>
                Rating: <span class="uk-badge">{{ movie.vote_average }}</span>
              </li>
              <li for="">Revenue: {{ formatCurr(movie.revenue) }}</li>
              <li for="">Budget: {{ formatCurr(movie.budget) }}</li>
              <li>
                <MovieOverview
                  v-bind:overview="movie.overview"
                  v-bind:theme="theme"
                />
              </li>
              <li>
                Original Language:
                {{ originalLanguage(movie.original_language) }}
              </li>
              <li>
                <MovieSpokenLang
                  v-bind:spoken_languages="movie.spoken_languages"
                />
              </li>
              <li>Runtime: {{ getTime(movie.runtime) }}</li>
              <li>
                <MovieCast
                  v-bind:title="movie.title"
                  v-bind:cast="cast"
                  v-bind:theme="theme"
                />
              </li>
              <li>
                <MovieCrew
                  v-bind:theme="theme"
                  v-bind:title="movie.title"
                  v-bind:crew="crew"
                />
              </li>
              <li v-if="movie.belongs_to_collection">
                Collection:
                <span class="uk-text-emphasis">{{
                  movie.belongs_to_collection.name
                }}</span>
              </li>
              <li>
                <MovieProCountries
                  v-bind:production_countries="movie.production_countries"
                />
              </li>
              <li>
                <MovieProCompanies
                  v-bind:production_companies="movie.production_companies"
                />
              </li>
            </ul>
          </div>
          <div class="uk-card-footer">
            <p>{{ movie.tagline }}</p>
          </div>
        </div>
      </div>

      <div v-if="similar && similar.length !== 0">
        <SimilarMovies v-bind:movies="similar" :goToMovie="goToMovie" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Spinner from '../components/layout/Spinner';
import SimilarMovies from '../components/movies/SimilarMovies';
import MovieGenres from '../components/movies/MovieGenres';
import MovieOverview from '../components/movies/MovieOverview';
import MovieSpokenLang from '../components/movies/MovieSpokenLang';
import MovieCast from '../components/movies/MovieCast';
import MovieCrew from '../components/movies/MovieCrew';
import MovieProCountries from '../components/movies/MovieProCountries';
import MovieProCompanies from '../components/movies/MovieProCompanies';
import axios from 'axios';
import moment from 'moment';
import ISO6391 from 'iso-639-1';
import formatCurrency from 'format-currency';

export default {
  name: 'MovieInfo',

  components: {
    Spinner,
    SimilarMovies,
    MovieGenres,
    MovieOverview,
    MovieSpokenLang,
    MovieCast,
    MovieCrew,
    MovieProCountries,
    MovieProCompanies,
  },

  data() {
    return {
      movie: {},
      cast: [],
      crew: [],
      similar: [],
    };
  },

  methods: {
    fetchData() {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=${process.env.VUE_APP_THEMOVIEDB_API_KEY}&language=en-US`
        )
        .then((res) => (this.movie = res.data))
        .catch((err) => console.log(err));

      axios
        .get(
          ` https://api.themoviedb.org/3/movie/${this.$route.params.id}/credits?api_key=${process.env.VUE_APP_THEMOVIEDB_API_KEY}`
        )
        .then((res) => {
          this.cast = res.data.cast; // sorting the crew by departement
          res.data.crew.forEach((crew) => {
            if (
              this.crew.filter((e) => e.dept === crew.department).length > 0
            ) {
              let c = this.crew.find((e) => e.dept === crew.department);
              // check for duplicate first
              const index = c.workers.findIndex((w) => w.id === crew.id);
              if (index === -1) {
                c.workers.push({ id: crew.id, job: crew.job, name: crew.name });
              }
            } else {
              this.crew.push({
                dept: crew.department,
                workers: [{ id: crew.id, job: crew.job, name: crew.name }],
              });
            }
          });
        });

      axios
        .get(
          `https://api.themoviedb.org/3/movie/${this.$route.params.id}/similar?api_key=${process.env.VUE_APP_THEMOVIEDB_API_KEY}&language=en-US&page=1`
        )
        .then((res) => (this.similar = res.data.results));
    },

    goBack() {
      this.$router.go(-1);
    },

    originalLanguage(iso_lan) {
      return ISO6391.getName(iso_lan);
    },

    formatCurr(curr) {
      let opts = { format: '%v %c', code: 'USD', symbol: '$' };
      return formatCurrency(curr, opts);
    },

    getTime(time) {
      const duration = moment.duration(time, 'minutes');
      return moment.utc(duration.as('milliseconds')).format('HH:mm:ss');
    },

    goToMovie(id) {
      this.$router.push({
        name: 'MovieInfo',
        params: { id },
      });
      window.scrollTo(0, 0);
    },
  },

  computed: {
    ...mapGetters({
      theme: 'getTheme',
    }),
  },

  watch: {
    $route() {
      this.movie = {};
      this.cast = [];
      this.crew = [];
      this.similar = [];
      this.fetchData();
    },
  },

  async created() {
    this.fetchData();
  },
};
</script>

<style scoped>
li a {
  font-size: 1rem;
}
</style>
