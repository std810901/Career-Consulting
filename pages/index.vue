<template>
  <div>
    <div id="banner_block" class="banner_block">
      <div
        id="banner_carousel"
        class="carousel carousel-dark slide h-100"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <!-- <button
            type="button"
            data-bs-target="#banner_carousel"
            data-bs-slide-to="0"
            class="active"
          ></button>
          <button
            type="button"
            data-bs-target="#banner_carousel"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#banner_carousel"
            data-bs-slide-to="2"
          ></button> -->
        </div>
        <div class="carousel-inner h-100">
          <div class="carousel-item active h-100">
            <div class="side_img">
              <div class="container-xxl h-100">
                <div class="row h-100">
                  <div
                    class="offset-sm-1 col-sm-5 col-12 p-0 d-flex align-items-center"
                  >
                    <div class="text_box">
                      <img
                        class="img_title"
                        src="~assets/images/img_title.svg"
                        alt=""
                      />
                      <div class="text">
                        專業的招募顧問團隊，每年為企業安排500場以上面試，理解人才在求職過程中所碰到的疑惑，提供人資實務上的想法建議。
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="carousel-item h-100">
            <div class="side_img">
              <div class="container-xxl h-100">
                <div class="row h-100">
                  <div class="offset-1 col-5 position-relative">
                    <div class="text_box">
                      <div class="title">
                        路是一條直直的<br />
                        偶爾可以是彎曲
                      </div>
                      <div class="text">
                        專業的文青顧問團隊，每年為企業安排500場以上面試，理解人才在求職過程中所碰到的疑惑，提供人資實務上的想法建議。
                      </div>
                    </div>
                  </div>
                  <div class="col-6"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item h-100">
            <div class="side_img">
              <div class="container-xxl h-100">
                <div class="row h-100">
                  <div class="offset-1 col-5 position-relative">
                    <div class="text_box">
                      <div class="title">
                        我站在雲林<br />
                        想著我的文案
                      </div>
                      <div class="text">
                        專業的顧問團隊，每年為企業安排500場以上，理解人才在求職過程中所碰到的疑惑，提供人資實務上的想法建議。
                      </div>
                    </div>
                  </div>
                  <div class="col-6"></div>
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
    <div id="text_block" class="text_block">
      <div class="title">
        你，是否也有這些狀況呢？<br />
        <img src="~assets/images/highlight.svg" style="z-index: -1" alt="" />
      </div>
      <div class="text">
        履歷想下筆，不知道從哪裡著手，擁有豐富經歷，<br
          class="d-sm-block d-none"
        />
        履歷卻像流水帳，明明有很多獨特的經驗，寫出來卻很普通，<br
          class="d-sm-block d-none"
        />
        不知道面試回答是否合適，面試官問的問題到底想知道什麼？
      </div>
    </div>
    <div id="service_block" class="service_block">
      <div class="service_box bg-deepStyle">
        <div class="title">履歷諮詢</div>
        <div class="text">
          了解你目前的求職狀況，提供實務人資的角給予履歷建議，整理出個人優勢
        </div>
        <div class="spandTime">60<small>分鐘</small></div>
        <button class="apply_btn" @click="openJotform()">立即報名</button>
        <div class="price">NT$1,300</div>
        <div class="details">
          <img class="wave_img" src="~assets/images/wave_a.svg" alt="" />
          <div class="detail_section">
            <div class="detail_box">
              <div class="detail_title">客製化專業回饋</div>
              <div class="detail_text">
                ✓ 掌握職務的要求&amp;條件<br />
                ✓ 分析履歷的優劣勢<br />
                ✓ 履歷整體優化建議<br />
                ✓ HR注重的眉角
              </div>
            </div>
          </div>
        </div>
        <img class="people_img" src="~assets/images/bg_plan_a.svg" alt="" />
      </div>
      <div class="service_box bg-lightStyle">
        <div class="title">面試模擬</div>
        <div class="text">
          根據期望職缺，進行實際演練，從表情、儀態、回答內容、語調等面向，給予人資視角建議
        </div>
        <div class="spandTime">90<small>分鐘</small></div>
        <button class="apply_btn" @click="openJotform()">立即報名</button>
        <div class="price">NT$2,000</div>
        <div class="details">
          <img class="wave_img" src="~assets/images/wave_b.svg" alt="" />
          <div class="detail_section">
            <div class="detail_box">
              <div class="detail_title">實際模擬</div>
              <div class="detail_text">
                ✓ 面試官提問演練<br />
                ✓ 依履歷&amp;自傳設計題目<br />
                ✓ 自我介紹/求職動機/<br />
                &nbsp;&nbsp;&nbsp;經驗分享/特質了解等<br />
                ✓ 技巧練習/現場回饋<br />
              </div>
            </div>
            <div class="detail_box">
              <div class="detail_title">客製化專業回饋</div>
              <div class="detail_text">
                ✓ 回答內容與技巧<br />
                ✓ 肢體表情注意面向<br />
                ✓ 面試官的可能考量<br />
                ✓ 實際面試遇到的QA<br />
                ✓ 獲得回饋檔案
              </div>
            </div>
          </div>
        </div>
        <img class="people_img" src="~assets/images/bg_plan_b.svg" alt="" />
      </div>
    </div>
    <div id="step_block" class="step_block">
      <div class="container-xxl">
        <div class="row">
          <div class="col-12">
            <div class="steps">
              <div class="step_box">
                <img
                  class="step_img"
                  src="~assets/images/img_step01.svg"
                  alt=""
                />
                <div class="setp_title">進入優聘諮詢室</div>
                <div class="step_text">
                  <strong>A.</strong> 加入<strong>Line <a href="https://lin.ee/fKyFgGt" target="_blank">@talfin.ai</a></strong><br />
                  <strong>B.</strong> 填寫諮詢報名表
                </div>
              </div>
              <div class="step_box">
                <img
                  class="step_img"
                  src="~assets/images/img_step02.svg"
                  alt=""
                />
                <div class="setp_title">專人聯繫</div>
                <div class="step_text">
                  顧問初步了解議題內容，<br />
                  並根據需求引導後續流程
                </div>
              </div>
              <div class="step_box">
                <img
                  class="step_img"
                  src="~assets/images/img_step03.svg"
                  alt=""
                />
                <div class="setp_title">進行諮詢</div>
                <div class="step_text">
                  開始進行<br />
                  專人一對一諮詢
                </div>
              </div>
              <div class="step_box">
                <img
                  class="step_img"
                  src="~assets/images/img_step04.svg"
                  alt=""
                />
                <div class="setp_title">專屬諮詢回饋</div>
                <div class="step_text">
                  諮詢後5個工作天內，將會<br />收到諮詢回饋的檔案
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="FAQ_block" class="FAQ_block">
      <div class="container-xxl">
        <div class="row">
          <div class="offset-sm-1 col-sm-5 col-12">
            <div
              class="question_box"
              data-bs-target="#QNA_carousel"
              data-bs-slide-to="0"
              @click="openFullMode()"
            >
              <img
                class="question_img"
                src="~assets/images/ic_question.svg"
                alt=""
              />
              <div class="question">為什麼需要諮詢？</div>
              <img class="arrow_img" src="~assets/images/bt_next.svg" alt="" />
            </div>
            <div
              class="question_box"
              data-bs-target="#QNA_carousel"
              data-bs-slide-to="1"
              @click="openFullMode()"
            >
              <img
                class="question_img"
                src="~assets/images/ic_question.svg"
                alt=""
              />
              <div class="question">可以預約下班後的時間進行諮詢嗎？</div>
              <img class="arrow_img" src="~assets/images/bt_next.svg" alt="" />
            </div>
            <div
              class="question_box"
              data-bs-target="#QNA_carousel"
              data-bs-slide-to="2"
              @click="openFullMode()"
            >
              <img
                class="question_img"
                src="~assets/images/ic_question.svg"
                alt=""
              />
              <div class="question">諮詢內容會保密嗎？</div>
              <img class="arrow_img" src="~assets/images/bt_next.svg" alt="" />
            </div>
          </div>
          <div class="col-sm-5 col-12">
            <div
              class="question_box"
              data-bs-target="#QNA_carousel"
              data-bs-slide-to="3"
              @click="openFullMode()"
            >
              <img
                class="question_img"
                src="~assets/images/ic_question.svg"
                alt=""
              />
              <div class="question">哪個方案適合我？</div>
              <img class="arrow_img" src="~assets/images/bt_next.svg" alt="" />
            </div>
            <div
              class="question_box"
              data-bs-target="#QNA_carousel"
              data-bs-slide-to="4"
              @click="openFullMode()"
            >
              <img
                class="question_img"
                src="~assets/images/ic_question.svg"
                alt=""
              />
              <div class="question">諮詢完，能保證找到理想工作嗎？</div>
              <img class="arrow_img" src="~assets/images/bt_next.svg" alt="" />
            </div>
            <div
              id="openAnswerModal"
              class="question_box d-none"
              data-bs-target="#answerModal"
              data-bs-toggle="modal"
            >
              <img
                class="question_img"
                src="~assets/images/ic_question.svg"
                alt=""
              />
              <div class="question">做完能加薪嗎？</div>
              <img class="arrow_img" src="~assets/images/bt_next.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="feedback_block" class="feedback_block">
      <div class="container-fluid h-100">
        <div class="row h-100">
          <div class="col-sm-3 col-12 position-relative">
            <img class="bg-offerget" src="~assets/images/feedback.svg" />
          </div>
          <div class="col-sm-9 col-12 h-100 bg-feedback">
            <div class="feedback_box">
              <div class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div
                    v-for="(data, index) of feedbackData"
                    :key="index"
                    class="carousel-item"
                    :class="{ active: index === 0 }"
                  >
                    <div class="feedback_word">
                      {{ data.feedback }}
                    </div>
                    <div class="feedback_user">
                      <img
                        v-if="data.sex === 'male'"
                        class="me-2"
                        src="~assets/images/feedback_people_male.svg"
                        alt=""
                      />
                      <img
                        v-else-if="data.sex === 'female'"
                        class="me-2"
                        src="~assets/images/feedback_people_female.svg"
                        alt=""
                      />
                      {{ data.name }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="article_block" class="article_block">
      <div class="container-xxl text-center h-100">
        <div class="row align-items-center h-100">
          <div class="col-12">
            <div class="carousel-wrapper">
              <div v-swiper:mySwiper="options">
                <div class="swiper-wrapper">
                  <div
                    v-for="(data, index) of articleData"
                    :key="index"
                    class="img-warpper swiper-slide"
                  >
                    <a class="slide_box" :href="data.link" target="blank">
                      <div class="img_border">
                        <div
                          class="img_box"
                          :style="`background-image: url('${data.img_link}')`"
                        ></div>
                      </div>
                      <div class="title">
                        <span class="hashTag">{{ data.hashtag1 }}</span>
                        <span class="hashTag">{{ data.hashtag2 }}</span>
                        <span class="hashTag">{{ data.hashtag3 }}</span
                        ><br />
                        <div class="words">{{ data.title }}</div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="swiper-pagination swiper-pagination-bullets"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="ocean" class="ocean">
      <div class="wave"></div>
      <div class="line"></div>
      <!-- Go To Top -->
      <div>
        <button
          id="gotop_btn"
          type="button"
          class="btn btn-link"
          @click="goToTop()"
        >
          <img src="~assets/images/img_gototop.svg" />
        </button>
      </div>
      <div class="container-xxl h-100">
        <div class="row h-100 align-items-center">
          <div class="offset-sm-1 col-sm-6 col-12 p-sm-30">
            <div class="subscribe_title">
              你，訂閱了嗎？
              <img
                src="~assets/images/subscribe_highlight.svg"
                style="z-index: -1"
                alt=""
              />
            </div>
            <div class="row flex-column flex-sm-row">
              <div class="col-sm-4 col-6">
                <input
                  v-model="subscribeName"
                  type="text"
                  class="subscribe_input"
                  placeholder="Name"
                />
                <hr class="underline" />
              </div>
              <div class="col-sm-8 col-9">
                <input
                  v-model="subscribeEmail"
                  type="email"
                  class="subscribe_input"
                  placeholder="E-mail"
                />
                <hr class="underline" />
                <a
                  class="subscribe_btn"
                  href="javascript:;"
                  data-bs-target="#captchaModal"
                  data-bs-toggle="modal"
                >
                  立即訂閱「求職精選好文」
                  <img
                    class="subscribe_icon"
                    src="~assets/images/subscribe_btn.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-5 d-none d-sm-block">
            <img
              class="subscribe_img"
              src="~assets/images/img_subscribe.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <!-- 常駐型側選單 -->
    <div id="scrollspy" class="list-group">
      <a
        class="list-group-item"
        href="javascript:;"
        @click="scrollingTo('text_block', 1 / 3)"
        >Why us？</a
      >
      <a
        class="list-group-item"
        href="javascript:;"
        @click="scrollingTo('service_block', 1 / 5)"
        >諮詢方案介紹</a
      >
      <a
        class="list-group-item"
        href="javascript:;"
        @click="scrollingTo('step_block', 1 / 5)"
        >諮詢流程</a
      >
      <a
        class="list-group-item"
        href="javascript:;"
        @click="scrollingTo('FAQ_block', 1 / 5)"
        >常見問題</a
      >
      <a
        class="list-group-item"
        href="javascript:;"
        @click="scrollingTo('feedback_block', 1 / 5)"
        >使用者見證</a
      >
      <a
        class="list-group-item"
        href="javascript:;"
        @click="scrollingTo('article_block', 1 / 4)"
        >精選好文</a
      >
    </div>
    <!-- 常見問題彈窗 -->
    <div id="answerModal" class="modal fade" tabindex="-1">
      <div
        class="modal-dialog modal-xl modal-fullscreen-sm-down modal-dialog-centered"
      >
        <div class="modal-content">
          <div class="modal-body bg-deepStyle modal_line">
            <button
              type="button"
              class="btn-close modal_close_btn"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div
              id="QNA_carousel"
              class="carousel slide h-100"
              data-bs-ride="carousel"
              data-bs-interval="false"
            >
              <div class="carousel-inner h-100">
                <div class="carousel-item active h-100">
                  <div class="container-fluid h-100">
                    <div class="row h-100 align-items-xl-center">
                      <div
                        class="offset-xl-1 col-xl-5 offset-1 col-10 d-flex align-items-start justify-content-center"
                      >
                        <div class="custom_height">
                          <div class="madal_question">為什麼需要諮詢？</div>
                          <div class="madal_answer">
                            就像遇到法律問題會想找律師、醫療問題會想找醫生一樣，
                            讓自己在較不熟悉的領域中，透過專業人士的回饋，
                            協助自己找到面對問題或瓶頸的做法。
                          </div>
                        </div>
                      </div>
                      <div
                        class="offset-xl-0 col-xl-5 order-xl-last offset-1 col-10 order-first d-flex align-items-center justify-content-center"
                      >
                        <img
                          src="~assets/images/madal_qa01.svg"
                          class="madal_qa_img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item h-100">
                  <div class="container-fluid h-100">
                    <div class="row h-100 align-items-xl-center">
                      <div
                        class="offset-xl-1 col-xl-5 offset-1 col-10 d-flex align-items-start justify-content-center"
                      >
                        <div class="custom_height">
                          <div class="madal_question">
                            可以預約下班後的時間進行諮詢嗎？
                          </div>
                          <div class="madal_answer">
                            會以平日上班時間為優先安排，但如果需要安排下班後時段，可以透過Line提前與優聘做確認。
                          </div>
                        </div>
                      </div>
                      <div
                        class="offset-xl-0 col-xl-5 order-xl-last offset-1 col-10 order-first d-flex align-items-center justify-content-center"
                      >
                        <img
                          src="~assets/images/madal_qa02.svg"
                          class="madal_qa_img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item h-100">
                  <div class="container-fluid h-100">
                    <div class="row h-100 align-items-xl-center">
                      <div
                        class="offset-xl-1 col-xl-5 offset-1 col-10 d-flex align-items-start justify-content-center"
                      >
                        <div class="custom_height">
                          <div class="madal_question">
                            諮詢內容會保密嗎？
                          </div>
                          <div class="madal_answer">
                            會的，優聘本身有嚴格的資訊管理規範不會讓資料用作他途。
                          </div>
                        </div>
                      </div>
                      <div
                        class="offset-xl-0 col-xl-5 order-xl-last offset-1 col-10 order-first d-flex align-items-center justify-content-center"
                      >
                        <img
                          src="~assets/images/madal_qa03.svg"
                          class="madal_qa_img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item h-100">
                  <div class="container-fluid h-100">
                    <div class="row h-100 align-items-xl-center">
                      <div
                        class="offset-xl-1 col-xl-5 offset-1 col-10 d-flex align-items-start justify-content-center"
                      >
                        <div class="custom_height">
                          <div class="madal_question">
                            哪個方案適合我？
                          </div>
                          <div class="madal_answer">
                            優聘提供"履歷諮詢" 跟
                            "面試模擬"的諮詢方案唷，請依據自己的需求選定，
                            如真的沒有頭緒，歡迎填寫報名表並加入我們官方LINE，
                            將會有專人免費跟你初步聊聊 官方LINE <a href="https://lin.ee/fKyFgGt" target="_blank">@talfin.ai</a>
                          </div>
                        </div>
                      </div>
                      <div
                        class="offset-xl-0 col-xl-5 order-xl-last offset-1 col-10 order-first d-flex align-items-center justify-content-center"
                      >
                        <img
                          src="~assets/images/madal_qa04.svg"
                          class="madal_qa_img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item h-100">
                  <div class="container-fluid h-100">
                    <div class="row h-100 align-items-xl-center">
                      <div
                        class="offset-xl-1 col-xl-5 offset-1 col-10 d-flex align-items-start justify-content-center"
                      >
                        <div class="custom_height">
                          <div class="madal_question">
                            諮詢完，能保證找到理想工作嗎？
                          </div>
                          <div class="madal_answer">
                            諮詢能夠協助提升求職過程的表現，但無法控制求職過程的所有因素。是否能獲取理想工作的offer，除了履歷和面試之外，還包括：與其他求職者競爭的狀況，或是企業本身的考量，這些非個人能夠掌控的因素。
                          </div>
                        </div>
                      </div>
                      <div
                        class="offset-xl-0 col-xl-5 order-xl-last offset-1 col-10 order-first d-flex align-items-center justify-content-center"
                      >
                        <img
                          src="~assets/images/madal_qa05.svg"
                          class="madal_qa_img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#QNA_carousel"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#QNA_carousel"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 驗證碼彈窗 -->
    <div id="captchaModal" class="modal fade" tabindex="-1">
      <div
        class="modal-dialog modal-xl modal-fullscreen-sm-down modal-dialog-centered"
      >
        <div class="modal-content">
          <div class="modal-body bg-deepStyle custom_modal_body">
            <button
              type="button"
              class="btn-close modal_close_btn"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div class="row h-100 align-items-center">
              <div class="col-12">
                <div
                  v-show="checkSubscribeInfo"
                  class="confirm_box text-center"
                >
                  <div class="check_msg">
                    Hi, {{ subscribeName }}<br />
                    <strong>請確認E-mail</strong><br /><br />
                    <small
                      ><strong>{{ subscribeEmail }}</strong></small
                    >
                  </div>
                  <div class="d-flex align-items-center">
                    <div
                      class="d-flex align-items-center flex-wrap-reverse justify-content-center"
                    >
                      <input
                        id="captcha_input"
                        class="captcha_input"
                        type="text"
                        maxlength="6"
                        placeholder="區分大小寫"
                        required
                      />
                      <div id="captcha"></div>
                      <div id="captcha_refresh" class="captcha_refresh">
                        <span class="material-icons-round">
                          replay
                        </span>
                      </div>
                    </div>
                    <a
                      class="check_btn"
                      href="javascript:;"
                      @click="subscribeArticle2()"
                    >
                      確定
                      <img src="~assets/images/subscribe_btn.svg" alt="" />
                    </a>
                  </div>
                  <div class="mt-4">
                    <div
                      v-show="subscribeSuccess"
                      data-bs-dismiss="modal"
                      style="color:#509B32;cursor: pointer"
                      @click="cleanInput()"
                    >
                      訂閱成功，按此關閉!
                    </div>
                    <div v-show="verificationFail" style="color:#F92D5E;">
                      {{ failMessage }}
                    </div>
                  </div>
                </div>
                <div v-show="!checkSubscribeInfo" class="confirm_box">
                  <div class="check_msg">
                    你填寫的資訊有誤，或有欄位未填寫，請再檢查一次。
                  </div>
                  <a
                    class="check_btn"
                    href="javascript:;"
                    data-bs-dismiss="modal"
                  >
                    我知道了
                    <img src="~assets/images/subscribe_btn.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 手機版選單彈窗 -->
    <div id="menuModal" class="modal fade" tabindex="-1">
      <div class="modal-dialog modal-fullscreen modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body bg-deepStyle">
            <button
              type="button"
              class="btn-close modal_close_btn"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div class="row">
              <div class="col-12">
                <ul class="menu_list" data-bs-dismiss="modal">
                  <li
                    class=""
                    href="javascript:;"
                    @click="scrollingTo('text_block', 1 / 3)"
                  >
                    Why us？
                  </li>
                  <li
                    class=""
                    href="javascript:;"
                    @click="scrollingTo('service_block', 1 / 5)"
                  >
                    諮詢方案介紹
                  </li>
                  <li
                    class=""
                    href="javascript:;"
                    @click="scrollingTo('step_block', 1 / 5)"
                  >
                    諮詢流程
                  </li>
                  <li
                    class=""
                    href="javascript:;"
                    @click="scrollingTo('FAQ_block', 1 / 5)"
                  >
                    常見問題
                  </li>
                  <li
                    class=""
                    href="javascript:;"
                    @click="scrollingTo('feedback_block', 1 / 5)"
                  >
                    使用者見證
                  </li>
                  <li
                    class=""
                    href="javascript:;"
                    @click="scrollingTo('article_block', 1 / 4)"
                  >
                    精選好文
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'
import { Captcha } from '../plugins/captcha'
import feedback from '../locales/feedback.json'
import article from '../locales/article.json'
export default {
  components: {},
  data () {
    return {
      captcha: null,
      subscribeName: '',
      subscribeEmail: '',
      subscribeSuccess: false,
      verificationFail: false,
      failMessage: '',
      feedbackData: [],
      articleData: [],
      options: {
        slidesPerView: 1,
        loop: true,
        autoplay: {
          delay: 5000
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        breakpoints: {
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3
          }
        }
      }
    }
  },
  head () {
    return {
      title: '優聘諮詢室'
    }
  },
  computed: {
    checkSubscribeInfo () {
      const emailReg = /^([a-z0-9])(([-a-z0-9._])*([a-z0-9]))@(([a-z0-9-])*([a-z0-9]))+(\.([a-z0-9])([-a-z0-9_-])?([a-z0-9])+)+$/i
      if (this.subscribeName === '') {
        return false
      } else if (!emailReg.test(this.subscribeEmail)) {
        return false
      } else {
        return true
      }
    }
  },
  created () {
    this.articleData = article
    this.feedbackData = feedback
    // this.articleData = await this.getArticle()
    // this.feedbackData = await this.getFeedback()
  },
  mounted () {
    this.initCaptcha()
    this.scrolling()
    document.getElementById('banner_block').classList.add('animate')
    window.addEventListener('scroll', this.scrolling)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.scrolling)
  },
  methods: {
    cleanInput () {
      this.subscribeName = ''
      this.subscribeEmail = ''
    },
    subscribeArticle2 () {
      if (!this.checkIsRobot()) {
        const param = {
          name: this.subscribeName,
          email: this.subscribeEmail,
          time: new Date()
        }
        $.ajax({
          type: "post",
          url: "https://script.google.com/macros/s/AKfycbzvc3zla-kBaFVxOJcOnTdXIWRADix1uGkoFhCynXVp8QDqZkMctlwCQ9ttU95I899Y/exec",
          data: param,
          dataType: "JSON",
          success: (response) => {
            if (response) {
              this.subscribeSuccess = true
            } else {
              this.verificationFail = true
            }
        }
        });
      }
    },
    subscribeArticle () {
      if (!this.checkIsRobot()) {
        const param = {
          name: this.subscribeName,
          email: this.subscribeEmail
        }
        const url = 'https://sheet.talfin.in/subscribe'
        fetch(url, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Host: 'sheet.talfin.in'
          },
          method: 'POST',
          body: JSON.stringify(param)
        })
          .then(res => res.json())
          .then(data => {
            if (data.statusCode === 200 && data.message === '訂閱成功') {
              this.subscribeSuccess = true
            } else {
              this.verificationFail = true
              this.failMessage = data.message
            }
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
    checkIsRobot () {
      if (
        document.querySelector('#captcha_input').value ===
        this.captcha.captValue
      ) {
        this.verificationFail = false
        this.failMessage = ''
        return false
      } else {
        this.verificationFail = true
        this.failMessage = '驗證碼有誤，請確認!'
        return true
      }
    },
    initCaptcha () {
      this.captcha = new Captcha('#captcha')
      this.captcha.generateCaptcha()
      document
        .querySelector('#captcha_refresh')
        .addEventListener('click', () => {
          this.captcha.refresh()
        })
    },
    getArticle () {
      const result = axios
        .get(
          'https://sheet.talfin.in/?sheet_id=1KhztjPGC8ccCcBN0_nW_QbrHqbNkFJG4pLuC_xp-eoM&sheet_name=article'
        )
        .then(response => {
          if (response.data) {
            return response.data
          } else {
            return article
          }
        })
        .catch(function (error) {
          return error
        })
      return result
    },
    getFeedback () {
      const result = axios
        .get(
          'https://sheet.talfin.in/?sheet_id=1miHNCIAEmjEdb2-M_i-rhErKIizo_I-aAleSqDOYFCg&sheet_name=feedback'
        )
        .then(response => {
          if (response.data) {
            return response.data
          } else {
            return feedback
          }
        })
        .catch(function (error) {
          return error
        })
      return result
    },
    scrollingTo (toBlock, offset = 0) {
      // console.log('now',window.scrollY)
      // console.log('to',document.getElementById(toBlock).offsetTop - window.innerHeight * offset)

      const to =
        document.getElementById(toBlock).offsetTop - window.innerHeight * offset
      if (this.BrowserType().supporter === 'safari') {
        $('html,body').animate(
          {
            scrollTop: Math.ceil(to + 1)
          },
          500
        )
      } else {
        window.scrollTo({ top: Math.ceil(to + 1), behavior: 'smooth' })
      }
    },
    scrolling () {
      // console.log('window.scrollY',window.scrollY)
      // console.log(document.getElementById("article_block").offsetTop - window.innerHeight / 4)
      const cHeight = document.documentElement.clientHeight
      const sHeight = document.documentElement.scrollHeight
      const sTop = document.documentElement.scrollTop
      // 常駐左選單scrollspy
      const scrollspyItems = document
        .getElementById('scrollspy')
        .querySelectorAll('.list-group-item')
      if (sHeight === cHeight + sTop) {
        // 判斷滾到底部
        scrollspyItems.forEach(e => {
          e.classList.remove('actived')
        })
        scrollspyItems[5].classList.add('actived')
      } else if (
        window.scrollY <
        document.getElementById('service_block').offsetTop -
          window.innerHeight / 5
      ) {
        scrollspyItems.forEach(e => {
          e.classList.remove('actived')
        })
        scrollspyItems[0].classList.add('actived')
      } else if (
        window.scrollY <
        document.getElementById('step_block').offsetTop - window.innerHeight / 5
      ) {
        scrollspyItems.forEach(e => {
          e.classList.remove('actived')
        })
        scrollspyItems[1].classList.add('actived')
      } else if (
        window.scrollY <
        document.getElementById('FAQ_block').offsetTop - window.innerHeight / 5
      ) {
        scrollspyItems.forEach(e => {
          e.classList.remove('actived')
        })
        scrollspyItems[2].classList.add('actived')
      } else if (
        window.scrollY <
        document.getElementById('feedback_block').offsetTop -
          window.innerHeight / 5
      ) {
        scrollspyItems.forEach(e => {
          e.classList.remove('actived')
        })
        scrollspyItems[3].classList.add('actived')
      } else if (
        window.scrollY <
        document.getElementById('article_block').offsetTop -
          window.innerHeight / 4
      ) {
        scrollspyItems.forEach(e => {
          e.classList.remove('actived')
        })
        scrollspyItems[4].classList.add('actived')
      } else if (
        window.scrollY >
        document.getElementById('article_block').offsetTop -
          window.innerHeight / 4
      ) {
        scrollspyItems.forEach(e => {
          e.classList.remove('actived')
        })
        scrollspyItems[5].classList.add('actived')
      }

      // 滾動到該元素添加動態效果
      if (
        window.scrollY >
        document.getElementById('text_block').offsetTop - window.innerHeight
      ) {
        document.getElementById('scrollspy').style.opacity = 'unset'
        document.getElementById('text_block').classList.add('animate')
      } else {
        document.getElementById('scrollspy').style.opacity = '0'
      }
      if (
        window.scrollY >
        document.getElementById('service_block').offsetTop - window.innerHeight
      ) {
        document
          .getElementById('service_block')
          .querySelectorAll('.service_box')
          .forEach((e, k) => {
            e.classList.add('animate')
          })
      }
      if (
        window.scrollY >
        document.getElementById('step_block').offsetTop - window.innerHeight
      ) {
        document
          .getElementById('step_block')
          .querySelectorAll('.step_box')
          .forEach((e, k) => {
            e.classList.add('animate')
          })
      }
      if (
        window.scrollY >
        document.getElementById('FAQ_block').offsetTop - window.innerHeight
      ) {
        document.getElementById('FAQ_block').classList.add('animate')
      }
      if (
        window.scrollY >
        document.getElementById('feedback_block').offsetTop - window.innerHeight
      ) {
        document
          .getElementById('feedback_block')
          .querySelector('.bg-offerget')
          .classList.add('animate')
      }
      if (
        window.scrollY >
        document.getElementById('article_block').offsetTop - window.innerHeight
      ) {
        document.getElementById('article_block').classList.add('animate')
      }
    },
    openFullMode () {
      document.getElementById('openAnswerModal').click()
    },
    openJotform () {
      window.open(
        'https://www.jotform.com/form/213178149675465?Incrediville&fbclid=IwAR3b7vlEQPB447M9Oni4a1gWLYd5YQ15QtfMsNiIhVi-AzuNy49ssL7FTO0',
        '_blank'
      )
    },
    /**
     * browser 函式抄  https://stackoverflow.com/questions/62409889/how-to-detect-browser-for-chrome
     * @param {object} agent - 固定接收 window.navigator.userAgent.toLowerCase() 判斷瀏覽器
     */
    BrowserType () {
      // 权重：系统 + 系统版本 > 平台 > 内核 + 载体 + 内核版本 + 载体版本 > 外壳 + 外壳版本
      const ua = navigator.userAgent.toLowerCase()
      const testUa = regexp => regexp.test(ua)
      const testVs = regexp =>
        ua
          .match(regexp)
          .toString()
          .replace(/[^0-9|_.]/g, '')
          .replace(/_/g, '.')
      // 系统
      let system = 'unknow'
      if (testUa(/windows|win32|win64|wow32|wow64/g)) {
        system = 'windows' // windows系统
      } else if (testUa(/macintosh|macintel/g)) {
        system = 'macos' // macos系统
      } else if (testUa(/x11/g)) {
        system = 'linux' // linux系统
      } else if (testUa(/android|adr/g)) {
        system = 'android' // android系统
      } else if (testUa(/ios|iphone|ipad|ipod|iwatch/g)) {
        system = 'ios' // ios系统
      }
      // 系统版本
      let systemVs = 'unknow'
      if (system === 'windows') {
        if (testUa(/windows nt 5.0|windows 2000/g)) {
          systemVs = '2000'
        } else if (testUa(/windows nt 5.1|windows xp/g)) {
          systemVs = 'xp'
        } else if (testUa(/windows nt 5.2|windows 2003/g)) {
          systemVs = '2003'
        } else if (testUa(/windows nt 6.0|windows vista/g)) {
          systemVs = 'vista'
        } else if (testUa(/windows nt 6.1|windows 7/g)) {
          systemVs = '7'
        } else if (testUa(/windows nt 6.2|windows 8/g)) {
          systemVs = '8'
        } else if (testUa(/windows nt 6.3|windows 8.1/g)) {
          systemVs = '8.1'
        } else if (testUa(/windows nt 10.0|windows 10/g)) {
          systemVs = '10'
        }
      } else if (system === 'macos') {
        systemVs = testVs(/os x [\d._]+/g)
      } else if (system === 'android') {
        systemVs = testVs(/android [\d._]+/g)
      } else if (system === 'ios') {
        systemVs = testVs(/os [\d._]+/g)
      }
      // 平台
      let platform = 'unknow'
      if (system === 'windows' || system === 'macos' || system === 'linux') {
        platform = 'desktop' // 桌面端
      } else if (
        system === 'android' ||
        system === 'ios' ||
        testUa(/mobile/g)
      ) {
        platform = 'mobile' // 移动端
      }
      // 内核和载体
      let engine = 'unknow'
      let supporter = 'unknow'
      if (testUa(/applewebkit/g)) {
        engine = 'webkit' // webkit内核
        if (testUa(/edge/g)) {
          supporter = 'edge' // edge浏览器
        } else if (testUa(/opr/g)) {
          supporter = 'opera' // opera浏览器
        } else if (testUa(/chrome/g)) {
          supporter = 'chrome' // chrome浏览器
        } else if (testUa(/safari/g)) {
          supporter = 'safari' // safari浏览器
        }
      } else if (testUa(/gecko/g) && testUa(/firefox/g)) {
        engine = 'gecko' // gecko内核
        supporter = 'firefox' // firefox浏览器
      } else if (testUa(/presto/g)) {
        engine = 'presto' // presto内核
        supporter = 'opera' // opera浏览器
      } else if (testUa(/trident|compatible|msie/g)) {
        engine = 'trident' // trident内核
        supporter = 'iexplore' // iexplore浏览器
      }
      // 内核版本
      let engineVs = 'unknow'
      if (engine === 'webkit') {
        engineVs = testVs(/applewebkit\/[\d._]+/g)
      } else if (engine === 'gecko') {
        engineVs = testVs(/gecko\/[\d._]+/g)
      } else if (engine === 'presto') {
        engineVs = testVs(/presto\/[\d._]+/g)
      } else if (engine === 'trident') {
        engineVs = testVs(/trident\/[\d._]+/g)
      }
      // 载体版本
      let supporterVs = 'unknow'
      if (supporter === 'chrome') {
        supporterVs = testVs(/chrome\/[\d._]+/g)
      } else if (supporter === 'safari') {
        supporterVs = testVs(/version\/[\d._]+/g)
      } else if (supporter === 'firefox') {
        supporterVs = testVs(/firefox\/[\d._]+/g)
      } else if (supporter === 'opera') {
        supporterVs = testVs(/opr\/[\d._]+/g)
      } else if (supporter === 'iexplore') {
        supporterVs = testVs(/(msie [\d._]+)|(rv:[\d._]+)/g)
      } else if (supporter === 'edge') {
        supporterVs = testVs(/edge\/[\d._]+/g)
      }
      // 外壳和外壳版本
      let shell = 'none'
      let shellVs = 'unknow'
      if (testUa(/micromessenger/g)) {
        shell = 'wechat' // 微信浏览器
        shellVs = testVs(/micromessenger\/[\d._]+/g)
      } else if (testUa(/qqbrowser/g)) {
        shell = 'qq' // QQ浏览器
        shellVs = testVs(/qqbrowser\/[\d._]+/g)
      } else if (testUa(/ucbrowser/g)) {
        shell = 'uc' // UC浏览器
        shellVs = testVs(/ucbrowser\/[\d._]+/g)
      } else if (testUa(/qihu 360se/g)) {
        shell = '360' // 360浏览器(无版本)
      } else if (testUa(/2345explorer/g)) {
        shell = '2345' // 2345浏览器
        shellVs = testVs(/2345explorer\/[\d._]+/g)
      } else if (testUa(/metasr/g)) {
        shell = 'sougou' // 搜狗浏览器(无版本)
      } else if (testUa(/lbbrowser/g)) {
        shell = 'liebao' // 猎豹浏览器(无版本)
      } else if (testUa(/maxthon/g)) {
        shell = 'maxthon' // 遨游浏览器
        shellVs = testVs(/maxthon\/[\d._]+/g)
      }
      return Object.assign(
        {
          engine, // webkit gecko presto trident
          engineVs,
          platform, // desktop mobile
          supporter, // chrome safari firefox opera iexplore edge
          supporterVs,
          system, // windows macos linux android ios
          systemVs
        },
        shell === 'none'
          ? {}
          : {
              shell, // wechat qq uc 360 2345 sougou liebao maxthon
              shellVs
            }
      )
    },
    goToTop () {
      if (this.BrowserType().supporter === 'safari') {
        $('html,body').animate(
          {
            scrollTop: 0
          },
          500
        )
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }
}
</script>

<style></style>
