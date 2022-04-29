<template>
  <div
    class="hidden h-[calc(100vh_-_5em)] z-0 fixed top-20 left-0 bg-slate-500 shadow-xl transition-all sm:flex drawer"
    :class="{'toggle': $store.state.drawerOpen}"
  >
    <!-- Icons -->

    <dashboardSidebarIconsMenu />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.drawer{
  width:4em;

}
.toggle{
  width:10em;
  transition: width 0.2s ease-out;
}
</style>
