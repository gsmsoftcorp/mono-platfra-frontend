<template>
  <div class="content">
    <div class="regist_wrap">
      <h2 class="hidden">게시판 등록</h2>
      <div class="regist_box">
        <div class="thumbnail_box">
          <strong class="form_label">썸네일 이미지</strong>
          <div class="upload_box">
            <div class="img_center">
              <img src="" ref="printImg" style="display: none;">
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
          <label for="platfraId" class="form_label">게시판 아이디</label>
          <div class="input_box">
            <input type="text" id="platfraId" v-model="platfraId" placeholder="게시판 아이디를 입력하세요">
          </div>
          <label for="mbName" class="form_label">게시판 이름</label>
          <div class="input_box">
            <input type="text" id="mbName" v-model="name" placeholder="게시판 이름을 입력하세요">
          </div>
          <label for="mbDescription" class="form_label">게시판 소개</label>
          <div class="input_box">
            <input type="text" id="mbDescription" v-model="description" placeholder="게시판을 소개해주세요">
          </div>
          <strong class="form_label">기능</strong>
          <div class="input_box table">
            <div class="choice_box">
              <div v-for="(item, index) in serviceNormal">
                <input type="checkbox" :id="item.code" class="type2" name="normal" :value="item.code" v-model="masterService">
                <label :for="item.code">{{ item.name }}</label>
              </div>
            </div>
          </div>
          <strong class="form_label">분야</strong>
          <div class="input_box table">
            <div class="choice_box">
              <div v-for="(item, index) in serviceSale">
                <input type="checkbox" :id="item.code" class="type2" name="sale" :value="item.code" v-model="masterService">
                <label :for="item.code">{{ item.name }}</label>
              </div>
            </div>
          </div>
          <strong class="form_label">게시판 공개</strong>
          <div>
            <input type="radio" id="displayY" name="show" v-model="displayYn" value="Y" class="type1" checked="checked">
            <label for="displayY">공개</label>
            <input type="radio" id="displayN" name="show" v-model="displayYn" value="N" class="type1">
            <label for="displayN">비공개</label>
          </div>
        </div>
        <div class="btn_box">
          <button class="positive btn_primary" @click="registMasterPlatfra()">등록</button>
          <button class="negative btn_primary">취소</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Reigst',
    components: {},
    data () {
      return {
        masterServices: null,
        serviceNormal: [],
        serviceSale: [],
        //serviceVideo
        //serviceStreaming 등등

        platfraId: '',
        name: '',
        description: '',
        displayYn: '',
        imgFile: null,
        masterService: [],

      }
    },
    created () {
      this.getMasterService(); //기능 리스트 호출
    },
    methods: {
      moveMasterPlatfraList() {
        this.$router.push({ name: 'master-list', params: { }});
      },
      getMasterService () {
        this.$axios.$get('/api/master/getMasterServices?serviceCode=' + 'MASTER_SERVICE').then((data) => {
          this.masterServices = _.cloneDeep(data);

          //서비스 기능 나누기
          for (let i = 0; i < this.masterServices.length; ++i) {
            if (this.masterServices[i].parentCode == "SERVICE_NORMAL") {
              this.serviceNormal.push(this.masterServices[i]);
            }
            if (this.masterServices[i].parentCode == "SERVICE_SALE") {
              this.serviceSale.push(this.masterServices[i]);
            }
          }
        })
      },
      registMasterPlatfra() {
        let formData = new FormData()

        formData.append('platfraId', this.platfraId);
        formData.append('name', this.name);
        formData.append('description', this.description);
        formData.append('displayYn', this.displayYn);
        if(this.imgFile != null) {
          formData.append('imgFile', this.imgFile);
        }
        formData.append('masterService', this.masterService);

        this.$axios.$post('/api/master/regist', formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        }).then((data) => {
          alert("등록 되었습니다.");
          this.moveMasterPlatfraList();
        }).catch((error) => {
          alert("알 수 없는 오류가 발생하였습니다.")
        });
      },
      addInputImgFile() {
        this.imgFile = this.$refs.imgFile.files[0];
        const blobURL = window.URL.createObjectURL(this.imgFile);
        this.$refs.printImg.setAttribute("src", blobURL);
        this.$refs.printImg.style.display = "block";
      },
      deletePrintImg() {
        this.imgFile = "";
        this.$refs.imgFile.value = "";
        this.$refs.printImg.setAttribute("src", "");
        this.$refs.printImg.style.display = "none";
      }
    }
  }
</script>

<style scoped>
  @import '~/assets/resource/master/css/regist.css';
</style>
