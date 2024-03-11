<template>
  <div class="popup round3" style="width: 50%" v-show="isDisplayModal"><!-- 위치 한가운데, 백그라운드 반투명어둡게-->
    <h2 class="subTit">비밀번호 변경</h2>
    <div class="group">
      <input type="password" placeholder="기존 비밀번호를 입력하세요" class="basicInput" v-model="originPassword">
      <a class="goFindPw guide">비밀번호를 잊으셨나요?</a>
    </div>
    <div class="group">
      <input type="password" placeholder="새 비밀번호를 입력하세요" class="basicInput" v-model="password">
    </div>
    <div class="group">
      <input type="password" placeholder="새 비밀번호를 다시 입력하세요" class="basicInput" v-model="passwordConfirm">
    </div>
    <div class="rightBox">
      <a class="btnSize2 blue round4" @click="changePassword">변경</a>
      <a @click="closeModal">취소</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal-password',
  data(){
    return{
      isDisplayModal: false,
      originPassword: "",
      password: "",
      passwordConfirm: "",
    }
  },
  methods: {
    closeModal(){
      this.isDisplayModal = false
    },
    changePassword(){
      console.log("changePassword() click originPassword : " + this.originPassword.trim() +
        " // password : " + this.password.trim() + " // passwordConfirm : " + this.passwordConfirm.trim())
      const profile = {
        originPassword: this.originPassword.trim(),
        password: this.password.trim(),
        passwordConfirm: this.passwordConfirm.trim()
      }
      // 프로필에서 비밀번호 변경
      this.$axios.$post('/api/account/profile', profile).then((data) => {
        console.log( "changeProfile then : ", data)
        alert( data.resultMsg )
        this.$router.push({ name: "account-login" })
      }).catch(function (error) {
        console.log( "changeProfile error : ", error)
        alert("알 수 없는 오류가 발생하였습니다.")
      })
    },
  }
}
</script>

<style scoped>
  @import '~/assets/resource/account/css/account_common.css';
  @import '~/assets/resource/account/css/profile.css';
</style>
