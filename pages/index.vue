<template>
  <div class="container mx-auto">
    <img class="bg-mainlogo w-full" src="~/assets/images/home-1.png" alt="home">
    <div class="bg-bgchome py-6 px-4 box-border">
      <div>
        <h1 class="text-2xl md:text-4xl text-white font-bold">
          {{ $t(home.kemudahan) }}
        </h1>
        <div class="grid grid-cols-3">
          <img class="order-last self-end -mb-16" src="~/assets/images/image web/home-hp.png" style="width: 28vw" alt="hp">
          <div class="grid grid-cols-1 col-span-2 place-content-center">
            <p class="mt-2 text-white text-res font-light">
              {{ $t(home.akses) }}
            </p>
            <button class="bg-btn_success text-res mt-3 text-white rounded-xl py-2 px-4 mx-8 ml-1">
              {{ $t(home.btn_download) }}
            </button>
          </div>
        </div>
      </div>
    </div>
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
          <p class="absolute h-full w-full -mt-28 top-2/4 text-white p-7 text-res text-justify" style="line-height:5vw;">
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
    <div class="container bg-creamy h-[280px] pb-[304px]">
      <div class="max-w-4xl mx-auto grid grid-rows-1 relative text-center">
        <div class="pt-[15px] pb-6">
          <h3 class="w-full text-lg text-black font-bold">
            {{ $t(home.content_fitur.judul) }}
          </h3>
        </div>
        <div>
          <div v-for="(item, index) in home.carousel_campaign" :key="index">
            <div class="relative">
              <p class="absolute text-sm inset-0 top-[165px] flex items-center justify-center mb-4" :class="[activeSlideCampaign != index ? 'hidden' : 'block']">
                {{ $t(item.title) }}
              </p>
            </div>
            <div class="relative">
              <div class="absolute inset-0 top-16 flex items-center justify-center transform slide" :class="[activeSlideCampaign != index ? 'hidden' : 'block']">
                <img class="w-4/5" :src="item.img_src" alt="">
              </div>
            </div>
            <div class="relative">
              <div class="absolute inset-0 top-44 px-4">
                <button
                  class="h-2 mt-4 mx-2 mb-0 rounded-full overflow-hidden transition-colors duration-200 ease-out hover:bg-teal-600 hover:shadow-lg"
                  :class="[activeSlideCampaign != index ? 'bg-gray-600 w-2' : 'bg-mainlogo w-4', index === 0 ? '-translate-x-6' : index === 2 ? 'translate-x-6' : '']"
                  @click="activeSlideCampaign = index" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <button class="bg-primary text-white">prev</button>
      <button class="bg-primary text-white">next</button> -->
    </div>
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
      <div class="iphone-x">
        <s class="font-bold">1. Download & install aplikasi Aksesmu</s>
        <div class="relative inner overflow-hidden hp">
          <template v-for="(slide, indxx) in home.carousel_hp">
            <img
              :key="indxx"
              :ref="`carousel` + indxx"
              class="absolute object-cover inset-0 h-full transition-all ease-in-out duration-1000 transform translate-x-0 slide"
              :class="[activeSlideIndex != indxx ? 'hidden' : 'block']"
              :src="slide.img_src">
          </template>
        </div>
        <div class="flex justify-center items-center">
          <div v-for="(btn, uhh) in test" :key="uhh">
            <button
              class="span h-2 rounded-full overflow-hidden transition-colors duration-200 ease-out hover:bg-teal-600 hover:shadow-lg" @click="activeSlideIndex = uhh" :class="[activeSlideIndex != uhh ? 'bg-gray-600 w-2': 'bg-mainlogo w-4', uhh === 0 ? '-translate-x-4' : uhh === 2 ? 'translate-x-4' : '']" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, onMounted } from '@nuxtjs/composition-api'
import home from 'static/home'
export default {
  name: 'IndexPage',
  setup () {
    const root = ref(null)
    const carousel0 = ref(null)
    const carousel1 = ref(null)
    const carousel2 = ref(null)
    const carouselTrack = ref(null)
    const activeSlideCampaign = ref(0)
    const activeSlideIndex = ref(0)
    const idxCarousel = ref(0)
    const test = ref([
      0, 1, 2
    ])
    onMounted(() => {
      const uhuy = carousel0.value[0]
      // const track = Array.from(uhuy.children)
      // console.log('cek carousel 2 ::', uhuy)
      console.log('cek list carousel ::', uhuy.nextElementSibling)
      // root.value.classList.remove('translate-x-0')
      // root.value.classList.add('-translate-x-full')
    })

    const dotNav = (e) => {
      console.log('cekk e ::', e)
    }
    const onInitCarousel = () => {
      // console.log(' ashahsd')
    }

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
      root,
      carousel0,
      carousel1,
      carousel2,
      carouselTrack,
      activeSlideCampaign,
      nextSlide,
      idxCarousel,
      onInitCarousel,
      dotNav,
      activeSlideIndex,
      test
    }
  }
}
</script>
<style lang="scss">
  .device-wrapper {
    max-width: 40vw;
  }
.iphone-x {
  position: relative;
  .inner {
    position: relative;
    margin: 40px 10px 97px;
    width: 58vw;
    height: auto;
    background-color: #292929;
    border-radius: 40px;
    box-shadow: 0px 0px 0px 9px #1f1f1f, 0px 0px 0px 11px #191919, 0px 0px 0px 18px #111;
     &:before,
  &:after{
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  // home button indicator
  &:after {
    bottom: 7px;
    width: 140px;
    height: 4px;
    background-color: #f2f2f2;
    border-radius: 10px;
  }
  }
  &:after {
    bottom: 7px;
    width: 140px;
    height: 4px;
    background-color: #f2f2f2;
    border-radius: 10px;
  }

  // frontal camera/speaker frame
  &:before {
    top: 0px;
    width: 56%;
    height: 30px;
    background-color: #1f1f1f;
    border-radius: 0px 0px 40px 40px;
  }

  i,
  b,
  s,
  span {
    position: absolute;
    display: block;
    color: transparent;
  }

  // speaker
  i {
    top: 0px;
    left: 50%;
    transform: translate(-50%, 6px);
    height: 8px;
    width: 15%;
    background-color: #101010;
    border-radius: 8px;
    box-shadow: inset 0px -3px 3px 0px rgba(256, 256, 256, 0.2);
  }
  // camera
  b {
    left: -11%;
    top: 0px;
    transform: translate(180px, 4px);
    width: 12px;
    height: 12px;
    background-color: #101010;
    border-radius: 12px;
    box-shadow: inset 0px -3px 2px 0px rgba(256, 256, 256, 0.2);

    &:after {
      content: '';
      position: absolute;
      background-color: #2d4d76;
      width: 6px;
      height: 6px;
      top: 2px;
      left: 2px;
      top: 3px;
      left: 3px;
      display: block;
      border-radius: 4px;
      box-shadow: inset 0px -2px 2px rgba(0, 0, 0, 0.5);
    }
  }

  // time
  s {
    bottom: 27px;
    color: black;
    text-align: center;
    text-decoration: none;
    width: 100%;
  }

  // action buttons
  span {
    border-radius: 50%;
    left: 107px;

    & + span {
      left: auto;
      right: 30px;
    }
  }
}
</style>
