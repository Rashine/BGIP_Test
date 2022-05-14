<template>
  <div class="container">
    <div class="wrapper">
      <ul class="nav nav-tabs nav-fill" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active w-450"
            id="Coupons-tab"
            data-bs-toggle="tab"
            data-bs-target="#Coupons"
            type="button"
            role="tab"
            aria-controls="Coupons"
            aria-selected="true"
          >
            <b>發送優惠券</b>
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link w-450"
            id="Record-tab"
            data-bs-toggle="tab"
            data-bs-target="#Record"
            type="button"
            role="tab"
            aria-controls="Record"
            aria-selected="false"
          >
            <b>歷史紀錄</b>
          </button>
        </li>
      </ul>
      <div class="tab-content m-0" id="myTabContent">
        <div
          class="tab-pane fade show active rounded-bottom"
          id="Coupons"
          role="tabpanel"
          aria-labelledby="Coupons-tab"
        >
          <SentCouponView />
        </div>
        <div
          class="tab-pane fade rounded-bottom"
          id="Record"
          role="tabpanel"
          aria-labelledby="Record-tab"
        >

<CouponDataListView />

        </div>
      </div>
    </div>
  </div>
</template>


<script>
import SentCouponView from "../../components/AdminBS/SentCouponView.vue";
import CouponDataListView from "../../components/AdminBS/CouponDataListView.vue";

export default {
  components: {
    SentCouponView,
    CouponDataListView,
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
.nav-item .active {
  background-color: #4590d4 !important;
  color: #ffffff !important;
}

.aa:focus {
  background: #fff2c5 !important;
}
</style>