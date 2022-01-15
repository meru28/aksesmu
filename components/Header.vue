<template>
  <nav class="bg-white shadow-lg shadow-gray-500 sticky top-0 z-40">
    <div class="container md:max-w-6xl mx-auto px-4 py-4">
      <div :class="[isOpenMenu || isOpenLang ? 'backdrop-blur-sm bg-black/20 fixed inset-0 top-[81px] w-full h-full' : '']" />
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <!-- Mobile menu button-->
          <div class="md:hidden">
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
          </div>
          <div class="ml-0 shrink">
            <nuxt-link to="/en-US">
              <i class="amr-aksesmu text-4xl text-mainlogo" />
            </nuxt-link>
          </div>
        </div>
        <div class="flex items-baseline">
          <div class="hidden md:block">
            <nav v-for="(navTitle, idx) in headerMenu" :key="idx" class="inline-flex space-x-4">
              <a href="#" class="px-3 py-2 active:border-b-2 text-sm focus:border-b-3 visited:text-purple-600 focus:border-b-bgmainlogo active:border-b-bgmainlogo active:text-green-700 font-medium ">{{ $t(navTitle) }}</a>
            </nav>
          </div>
          <section class="flex" name="language-switcher">
            <i class="amr-lang-switch text-primary text-md font-extrabold" />
            <div class="ml-2">
              <select v-model="$i18n.locale" class="bg-white focus:outline-none text-primary text-lg font-extrabold">
                <option v-for="(lang, i) in langs" :key="`lang${i}`" :value="lang.value" class="focus:outline-none">
                  {{ lang.title }}
                </option>
              </select>
            </div>
          </section>
        </div>
      </div>
      <div class="absolute w-80 bg-white md:hidden left-0 top-20 pb-5 shadow-lg shadow-gray-500" :class="[isOpenMenu ? '' : 'hidden']">
        <div class="ml-6 pt-2 mr-3 divide-y divide-gray border-b border-gray">
          <div v-for="(navTitle, i) in headerMenu" :key="i" class="flex justify-between items-center">
            <a
              href="#"
              class="mt-1 block flex-grow py-2 text-sm font-bold text-primary hover:rounded-lg hover:pl-2 hover:text-white hover:bg-gray-700 focus:rounded-lg focus:pl-2 focus:outline-none focus:text-white focus:bg-gray-700">
              {{ $t(navTitle) }}
            </a>
            <span class="inline-block text-mainlogo">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
        <div class="ml-6 pt-2">
          <h4 class="rounded-md text-base font-medium text-gray-400">
            {{ $t(home.content_fitur.judul) }}
          </h4>
        </div>
        <div class="pt-1">
          <div class="ml-6 divide-y divide-gray mr-3">
            <div v-for="(navTitle2, idx) in home.content_fitur.fitur" :key="idx" class="flex justify-between items-center">
              <div class="flex-shrink-0">
                <img
                  class="w-6"
                  :src="navTitle2.img_src"
                  alt>
              </div>
              <a href="#" class="text-sm font-bold flex-grow py-2 ml-[10px] text-black hover:rounded-lg hover:py-2 hover:pl-[7px] hover:text-white hover:bg-gray-700 focus:rounded-lg focus:pl-2 focus:outline-none focus:text-white focus:bg-gray-700">
                {{ $t(navTitle2.title) }}
              </a>
              <span class="inline-block flex-none text-mainlogo">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from '@nuxtjs/composition-api'
import home from 'static/home'
export default {
  name: 'HeaderAksesmu',
  setup () {
    const isOpenLang = ref(false)
    const toggleLang = () => {
      isOpenLang.value = !isOpenLang.value
    }
    const isOpenMenu = ref(false)
    const toggleMenu = () => {
      isOpenMenu.value = !isOpenMenu.value
    }
    const langs = ref([
      { title: 'ID', value: 'id-ID' },
      { title: 'EN', value: 'en-US' }
    ])
    const headerMenu = ref([
      'HEADER.beranda',
      'HEADER.perusahaan',
      'HEADER.bantuan',
      'HEADER.karir'
    ])
    return {
      headerMenu,
      isOpenLang,
      toggleLang,
      toggleMenu,
      isOpenMenu,
      langs,
      home
    }
  }
}
</script>
