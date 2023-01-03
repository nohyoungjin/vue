<template>
  <div class="hello">
    <div class="input_row">
      <label for="id">아이디</label>
      <input type="text" id="id" v-model="user.userid" />
    </div>
    <div class="input_row">
      <label for="password">비밀번호</label>
      <input type="password" id="password" v-model="user.password" />
    </div>
    <button v-on:click="login">로그인</button>
    <a href="/signUp">가입하기</a>
  </div>
</template>

<script>

const axios = require('axios')

export default {
  data: function () {
    return {
      user: {
        userid: "",
        password: "",
      }
    }
  },
  methods: {
    login: function () {
      axios.post('/api/user/login', {
          user: this.user,
        })
        .then(
          (res) => {
            //로그인 성공
            alert(res.data.message);
          });
    }
  }
};
</script>