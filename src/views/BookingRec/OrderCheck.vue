<template>
  <!-- desk -->
  <div class="container">
    <div class="row justify-content-center">
      <div class="wrapper flex-column align-items-center">
        <div class="content">
          <div class="d-flex mt-3">
            <div class="pt-3 bd-highlight">
              <img
                src="https://picsum.photos/160/145"
                alt=""
                style="border-radius: 3px"
              />
            </div>
            <div class="p-2 bd-highlight">
              <a><b style="font-size: 20px">範例桌遊店-中山旗艦店</b></a>
              <br />
              <a><b style="font-size: 20px" class="">(兩行版型預留位)</b></a>

              <p style="margin: 0px 0px 0px">-</p>
              <div class="d-flex flex-row bd-highlight">
                <div>
                  <button type="button" class="btn btn-primary btn-sm mt-2">
                    9.2</button
                  >&ensp;
                </div>
                <div style="line-height: 20px">
                  <span class="">
                    <b style="color: #4590d5; font-size: 14px">非常棒!</b>
                    <br />
                    <b
                      style="
                        font-size: 13.8425px;
                        color: #767676;
                        margin: 0px 0px;
                      "
                      >50則評論</b
                    >
                  </span>
                </div>
              </div>
            </div>
          </div>
          <!-- modal button -->
          <p style="padding: 0px">
            台北市中山區XX巷XX弄44號33樓&ensp;<a
              href=""
              data-bs-toggle="modal"
              data-bs-target="#exampleModal3"
              style="text-decoration: none"
              >查看路線</a
            >
          </p>
          <!-- modal button end -->
          <span class="badge bg-primary me-1">簡餐</span>
          <span class="badge bg-primary me-1">劇本殺</span>
          <span class="badge bg-primary me-1">整天暢玩</span>
          <hr style="margin: 5px 10px" />
        </div>
        <!-- component -->

        <p
          v-if="status === 1"
          style="
            background-color: red;
            color: rgb(255, 255, 255);
            text-align: center;
            margin: 0px auto;
          "
        >
          已取消
        </p>
        <p
          v-else-if="status === 2"
          style="
            background-color: #68CAF4;
            color: rgb(255, 255, 255);
            text-align: center;
            margin: 0px 0px;
          "
        >
          已預定
        </p>
        <p
          v-else
          style="
            background-color: #A6FF87;
            color: rgb(255, 255, 255);
            text-align: center;
          "
        >
          已完成
        </p>
        <!-- component end -->
        <!-- 細項 -->
        <div class="d-flex justify-content-between mt-5">
          <a>揪團搜</a><a> <b>黃金單身漢</b></a>
        </div>
        <hr />
        <div class="d-flex justify-content-between">
          <a>訂位時間</a><a>4/13星期三</a>
        </div>
        <hr />
        <div class="d-flex justify-content-between">
          <a>定位時段</a><a>10:00~16:00</a>
        </div>
        <hr />
        <div class="d-flex justify-content-between">
          <a>遊玩桌遊</a><a>狼人殺</a>
        </div>
        <hr />
        <div class="d-flex justify-content-between">
          <a>定位人數</a><a>兩人</a>
        </div>
        <hr />
        <div class="d-flex justify-content-between">
          <a>遊玩時數</a><a>6小時</a>
        </div>
        <hr />
        <div class="d-flex justify-content-between">
          <a>套用優惠</a><a>免費點心</a>
        </div>
        <hr />
        <div class="d-flex justify-content-between">
          <a>優惠折扣</a><a>0</a>
        </div>
        <hr />
        <div class="d-flex justify-content-between">
          <a>點數折扣</a><a>100</a>
        </div>
        <hr />
        <div class="d-flex justify-content-between">
          <a>聯絡人姓名</a><a>王柯基</a>
        </div>
        <hr />
        <div class="d-flex justify-content-between">
          <a>聯絡人電話</a><a>0987 123 456</a>
        </div>
        <hr />
        <div class="d-flex justify-content-between">
          <a>Email</a><a>test123@gmail.com</a>
        </div>
        <hr />
        <div class="d-flex justify-content-between">
          <a>備註</a><a>阿瓦隆</a>
        </div>
        <hr />
        <!-- 細項end -->
        <p class="text-end">
          金額&ensp;
          <span style="font-size: xx-large; color: rgb(246, 18, 18)">680</span
          >&ensp;元&ensp;整
        </p>
      </div>
    </div>
  </div>
  <!-- desk end -->

  <!-- 紅色狀態 -->
  <div v-if="status === 1" class="btn-block d-flex justify-content-center">
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col col-lg-2 text-center"></div>
        <div class="col-md-2 text-center">
          <button
            class="send btn rounded-pill text-center mb-2"
            @click="handleSubmit"
            style="color: gray"
          >
            確認
          </button>
        </div>
        <div class="col col-lg-2 text-center">
          <button
            class="send btn rounded-pill text-center mb-5"
            @click="handleSubmit"
          >
            再次預定
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- 藍色狀態 -->
  <div v-else-if="status === 2" class="btn-block d-flex justify-content-center">
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col col-lg-2 text-center"></div>
        <div class="col-md-2 text-center">
          <button
            class="send btn rounded-pill text-center mb-2"
          >
            確認
          </button>
        </div>
        <div class="col col-lg-2 text-center">
          <button
            class="send btn rounded-pill text-center mb-5"
            style="color: red"
          >
            取消訂單
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- 綠色狀態 -->
  <div v-else class="btn-block d-flex justify-content-center">
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col col-lg-2 text-center">
          <button
            class="send btn rounded-pill text-center mb-2"
            @click="handleSubmit"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal4"
          >
            評價
          </button>
        </div>
        <div class="col-md-2 text-center">
          <button
            class="send btn rounded-pill text-center mb-2"
            @click="handleSubmit"
          >
            確認
          </button>
        </div>
        <div class="col col-lg-2 text-center">
          <button
            class="send btn rounded-pill text-center mb-5"
            @click="handleSubmit"
          >
            再次預定
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- 狀態end -->
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal3"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header" style="background-color: #f6d55e">
          <h5 class="modal-title" id="exampleModalLabel">logo</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <img src="https://picsum.photos/450/450" alt="" width="450px" />
        </div>
      </div>
    </div>
  </div>
  <!-- Modal end -->

  <!-- Modal3 -->
  <div
    class="modal fade"
    id="exampleModal4"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header" style="background-color: #f6d55e">
          <h5 class="modal-title" id="exampleModalLabel">
            <b>&emsp;中山旗艦店</b>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="container m-3">
            <p>日期&emsp;&emsp;&emsp;&emsp;2022/03/29(二)</p>
            <p>時間&emsp;&emsp;&emsp;&emsp;13:00~17:00</p>
            <p>
              狀態&emsp;&emsp;&emsp;&emsp;<span style="color: green"
                >已完成</span
              >
            </p>
            <p>價位&emsp;&emsp;&emsp;&emsp; <span style="font-size: 48px; color: rgb(246, 18, 18)">
              <b>680</b>
            </span> 元/人</p>
            <p>地址&emsp;&emsp;&emsp;&emsp;台北市中山區444巷333弄2樓</p>
            <hr style="margin: 10px 0px" />
            <p>評價&emsp;&emsp;&emsp;&emsp;星星</p>
            <p>評語</p>
            <textarea name="" id="" cols="40" rows="5"></textarea>
            <hr style="margin: 10px 0px" />
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-4">
                  <button type="button" class="btn btn-warning">
                    確認評價
                  </button>
                </div>
                <div class="col-4">
                  <button type="button" class="btn btn-secondary">關閉</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal3 end -->
</template>  
    <style scoped>
@media screen and (max-width: 580px) {
  .wrapper {
    width: 90vw;
  }
}
.wrapper {
  max-width: 700px;
  border: 4px solid rgb(246, 213, 94);
  background-color: rgb(255, 255, 255);
  margin-top: 8vh !important;
  margin-bottom: 8vh !important;
  padding: 6vh 6vw !important;
  border-radius: 12px;
  box-shadow: 0px 4px 4px 2px rgb(200, 200, 200);
  overflow: hidden; /* 切邊 */
  flex: auto;
  justify-content: center;
  align-items: center;
}

.send {
  background-color: rgb(246, 213, 94);
  color: rgb(69, 144, 212);
  width: 160px;
  text-align: center;
  font-weight: bolder;
  font-size: 24px;
  line-height: 1.8;
  box-shadow: 0 4px 6px rgb(180, 180, 180);
}
</style>
<script>
export default {
  data() {
    return {
      status: 2,
    };
  },
};
</script>
