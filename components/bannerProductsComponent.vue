<template>
  <div class="w-full h-auto">
    <h1 class="font-semibold text-black uppercase text-2xl py-3">
      today's pick
    </h1>
    <!-- slick container products -->
    <div class="relative w-full h-full">
      <!-- control button next and prev -->
      <div class="flex items-center justify-between px-2">
        <button
          class="next_btn control-button transform -rotate-90 z-10 absolute top-1/2 right-0 w-full -translate-y-1/2"
          @click="showNext"
        >
          <img src="~/assets/img/arrow-down.svg" alt="arrow icon" width="15" />
        </button>
        <button
          class="prev_btn control-button transform rotate-90 z-10 absolute top-1/2 left-0 w-full -translate-y-1/2"
          @click="showPrev"
        >
          <img src="~/assets/img/arrow-down.svg" alt="arrow icon" width="15" />
        </button>
      </div>
      <!-- banner items container -->
      <div class="w-full h-full relative px-5">
        <VueSlickCarousel v-bind="settings" ref="carousel">
          <div
            class="caroursel-item w-full relative bg-gray-300 overflow-hidden rounded-br-lg rounded-bl-lg"
            v-for="(product, index) in products"
            :key="product.id ? product.id : index"
            :id="'carousel_banner_' + product.id ? product.id : index"
          >
            <div
              class="absolute top-0 left-0 flex items-center justify-between w-full flex-wrap"
            >
              <span
                class="text-sm py-1 px-4 rounded-tr-full rounded-br-full bg-orange text-center text-white"
                v-if="product.best"
                >Best Seller</span
              >
              <span
                class="text-sm py-1 px-4 rounded-tl-full rounded-bl-full bg-purple-dark text-center text-white"
                v-if="product.new"
                >New</span
              >
            </div>
            <div class="w-full rounded-bl-lg rounded-br-lg bg-white">
              <div class="w-full h-32">
                <img
                  :src="require(`~/assets/img/${product.img}`)"
                  alt="product img"
                  class="w-full h-full object-contain mb-5"
                />
              </div>
              <div class="p-2">
                <p class="text-sm text-dark-gray capitalize">
                  {{ product.category }}
                </p>
                <nuxt-link to="/products/~454"
                  >{{ product.title.slice(0, 80) }}...</nuxt-link
                >
                <p class="text-sm text-dark-gray uppercase">
                  {{ product.categories }}
                </p>
              </div>
              <div
                class="flex items-center justify-between flex-row uppercase py-2"
              >
                <p class="px-2">
                  <span
                    class="block text-sm text-red line-through"
                    v-if="product.discount.price"
                    >{{ product.discount.price }} jd</span
                  >
                  <span class="block font-semibold text-black"
                    >{{ product.price }} jd</span
                  >
                </p>
                <span
                  class="text-sm py-1 px-2 rounded-tl-full rounded-bl-full bg-light-green text-center text-white"
                  v-if="product.discount"
                  >{{ product.discount.value }}</span
                >
              </div>
            </div>
            <button
              class="w-full h-auto p-2 text-center bg-gray-300 text-gray-500 flex items-center justify-center font-semibold"
            >
              <img
                src="~/assets/img/shopping-cart-products.svg"
                alt="add to cart"
                width="18"
                class="mr-3"
              />
              Add to Cart
            </button>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  data() {
    return {
      products: [
        {
          title: 'Hp Pavilion - 16.1" Ips - Inter Core I5-10300H',
          category: 'Category | Subcategory',
          img: 'iphone.jpg',
          categories: 'HP',
          price: 1000,
          discount: {
            price: 2000,
            value: '50% off',
          },
          best: true,
          new: true,
          id: 0,
        },
        {
          title: 'Hp Pavilion - 16.1" Ips - Inter Core I5-10300H',
          category: 'Category | Subcategory',
          img: 'iphone.jpg',
          categories: 'HP',
          price: 1000,
          discount: {
            price: 2000,
            value: '50% off',
          },
          best: true,
          new: true,
          id: 1,
        },
        {
          title: 'Hp Pavilion - 16.1" Ips - Inter Core I5-10300H',
          category: 'Category | Subcategory',
          img: 'iphone.jpg',
          categories: 'HP',
          price: 1000,
          discount: {
            price: 2000,
            value: '50% off',
          },
          best: true,
          new: true,
          id: 2,
        },
        {
          title: 'Hp Pavilion - 16.1" Ips - Inter Core I5-10300H',
          category: 'Category | Subcategory',
          img: 'iphone.jpg',
          categories: 'HP',
          price: 1000,
          discount: {
            price: 2000,
            value: '50% off',
          },
          best: true,
          new: true,
          id: 3,
        },
        {
          title: 'Hp Pavilion - 16.1" Ips - Inter Core I5-10300H',
          category: 'Category | Subcategory',
          img: 'iphone.jpg',
          categories: 'HP',
          price: 1000,
          discount: {
            price: 2000,
            value: '50% off',
          },
          best: true,
          new: true,
          id: 4,
        },
        {
          title: 'Hp Pavilion - 16.1" Ips - Inter Core I5-10300H',
          category: 'Category | Subcategory',
          img: 'iphone.jpg',
          categories: 'HP',
          price: 1000,
          discount: {
            price: 2000,
            value: '50% off',
          },
          best: true,
          new: true,
          id: 5,
        },
        {
          title: 'Hp Pavilion - 16.1" Ips - Inter Core I5-10300H',
          category: 'Category | Subcategory',
          img: 'iphone.jpg',
          categories: 'HP',
          price: 1000,
          discount: {
            price: 2000,
            value: '50% off',
          },
          best: true,
          new: true,
          id: 6,
        },
        {
          title: 'Hp Pavilion - 16.1" Ips - Inter Core I5-10300H',
          category: 'Category | Subcategory',
          img: 'iphone.jpg',
          categories: 'HP',
          price: 1000,
          discount: {
            price: 2000,
            value: '50% off',
          },
          best: true,
          new: true,
          id: 7,
        },
      ],
      settings: {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,

        responsive: [
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      },
    }
  },
  mounted() {
    const items = document.querySelectorAll('.caroursel-item')
    items.forEach((item) => {
      item.parentElement.style.cssText = 'margin: 0 5px'
    })
  },
  methods: {
    showNext() {
      this.$refs.carousel.next()
    },
    showPrev() {
      this.$refs.carousel.prev()
    },
  },
  components: {
    VueSlickCarousel,
  },
}
</script>

<style lang="scss" scoped>
.control-button {
  @apply w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition ease-in-out duration-500;
}
</style>