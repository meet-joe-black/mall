import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import Index from './pages/index'
import Product from './pages/product'
import Detail from './pages/detail'
import Cart from './pages/cart.vue'
import Order from './pages/order.vue'
import orderConfirm from './pages/orderConfirm.vue'
import orderList from './pages/orderList.vue'
import orderPay from './pages/orderPay.vue'
import alipay from './pages/alipay.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'index',
        component: Index
      },
      {
        path: '/product/:id',
        name: 'product',
        component: Product
      },
      {
        path: '/detail/:id',
        name: 'detail',
        component: Detail
      }
    ]
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/order',
    name: 'order',
    component: Order,
    children: [
      {
        path: 'orderConfirm',
        name: 'order-confirm',
        component: orderConfirm
      },
      {
        path: 'orderList',
        name: 'order-list',
        component: orderList
      },
      {
        path: 'orderPay',
        name: 'order-pay',
        component: orderPay
      },
      {
        path: 'alipay',
        name: 'alipay',
        component: alipay
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
