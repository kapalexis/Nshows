<template>
  <div>
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
        v-for="(film, index) in filmsSliced"
        :key="film.id"
        :to="'/' + film.id"
        class=" flex flex-col items-center mb-4 transition-all"
      >
        <div class="justify-start h-full anim-float  relative mb-2">
          <img class="rounded h-full object-cover" :src="`https://image.tmdb.org/t/p/w500/${film.poster_path}`" alt="">
          <span class="absolute top-0 right-0 rounded-full bg-green-400 p-1 m-2 text-xs text-slate-800">{{ film.vote_average }}</span>
        </div>
        <div class="w-full flex flex-col items-start ">
          <p class="text-xs text-gray-300">
            {{ film.release_date.slice(0,4) }} - Science-fiction
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
      films: []
    }
  },
  computed: {
    filmsSliced () {
      return this.films.slice(0, 6)
    }

  },
  mounted () {
    this.getFilms()
    console.log(this.films)
  },
  methods: {
    async getFilms () {
      const data = axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=ad7399fec8dfdb5f2a5a29d4d3c11e0d&language=fr-FR')
      const result = await data
      // console.log(result)
      result.data.results.forEach((film) => {
        this.films.push(film)
        // console.log(film)
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
