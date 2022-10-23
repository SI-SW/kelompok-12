import { createRouter, createWebHistory } from "vue-router";
import routes from './routes/index';
import { certCookies } from '../plugins/cookies'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: "",
  linkExactActiveClass: "active",
});

router.beforeEach((to, from, next) => {
  const { id } = certCookies();





  if (to.matched.some(({ meta }) => meta.auth) && !id) {
    next({ name: 'Signin' });
  } else if (to.matched.some(({ path }) => path.includes('auth')) && id) {
    next({ name: 'Default' });
  } else {
    next();
  }
});

export default router;
