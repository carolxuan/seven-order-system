<template>
  <section class="col-12 col-md-5">
    <div class="cart-content bg-light my-4 p-4">
      <div v-if="!cartList.mapCart.length">購物車裡沒有任何品項唷！</div>
      <table v-else class="table align-middle cart-table">
        <tbody>
          <tr v-for="item in cartList.mapCart" :key="item.id">
            <td width="50">
              <a href="#" class="text-dark" @click.prevent="removeCartItem(item.id)">X</a>
            </td>
            <td>{{ item.product.title }}</td>
            <td>
              <select
                name=""
                id=""
                class="form-select"
                :value="item.qty"
                @change="(event) => setCartQty(item.id, event)"
              >
                <option :value="i" v-for="i in 20" :key="i">{{ i }}</option>
              </select>
            </td>
            <td class="text-end">${{ item.subtotal }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="5" class="text-end fw-bold fs-4">總金額 $ {{ cartList.total }}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  </section>
</template>

<script>
import cartStore from '../stores/cartStore.js'
import { mapState, mapActions } from 'pinia'

export default {
  computed: {
    ...mapState(cartStore, ['cartList'])
  },
  methods: {
    ...mapActions(cartStore, ['removeCartItem', 'setCartQty'])
  }
}
</script>

<style lang="scss">
.cart-content {
  position: sticky;
  top: 90px;
  z-index: 1020;
}
@media (max-width: 767px) {
  .cart-content {
    z-index: 0;
  }
}
</style>
