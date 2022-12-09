<template>
    <div class="p-container">
        <div class="p-container_inner">

            <div :key="i" v-for="(product,i) in productList">

                <article v-if="product.numx === $route.query.id">
                    <div class="bod-template">
                        <header class="bod-head">
                            <h1 class="tit">{{ product.coxt }}</h1>
                            <p><time class="css-qy">{{ product.time }}</time>ㆍ<span class="css-qy">by 뉴보리</span></p>
                            <img v-bind:src="'http://222.236.61.86:8111/SK_HappyAnd/images/page/innovator/' + product.imgs" aria-hidden="true" class="img" alt="">
                        </header>
                    </div>

                    <div class="bod-template">
                        <div class="bod-contxt">
                            <div class="box-blue">
                                <p class="title"><b>Editor’s Note</b></p>
                                <p>
                                    세대갈등, 지역격차, 재난·재해, 청년문제, 녹색소비 등 우리 사회의 문제를 들여다보고, 의미와 재미를 담은 영상 콘텐츠를 
                                    기반으로 사회변화에 대한 관심을 확산시키고자 합니다.
                                </p>
                            </div>
                        </div>

                        <p>향후 사회변화 <span style="background-color:rgb(246, 247, 178);">영상 콘텐츠 확산을 위해 영상 제작 교육 프로그램</span>도 준비할 예정입니다.</p>
                    </div>
                </article>

            </div>

        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            productList: []
        }
    },
    created() {
        this.getList()
    },
    methods: {
        async getList() {
            this.productList = await this.$api('https://nohyoungjin.github.io/apitest/db.json', 'get')
        }
    }
}

</script>