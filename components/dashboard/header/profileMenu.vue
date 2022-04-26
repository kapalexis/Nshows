<template>
  <router-link to="#">
    <div class="w-32 flex gap-2 items-center justify-end text-white border-l-[1px] border-[#ffffff20]">
      <div class="flex flex-col items-end">
        <h3 class="text-xs opacity-40">
          Hello
        </h3>
        <p class="text-xs">
          Joker
        </p>
      </div>
      <div class="rounded-full bg-green-400 h-16 w-16 flex justify-center items-center">
        <div class="rounded-full bg-white h-14 w-14">
          <img src="~/assets/joker-avatar.png" class="h-full w-full object-cover rounded-full" alt="">
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>
