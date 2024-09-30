import { defineStore } from 'pinia'
import productsStore from '../stores/productsStore.js'

export default defineStore('cart', {
  state: () => ({
    cart: []
  }),
  actions: {
    addToCart(productId, qty = 1) {
      const currentCart = this.cart.find((item) => item.productId === productId)
      if (currentCart) {
        currentCart.qty += qty
      } else {
        this.cart.push({
          id: new Date().getTime(),
          productId,
          qty
        })
      }
    },
    setCartQty(id, event) {
      const currentCart = this.cart.find((item) => item.id === id)
      currentCart.qty = event.target.value * 1
    },
    removeCartItem(id) {
      const index = this.cart.findIndex((item) => item.id === id)
      this.cart.splice(index, 1)
    }
  },
  getters: {
    cartList: ({ cart }) => {
      const { products } = productsStore()
      const mapCart = cart.map((item) => {
        const product = products.find((product) => product.id === item.productId)
        return {
          ...item,
          product,
          subtotal: product.price * item.qty
        }
      })
      const total = mapCart.reduce((a, b) => a + b.subtotal, 0)
      return {
        mapCart,
        total
      }
    }
  }
})
