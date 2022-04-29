<template>
  <div
    class="w-screen sm:w-[calc(100%_-_5rem)] min-h-screen sm:ml-20 z-1
    p-2 sm:p-8 pt-24 text-white transition-all

  "
    :class="{'sm:ml-40 sm:w-[calc(100%_-_10rem)]': $store.state.drawerOpen}"
  >
    <div v-if="$route.path.split('/').includes('films')" class="maincontainer">
      <dashboardContentSingleDetailsShowFilmDetails />
    </div>
    <div v-else-if="$route.path.split('/').includes('series')" class="maincontainer">
      <dashboardContentSingleDetailsShowSerieDetails />
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

  data () {
    return {
      url: []
    }
  },
  methods: {
    checkPath () {
      this.url.push($nuxt.$route.path)
    }
  }
}
</script>
