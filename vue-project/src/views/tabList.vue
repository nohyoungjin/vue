<template>

  <div class="p-container">
      <div class="p-container_inner">

        <div class="tab-list">
            <div v-for="(item, index) in tabList" :key="index" :class="{ active:currentTab === index }"> <!-- 조건식으로 해당 index에서 active 클래스 넣어주기 -->
                <a href="#" @click.prevent="currentTab = index">{{ item }}</a> <!-- 클릭시 해당 index 값 currentTab에 넣어줌 -->
            </div>
        </div>

        <!-- button의 클릭된 index값 해당 값일때 할당된 div가 보여짐 -->

        <!-- <div v-show="currentTab == 0" class="tab-cont">1</div>
        <div v-show="currentTab == 1" class="tab-cont">2</div>
        <div v-show="currentTab == 2" class="tab-cont">3</div>
        <div v-show="currentTab == 3" class="tab-cont">4</div> -->

        <Transition name="fade" mode="out-in">
          <div v-if="currentTab == '0'" class="tab-cont">😢공지사항😢</div>
          <div v-else-if="currentTab == '1'" class="tab-cont">사업보고</div>
          <div v-else-if="currentTab == '2'" class="tab-cont">3</div>
          <div v-else-if="currentTab == '3'" class="tab-cont">4</div>
        </Transition>

        <!-- <template v-for="(todo, index) in tabList" :key="index">
          <Transition name="fade" mode="out-in">
            <div v-if="currentTab == index" class="tab-cont">{{ todo }}</div>
          </Transition>
        </template> -->

        <!-- <button @click="awesome = !awesome">Toggle</button>

        <h1 v-if="awesome">Vue is awesome!</h1>
        <h1 v-else style="font-size:50px;">Oh no 😢</h1> -->

    </div>
  </div>

</template>

<style>

  .tab-cont {font-size: 50px;}

  .fade-enter-active,
  .fade-leave-active {transition: opacity 0.5s ease;}

  .fade-enter-from,
  .fade-leave-to {opacity: 0;}

</style>

<script>

export default {
  data () {
    return {
      currentTab: 0,
      tabList: [
        '공지사항',
        '사업보고'
      ],
      todos: [
        '공지사항',
        '사업보고'
      ],
      awesome: true
    }
  }
}

</script>
