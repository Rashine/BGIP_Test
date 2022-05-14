<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="wrapper">
        <div class="card" style="max-width: 500px">
          <div class="row">
            <div class="col-sm-5" style="background: #f5c000">
              <h4 class="couponTitle m-5">XX桌游店</h4>
            </div>
            <div class="col-sm-7">
              <div class="card-body mt-4">
                <h5 class="card-title">10元折價券</h5>
                <p class="card-text">有效日期:2022.04.23</p>
              </div>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="my-4">
            <b>優惠內容</b>
            <p>使用平台訂位XXX桌遊店，可享10元優惠</p>
          </div>
          <div class="my-4">
            <b>使用期限</b>
            <p>2022/02/22 - 2022/04/23</p>
          </div>
          <div class="my-4">
            <b>適用店家</b>
            <p>XXX 桌遊店</p>
          </div>
          <div class="my-4">
            <b>剩餘使用次數</b>
            <p>1次</p>
          </div>
          <div class="my-4">
            <b>查看詳情</b>
            <p>相關優惠單筆訂位只能使用一次該類型折價券。</p>
          </div>
          <div class="text-center">
            <button class="mainBtn m-3">馬上訂位</button>
          </div>
          <div class="text-center">
            <button class="mainBtn m-3">馬上開團</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { db } from "@/firebase/config";
import { getDocs, collection } from "firebase/firestore";
export default {
  data() {
    return {
      couponInfo: {},
      couponDetails: [],
    };
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    },
  },
  methods: {
    async getUsersCouponDetails() {
      // console.log("h:", this.$store.state.userInfo.Email);
      this.couponInfo = await getDocs(collection(db, "Coupons"));

      console.log(typeof this.couponInfo);
      this.userInfo.Coupons.forEach((item) => {
        this.couponInfo.forEach((doc) => {
          if (doc.data().UID.localeCompare(item.id) == 0) {
            this.couponDetails.push(doc);
          }
        });
      });
    },
  },

  mounted() {
    this.getUsersCouponDetails();
  },
};
</script>
<style scoped>
.wrapper {
  max-width: 700px;
  margin: 5vh;
}
.card {
  position: absolute;
  z-index: 2;
}
.content {
  margin-top: 20vh;
}
p {
  color: #767676;
  font-size: 1rem;
}
</style>
