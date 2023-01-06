<template>
    <div class="app">
      <br />
      <Form @submit="signUp">
      <div class="input_row">
        <label for="id">아이디</label>
        <input type="text" name="id" id="id" v-model="user.userid" />
      </div>
      <div class="input_row">
        <label for="name">이름</label>
        <input type="text" id="name" v-model="user.name" />
      </div>
      <div class="input_row">
        <label for="password">비밀번호</label>
        <input type="password" id="password" v-model="user.password" />
      </div>
      <button>가입하기</button>
      <!-- <button @click="signUp">가입하기</button> -->
      </Form>
    </div>
  </template>

<script>

import axios from 'axios'

export default {

  methods: {
    signUp: function() {
      axios.post('/api/user/signUp', {
          user: this.user
      })
      .then((res) => {
        if (res.data.success == true) {
          alert(res.data.message)
          this.$router.push("/bodLogin")
        }
        if (res.data.success == false) {
          alert(res.data.message)
        }
      })
    }  
  },
  data() {
    return {
      user: {
        userid: "",
        name: "",
        password: ""
      },
    }
  },
}

</script>