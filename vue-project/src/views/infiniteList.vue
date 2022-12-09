<template>
    <div class="p-container">
        <div class="p-container_inner">

            <ul class="bod-list">
                <li v-for="(item, $index) in list" :key="$index">
                    <router-link :to="{ path:'/bodView', query: { id: item.numx } }" class="bod-container">
                        <div class="box-cont">
                            <div>{{ item.cate }}</div>
                            <h4>{{ item.coxt }}</h4>
                            <p>{{ item.feed }}</p>
                            <time>{{ item.time }}</time>
                        </div>
                        <div class="box-img">
                            <div class="box-rel">
                                <div class="box-abs">
                                    <div class="img-css">
                                        <img v-bind:src="'http://222.236.61.86:8111/SK_HappyAnd/images/page/innovator/' + item.imgs" aria-hidden="true" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>

            <no-ssr>
                <infinite-loading @infinite="infiniteHandler">
                    <template v-slot:no-more>
                        <p>더이상 데이터가 없습니다</p>
                    </template>
                </infinite-loading>
            </no-ssr>

        </div>
    </div>
</template>

<script>

import axios from 'axios'
import InfiniteLoading from 'vue-infinite-loading'

const api = '//nohyoungjin.github.io/apitest/test.json'

export default {
    data() {
        return {
            limit: 5,
            list: [],
            listItems: [],
            busy: false
        }
    },
    components: {
        InfiniteLoading
    },
    methods: {
        // 데이터 겟
        async getItem() {
            await axios.get(api).then(
                (res) => {
                    this.listItems = res.data.hits // api 데이터
                },
                (err) => {
                    console.log(err)
                }
            )
        },
        // 5개씩 끊어서 스크롤 내릴때마다 정보 push 출력
        async infiniteHandler($state) {
            await setTimeout(() => {
                const temp = []
                if (this.busy === false) {
                    for (let i = this.list.length + 1; i <= this.list.length + 5; i++) {
                        temp.push(this.listItems[i])
                        if (this.listItems.length - 1 === i) {
                            this.busy = true
                            break
                        }
                    }
                }

                if (this.busy === true) {
                    $state.complete()
                }

                this.list = this.list.concat(temp)
                    $state.loaded()
                }, 1000)
            }
        },
    mounted () {
        this.getItem()
        this.infiniteHandler()
    }
}

</script>
