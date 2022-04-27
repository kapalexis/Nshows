<template>
  <router-link to="#">
    <div class="sm:w-32 flex gap-2 items-center justify-end text-white sm:border-l-[1px] border-[#ffffff20] pl-2">
      <div class="hidden sm:flex flex-col items-end">
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
