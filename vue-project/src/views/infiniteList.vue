<template>
    <div class="p-container">
        <div class="p-container_inner">

          <ul class="bod-list">
            <li v-for="(item, $index) in list" :key="$index">
              <a v-bind:href="'bodView?id=' + item.numx" class="bod-container">
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
              </a>
            </li>
          </ul>

          <infinite-loading @infinite="infiniteHandler" spinner="bubbles"></infinite-loading>

        </div>
    </div>
</template>

<script>

import InfiniteLoading from "vue-infinite-loading";
import axios from 'axios';

const api = '//nohyoungjin.github.io/apitest/test.json';

export default {
    data() {
        return {
            page: 1,
            list: [],
        };
    },
    components: {
      InfiniteLoading,
    },
    methods: {
        infiniteHandler($state) {
            axios.get(api, {
                params: {
                    page: this.page,
                },
            }).then(({
                data
            }) => {
                if (data.hits.length) {
                    this.page += 1;
                    this.list.push(...data.hits);
                    // $state.loaded();
                } else {
                    $state.complete();
                }
            });
        },
    },
};

</script>
