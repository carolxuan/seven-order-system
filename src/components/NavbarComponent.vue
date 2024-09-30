<template>
  <nav class="navbar">
    <div class="container-fluid">
      <span class="navbar-brand mb-0"
        ><img src="../assets/logo-w.svg" alt="" class="navbar-brand-img"
      /></span>
      <button type="button" class="btn">
        <span class="text-white">購物車</span
        ><span class="badge rounded-pill text-bg-warning">{{ cart.length }}</span>
      </button>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'pinia'
import cartStore from '../stores/cartStore.js'

export default {
  computed: {
    ...mapState(cartStore, ['cart'])
  }
}
</script>

<style lang="scss">
$custom-primary: #185c0c;
.navbar {
  background-color: $custom-primary;
}
.navbar-brand-img {
  height: 40px;
  object-fit: cover;
}
</style>
