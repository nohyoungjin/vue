<template>

    <div class="p-container">
        <div class="p-container_inner">

            <div style="display:none;">
                <PageTitle title="데이터 전달" />
            </div>

            <div class="css-article">
                <ul class="css-grid">
                    <li v-for="e in getItems" :key="e.id">
                        <a href="javascript:">
                            <div class="css-flex">
                                <div class="css-thumb">
                                    <div class="css-abs">
                                        <div class="css-rad">
                                            <div class="css-im">
                                                <img src="http://222.236.61.86:8111/SK_HappyAnd/images/page/innovator/img_newvori_logo.jpg">
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <span class="cat">뉴스</span>
                                <h4>
                                    <span>포켓몬빵 줄이 길어질 때, OO은 웃고 있다? {{ e.id }}</span>
                                </h4>
                                <time>2022.03.19</time>
                            </div>
                        </a>
                    </li>
                    <!-- <li>
                        <a href="javascript:">
                            <div class="css-flex">
                                <div class="css-thumb">
                                    <div class="css-abs">
                                        <div class="css-rad">
                                            <div class="css-im">
                                                <img src="http://222.236.61.86:8111/SK_HappyAnd/images/page/innovator/img_sksunny_logo.jpg">
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <span class="cat">뉴스</span>
                                <h4>
                                    <span>새우깡=농심, 고래밥=오리온, 쿠크다스=?</span>
                                </h4>
                                <time>2022.03.19</time>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:">
                            <div class="css-flex">
                                <div class="css-thumb">
                                    <div class="css-abs">
                                        <div class="css-rad">
                                            <div class="css-im">
                                                <img src="http://222.236.61.86:8111/SK_HappyAnd/images/page/innovator/img_newvori_logo.jpg">
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <span class="cat">뉴스</span>
                                <h4>
                                    <span>새우깡=농심, 고래밥=오리온, 쿠크다스=?</span>
                                </h4>
                                <time>2022.03.19</time>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:">
                            <div class="css-flex">
                                <div class="css-thumb">
                                    <div class="css-abs">
                                        <div class="css-rad">
                                            <div class="css-im">
                                                <img src="http://222.236.61.86:8111/SK_HappyAnd/images/page/innovator/img_newvori_logo.jpg">
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <span class="cat">뉴스</span>
                                <h4>
                                    <span>새우깡=농심, 고래밥=오리온, 쿠크다스=?</span>
                                </h4>
                                <time>2022.03.19</time>
                            </div>
                        </a>
                    </li> -->
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
    </div>

</template>

<style scoped>

.pagination {margin:70px 0 0;justify-content:center}

</style>

<script>

// 컴포넌트 import

import PageTitle from '../components/PageTitle' 
import Paginate from 'vuejs-paginate-next'

// 현재 컴포넌트에서 사용할 컴포넌트 등록

export default {
    components: {
        PageTitle,
        paginate: Paginate
    },
    data: function() {
        return {
            items: [],
            currentPage: 1,
            perPage: 3,                    
        }
    },
    created: function() {
        for (let i = 1; i <= 10; i++) {
            this.items.push({
                id: i,
                name: "name_" + i
            })
        }
    },
    computed: {
        getItems: function () {
            let start = (this.currentPage - 1) * this.perPage
            let end = this.currentPage * this.perPage
            return this.items.slice(start, end)
        },
        getPaginateCount: function () {
            return Math.ceil(this.items.length / this.perPage)
        }  
    },
    methods: {
        paginateClickCallback: function (pageNum) {
            this.currentPage = Number(pageNum)
        }
    },    
}

</script>
