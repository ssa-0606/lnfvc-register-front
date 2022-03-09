import { createRouter, createWebHashHistory } from "vue-router";
import logIn from "../views/LogIn.vue";
import register from "../components/HelloWorld.vue"

const routes = [
  {
    path: "/",
    name: "logIn",
    // component: () =>import(/* webpackChunkName: "Login"*/ '@/views/LogIn.vue')
    component: logIn
  },
  {
      path: "/register",
      name: "register",
      // component: () => import('@/components/HelloWorld.vue')
      component: register
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
});

export default router;