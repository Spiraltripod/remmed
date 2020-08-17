import Vue from 'vue'
import VueRouter from 'vue-router'
import { auth } from '../firebase'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'home',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/crear-cuenta',
      name: 'CrearCuenta',
      component: () => import('../views/CrearCuenta.vue')
    },
    {
      path: '/reestablecer-contrasena',
      name: 'reestablecerContrasena',
      component: () => import('../views/ReestablecerContrasena.vue'),
    },
    {
      path: '/inicio',
      name: 'inicio',
      component: () => import('../views/Inicio.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/agregar',
      name: 'agregar',
      component: () => import('../views/Agregar.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/editar/:id',
      name: 'editar',
      component: () => import('../views/Editar.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/farmacias',
      name: 'farmacias',
      component: () => import('../views/Farmacias.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/calendario',
      name: 'calendario',
      component: () => import('../views/Calendario.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/ajustes',
      name: 'ajustes',
      component: () => import('../views/Ajustes.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/cuenta',
      name: 'cuenta',
      component: () => import('../views/Cuenta.vue'),
      meta: {requiresAuth: true}
    },
    
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const rutaProtegida = to.matched.some(record => record.meta.requiresAuth);
  const user = auth.currentUser;

  if(rutaProtegida === true && user === null){
    next({name:'login'})
  }else{
    next()
  }

})

export default router
