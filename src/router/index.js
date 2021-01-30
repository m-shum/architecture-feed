import { createRouter, createWebHistory } from "vue-router";
import Sights from "../views/sights.vue";

const routes = [
  {
    path: "/",
    name: "Sights",
    component: Sights
  },
  {
    path: "/sounds",
    name: "Sounds",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/sounds.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
