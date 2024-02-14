<template>
  <div class="bedding_inner">
    <div class="bedding_price">
      <div class="product_img">
        <div class="big_img">
          <img
            ref="bigImg"
            src="https://cdn.imweb.me/thumbnail/20231129/23637ec864023.jpg"
            alt=""
          />
        </div>
        <div class="small_img">
          <img
            src="https://cdn.imweb.me/thumbnail/20231129/23637ec864023.jpg"
            alt=""
            @click="
              changeImage(
                'https://cdn.imweb.me/thumbnail/20231129/23637ec864023.jpg'
              )
            "
          />
          <img
            src="https://cdn.imweb.me/thumbnail/20231128/3fe6a43d80392.jpg"
            alt=""
            @click="
              changeImage(
                'https://cdn.imweb.me/thumbnail/20231128/3fe6a43d80392.jpg'
              )
            "
          />
          <img
            src="https://cdn.imweb.me/thumbnail/20231128/12e6f50980cca.jpg"
            alt=""
            @click="
              changeImage(
                'https://cdn.imweb.me/thumbnail/20231128/12e6f50980cca.jpg'
              )
            "
          />
          <img
            src="https://cdn.imweb.me/thumbnail/20231128/20628133bb51b.jpg"
            alt=""
            @click="
              changeImage(
                'https://cdn.imweb.me/thumbnail/20231128/20628133bb51b.jpg'
              )
            "
          />
        </div>
      </div>

      <div class="information">
        <div class="bedding_title">
          <p>잠온 쉬닥 먼지없는 알러지케어 사계절 차렵이불 세트[SS/Q]</p>
          <img src="../assets/jam_on_price_1.gif" alt="" />
          <img src="../assets/jam_on_price_2.gif" alt="" />

          <div class="score">
            <div>
              <img src="../assets/jam_on_star.png" alt="" />
              <img src="../assets/jam_on_star.png" alt="" />
              <img src="../assets/jam_on_star.png" alt="" />
              <img src="../assets/jam_on_star.png" alt="" />
              <img src="../assets/jam_on_star.png" alt="" />
            </div>
            <div class="score_text">
              <p>22개 구매평</p>
            </div>
          </div>

          <div class="price">
            <div>
              <span class="discount">39,900원</span>
              <span class="regular">99,000원</span>
            </div>

            <img src="../assets/jam_on_shar.png" alt="" />
          </div>
        </div>

        <div class="bar"></div>

        <div class="bedding_text">
          <p>부드럽고 포근한 알러지케어 이불</p>
          <ol>
            <li>품질 보장! 100% 국내 생산</li>
            <li>진드기 침투 NO! 위생적인 알러지케어 소재</li>
            <li>보들보들하고 포근한 촉감</li>
            <li>간편한 세탁이 가능한 일체형 차렵이불</li>
            <li>높은 통기성! 쾌적하고 위생적인 솜사탕 베개</li>
          </ol>
        </div>

        <div class="delivery">
          <p><span>배송 방법</span>택배</p>
          <p>
            <span>배송비</span>무료 | 도서산간 배송비 추가
            <img src="../assets/question.png" alt="" />
          </p>
          <p>
            <span>배송 안내</span>
            제주도 3,000원 / 제주 외 도서산간 지역 5,000원 추가
          </p>
          <div class="delivery_box">
            <img src="../assets/delivery.png" alt="배달차사진" />
            <div>
              <p><span>오늘출발 상품</span></p>
              <p><span>오늘 13:00까지 결제 시</span>오늘 바로 발송됩니다.</p>
            </div>
          </div>
        </div>

        <div class="buy">
          <p>제품*</p>
          <select name="" id="" v-model="selectedProduct">
            <option value="">제품(필수)</option>
            <option value="(단품) 슈퍼싱글-SS이불">
              (단품) 슈퍼싱글-SS이불
            </option>
            <option value="(단품) 퀸-Q이불">(단품) 퀸-Q이불</option>
            <option value="(세트) 슈퍼싱글-SS이불+베개1p">
              (세트) 슈퍼싱글-SS이불+베개1p
            </option>
            <option value="(세트) 퀸-Q이불+베개2p">
              (세트) 퀸-Q이불+베개2p
            </option>
          </select>

          <div>
            <div class="selectedOption" v-if="selectedProduct">
              <div class="selectedOption_txt_delete">
                <div class="selectedOption_txt">
                  {{ selectedProduct }}
                </div>
                <button type="button" @click="removeProduct">x</button>
              </div>
              <div class="bar"></div>
              <div class="selectedOption_btn_price">
                <div class="selectedOption_btn">
                  <button type="button" @click="decreaseQuantity">-</button>
                  <p>1</p>
                  <button type="button" @click="increaseQuantity">+</button>
                </div>
                <div class="price">39,900</div>
              </div>
            </div>
          </div>

          <div>
            <div class="buy_btn_wrap">
              <button type="button" @click="addToBuy">구매하기</button>
              <button type="button" @click="addToCart">장바구니</button>
              <button type="button" class="heart" @click="addToHeart">
                <img src="../assets/jam_on_heart.png" alt="" />0
              </button>
            </div>
            <div class="pay_btn">
              <button type="button" class="sns_btn" @click="addSns">
                <span>N</span> pay 구매하기
              </button>
              <button type="button" class="save" @click="addToFavorites">
                찜
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <nav class="bedding_menu">
      <a href="#inner_img">상세정보</a>
      <a href="#review_wrap_btn">구매평(22)</a>
      <a href="#qna_btn">Q&A(0)</a>
      <a href="#return_btn">반폼/교환</a>
    </nav>

    <div id="inner_img">
      <img src="../assets/bedding_inner_img.jpeg" alt="" />
    </div>

    <div class="crqr">
      <div class="caution">
        <p>상품정보 제공고시</p>
        <table>
          <tr>
            <th>소재</th>
            <td>겉감:폴리에스터 100% <br />충전재:폴리에스터 100%</td>
          </tr>
          <tr>
            <th>색상</th>
            <td>차콜그레이</td>
          </tr>
          <tr>
            <th>치수</th>
            <td>이불:SS-160x210cm / Q-180x220cm <br />베개:50x70cm</td>
          </tr>
          <tr>
            <th>제품구성</th>
            <td>차렵이불 SS / Q</td>
          </tr>
          <tr>
            <th>제조자</th>
            <td>잠온</td>
          </tr>
          <tr>
            <th>제조국</th>
            <td>대한민국</td>
          </tr>
          <tr>
            <th>세탁방법 및 취급시 주의사항</th>
            <td>
              1.장기간 물에 담그지 마시고, 찬물에 중성세제를 사용하여
              세탁하십시오.<br />
              2.이염의 가능성이 있으므로 짙은 색상과 함께 세탁하지 마십시오.<br />
              3.염소표백하지 마십시오.<br />
              4.세탁기 사용이 가능합니다.<br />
              5.날카로운 것에 긁히지 않도록 주의하십시오.<br />
              6.불이나 난방기구에 가까지 하지 마십시오.<br />
              7.고온의 다림질을 피하십시오.
            </td>
          </tr>
          <tr>
            <th>품질보증기준</th>
            <td>소비자분쟁해결 기준에 따라 보상 가능</td>
          </tr>
          <tr>
            <th>A/S전화번호</th>
            <td>070-4870-6028</td>
          </tr>
        </table>
      </div>

      <div id="review_wrap_btn">
        <div class="review_wrap">
          <p>구매평(22)</p>
          <button type="button" class="review_btn">구매평 작성</button>
          <div class="review_look">
            <button type="button">
              <img src="../assets/photo.png" alt="" />
              <span>포토 구매평만 보기</span>
            </button>
          </div>

          <div class="review_inner">
            <div class="review_pagination">
              <div
                v-for="item in this.aReview"
                :key="item.id"
                class="review_text"
              >
                <p>{{ item.info }}</p>
                <p>{{ item.title }}</p>
              </div>
              <!-- <div>
                <button v-if="currentPage > 1" @click="currentPage--">
                  이전 페이지
                </button>
                <span>{{ currentPage }} / {{ totalPages }}</span>
                <button v-if="currentPage < totalPages" @click="currentPage++">
                  다음 페이지
                </button>
              </div> -->
            </div>
          </div>
        </div>
      </div>

      <div id="qna_btn">
        <div class="qna">
          <p>Q&A(0)</p>
          <div class="qna_text">
            <p>
              상품에 대한 문의만 부탁드리며, 견적문의는 상단에 있는 버튼을
              클릭해주시기 바랍니다.
            </p>
            <div class="qna_btn">
              <button type="button" class="qna_goods">상품문의</button>
              <button type="button" class="qna_inquire">1:1 문의</button>
            </div>
          </div>
          <div class="qna_bar"></div>
          <span class="qna_notext">등록된 문의가 없습니다.</span>
        </div>
      </div>

      <div id="return_btn">
        <div class="return">
          <p>반품/교환</p>
          <table>
            <tr>
              <th>반품/교환 택배사</th>
              <td>한진택배</td>
            </tr>
            <tr>
              <th>반품 배송비(편도)</th>
              <td>4,500원</td>
            </tr>
            <tr>
              <th>교환 배송비(왕복)</th>
              <td>9,000원</td>
            </tr>
            <tr>
              <th>반품/교환 주소지</th>
              <td>
                경기 남양주시 순화궁로 249(별내동, 별내역 파라곤 스퀘어)M동 631,
                632호 (12106)
              </td>
            </tr>
            <tr>
              <th>반품/교환 신청 기준일</th>
              <td>
                상품 수령 후 14일 이내
                <span>
                  (단, 제품이 표시광고 내용과 다르거나 불량 등 계약과 다르게
                  이행된 경우는 제품 수령일로부터 3개월이내나 그 사실을 안 날
                  또는 알 수 있었던 날부터 30일 이내 교환/반품 가능)
                </span>
              </td>
            </tr>
            <tr>
              <th>반품/교환 불가능 사유</th>
              <td>
                1.소비자의 잘못으로 물건이 멸실되거나 훼손된 경우(단, 내용물을
                확인하기 위해 포장을 훼손한 경우는 제외)
                <br />
                2.소비자가 사용해서 물건의 가치가 뚜렷하게 떨어진 경우<br />
                3.시간이 지나 다시 판매하기 곤란할 정도로 물건의 가치가 뚜렷하게
                떨어진 경우<br />
                4.복제가 가능한 물건의 포장을 훼손한 경우(CD, DVD, GAME, 도서
                등)<br />
                5.용역 또는 문화산업진흥 기본법 제2조제5호의 디지털콘텐츠의
                제공이 게시된 경우(단, 가분적 용역 또는 가분적 디지털콘텐츠로
                구성된 계약의 경우 제공이 개시되지 않은 부분은 제외)<br />
                6.소비자의 주문에 따라 개별적으로 생산되는 상품이 제작에 들어간
                경우
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import oReviewData from "@/datasources/review-data";

export default {
  data() {
    return {
      aReview: oReviewData.aReview,
      posts: [], // 게시글 데이터
      currentPage: 1, // 현재 페이지 번호
      postsPerPage: 10, // 한 페이지에 보여줄 게시글의 개수

      //buy에 관한 스크립트
      selectedProduct: "",
    };
  },
  computed: {
    displayedItems() {
      // 현재 페이지에 해당하는 게시글 목록을 반환하는 computed 속성
      const startIndex = (this.currentPage - 1) * this.postsPerPage;
      const endIndex = startIndex + this.postsPerPage;
      return this.posts.slice(startIndex, endIndex);
    },
    totalPages() {
      // 총 페이지 수를 계산하는 computed 속성
      return Math.ceil(this.posts.length / this.postsPerPage);
    },
  },

  //methods안에 있는 애들은 buy에 관한 스크립트
  methods: {
    //
    changeImage(imgUrl) {
      this.$refs.bigImg.src = imgUrl;
    },
    //
    addToBuy() {
      if (!this.selectedProduct) {
        alert("제품을 선택하세요.");
        return;
      }

      // 선택된 제품에 따른 처리 추가
      // 장바구니에 추가하는 등의 동작 수행
    },
    addToCart() {
      if (!this.selectedProduct) {
        alert("제품을 선택하세요.");
        return;
      }
    },
    addToHeart() {
      if (!this.selectedProduct) {
        alert("제품을 선택하세요.");
        return;
      }
    },
    addSns() {
      if (!this.selectedProduct) {
        alert("제품을 선택하세요.");
        return;
      }
    },
    addToFavorites() {
      if (!this.selectedProduct) {
        alert("제품을 선택하세요.");
        return;
      }

      // 선택된 제품에 따른 처리 추가
      // 찜목록에 추가하는 등의 동작 수행
    },
    removeProduct() {
      // 제품 삭제 로직 구현
      this.selectedProduct = null; // 선택한 제품 초기화
    },
    decreaseQuantity() {
      if (this.selectedProduct.quantity > 1) {
        this.selectedProduct.quantity--; // 수량 감소
      }
    },
    increaseQuantity() {
      this.selectedProduct.quantity++; // 수량 증가
    },
  },
};
</script>

<style scoped>
.bedding_inner {
  max-width: 1200px;
  margin: auto;
}
.bedding_price {
  display: flex;
  justify-content: space-between;
  padding: 50px 10px 0;
}
/* .product_img {
  width: 100%;
} */
.big_img {
  width: 100%;
}
.big_img img {
  width: 90%;
  padding: 10px 0;
}
.small_img {
  display: flex;
  padding: 10px 0;
  width: 100%;
}
.small_img img {
  width: 90px;
  padding-right: 10px;
}

/* .information {
  width: 100%;
} */
.bedding_title {
  font-size: 20px;
}
.bedding_title img {
  width: 90px;
}

.score {
  display: flex;
  align-items: center;
  padding: 5px 0;
}
.score_text {
  display: flex;
  font-size: 17px;
  padding: 0 10px;
  cursor: pointer;
}

.score img {
  width: 20px;
}

.price {
  display: flex;
  padding: 10px 0;
  justify-content: space-between;
}
.discount {
  font-size: 20px;
  font-weight: bold;
}
.regular {
  padding-left: 10px;
  font-size: 13px;
  text-decoration: line-through;
  color: #ccc;
}
.price img {
  width: 25px;
  cursor: pointer;
}

.bedding_text {
  padding: 20px 0;
}
.bedding_text p {
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 10px;
}
.bedding_text ol {
  padding: 20px 15px;
}
.bedding_text ol li {
  padding-bottom: 5px;
}

.delivery p {
  padding-bottom: 5px;
}
.delivery span {
  font-weight: bold;
  padding-right: 10px;
}
.delivery img {
  width: 15px;
  cursor: pointer;
}
.delivery_box {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;

  padding: 10px;
}
.delivery_box img {
  width: 50px;
  padding-right: 20px;
}

.buy {
  padding-top: 50px;
}
.buy select {
  padding: 15px;
  border: 1px solid #ccc;
  margin: 10px 0 30px;
  width: 100%;
}
.selectedOption {
  border: 1px solid #f8f8f8;
  background: #f8f8f8;
  padding: 20px;
  margin-bottom: 30px;
}
.selectedOption_txt_delete {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 10px;
}
.selectedOption_txt {
  padding-bottom: 20px;
}
.selectedOption_txt_delete button {
  border: 1px solid #ccc;
  background: #fff;
  padding: 10px;
}
.selectedOption_btn_price {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.selectedOption_btn {
  display: flex;
  align-items: center;
  margin-top: 10px;
  border: 1px solid #ccc;
  background: #fff;
}
.selectedOption_btn button {
  border: none;
  background: #fff;
  padding: 10px;
  cursor: pointer;
  font-size: 20px;
}
.selectedOption_btn p {
  padding: 10px 15px;
}

.buy_btn_wrap {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}
.buy_btn_wrap button {
  border: 1px solid #ccc;
  background: none;
  padding: 13px 0;
  cursor: pointer;
  width: 30%;
}
.buy_btn_wrap button:first-child {
  border: 1px solid #4f4f4f;
  background: #4f4f4f;
  color: white;
  width: 30%;
}
.heart {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
}
.heart img {
  width: 25px;
  margin-right: 5px;
}

.pay_btn {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.pay_btn button {
  cursor: pointer;
}
.sns_btn {
  border: 1px solid #03c75a;
  background: #03c75a;
  padding: 20px 0;
  font-size: 15px;
  width: 80%;
}
.sns_btn span {
  border: 1px solid #000;
  background: #000;
  border-radius: 50%;
  padding: 3px 8px;
  color: #03c75a;
  /* font-size: 15px; */
  font-weight: bold;
}
.save {
  border: 1px solid #ccc;
  background: none;
  color: #03c75a;
  font-weight: bold;
  font-size: 15px;
  width: 15%;
}

.bedding_menu {
  max-width: 1200px;
  margin: 50px auto 0;
  justify-content: space-evenly;
  position: sticky; /* 요소를 스크롤에 따라 고정시킵니다. */
  top: 0; /* 스크롤 위치에서 요소를 고정할 위치를 지정합니다. */
  background-color: white; /* 필요에 따라 요소의 배경색을 지정합니다. */
  border-bottom: 1px solid #ccc;
  z-index: 10; /* 다른 요소 위에 고정되도록 순서를 조정합니다. */
}

#inner_img img {
  width: 90%;
  display: block;
  margin: 30px auto;
}

.crqr {
  max-width: 1200px;
  padding: 0 10px;
}

.caution {
  max-width: 1200px;
  text-align: start;
}
.caution p {
  font-size: 20px;
  padding: 10px;
}
table {
  display: block;
  margin: auto;
  border-collapse: collapse;
  border-top: 2px solid #79cab6;
}
tr {
  display: block;
  align-items: center;
  border-bottom: 1px solid #ededed;
}
th {
  width: 220px;
  text-align: start;
  background: #f9f9f9;
  padding: 15px 0 15px 30px;
}
td {
  padding: 15px 0 15px 30px;
}

.review_wrap {
  max-width: 1200px;
  text-align: start;
  padding-top: 100px;
  margin-bottom: 50px;
}
.review_wrap p {
  font-size: 20px;
  padding: 10px;
}
.review_wrap button {
  cursor: pointer;
}
.review_btn {
  border: 1px solid #79cab6;
  background: #79cab6;
  color: white;
  padding: 15px 30px;
  margin-bottom: 30px;
}
.review_look {
  margin-bottom: 20px;
}
.review_look button {
  border: none;
  background: none;
  display: flex;
  align-items: center;
  font-size: 15px;
}
.review_look button img {
  width: 25px;
  margin-right: 10px;
}
.review_pagination {
  border-top: 2px solid #79cab6;
}
.review_pagination p {
  padding: 0;
  font-size: 15px;
}
.review_text {
  border-bottom: 1px solid #ededed;
  padding: 20px 10px;
}

.qna {
  padding-top: 100px;
  margin-bottom: 50px;
}
.qna p {
  font-size: 20px;
  padding: 10px;
}
.qna_text p {
  font-size: 15px;
  padding-bottom: 10px;
}
.qna_btn {
  padding: 0 0 30px 10px;
}
.qna_btn button {
  margin-right: 10px;
  padding: 15px 30px;
  cursor: pointer;
}
.qna_goods {
  border: 1px solid #79cab6;
  background: #79cab6;
  color: white;
}
.qna_inquire {
  border: 1px solid #ccc;
  background: none;
}
.qna_notext {
  display: block;
  padding: 100px 50px;
  text-align: center;
  color: #ccc;
  font-size: 15px;
}
.qna_bar {
  border: 1px solid #79cab6;
}

.return {
  padding: 100px 0;
  margin-bottom: 50px;
}
.return p {
  font-size: 20px;
  padding: 10px;
}

@media screen and (max-width: 700px) {
  .bedding_price {
    display: block;
  }
  .product_img {
    width: 100%;
    margin: auto;
  }
  .big_img {
    width: 100%;
  }
  .big_img img {
    width: 100%;
  }
  .small_img {
    width: 20%;
  }
  .small_img img {
    width: 90%;
  }
  .information {
    width: 100%;
  }
  table,
  tr,
  td {
    font-size: 13px;
  }
}
</style>
