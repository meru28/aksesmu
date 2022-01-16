<template>
  <div class="container mx-auto">
    <BannerComponent :data="home" :button-true="true" />
    <div class="bg-gray-200 px-4 py-10">
      <h3 class="text-md text-primary font-extrabold">
        {{ $t(home.content_fitur.judul) }}
      </h3>
      <div class="mt-4 grid grid-cols-3 gap-3">
        <div v-for="(content, i) in home.content_fitur.fitur" :key="i" class="bg-white rounded-xl grid content-center h-18 rectangle shadow-lg shadow-gray-400 py-2 overflow-scroll">
          <div class="px-3">
            <img class="w-1/4" :src="content.img_src" alt="belanja">
          </div>
          <h4 class="text-gray-900 text-res font-extrabold px-3">
            {{ $t(content.title) }}
          </h4>
        </div>
      </div>
      <div class="relative grid grid-cols-4 pb-4">
        <div class="relative -mr-14 z-10 inset-0">
          <img class="absolute -bottom-8" style="width:50vw" src="~/assets/images/Group 27.png" alt="">
        </div>
        <div class="relative col-span-3 aspect-square h-auto mt-7 rounded-tl-[57px] rounded-tr-[20px] rounded-b-[20px] -ml-9 overflow-hidden">
          <img class="object-cover h-full" src="~/assets/images/toko.png" alt="">
          <p class="absolute h-full w-full -mt-32 top-2/4 text-white p-7 text-res text-justify" style="line-height:5vw;">
            {{ $t(home.deskripsi) }}
          </p>
        </div>
      </div>
    </div>
    <div class="bg-white mb-8">
      <img class="w-full" src="~/assets/images/home-2.png" alt="home-2">
      <div class="px-4 mt-5 sm:pr-0">
        <h2 class="text-primary text-2xl font-extrabold text-left tracking-tight md:tracking-tighter sm:tracking-tighter">
          {{ $t(home.bergabung) }}
        </h2>
        <p class="text-black text-xs pt-2 leading-4">
          {{ $t(home.bergabung_desc) }}
        </p>
      </div>
    </div>
    <carousel-campaign-component :data="home" />
    <div class="grid grid-rows-3 place-items-center w-screen bg-gray-200 py-9 justify-center">
      <h3 class="text-base text-black font-bold">
        Cara Pakai Aplikasi Aksesmu
      </h3>
      <div class="row-span-2 border-b border-b-gray-300 py-2">
        <ul class="flex justify-center text-xs text-[#19B562] font-bold">
          <li class="mx-4">
            Daftar
          </li>
          <li class="mx-4">
            Aktivasi Pembayaran Tempo
          </li>
          <li class="mx-4">
            Belanja Stok
          </li>
        </ul>
      </div>
      <!-- 'translate-x-full' : 'translate-x-0' -->
      <iphone :data="home" />
    </div>
  </div>
</template>
<script>
import { ref } from '@nuxtjs/composition-api'
import home from 'static/home'
import BannerComponent from '~/components/Banner-Component.vue'
import Iphone from '~/components/Mockup-Iphone.vue'
import CarouselCampaignComponent from '~/components/Carousel-Campaign.vue'
export default {
  name: 'IndexPage',
  components: {
    BannerComponent,
    Iphone,
    CarouselCampaignComponent
  },
  setup () {
    const carousel0 = ref(null)
    const carousel1 = ref(null)
    const carousel2 = ref(null)
    const carouselTrack = ref(null)

    const nextSlide = (item) => {
      // console.log('cek carousel2 ::', carousel2.value.nextElementSibling)
      // console.log('cek classList', carousel.value)
      if (item === 2) {
        carousel1.value[0].classList.remove('translate-x-0')
        carousel1.value[0].classList.add('-translate-x-full')
        carousel1.value[0].previousElementSibling.classList.remove('translate-x-full')
        carousel1.value[0].previousElementSibling.classList.add('translate-x-0')
      } else {
        carousel0.value[0].classList.remove('translate-x-0')
        carousel0.value[0].classList.add('-translate-x-full')
        carousel0.value[0].nextElementSibling.classList.remove('translate-x-full')
        carousel0.value[0].nextElementSibling.classList.add('translate-x-0')
      }
    }

    return {
      home,
      carousel0,
      carousel1,
      carousel2,
      carouselTrack,
      nextSlide
    }
  }
}
</script>
