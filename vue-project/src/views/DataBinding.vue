<template>
    <h1>Hello, {{title}}</h1> <br>

    <div :key="i" v-for="(product,i) in productList" style="font-size:40px;">
        <span>{{product.name}}</span> /
        <span>{{product.price}} 원</span> /      
        <span>{{product.category}}</span>    
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