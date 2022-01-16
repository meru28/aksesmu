<template>
  <div class="bg-creamy h-[280px] pb-[304px]">
    <div class="max-w-4xl mx-auto grid grid-rows-1 relative text-center">
      <div class="pt-[15px] pb-6">
        <h3 class="w-full text-lg text-black font-bold">
          {{ $t(data.content_fitur.judul) }}
        </h3>
      </div>
      <div>
        <div v-for="(item, index) in data.carousel_campaign" :key="index">
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
  </div>
</template>
<script>
import { ref } from '@nuxtjs/composition-api'
export default {
  name: 'CarouselCampaign',
  props: {
    data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  setup () {
    const activeSlideCampaign = ref(0)

    return {
      activeSlideCampaign
    }
  }
}
</script>
