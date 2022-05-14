<template>
  <div class="container">
    <div class="wrapper">
      <div class="container">
        <div class="row justify-content-between align-items-center">
          <div
            class="col-12 col-lg-6 text-lg-start text-center inline p-lg-5 p-3"
          >
            <h1>王柯基</h1>
            <p>&emsp;UID:11110000</p>
          </div>
          <div class="col-12 col-lg-6 text-lg-end text-center p-lg-5 p-3">
            <button type="button" class="btn btn-dark">黑名單</button>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper">
      <ul class="nav nav-tabs nav-fill" id="myTab" role="tablist">
        <li class="nav-item info" role="presentation">
          <button
            class="nav-link active w-450"
            id="MemberInformation-tab"
            data-bs-toggle="tab"
            data-bs-target="#MemberInformation"
            type="button"
            role="tab"
            aria-controls="MemberInformation"
            aria-selected="true"
          >
            <b class="text h-100">會員資料</b>
          </button>
        </li>
        <li class="nav-item con" role="presentation">
          <button
            class="nav-link w-450"
            id="Coupons-tab"
            data-bs-toggle="tab"
            data-bs-target="#Coupons"
            type="button"
            role="tab"
            aria-controls="Coupons"
            aria-selected="false"
          >
            <b class="text">優惠券</b>
          </button>
        </li>
        <li class="nav-item poi" role="presentation">
          <button
            class="nav-link w-450"
            id="PointRecord-tab"
            data-bs-toggle="tab"
            data-bs-target="#PointRecord"
            type="button"
            role="tab"
            aria-controls="PointRecord"
            aria-selected="false"
          >
            <b class="text">點數記錄</b>
          </button>
        </li>
      </ul>
      <div class="tab-content m-0" id="myTabContent">
        <div
          class="tab-pane fade show active rounded-bottom"
          id="MemberInformation"
          role="tabpanel"
          aria-labelledby="MemberInformation-tab"
        >
          <MemberInformation />
        </div>
        <div
          class="tab-pane fade rounded-bottom"
          id="Coupons"
          role="tabpanel"
          aria-labelledby="Coupons-tab"
        >
          <CouponsRecord />
        </div>
        <div
          class="tab-pane fade rounded-bottom"
          id="PointRecord"
          role="tabpanel"
          aria-labelledby="PointRecord-tab"
        >
          <PointRecord />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import MemberInformation from "../../components/AdminBS/MemberInformation.vue";
import CouponsRecord from "../../components/AdminBS/CouponsRecord.vue";
import PointRecord from "../../components/AdminBS/PointRecord.vue";

export default {
  components: {
    MemberInformation,
    CouponsRecord,
    PointRecord,
  },
};
</script>
<style scoped>
.wrapper {
  padding: 0 !important;
}
/* 導覽頁籤 */
.nav-item {
  background-color: #f6d55e;
}
.nav-item button {
  color: #4590d4 !important;
}
.text {
  position: relative;
  top: 58px;
}
.info {
  background-image: url("../../assets/icon/個人資料.png");
  background-position: center center;
  background-size: auto;
  background-repeat: no-repeat;
}
.info .active {
  height: 100px;
  padding: 12px 20px 65px 20px;
  background-color: #4590d4 !important;
  color: #ffffff !important;
  background-image: url("../../assets/icon/個人資料hover.png");
  background-position: center center;
  background-size: auto;
  background-repeat: no-repeat;
}
.con {
  background-image: url("../../assets/icon/優惠券.png");
  background-position: center center;
  background-size: auto;
  background-repeat: no-repeat;
}
.con .active {
  padding: 12px 20px 65px 20px;
  background-color: #4590d4 !important;
  color: #ffffff !important;
  background-image: url("../../assets/icon/優惠券hover.png");
  background-position: center center;
  background-size: auto;
  background-repeat: no-repeat;
}
.poi {
  background-image: url("../../assets/icon/優惠券.png");
  background-position: center center;
  background-size: auto;
  background-repeat: no-repeat;
}
.poi .active {
  padding: 12px 20px 65px 20px;
  background-color: #4590d4 !important;
  color: #ffffff !important;
  background-image: url("../../assets/icon/優惠券hover.png");
  background-position: center center;
  background-size: auto;
  background-repeat: no-repeat;
}
.inline h1,
.inline p,
.inline h5,
.inline button {
  display: inline;
  vertical-align: middle;
}

@media (max-width: 480px) {
  .inline h1,
  .inline p {
    display: block;
    vertical-align: middle;
  }
}
</style>