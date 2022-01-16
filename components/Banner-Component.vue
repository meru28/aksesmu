<template>
  <div>
    <img class="bg-mainlogo w-full" :src="data.img_banner" alt="home">
    <div class="bg-bgchome py-6 px-4 box-border">
      <div>
        <h1 class="text-2xl md:text-4xl text-white font-bold">
          {{ $t(data.title) }}
        </h1>
        <div class="grid grid-cols-3">
          <img class="order-last -mb-16" :src="data.img_3D" style="width: 28vw" alt="hp">
          <div class="grid grid-cols-1 col-span-2 place-content-center">
            <p class="mt-2 text-white text-res font-light">
              {{ $t(data.article) }}
            </p>
            <button v-show="buttonTrue" class="bg-btn_success text-res mt-3 text-white rounded-xl py-2 px-4 mx-8 ml-1">
              {{ $t(data.btn_text) }}
            </button>
          </div>
        </div>
      </div>
  </div>
  </div>
</template>
<script>
export default {
  name: 'BannerComponent',
  props: {
    data: {
      type: Object,
      default () {
        return {}
      }
    },
    buttonTrue: {
      type: Boolean,
      default: false
    },
    buttonText: {
      type: String,
      default: ''
    }
  }
}
</script>
