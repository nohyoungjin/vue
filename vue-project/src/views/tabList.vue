<template>

<div class="p-container">
  <div class="p-container_inner">

    <div class="flex overflow-x-auto overflow-y-hidden mb-[60px]">
      <!-- 조건식으로 해당 index에서 active 클래스 넣어주기 -->
          <a href="javascript:" 
            class="mr-[30px] text-[30px] text-gray-500 font-bold hover:text-sky-900" 
            v-for="(item, index) in tabList" :key="index" :class="{ 'text-sky-900': currentTab === index }"
          > 

            <!-- 클릭시 해당 index 값 currentTab에 넣어줌 -->
            <span @click.prevent="currentTab = index">{{ item }}</span> 
          </a>
    </div>

    <!-- button의 클릭된 index값 해당 값일때 할당된 div가 보여짐 -->

    <Transition name="fade" mode="out-in">
      <div v-if="currentTab == '0'" class="text-[50px]">😢공지사항😢     {{ count }}</div>
      <div v-else-if="currentTab == '1'" class="text-[50px]">사업보고</div>
      <div v-else-if="currentTab == '2'" class="text-[50px]">보도자료 😢</div>
      <div v-else-if="currentTab == '3'" class="text-[50px]">4</div>
    </Transition>

  </div>
</div>

</template>

<style>

  .fade-enter-active,
  .fade-leave-active {transition: opacity 0.5s ease}

  .fade-enter-from,
  .fade-leave-to {opacity: 0}

</style>

<script>

export default {
  data: function() {
    return {
      currentTab: 0,
      tabList: [
        '공지사항',
        '사업보고',
        '보도자료'
      ],
      awesome: true
    }
  }
}

</script>