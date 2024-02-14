<template>
  <div class="bedding">
    <nav class="bedding_nav">
      <router-link to="/bedding">차렵이불</router-link>
    </nav>
    <div class="bedding_product">
      <router-link to="/bedinner" class="product">
        <img src="../assets/bedding.jpeg" alt="" />
        <div class="product_info">
          <span class="product_title">
            잠온 쉬닥 먼지없는 알러지케어 사계절 차렵이불 세트 (SS/Q)
          </span>
          <div class="price">
            <span class="discount">39,000원</span>
            <span class="regular">99,000원</span>
          </div>
          <div class="price_img">
            <img src="../assets/jam_on_price_1.gif" alt="" />
            <img src="../assets/jam_on_price_2.gif" alt="" />
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.bedding {
  max-width: 1200px;
  margin: 0 auto 300px;
}
.bedding_nav {
  padding: 10px 20px;
}
.bedding_product {
  display: flex;
  max-width: 1200px;
  flex-wrap: wrap;
}
.product {
  width: 30%;
  padding: 0 10px;
  text-decoration: none;
  color: inherit;
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
</style>
