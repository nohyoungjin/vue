<template>

<div class="mt-24 -mb-3">
  <div class="not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25">
    <div style="background-position:10px 10px" class="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
    <div class="relative rounded-xl overflow-auto">
  <div class="shadow-sm overflow-hidden my-8">
    <table class="border-collapse table-fixed w-full text-sm">
      <colgroup>
            <col style="width:6%;">
						<col style="width:10%;">
						<col style="width:10%;">
						<col style="width:74%;">
					</colgroup>      
      <thead>
        <tr>
          <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200">No.</th>
          <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200">아이디</th>
          <th class="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200">이름</th>
          <th class="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200">비밀번호</th>
        </tr>
      </thead>
      <tbody class="bg-white dark:bg-slate-800">
        <tr v-for="(user, index) in users" :key="index" class="user-wrap">
          <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{{ index + 1 }}</td>
          <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{{ user.userid }}</td>
          <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{{ user.name }}</td>
          <td class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400 text-left">{{ user.password }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div><div class="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5"></div></div></div>

  </template>
  
<script>

import axios from 'axios'

export default {
  data: function() {
    return {
      users: []
    }
  },
  created() {
    axios.get('/api/user').then((response) => {
      this.users = response.data
    })
  }
}

</script>