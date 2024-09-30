import { defineStore } from 'pinia'

export default defineStore('productsStore', {
  state: () => ({
    products: [
      {
        id: 1,
        title: '精選紅茶',
        describe: '嚴選阿薩姆紅茶，帶有麥芽香、玫瑰香，每一口都使人餘韻。',
        imageUrl: 'https://i.ibb.co/fCKdMH3/drink-4.png',
        price: '35'
      },
      {
        id: 2,
        title: '精選金萱',
        describe: '嚴選南投發酵茶搭配熬製白甘蔗糖，使茶味更為純粹。',
        imageUrl: 'https://i.ibb.co/pZvJ2FS/drink-o.png',
        price: '40'
      },
      {
        id: 3,
        title: '精選綠茶',
        describe: '採用南投有機綠茶，每天精心泡製，甘醇回味。',
        imageUrl: 'https://i.ibb.co/jh89M2n/drink-g.png',
        price: '35'
      },
      {
        id: 4,
        title: '抹茶拿鐵',
        describe: '採用靜岡抹茶，牛奶濃厚香醇，抹茶味十足。',
        imageUrl: 'https://i.ibb.co/ysVQV2Y/drink-m.png',
        price: '70'
      },
      {
        id: 5,
        title: '紅茶拿鐵',
        describe: '有機紅茶搭配牛奶，喝起來帶有茶香、牛奶濃味香醇。',
        imageUrl: 'https://i.ibb.co/yVxDG5D/drink-gm.png',
        price: '60'
      },
      {
        id: 6,
        title: '綠茶拿鐵',
        describe: '有機綠茶搭配牛奶，喝起來帶有茶香、牛奶濃味香醇。',
        imageUrl: 'https://i.ibb.co/XzsVrYt/drink-rm.png',
        price: '60'
      }
    ]
  }),
  getters: {
    sortProducts: ({ products }) => {
      return products.sort((a, b) => a.price - b.price)
    }
  }
})
