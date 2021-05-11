<template>
  <div class="container-wrapper">
    <div class="links-container">
      <div class="item-header">
        <img
          src="~/assets/img/lowest.svg"
          alt="lowset icon"
          width="25"
          class="mr-2"
        />
        <span class="hidden md:text-left md:block">
          lowest price guaranted
        </span>
      </div>
      <div class="item-header">
        <img
          src="~/assets/img/free-delivery.svg"
          alt="lowset icon"
          width="25"
          class="mr-2"
        />
        <span class="hidden md:text-left md:block">
          Free Delivery Over 50 JD
        </span>
      </div>
      <div class="item-header">
        <img
          src="~/assets/img/in-store.svg"
          alt="lowset icon"
          width="25"
          class="mr-2"
        />
        <span class="hidden md:text-left md:block">
          In-store after Sales Service
        </span>
      </div>
      <div class="item-header">
        <img
          src="~/assets/img/installments.svg"
          alt="lowset icon"
          width="25"
          class="mr-2"
        />
        <span class="hidden md:text-left md:block"> Installments Program </span>
      </div>
      <div class="item-header">
        <img
          src="~/assets/img/price.svg"
          alt="lowset icon"
          width="25"
          class="mr-2"
        />
        <span class="hidden md:text-left md:block"> Price Match Policy </span>
      </div>
      <div class="item-header">
        <img
          src="~/assets/img/pickup.svg"
          alt="lowset icon"
          width="25"
          class="mr-2"
        />
        <span class="hidden md:text-left md:block"> Pickup from Store </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container-wrapper {
  border-top: 1px solid rgba(156, 163, 175, 1);
  border-bottom: 1px solid rgba(156, 163, 175, 1);
}
.links-container {
  @apply py-2  mx-auto flex items-start justify-between px-4 overflow-x-auto 2xl:container;

  &::-webkit-scrollbar {
    height: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
  }
}
.item-header {
  @apply flex items-center md:items-start  justify-between text-gray-400 capitalize mx-2 flex-col md:flex-row;
}
</style>