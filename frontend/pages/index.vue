<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        메인2222
      </h1>
      <div class="links">
        <nuxt-link :to="{ name: 'account-login', params: { }}" class="button--green">
          로그인
        </nuxt-link>
        <nuxt-link :to="{ name: 'master-list', params: { }}" class="button--grey">
          게시판
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // lintOnSave: false,
  name: 'Index'

}
</script>

<style>
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family:
      'Quicksand',
      'Source Sans Pro',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      'Helvetica Neue',
      Arial,
      sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>
