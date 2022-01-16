<template>
  <div class="iphone-x">
    <s class="font-bold">1. Download & install aplikasi Aksesmu</s>
    <div class="relative inner overflow-hidden hp shadow-md shadow-gray-600">
      <template v-for="(slide, indxx) in data.carousel_hp">
        <nuxt-img
          :key="indxx"
          :ref="`carousel` + indxx"
          class="absolute object-cover inset-0 h-full transition-all ease-in-out duration-1000 transform translate-x-0 slide"
          :class="[activeSlideIndex != indxx ? 'hidden' : 'block']"
          :src="slide.img_src" />
      </template>
    </div>
    <div class="flex justify-center items-center">
      <div v-for="(btn, uhh) in test" :key="uhh">
        <button
          class="span h-2 rounded-full overflow-hidden transition-colors duration-200 ease-out hover:bg-teal-600 hover:shadow-lg" @click="activeSlideIndex = uhh" :class="[activeSlideIndex != uhh ? 'bg-gray-600 w-2': 'bg-mainlogo w-4', uhh === 0 ? '-translate-x-4' : uhh === 2 ? 'translate-x-4' : '']" />
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from '@nuxtjs/composition-api'
export default {
  name: 'MockupIphone',
  props: {
    data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  setup () {
    const activeSlideIndex = ref(0)
    const test = ref([
      0, 1, 2
    ])

    return {
      activeSlideIndex,
      test
    }
  }
}
</script>
<style lang="scss" scoped>
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
