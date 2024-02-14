<template>
  <div class="carbon">
    <div>
      <nav class="carbon_nav">
        <router-link to="/carbon">탄소매트</router-link>
        <router-link to="/topper">토퍼</router-link>
      </nav>
      <div class="carbon_product">
        <div class="product">
          <img src="../assets/winter_1.jpeg" alt="" />
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
          <img src="../assets/winter_2.jpeg" alt="" />
          <div class="product_info">
            <span class="product_title">
              잠온 퓨어그레이 초절전형 탄소 전기장판 ZAMON-BSM110G
            </span>
            <div class="price">
              <span class="discount">129,000원</span>
              <span class="regular">249,000원</span>
            </div>
            <div class="price_img">
              <img src="../assets/jam_on_price_1.gif" alt="" />
              <img src="../assets/jam_on_price_2.gif" alt="" />
            </div>
          </div>
        </div>
        <div class="product">
          <img src="../assets/winter_4.jpeg" alt="" />
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
          <img src="../assets/winter_5.jpeg" alt="" />
          <div class="product_info">
            <span class="product_title">
              잠온 에코 베이지 텐셀 모달 탄소매트 ZAMON-MD110B
            </span>
            <div class="price">
              <span class="discount">99,000원</span>
              <span class="regular">169,000원</span>
            </div>
            <div class="price_img">
              <img src="../assets/jam_on_price_1.gif" alt="" />
              <img src="../assets/jam_on_price_2.gif" alt="" />
            </div>
          </div>
        </div>
        <div class="product">
          <img src="../assets/winter_6.jpeg" alt="" />
          <div class="product_info">
            <span class="product_title">
              잠온 퓨어 그레이 세미마이크로 탄소매트 ZAMON-SM105
            </span>
            <div class="price">
              <span class="discount">89,000원</span>
              <span class="regular">169,000원</span>
            </div>
            <div class="price_img">
              <img src="../assets/jam_on_price_1.gif" alt="" />
              <img src="../assets/jam_on_price_2.gif" alt="" />
            </div>
          </div>
        </div>
        <div class="product">
          <img src="../assets/winter_7.jpeg" alt="" />
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
        <div class="product">
          <img src="../assets/winter_8.jpeg" alt="" />
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
      </div>
    </div>
  </div>
</template>

<style scoped>
.carbon {
  display: flex;
  max-width: 1200px;
  margin: 0 auto 300px;
}
.carbon_nav {
  padding: 10px 20px;
}
.carbon_product {
  display: flex;
  max-width: 1200px;
  flex-wrap: wrap;
}
.product {
  width: 30%;
  padding: 0 10px;
}
.product_info {
  padding: 10px 0;
}
.product_title {
  font-size: 15px;
}
.product img {
  width: 100%;
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

@media screen and (max-width: 700px) {
  .product {
    width: 46%;
    padding: 0 10px;
  }
}
@media screen and (max-width: 500px) {
  .product {
    width: 45%;
  }
}
@media screen and (max-width: 400px) {
  .product {
    width: 44%;
  }
}
</style>
