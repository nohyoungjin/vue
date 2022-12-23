<template>
  <div class="wrap">
    <h1 class="block mt-[20px]">영화 예매 순위</h1>
    <ul class="movies">
      <li v-for="movie in movies" class="item mt-[10px]" :key="movie.id">
        <span class="rank">{{ movie.id }}</span>
        <div>
          <div class="block w-[200px] margin-auto mx-[auto]">
            <img :src="movie.poster" class="block w-[100%] h-[100%]">
          </div>
          <div class="mt-[10px] mb-[10px]">
            <strong>{{ movie.name }}</strong><br>
            <span class="rate">예매율 <span class="num">{{ movie.rate }}</span></span><br>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
  
<script>
import axios from 'axios'

export default {
  created () {         
    axios.get('/api/movies')
        .then((response) => {
          this.movies = response.data
        })
  },
  data () {
    return {
      movies: []
    }
  }
}
</script>