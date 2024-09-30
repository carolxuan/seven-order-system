<template>
  <section class="col-12 col-md-7">
    <div class="row row-cols-1 my-4">
      <div class="col">
        <div class="card p-2 mb-4" v-for="product in sortProducts" :key="product.id">
          <div class="row g-0">
            <div class="col-md-4">
              <img :src="product.imageUrl" class="img-fluid" :alt="product.title" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">
                  {{ product.title }}<span class="ms-2">${{ product.price }}</span>
                </h5>
                <p class="card-text">{{ product.describe }}</p>
                <a
                  href="#"
                  class="btn btn-outline-warning w-100"
                  @click.prevent="addToCart(product.id)"
                  >加入購物車</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import productsStore from '../stores/productsStore.js'
import cartStore from '../stores/cartStore.js'
import { mapState, mapActions } from 'pinia'

export default {
  computed: {
    ...mapState(productsStore, ['sortProducts'])
  },
  methods: {
    ...mapActions(cartStore, ['addToCart'])
  }
}
</script>
