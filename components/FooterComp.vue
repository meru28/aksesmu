<template>
  <footer as="div" class="container p-4 bg-bgchome mx-auto">
    <div class="grid grid-cols-2 gap-5 text-white">
      <div class="col-span-2 -mb-3">
        <i class="amr-aksesmu text-[50px] -ml-2" />
      </div>
      <div class="text-sm font-bold">
        <h3>Perusahaan</h3>
        <h3>Karir</h3>
        <h3>Bantuan</h3>
      </div>
      <div class="text-sm font-bold">
        <h3>Ikuti Kami</h3>
        <div class="flex justify-around items-center text-xl ">
          <i class="amr-instagram" />
          <i class="grow amr-youtube ml-2" />
        </div>
      </div>
      <div class="text-sm">
        <h3 class="font-bold">Hubungi Kami</h3>
        <div class="flex justify-around items-center">
          <i class="amr-whatsapp" />
          <span class="grow">0811 1955 6999</span>
        </div>
        <div class="flex justify-around items-center">
          <i class="amr-envelope" />
          <span class="grow">cs@alfamikro.com</span>
        </div>
      </div>
      <div class="text-sm font-bold">
        <h3>Unduh Aplikasi</h3>
        <img class="w-3/4" src="~/assets/images/download button.png" alt="donlog">
      </div>
      <div class="col-span-2 border-t border-t-white pt-4">
        <p class="text-xs text-center">Copyright 2022 PT Sumber Trijaya Lestari</p>
      </div>
    </div>
  </footer>
</template>

<script>

export default {
  name: 'FooterElm',
  setup () {
    return {}
  }
}
</script>
