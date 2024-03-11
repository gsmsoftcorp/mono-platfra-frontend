<template>
  <div class="comment_list_box">
    <div class="icon_txt">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
        <path fill="none" d="M0 0h24v24H0z"/>
        <path d="M7.291 20.824L2 22l1.176-5.291A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.956 9.956 0 0 1-4.709-1.176zm.29-2.113l.653.35A7.955 7.955 0 0 0 12 20a8 8 0 1 0-8-8c0 1.334.325 2.618.94 3.766l.349.653-.655 2.947 2.947-.655zM7 12h2a3 3 0 0 0 6 0h2a5 5 0 0 1-10 0z"/>
      </svg>
      <span>댓글 <span class="comment_count">{{ commentListInfo.commentTotalSize }}개</span></span>
    </div>
    <div class="comment_write_box"> <!-- 메인 댓글 -->
      <div class="flex_box">
        <div class="profile_img_box">
          <img src="~/assets/resource/common/img/profile.jpg" class="profile_img">
        </div>
        <input type="text" placeholder="댓글 입력1" v-model="content" />
        <button class="btn_eraser">삭제</button>
        <div class="btn_box">
          <button class="negative btn_secondary btn_cancel" @click="cancelComment()">취소</button>
          <button class="positive btn_secondary" @click="registComment()">작성</button>
        </div>
      </div>
    </div>
    <div class="comment" v-for="(item, idx) in commentListInfo.commentList">
      <div class="flex_box">
        <div class="profile_img_box">
          <img src="~/assets/resource/common/img/profile.jpg" class="profile_img">
        </div>
        <div class="txt_box">
          <div class="clearfix">
            <span class="id">{{ item.regId }}</span><!-- TODO 추후 이름 또는 닉네임으로 변경-->
            <span class="small_txt gray_txt">{{ $moment(item.regDate).format('YYYY-MM-DD HH:mm') }}</span><!-- TODO 추후 'n일전, ~분전' 등으로 변경 -->
          </div>
          <p class="cont">{{ item.content }}</p>
        </div>
        <div class="tool_box">
          <div class="tooltip">
            <button class="btn_icon btn_like off">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0H24V24H0z"/><path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2zm-3.566 15.604c.881-.556 1.676-1.109 2.42-1.701C18.335 14.533 20 11.943 20 9c0-2.36-1.537-4-3.5-4-1.076 0-2.24.57-3.086 1.414L12 7.828l-1.414-1.414C9.74 5.57 8.576 5 7.5 5 5.56 5 4 6.656 4 9c0 2.944 1.666 5.533 4.645 7.903.745.592 1.54 1.145 2.421 1.7.299.189.595.37.934.572.339-.202.635-.383.934-.571z"/></svg>
            </button>
            <span class="tooltip_text2">좋아요</span>
          </div>
          <!--<div class="tooltip">
&lt;!&ndash;              <a class="btnLike" @click="addLike('COMMENT', item.commentSeq, item.likeYn)"> &lt;!&ndash; TODO 좋아요 이미지 결정해야함 &ndash;&gt;&ndash;&gt;
            <button class="btn_icon btn_like_box on">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0H24V24H0z"/><path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"/></svg>
              <span class="count">{{ item.likeCount }}</span>
            </button>
            <span class="tooltip_text2">좋아요</span>
          </div>-->

          <div class="tooltip">
            <button class="btn_reply" @click="toggleAnswerForm(item.commentSeq)"></button>
            <span class="tooltip_text1">답글</span>
          </div>
          <div class="tooltip">
            <button class="btn_edit" @click="toggleModifyComment(item.commentSeq, item.content)"></button>
            <span class="tooltip_text1">수정</span>
          </div>
          <div class="tooltip">
            <button class="btn_delete" @click="deleteComment(item.commentSeq)"></button>
            <span class="tooltip_text1">삭제</span>
          </div>
        </div>
      </div>
      <!-- 댓글 수정-->
      <div class="comment_write_box modifyBox" :id="'modifyBox_' + item.commentSeq" style="display: none;"> <!-- 메인 댓글 -->
        <div class="flex_box">
          <div class="profile_img_box">
            <img src="~/assets/resource/common/img/profile.jpg" class="profile_img">
          </div>
          <input type="text" placeholder="댓글 입력2" v-model="modifyContent" />
          <button class="btn_eraser">삭제</button>
          <div class="btn_box">
            <button class="negative btn_secondary btn_cancel" @click="toggleModifyComment(item.commentSeq, item.content)">취소</button>
            <button class="positive btn_secondary" @click="modifyComment(item.commentSeq)">수정</button>
          </div>
        </div>
      </div>
      <!-- 답글 영역 -->
      <Answer :contentSeq="item.contentSeq" :commentSeq="item.commentSeq" :answerCount="item.answerCount" />
      <!-- //답글 영역 -->

    </div>

  </div>
</template>



<script>
import Answer from './answer'
import _ from "lodash";
export default {
  name: 'comment',
  components: { Answer },
  props: {
    contentSeq: {
      type: String,
      default: () => '0'
    }
  },
  data() {
    return {
      commentListInfo: {
        commentList: [],
        commentTotalSize: 0,
      },
      content: '',
      modifyContent: ''

    }
  },
  created() {
    this.getCommentList();
  },
  watch: {
    contentSeq () {
      this.getCommentList();
    }
  },
  methods: {
    getCommentList() {
      this.$axios.$get('/api/comment/list?contentSeq=' + this.contentSeq).then((data) => {
        this.commentListInfo = _.cloneDeep(data)
      })

    },
    registComment(parentSeq = '0') {
      const params = {
        contentSeq: this.contentSeq,
        parentSeq: parentSeq,
        content: this.content
      }
      this.$axios.$post('/api/comment/regist/', params).then((data) => {
        this.getCommentList();
        this.content = '';
      })
    },
    cancelComment() {
      this.content = '';
    },
    modifyComment(commentSeq) {
      const params = {
        contentSeq: this.contentSeq,
        commentSeq: commentSeq,
        content: this.modifyContent
      }
      this.$axios.$put('/api/comment/modify/', params).then((data) => {
        this.getCommentList();
        $(".modifyBox").css("display", "none");
      })
    },
    deleteComment(commentSeq) {
      if(!confirm("댓글을 삭제하시겠습니까?")) {
        return false
      }
      const params = {
        contentSeq: this.contentSeq,
        commentSeq: commentSeq
      }
      this.$axios.$post('/api/comment/delete/', params).then((data) => {
        this.getCommentList();
      })
    },
    toggleModifyComment(commentSeq, content) {
      if($("#modifyBox_" + commentSeq).css("display") != "block") {
        $(".modifyBox").css("display", "none");
        $("#modifyBox_" + commentSeq).css("display", "block");
        $("#modifyBox_" + commentSeq + " > textarea").val(content)
      } else {
        $("#modifyBox_" + commentSeq).css("display", "none");
      }
    },
    toggleAnswerForm(commentSeq) {
      if($("#answerBox_" + commentSeq).css("display") != "block") {
        $(".answerBox").css("display", "none");
        $("#answerBox_" + commentSeq).css("display", "block");
      } else {
        $("#answerBox_" + commentSeq).css("display", "none");
      }
    },
    addLike(contentCode, contentSeq, likeYn) {
      const params = {
        contentCode: contentCode,
        contentSeq: contentSeq,
        likeYn: likeYn == 'N' ? 'Y' : 'N'
      }

      this.$axios.$post('/api/like/addLike', params).then((data) => {
        this.getCommentList(this.contentSeq);

      });
    }
  }
}
</script>

<style scoped>
  @import '~/assets/resource/board/css/detail.css';
</style>
