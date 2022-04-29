<template>
    
    <div :key="i" v-for="(product,i) in productList" style="display:none;">
        <span>{{ product.name }}</span> /
        <span>{{ product.price }} 원</span> /      
        <span>{{ product.category }}</span>    
    </div>

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
                <li>
                    <a href="javascript:" class="bod-container">
                        <div class="box-cont">
                            <span>나눔팀</span>
                            <h4>팀원들이 업무에 몰입할 수 있도록 돕는 커뮤니티팀을 만나다 팀원들이 업무에 몰입할 수 있도록 돕는 커뮤니티팀을 만나다</h4>
                            <p>내일이 기대되는 커뮤니티를 만듭니다.</p>
                            <time>2021.11.02</time>
                        </div>	
                        <div class="box-img">
                            <div class="box-rel">
                                <div class="box-abs">
                                    <div class="img-css">
                                        <img src="http://222.236.61.86:8111/SK_HappyAnd/images/page/innovator/img_newvori_logo.jpg" aria-hidden="true" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="javascript:" class="bod-container">
                        <div class="box-cont">
                            <span>나눔팀</span>
                            <h4>팀원들이 업무에 몰입할 수 있도록 돕는 커뮤니티팀을 만나다</h4>
                            <p>내일이 기대되는 커뮤니티를 만듭니다.</p>
                            <time>2021.11.02</time>
                        </div>	
                        <div class="box-img">
                            <div class="box-rel">
                                <div class="box-abs">
                                    <div class="img-css">
                                        <img src="http://222.236.61.86:8111/SK_HappyAnd/images/page/innovation/img_sesang_logo.jpg" aria-hidden="true" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="javascript:" class="bod-container">
                        <div class="box-cont">
                            <span>나눔팀</span>
                            <h4>팀원들이 업무에 몰입할 수 있도록 돕는 커뮤니티팀을 만나다</h4>
                            <p>내일이 기대되는 커뮤니티를 만듭니다.</p>
                            <time>2021.11.02</time>
                        </div>	
                        <div class="box-img">
                            <div class="box-rel">
                                <div class="box-abs">
                                    <div class="img-css">
                                        <img src="http://222.236.61.86:8111/SK_HappyAnd/images/page/innovation/img_training_logo.jpg" aria-hidden="true" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>                                
            </ul>
        </div>
    </div>

</template>

<style scoped>

</style>

<script>

export default {
    data() {
        return {
            productList: []
        };
    },
    created() {
        this.getList();
    },
    methods: {
        async getList() {
            this.productList = await this.$api('https://4feb8e42-6956-488b-b41f-6e8d520cd2d6.mock.pstmn.io/list', 'get');                                 
        }
    }
}

</script>