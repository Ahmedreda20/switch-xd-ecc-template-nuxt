<template>
  <div>
    <headerComponent />
    <Nuxt class="mx-auto 2xl:container min-h-screen" />
    <footerComponent />
    <div class="fixed bottom-5 right-5 z-10">
      <a
        href="javascript:void(0)"
        class="w-12 h-12 rounded-full flex items-center justify-center border-none bg-orange my-3"
      >
        <img
          src="~/assets/img/msg-icon.svg"
          alt="contact msg icon"
          width="25"
        />
      </a>
      <button
        class="w-12 h-12 rounded-full hidden items-center justify-center border-none bg-purple-dark"
        ref="btnTop"
        @click="backToTop"
      >
        <img
          src="~/assets/img/top-icon.svg"
          alt="back to top icon"
          width="15"
        />
      </button>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    window.addEventListener('scroll', () => {
      const currentVal = document.documentElement.scrollTop
      const top = this.$refs.btnTop
      // console.log(top)
      currentVal > 100
        ? top.classList.replace('hidden', 'flex')
        : top.classList.replace('flex', 'hidden')
    })
  },
  methods: {
    backToTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    },
  },
}
</script>
<style lang="scss" scope>
*,
*::after,
*::before {
  outline: none !important;
}
body,
html {
  background-color: #f9f9f9 !important;
}
input,
textarea,
select,
button {
  font-family: 'Open Sans' sans-serif;
}
</style>