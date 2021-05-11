<template>
  <div class="footer-container bg-white w-full h-auto">
    <div
      class="w-full 2xl:container mx-auto flex items-start justify-between flex-row flex-wrap p-3 pb-8"
    >
      <div class="p-5">
        <img
          src="~/assets/img/footer-logo.svg"
          alt="footer logo switch"
          width="125"
          class="my-3"
        />
        <h1 class="text-xl font-bold text-dark-gray py-2">FIND US</h1>
        <ul class="list-none">
          <li
            class="w-8 h-8 inline-flex ml-0 rounded-full items-center justify-center bg-dark-gray"
          >
            <a
              href="#"
              class="no-underline text-white text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-facebook"></i>
            </a>
          </li>
          <li
            class="w-8 h-8 inline-flex mx-0.5 rounded-full items-center justify-center bg-dark-gray"
          >
            <a
              href="#"
              class="no-underline text-white text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li
            class="w-8 h-8 inline-flex mx-0.5 rounded-full items-center justify-center bg-dark-gray"
          >
            <a
              href="#"
              class="no-underline text-white text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-youtube"></i>
            </a>
          </li>
          <li
            class="w-8 h-8 inline-flex mx-0.5 rounded-full items-center justify-center bg-dark-gray"
          >
            <a
              href="#"
              class="no-underline text-white text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
          <li
            class="w-8 h-8 inline-flex mx-0.5 rounded-full items-center justify-center bg-dark-gray"
          >
            <a
              href="#"
              class="no-underline text-white text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
        <h1 class="text-xl font-bold text-dark-gray py-2 mt-5">NEED HELP?</h1>
        <p class="text-dark-gray">
          <a href="tel:+962 6 565 1771" class="no-underline text-sm block"
            >+962 6 565 1771</a
          >(09:00 am to 05:00 pm)
        </p>
      </div>
      <div class="p-5">
        <h1 class="text-xl font-bold text-dark-gray py-2">ACCOUNT</h1>
        <ul class="list-none">
          <li class="py-2">
            <nuxt-link to="/" class="footer-link" exact>my profile</nuxt-link>
          </li>
          <li class="py-2">
            <nuxt-link to="/" class="footer-link" exact
              >my order history</nuxt-link
            >
          </li>
          <li class="py-2">
            <nuxt-link to="/" class="footer-link" exact>my wish list</nuxt-link>
          </li>
          <li class="py-2">
            <nuxt-link to="/" class="footer-link" exact
              >my comparisons</nuxt-link
            >
          </li>
          <li class="py-2">
            <nuxt-link to="/" class="footer-link" exact
              >my order status</nuxt-link
            >
          </li>
          <li class="py-2">
            <nuxt-link to="/" class="footer-link" exact>promos</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="p-5">
        <h1 class="text-xl font-bold text-dark-gray py-2">HIGHTLIGHTS</h1>
        <ul class="list-none">
          <li class="py-2">
            <nuxt-link to="/" exact class="footer-link">flash deals</nuxt-link>
          </li>
          <li class="py-2">
            <nuxt-link to="/" exact class="footer-link"
              >join our team</nuxt-link
            >
          </li>
          <li class="py-2">
            <nuxt-link to="/" exact class="footer-link"
              >maintenance & repair</nuxt-link
            >
          </li>
          <li class="py-2">
            <nuxt-link to="/" exact class="footer-link"
              >store locator</nuxt-link
            >
          </li>
          <li class="py-2">
            <nuxt-link to="/" exact class="footer-link">FAQ</nuxt-link>
          </li>
          <li class="py-2">
            <nuxt-link to="/" exact class="footer-link">blog</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="p-5">
        <h1
          class="text-xl font-bold text-dark-gray py-2 flex items-normal justify-normal flex-row text-left w-60"
        >
          <img
            src="~/assets/img/subscribe.svg"
            alt="subscribe icon footer"
            width="40"
            class="mx-2"
          />
          SUBSCRIBE TO OUR NEWSLETTER
        </h1>
        <p class="text-dark-gray py-3 w-64">
          All the latest & best offers delivered right to your inbox. Subscribe
          now!
        </p>
        <form
          class="w-auto bg-gray-200 flex items-center justify-between flex-row rounded-full"
        >
          <input
            type="email"
            name="email"
            id="email"
            required
            autocomplete="off"
            spellcheck="true"
            placeholder="Enter email address"
            class="placeholder-gray-400 font-medium text-main-size-6 h-full bg-transparent w-52 px-4 py-2"
          />
          <button
            class="bg-orange text-white py-2 px-4 rounded-full border-none text-center"
            name="submit-sub"
            id="submitSubscribeBtn"
            aria-label="submit subscribe buttion"
          >
            Subscribe
          </button>
        </form>
        <ul
          class="list-none flex items-start justify-start flex-row flex-wrap my-3 mt-10"
        >
          <li
            class="inline-flex items-center justify-around bg-gray-200 rounded-md w-12 h-8 mx-1"
          >
            <img src="~/assets/img/visa.svg" alt="visa icon" width="30" />
          </li>
          <li
            class="inline-flex items-center justify-center bg-gray-200 rounded-md w-12 h-8 mx-1"
          >
            <img src="~/assets/img/mastercard.svg" alt="visa icon" width="30" />
          </li>
          <li
            class="inline-flex items-center justify-center bg-gray-200 rounded-md w-12 h-8 mx-1"
          >
            <img src="~/assets/img/paypal.svg" alt="visa icon" width="18" />
          </li>
        </ul>
      </div>
    </div>
    <div class="w-full h-auto bg-dark-gray text-gray-300">
      <div
        class="2xl:container flex items-center justify-between flex-wrap text-center py-3 px-2 mx-auto"
      >
        <p class="capitalize p-3">
          Copyright © 2020 Switch Electronics & Appliances. All Rights Reserved
        </p>
        <p class="p-3">
          <nuxt-link to="/" class="no-underline" exact>About us</nuxt-link>
          .
          <nuxt-link to="/" class="no-underline" exact
            >Terms of Usage</nuxt-link
          >
          .
          <nuxt-link to="/" class="no-underline" exact
            >Privacy Policy</nuxt-link
          >
          .
          <nuxt-link to="/" class="no-underline" exact>Return Policy</nuxt-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer-container {
  border-top: 1px solid #707070;
}
.footer-link {
  @apply no-underline text-dark-gray capitalize;
}
</style>