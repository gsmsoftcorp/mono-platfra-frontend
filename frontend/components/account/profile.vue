<template>
  <div class="content">
    <div class="accountBox">
      <h2 class="bigTit">내 프로필</h2>
      <div class="profileHead">
        <div class="profileImgBox">
          <img src="~/assets/resource/account/img/basic.jpg" alt="" v-if="this.getProfileImg === '' ? true : false">
          <img :src="this.getProfileImg" alt="" v-else>
<!--          <a class="edit">변경</a>-->
          <input type="file" id="file" class="edit file" ref="file" @change="addInputfile()" />
        </div>
        <div>
          <strong class="name">{{account.id}} (인증계정 : {{account.confirmYN}})</strong>
        </div>
      </div>
      <div class="profileDetailBox">
        <div class="group">
          <div>
            <strong>이름</strong>
            <input type="text" placeholder="이름을 입력하세요." class="basicInput" v-model="account.name">
          </div>
          <div>
            <a class="edit" @click="changeProfile(0)">변경</a>
          </div>
        </div>
        <div class="group">
          <div>
            <strong>비밀번호</strong>
            <input type="password" placeholder="********" class="basicInput" readonly="true">
          </div>
          <div>
            <a class="edit" @click="displayModal">변경</a>
          </div>
        </div>
        <div class="group clearfix">
          <div class="leftSide">
            <strong>휴대폰번호</strong>
            <input type="text" placeholder="전화번호를 입력하세요." class="basicInput" v-model="account.phone">
          </div>
          <a class="edit" @click="changeProfile(1)">변경</a>
        </div>
        <div class="group clearfix">
          <div class="leftSide">
            <strong>이메일</strong>
            <input type="text" placeholder="이메일을 입력하세요." class="basicInput" v-model="account.email">
          </div>
          <a class="edit" @click="changeProfile(2)">변경</a>
        </div>
        <div class="centerBox">
          <a class="btnMakePlatfra blue" @click="authComfirm">이메일 인증 보내기</a>
        </div>
      </div>
    </div>
    <ModalPassword ref="modalPassword"></ModalPassword>
  </div>
</template>

<script>
import ModalPassword from '../modal/password'
export default {
  name: 'Profile',
  components: { ModalPassword },
  data () {
    return {
      account: {
        id: "",
        name: "",
        email: "",
        phone: ""
      },
      imgFile: "" // 업로드 이미지
    }
  },
  created () {
    console.log("profile crated() call")
    this.$axios.$get('/api/account/profile').then((data) => {
      console.log( "profile then : ", data)
      this.account = _.cloneDeep(data)
      console.log( "profile then this.account : ", this.account)
      if( data.filepath != null && data.fileNameEnc != null){
        // 프로필 이미지 url 저장
        this.setProfileImg( data.filepath + data.fileNameEnc )
      }
    }).catch(function (error) {
      console.log( "/api/account/profile error : ", error)
      alert("알 수 없는 오류가 발생하였습니다.")
    })
  },
  methods: {
    // 이메일 인증 버튼 클릭
    authComfirm(){
      this.$axios.$get('/api/account/auth').then((data) => {
        console.log( "auth then : ", data)
        alert( data.resultMsg );
      }).catch(function (error) {
        console.log( "/api/account/auth error : ", error)
        alert("알 수 없는 오류가 발생하였습니다.")
      })
    },
    displayModal(){
      this.$refs.modalPassword.isDisplayModal = true
    },
    changeProfile( profileIDX ){
      console.log("changeProfile call()")
      let profile = null
      if( profileIDX == 0 ){ // 이름
        profile = {
          name: this.account.name.trim()
        }
      }else if( profileIDX == 1 ){ // 휴대전화
        profile = {
          phone: this.account.phone.trim()
        }
      }else if( profileIDX == 2 ){ // 이메일
        profile = {
          email: this.account.email.trim()
        }
      }
      // 프로필 변경
      this.$axios.$post('/api/account/profile', profile).then((data) => {
        console.log( "changeProfile then : ", data)
        alert( data.resultMsg )
      }).catch(function (error) {
        console.log( "changeProfile error : ", error)
        alert("알 수 없는 오류가 발생하였습니다.")
      })
    },
    // TODO  (정책) [나중작업] 프로필 사진 여러개 할지 GIF 할지
    addInputfile(){
      this.imgFile = this.$refs.file.files[0];

      let formData = new FormData()

      // 파일 관련 유효성 검사 정책필요. 확장자, 파일명, 파일 사이즈 등.
      formData.append('imgFile', this.imgFile);
      // for(let i = 0; i < this.fileList.length; ++i) {
      //   formData.append('fileList[' + i + ']', this.fileList[i]);
      // }

      this.$axios.$post('/api/account/setProfileImg', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      }).then((data) => {
        // this.movePlatfraDetail(data.platfraId);
        console.log("test code 이미지 바꾸기 성공", data);
        // 프로필 이미지 url 및 파일명 저장
        if( data != null )
          this.setProfileImg( data )
      })
    },
  }

}
</script>

<style scoped>
  @import '~/assets/resource/account/css/account_common.css';
  @import '~/assets/resource/account/css/profile.css';
</style>
