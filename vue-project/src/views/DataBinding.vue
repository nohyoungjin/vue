<template>
    <div class="p-container">
        <div class="p-container_inner">

            <div role="tablist" class="tab-list">
                <!-- for 문의 인덱스를 사용 변수에 숫자를 입력 -->
                <div v-for="(tab, index) in tabList" :key="index" :class="{ active: currentTab === index }">
                    <a href="#" @click.prevent="currentTab = index">{{ tab }}</a>
                </div>
            </div>

            <!--  -->

            <ul class="bod-list">
                <li :key="i" v-for="(bod,i) in getItems">
                    <!-- <a v-bind:href="'bodView?id=?' + product.numx" class="bod-container"> -->
                    <router-link :to="{ path:'/bodView', query: { id: bod.numx } }" class="bod-container">
                        <div class="box-cont">
                            <span>{{ bod.cate }}</span>
                            <h4>{{ bod.coxt }}</h4>
                            <p>{{ bod.feed }}</p>
                            <time>{{ bod.time }}</time>
                        </div>
                        <div class="box-img">
                            <div class="box-rel">
                                <div class="box-abs">
                                    <div class="img-css">
                                        <img v-bind:src="'http://222.236.61.86:8111/SK_HappyAnd/images/page/innovator/' + bod.imgs" aria-hidden="true" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    <!-- </a> -->
                    </router-link>
                </li>
            </ul>

            <paginate
                :page-count="getPaginateCount"
                :page-range="3"
                :margin-pages="2"
                :click-handler="paginateClickCallback"
                :prev-text="'Prev'"
                :next-text="'Next'"
                :container-class="'pagination'"
                :page-class="'page-item'"
            >
            </paginate>

        </div>
    </div>
</template>

<style scoped>

.pagination {justify-content:center}

</style>

<script>

import Paginate from 'vuejs-paginate-next'

export default {
    components: {
      paginate: Paginate
    },
    data() {
        return {
            currentTab: 0, // index 번호를 저장하는 변수
            tabList: [
                '전체',
                '공지사항',
                '채용공고',
                '사업보고',
                'R&D리포트',
                '보도자료'
            ],
            items: [],
            currentPage: 1,
            perPage: 1
        }
    },
    created() {
        this.getList()
    },
    computed: {
        getItems: function() {
            let start = (this.currentPage - 1) * this.perPage
            let end = this.currentPage * this.perPage
            return this.items.slice(start, end)
        },
        getPaginateCount: function() {
            return Math.ceil(this.items.length / this.perPage)
        },
    },
    methods: {
        //
        activate:function(el) {
            this.active_el = el
        },

        // 데이터 겟
        async getList() {
            this.items = await this.$api('https://nohyoungjin.github.io/apitest/db.json', 'get')
        },

        //
        paginateClickCallback: function(pageNum) {
            this.currentPage = Number(pageNum)
        }
    }
}

</script>