<template>
  <div class="mt-4 -mb-3">
    <div class="not-prose mb-4">
      <div class="flex space-x-2">
        </div></div><div class="not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25"><div class="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" style="background-position: 10px 10px;"></div><div class="relative rounded-xl overflow-auto">
  <div class="max-w-sm mx-auto bg-white shadow pt-6 pb-4 px-6">

      <div>
        <label for="id" class="block text-sm font-medium text-slate-700 text-left">아이디</label>
        <div class="mt-1">
          <input type="text" id="id" v-model="user.userid" class="px-3 py-2 bg-white border shadow-sm border-slate-200 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" placeholder="000-00-0000">
          <p class="mt-2 text-sm text-slate-600 opacity-10 contrast-more:opacity-100">&nbsp;</p>
        </div>
      </div>

      <div>
        <label for="password" class="block text-sm font-medium text-slate-700 text-left">비밀번호</label>
        <div class="mt-1">
          <input type="password" id="password" v-model="user.password" class="px-3 py-2 bg-white border shadow-sm border-slate-200 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" placeholder="000-00-0000">
          <p class="mt-2 text-sm text-slate-600 opacity-10 contrast-more:opacity-100"></p>
        </div>
      </div>     
      <button v-on:click="login">로그인</button> &nbsp;
      <a href="/signUp">가입하기</a>
  </div>
</div><div class="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5"></div></div></div>

</template>

<script>

const axios = require('axios')

export default {
  data: function() {
    return {
      user: {
        userid: "",
        password: "",
      }
    }
  },
  methods: {
    login: function() {
      axios.post('/api/user/login', {
        user: this.user
      })
      .then(
        (res) => {
          // 로그인 성공
          alert(res.data.message)
      })
    }
  }
}

</script>