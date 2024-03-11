<template>
  <div class="content">
    <div class="board_tit_box flex_box">
      <h2 class="ellipsis icon_txt" @click="movePlatfraList()">
        <strong>모여라 리뷰</strong>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12.172 12L9.343 9.172l1.414-1.415L15 12l-4.243 4.243-1.414-1.415z"/></svg>
      </h2>
      <!--<button class="btn_side" @click="movePlatfraList()">목록으로</button>-->
      <div>
        <button class="btn_side" v-if="boardDetail.prevPlatfraSeq != null" @click="movePrevNext(boardDetail.prevPlatfraSeq)">이전</button>
        <button class="btn_side" v-if="boardDetail.nextPlatfraSeq != null" @click="movePrevNext(boardDetail.nextPlatfraSeq)">다음</button>
      </div>
    </div>
    <div class="horizontal_divider"></div>
    <div class="detail_box">
      <!--게시글 정보, 툴-->
      <div class="head">
        <h3 class="tit_h2 ellipsis">{{ boardDetail.title }}</h3>
        <div class="detail_info flex_box">
          <div class="flex_box">
            <div class="profile_img_box_s">
              <img src="~/assets/resource/common/img/profile2.jpg" class="profile_img">
            </div>
            <div>
              <p>{{ boardDetail.regId }}</p><!-- TODO 추후 이름 또는 닉네임으로 변경-->
              <div class="extra_small_txt gray_txt">
                <span>{{ $moment(boardDetail.regDate).format('YYYY-MM-DD') }}</span><!-- TODO 추후 'n일전, ~분전' 등으로 변경 -->
                <span class="dot">·</span>
                <span>조회수 <span>{{ boardDetail.viewCount }}</span></span>
              </div>
            </div>
          </div>
          <div class="tool_box">
            <div class="tooltip">
              <button class="btn_icon btn_like" @click="addLike('BOARD', platfraId, boardDetail.likeYn)">

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                    <path fill="none" d="M0 0H24V24H0z"/>
                    <path  v-if="boardDetail.likeYn == 'Y'" d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"/>
                    <path v-else d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2zm-3.566 15.604c.881-.556 1.676-1.109 2.42-1.701C18.335 14.533 20 11.943 20 9c0-2.36-1.537-4-3.5-4-1.076 0-2.24.57-3.086 1.414L12 7.828l-1.414-1.414C9.74 5.57 8.576 5 7.5 5 5.56 5 4 6.656 4 9c0 2.944 1.666 5.533 4.645 7.903.745.592 1.54 1.145 2.421 1.7.299.189.595.37.934.572.339-.202.635-.383.934-.571z"/>
                  </svg>
              </button>
              <span class="tooltip_text2">좋아요</span>
            </div>
           <!-- <div class="tooltip">
              &lt;!&ndash;              <a class="btnLike" :class="{ fill: boardDetail.likeYn == 'Y' }" @click="addLike('BOARD', platfraId, likeYn)"> &lt;!&ndash; TODO 좋아요 이미지 결정해야함 &ndash;&gt;&ndash;&gt;
              <button class="btn_icon btn_like_box on">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0H24V24H0z"/><path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"/></svg>
                <span class="count">{{ boardDetail.likeCount }}</span>
              </button>
              <span class="tooltip_text2">좋아요</span>
            </div>-->
            <div class="tooltip">
              <button class="btn_share"></button>
              <span class="tooltip_text1">공유</span>
            </div>
            <div class="tooltip">
              <button class="btn_edit" @click="moveModifyPlatfra(platfraId)"></button>
              <span class="tooltip_text1">수정</span>
            </div>
            <div class="tooltip">
              <button class="btn_delete" @click="removePlatfra(platfraId)"></button>
              <span class="tooltip_text1">삭제</span>
            </div>
          </div>
        </div>
      </div>
      <div class="horizontal_divider"></div>
      <!--게시글 내용-->
      <div class="cont">
        <div class="article">
          <p v-html="boardDetail.content"></p><!-- 컨텐츠입니다. -->
        </div>
      <div>
        <a class="icon_txt">
          <span class="small_txt">첨부파일 <span>2</span>개 보기</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"/></svg>
        </a>
        <ul class="file_list" style="display:block"><!--첨부파일 2개 보기 누르면 display:block되게끔-->
          <li v-for="(item, index) in boardFileList">
            <div class="flex_box">
              <div class="file_info">
                <a class="small_txt" :href="item.filePath + item.fileNameEnc">{{ item.fileName }}</a>
                <span class="extra_small_txt gray_txt">({{ item.fileSize }} B)</span>
              </div>
              <button class="btn_down btn_icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M13 12h3l-4 4-4-4h3V8h2v4zm2-8H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992z"/></svg>
              </button>
            </div>
          </li>

        </ul>
      </div>
      <div class="tag_box">
        <a class="tag_small" v-if="hashtagList.length > 0" v-for="(item, index) in hashtagList">{{ item }}</a>
      </div>
      </div>
      <div class="horizontal_divider"></div>
      <!-- 댓글 영역 -->
      <Comment :contentSeq="platfraId" />
      <!-- //댓글 영역 -->

      <ul class="mobile_nav flex_box">
        <li>
          <button class="btn_like">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0H24V24H0z"/><path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2zm-3.566 15.604c.881-.556 1.676-1.109 2.42-1.701C18.335 14.533 20 11.943 20 9c0-2.36-1.537-4-3.5-4-1.076 0-2.24.57-3.086 1.414L12 7.828l-1.414-1.414C9.74 5.57 8.576 5 7.5 5 5.56 5 4 6.656 4 9c0 2.944 1.666 5.533 4.645 7.903.745.592 1.54 1.145 2.421 1.7.299.189.595.37.934.572.339-.202.635-.383.934-.571z"/></svg>
          </button>
        </li>
        <li>
          <button class="btn_share"></button>
        </li>
        <li>
        <button class="btn_prev">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z"/></svg>
        </button>
      </li>
        <li>
          <button class="btn_next">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"/></svg>
          </button>
      </li>
      </ul>
    </div>
  </div>

</template>

<script>
import '~/assets/tiptap/sass/editor.scss'
import Comment from '../features/comment/comment'
export default {
  name: 'Detail',
  components: { Comment },
  data() {
    return {
        boardDetail : {
          platfraId: '',
          platfraId: '',
          parentSeq: '',
          title: '',
          content: '',
          delYn: '',
          regId: '',
          regDate: '',
          modId: '',
          modDate: '',

          viewCount: '',
          likeCount: '',
          likeYn: '',
          commentcount: '',

          prevPlatfraSeq: '',
          nextPlatfraSeq: '',
        },

        boardFileList: [],
        hashtagList: []

    }
  },
  created () {
    this.getPlatfraDetail();
  },
  computed: {
    platfraId() {
      return this.$route.query.platfraId;
    },
    platfraId() {
      return this.$route.params.platfraId;
    }
  },
  watch: {
    $route (to, from) {
      this.getPlatfraDetail();
    }
  },
  methods: {
    getPlatfraDetail () {
      this.$axios.$get('/api/platfra/detail?platfraId=' + this.platfraId + '&platfraId=' + this.platfraId).then((data) => {
        this.boardDetail = _.cloneDeep(data.boardDetail);
        this.boardFileList = data.boardFileList;
        this.hashtagList = data.hashtagList;
      })
    },
    movePlatfraList () {
      this.$router.push({ name: 'platfraId', params: { }});
    },
    moveModifyPlatfra(platfraId) {
      this.$router.push({ name: 'platfraId-modify', query: { platfraId : platfraId }});
    },
    addLike(contentCode, contentSeq, likeYn) {
      const params = {
        contentCode: contentCode,
        contentSeq: contentSeq,
        likeYn: likeYn == 'N' ? 'Y' : 'N'
      }

      this.$axios.$post('/api/like/addLike', params).then((data) => {
        this.boardDetail.likeCount = data.likeCount;
        this.boardDetail.likeYn = this.boardDetail.likeYn == 'N' ? 'Y' : 'N'

      }).catch(function (error) {
        alert("알 수 없는 오류가 발생하였습니다.")
      });
    },
    removePlatfra(platfraId) {
      if(!confirm("정말 삭제하시겠습니까?")) {
        return false;
      }
      this.$axios.$delete('/api/platfra/deletePlatfra?platfraId=' + platfraId).then((data) => {
        alert("삭제 되었습니다.");
        this.movePlatfraList();
      });
    },
    movePrevNext(platfraId) {
      this.$router.push({ name: 'platfraId-detail', query: { platfraId: platfraId }});
    }

  }
}
</script>

<style scoped>
  @import '~/assets/resource/board/css/common.css';
  @import '~/assets/resource/board/css/detail.css';

</style>
