<template>
          <!-- <MemberInformation /> -->
          <div class="container">
            <!-- 資料 -->
            <div
              style="max-width: 825px; height: 275px; margin: 0px auto"
              class="py-4 pt-5"
            >
              <div class="row">
                <div class="col-6">生日</div>
                <div class="col-6 text-end">1990/01/01</div>
              </div>
              <hr />
              <div class="row">
                <div class="col-6">信箱</div>
                <div class="col-6 text-end">
                  123@123 <span style="color: blue">已綁定</span>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-6">電話</div>
                <div class="col-6 text-end">012394875</div>
              </div>
              <hr />
              <div class="row pb-5">
                <div class="col-6">加入日期</div>
                <div class="col-6 text-end">2022/02/22</div>
              </div>
            </div>
            <!-- 資料end -->
            <hr class="mx-md-5 mt-5" />
              <!-- 違規紀錄 -->
  <h3 class="pt-5 text-center"><b> 違規紀錄 </b></h3>
  <div style="max-width: 825px; height: auto; margin: 0px auto" class="py-5">
    <div class="row m-1" style="box-shadow: -5px 5px 10px rgba(0, 0, 0, 0.2)">
      <div
        class="col-12 col-lg-4 text-lg-start text-center pt-3 pb-1 grayColor"
      >
        取消訂位違規紀錄xxxxxxx
      </div>
      <div class="col-12 col-lg-4 text-center pt-3 pb-1 grayColor">
        2022/04/22
      </div>
      <div class="col-12 col-lg-4 text-lg-end text-center pt-2 pb-1">
        <button
          type="button"
          class="btn btn-danger"
          data-bs-toggle="modal"
          data-bs-target="#enter"
        >
          刪除
        </button>
      </div>
    </div>
    <div class="row m-1" style="box-shadow: -5px 5px 10px rgba(0, 0, 0, 0.2)">
      <div
        class="col-12 col-lg-4 text-lg-start text-center pt-3 pb-1 grayColor"
      >
        取消訂位違規紀錄xxxxxxx
      </div>
      <div class="col-12 col-lg-4 text-center pt-3 pb-1 grayColor">
        2022/04/22
      </div>
      <div class="col-12 col-lg-4 text-lg-end text-center pt-2 pb-1">
        <button
          type="button"
          class="btn btn-danger"
          data-bs-toggle="modal"
          data-bs-target="#enter"
        >
          刪除
        </button>
      </div>
    </div>
  </div>
  <!-- 違規紀錄modal enter -->
  <div
    class="modal fade"
    id="enter"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-body">
          <h1 class="text-center text-dark p-4">
            <b>即將取消該違規紀錄</b>
          </h1>
          <p class="grayColor text-center pb-4">
            該消費者的違規紀錄即將刪除，請做最後確認
          </p>
          <div class="row pb-3">
            <div class="col-6 text-center">
              <button
                type="button"
                class="btnBtn text-danger"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                確定刪除
              </button>
            </div>
            <div class="col-6 text-center">
              <button
                type="button"
                class="btnBtn"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                取消
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal enter end -->
  <!-- 違規紀錄end -->
            <hr class="mx-md-5 m-0" />
            <!-- 黑名單 -->
            <h3 class="pt-5 text-center"><b> 黑名單 </b></h3>
            <div
              style="max-width: 825px; height: auto; margin: 0px auto"
              class="py-5"
            >
              <div
                class="row m-1 text-white"
                style="box-shadow: -5px 5px 10px rgba(0, 0, 0, 0.2);background-color: gray;"
              >
                <div
                  class="
                    col-12 col-lg-4
                    text-lg-start text-center
                    pt-2
                    pb-1
                  "
                >
                  懲罰時間
                </div>
                <div class="col-12 col-lg-4 text-center pt-2 pb-1">
                  2022/04/22~2022/04/22
                </div>
                <div class="col-12 col-lg-4 text-lg-end text-center pt-2 pb-1">
                  <button
                    type="button"
                    class="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#enter2"
                  >
                    解除黑名單
                  </button>
                </div>
              </div>
            </div>
            <!-- modal black enter -->
            <div
              class="modal fade"
              id="enter2"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                  <div class="modal-body">
                    <h1 class="text-center text-dark p-4">
                      <b>即將取消黑名單</b>
                    </h1>
                    <p class="grayColor text-center pb-4">
                      該消費者的黑名單即將刪除，包含違規紀錄都將一併清除，
                    </p>
                    <p class="grayColor text-center pb-4">該消費者將回歸一般會員身分，請做最後確認
                    </p>
                    <div class="row pb-3">
                      <div class="col-6 text-center">
                        <button
                          type="button"
                          class="btnBtn text-danger"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          確定刪除
                        </button>
                      </div>
                      <div class="col-6 text-center">
                        <button
                          type="button"
                          class="btnBtn"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          取消
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Modal black end -->
            <!-- 黑名單end -->
          </div>
          <!-- <MemberInformation /> -->
</template>
<script>
// import ViolateList from "../ViolateList.vue";

// export default {
//   components: {
//     ViolateList,
//   },
// };
</script>
<style scoped>
.btnBtn {
  font-size: 2rem;
  font-weight: bolder;
  background-color: #f6d55e;
  color: #4590d4;
  width: 250px;
  text-align: center;
  line-height: 1.8;
  box-shadow: 0 4px 6px rgb(180, 180, 180);
  border-radius: 100rem;
  border: none;
  text-decoration: none;
}
@media (max-width: 994px) {
  .btnBtn {
    width: 150px;
  }
}
</style>