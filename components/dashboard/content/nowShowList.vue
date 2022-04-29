<template>
  <div>
    <div>
      <h2 class="text-2xl font-bold uppercase">
        À voir maintenant
      </h2>
      <p class="pb-4">
        Découvrez de nouveaux films !
      </p>
    </div>
    <div
      class="
    grid-rows-1
    w-full mb-16
    grid
    grid-cols-2
    gap-4
    sm:grid-cols-2
    md:grid-cols-3
    xl:grid-cols-6"
    >
      <NuxtLink
        v-for="(film, index) in popularFilmsSliced"
        :key="film.id"
        :to="'/films/' + film.id"
        class=" flex flex-col items-center mb-4 transition-all"
      >
        <div class="justify-start h-full anim-float  relative mb-2">
          <img class="rounded h-full max-h-fit object-cover" :src="`https://image.tmdb.org/t/p/w500/${film.poster_path}`" alt="">
          <span class="absolute top-0 right-0 rounded-full bg-green-400 p-1 m-2 text-xs text-slate-800">{{ film.vote_average }}</span>
        </div>
        <div class="w-full flex flex-col items-start ">
          <p class="text-xs text-gray-300">
            {{ film.release_date.slice(0,4) }}
          </p>
          <h3 class="text-sm">
            {{ film.title }}
          </h3>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  setup () {

  },
  data () {
    return {
      popularFilms: []
    }
  },
  computed: {
    popularFilmsSliced () {
      return this.popularFilms.slice(0, 6)
    }

  },
  mounted () {
    this.getPopularFilms()
    console.log(this.popularFilms)
  },
  methods: {
    async getPopularFilms () {
      const data = axios.get('https://api.themoviedb.org/3/discover/movie?api_key=ad7399fec8dfdb5f2a5a29d4d3c11e0d&language=fr-FR&sort_by=release_date.desc&include_adult=false&include_video=true&page=1&primary_release_date.lte=2022-05-01&vote_count.gte=50&with_watch_monetization_types=flatrate')
      const result = await data
      // console.log('pop', result.data.results)
      result.data.results.forEach((film) => {
        this.popularFilms.push(film)
        console.log('popfilms', film)
      })
      // console.log(this.films)
    }
  }
}

/* https://api.themoviedb.org/3/trending/movie/week?api_key=ad7399fec8dfdb5f2a5a29d4d3c11e0d */
</script>

<style lang="scss" scoped>
.anim-float:hover{
    margin:-5px;
    transition: margin 0.25s;
}
</style>
