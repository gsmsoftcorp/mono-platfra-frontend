<template>
  <div class="header">
    <h1 class="logo">
      <a @click="movePage('index')">
        <img src="~/assets/resource/common/img/logo.png" alt="로고">
      </a>
    </h1>
    <div class="right">
      <div class="searchbox basic">
        <input type="text" placeholder="검색" class="search">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/>
          <title>검색</title>
          <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"/>
        </svg>
      </div>
      <ul class="loginbox">
        <li class="login_off">
          <a href="">로그인</a>
          <a href="">회원가입</a>
        </li>
        <li class="login_on">
          <a class="profile_img_box"><!-- 마이페이지로 -->
            <img src="~/assets/resource/common/img/profile.jpg" class="profile_img" alt="마이 페이지" v-if="this.getProfileImg === '' ? true : false">
            <img :src="this.getProfileImg" class="profile_img" alt="" v-else>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'gsm-header',
    data () {
      return {
        profileImg: '',// 보여질 프로필 이미지
      }
    },
    methods: {
      movePage (name) {
        this.$router.push({ name: name, params: {} })
      },
      moveRegistMasterPlatfra () {
        this.$router.push({ name: 'master-regist', params: {} })
      }
    }
  }
</script>

<style scoped>

</style>
