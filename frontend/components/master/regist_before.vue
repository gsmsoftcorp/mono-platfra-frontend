<template>
  <div class="content">
    <div class="inner">
      <h2 class="hidden">게시판 만들기</h2>
      <div class="registBox round3 shadow">
        <div class="group">
          <div>
            <label class="groupTit" for="platfraId">게시판 아이디</label>
          </div>
          <div>
            <input type="text" id="platfraId" class="basicInput" v-model="platfraId" placeholder="게시판 아이디를 입력하세요">
          </div>
        </div>
        <div class="group">
          <div>
            <label class="groupTit" for="mbName">게시판 이름</label>
          </div>
          <div>
            <input type="text" id="mbName" class="basicInput" v-model="name" placeholder="게시판 이름을 입력하세요">
          </div>
        </div>
        <div class="group">
          <div>
            <label class="groupTit" for="mbDescription">게시판 소개</label>
          </div>
          <div>
            <input type="text" id="mbDescription" class="basicInput" v-model="description" placeholder="게시판을 소개해주세요">
          </div>
        </div>
        <div class="group">
          <div>
            <strong class="groupTit">게시판 이미지</strong>
          </div>
          <div class="uploadImg">
            <div>
              <img src="" ref="printImg">
            </div>
            <div>
              <label class="btnSize1 blue round1" for="uploadImg">이미지 찾기</label>
              <input type="file" id="uploadImg" ref="imgFile" @change="addInputImgFile()">
              <span class="guide">(150px * 150px / 10MB미만)</span>
            </div>
          </div>
        </div>
        <div class="group">
          <div>
            <strong class="groupTit">일반</strong>
          </div>
          <div class="basicInput checkBox">
            <div v-for="(item, index) in serviceNormal" style="display: inline-block;">
              <input type="checkbox" :id="item.code" class="type2" name="normal" :value="item.code" v-model="masterService">
              <label :for="item.code">{{ item.name }}</label>
            </div>
          </div>
        </div>
        <div class="group">
          <div>
            <strong class="groupTit">판매</strong>
          </div>
          <div class="basicInput checkBox">
            <div v-for="(item, index) in serviceSale" style="display: inline-block;">
              <input type="checkbox" :id="item.code" class="type2" name="sale" :value="item.code" v-model="masterService">
              <label :for="item.code">{{ item.name }}</label>
            </div>
          </div>
        </div>
        <!--        <div class="group">-->
        <!--          <div>-->
        <!--            <strong class="groupTit">게시판 분야</strong>-->
        <!--          </div>-->
        <!--          <div class="basicInput checkBox">-->
        <!--            <input type="checkbox" id="shopping" class="type2" name="kind" value="fnComment">-->
        <!--            <label for="shopping">쇼핑</label>-->
        <!--            <input type="checkbox" id="review" class="type2" name="kind" value="fnLike">-->
        <!--            <label for="review">리뷰</label>-->
        <!--            <input type="checkbox" id="study" class="type2" name="kind" value="fnView">-->
        <!--            <label for="study">스터디</label>-->
        <!--            <input type="checkbox" id="trip" class="type2" name="kind" value="fnView">-->
        <!--            <label for="trip">여행</label>-->
        <!--            <input type="checkbox" id="daily" class="type2" name="kind" value="fnView">-->
        <!--            <label for="daily">일상</label>-->
        <!--          </div>-->
        <!--        </div>-->
        <!--        <div class="group">-->
        <!--          <div>-->
        <!--            <strong class="groupTit">게시판 기능2</strong>-->
        <!--          </div>-->
        <!--          <div class="basicInput checkBox">-->
        <!--            <input type="checkbox" name="function" value="comment" class="type2">-->
        <!--            <label>판매</label>-->
        <!--            <input type="checkbox" name="function" value="comment" class="type2">-->
        <!--            <label>스트리밍</label>-->
        <!--            <input type="checkbox" name="function" value="comment" class="type2">-->
        <!--            <label>동영상</label>-->
        <!--          </div>-->
        <!--        </div>-->
        <div class="group">
          <div>
            <strong class="groupTit">게시판 공개</strong>
          </div>
          <div>
            <input type="radio" id="displayY" name="show" v-model="displayYn" value="Y" class="type1" checked="checked">
            <label for="displayY">공개</label>
            <input type="radio" id="displayN" name="show" v-model="displayYn" value="N" class="type1">
            <label for="displayN">비공개</label>
          </div>
        </div>
        <div class="rightBox">
          <button class="btnSize3 blue round4" @click="registMasterPlatfra()">등록</button>
          <button class="btnSize3 blueLine round4">취소</button>
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
  @import '~/assets/css/masterPlatfra/masterPlatfraCommon.css';
  @import '~/assets/css/masterPlatfra/masterPlatfraRegist.css';
</style>
