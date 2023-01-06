<template>
  <div class="mt-4 -mb-3">
    <div class="not-prose mb-4">
      <div class="flex space-x-2">
        </div></div><div class="not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25"><div class="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" style="background-position: 10px 10px;"></div><div class="relative rounded-xl overflow-auto">
  <div class="max-w-sm mx-auto bg-white shadow pt-6 pb-4 px-6">
     
      <Form @submit="login" :validation-schema="schema">
        <Field name="id" type="id" v-slot="{ field, errorMessage, meta }">
          <div class="field">
            <label for="id" class="block text-sm font-medium text-slate-700 text-left">아이디</label>
            <div class="mt-1">
              <input class="form-control" v-model="user.userid" v-bind="field" :class="{ 'is-invalid': !meta.valid && errorMessage }"/>
              <span class="errMsg block pt-2 text-[13px] text-left" v-if="errorMessage && !meta.valid">{{ errorMessage }}</span>
            </div>
          </div>
        </Field>

        <Field name="password" type="password" v-slot="{ field, errorMessage, meta }">
          <div class="field mt-3">
            <label for="pwd" class="block text-sm font-medium text-slate-700 text-left">비밀번호</label>
            <div class="mt-1">
              <input type="password" class="form-control" v-model="user.password" v-bind="field" :class="{ 'is-invalid': !meta.valid && errorMessage }"/>
              <span class="errMsg block pt-2 text-[13px] text-left" v-if="errorMessage && !meta.valid">{{ errorMessage }}</span>
            </div>
          </div>
        </Field>

        <div class="loginErr" v-if="loginErr">로그인에 실패하였습니다.</div>
        <button type="submit" class="btn mt-3 mb-3">로그인</button>
      </Form>
  </div>
</div><div class="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5"></div></div></div>

</template>

<script>

const axios = require('axios')

import { Form, Field } from 'vee-validate';
import { object, string } from 'yup';

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
  }, 
  computed: {
    schema() {
      return object({
        id: string().required('아이디를 입력해주세요.'),
        password: string().required('비밀번호를 입력해주세요.').matches(/^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[#?!@$%^&*-])(?=.{8,})/,'영문자, 숫자, 특수문자를 조합하여 최소8자리를 입력해주세요.')
      });
    },
  },
  components: {
    Form,
    Field
  },
}

</script>