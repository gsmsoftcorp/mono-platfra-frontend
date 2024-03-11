<template>
  <div class="content">
    <div class="account_box">
      <h2 class="tit_h1">로그인</h2>
      <form class="loginForm" :submit="login">
        <fieldset class="input_form">
          <div class="input_box">
            <label for="id" class="hidden">아이디</label>
            <input type="text" id="id" class="basicInput" placeholder="아이디를 입력하세요" v-model="id">
          </div>
          <div class="input_box">
            <label for="pw" class="hidden">비밀번호</label>
            <input type="password" id="pw" class="basicInput" placeholder="비밀번호를 입력하세요" v-model="password">
          </div>
          <div class="login_tool flex_box">
            <div>
              <input type="checkbox" id="autoLogin" class="autoLogin type1" v-model="isAutoLogin" :checked="isAutoLogin">
              <label for="autoLogin">자동로그인</label>
            </div>
            <div class="go_find">
              <a class="small_txt">아이디</a>
              <span></span>
              <a class="small_txt">비밀번호 찾기</a>
              <!--<a href="/account/findIdPw" class="btnFindInfo">아이디·비밀번호 찾기</a>-->
            </div>
          </div>
          <button class="btn_primary positive width_max" @click="login">로그인</button>
          <div class="sns_login_box">
            <p><span>or</span>SNS로 로그인</p>
            <div class="sns_login_list">
              <a href="javascript:void(0)" class="btnKakao" @click="loginKakao()">카카오로 로그인</a>
              <a href="" class="btnNaver">네이버로 로그인</a>
              <a href="" class="btnFacebook">페이스북으로 로그인</a>
            </div>
          </div>
          <div class="horizontal_divider"></div>
          <div class="go_signup flex_box">
            <span>아직 아무거나의 회원이 아니신가요?</span>
            <a href="" class="point_txt">회원가입</a>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>

    export default {
        name: 'Login',
        data () {
            return {
                id: "",
                password: "",
                isAutoLogin: this.$cookies.get("isAutoLogin") == true ? true : false,
            }
        },
        created () {
        },
        mounted(){
            console.log( "test code mounted() call")
            // SDK를 초기화 합니다. 사용할 앱의 JavaScript 키를 설정해 주세요.
            if( !Kakao.isInitialized() ){
                Kakao.init("b9bfdc36b997ea02545fb4f6dea1a35d")
            }
        },
        methods: {
            login(e){
                e.preventDefault()
                // 자동 로그인 체크박스 값 저장
                this.$cookies.set("isAutoLogin", this.isAutoLogin, {
                    path: '/',
                    maxAge: 60 * 60 * 24 * 300
                })

                // id password 데이터 set
                let form = new FormData()
                form.append('id', this.id)
                form.append('password', this.password)

                // 로그인 시도
                this.$axios.$post('/api/authenticate', form).then((data) => {
                    console.log( "login then : ", data)
                    if( data.flagSuccess ){
                        // 쿠키 저장
                        this.$cookies.set("loginToken", data.token, {
                            path: '/',
                            maxAge: 60 * 60 * 24 * 300
                        })
                        if( data.filepath != null && data.fileNameEnc != null){
                            // 프로필 이미지 url 저장
                            this.setProfileImg( data.filepath + data.fileNameEnc )
                        }
                        // 메인 이동
                        this.$router.push({ name: data.url })
                    }else{
                        alert("로그인에 실패 하였습니다.")
                    }
                }).catch(function (error) {
                    console.log( "login error : ", error)
                    alert("알 수 없는 오류가 발생하였습니다.")
                })

                // this.$axios.$post('/api/logout', form).then((data) => {
                //   console.log( "then : ", data)
                //   if( data.success ){
                //         this.$router.push({ name: 'index' });
                //   }else{
                //         alert("로그아웃에 실패 하였습니다.");
                //   }
                // }).catch(function (error) {
                //   console.log( "error : ", error)
                // })

            },
            // 카카오 로그인
            loginKakao(){
                console.log("test code loginKakao() call")
                // SDK 초기화 여부를 판단합니다.
                if( Kakao.isInitialized() ){
                    console.log("test code isInitialized true")

                    console.log("test code 로그아웃중 토큰 @@@@@@ : " + Kakao.Auth.getAccessToken() )
                    // if( Kakao.Auth.getAccessToken() == null ){
                    // TODO 로그인 하면 URL에 ?code={토큰}이 생김 브릿지 페이지 만들것
                    /*
                    * https://developers.kakao.com/console/app/567341/product/login
                    * 위 주소에 Redirect URI 설정 되어 있어야함.
                    * */
                    const hostURL = window.location.origin
                    Kakao.Auth.authorize({
                        // redirectUri: hostURL + '/account/login',
                        redirectUri: hostURL + "/account/signupSns"
                    });

                    // Kakao.Auth.login({
                    //   success: function(authObj) {
                    //     console.log("test code success : ", authObj)
                    //     console.log("test code success 토큰 정보 : ", authObj.access_token)
                    //   },
                    //   fail: function(error) {
                    //     alert("카카오 로그인 실패 관리자에게 문의해주세요.")
                    //     console.log("test code error : ", error)
                    //   },
                    // })
                    // }else{
                    // alert("이미 로그인 되어 있습니다.")
                    // TODO 로그아웃 테스트 코드 카카오 로그인 테스트 완료되면 삭제할 것
                    // Kakao.Auth.logout(function() {
                    //   console.log(Kakao.Auth.getAccessToken());
                    //   console.log("test code logout 호출")
                    // });
                    // console.log("test code 로그아웃중 토큰 22 : " + Kakao.Auth.getAccessToken())
                    //
                    // Kakao.API.request({
                    //   url: '/v1/user/unlink',
                    //   success: function(response) {
                    //     console.log("카카오 로그아웃 성공 22");
                    //   },
                    //   fail: function(error) {
                    //     console.log("카카오 로그아웃 실패 22");
                    //   },
                    // });
                    // }
                }
                else{
                    alert("카카오 로그인 활성화 실패 관리자에게 문의해주세요.")
                }
            },
        }

    }
</script>

<style scoped>
  @import '~/assets/resource/account/css/login.css';
</style>
