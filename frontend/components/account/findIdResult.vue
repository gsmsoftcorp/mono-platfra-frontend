<template>
  <div class="content">
    <div class="accountBox">
      <div class="findTab">
        <a class="checked">아이디 찾기</a>
        <a>비밀번호 찾기</a>
      </div>
      <div class="tabCont">
        <ul class="clearfix">
          <li class="resultBox"><!--결과있을때-->
            <p class="result"><span class="name">이름</span>님의 아이디는 <strong class="id">littlej212</strong> 입니다</p>
            <p class="addResult">가입일 : 2019.05.13</p>
            <a class="btnSize4 blue round4">로그인</a>
          </li>
          <li class="noResultBox" style="display: none"><!--결과없을때-->
            <p class="result">가입정보가 없습니다.</p>
            <p class="addResult"><a>아이디 다시 찾기</a></p>
            <a class="btnSize4 blue round4">회원가입</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'FindIdResult',
    data () {
        return {

        }
    },
    created () {
},
    methods: {
    }

}
</script>

<style scoped>
  @import '~/assets/resource/account/css/account_common.css';
  @import '~/assets/resource/account/css/find_id_result.css';
</style>
