<template>
  <div class="flex flex-col gap-8">
    <NuxtLink class="w-fit" to="/">
      <input class="anim-float cursor-pointer bg-green-400 text-slate-800 p-2 rounded" type="button" value="Retour">
    </NuxtLink>
    <div class="flex gap-8">
      <div>
        <img class="w-fit h-fit rounded" :src="`https://image.tmdb.org/t/p/w500/${showDetails.poster_path}`" alt="">
      </div>
      <div class="flex flex-col gap-2">
        <h2 class="text-[3em]">
          {{ showDetails.title }}
        </h2>
        <div class="flex gap-4">
          <span class="bg-green-100 w-fit p-1 text-slate-800 text-xs rounded">
            {{ showDetails.release_date }}
          </span>
          <span class="bg-green-100 w-fit p-1 text-slate-800 text-xs rounded">
            {{ showDetails.release_date }}
          </span>
          <span class="bg-green-100 w-fit p-1 text-slate-800 text-xs rounded">
            {{ showDetails.runtime }} min
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      showDetails: []

    }
  },
  computed: {
    showDetailsSliced () {
      return this.showDetails
    }

  },
  mounted () {
    this.getShowDetails()

    // console.log(this.showDetails)
  },
  methods: {
    async getShowDetails () {
      const data = axios.get(`https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=ad7399fec8dfdb5f2a5a29d4d3c11e0d&language=fr-FR`)
      const result = await data
      this.showDetails = result.data
      console.log(this.showDetails)
    }

  }
}

/* https://api.themoviedb.org/3/trending/movie/week?api_key=ad7399fec8dfdb5f2a5a29d4d3c11e0d */
</script>
