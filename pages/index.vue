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
      <div class="flex justify-center">
        <div class="device-wrapper deviceLeft">
          <div class="device" data-device="iPhoneX" data-orientation="portrait" data-color="black">
            <div class="screen">
              <!-- PUT CONTENTS HERE -->
            </div>
            <div class="button" data-toggle="popover" data-placement="bottom" data-content="Device buttons are perfectly rendered and can be hooked to links or JavaScript events">
              <!-- You can hook the "home button" to some JavaScript events or just remove it -->
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-centemx-auto">
        <div class="flex iphone-x w-2/4">
          <i>Speaker</i>
          <b>Camera</b>
          <img class="w-full h-full object-fill" src="~/assets/images/home-1.png" alt="">
          <!-- <s>10:24</s> -->
        </div>
      </div>
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
<style lang="scss" scoped>
.device-wrapper {
  max-width: 300px;
  width: 100%; }

.device {
  position: relative;
  background-size: cover; }
  .device::after {
    position: absolute;
    background-size: cover;
    width: 100%;
    height: 100%;
    pointer-events: none; }
  .device .screen {
    position: absolute;
    background-size: cover;
    pointer-events: auto; }
  .device .button {
    position: absolute;
    cursor: pointer; }

.device[data-device="iPhoneX"][data-orientation="portrait"][data-color="black"] {
  padding-bottom: 198.89807163%;
  background-image: url(~/assets/images/device/portrait_black.png);
  z-index: initial;
}
  .device[data-device="iPhoneX"][data-orientation="portrait"][data-color="black"] .screen {
    top: 3.254847645%;
    left: 7.162534435%;
    width: 85.67493113%;
    height: 93.49030471%;
    border: 0px;
    z-index: -1;
  }

.iphone-x {
  position: relative;
  margin: 40px auto;
  width: 360px;
  height: 780px;
  background-color: #7371ee;
  background-image: linear-gradient(60deg, #7371ee 1%,#a1d9d6 100%);
  border-radius: 40px;
  box-shadow: 0px 0px 0px 11px #1f1f1f, 0px 0px 0px 13px #191919, 0px 0px 0px 20px #111;

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
    left: 10%;
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
    top: 50px;
    color: #fff;
    text-align: center;
    text-decoration: none;
    width: 100%;
    font-size: 70px;
    font-weight: 100;
    padding-top: 60px;
  }

  // action buttons
  span {
    bottom: 50px;
    width: 40px;
    height: 40px;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    left: 30px;

    & + span {
      left: auto;
      right: 30px;
    }
  }
}
</style>
