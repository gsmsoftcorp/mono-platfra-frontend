<template>
  <div class="content">
    <div class="account_box">
      <h2 class="tit_h1">아이디 찾기</h2>
      <p style="text-align: center;">본인인증을 통해 아이디를 확인하실 수 있습니다.</p>
      <!--div class="find_tab table">
        <a href="" class="selected">휴대폰 번호</a>
        <a href="">이메일 주소</a>
      </div>-->
      <ul class="find_way_box table">
        <li>
          <input type="radio" id="onMobile_id" checked="checked">
          <label for="onMobile_id">휴대폰 번호</label>
        </li>
        <li>
          <input type="radio" id="onMail_id">
          <label for="onMail_id">이메일 주소</label>
        </li>
      </ul>
      <div class="find_cont_box">
        <div class="input_form" >
          <div class="input_box">
            <label for="nameOnMobile_id" class="hidden">이름</label>
            <input type="text" id="nameOnMobile_id" placeholder="이름을 입력하세요">
          </div>
          <div class="verify_box">
            <div class="flex_box">
              <div class="input_box">
                <label for="mailOnMobile_pw" class="hidden">휴대폰 번호</label>
                <input type="text" id="mailOnMobile_pw" class="mobile" placeholder="휴대폰 번호를 입력하세요">
              </div>
              <button class="positive btn_primary">인증번호</button>
            </div>
            <p class="guide">가입 시 등록하신 휴대폰 번호를 입력해주세요.</p>
          </div>
          <div class="input_box">
            <label for="verifyOnMobile_pw" class="hidden">인증번호</label>
            <input type="text" id="verifyOnMobile_pw" placeholder="인증번호를 입력하세요(6자리)">
          </div>
        </div>
        <!--<div class="input_form">
          <div class="input_box">
            <label for="nameOnMail_id" class="hidden">이름</label>
            <input type="text" id="nameOnMail_id" placeholder="이름을 입력하세요">
          </div>
          <div class="verify_box flex_box">
            <div class="input_box">
              <label for="mailOnMail_pw" class="hidden">이메일주소</label>
              <input type="text" id="mailOnMail_pw" class="mobile" placeholder="이메일주소를 입력하세요">
            </div>
            <button class="positive btn_primary">인증번호</button>
          </div>
          <div class="input_box">
            <label for="verifyOnMail_pw" class="hidden">인증번호</label>
            <input type="text" id="verifyOnMail_pw" placeholder="인증번호를 입력하세요(6자리)">
          </div>
        </div>-->
      </div>
      <button class="positive btn_primary width_max">아이디 찾기</button>
    </div>
  </div>
</template>
<style>
  @import '~/assets/resource/account/css/find_info.css';
</style>
