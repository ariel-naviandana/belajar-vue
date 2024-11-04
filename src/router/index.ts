import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/DashboardView.vue'

const login = true;

const requireAuth = (to: any, from: any, next: any)=>{
  if(!login){
    alert('Not Master')
    next({
      name: 'Public'
    })
  }else{
    next()
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/master',
      // name: 'Master',
      component: import('../layouts/MasterLayout.vue'),
      beforeEnter: requireAuth,
      children: [
        {
          path: '',
          name: 'Dashboard',
          component: HomeView
        },
        {
          path: 'category',
          name: 'Category',
          component: () => import('../views/CategoryView.vue')
        },
        {
          path: 'category/:name',
          name: 'CategoryName',
          component: () => import('../views/DetailCategoryView.vue')
        }
      ]
    },

    {
      path: '/',
      name: 'Public',
      component: () => import('../layouts/PublicLayout.vue')
    },

    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFoundView.vue')
    },


  ]
})

export default router
