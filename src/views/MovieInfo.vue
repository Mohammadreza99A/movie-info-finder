<template>
  <div class="uk-container">
    <!-- <div v-if="true"> -->
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
          cast.length === 0 ||
          !similar ||
          similar.length === 0
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
              <li>
                <ul class="uk-margin-remove-top" uk-accordion>
                  <li>
                    <a class="uk-accordion-title uk-text-emphasis" href="#"
                      >Genres</a
                    >
                    <div class="uk-accordion-content">
                      <ul class="uk-list uk-list-striped">
                        <li
                          v-for="genre in movie.genres"
                          :key="genre.id"
                          class="uk-text-emphasis"
                        >
                          {{ genre.name }}
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </li>
              <li for="">Revenue: {{ formatCurr(movie.revenue) }}</li>
              <li for="">Budget: {{ formatCurr(movie.budget) }}</li>
              <li>
                <button
                  uk-toggle="target: #overviewModal"
                  type="button"
                  class="uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom"
                >
                  Overview
                </button>
                <!-- Overview Modal -->
                <div class="uk-flex-top" id="overviewModal" uk-modal>
                  <div
                    class="uk-modal-dialog  uk-margin-auto-vertical uk-modal-body"
                    uk-overflow-auto
                  >
                    <button
                      class="uk-modal-close-default"
                      type="button"
                      uk-close
                    ></button>
                    <h2 class="uk-modal-title">Overview</h2>
                    <p class="uk-text-emphasis">
                      {{ movie.overview }}
                    </p>
                    <p class="uk-text-right">
                      <button
                        class="uk-button uk-button-default uk-modal-close"
                        type="button"
                      >
                        Close
                      </button>
                    </p>
                  </div>
                </div>
              </li>
              <li>
                Original Language:
                {{ originalLanguage(movie.original_language) }}
              </li>
              <li>
                <ul class="uk-margin-remove-top" uk-accordion>
                  <li>
                    <a class="uk-accordion-title uk-text-emphasis" href="#"
                      >Spoken Languages</a
                    >
                    <div class="uk-accordion-content">
                      <ul class="uk-list uk-list-striped">
                        <li
                          v-for="lang in movie.spoken_languages"
                          :key="lang.iso_639_1"
                          class="uk-text-emphasis"
                        >
                          {{ originalLanguage(lang.iso_639_1) }}
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </li>
              <li>Runtime: {{ getTime(movie.runtime) }}</li>
              <li>
                <button
                  uk-toggle="target: #castModal"
                  type="button"
                  class="uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom"
                >
                  Cast
                </button>
                <!-- Cast Modal -->
                <div class="uk-flex-top" id="castModal" uk-modal>
                  <div class="uk-modal-dialog uk-modal-body" uk-overflow-auto>
                    <button
                      class="uk-modal-close-default"
                      type="button"
                      uk-close
                    ></button>
                    <h2 class="uk-modal-title">
                      Cast <span class="uk-text-muted">of</span>
                      {{ movie.title }}
                    </h2>
                    <div
                      class="uk-card uk-card-body uk-padding-remove-horizontal"
                    >
                      <ul
                        class="uk-list uk-text-center uk-list-striped uk-list-large uk-text-emphasis"
                      >
                        <li v-for="cast in cast" :key="cast.id">
                          {{ cast.name }}
                          <small class="uk-text-muted">as</small>
                          {{ cast.character }}
                        </li>
                      </ul>
                    </div>
                    <p class="uk-text-right">
                      <button
                        class="uk-button uk-button-default uk-modal-close uk-margin-bottom"
                        type="button"
                      >
                        Close
                      </button>
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <button
                  uk-toggle="target: #crewModal"
                  type="button"
                  class="uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom"
                >
                  Crew
                </button>
                <!-- Crew Modal -->
                <div class="uk-flex-top" id="crewModal" uk-modal>
                  <div class="uk-modal-dialog uk-modal-body" uk-overflow-auto>
                    <button
                      class="uk-modal-close-default"
                      type="button"
                      uk-close
                    ></button>
                    <h2 class="uk-modal-title">
                      Crew <span class="uk-text-muted">of</span>
                      {{ movie.title }}
                    </h2>
                    <div
                      class="uk-card uk-card-body uk-padding-remove-horizontal"
                    >
                      <!-- printing departments and crew that work there -->
                      <ul
                        class="uk-list uk-text-center uk-list-striped uk-list-large uk-text-emphasis"
                      >
                        <li v-for="dept in crew" :key="dept.dept">
                          <ul uk-accordion>
                            <li>
                              <a class="uk-accordion-title" href="#">
                                {{ dept.dept }}
                              </a>
                              <div class="uk-accordion-content">
                                <ul class="uk-list uk-list-striped">
                                  <li
                                    v-for="crew in dept.workers"
                                    :key="crew.id"
                                    class="uk-text-emphasis"
                                  >
                                    {{ crew.name }}
                                    <small class="uk-text-muted"> as </small>
                                    {{ crew.job }}
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <p class="uk-text-right">
                      <button
                        class="uk-button uk-button-default uk-modal-close uk-margin-bottom"
                        type="button"
                      >
                        Close
                      </button>
                    </p>
                  </div>
                </div>
              </li>
              <li v-if="movie.belongs_to_collection">
                Collection:
                <span class="uk-text-emphasis">{{
                  movie.belongs_to_collection.name
                }}</span>
              </li>
              <li>
                <ul class="uk-margin-remove-top" uk-accordion>
                  <li>
                    <a class="uk-accordion-title uk-text-emphasis" href="#"
                      >Production Contries</a
                    >
                    <div class="uk-accordion-content">
                      <ul class="uk-list uk-list-striped">
                        <li
                          v-for="country in movie.production_countries"
                          :key="country.iso_3166_1"
                          class="uk-text-emphasis"
                        >
                          {{ country.name }}
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <ul class="uk-margin-remove-top" uk-accordion>
                  <li>
                    <a class="uk-accordion-title uk-text-emphasis" href="#"
                      >Production Companies</a
                    >
                    <div class="uk-accordion-content">
                      <ul class="uk-list uk-list-striped">
                        <li
                          v-for="company in movie.production_companies"
                          :key="company.id"
                          class="uk-text-emphasis"
                        >
                          {{ company.name }}
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="uk-card-footer">
            <p>{{ movie.tagline }}</p>
          </div>
        </div>
      </div>

      <SimilarMovies v-bind:movies="similar" :goToMovie="goToMovie" />
    </div>
  </div>
</template>

<script>
import Spinner from '../components/layout/Spinner';
import SimilarMovies from '../components/movies/SimilarMovies';
import axios from 'axios';
import moment from 'moment';
import ISO6391 from 'iso-639-1';
import formatCurrency from 'format-currency';

export default {
  name: 'MovieInfo',

  components: {
    Spinner,
    SimilarMovies,
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
    async fetchData() {
      const movieRes = await axios.get(
        `https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=${process.env.VUE_APP_THEMOVIEDB_API_KEY}&language=en-US`
      );

      const creditRes = await axios.get(
        ` https://api.themoviedb.org/3/movie/${this.$route.params.id}/credits?api_key=${process.env.VUE_APP_THEMOVIEDB_API_KEY}`
      );

      const similarMovies = await axios.get(
        `https://api.themoviedb.org/3/movie/${this.$route.params.id}/similar?api_key=${process.env.VUE_APP_THEMOVIEDB_API_KEY}&language=en-US&page=1`
      );

      this.movie = movieRes.data;
      this.cast = creditRes.data.cast;
      this.similar = similarMovies.data.results;

      // sorting the crew by departement
      creditRes.data.crew.forEach((crew) => {
        if (this.crew.filter((e) => e.dept === crew.department).length > 0) {
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
