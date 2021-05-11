<template>
  <div
    class="2xl:container mx-auto flex items-center justify-between w-full py-3 px-2"
  >
    <div>
      <a href="tel:+962 6 575 1771" class="header-top">
        <img
          src="~/assets/img/phone.svg"
          alt="phone icon"
          width="17"
          height="17"
          title="Contact us via phone number"
          class="inline-block align-middle mx-2"
        />
        | +962 6 575 1771
      </a>
    </div>
    <div class="flex items-center justify-around">
      <a href="#" class="header-top">
        <img
          src="~/assets/img/mapmarker.svg"
          alt="map icon"
          width="13"
          height="13"
          title="our location"
          class="inline-block align-middle mx-2"
        />
        | Store Locator
      </a>
      <a href="#" class="header-top">
        <img
          src="~/assets/img/translate.svg"
          alt="translate icon"
          width="18"
          height="15"
          title="En"
          class="inline-block align-middle mx-2"
        />
        | Arabic
      </a>
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
</style>