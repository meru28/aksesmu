<template>
  <nav class="bg-white shadow-lg shadow-gray-500 sticky top-0 z-40">
    <div class="mx-auto px-4 py-4">
      <div :class="[isOpenMenu ? 'backdrop-blur-sm bg-black/20 fixed inset-0 top-[81px] w-full h-full' : '']" />
      <div class="flex items-center justify-between">
        <div class="inset-y-0 left-0 flex items-center">
          <!-- Mobile menu button-->
          <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false" @click="toggleMenu">
            <span class="sr-only">Open main menu</span>
            <svg
              :class="[isOpenMenu ? 'hidden' : 'block', 'h-8 w-8']"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              :class="[isOpenMenu ? 'block' : 'hidden', 'h-8 w-8']"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div class="ml-0 relative">
            <div>
              <i class="amr-aksesmu text-5xl text-mainlogo" />
              <!--              <button type="button" class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">-->
              <!--                <span class="sr-only">Open user menu</span>-->
              <!--                <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">-->
              <!--              </button>-->
            </div>
          </div>
        </div>
        <div class="right-0 flex items-center">
          <i class="amr-lang-switch text-primary text-md font-extrabold" />
          <div class="ml-2 relative">
            <select v-model="$i18n.locale" class="focus:outline-none text-primary text-lg font-extrabold">
              <option v-for="(lang, i) in langs" :key="`lang${i}`" :value="lang.value">
                {{ lang.title }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="absolute w-80 bg-white left-0 top-20 shadow-lg shadow-gray-500" :class="[isOpenMenu ? '' : 'hidden']">
        <div class="ml-6 pt-2 mr-3 divide-y divide-gray border-b border-gray">
          <div class="flex justify-between items-center">
            <a
              href="#"
              class="mt-1 block py-2 text-sm font-extrabold text-primary hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Beranda
            </a>
            <span class="inline-block text-mainlogo">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
          <div class="flex justify-between items-center">
            <a
              href="#"
              class="mt-1 block py-2 text-sm font-extrabold text-primary hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Perusahaan
            </a>
            <span class="inline-block text-mainlogo">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
          <div class="flex justify-between items-center">
            <a
              href="#"
              class="mt-1 block py-2 text-sm font-extrabold text-primary hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Bantuan
            </a>
            <span class="inline-block text-mainlogo">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
          <div class="flex justify-between items-center">
            <a
              href="#"
              class="mt-1 block py-2 text-sm font-extrabold text-primary hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Karir
            </a>
            <span class="inline-block text-mainlogo">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
        <div class="pt-4">
          <div class="flex items-center px-5">
            <div class="flex-shrink-0">
              <img
                class="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt>
            </div>
            <div class="ml-3">
              <div class="text-base font-medium leading-none text-white">
                Tom Cook
              </div>
              <div
                class="mt-1 text-sm font-medium leading-none text-gray-400">
                tom@example.com
              </div>
            </div>
          </div>
          <div class="mt-3 px-2">
            <a
              href="#"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Your Profile</a>
            <a
              href="#"
              class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Settings</a>
            <a
              href="#"
              class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Sign out</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from '@nuxtjs/composition-api'
export default {
  name: 'HeaderAksesmu',
  setup (_, ctx) {
    const isOpenLang = ref(false)
    const isOpenMenu = ref(false)
    const langs = ref([
      // 'id-ID', 'en-US'
      { title: 'ID', value: 'id-ID' },
      { title: 'EN', value: 'en-US' }
    ])
    const toggleLang = () => {
      isOpenLang.value = !isOpenLang.value
    }
    const toggleMenu = () => {
      isOpenMenu.value = !isOpenMenu.value
    }
    return {
      isOpenLang,
      toggleLang,
      toggleMenu,
      isOpenMenu,
      langs
    }
  }
}
</script>
