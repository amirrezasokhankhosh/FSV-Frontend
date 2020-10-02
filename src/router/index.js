import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/index',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../views/Products.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/Login.vue')
  },
  {
    path : '/logout',
    name : 'Logout',
    component : () => import('../components/Logout.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../components/Register.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../components/Dashboard.vue')
  },
  {
    path: '/new_product',
    name:'New_product',
    component: () => import('../components/New_product.vue')
  },
  {
    path: '/product/:product_id',
    name: 'Product',
    component: () => import('../components/Product.vue')
  },
  {
    path: '/categories',
    name: 'Categories',
    component: () => import('../components/Categories.vue')
  },
  {
    path: '/new_category',
    name: 'New_category',
    component: () => import('../components/New_category.vue')
  },
  {
    path: '/new_comment/:product_id',
    name: 'New_comment',
    component: () => import('../components/New_comment.vue')
  },
  {
    path: '/comment/:comment_id',
    name: 'Comment',
    component: () => import('../components/Comment.vue')
  },
  {
    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
