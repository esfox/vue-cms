import { createRouter, createWebHashHistory } from 'vue-router';

import ClearLayout from '../layouts/ClearLayout.vue';

/** @type {import('vue-router').RouteRecord[]} */
const routes =
[
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home'),
    meta: { nav: true },
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('../views/Test'),
    meta: { nav: true },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login'),
    meta:
    {
      layout: ClearLayout,
      nav: true,
    },
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/404'),
    meta: { layout: ClearLayout },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
