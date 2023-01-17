<template>
    <div class="main_visual">
        <swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="50"
        navigation
        :pagination="{ clickable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        >
        <swiper-slide class="main_visual_item">
            <div class="main_visual_content_inner">
                <div class="inner">
                    <p class="tit1">이별을 준비하는 방법</p>
                </div>
            </div>	
        </swiper-slide>
        <swiper-slide class="main_visual_item">
            이별을 준비하는 방법
        </swiper-slide>
        <!-- <swiper-slide class="main_visual_item">
            Slide 3
        </swiper-slide> -->
        </swiper>
    </div>
  </template>
  <script>
    // import Swiper core and required modules
    import { Navigation, Pagination, A11y } from 'swiper'
  
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue'
  
    // Import Swiper styles
    import 'swiper/css'
    import 'swiper/css/navigation'
    import 'swiper/css/pagination'
  
    // Import Swiper styles
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {

        const onSwiper = (swiper) => {
          console.log(swiper)
        }

        const onSlideChange = () => {
          console.log('slide change')
        }

        return {
          onSwiper,
          onSlideChange,
          modules: [Navigation, Pagination, A11y],
        }

      },
    }
  </script>

<style>

.swiper {
    width: 100%;
    height: 70vh;
}

.swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;

        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }

      .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

</style>