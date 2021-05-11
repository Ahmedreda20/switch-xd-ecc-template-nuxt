<template>
  <div>
    <div
      class="hidden 2xl:container mx-auto md:flex items-start justify-between px-4 overflow-x-auto links-container"
    >
      <nuxt-link
        to="/"
        exact=""
        class="link-page text-orange"
        exact-active-class="active-link"
      >
        all brands
      </nuxt-link>
      <nuxt-link
        to="/home-kitchen"
        exact=""
        class="link-page"
        exact-active-class="active-link"
        >home & kitchen</nuxt-link
      >
      <nuxt-link
        to="/etertainment"
        exact=""
        class="link-page"
        exact-active-class="active-link"
        >ENTERTAINMENT</nuxt-link
      >
      <nuxt-link
        to="/beauty"
        exact=""
        class="link-page"
        exact-active-class="active-link"
        >BEAUTY</nuxt-link
      >
      <nuxt-link
        to="/mobile"
        exact=""
        class="link-page"
        exact-active-class="active-link"
        >TECHNOLOGY</nuxt-link
      >
      <nuxt-link
        to="/apple"
        exact=""
        class="link-page"
        exact-active-class="active-link"
        >MOBILE</nuxt-link
      >
      <nuxt-link
        to="/gaming"
        exact=""
        class="link-page"
        exact-active-class="active-link"
        >APPLE</nuxt-link
      >
      <nuxt-link
        to="/sport-fitness"
        exact=""
        class="link-page"
        exact-active-class="active-link"
        >SPORT & FITNESS</nuxt-link
      >
      <nuxt-link
        to="/life-style"
        exact=""
        class="link-page"
        exact-active-class="active-link"
        >LIFE STYLE</nuxt-link
      >
      <nuxt-link
        to="/out-door"
        exact=""
        class="link-page"
        exact-active-class="active-link"
        >OUT DOOR</nuxt-link
      >
      <nuxt-link
        to="/fire-place"
        exact=""
        class="link-page"
        exact-active-class="active-link"
        >FIRE PLACE</nuxt-link
      >
    </div>
    <div class="md:hidden flex items-center justify-between relative my-2 px-3">
      <button class="search-icon">
        <img
          src="~/assets/img/search.svg"
          alt="search icon"
          title="Enter the content first then press enter to search..."
          width="14"
        />
      </button>
      <button
        class="bg-transparent border-none flex items-end justify-end flex-col"
        @click="
          classname === '' ? (classname = 'active-md-nav') : (classname = '')
        "
      >
        <span class="block h-0.5 rounded-full bg-gray-500 w-6"></span>
        <span class="block h-0.5 rounded-full bg-gray-500 my-1.5 w-6"></span>
        <span class="block h-0.5 rounded-full bg-gray-500 w-6"></span>
        <!-- <span class="block h-0.5 rounded-full bg-gray-500 w-3"></span> -->
      </button>
      <div :class="`md-nav-container ${classname}`">
        <nuxt-link
          to="/"
          exact=""
          class="link-page text-orange"
          exact-active-class="active-link-md"
        >
          all brands
        </nuxt-link>
        <nuxt-link
          to="/home-kitchen"
          exact=""
          class="link-page"
          exact-active-class="active-link-md"
          >home & kitchen</nuxt-link
        >
        <nuxt-link
          to="/etertainment"
          exact=""
          class="link-page"
          exact-active-class="active-link-md"
          >ENTERTAINMENT</nuxt-link
        >
        <nuxt-link
          to="/beauty"
          exact=""
          class="link-page"
          exact-active-class="active-link-md"
          >BEAUTY</nuxt-link
        >
        <nuxt-link
          to="/mobile"
          exact=""
          class="link-page"
          exact-active-class="active-link-md"
          >TECHNOLOGY</nuxt-link
        >
        <nuxt-link
          to="/apple"
          exact=""
          class="link-page"
          exact-active-class="active-link-md"
          >MOBILE</nuxt-link
        >
        <nuxt-link
          to="/gaming"
          exact=""
          class="link-page"
          exact-active-class="active-link-md"
          >APPLE</nuxt-link
        >
        <nuxt-link
          to="/sport-fitness"
          exact=""
          class="link-page"
          exact-active-class="active-link-md"
          >SPORT & FITNESS</nuxt-link
        >
        <nuxt-link
          to="/life-style"
          exact=""
          class="link-page"
          exact-active-class="active-link-md"
          >LIFE STYLE</nuxt-link
        >
        <nuxt-link
          to="/out-door"
          exact=""
          class="link-page"
          exact-active-class="active-link-md"
          >OUT DOOR</nuxt-link
        >
        <nuxt-link
          to="/fire-place"
          exact=""
          class="link-page"
          exact-active-class="active-link-md"
          >FIRE PLACE</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      classname: '',
    }
  },
}
</script>

<style lang="scss" scoped>
.link-page {
  @apply uppercase font-semibold no-underline text-black relative px-2 py-4 transition ease-in-out duration-500 whitespace-nowrap hover:text-orange;
}
.links-container {
  &::-webkit-scrollbar {
    height: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
  }
}
.active-link {
  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 5px;
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;
    background-color: #ff7900;
    bottom: 0;
    left: 0;
    transition: 0.5s ease-in-out;
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -ms-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
  }
}
.active-link-md {
  color: #ff7900 !important;
}
.search-icon {
  @apply w-9 h-9 rounded-full flex items-center justify-center bg-orange border-none;
}
.md-nav-container {
  @apply hidden absolute top-full bg-white w-full h-auto p-3 items-start justify-start left-0 flex-col;
}
.active-md-nav {
  display: flex !important;
}
</style>