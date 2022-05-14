<template>
  <div
    class="tab-pane fade rounded-bottom"
    id="coupon"
    role="tabpanel"
    aria-labelledby="coupon-tab"
  >
    <div class="container mb-5 d-flex justify-content-center">
      <div class="row m-4">
        <!-- 全站優惠 -->
        <h3 class="text title mt-4">全站優惠</h3>
        <div v-for="couponDetail in couponDetails" v-bind:key="couponDetail">
          <!-- 折價券 -->
          <!-- 帳戶沒有優惠券 -->
          <!-- <div v-if="userInfo.Coupons.length === 0">目前沒有優惠券。</div> -->
          <!-- 帳戶有優惠券 -->
          <!-- <div v-if="userInfo.Coupons.length !== 0">
                {{ userInfo.Coupons }}
              </div> -->

          <div
            class="col-md-6"
            v-if="couponDetail.data().Version == '全站折扣' || couponDetail.data().Version =='全站兌換'"
          >
            <div class="card my-3" style="max-width: 500px">
              <div class="row g-0">
                <div class="col-sm-5" style="background: #4590d4">
                  <h4 class="couponTitle m-5">
                    {{ couponDetail.data().CouponName }}
                  </h4>
                </div>
                <div class="col-sm-7">
                  <div class="card-body">
                    <h5 class="card-title">
                      {{ couponDetail.data().Discount }}
                    </h5>
                    <p class="card-text">
                      {{ couponDetail.data().Content }}
                      <br />
                      {{ couponDetail.data().Date[2] }}
                    </p>
                    <button class="astext">使用規則</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card my-3" style="max-width: 500px">
            <div class="row g-0">
              <div class="col-sm-5" style="background: #4590d4">
                <h4 class="couponTitle m-5">全站折扣</h4>
              </div>
              <div class="col-sm-7">
                <div class="card-body">
                  <h5 class="card-title">50元折價券</h5>
                  <p class="card-text" style="color: red">即將失效:剩下9小時</p>
                  <button class="astext">使用規則</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card my-3" style="max-width: 500px">
            <div class="row g-0">
              <div class="col-sm-5" style="background: #4590d4">
                <h4 class="couponTitle m-5">全站折扣</h4>
              </div>
              <div class="col-sm-7">
                <div class="card-body">
                  <h5 class="card-title">50元折價券</h5>
                  <p class="card-text" style="color: red">已過期</p>
                  <button class="astext">使用規則</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 店家優惠 -->
        <h3 class="text title mt-4">店家優惠</h3>
        <!-- 折價券 -->
        <div v-for="couponDetail in couponDetails" v-bind:key="couponDetail">
          <router-link to="StoreCoupon">
            <div
              class="col-md-6"
              v-if="couponDetail.data().Version == '店家折扣'|| couponDetail.data().Version == '店家兌換'"
            >
              <div class="card my-3" style="max-width: 500px">
                <div class="row g-0">
                  <div class="col-sm-5" style="background: #f5c000">
                    <h4 class="couponTitle m-5">
                      {{ couponDetail.data().CouponName }}
                    </h4>
                  </div>
                  <div class="col-sm-7">
                    <div class="card-body">
                      <h5 class="card-title">
                        {{ couponDetail.data().Discount }}
                      </h5>
                      <p class="card-text">
                        {{ couponDetail.data().Content }}
                        <br />
                        {{ couponDetail.data().Date[2] }}
                      </p>
                      <button class="astext">使用規則</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div>

        <div class="col-md-6">
          <div class="card my-3" style="max-width: 500px">
            <div class="row g-0">
              <div class="col-sm-5" style="background: #f5c000">
                <h4 class="couponTitle m-5">XX桌游店</h4>
              </div>
              <div class="col-sm-7">
                <div class="card-body">
                  <h5 class="card-title">10元折扣券</h5>
                  <p class="card-text" style="color: red">即將失效:剩下9小時</p>
                  <button class="astext">使用規則</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 馬上優惠 -->
        <h3 class="text title mt-4">馬上優惠</h3>
        <!-- 折價券 -->
        <div v-for="couponDetail in couponDetails" v-bind:key="couponDetail">
          <router-link to="InstantCoupon">
            <div
              class="col-md-6"
              v-if="couponDetail.data().Version == '全站馬上用'"
            >
              <div class="card my-3" style="max-width: 500px">
                <div class="row g-0">
                  <div class="col-sm-5" style="background: #ff6c6c">
                    <h4 class="couponTitle m-5">
                      {{ couponDetail.data().CouponName }}
                    </h4>
                  </div>
                  <div class="col-sm-7">
                    <div class="card-body">
                      <h5 class="card-title">
                        {{ couponDetail.data().Discount }}
                      </h5>
                      <p class="card-text">{{ couponDetail.data().Content }}</p>
                      <button class="astext">使用規則</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
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
p {
  color: #767676;
}

h1 {
  color: rgb(69, 144, 212);
}
h4 {
  color: #767676;
}
.couponTitle {
  color: #ffffff;
}
.astext {
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  color: #4590d4;
}
.card {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  border: 1px solid #dddddd;
  box-sizing: border-box;
}
.card-title {
  text-decoration: none;
  color: black;
}
#invalid {
  opacity: 0.3;
}
a {
  text-decoration: none;
  color: black;
}
</style>
