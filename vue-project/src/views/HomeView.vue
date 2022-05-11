<template>

  <div class="p-container">
    <div class="p-container_inner">

      <transition
        appear
        appear-class="custom-appear"
        appear-to-class="custom-appear-to"
        appear-active-class="custom-appear-active"
      >
        <div class="business-container">
          <div class="business-items hover-elevation b1">
            <a href="javascript:">
              <img src="http://222.236.61.86:8111/SK_HappyAnd/images/page/innovation/img_sesang_logo.jpg" alt="">
            </a>
          </div>
          <div class="business-items hover-elevation b2">
            <a href="javascript:">
              <img src="http://222.236.61.86:8111/SK_HappyAnd/images/page/innovator/img_sit_logo.jpg" alt="">
            </a>
          </div>
          <div class="business-items hover-elevation b3">
            <a href="javascript:">
              <img src="http://222.236.61.86:8111/SK_HappyAnd/images/page/innovator/img_newvori_logo.jpg" alt="">
            </a>
          </div>
          <div class="business-items hover-elevation b4">
            <a href="javascript:">
              <img src="http://222.236.61.86:8111/SK_HappyAnd/images/page/innovation/img_training_logo.jpg" alt="">
              {{ msg }}
            </a>
          </div>
        </div>
      </transition>

      <!-- <input type="text" v-model="state.num1"> -
      <input type="text" v-model="state.num2"> <br><br>
      <span>{{ state.result }}</span> -->

    </div>
  </div>

</template>

<script>

import {reactive, computed} from 'vue';

export default {

  setup() {
    let state = reactive({
      num1: 0,
      num2: 0,
      result : computed(() => parseInt(state.num1) + parseInt(state.num2))
    })

    return {
      state
    }

  }

}

</script>

<style>
.custom-appear-active div.b1 {
    opacity: 0;
}
.custom-appear-active div.b2 {
    opacity: 0;
    transform: translateX(50px);
}
.custom-appear-active div.b3 {
    opacity: 0;
    transform: translateX(-100px);
}
.custom-appear-active div.b4 {
    opacity: 0;
    transform: translateY(150px);
}
</style>
