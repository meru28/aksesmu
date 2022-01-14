<template>
  <div class="container mx-auto">
    <img class="bg-mainlogo w-full" src="~/assets/images/home-1.png" alt="home">
    <div class="bg-bgchome py-6 px-4 box-border">
      <div>
        <h1 class="text-2xl md:text-4xl text-white font-bold">
          {{ $t(home.kemudahan) }}
        </h1>
        <div class="flex">
          <div class="items-center">
            <img class="float-right -mb-28 order-last" src="~/assets/images/image web/home-hp.png" style="width: 35vw" alt="hp">
            <div>
              <p class="mt-2 text-white text-res font-light">
                {{ $t(home.akses) }}
              </p>
              <button class="bg-btn_success mt-3 text-white rounded-2xl px-5 py-2">
                {{ $t(home.btn_download) }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-200 px-4 py-10">
      <h3 class="text-md text-primary font-extrabold">
        {{ $t(home.content_fitur.judul) }}
      </h3>
      <div class="mt-4 grid grid-cols-3 gap-3">
        <div v-for="(content, i) in home.content_fitur.fitur" :key="i" class="bg-white rounded-xl h-18 rectangle shadow-lg shadow-gray-400 lg:w-80 sm:w-48 py-2">
          <div class="pl-3">
            <img class="w-1/4" :src="content.img_src" alt="belanja">
          </div>
          <h4 class="text-gray-900 text-res font-extrabold pl-3">
            {{ $t(content.title) }}
          </h4>
        </div>
      </div>
      <div class="relative grid grid-cols-4 pb-4">
        <div class="relative -mr-14 z-10 inset-0">
          <img class="absolute -bottom-8" style="width:50vw" src="~/assets/images/Group 27.png" alt="">
        </div>
        <div class="relative col-span-3 justify-self-end aspect-square h-auto mt-7 bg-primary rounded-tl-[57px] rounded-tr-[20px] rounded-b-[20px] -ml-9 overflow-hidden">
          <img class="object-cover h-full" src="~/assets/images/toko.png" alt="">
          <p class="absolute -top-2 text-white p-7 text-res text-justify" style="line-height:5vw;">
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
    <div class="bg-creamy text-center py-6">
      <h3 class="text-lg text-black font-bold">
        {{ $t(home.content_fitur.judul) }}
      </h3>
      <div class="flex justify-center img-content mt-6 mb-4">
        <img class="w-72" src="~/assets/images/ilustrasi/home-keuntungan 1.png" alt="">
      </div>
      <p class="text-sm">
        Harga bersaing & Banyak promonya
      </p>
    </div>
  </div>
</template>

<script>
import home from 'static/home'
export default {
  name: 'IndexPage',
  setup () {
    return {
      home
    }
  }
}
</script>
