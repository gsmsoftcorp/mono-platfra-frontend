<template>
  <div class="content">
    <div class="accountBox">
      <div class="findTab">
        <a :class="findIDCheck" @click="findID">아이디 찾기</a>
        <a :class="findPWCheck" @click="findPW">비밀번호 찾기</a>
      </div>
      <div class="tabCont">
        <div class="clearfix">
          <div class="findId" v-show="findIDCheck=='checked' ? true : false">
            <p class="hidden">아이디 찾기 방법을 선택해주세요.</p>
            <ul>
<!--              <li>-->
<!--                <div>-->
<!--                  <input type="radio" name="findWay_id" id="onMobile_id" value="onMobile_id" checked="checked">-->
<!--                  <label for="onMobile_id" class="findWay">휴대전화로 찾기</label>-->
<!--                  <span class="guide">가입 당시 입력한 휴대전화 번호를 통해 아이디를 찾을 수 있습니다.</span>-->
<!--                </div>-->
<!--                <div class="inputBox" style="display: block">&lt;!&ndash;checkbox:checked 일때 오픈&ndash;&gt;-->
<!--                  <div class="group">-->
<!--                    <label for="nameOnMobile_id" class="hidden">이름</label>-->
<!--                    <input type="text" id="nameOnMobile_id" class="basicInput" placeholder="이름을 입력하세요">-->
<!--                  </div>-->
<!--                  <div class="group">-->
<!--                    <label for="numberOnMobile_id" class="hidden">휴대폰번호</label>-->
<!--                    <div class="clearfix">-->
<!--                      <input type="text" id="numberOnMobile_id" class="mobile basicInput" placeholder="회원정보에 등록된 휴대폰번호를 입력하세요">-->
<!--                      <button class="btnSize3 round1 blue">인증번호 받기</button>-->
<!--                    </div>-->
<!--                    <div class="verifyBox">-->
<!--                      <label for="verifyOnMobile_id" class="hidden">인증번호</label>-->
<!--                      <input type="text" id="verifyOnMobile_id" class="basicInput" placeholder="인증번호를 입력하세요(6자리)">-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </li>-->
              <li>
                <div>
                  <input type="radio" name="findWay_id" id="onMail_id" value="onMail_id" checked="checked">
                  <label for="onMail_id" class="findWay">이메일로 찾기</label>
                  <span class="guide">가입 당시 입력한 이메일주소를 통해 아이디를 찾을 수 있습니다.</span>
                </div>
                <div class="inputBox" style="display: block"><!--checkbox:checked 일때 오픈-->
                  <div class="group">
                    <label for="nameOnMail_id" class="hidden">이름</label>
                    <input type="text" id="nameOnMail_id" class="basicInput" placeholder="이름을 입력하세요">
                  </div>
                  <div class="group">
                    <label for="mailOnMail_id" class="hidden">이메일주소</label>
                    <div class="clearfix">
                      <input type="text" id="mailOnMail_id" class="mobile basicInput" placeholder="회원정보에 등록된 이메일주소를 입력하세요">
                      <button class="btnSize3 round1 blue">인증번호 받기</button>
                    </div>
                    <div class="verifyBox">
                      <label for="verifyOnMail_id" class="hidden">인증번호</label>
                      <input type="text" id="verifyOnMail_id" class="basicInput" placeholder="인증번호를 입력하세요(6자리)">
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="findPw" v-show="findPWCheck=='checked' ? true : false">
            <p class="hidden">비밀번호 찾기 방법을 선택해주세요.</p>
            <ul>
<!--              <li>-->
<!--                <div>-->
<!--                  <input type="radio" name="findWay_pw" id="onMobile_pw" value="onMobile_pw">-->
<!--                  <label for="onMobile_pw" class="findWay">휴대전화로 찾기</label>-->
<!--                  <span class="guide">가입 당시 입력한 휴대전화 번호를 통해 비밀번호를 찾을 수 있습니다.</span>-->
<!--                </div>-->
<!--                <div class="inputBox" style="display: block">&lt;!&ndash;checkbox:checked 일때 오픈&ndash;&gt;-->
<!--                  <div class="group">-->
<!--                    <label for="idOnMobile_pw" class="hidden">아이디</label>-->
<!--                    <input type="text" id="idOnMobile_pw" class="basicInput" placeholder="아이디를 입력하세요">-->
<!--                  </div>-->
<!--                  <div class="group">-->
<!--                    <label for="nameOnMobile_pw" class="hidden">이름</label>-->
<!--                    <input type="text" id="nameOnMobile_pw" class="basicInput" placeholder="이름을 입력하세요">-->
<!--                  </div>-->
<!--                  <div class="group">-->
<!--                    <label for="numberOnMobile_pw" class="hidden">휴대폰번호</label>-->
<!--                    <div class="clearfix">-->
<!--                      <input type="text" id="numberOnMobile_pw" class="mobile basicInput" placeholder="회원정보에 등록된 휴대폰번호를 입력하세요">-->
<!--                      <button class="btnSize3 round1 blue">인증번호 받기</button>-->
<!--                    </div>-->
<!--                    <div class="verifyBox">-->
<!--                      <label for="verifyOnMobile_pw" class="hidden">인증번호</label>-->
<!--                      <input type="text" id="verifyOnMobile_pw" class="basicInput" placeholder="인증번호를 입력하세요(6자리)">-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </li>-->
              <li>
                <div>
                  <input type="radio" name="findWay_pw" id="onMail" checked="checked">
                  <label for="onMail" class="findWay">이메일로 찾기</label>
                  <span class="guide">가입 당시 입력한 이메일주소를 통해 비밀번호를 찾을 수 있습니다.</span>
                </div>
                <div class="inputBox" style="display: block"><!--checkbox:checked 일때 오픈-->
<!--                  <div class="group">-->
<!--                    <label for="idOnMail_pw" class="hidden">아이디</label>-->
<!--                    <input type="text" id="idOnMail_pw" class="basicInput" placeholder="아이디를 입력하세요">-->
<!--                  </div>-->
<!--                  <div class="group">-->
<!--                    <label for="nameOnMail_pw" class="hidden">이름</label>-->
<!--                    <input type="text" id="nameOnMail_pw" class="basicInput" placeholder="이름을 입력하세요">-->
<!--                  </div>-->
                  <div class="group">
                    <label for="mailOnMail_pw" class="hidden">이메일주소</label>
                    <div class="clearfix">
                      <input type="text" id="mailOnMail_pw" class="mobile basicInput" placeholder="회원정보에 등록된 이메일주소를 입력하세요" v-model="id">
                      <button class="btnSize3 round1 blue" @click="sendConfirmNumPW">인증번호 받기</button>
                    </div>
                    <div class="verifyBox">
                      <label for="verifyOnMail_pw" class="hidden">인증번호</label>
                      <input type="text" id="verifyOnMail_pw" class="basicInput" placeholder="인증번호를 입력하세요(6자리)" v-model="confirmNum">
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="rightBox">
          <!-- gray1: unClick // blue: Click -->
          <button class="btnSize2 blue round4 next" @click="find">다음</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FindId',
  data () {
    return {
      findIDCheck: "checked",
      findPWCheck: "",
      id: "",
      confirmNum: "",
      clickConfirmNumPW: false,
    }
  },
  created () {
  },
  methods: {
    findID(){
      this.findIDCheck = "checked"
      this.findPWCheck = ""
    },
    findPW(){
      this.findIDCheck = ""
      this.findPWCheck = "checked"
    },
    // 비밀번호 찾기 인증 번호 보내기
    sendConfirmNumPW(){
      console.log("인증번호 받기 누름")
      if( this.id.trim() != "" ){
        const params = {
          id: this.id.trim()
        }

        // 인증번호 받기 시도
        this.$axios.$post('/api/account/sendConfirmNumPW', params).then((data) => {
          console.log( "sendConfirmNumPW then : ", data)
          alert( data.resultMsg )
          if( data.flagSuccess ){
            this.clickConfirmNumPW = true
          }
        }).catch(function (error) {
          console.log( "sendConfirmNumPW error : ", error)
          alert("알 수 없는 오류가 발생하였습니다.")
        })
      }else {
        alert("ID를 입력해 주세요.")
      }
    },
    // '다음' 버튼 누름 (각종찾기)
    find(){
      console.log("=== 다음 버튼 누름 ===")
      // ID 찾기
      if( this.findIDCheck == 'checked' ){
        console.log("ID 찾기 실행")
        alert("아직 구현 되지 않은 기능입니다.")
      }
      // PW 찾기
      else{
        console.log("PW 찾기 실행")
        if( this.clickConfirmNumPW == true ){
          const params = {
            id: this.confirmNum.trim()
          }

          // 비밀번호 찾기 인증번호 계정 정상여부 확인
          this.$axios.$post('/api/account/confirmNumPW', params).then((data) => {
            console.log( "sendConfirmNumPW then : ", data)
            if( data.flagSuccess ){
              this.$router.push({ name: "account-findPwResult", params: { confirmNum: this.confirmNum } })
            }else{
              alert( data.resultMsg )
            }
          }).catch(function (error) {
            console.log( "confirmNumPW error : ", error)
            alert("알 수 없는 오류가 발생하였습니다.")
          })
        }else{
          alert("인증번호를 받은 후 진행해 주세요.")
        }
      }
    }
  }

}
</script>

<style>
  @import '~/assets/resource/account/css/account_common.css';
  @import '~/assets/resource/account/css/find_id_pw.css';
</style>
