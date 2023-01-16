<template>

<div class="p-container">
    <div class="p-container_inner">

        <div id="profile-image-container" class="flex justify-center items-center overflow-hidden relative z-50 w-[300px] h-[200px] mb-[-100px] shadow-lg ring-1 rounded-[14px] translate-y-[-40%]">
            <img src="http://222.236.61.86:8111/SK_HappyAnd/images/page/innovator/img_newvori_logo.jpg" id="profile-image" alt="">
        </div>

        <div class="box-container flex pt-[50px] pb-[150px]">
            <div class="box-left flex-initial w-[360px]">
                <h1 class="mb-[20px] text-[40px] font-bold leading-[50px]">뉴보리</h1>
                <a v-bind:href="siteUrl" id="external-link" class="inline-block w-[126px] h-[48px] border-1 border-solid border-gray-300 text-[15px] text-center leading-[44px] rounded-[500px]" target="_blank">
                    홈페이지
                </a>
            </div>

            <div class="box-right flex-1 text-left">
                <p id="business-headline" class="mb-[20px] text-[24px] font-bold leading-[36px]">
                    <span>뉴보리는 긍정적인 사회변화를 이끌어가는 영상 채널입니다.</span>
                </p>

                <p id="business-description" class="text-[16px] leading-[25px]">
                    세대갈등, 지역격차, 재난·재해, 청년문제, 녹색소비 등 우리 사회의 문제를 들여다보고, 의미와 재미를 담은 영상 콘텐츠를 기반으로 사회변화에 
                    대한 관심을 확산시키고자 합니다.
                </p>

                <div class="grid-container">
                    <div class="item">스스로의 힘으로 세상에 긍정적인 변화를 주고자 하는 사람들</div>
                    <div class="item">좀 더 실질적인 문제를 해결하기 위해 노력</div>
                </div>
            </div>
        </div>

    </div>
</div>

</template>

<script>

export default {
    name: "AboutView",
    data: function() {
        return {
            siteUrl: 'http://skhappiness.org/innovator/newvori.do'
        }
    }
}

</script>