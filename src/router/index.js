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
    component: () => import('../components/Auth/Login.vue')
  },
  {
    path : '/logout',
    name : 'Logout',
    component : () => import('../components/Auth/Logout.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../components/Auth/Register.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../components/Dashboard.vue')
  },
  {
    path: '/new_product',
    name:'New_product',
    component: () => import('../components/Product/New_product.vue')
  },
  {
    path: '/product/:product_id',
    name: 'Product',
    component: () => import('../components/Product/Product.vue')
  },
  {
    path: '/categories',
    name: 'Categories',
    component: () => import('../components/Category/Categories.vue')
  },
  {
    path: '/new_category',
    name: 'New_category',
    component: () => import('../components/Category/New_category.vue')
  },
  {
    path: '/new_comment/:product_id',
    name: 'New_comment',
    component: () => import('../components/Comment/New_comment.vue')
  },
  {
    path: '/comment/:comment_id',
    name: 'Comment',
    component: () => import('../components/Comment/Comment.vue')
  },
  {
    path: '/cities',
    name: 'Cities',
    component: () => import('../components/City/Cities.vue')
  },
  {
    path: '/new_city',
    name: 'New_city',
    component: () => import('../components/City/New_city.vue')
  },
  {
    path: '/customer',
    name: 'Customer',
    component: () => import('../components/Customer/Customer.vue')
  },
  {
    path: '/customer_dashboard',
    name: 'Customer_dashboard',
    component: () => import('../components/Customer/Customer_dashboard')
  },
  {
    path: '/admin_dashboard',
    name: 'Admin_dashboard',
    component: () => import('../components/Admin/Admin_dashboard.vue')
  },
  {
    path: '/checkout_infos',
    name: 'Checkout_info',
    component: () => import('../components/ChechoutInfo/Checkout_infos.vue')
  },
  {
    path: '/new_checkout_info',
    name: 'New_checkout_info',
    component: () => import('../components/ChechoutInfo/New_checkout_info.vue')
  },
  {
    path: '/delete_checkout_info/:checkout_info_id',
    name: 'Delete-checkout_info',
    component: () => import('../components/ChechoutInfo/Delete_checkout_info.vue')
  },
  {
    path: '/shopping_cards',
    name: 'Shopping_cards',
    component: () => import('../components/ShoppingCard/Shopping_cards.vue')
  },
  {
    path: '/new_shopping_card',
    name: 'New_shopping_card',
    component: () => import('../components/ShoppingCard/New_shopping_card.vue')
  },
  {
    path : '/update_shopping_card/:shopping_card_id',
    name: 'Update_shopping_card',
    component: () => import('../components/ShoppingCard/Update_shopping_card')
  },
  {
    path: '/orders',
    name: 'Orders',
    component: () => import('../components/Order/Orders.vue')
  },
  {
    path: '/new_order/:shopping_card_id',
    name: 'New_order',
    component: () => import('../components/Order/New_order.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
