<template>
  <div class="container">
    <header class="sticky-top">
      <NavbarComponent></NavbarComponent>
    </header>
    <main>
      <div class="main-inner row">
        <ProductComponent></ProductComponent>
        <CartComponent></CartComponent>
      </div>
    </main>
  </div>
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue'
import CartComponent from './components/CartComponent.vue'
import ProductComponent from './components/ProductComponent.vue'

export default {
  components: {
    NavbarComponent,
    CartComponent,
    ProductComponent
  }
}
</script>

<style lang="scss">
@import './assets/scss/all.scss';

.table-image {
  height: 80px;
  width: 80px;
  object-fit: cover;
}

a {
  text-decoration: none;
}

.cart-table {
  td {
    background-color: $gray-100;
  }
}

@media (max-width: 767px) {
  .main-inner {
    flex-direction: column-reverse;
  }
}
</style>
