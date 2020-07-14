import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Movie Info Finder | Home',
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      title: 'Movie Info Finder | About',
    },
  },
  {
    path: '/info/movie/:id',
    name: 'MovieInfo',
    component: () => import('../views/MovieInfo.vue'),
    meta: {
      title: 'Movie Info Finder | Movie Information',
    },
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/404.vue'),
    meta: {
      title: 'Page Not Found',
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
