<template>

  <div class="p-container">
    <div class="p-container_inner">

      <transition
        appear
        appear-class="custom-appear"
        appear-to-class="custom-appear-to"
        appear-active-class="custom-appear-active"
      >
        <div class="flex flex-wrap justify-between items-center">
          <div class="relative flex-initial w-[30%] mb-[50px] border-1 border-solid border-zinc-200 rounded-lg ease-in-out duration-300 before:table before:pt-[72%] hover:border-zinc-400 max-lg:w-[49%] max-lg:mb-[2%] max-md:w-[100%]">
            <a href="javascript:" class="flex justify-center items-center absolute top-0 left-0 w-full h-full">
              <img src="http://222.236.61.86:8111/SK_HappyAnd/images/page/innovation/img_sesang_logo.jpg" alt="">
            </a>
          </div>
          <div class="relative flex-initial w-[30%] mb-[50px] border-1 border-solid border-zinc-200 rounded-lg ease-in-out duration-300 before:table before:pt-[72%] hover:border-zinc-400 max-lg:w-[49%] max-lg:mb-[2%] max-md:w-[100%]">
            <a href="javascript:" class="flex justify-center items-center absolute top-0 left-0 w-full h-full">
              <img src="http://222.236.61.86:8111/SK_HappyAnd/images/page/innovator/img_sit_logo.jpg" alt="">
            </a>
          </div>
          <div class="relative flex-initial w-[30%] mb-[50px] border-1 border-solid border-zinc-200 rounded-lg ease-in-out duration-300 before:table before:pt-[72%] hover:border-zinc-400 max-lg:w-[49%] max-lg:mb-[2%] max-md:w-[100%]">
            <a href="javascript:" class="flex justify-center items-center absolute top-0 left-0 w-full h-full">
              <img src="http://222.236.61.86:8111/SK_HappyAnd/images/page/innovator/img_newvori_logo.jpg" alt="">
            </a>
          </div>
          <div class="relative flex-initial w-[30%] mb-[50px] border-1 border-solid border-zinc-200 rounded-lg ease-in-out duration-300 before:table before:pt-[72%] hover:border-zinc-400 max-lg:w-[49%] max-lg:mb-[2%] max-md:w-[100%]">
            <a href="javascript:" class="flex justify-center items-center absolute top-0 left-0 w-full h-full">
              <img src="http://222.236.61.86:8111/SK_HappyAnd/images/page/innovation/img_training_logo.jpg" alt="">
            </a>
          </div>
        </div>
      </transition>

    </div>
  </div>

</template>

<script>

import {
  reactive, 
  computed
} from 'vue'

export default {

  setup() {
    let state = reactive({
      num1: 0,
      num2: 0,
      result: computed(() => parseInt(state.num1) + parseInt(state.num2))
    })

    return { state }

  }

}

</script>

<style>

.custom-appear-active div:first-child(1) {
    opacity: 0
}

.custom-appear-active div:first-child(2) {
    opacity: 0;
    transform: translateX(50px)
}

.custom-appear-active div:first-child(3) {
    opacity: 0;
    transform: translateX(-100px)
}

.custom-appear-active div:first-child(4) {
    opacity: 0;
    transform: translateY(150px)
}

</style>
