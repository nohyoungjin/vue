<template>

  <PageHead />

  <div class="container">
    <router-view />
  </div>

  <PageFoot />

</template>

<style lang="scss">

  @import "@/assets/scss/commons.scss";

</style>

<script>

import PageHead from './components/PageHead'; // 컴포넌트 import
import PageFoot from './components/PageFoot'; 

export default {
    components: { 
      PageHead,
      PageFoot
    } // 현재 컴포넌트에서 사용할 컴포넌트 등록

}

</script>
