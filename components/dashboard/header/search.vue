<template>
  <div class="flex flex-row items-center justify-center ">
    <div class="xl:w-96 flex items-center ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-10 text-green-400 absolute pl-1 opacity-50"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input
        id="exampleSearch"
        type="search"
        class="
        form-control
        pl-10
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-xs
        text-white
        bg-transparent
        border border-solid border-transparent
        rounded
        transition
        ease-in-out
        m-0
        opacity-50 focus:opacity-100
        focus:border-green-400 focus:outline-none
      "
        placeholder="Rechercher..."
      >
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>
