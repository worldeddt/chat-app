import { createRouter, createWebHistory } from 'vue-router'
import Login from "@/components/Login.vue";
import AuthService from "@/services/AuthService";
import SignUp from "@/components/SignUp.vue";
import Rooms from "@/components/Rooms.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Login
    },
    {
      path: '/signUp',
      name: '가입',
      component: SignUp
    },
    {
      path: '/rooms',
      name: '대기실',
      component: Rooms
    }
    // {
    //   path:'/login',
    //   name: 'login',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (AuthService.isAuthenticated()) {
      next();
    } else {
      next({name: "Login"});
    }
  } else {
    next();
  }
})

export default router
