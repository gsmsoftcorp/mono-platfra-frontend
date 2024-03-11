<template>
  <div class="content">
    <div class="accountBox">
      <div class="findTab">
        <a>아이디 찾기</a>
        <a class="checked">비밀번호 찾기</a>
      </div>
      <div class="tabCont">
        <div class="resultBox">
          <p class="result">회원님의 계정 비밀번호를 재설정해주세요.</p>
          <div class="group">
            <label for="pw" class="hidden">비밀번호</label>
            <input type="password" id="pw" class="basicInput" placeholder="비밀번호를 입력하세요" v-model="password">
          </div>
          <div class="group">
            <label for="pwCheck" class="hidden">비밀번호 확인</label>
            <input type="password" id="pwCheck" class="basicInput" placeholder="비밀번호를 다시 입력하세요" v-model="passwordConfirm">
          </div>
          <span class="guide">* 8 ~ 20자의 영문 대/소문자, 숫자, 특수문자를 사용하세요.</span>
          <a class="btnSize4 blue round4" @click="changePassword">새 비밀번호 설정하기</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'FindPwResult',
    data () {
        return {
          id: this.$route.params.confirmNum,
          password: "",
          passwordConfirm: ""
        }
    },
    created () {
      if( this.id == null || this.id == undefined ){
        alert("인증 오류")
        this.$router.push({ name: "account-findIdPw" })
      }
    },
    methods: {
      changePassword(){
        console.log("changePassword 실행")
        const params = {
          id: this.id.trim(),
          password: this.password.trim(),
          passwordConfirm: this.passwordConfirm.trim()
        }

        // 비밀번호 변경 시도
        this.$axios.$post('/api/account/changePassword', params).then((data) => {
          console.log( "changePassword then : ", data)
          alert( data.resultMsg )
          if( data.flagSuccess ){
            this.$router.push({ name: "account-login" })
          }
        }).catch(function (error) {
          console.log( "changePassword error : ", error)
          alert("알 수 없는 오류가 발생하였습니다.")
        })
      }
    }

}
</script>

<style scoped>
  @import '~/assets/resource/account/css/account_common.css';
  @import '~/assets/resource/account/css/find_pw_result.css';
</style>
