<template>
    <div>
        <order-header></order-header>
        cart
        <nav-footer></nav-footer>
    </div>
</template>
<script>
import NavFooter from './../components/NavFooter.vue'
import OrderHeader from './../components/OrderHeader.vue'
export default {
  components: { OrderHeader, NavFooter },
  name: 'cart'
}
</script>
