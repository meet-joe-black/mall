<template>
  <div>
    <order-header></order-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavFooter from './../components/NavFooter.vue'
import OrderHeader from './../components/OrderHeader.vue'
// @ is an alias to /src

export default {
  components: { OrderHeader, NavFooter },
  name: 'order'
}
</script>
