<template>
  <div class="wrap">
    <div class="content">
      <div class="inner">
        <div class="boardTitBox">
          <h2 class="bigTit"><a><span class="ellipsis">맛집 카페 공유해요! </span></a></h2>
          <div>
            <a href="#" class="btnSet">설정</a>
          </div>
        </div>
        <strong>게시판 글쓰기</strong>
        <div class="writeArticle round3 shadow">
          <div class="group">
            <label class="hidden">파일첨부</label>
            <img :src="boardDetail.imgFilePath + encodeURIComponent(boardDetail.imgFileNameEnc)" ref="printImg">
            <a class="btnDelete" @click="deletePrintImg()">삭제</a>
            <div class="addBox clearfix">
              <div class="basicInput leftSide">
                <a class="attachAdd gray1">
                  <label for="imgFile">파일 선택</label>
                  <input type="file" id="imgFile" class="file" ref="imgFile" @change="addInputImgFile()"/>
                </a>
              </div>
              <!--                <a class="btnSize3 blue round1 rightSide">+</a>-->
            </div>
          </div>
          <div class="group">
            <label class="hidden">제목</label>
            <input type="text" class="basicInput" placeholder="제목을 입력하세요" v-model="boardDetail.title">
          </div>
          <div class="group"><!--네이버스마트에디터적용-->
            <label class="hidden">내용</label>
            <TiptapEditor :content="content" ref="tiptap"/>
<!--            <textarea placeholder="내용을 입력하세요" v-model="boardDetail.content"></textarea>-->
          </div>
          <div class="group">
            <label class="hidden">파일첨부</label>
            <div class="attachBox basicInput" v-for="(item, index) in fileInfoList">
              <span class="attachList"><strong>{{ item.name }}</strong> <span class="">({{ item.size }} B)</span></span>
              <a class="btnDelete" @click="addDeleteFileSeq(item.fileSeq)">삭제</a>
            </div>
            <div class="attachBox basicInput" v-for="(item, index) in fileList">
              <span class="attachList"><strong>{{ item.name }}</strong> <span class="">({{ item.size }} B)</span></span>
              <a class="btnDelete">삭제</a>
            </div>
            <div class="addBox clearfix">
              <div class="basicInput leftSide">
                <a class="attachAdd gray1">
                  <label for="file">파일 선택</label>
                  <input type="file" id="file" class="file" ref="file" @change="addInputfile()" />
                </a>
              </div>
              <!--                <a class="btnSize3 blue round1 rightSide">+</a>-->
            </div>
          </div>
          <div class="group">
            <label class="hidden">태그</label>
            <input type="text" class="basicInput" placeholder="#태그를 입력하세요. (' , ' 로 구분)" v-model="hashtag">
<!--            <ul class="tagBox basicInput clearfix">-->
<!--              <li class="tag"><span>#노량진</span><a class="btnDelete">삭제</a></li>-->
<!--              <li class="tag"><span>#노량진</span><a class="btnDelete">삭제</a></li>-->
<!--            </ul>-->
          </div>
          <div class="rightBox">
            <a class="btnSize2 blue round4" @click="modifyPlatfra()">작성</a>
            <a class="btnSize2 gray round4" @click="movePlatfraDetail(platfraId)">취소</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TiptapEditor from '~/components/features/editor/tiptap.vue'
export default {
  name: 'Modify',
  components: {
    TiptapEditor
  },
  data() {
    return {
      imgFile: null,
      title: '',
      content: '',
      hashtag: '',

      boardDetail : {
        platfraId: '',
        platfraId: '',
        parentSeq: '',
        title: '',
        content: '',
        imgFilePath: '',
        imgFileNameEnc: '',
        delYn: '',
        regId: '',
        regDate: '',
        modId: '',
        modDate: '',

        prevPlatfraSeq: '',
        nextPlatfraSeq: '',
      },

      boardFileList: [],
      hashtagList: [],

      fileInfoList: [],
      fileList: [],
      deleteFileList : [],
    }
  },
  computed: {
    platfraId() {
      return this.$route.query.platfraId;
    },
    platfraId() {
      return this.$route.params.platfraId;
    }
  },
  created() {
    this.getPlatfraDetail();
  },
  methods: {
    getPlatfraDetail () {
      this.$axios.$get('/api/platfra/detail?platfraId=' + this.platfraId + '&platfraId=' + this.platfraId).then((data) => {
        this.boardDetail = _.cloneDeep(data.boardDetail);
        console.log(this.boardDetail);
        this.content = this.boardDetail.content;
        this.boardFileList = data.boardFileList;
        this.hashtagList = data.hashtagList;

        this.boardFileList.forEach((item, index) => {
          //기 등록된 파일들
          const fileInfo = {
            fileSeq : item.fileSeq,
            name: item.fileName,
            size: item.fileSize,

          }
          this.fileInfoList.push(fileInfo);
        });
        //해시태그
        let hashtag = "";
        this.hashtagList.forEach((item, index) => {
          hashtag += item;
          if(index < this.hashtagList.length - 1) {
            hashtag += ", ";
          }
        });
        this.hashtag = hashtag;
      })
    },
    modifyPlatfra() {
      let formData = new FormData()

      const tiptapContent = this.$refs.tiptap.getTiptapContent();
      this.content = tiptapContent;


      if(this.imgFile != null) {
        formData.append('imgFile', this.imgFile);
      }

      formData.append('platfraId', this.boardDetail.platfraId);
      formData.append('title', this.boardDetail.title);
      formData.append('content', this.boardDetail.content);
      formData.append('hashtag', this.hashtag);

      //TODO 파일 관련 유효성 검사 정책필요. 확장자, 파일명, 파일 사이즈 등.
      for(let i = 0; i < this.fileList.length; ++i) {
        formData.append('fileList[' + i + ']', this.fileList[i]);
      }
      for(let i = 0; i < this.deleteFileList.length; ++i) {
        formData.append('deleteFileList[' + i + ']', this.deleteFileList[i]);
      }


      this.$axios.$put('/api/platfra/modify/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      }).then((data) => {
        this.movePlatfraDetail(data.platfraId);
      }).catch((error) => {
        alert("알 수 없는 오류가 발생하였습니다.")
      });
    },
    movePlatfraDetail (platfraId) {
      this.$router.push({ name: 'platfraId-detail', query: { platfraId: platfraId }});
    },
    addInputfile() {
      this.fileList.push(this.$refs.file.files[0]);
    },
    addDeleteFileSeq(fileSeq) {
      //TODO 삭제 취소 구현하기
      this.deleteFileList.push(fileSeq);
    },
    addInputImgFile () {
      this.imgFile = this.$refs.imgFile.files[0];
      const blobURL = window.URL.createObjectURL(this.imgFile);

      this.$refs.printImg.setAttribute("src", blobURL);
    },
    deletePrintImg () {
      this.imgFile = "";
      this.$refs.printImg.setAttribute("src", "");

      this.$refs.imgFile.value = "";

    }
  }
}


</script>

<style scoped>
  @import '~/assets/resource/board/css/common.css';
  @import '~/assets/resource/board/css/regist.css';
</style>
