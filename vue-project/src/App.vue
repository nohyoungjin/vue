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

// 컴포넌트 import

import PageHead from './components/PageHead'; 
import PageFoot from './components/PageFoot'; 

// 현재 컴포넌트에서 사용할 컴포넌트 등록

export default { 

    components: { 
      PageHead,
      PageFoot
    },
    created() { }

}

</script>
