<template>
  <div class="content">
    <div class="account_box">
      <h2 class="tit_h1">회원가입</h2>
      <div class="agreement_box">
        <!--<button class="width_max all_agree">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"/></svg>
          <span>모두 확인, 동의합니다</span>
        </button>-->
        <div class="agree_list">
          <div class="flex_box">
            <div>
              <input type="checkbox" id="agreeService" class="type1">
              <label for="agreeService">아무거나 이용약관 동의</label>
            </div>
            <button class="small_txt gray_txt">내용 보기</button><!--클릭하면 agreeContBox display:block으로 변경-->
          </div>
          <div class="agree_cont scroll_box">
            <div>
              <p>헌법재판소 재판관은 정당에 가입하거나 정치에 관여할 수 없다. 대통령은 제1항과 제2항의 처분 또는 명령을 한 때에는 지체없이 국회에 보고하여 그 승인을 얻어야 한다.</p>
              <p>모든 국민은 법률이 정하는 바에 의하여 선거권을 가진다. 공무원인 근로자는 법률이 정하는 자에 한하여 단결권·단체교섭권 및 단체행동권을 가진다.</p>
              <p>선거에 관한 경비는 법률이 정하는 경우를 제외하고는 정당 또는 후보자에게 부담시킬 수 없다. 대통령의 국법상 행위는 문서로써 하며, 이 문서에는 국무총리와 관계 국무위원이 부서한다. 군사에 관한 것도 또한 같다.</p>
              <p>제1항의 해임건의는 국회재적의원 3분의 1 이상의 발의에 의하여 국회재적의원 과반수의 찬성이 있어야 한다. 대법관의 임기는 6년으로 하며, 법률이 정하는 바에 의하여 연임할 수 있다.</p>
              <p>외국인은 국제법과 조약이 정하는 바에 의하여 그 지위가 보장된다. 대통령의 임기연장 또는 중임변경을 위한 헌법개정은 그 헌법개정 제안 당시의 대통령에 대하여는 효력이 없다.</p>
            </div>
          </div>
        </div>
        <div class="agree_list">
          <div class="flex_box">
            <div>
              <input type="checkbox" id="agreePrivacy" class="type1">
              <label for="agreePrivacy">아무거나 이용약관 동의</label>
            </div>
            <button class="small_txt gray_txt">내용 보기</button><!--클릭하면 agreeContBox display:block으로 변경-->
          </div>
          <div class="agree_cont scroll_box">
            <div>
              <p>헌법재판소 재판관은 정당에 가입하거나 정치에 관여할 수 없다. 대통령은 제1항과 제2항의 처분 또는 명령을 한 때에는 지체없이 국회에 보고하여 그 승인을 얻어야 한다.</p>
              <p>모든 국민은 법률이 정하는 바에 의하여 선거권을 가진다. 공무원인 근로자는 법률이 정하는 자에 한하여 단결권·단체교섭권 및 단체행동권을 가진다.</p>
              <p>선거에 관한 경비는 법률이 정하는 경우를 제외하고는 정당 또는 후보자에게 부담시킬 수 없다. 대통령의 국법상 행위는 문서로써 하며, 이 문서에는 국무총리와 관계 국무위원이 부서한다. 군사에 관한 것도 또한 같다.</p>
              <p>제1항의 해임건의는 국회재적의원 3분의 1 이상의 발의에 의하여 국회재적의원 과반수의 찬성이 있어야 한다. 대법관의 임기는 6년으로 하며, 법률이 정하는 바에 의하여 연임할 수 있다.</p>
              <p>외국인은 국제법과 조약이 정하는 바에 의하여 그 지위가 보장된다. 대통령의 임기연장 또는 중임변경을 위한 헌법개정은 그 헌법개정 제안 당시의 대통령에 대하여는 효력이 없다.</p>
            </div>
          </div>
        </div>
          <!--<div class="agreeList">
            <input type="checkbox" id="agreeAll" v-model="isChecked_all" @click='checkAll'>
            <label for="agreeAll" class="agreeAll">아무거나 이용약관, 개인정보 수집 및 이용에 모두 동의합니다.</label>
          </div>
          <div class="agreeList">
            <div class="clearfix">
              <div class="leftSide">
                <input type="checkbox" id="agreeService" v-model="isChecked_01" @change='updateCheckAll()'>
                <label for="agreeService">아무거나 이용약관 동의</label>
              </div>
              <button class="showCont rightSide" @click="agree_01">내용 보기</button>&lt;!&ndash;클릭하면 agreeContBox display:block으로 변경&ndash;&gt;
            </div>
            <div class="agreeContBox scrollBox round1" :style="{ display: agreeStyle_01 }">
              <div class="agreeCont">
                <p>헌법재판소 재판관은 정당에 가입하거나 정치에 관여할 수 없다. 대통령은 제1항과 제2항의 처분 또는 명령을 한 때에는 지체없이 국회에 보고하여 그 승인을 얻어야 한다.</p>
                <p>모든 국민은 법률이 정하는 바에 의하여 선거권을 가진다. 공무원인 근로자는 법률이 정하는 자에 한하여 단결권·단체교섭권 및 단체행동권을 가진다.</p>
                <p>선거에 관한 경비는 법률이 정하는 경우를 제외하고는 정당 또는 후보자에게 부담시킬 수 없다. 대통령의 국법상 행위는 문서로써 하며, 이 문서에는 국무총리와 관계 국무위원이 부서한다. 군사에 관한 것도 또한 같다.</p>
                <p>제1항의 해임건의는 국회재적의원 3분의 1 이상의 발의에 의하여 국회재적의원 과반수의 찬성이 있어야 한다. 대법관의 임기는 6년으로 하며, 법률이 정하는 바에 의하여 연임할 수 있다.</p>
                <p>외국인은 국제법과 조약이 정하는 바에 의하여 그 지위가 보장된다. 대통령의 임기연장 또는 중임변경을 위한 헌법개정은 그 헌법개정 제안 당시의 대통령에 대하여는 효력이 없다.</p>
              </div>
            </div>
          </div>
          <div class="agreeList">
            <div class="clearfix">
              <div class="leftSide">
                <input type="checkbox" id="agreePrivacy" v-model="isChecked_02" @change='updateCheckAll()'>
                <label for="agreePrivacy">개인정보 수집 및 이용 동의</label>
              </div>
              <button class="showCont rightSide" @click="agree_02">내용 보기</button>&lt;!&ndash;클릭하면 agreeContBox display:block으로 변경&ndash;&gt;
            </div>
            <div class="agreeContBox scrollBox" :style="{ display: agreeStyle_02 }">
              <div class="agreeCont">
                <p>개인정보 수집</p>
               <ul>
                 <li><strong>목적</strong><span>개인식별, 서비스 이용을 위한 연락처</span></li>
                 <li><strong>항목</strong><span>개인식별, 서비스 이용을 위한 연락처</span></li>
                 <li><strong>이름</strong><span>이름, 아이디, 비밀번호, 이메일</span></li>
                 <li><strong>보유기간</strong><span>회원탈퇴 시 즉시 파기</span></li>
               </ul>
              </div>
            </div>
          </div>-->
        </div>
      <div class="horizontal_divider"></div>
      <div class="profile_img_box_m">
        <img src="~/assets/resource/common/img/profile.jpg" class="profile_img" alt="마이 페이지">
        <input type="file" id="profile_img_upload" class="profile_img_upload">
        <label for="profile_img_upload">프로필 이미지 설정</label>
      </div>
      <div class="input_form">
        <div>
          <label for="id" class="form_label">아이디</label>
          <div class="input_box">
            <input type="text" id="id" class="basicInput" placeholder="아이디를 입력하세요" v-model="id">
          </div>
          <p class="guide">영문/숫자 4자 이상을 입력해 주세요.</p>
        </div>
       <div>
         <label for="pw" class="form_label">비밀번호</label>
         <div class="input_box">
           <input type="password" id="pw" class="basicInput" placeholder="비밀번호를 입력하세요" v-model="password">
         </div>
         <p class="guide">8 ~ 20자의 영문 대/소문자, 숫자, 특수문자를 사용하세요.</p>
       </div>
        <div>
          <label for="pwCheck" class="form_label">비밀번호 확인</label>
          <div class="input_box">
            <input type="password" id="pwCheck" class="basicInput" placeholder="비밀번호를 다시 입력하세요" v-model="passwordConfirm">
          </div>
        </div>
      </div>
        <!--<div class="input_box">
          <label for="name" class="form_label">이름</label>
          <input type="text" id="name" class="basicInput" placeholder="이름을 입력하세요">
        </div>
        <div class="input_box">
          <label for="birth" class="form_label">생년월일</label>
          <input type="text" id="birth" class="basicInput" placeholder="생년월일을 입력하세요(yyyymmdd)">
        </div>
        <div class="input_box">
          <label for="mobile" class="form_label">휴대폰번호</label>
          <div class="clearfix">
            <input type="text" id="mobile" class="mobile basicInput" placeholder="휴대폰번호를 입력하세요(숫자만)">
            <button class="btnSize3 verify blue round1">인증번호 전송</button>
          </div>
          <div class="verifyBox">
            <label for="verify" class="hidden">인증번호</label>
            <input type="text" id="verify" class="basicInput" placeholder="인증번호를 입력하세요(6자리)">
          </div>
        </div>
        <div class="input_box">
          <label for="mail" class="form_label">이메일</label>
          <input type="text" id="mail" class="basicInput" placeholder="이메일을 입력하세요">
        </div>-->
        <button class="positive btn_primary width_max" @click="regist">회원가입</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Signup',
  data () {
    return {
      isChecked_all: false,
      isChecked_01: false,
      isChecked_02: false,
      agreeStyle_01: "none",
      agreeStyle_02: "none",
      id: "",
      password: "",
      passwordConfirm: ""
    }
  },
  created () {
  },
  methods: {
    checkAll(){
      if( this.isChecked_all == true ){
        this.isChecked_01 = false
        this.isChecked_02 = false
      }else{
        this.isChecked_01 = true
        this.isChecked_02 = true
      }
    },
    updateCheckAll(){
      if( this.isChecked_01 == true && this.isChecked_02 == true )
        this.isChecked_all = true
      else
        this.isChecked_all = false
    },
    agree_01(){
      if( this.agreeStyle_01 == "none" )
        this.agreeStyle_01 = "block"
      else
        this.agreeStyle_01 = "none"
    },
    agree_02(){
      if( this.agreeStyle_02 == "none" )
        this.agreeStyle_02 = "block"
      else
        this.agreeStyle_02 = "none"
    },
    regist(){
      console.log("test code 회원가입 클릭 id : " + this.id + " password : " + this.password + " comfirm : " + this.passwordConfirm)

      const params = {
        id: this.id.trim(),
        password: this.password.trim(),
        passwordConfirm: this.passwordConfirm.trim()
      }

      // 회원가입 시도
      this.$axios.$post('/api/account/regist', params).then((data) => {
        console.log( "regist then : ", data)
        alert( data.resultMsg )
        if( data.flagSuccess ){
          this.$router.push({ name: "index" })
        }
      }).catch(function (error) {
        console.log( "login error : ", error)
        alert("알 수 없는 오류가 발생하였습니다.")
      })
    }
  }
}
</script>

<style scoped>
  @import '~/assets/resource/account/css/signup.css';
</style>
