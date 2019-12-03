import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Projects from '../views/Projects.vue';
import Blog from '../views/Blog.vue';
import Game from '../views/Game.vue';
import ErrorPage from '../views/ErrorPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    props: true,
  },
  {
    path: '/contact',
    name: 'contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue'),
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects,
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog,
  },
  {
    path: '/game',
    name: 'game',
    component: Game,
  },
  {
    path: '/error',
    name: 'errorPage',
    component: ErrorPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
