<template>
  <div class="max-w-[1280px] flex flex-col gap-4 sm:gap-8">
    <NuxtLink class="w-fit" to="/">
      <input class="anim-float cursor-pointer bg-green-400 text-slate-800 p-2 px-8 rounded" type="button" value="Retour">
    </NuxtLink>
    <div class="flex flex-col sm:flex-row gap-2 sm:gap-8">
      <!-- left side -->
      <div class="w-full sm:w-1/3 flex flex-col gap-4">
        <img class=" rounded" :src="`https://image.tmdb.org/t/p/w500/${showDetails.poster_path}`" alt="">
        <input type="button" value="Voir la bande annonce" class="anim-float bg-slate-800 rounded p-2">
      </div>
      <!-- END left side -->

      <!-- right side -->
      <div class="flex flex-col w-full sm:w-2/3 p-1 sm:p-4">
        <div class="">
          <h2 class="text-[3em]">
            {{ showDetails.name }}
          </h2>
          <div class="flex gap-4 flex-wrap">
            <span class="badge">
              {{
                new Date(showDetails.release_date).toLocaleString('fr-fr', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })
              }}

            </span>
            <span class="badge">
              {{ showDetails.runtime }} min
            </span>

            <div class="badge">
              <span v-for="(genre, index) in showDetails.genres" :key="genre.id">
                <template v-if="index > 0">, </template>
                {{ genre.name }}
              </span>
            </div>
          </div>
          <div class="flex gap-4 my-4">
            <img src="@/assets/IMDB_Logo_2016.svg" class="w-12" alt="imdb logo">
            <p><span class="font-bold text-2xl">{{ showDetails.vote_average }}</span>/10 <span class="text-xs">({{ showDetails.vote_count }} votes)</span></p>
          </div>
        </div>
        <p class="text-justify">
          {{ showDetails.overview }}
        </p>
      </div>
      <!-- END right side -->
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      showDetails: [],
      credits: []
    }
  },
  computed: {

  },
  mounted () {
    this.getShowDetails()
    // console.log(this.showDetails)
  },
  methods: {
    async getShowDetails () {
      const data = axios.get(`https://api.themoviedb.org/3/tv/${this.$route.params.id}?api_key=ad7399fec8dfdb5f2a5a29d4d3c11e0d&language=fr-FR&append_to_response=video,credits`)
      const result = await data
      this.showDetails = result.data
      console.log(this.showDetails)
    }
  }
}

/* https://api.themoviedb.org/3/trending/movie/week?api_key=ad7399fec8dfdb5f2a5a29d4d3c11e0d */
</script>

<style>

</style>
