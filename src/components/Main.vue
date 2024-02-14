<template>
  <div id="mmain">
    <swiper
      class="ad_img"
      :options="swiperOption"
      @slideChange="slideChangeTransitionStart"
    >
      <swiper-slide>
        <img src="../assets/jam_on_main_1.jpeg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/jam_on_main_2.jpeg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/jam_on_main_3.jpeg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/jam_on_main_4.jpeg" alt="" />
      </swiper-slide>
      <!-- pagination -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <swiper
      class="small_ad_img"
      :options="swiperOption"
      @slideChange="slideChangeTransitionStart"
    >
      <swiper-slide>
        <img src="../assets/jam_on_smain_1.jpeg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/jam_on_smain_2.jpeg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/jam_on_smain_3.jpeg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/jam_on_smain_4.jpeg" alt="" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <div class="mat_best">
      <h4 class="title">24년형 초절전 탄소매트</h4>
      <div class="mat_img">
        <div class="mat_img_wrap">
          <div class="product">
            <img src="../assets/jam_on_mat_1.jpeg" alt="" />
            <div class="product_info">
              <span class="product_title">
                ★1+1슈퍼특가★24년형 잠온 전자파차단 초절전형 카본 탄소매트
              </span>
              <div class="price">
                <span class="discount">99,000원</span>
                <span class="regular">338,000원</span>
              </div>
              <div class="price_img">
                <img src="../assets/jam_on_price_1.gif" alt="" />
                <img src="../assets/jam_on_price_2.gif" alt="" />
              </div>
            </div>
          </div>
          <div class="product">
            <img src="../assets/jam_on_mat_4.jpeg" alt="" />
            <div class="product_info">
              <span class="product_title">
                잠온 카본 탄소매트 세미마이크로 ZAMON-SM105
              </span>
              <div class="price">
                <span class="discount">89,000원</span>
                <span class="regular">129,000원</span>
              </div>
              <div class="price_img">
                <img src="../assets/jam_on_price_1.gif" alt="" />
                <img src="../assets/jam_on_price_2.gif" alt="" />
              </div>
            </div>
          </div>
          <div class="product">
            <img src="../assets/jam_on_mat_2.jpeg" alt="" />
            <div class="product_info">
              <span class="product_title">
                잠온 휴 프리미엄 초극세사 탄소매트 ZAMON-PMF110DG
              </span>
              <div class="price">
                <span class="discount">109,000원</span>
                <span class="regular">189,000원</span>
              </div>
              <div class="price_img">
                <img src="../assets/jam_on_price_1.gif" alt="" />
                <img src="../assets/jam_on_price_2.gif" alt="" />
              </div>
            </div>
          </div>
          <div class="product">
            <img src="../assets/jam_on_mat_3.jpeg" alt="" />
            <div class="product_info">
              <span class="product_title">
                잠온 식빵굽는 고양이 극세사 탄소매트 ZAMON-MF105T
              </span>
              <div class="price">
                <span class="discount">79,000원</span>
                <span class="regular">129,000원</span>
              </div>
              <div class="price_img">
                <img src="../assets/jam_on_price_1.gif" alt="" />
                <img src="../assets/jam_on_price_2.gif" alt="" />
              </div>
            </div>
          </div>
          <swiper-slide class="product">
            <img src="../assets/winter_2.jpeg" alt="" />
            <div class="product_info">
              <span class="product_title">
                잠온 식빵굽는 고양이 극세사 탄소매트 ZAMON-MF105T
              </span>
              <div class="price">
                <span class="discount">79,000원</span>
                <span class="regular">129,000원</span>
              </div>
              <div class="price_img">
                <img src="../assets/jam_on_price_1.gif" alt="" />
                <img src="../assets/jam_on_price_2.gif" alt="" />
              </div>
            </div>
          </swiper-slide>
        </div>
      </div>

      <div>
        <h4 class="title">지금 가장 핫한 잠온 BEST 3</h4>
        <div class="best_img">
          <div class="best_product">
            <div class="number">1</div>
            <img src="../assets/jam_on_best_1.jpeg" alt="" />
            <div class="product_info">
              <span class="product_title">
                잠온 식빵굽는 고양이 극세사 탄소매트 ZAMON-MF105T
              </span>
              <div class="price">
                <span class="discount">79,000원</span>
                <span class="regular">129,000원</span>
              </div>
              <div class="price_img">
                <img src="../assets/jam_on_price_1.gif" alt="" />
                <img src="../assets/jam_on_price_2.gif" alt="" />
              </div>
            </div>
          </div>
          <div class="best_product">
            <div class="number">2</div>
            <img src="../assets/jam_on_best_2.jpeg" alt="" />
            <div class="product_info">
              <span class="product_title">
                잠온 아이스 쿨패드 피톤치드 황토 쿨링젤
              </span>
              <div class="price">
                <span class="discount">9,900원</span>
                <span class="regular">34,900원</span>
              </div>
              <div class="price_img">
                <img src="../assets/jam_on_price_1.gif" alt="" />
                <img src="../assets/jam_on_price_2.gif" alt="" />
              </div>
            </div>
          </div>
          <div class="best_product">
            <div class="number">3</div>
            <img src="../assets/jam_on_best_3.jpeg" alt="" />
            <div class="product_info">
              <span class="product_title">
                신일 캠핑용 차박 낚시 휴대용 무선 선풍기 SIF-S1223DC
              </span>
              <div class="price">
                <span class="discount">118,000원</span>
                <span class="regular">198,000원</span>
              </div>
              <div class="price_img">
                <img src="../assets/jam_on_price_1.gif" alt="" />
                <img src="../assets/jam_on_price_2.gif" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="sns_kakao">
      <a href="https://pf.kakao.com/_riCtxj" target="_blank">
        <img src="../assets/jam_on_kakao.png" alt="카카오톡 친구하기" />
      </a>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

import Vue from "vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/css/swiper.css";
Vue.use(VueAwesomeSwiper);

export default {
  name: "mmain",
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        speed: 500,
        loop: true,
        touchRatio: 0.2,
        observer: true,
        observeParents: true,
      },
      // 현재 슬라이드 인덱스
      currentSlideIndex: 0,
    };
  },
  components: { Swiper, SwiperSlide },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#mmain {
  margin-bottom: 200px;
}
.title {
  text-align: center;
  margin-bottom: 10px;
}
.ad_img,
.mat_img,
.best_img,
.small_ad_img {
  margin-bottom: 150px;
}
.ad_img {
  display: flex;
  overflow: hidden;
  width: 100%;
}
.ad_img img {
  width: 100%;
}
.swiper-pagination {
  --swiper-theme-color: #79cab6;
}

.small_ad_img {
  display: none;
}
.mat_best {
  max-width: 1200px;
  margin: auto;
}

.mat_img_wrap {
  display: flex;
  justify-content: space-between;
  overflow: scroll;
  overflow-y: hidden;
}
/* 스크롤바 디자인 */
.mat_img_wrap::-webkit-scrollbar {
  height: 10px; /* 스크롤바 높이 */
}
.mat_img_wrap::-webkit-scrollbar-thumb {
  background-color: #79cab6; /* 스크롤바 색상 */
  border-radius: 4px; /* 스크롤바의 모서리를 둥글게 만듭니다. */
}
.mat_img_wrap::-webkit-scrollbar-track {
  background-color: #f1f1f1; /* 스크롤바 트랙 색상 */
  border-radius: 4px; /* 스크롤바의 모서리를 둥글게 만듭니다. */
}

.best_img {
  display: flex;
  justify-content: space-between;
}
.mat_img img,
.best_img img {
  width: 350px;
  border-radius: 30px;
}
.product {
  width: 280px;
  padding: 0 10px;
}
.product img {
  width: 280px;
}
.product_info {
  padding: 10px 0;
}
.product_title {
  font-size: 15px;
}
.best_product {
  width: 30%;
  padding: 10px;
  position: relative;
}
.best_product img {
  width: 100%;
}
.number {
  position: absolute;
  border-radius: 30px 0 30px 0;
  padding: 15px;
  background: #79cab6;
  color: white;
  font-weight: bold;
}
.price {
  padding: 10px 0;
}
.discount {
  font-weight: bold;
}
.regular {
  padding-left: 10px;
  font-size: 13px;
  text-decoration: line-through;
  color: #aaa;
}
.price_img img {
  width: 70px;
}

.sns_kakao {
  max-width: 1200px;
  margin: 0 auto 150px;
  padding: 10px;
}
.sns_kakao img {
  width: 100%;
}

@media screen and (max-width: 700px) {
  .ad_img {
    display: none;
  }
  .small_ad_img {
    display: block;

    display: flex;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
  .small_ad_img img {
    width: 100%;
  }
  .best_img {
    flex-direction: column;
    align-items: center;
  }
  .best_product {
    width: 90%;
    padding: 0 10px;
    margin-bottom: 15px;
  }
}
</style>
