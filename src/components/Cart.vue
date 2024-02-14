<template>
  <div class="cart">
    <p class="title">장바구니</p>
    <div class="bar"></div>
    <p class="text">장바구니가 비어있습니다.</p>
    <div class="bar"></div>
    <nav>
      <router-link to="/">&lt; 쇼핑 계속하기</router-link>
    </nav>
    <div class="price_total">
      <div>
        <p>총 0개의 상품금액</p>
        <p>0원</p>
      </div>
      <div>
        <img src="../assets/order_price_plus.png" alt="" />
      </div>
      <div>
        <p>배송비</p>
        <p>0원</p>
      </div>
      <div>
        <img src="../assets/order_price_total.png" alt="" />
      </div>
      <div>
        <p>합계</p>
        <p>0원</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart {
  max-width: 1200px;
  margin: 50px auto 0;
  padding: 0 10px;
}
.title {
  padding: 0 0 20px 30px;
  font-size: 25px;
}
.text {
  text-align: center;
  margin: 100px 0;
}
nav {
  font-size: 13px;
  text-decoration: underline;
  text-underline-position: under;
}
.price_total {
  display: flex;
  align-items: center;
  border: 1px solid #e5e7eb;
  padding: 30px;
  justify-content: end;
  text-align: end;
}
.price_total div {
  margin-left: 20px;
}
.price_total div p {
  padding: 3px;
}
.price_total img {
  width: 20px;
  height: 20px;
}

@media screen and (max-width: 700px) {
  .price_total {
    justify-content: center;
    font-size: 13px;
    padding: 20px;
  }
}
</style>
