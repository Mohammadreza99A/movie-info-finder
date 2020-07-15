import axios from 'axios';

const state = {
  heading: '',
  movies: [],
  theme: 'light',
};

const getters = {
  getMovies: (state) => state.movies,
  getHeading: (state) => state.heading,
  getTheme: (state) => state.theme,
};

const actions = {
  changeTheme({ commit }) {
    // save to local storage the prefred theme
    if (localStorage.theme) {
      localStorage.theme = state.theme === 'light' ? 'dark' : 'light';
    } else {
      localStorage.setItem('theme', 'light');
    }
    commit('setTheme', state.theme === 'light' ? 'dark' : 'light');
  },

  changePrefredTheme({ commit }, theme) {
    // save to local storage the prefred theme
    if (localStorage.theme) {
      localStorage.theme = state.theme === 'light' ? 'dark' : 'light';
    } else {
      localStorage.setItem('theme', 'light');
    }
    commit('setTheme', theme);
  },

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
  setTheme: (state, theme) => (state.theme = theme),
  setMovies: (state, movies) => (state.movies = movies),
  setHeading: (state, heading) => (state.heading = heading),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
