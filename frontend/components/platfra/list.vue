<template>
  <div class="content">
    <div class="board_head">
      <div class="board_tit">
        <h2 class="tit_h2 ellipsis">맛집 카페 공유해요!</h2>
        <button class="btn_small btn_gray">설정</button>
      </div>
    </div>
    <div class="searchbox with_select">
      <select name="searchType" class="schKind" v-model="searchType">
        <option value="ALL">전체</option>
        <option value="TITLE">제목</option>
        <option value="CONTENT">내용</option>
        <option value="USER_ID">작성자</option>
      </select>
      <span class="vertical_divider"></span>
      <input type="text" class="search" placeholder="검색어를 입력해주세요" maxlength="20" v-model="keyword">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" @click="getPlatfraList()">
        <path fill="none" d="M0 0h24v24H0z"/>
        <title>검색</title>
        <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"/>
      </svg>
    </div>
    <div class="article_listbox">
      <div class="list_side flex_box">
        <span class="small_txt">총 <span>{{ platfraListTotalCount }}</span>건</span>
        <div class="list_option">
          <select name="order" class="option" v-model="order" @change="getPlatfraList()">
            <option value="RECENT">최신순</option>
            <option value="VIEW_COUNT">조회순</option>
            <option value="LIKE_COUNT">좋아요순</option>
          </select>
          <ul class="layout">
            <li><!--클릭하면 레이아웃 변경-->
              <button class="btn_icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M19 11V5H5v6h14zm0 2H5v6h14v-6zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/></svg>
              </button>
            </li>
            <li style="display:none">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M19 11V5H5v6h14zm0 2H5v6h14v-6zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/></svg>
              </button>
            </li>
          </ul>
          <button class="btn_secondary positive" @click="moveRegistPlatfra('board-regist')">글쓰기</button>
        </div>
      </div>
      <ul class="article_list">
        <li v-for="(item, index) in platfraList">
          <a class="img_wrapper" @click="movePlatfraDetail(item.platfraId)">
            <div class="img_box">
              <div class="img_center">
                <img :src="item.imgFilePath + encodeURIComponent(item.imgFileNameEnc)">
              </div>
            </div>
          </a>
          <div class="txt_box">
            <div class="flex_box">
              <div class="profile_img_box">
                <img src="~/assets/resource/common/img/profile2.jpg" class="profile_img">
              </div>
              <div>
                <p class="writer ellipsis">{{ item.regId }}</p><!-- TODO 추후 이름 또는 닉네임으로 변경-->
                <span class="extra_small_txt gray_txt ellipisis">{{ $moment(item.regDate).format('YYYY-MM-DD') }}</span><!-- TODO 추후 'n일전, ~분전' 등으로 변경 -->
              </div>
            </div>
            <div>
              <div class="tit_box flex_box">
                <a class="article_tit"@click="movePlatfraDetail(item.platfraId)">
                  <h3 class="ellipsis_2">{{ item.title }}</h3>
                </a>
                <div>
                  <span class="comment_count extra_small_txt positive">{{ item.commentCount }}</span>
                </div>
              </div>
              <div class="tag_box">
                <a class="tag_small">태그1</a>
                <a class="tag_small">태그1</a>
              </div>
              <div class="react_box">
                <div class="tooltip">
                  <button class="btn_icon view" disabled="disabled">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 3a5 5 0 1 1-4.78 3.527A2.499 2.499 0 0 0 12 9.5a2.5 2.5 0 0 0-1.473-2.28c.466-.143.96-.22 1.473-.22z"/></svg>
                    <span class="count small_txt">{{ item.viewCount }}</span><!--1k+-->
                  </button>
                  <span class="tooltip_text2">조회수</span>
                </div>
                <div class="tooltip">
                  <!--              <button class="btn_icon btn_like off" :class="{ fill: item.likeYn == 'Y'}" @click="addLike(index, 'BOARD', item.platfraId, item.likeYn)"> &lt;!&ndash; TODO 좋아요 이미지 결정해야함 &ndash;&gt;-->
                  <button class="btn_icon btn_like" @click="addLike(index, 'BOARD', item.platfraId, item.likeYn)">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                        <path fill="none" d="M0 0H24V24H0z"/>
                        <path v-if="item.likeYn == 'Y'" d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"/>
                        <path v-else d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2zm-3.566 15.604c.881-.556 1.676-1.109 2.42-1.701C18.335 14.533 20 11.943 20 9c0-2.36-1.537-4-3.5-4-1.076 0-2.24.57-3.086 1.414L12 7.828l-1.414-1.414C9.74 5.57 8.576 5 7.5 5 5.56 5 4 6.656 4 9c0 2.944 1.666 5.533 4.645 7.903.745.592 1.54 1.145 2.421 1.7.299.189.595.37.934.572.339-.202.635-.383.934-.571z"/>
                      </svg>
                    <span class="count">{{ item.likeCount }}</span>
                  </button>
                  <span class="tooltip_text2">좋아요</span>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
<!--    <infinite-loading @infinite="infiniteHandler" spinner="spiral"></infinite-loading>-->
  </div>
</template>

<script>

export default {
  name: 'List',
  components: {
  },
  data () {
    return {
      limit: 0,
      size: 8,

      order: 'RECENT',
      searchType: 'ALL',
      keyword: '',

      platfraList: [],
      platfraListTotalCount: 0,

    }
  },
  created () {
    this.getPlatfraList();
  },
  computed: {
    platfraId() {
      return this.$route.params.platfraId;
    }
  },
  methods: {
    getPlatfraList () {
      this.limit = 0;
      this.$axios.$get('/api/platfra?platfraId=' + this.platfraId + '&limit=' + this.limit + '&size=' + this.size + '&order=' + this.order + '&keyword=' + this.keyword + '&searchType=' + this.searchType).then((data) => {
        this.platfraList = _.cloneDeep(data.platfraList);
        this.platfraListTotalCount = data.platfraListTotalCount;
        this.limit += this.size;
      })
    },
    // infiniteHandler($state) {
    //   setTimeout(() => {
    //     this.$axios.$get('/api/platfra?platfraId=' + this.platfraId + '&limit=' + this.limit + '&size=' + this.size + '&order=' + this.order + '&keyword=' + this.keyword + '&searchType=' + this.searchType).then((data) => {
    //
    //       if (data.platfraList.length) {
    //         this.platfraList = this.platfraList.concat(_.cloneDeep(data.platfraList));
    //         this.platfraListTotalCount = data.platfraListTotalCount;
    //         this.limit = parseInt(this.limit) + parseInt(this.size);
    //         $state.loaded();
    //       } else {
    //         $state.complete();
    //       }
    //     });
    //   }, 500);
    // },
    movePlatfraDetail (platfraId) {
      this.$router.push({ name: 'platfraId-detail', query: { platfraId: platfraId }});
    },
    moveRegistPlatfra () {
      this.$router.push({ name: 'platfraId-regist', query: { }});
    },
    addLike(index, contentCode, contentSeq, likeYn) {
      const params = {
        contentCode: contentCode,
        contentSeq: contentSeq,
        likeYn: likeYn == 'N' ? 'Y' : 'N'
      }
      this.$axios.$post('/api/like/addLike', params).then((data) => {
        this.platfraList[index].likeCount = data.likeCount;
        this.platfraList[index].likeYn = this.platfraList[index].likeYn == 'N' ? 'Y' : 'N'
      });

    },
  }
}
</script>

<style scoped>
  @import '~/assets/resource/board/css/list.css';
</style>
