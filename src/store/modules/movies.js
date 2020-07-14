import axios from 'axios';

const state = {
  heading: '',
  movies: [],
};

const getters = {
  getMovies: (state) => state.movies,
  getHeading: (state) => state.heading,
};

const actions = {
  async fetchTopRatedMovies({ commit }) {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.VUE_APP_THEMOVIEDB_API_KEY}&language=en-US&page=1`
    );

    commit('setMovies', res.data.results);
    commit('setHeading', 'Popular Movies');
  },

  async fetchSearchedMovie({ commit }, movieTitle) {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=${process.env.VUE_APP_THEMOVIEDB_API_KEY}&language=en-US&query=${movieTitle}&page=1&include_adult=false`
    );

    commit('setMovies', res.data.results);
    commit('setHeading', 'Search Results');
  },
};

const mutations = {
  setMovies: (state, movies) => (state.movies = movies),
  setHeading: (state, heading) => (state.heading = heading),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
