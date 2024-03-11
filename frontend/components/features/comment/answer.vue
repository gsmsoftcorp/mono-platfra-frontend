<template>
  <div>
    <!-- ===\== 댓글의 답글 ====== -->
    <div class="comment_write_box answer_box" :id="'answerBox_' + commentSeq" style="display: none;">
      <div class="flex_box">
        <div class="profile_img_box">
          <img src="~/assets/resource/common/img/profile.jpg" class="profile_img">
        </div>
        <input type="text" placeholder="댓글 입력3" v-model="answerToComment" />
        <button class="btn_eraser">삭제</button>
        <div class="btn_box">
          <button class="negative btn_secondary" @click="toggleAnswerForm(commentSeq)">취소</button>
          <button class="positive btn_secondary" @click="registAnswer(commentSeq, 'answerToComment')">작성</button>
        </div>
      </div>
    </div>
   <!-- <div class="comment_write_box flex_box answer_box" :id="'answerBox_' + commentSeq" style="display: none;">
      <input type="text" placeholder="댓글 입력3" v-model="answerToComment" />
      <div>
        <button class="btn_eraser">삭제</button>
        <button class="positive btn_secondary" @click="registAnswer(commentSeq, 'answerToComment')">작성</button>
        <button class="negative btn_secondary" @click="toggleAnswerForm(commentSeq)">취소</button>
      </div>
    </div>-->
    <!-- //====== 댓글의 답글 ====== -->
    <a class="btn_show icon_txt" v-if="answerCount != 0" @click="toggleAnswerList(commentSeq)">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 16l-6-6h12z"/></svg>
      <span class="small_txt">답글 <span>{{ answerCount }}</span>개 보기</span></a>

    <!-- 답글 리스트 -->
    <div class="comment answer" :class="`answer_${commentSeq}`" v-for="(item, index) in answerListInfo.answerList">
      <div class="flex_box">
        <div class="profile_img_box">
          <img src="~/assets/resource/common/img/profile2.jpg" class="profile_img">
        </div>
        <div class="txt_box">
          <div class="clearfix">
            <span class="id small_txt">{{ item.regId }}</span><!-- TODO 추후 이름 또는 닉네임으로 변경-->
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
            <button class="btn_reply" @click="toggleAnswerForm(commentSeq + '_' +item.commentSeq)"></button>
            <span class="tooltip_text1">답글</span>
          </div>
          <div class="tooltip">
            <button class="btn_edit" @click="toggleModifyAnswer(item.commentSeq, item.content)"></button>
            <span class="tooltip_text1">수정</span>
          </div>
          <div class="tooltip">
            <button class="btn_delete" @click="deleteAnswer(item.commentSeq)"></button>
            <span class="tooltip_text1">삭제</span>
          </div>
        </div>
        <!-- //답글 리스트 -->
      </div>
      <!-- ====== 답글 수정 ====== -->
      <div class="comment_write_box flex_box" :id="'modifyAnswerBox_' + item.commentSeq" style="display: none;">
        <div class="flex_box">
          <div class="profile_img_box">
            <img src="~/assets/resource/common/img/profile.jpg" class="profile_img">
          </div>
          <input type="text" placeholder="댓글 입력4" v-model="answerComment" />
          <button class="btn_eraser">삭제</button>
          <div class="btn_box">
            <button class="negative btn_secondary btn_cancel" @click="toggleModifyAnswer(item.commentSeq, item.content)">취소</button>
            <button class="positive btn_secondary" @click="modifyAnswer(item.commentSeq)">수정</button>
          </div>
        </div>
      </div>
      <!-- //====== 답글 수정 ====== -->
      <!--<div class="btns">
&lt;!&ndash;            <a class="btnLike" @click="addLike('COMMENT', item.commentSeq, item.likeYn)"> &lt;!&ndash; TODO 좋아요 이미지 결정해야함 &ndash;&gt; &ndash;&gt;
        <button class="like_on small_txt">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0H24V24H0z"/>
            <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"/>
          </svg>
          <span>{{ item.likeCount }}</span>
        </button>
        <button class="reply small_txt" @click="toggleAnswerForm(commentSeq + '_' +item.commentSeq)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0H24V24H0z"/><path d="M11 20L1 12l10-8v5c5.523 0 10 4.477 10 10 0 .273-.01.543-.032.81C19.46 16.95 16.458 15 13 15h-2v5z"/></svg>
          <span>답글</span>
        </button>
      </div>-->
      <!-- ===== 답글의 답글 ====== -->
      <div class="comment_write_box answer_box" :id="'answerBox_' + commentSeq + '_' + item.commentSeq" style="display: none;">
        <div class="flex_box">
          <div class="profile_img_box">
            <img src="~/assets/resource/common/img/profile.jpg" class="profile_img">
          </div>
          <input type="text" placeholder="댓글 입력5" v-model="answerToAnswer" />
          <button class="btn_eraser">삭제</button>
          <div class="btn_box">
            <button class="negative btn_secondary" @click="toggleAnswerForm(commentSeq + '_' +item.commentSeq)">취소</button>
            <button class="positive btn_secondary" @click="registAnswer(commentSeq, 'answerToAnswer')">작성</button>
          </div>
        </div>
      </div>
      <!--<div class="comment_write_box modifyBox" :id="'answerBox_' + commentSeq + '_' + item.commentSeq" style="display: none;">
        <input type="text" placeholder="댓글 입력5" v-model="answerToAnswer" />
        <button class="btn_eraser">삭제</button>
        <button class="positive btn_secondary" @click="registAnswer(commentSeq, 'answerToAnswer')">작성</button>
        <button class="negative btn_secondary" @click="toggleAnswerForm(commentSeq + '_' +item.commentSeq)">취소</button>
      </div>-->
      <!-- //====== 답글의 답글 ====== -->
    </div>
  </div>
</template>



<script>
export default {
  name: 'answer',
  props: {
    contentSeq: {
      type: String,
      default: () => '0'
    },
    commentSeq: {
      type: String,
      default: () => '0'
    },
    answerCount: {
      type: Number,
      default: () => '0'
    }
  },
  data() {
    return {
      answerListInfo: {
        answerList: []
      },
      answerComment: '',
      answerToAnswer: '',
      answerToComment: ''
    }
  },
  methods: {
    toggleAnswerList(commentSeq) {
      this.answerListInfo.answerList.length == 0 ? this.getAnswerList(commentSeq) : this.answerListInfo.answerList = [];
    },
    getAnswerList(commentSeq) {
      this.$axios.$get('/api/comment/answerList?commentSeq=' + commentSeq).then((data) => {
        this.answerListInfo = _.cloneDeep(data)
      })
    },
    registAnswer(commentSeq = '0', type) {
      const params = {
        contentSeq: this.contentSeq,
        parentSeq: commentSeq,
        content: type == 'answerToComment' ? this.answerToComment : this.answerToAnswer
      }
      this.$axios.$post('/api/comment/regist/', params).then((data) => {
        this.getAnswerList(this.commentSeq);
        this.answerComment = '';
        this.answerToAnswer = '';
        this.answerToComment = '';
        $(".answerBox").css("display", "none");
      })
    },
    modifyAnswer(commentSeq) {
      const params = {
        contentSeq: this.contentSeq,
        commentSeq: commentSeq,
        content: this.answerComment
      }
      this.$axios.$put('/api/comment/modify/', params).then((data) => {
        this.getAnswerList(this.commentSeq);
        $(".modifyAnswerBox").css("display", "none");
        this.answerComment = '';
      })
    },
    deleteAnswer(commentSeq) {
      if(!confirm("댓글을 삭제하시겠습니까?")) {
        return false
      }
      const params = {
        contentSeq: this.contentSeq,
        commentSeq: commentSeq
      }
      this.$axios.$post('/api/comment/delete/', params).then((data) => {
        this.getAnswerList(this.commentSeq);
      })
    },
    toggleModifyAnswer(commentSeq, content) {
      //TODO 모든 jQuery => refs 활용하여 수정
      if($("#modifyAnswerBox_" + commentSeq).css("display") != "block") {
        $(".modifyAnswerBox").css("display", "none");
        $("#modifyAnswerBox_" + commentSeq).css("display", "block");
        $("#modifyAnswerBox_" + commentSeq + " > textarea").val(content)
      } else {
        $("#modifyAnswerBox_" + commentSeq).css("display", "none");
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
        this.getAnswerList(this.commentSeq);

      });
    }
  }
}
</script>

<style scoped>
  @import '~/assets/resource/board/css/detail.css';
</style>
