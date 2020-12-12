<template>
  <div>
    home
    <nav-header></nav-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavFooter from './../components/NavFooter.vue'
import NavHeader from './../components/NavHeader.vue'
// @ is an alias to /src

export default {
  components: { NavHeader, NavFooter },
  name: 'Home'
}
</script>
