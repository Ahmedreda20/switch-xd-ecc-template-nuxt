<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 my-10 p-3">
    <div class="w-full h-auto">
      <div class="w-full h-96">
        <div class="relative w-full h-96">
          <!-- control button next and prev -->
          <div class="flex items-center justify-between px-2">
            <button class="control-button right-0" @click="showNext">
              <img
                src="~/assets/img/arrow-down.svg"
                alt="arrow icon"
                width="15"
                class="transform -rotate-90"
              />
            </button>
            <button class="control-button left-0" @click="showPrev">
              <img
                src="~/assets/img/arrow-down.svg"
                alt="arrow icon"
                width="15"
                class="transform rotate-90"
              />
            </button>
          </div>
          <!-- banner items container -->
          <div class="w-full h-96 overflow-hidden">
            <VueSlickCarousel v-bind="settings" ref="carousel">
              <div
                class="w-full h-96 relative rounded-lg"
                v-for="(banner, index) in banners"
                :key="banner.id ? banner.id : index"
                :id="'carousel_banner_' + banner.id ? banner.id : index"
              >
                <img
                  :src="require(`~/assets/img/${banner.img}`)"
                  alt="banner item img"
                  class="w-full h-96 object-cover"
                />
                <div class="absolute bottom-6 left-1 p-3">
                  <h1 class="text-3xl text-orange uppercase">
                    <span class="block">{{ banner.company }}</span>
                    {{ banner.type }}
                    <span class="font-semibold">{{ banner.power }}</span>
                  </h1>
                  <span
                    class="font-semibold text-white bg-purple-dark py-1 table mt-2 px-3 rounded-full uupercase"
                    >{{ banner.storage }}</span
                  >
                </div>
              </div>
            </VueSlickCarousel>
          </div>
        </div>
      </div>

      <div class="w-full h-auto mt-5">
        <nuxt-link to="/ad-link" class="h-auto">
          <img
            src="~/assets/img/banner-down.png"
            alt="ad banner down img"
            class="w-full h-full rounded-lg"
          />
        </nuxt-link>
      </div>
    </div>
    <div class="w-full h-auto">
      <!-- banner ad top right container -->
      <div class="w-full h-auto mb-5">
        <nuxt-link to="/ad-link" class="h-auto">
          <img
            src="~/assets/img/banner-top.png"
            alt="ad banner top img"
            class="w-full h-full rounded-lg"
          />
        </nuxt-link>
      </div>
      <!-- banner products container slick slider -->
      <bannerProductsComponent />
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
      banners: [
        {
          storage: '5g - 512gb',
          company: 'samsung',
          type: 'note 20',
          power: 'ultra',
          img: 'banner.png',
          id: 0,
        },
        {
          storage: '5g - 512gb',
          company: 'samsung',
          type: 'note 20',
          power: 'ultra',
          img: 'banner.png',
          id: 1,
        },
        {
          storage: '5g - 512gb',
          company: 'samsung',
          type: 'note 20',
          power: 'ultra',
          img: 'banner.png',
          id: 2,
        },
        {
          storage: '5g - 512gb',
          company: 'samsung',
          type: 'note 20',
          power: 'ultra',
          img: 'banner.png',
          id: 3,
        },
      ],
      settings: {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 5000,
      },
    }
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
  @apply w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition ease-in-out duration-500 transform -translate-y-1/2 absolute mx-3 top-1/2 z-10;
}
</style>
<style lang="css">
.slick-dots {
  bottom: 20px !important;
}
.slick-dots li {
  @apply w-1.5 h-1.5 rounded-full bg-dark-gray transition ease-in-out duration-500 mx-0.5;
}
.slick-dots .slick-active {
  --tw-bg-opacity: 1 !important;
  background-color: rgba(255, 121, 0, var(--tw-bg-opacity)) !important;
  width: 1.75rem !important;
}
.slick-dots button {
  display: none !important;
}
</style>