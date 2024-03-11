<template>
  <div class="content">
    <div class="article_write_wrap">
      <h2 class="hidden">게시물 등록</h2>
      <div class="article_write_box">
        <div class="thumbnail_box">
          <strong class="form_label">썸네일 이미지</strong>
          <div class="upload_box">
            <div class="img_center">
              <img src="" ref="printImg" style="display:none">
            </div>
            <button class="btn_delete" @click="deletePrintImg()"></button>
            <div class="upload_guide">
              <p class="lgray_txt">드래그 하거나 클릭하여 업로드</p>
              <div class="btn_box">
                <input type="file" id="thumbnail_upload" ref="imgFile" @change="addInputImgFile()">
                <label for="thumbnail_upload" class="positive btn_secondary">Browse</label>
              </div>
              <ul class="requirement">
                <li>
                  <span class="extra_small_txt">고해상도 이미지 (png, jpg, gif)</span>
                </li>
                <li>
                  <span class="extra_small_txt">비디오 (mp4, 4:3, &lt;60 secs)</span>
                </li>
                <li>
                  <span class="extra_small_txt">움직이는 이미지 (4:3, 800x800 - 1600x1200)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="detail_box">
          <label for="detailTit" class="form_label">제목</label>
          <div class="input_box">
            <input type="text" id="detailTit" placeholder="제목을 입력하세요" class="width_max" v-model="title">
          </div>
          <label for="detailCont" class="form_label">내용</label>
          <div>
            <textarea placeholder="내용을 입력하세요" id="detailCont" class="width_max" v-model="content"></textarea>
          </div>
          <!--<div>
            <TiptapEditor :content="content" ref="tiptap" />
           <textarea placeholder="내용을 입력하세요" class="width_max"></textarea>
          </div>-->
          <label for="detailTag" class="form_label">태그</label>
          <div class="input_box">
            <input type="text" id="detailTag" placeholder="태그" class="width_max" v-model="hashtag">
          </div>
          <div class="input_box table">
            <div class="tag_box">
              <a href="" class="tag_small">design</a>
              <a href="" class="tag_small">drawing</a>
              <a href="" class="tag_small">drawing</a>
            </div>
          </div>
          <strong class="form_label">파일 첨부</strong>
          <div class="file_box flex_box">
            <ul class="file_list">
                <li v-for="(item, index) in fileList">
                  <div class="flex_box">
                    <div class="file_info">
                      <p class="small_txt">{{ item.name }}</p>
                      <span class="extra_small_txt gray_txt">({{ item.size }} B)</span>
                    </div>
                    <button class="btn_down btn_icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M13 12h3l-4 4-4-4h3V8h2v4zm2-8H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992z"/></svg>
                    </button>
                  </div>
                </li>
              </ul>
            <div class="btn_box">
              <input type="file" id="file_upload" ref="file" @change="addInputfile()">
              <label for="file_upload" class="positive btn_secondary">Browse</label>
            </div>
          </div>
        </div>
      </div>
      <div class="form_btn_box">
        <button class="btn_primary positive" @click="registPlatfra()">작성</button>
        <button class="btn_primary negative" @click="movePlatfraList()">취소</button>

      </div>
    </div>
  </div>
</template>

<script>
  /*import TiptapEditor from '~/components/features/editor/tiptap.vue'*/

  export default {
    name: 'Regist',
    components: {
      // TiptapEditor
    },
    data () {
      return {
        imgFile: null,
        title: '',
        content: '',
        hashtag: '',

        // fileList: ["input"]
        fileList: []
      }
    },
    computed: {
      platfraId() {
        return this.$route.params.platfraId;
      }
    },
    methods: {
      registPlatfra () {
        let formData = new FormData()

        // const tiptapContent = this.$refs.tiptap.getTiptapContent();
        // this.content = tiptapContent;

        if(this.imgFile != null) {
            formData.append('imgFile', this.imgFile)
        }


        formData.append('platfraId', this.platfraId);
        formData.append('title', this.title);
        formData.append('content', this.content);
        formData.append('hashtag', this.hashtag);

        //TODO 파일 관련 유효성 검사 정책필요. 확장자, 파일명, 파일 사이즈 등.
        for (let i = 0; i < this.fileList.length; ++i) {
          formData.append('fileList[' + i + ']', this.fileList[i]);
        }
        this.$axios.$post('/api/platfra/regist/', formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        }).then((data) => {
          //TODO noContent일 경우 정책 세우기
          alert("등록 되었습니다.");
          this.movePlatfraDetail(data.platfraId);
        }).catch((error) => {
          alert("알 수 없는 오류가 발생하였습니다.")
        });
      },
      movePlatfraDetail (platfraId) {
        this.$router.push({ name: 'platfraId-detail', query: { platfraId: platfraId } });
      },
      movePlatfraList () {
        this.$router.push({ name: 'platfraId', params: { }});
      },
      addInputfile () {
        this.fileList.push(this.$refs.file.files[0]);
      },
      // inputContent(content) {
      //   this.content = content;
      // }
      addInputImgFile () {
        this.imgFile = this.$refs.imgFile.files[0];
        const blobURL = window.URL.createObjectURL(this.imgFile);
        this.$refs.printImg.setAttribute("src", blobURL);
        this.$refs.printImg.style.display = "block";
      },
      deletePrintImg () {
        this.imgFile = "";
        this.$refs.imgFile.value = "";
        this.$refs.printImg.setAttribute("src", "");
        this.$refs.printImg.style.display = "none";
        this.$refs.printImg.setAttribute("src", "");
      }
    }
  }
</script>

<style scoped>
  @import '~/assets/resource/board/css/common.css';
  @import '~/assets/resource/board/css/regist.css';
</style>
