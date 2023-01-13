<template>
  <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <div>
        <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
      </div>

      <Form @submit="login" :validation-schema="schema">
        <Field name="id" type="id" v-slot="{ field, errorMessage, meta }">
          <input type="hidden" name="remember" value="true" />
        <div class="field">
          <div class="-space-y-px rounded-md shadow-sm">
            <label for="id" class="sr-only">아이디</label>
            <input class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="아이디" v-model="user.userid" v-bind="field" :class="{ 'is-invalid': !meta.valid && errorMessage }"/>
          </div>
          <span class="errMsg block pt-2 pl-2 pb-2 text-[13px] text-left" v-if="errorMessage && !meta.valid">{{ errorMessage }}</span>
          </div>
        </Field>

        <Field name="password" type="password" v-slot="{ field, errorMessage, meta }">
          <div class="field">
            <div class="-space-y-px rounded-md shadow-sm">
              <label for="pwd" class="sr-only">비밀번호</label>
              <input type="password" class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="비밀번호" v-model="user.password" v-bind="field" :class="{ 'is-invalid': !meta.valid && errorMessage }"/>
            </div>
            <span class="errMsg block pt-2 pl-2 text-[13px] text-left" v-if="errorMessage && !meta.valid">{{ errorMessage }}</span>
          </div>
        </Field>

        <div class="loginErr" v-if="loginErr">로그인에 실패하였습니다.</div>
        <div class="mt-3">
          <button type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" x-description="Heroicon name: mini/lock-closed" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd"></path>
                </svg>
            </span>
            로그인
          </button>
        </div>

        <div class="mt-3 text-[14px]">
          <router-link to="/signUp">가입하기</router-link>
        </div>
      </Form>

    </div>
  </div>

</template>

<script>

const axios = require('axios')

import { Form, Field } from 'vee-validate';
import { object, string } from 'yup';

export default {
  components: {
    Form,
    Field
  },
  data: function() {
    return {
      user: {
        userid: '',
        password: ''
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
          // 쿠키 생성
          // this.$cookies.set('key', this.user.userid, '1')

          //
          this.$store.commit('SET_TEST', this.user.userid)                   
      })
    }
  }, 
  computed: {
    schema: function() {
      return object({
        id: string().required('아이디를 입력해주세요.'),
        password: string().required('비밀번호를 입력해주세요.').matches(/^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[#?!@$%^&*-])(?=.{8,})/,'영문자, 숫자, 특수문자를 조합하여 최소 8자리를 입력해주세요.')
      });
    }
  }
}

</script>