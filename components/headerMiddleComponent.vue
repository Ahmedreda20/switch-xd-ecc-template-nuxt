<template>
  <div
    class="2xl:container mx-auto flex items-center justify-between sm:justify-around w-full py-3 px-5 rounded-full bg-orange text-white"
  >
    <nuxt-link to="/" exact class="mr-3">
      <img
        src="~/assets/img/logo.svg"
        alt="logo icon"
        width="100"
        title="Switch logo"
      />
    </nuxt-link>

    <div>
      <form class="items-center justify-center hidden md:flex">
        <div class="drop-down">
          ALL CATEGORIES
          <span class="block ml-2">
            <img src="~/assets/img/arrow-down.svg" alt="arrow icon w-3 h-3" />
          </span>
        </div>
        <div
          class="block md:w-auto lg:w-80 rounded-tr-full h-11 bg-white rounded-br-full pr-12 relative"
        >
          <input
            type="text"
            required
            autocomplete="off"
            spellcheck="true"
            placeholder="What are you looking for?"
            class="placeholder-gray-300 font-medium py-2 pl-4 w-full h-full"
          />
          <span class="search-icon">
            <img
              src="~/assets/img/search.svg"
              alt="search icon"
              title="Enter the content first then press enter to search..."
              width="14"
            />
          </span>
        </div>
      </form>
    </div>

    <div class="flex items-center justify-around">
      <nuxt-link to="/" exact class="no-underline text-white flex">
        <div class="p-2 mx-2 bg-transparent flex items-center justify-center">
          <img
            src="~/assets/img/gift.svg"
            alt="gift icon"
            width="25"
            class="mr-2"
          />
          <p class="text-sm hidden sm:block">
            <span class="uppercase text-very-small-8 leading-3 block">top</span>
            Deals
          </p>
        </div>
      </nuxt-link>
      <nuxt-link to="/" exact class="no-underline text-white flex">
        <div class="p-2 mx-2 bg-transparent flex items-center justify-center">
          <img
            src="~/assets/img/shopping-cart.svg"
            alt="shopping-cart icon"
            width="25"
            class="mr-2"
          />
          <p class="text-sm hidden sm:block">
            <span class="uppercase text-very-small-8 leading-3 block"
              >add to</span
            >
            Cart
          </p>
        </div>
      </nuxt-link>
      <nuxt-link to="/" exact class="no-underline text-white flex">
        <div class="p-2 mx-2 bg-transparent flex items-center justify-center">
          <img
            src="~/assets/img/account.svg"
            alt="account icon"
            width="25"
            class="mr-2"
          />
          <p class="text-sm hidden sm:block">
            <span class="uppercase text-very-small-8 leading-3 block"
              >welcome</span
            >
            Login/Register
          </p>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header-top {
  @apply no-underline mx-1 text-33-black;
}
.drop-down {
  border-right: 2px solid rgba(255, 121, 0, 1);
  @apply py-3 px-4 cursor-pointer rounded-bl-full flex items-center justify-center rounded-tl-full bg-very-light-gray text-orange font-semibold text-sm overflow-ellipsis overflow-hidden whitespace-nowrap h-11;
}
.search-icon {
  @apply absolute top-1/2 right-1 transform -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center bg-orange;
}
</style>