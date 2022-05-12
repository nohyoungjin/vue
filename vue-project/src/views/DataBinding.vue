<template>
    <div class="p-container">
        <div class="p-container_inner">

            <div role="tablist" class="tab-list">
                <div class="on">전체</div>
                <div>공지사항</div>
                <div>채용공고</div>
                <div>사업보고</div>
                <div>R&D리포트</div>
                <div>보도자료</div>
            </div>

            <!--  -->

            <ul class="bod-list">
                <li :key="i" v-for="(product,i) in getItems">
                    <!-- <a v-bind:href="'bodView?' + product.numx" class="bod-container"> -->
                    <router-link :to="{ path:'/bodView', query: { id: product.numx } }" class="bod-container">
                        <div class="box-cont">
                            <span>{{ product.cate }}</span>
                            <h4>{{ product.coxt }}</h4>
                            <p>{{ product.feed }}</p>
                            <time>{{ product.time }}</time>
                        </div>
                        <div class="box-img">
                            <div class="box-rel">
                                <div class="box-abs">
                                    <div class="img-css">
                                        <img v-bind:src="'http://222.236.61.86:8111/SK_HappyAnd/images/page/innovator/' + product.imgs" aria-hidden="true" alt="">
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
        async getList() {
            this.items = await this.$api('https://nohyoungjin.github.io/apitest/db.json', 'get')
        },

        paginateClickCallback: function(pageNum) {
            this.currentPage = Number(pageNum)
        }
    }
}

</script>