<template>
    
    <div class="header">
        <nav>
            <router-link to="/">홈</router-link> <span>|</span>
            <router-link to="/about">소개</router-link> <span>|</span>
            <router-link to="/DataBinding">자동차</router-link> <span>|</span>
            <router-link to="/NestedComponent">데이터</router-link>
        </nav>
    </div>
    
</template>

<script>

export default {
    props: {
        title: {
            type: String,
            default: "페이지 제목 입니다."
        }
    }
}

</script>
