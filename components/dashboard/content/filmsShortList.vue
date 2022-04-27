<template>
  <div class="mb-16 flex gap-4 flex-wrap">
    <div v-for="i in 10" :key="i" class="mb-4 anim-float transition-all cursor-pointer">
      <div class="relative w-64 mb-2">
        <img class="rounded" src="https://m.media-amazon.com/images/I/71w8C9a0pmL._AC_SY679_.jpg" alt="">
        <span class="absolute top-0 right-0 rounded-full bg-green-400 p-1 m-2 text-xs text-slate-800">4.5</span>
      </div>
      <p class="text-xs text-gray-300">
        2013 - Science-fiction
      </p>
      <h3 class="text-sm">
        Oblivion
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  setup () {

  }
}
</script>

<style lang="scss" scoped>
.anim-float:hover{
    margin-top: -5px;
}
</style>
