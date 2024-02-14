<template>
  <div class="login">
    <p class="title">로그인</p>
    <div class="login_box">
      <div class="member">
        <p class="mem_title">회원 로그인</p>
        <form class="login_wrap">
          <div class="login_input">
            <input type="text" placeholder="아이디" v-model="id" />
            <input type="password" placeholder="비밀번호" v-model="password" />
          </div>
          <div class="login_save">
            <label>
              <input type="checkbox" name="" id="" />
              아이디 저장
            </label>
          </div>
        </form>

        <button type="button" class="login_btn" @click="validateLogin">
          로그인
        </button>

        <div class="login_package">
          <button type="button" class="join">회원가입</button>
          <button type="button">아이디 찾기</button>
          <button type="button">비밀번호 찾기</button>
        </div>
        <!-- <button type="button" class="login_sns">네이버로 시작하기</button> -->
        <!-- 네이버 로그인 버튼 노출 영역 -->
        <div id="naver_id_login"></div>
        <!-- //네이버 로그인 버튼 노출 영역 -->
      </div>

      <div class="bar"></div>

      <div class="non_member">
        <form action="">
          <p class="non_mem_title">비회원 주문조회</p>
          <input type="text" placeholder="주문자명" v-model="name" />
          <input type="text" placeholder="주문번호" v-model="nameNum" />

          <button type="button" class="non_check" @click="validateCheck">
            확인
          </button>
        </form>
        <div class="guide">
          <img src="../assets/icon_guide.png" alt="" />
          <span>
            주문번호와 비밀번호를 잊으신 경우, 고객센터로 전화하여 주시기
            바랍니다.
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      password: "",
      name: "",
      nameNum: "",
    };
  },
  mounted() {
    //네이버로그인
    this.initializeNaverLogin();
  },
  methods: {
    // 로그인 유효성검사
    validateLogin() {
      if (!this.id || !this.password) {
        alert("아이디와 비밀번호를 모두 입력해주세요.");
      } else {
        // 여기에 로그인 로직을 추가하세요.
        // 로그인이 성공하면 다음 단계를 수행합니다.
      }
    },
    validateCheck() {
      if (!this.name || !this.nameNum) {
        alert("주문자명과 주문자번호를 모두 입력해주세요.");
      } else {
        // 여기에 로그인 로직을 추가하세요.
        // 로그인이 성공하면 다음 단계를 수행합니다.
      }
    },

    naverBtn() {},

    //네이버로그인
    initializeNaverLogin() {
      const clientId = "_5AP836fsvHSOPabzLh3";
      const callbackUrl = "http://localhost:8080/";

      const naverIdLogin = new naver_id_login(clientId, callbackUrl);
      const state = naverIdLogin.getUniqState();
      naverIdLogin.setButton("green", 3, 45);
      naverIdLogin.setDomain("https://rlobll.github.io/login");
      naverIdLogin.setState(state);
      naverIdLogin.setPopup();
      naverIdLogin.init_naver_id_login();
    },
  },
};
</script>

<style scoped>
.login {
  max-width: 600px;
  margin: 100px auto 0;
}
.title {
  font-size: 30px;
  margin-bottom: 20px;
}
.login_box {
  border: 1px solid #ccc;
  padding: 30px;
}
.member {
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
}
.login_input {
  display: flex;
  flex-direction: column;
}
.login_save {
  margin: 10px 0 20px;
}
.login_input input,
.non_member input {
  border: 1px solid #ccc;
  margin-bottom: 10px;
  outline: none;
}
.login_btn {
  margin-bottom: 20px;
  background: black;
  border: 1px solid black;
  font-weight: bold;
  font-size: 15px;
  color: white;
}
.login_package {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.login_package button {
  width: 150px;
}
.join {
  border: 1px solid black;
  background: black;
  color: white;
}
.login_sns {
  border: 1px solid #03c75a;
  background: #03c75a;
  font-size: 15px;
  color: white;
}
#naver_id_login {
  text-align: right;
  /* border: 1px solid #1fc801;
  background: #1fc801; */
}

.mem_title,
.non_mem_title {
  font-size: 20px;
  margin-bottom: 10px;
}
input {
  padding: 20px;
}
/* bar */
.bar {
  border-top: 1px solid #ccc;
  margin-bottom: 50px;
}
.non_member form {
  display: flex;
  flex-direction: column;
}
.non_check {
  border: 1px solid black;
  margin-top: 20px;
}
.guide {
  font-size: 12px;
  color: #aaa;
}
.guide img {
  width: 10px;
}

button {
  border: 1px solid #ccc;
  padding: 15px;
  background: none;
  margin-bottom: 10px;
  cursor: pointer;
}

@media screen and (max-width: 700px) {
  .login {
    padding: 0 10px;
  }
}
</style>
