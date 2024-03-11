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
        <div class="platfraListBox">
          <div class="listTopBox clearfix">
            <div class="leftSide">
              <span class="listCount">전체 <span>8</span>건</span>
            </div>
            <div class="rightSide">
              <!--<div class="order selectBox">
                <span class="basic shadow" style="cursor:pointer" @click="selectboxEventHandler()">최신순</span>
                <ul class="option shadow">
                  <li>최신순</li>
                  <li>조회순</li>
                  <li>좋아요순</li>
                </ul>
              </div>-->
              <select name="order" class="order shadow round4">
                <option value="최신순">최신순</option>
                <option value="조회순">조회순</option>
                <option value="좋아요순">좋아요순</option>
              </select>
              <!--<div class="count selectBox">
                <span class="basic shadow">8개씩 보기</span>
                <ul class="option shadow">
                  <li>8개씩 보기</li>
                  <li>12개씩 보기</li>
                  <li>16개씩 보기</li>
                  <li>20개씩 보기</li>
                </ul>
              </div>-->
              <select name="count" class="count shadow round4">
                <option value="8개씩 보기">8개씩 보기</option>
                <option value="12개씩 보기">12개씩 보기</option>
                <option value="16개씩 보기">16개씩 보기</option>
                <option value="20개씩 보기">20개씩 보기</option>
              </select>
              <div class="articleSchWrap">
                <div class="shadow clearfix">
                  <!--<div class="schKind selectBox">
                    <span class="basic">전체</span>
                    <ul class="option shadow">
                      <li>전체</li>
                      <li>제목</li>
                      <li>내용</li>
                      <li>작성자</li>
                    </ul>
                  </div>-->
                  <select name="schKind" class="schKind">
                    <option value="전체">전체</option>
                    <option value="제목">제목</option>
                    <option value="내용">내용</option>
                    <option value="작성자">작성자</option>
                  </select>
                  <div class="boardSchBox">
                    <input type="text" placeholder="검색어를 입력해주세요" maxlength="100">
                    <button>검색</button>
                  </div>
                </div>
              </div>
              <div class="sort">
                <a class="sort_table shadow round1"><span><span>표형식으로 보기</span></span></a>
                <a class="sort_card shadow round1"><span><span>카드형식으로 보기</span></span></a>
              </div>
              <a class="btnSize2 blue round2" @click="moveRegistPlatfra('board-regist')">글쓰기</a>
            </div>
          </div>
          <div class="articleListBox">
            <ul class="shadow">
              <li>번호</li>
              <li>제목</li>
              <li>작성자</li>
              <li>날짜</li>
              <li>조회수</li>
              <li>좋아요</li>
            </ul>
            <table class="shadow">
              <caption class="hidden">게시물 목록</caption>
              <colgroup>
                <col style="width: 8%">
                <col style="width: 50%">
                <col style="width: 12%">
                <col style="width: 10%">
                <col style="width: 12%">
                <col style="width: 8%">
              </colgroup>
              <thead>
              <tr class="hidden">
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>날짜</th>
                <th>조회수</th>
                <th>좋아요</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>1</td>
                <td>
                  <div class="titBox">
                    <a href="" class="tit">
                      <strong><span class="ellipsis">[연남동] 쿠키 맛집 타임브릭스</span></strong>
                    </a>
                    <span class="comment"><span class="lightblue">10</span></span>
                  </div>
                </td>
                <td>eunjeeee</td>
                <td>18:30</td>
                <td>25</td>
                <td>5</td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <div class="titBox">
                    <a href="" class="tit">
                      <strong><span class="ellipsis">[영등포]인스타감성, 맛있는 커피가 있는 포프트커피</span></strong>
                    </a>
                    <span class="comment"><span class="lightblue">3</span></span>
                  </div>
                </td>
                <td>onestar_1</td>
                <td>16:00</td>
                <td>35</td>
                <td>16</td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <div class="titBox">
                    <a href="" class="tit">
                      <strong><span class="ellipsis">후암동 이쁜 카페 추천</span></strong>
                    </a>
                    <span class="comment"><span class="lightblue">1</span></span>
                  </div>
                </td>
                <td>sheiscute</td>
                <td>15:45</td>
                <td>25</td>
                <td>5</td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <div class="titBox">
                    <a href="" class="tit">
                      <strong><span class="ellipsis">[한남동] 요즘 가장 인기있는 이태원 올드페리도넛</span></strong>
                    </a>
                    <span class="comment"><span class="lightblue">30</span></span>
                  </div>
                </td>
                <td>rolarola</td>
                <td>12:40</td>
                <td>100</td>
                <td>50</td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <div class="titBox">
                    <a href="" class="tit">
                      <strong><span class="ellipsis">연말에 더 기대되는 한남동 레스토랑 추천</span></strong>
                    </a>
                  </div>
                </td>
                <td>jella</td>
                <td>2020.10.15</td>
                <td>48</td>
                <td>30</td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <div class="titBox">
                    <a href="" class="tit">
                      <strong><span class="ellipsis">[합정] 핫플 레스토랑 스케줄합정</span></strong>
                    </a>
                    <span class="comment"><span class="lightblue">9</span></span>
                  </div>
                </td>
                <td>sheiscute</td>
                <td>2020.10.15</td>
                <td>60</td>
                <td>10</td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <div class="titBox">
                    <a href="" class="tit">
                      <strong><span class="ellipsis">[연남동] 쿠키 맛집 타임브릭스</span></strong>
                    </a>
                    <span class="comment"><span class="lightblue">10</span></span>
                  </div>
                </td>
                <td>eunjeeee</td>
                <td>18:30</td>
                <td>25</td>
                <td>5</td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <div class="titBox">
                    <a href="" class="tit">
                      <strong><span class="ellipsis">[영등포]인스타감성, 맛있는 커피가 있는 포프트커피</span></strong>
                    </a>
                    <span class="comment"><span class="lightblue">3</span></span>
                  </div>
                </td>
                <td>onestar_1</td>
                <td>16:00</td>
                <td>35</td>
                <td>16</td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <div class="titBox">
                    <a href="" class="tit">
                      <strong><span class="ellipsis">후암동 이쁜 카페 추천</span></strong>
                    </a>
                    <span class="comment"><span class="lightblue">1</span></span>
                  </div>
                </td>
                <td>sheiscute</td>
                <td>15:45</td>
                <td>25</td>
                <td>5</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div class="centerBox">
            <a href="#" class="btnMore">리스트추가</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  name: 'List',
  data () {
    return {
      platfraList: []

    }
  },
  created () {
    this.getPlatfraList()
  },
  methods: {
    getPlatfraList () {
      this.$axios.$get('/api/platfra/list').then((data) => {
        this.platfraList = _.cloneDeep(data)
      })
    }
  }

}
</script>

<style scoped>
  @import '~/assets/resource/board/css/board_common.css';
  @import '~/assets/resource/board/css/list_common.css';
  @import '~/assets/resource/board/css/list_table.css';

</style>
