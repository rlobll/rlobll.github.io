<template>
  <div class="fan">
    <nav class="fan_nav">
      <router-link to="/coolmat">쿨매트</router-link>
      <router-link to="/fan">선풍기</router-link>
    </nav>
    <div class="fan_product">
      <div class="product">
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
      <div class="product">
        <img src="../assets/summer.jpeg" alt="" />
        <div class="product_info">
          <span class="product_title">
            잠온 2WAY 리모컨 스탠드형 써큘레이터 RXKL-FC4953C
          </span>
          <div class="price">
            <span class="discount">49,000원</span>
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
</template>

<style scoped>
.fan {
  max-width: 1200px;
  margin: 0 auto 300px;
}
.fan_nav {
  padding: 10px 20px;
}
.fan_product {
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
