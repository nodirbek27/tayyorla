import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      // { path: 'about', component: () => import('pages/AboutPage.vue') },
      // { path: 'contact', component: () => import('pages/ContactPage.vue') },
      { path: 'signin', component: () => import('pages/SignInPage.vue') },
      { path: 'signup', component: () => import('pages/SignUpPage.vue') },
    ],
  },
];

export default routes;
