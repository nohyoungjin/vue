<template>
    
    <div class="header">
        <nav>
            <router-link to="/">사업소개</router-link> <span>|</span>
            <router-link to="/about">재단소개</router-link> <span>|</span>
            <router-link to="/DataBinding">뉴스룸</router-link> <span>|</span>
            <router-link to="/NestedComponent">채용</router-link>
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
