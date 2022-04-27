<template>
  <NuxtLink :to="linkedTo" class="h-14 w-14 border-l-2 border-transparent flex flex-col justify-start items-center py-4 gap-4 text-gray-300 hover:text-green-400 hover:border-l-2 hover:border-green-400 transition-all">
    <slot />
  </NuxtLink>
</template>

<script>
export default {
  props: {
    linkedTo: { type: String, default: '/' }
  }

}
</script>

<style lang="scss" scoped>

</style>
