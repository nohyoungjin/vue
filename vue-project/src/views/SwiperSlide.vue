<template>
    <div class="main_visual">
        <swiper
            :slidesPerView="1"
            :spaceBetween="30"
            :autoplay="{
                delay: 1000,
                disableOnInteraction: false,
            }"      
            :loop="true"
            :loopedSlides="1"
            navigation
            :pagination="pagination"
            :fadeEffect="{
                crossFade: true,
            }"
            :modules="modules"
            @swiper="onSwiper"
            @slideChange="onSlideChange" 
            class="mySwiper"
        >
            <swiper-slide class="main_visual_item">
                <div class="main_visual_content_inner">
                    <div class="inner">
                        <p class="tit1"><span>나에게 행복이란?</span></p>
                    </div>
                </div>	
            </swiper-slide>

            <swiper-slide class="main_visual_item">
                <div class="main_visual_content_inner">
                    <div class="inner">
                        <p class="tit1"><span>하나를 보면 열을 생각할 수 있는 여유</span></p>
                    </div>
                </div>	
            </swiper-slide>
        </swiper>
    </div>

    <div class="control" v-bind:class="{'active': isActive}">
        <button @click="handleStart">시작</button> &nbsp;
        <button @click="handleStop">정지</button>
        <p style="margin:20px 0 0;">
            현재 - {{ counter }}
        </p>
    </div>
  </template>
  <script>

    // import Swiper core and required modules

    import { 
        Autoplay, 
        Navigation, 
        Pagination, 
        A11y, 
        EffectFade 
    } from 'swiper'
  
    // Import Swiper Vue.js components

    import { 
        Swiper, 
        SwiperSlide,
        useSwiper
    } from 'swiper/vue'
  
    // Import Swiper styles
    import 'swiper/css'
    import 'swiper/css/navigation'
    import 'swiper/css/pagination'

    import gsap from 'gsap'
  
    // Import Swiper styles
    export default {
      components: {
        Swiper,
        SwiperSlide
      },
      setup() {
        /* const onSwiper = (swiper) => {
            console.log(swiper)
            gsap.fromTo('.main_visual_content_inner p.tit1 span', { 
                y: 80, 
                autoAlpha: 0 
            }, { 
                y: 0, 
                autoAlpha: 1, 
                duration: 0.35 
            })
        } */

        const onSlideChange = () => {
            console.log('slide change')
            gsap.fromTo('.main_visual_content_inner p.tit1 span', { 
                y: 80, 
                autoAlpha: 0 
            }, { 
                y: 0, 
                autoAlpha: 1, 
                duration: 0.35 
            })
        }

        const swiper = useSwiper()

        return {
            // onSwiper,
            onSlideChange,

            swiper,

            pagination: {
                clickable: true,
                    renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + (index + 1) + "</span>";
                },
            },
            modules: [
                Autoplay, 
                Navigation, 
                Pagination, 
                A11y, 
                EffectFade
            ],
        }

      },
      data() {
        return {
            counter: '시작'
        }
      },
      methods: {
        onSwiper(swiper) {
            this.swiper = swiper;
        },

        handleStart() {
            this.swiper.autoplay.start()
            this.counter = '시작'
        },

        handleStop() {
            this.swiper.autoplay.stop()
            this.counter = '정지'
        },
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

.main_visual_content_inner p {overflow:hidden;font-size:3.875rem;font-weight:700;color:#222;line-height:72px;letter-spacing:-2px}
.main_visual_content_inner p em {color:#44a2e9}
.main_visual_content_inner p > span {display:block;opacity:0}
.main_visual_content_inner p br {display:block}

.swiper-pagination-bullet {
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    color: #000;
    opacity: 1;
    background: rgba(0, 0, 0, 0.2);
}

.swiper-pagination-bullet-active {
    color: #fff;
    background: #007aff;
}

</style>