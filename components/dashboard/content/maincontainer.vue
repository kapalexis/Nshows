<template>
  <div
    class="w-screen sm:w-[calc(100%_-_5rem)] min-h-screen sm:ml-20 z-1
    p-8 pt-24 text-white transition-all

  "
    :class="{'sm:ml-40 sm:w-[calc(100%_-_10rem)]': $store.state.drawerOpen}"
  >
    <div v-if="$route.params.id" class="maincontainer">
      <dashboardContentShowDetails />
    </div>
    <div v-else class="">
      <dashboardContentNowShowList />
      <dashboardContentFilmsShortList />
      <dashboardContentSeriesShortList />
    </div>
  </div>
</template>

<script>
export default {
}
</script>
