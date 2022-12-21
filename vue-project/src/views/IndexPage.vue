<template>
  <div class="wrap">
    <h1 class="block mt-[20px]">5월 마지막주 영화 예매 순위</h1>
    <ul class="movies">
      <li v-for="movie in movies" class="item mt-[10px]" :key="movie.id">
        <span class="rank">{{ movie.id }}</span>
        <div class="detail">
          <img :src="movie.poster" class="inline-block text-center">
          <strong class="block mt-[10px]">{{ movie.name }}</strong><br>
          <span class="rate">예매율 <span class="num">{{ movie.rate }}</span></span><br>
        </div>
      </li>
    </ul>
  </div>
</template>
  
<script>
// import axios from 'axios'

export default {
  created () {         
    // axios.get('https://nohyoungjin.github.io/apitest/movies.json')
    this.$http.get('/api/movies')
        .then((response) => {
          this.movies = response.data
        })
  },
  data () {
    return {
      movies: []
    }
  },
  mounted: () => {
    console.log(this.$http);
  }
}
</script>