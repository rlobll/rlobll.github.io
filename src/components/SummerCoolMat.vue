<template>
  <div class="coolmat">
    <nav class="coolmat_nav">
      <router-link to="/coolmat">쿨매트</router-link>
      <router-link to="/fan">선풍기</router-link>
    </nav>
    <div class="coolmat_product">
      <div class="product">
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
    </div>
  </div>
</template>

<style scoped>
.coolmat {
  max-width: 1200px;
  margin: 0 auto 300px;
}
.coolmat_nav {
  padding: 10px 20px;
}
.coolmat_product {
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
