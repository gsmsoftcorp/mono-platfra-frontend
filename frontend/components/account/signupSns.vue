<template>
</template>

<script>
export default {
  name: 'Signup',
  mounted() {
    if( !Kakao.isInitialized() ){
      Kakao.init("b9bfdc36b997ea02545fb4f6dea1a35d")
    }

    // console.log("test code mounted code 1 : " + this.$route.query.code)
    // console.log("test code mounted code 2 : " + Kakao.Auth.getAccessToken())
    const params = {
      kakaoCode: this.$route.query.code,
    }
    console.log("test code token : " + Kakao.Auth.getAccessToken())

    this.$axios.$post('/api/common/registSns', params).then((data) => {
      console.log( "login then : ", data)
      if( !data.flagSuccess ){
        alert("로그인에 실패 하였습니다.")
      }
      // this.$router.push({ name: "index" })
    }).catch(function (error) {
      console.log( "login error : ", error)
      alert("알 수 없는 오류가 발생하였습니다.")
    })
  },
}
</script>
