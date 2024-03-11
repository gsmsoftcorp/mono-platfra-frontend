<template>
  <div class="content">
    <div class="tab_list scrollHide">
      <a href="" class="selected">전체</a>
      <a href="" class="point">추천</a>
      <a href="">게임</a>
      <a href="">쇼핑/트렌드</a>
      <a href="">반려동물</a>
      <a href="">스터디</a>
      <a href="">게임</a>
      <a href="">쇼핑/트렌드</a>
      <a href="">반려동물</a>
      <a href="">스터디</a>
      <a href="">게임</a>
      <a href="">쇼핑/트렌드</a>
      <a href="">반려동물</a>
      <a href="">스터디</a>
    </div>
    <div class="tab_cont">
      <div class="board_option flex_box">
        <span class="small_txt">총<span> 00</span>건</span>
        <div>
          <select name="order">
            <option>최신순</option>
            <option>인기순</option>
            <option>멤버순</option>
          </select>
          <button class="positive btn_secondary" @click="moveRegistMasterPlatfra()">게시판 등록</button>
        </div>
      </div>
      <ul class="board_list">
        <li v-for="(item, index) in masterPlatfraList">
          <div class="board_img">
            <a class="img_wrapper" @click="movePlatfraList(item.platfraId)">
              <div class="img_box">
                <div class="img_center">
                  <img v-if="item.imgFileNameEnc == null" src="~/assets/resource/common/img/10.jpg">
                  <img v-else :src="item.imgFilePath + encodeURIComponent(item.imgFileNameEnc)">
                </div>
              </div>
            </a>
          </div>
          <div class="board_txt">
            <h2 class="tit_h4">{{ item.mbName }}</h2>
            <p class="board_sum ellipsis_2">{{ item.mbDescription }}</p>
           <!-- <div class="tag_box">
              <a class=tag>게임</a>
              <a class=tag>모바일게임</a>
              <a class=tag>쿠키런</a>
              <button class="tag_more">
                ...
              </button>&lt;!&ndash;태그가 많은 경우 클릭하면 더 볼수 있게&ndash;&gt;
            </div>-->
            <div class="board_btn flex_box">
              <ul class="gray_txt extra_small_txt">
                <li class="board_info">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M19 10h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h1V9a7 7 0 1 1 14 0v1zM5 12v8h14v-8H5zm6 2h2v4h-2v-4zm6-4V9A5 5 0 0 0 7 9v1h10z"/></svg>
                  <span>공개</span>
                </li>
                <li class="board_info">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" class="gray"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 22a8 8 0 1 1 16 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z"/></svg>
                  <span><span>50</span>명</span>
                </li>
                <li class="board_info">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" class="gray"><path fill="none" d="M0 0h24v24H0z"/><path d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-1-2V4H5v16h14zM8 7h8v2H8V7zm0 4h8v2H8v-2zm0 4h8v2H8v-2z"/></svg>
                  <span><span>100</span>개</span>
                </li>
              </ul>
              <button class="btn_secondary positive">가입하기</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  components: {
  },
  data() {
    return {
      masterPlatfraList: []
    }
  },
  created() {
    this.getMasterPlatfraList();
  },
  methods: {
    getMasterPlatfraList() {
      this.$axios.$get('/api/master/list').then((data) => {
        this.masterPlatfraList = _.cloneDeep(data.masterPlatfraList);
      })
    },
    movePlatfraList(platfraId) {
      this.$router.push({ name: 'platfraId', params: { platfraId: platfraId }});
    },
    moveRegistMasterPlatfra() {
      this.$router.push({ name: 'master-regist', params: {} })
    }
  }
}
</script>

<style scoped>
  @import '~/assets/resource/master/css/list.css';
</style>
