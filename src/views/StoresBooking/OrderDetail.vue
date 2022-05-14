<template>
  <!-- step-block -->
  <Loading v-show="loading" />
  <div class="container">
    <div class="step-block d-flex justify-content-center text-center mt-5">
      <div class="step-start-wrap d-flex align-items-center">
        <div class="step-start"></div>
      </div>
      <div
        class="step-line-wrap d-flex align-items-center justify-content-center"
      >
        <div class="step-line"></div>
      </div>
      <div class="step-circle-wrap">
        <div
          class="step-circle"
          :style="step >= 1 ? 'background-color: rgb(246, 213, 94);' : ''"
        >
          <h4 class="step-number">1</h4>
        </div>
        <p>填選訂單</p>
      </div>
      <div
        class="step-line-wrap d-flex align-items-center justify-content-center"
      >
        <div
          class="step-line"
          :style="step < 2 ? 'border: dashed 1px #A6A6A6;' : ''"
        ></div>
      </div>
      <div class="step-circle-wrap">
        <div
          class="step-circle"
          :style="step >= 2 ? 'background-color: rgb(246, 213, 94);' : ''"
        >
          <h4 class="step-number">2</h4>
        </div>
        <p>確認預定</p>
      </div>
      <div
        class="step-line-wrap d-flex align-items-center justify-content-center"
      >
        <div
          class="step-line"
          :style="step < 3 ? 'border: dashed 1px #A6A6A6' : ''"
        ></div>
      </div>
      <div class="step-circle-wrap">
        <div
          class="step-pill"
          :style="step >= 3 ? 'background-color: rgb(246, 213, 94);' : ''"
        >
          <h4 class="step-number">完成</h4>
        </div>
      </div>
    </div>
  </div>
  <!-- step-block end -->
  <!-- desk -->
  <div class="container">
    <div class="row justify-content-center">
      <div class="wrapper flex-column align-items-center">
        <div class="content">
          <div class="d-flex">
            <div class="bd-highlight">
              <img
                :src="bookingStore.CoverPhoto"
                alt=""
                style="border-radius: 3px; width: 100%; height: 145px"
              />
            </div>
            <div class="p-2 bd-highlight">
              <a
                ><b style="font-size: 20px">{{ bookingStore.StoreName }}</b></a
              >
              <!-- <a><b style="font-size: 20px" class="">(兩行版型預留位)</b></a> -->

              <p style="margin: 0px 0px 0px">-</p>
              <div class="d-flex flex-row bd-highlight">
                <div>
                  <button type="button" class="btn btn-primary btn-sm mt-2">
                    {{ bookingStore.Rating }}</button
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
          <p style="padding: 0px" class="grayColor">
            {{ bookingStore.StoreLocation.Address }}&ensp;<a
              href=""
              data-bs-toggle="modal"
              data-bs-target="#exampleModal3"
              style="text-decoration: none"
              class="checkRoute"
              >查看路線</a
            >
          </p>
          <!-- modal button end -->
          <template v-for="tag in bookingStore.Tags" :key="tag">
            <span class="badge bg-primary me-1">{{ tag }}</span>
          </template>
          <!-- <span class="badge bg-primary me-1">簡餐</span>
          <span class="badge bg-primary me-1">劇本殺</span>
          <span class="badge bg-primary me-1">整天暢玩</span> -->
          <hr style="margin: 5px 10px" />
        </div>
        <div class="container pt-3">
          <!-- 細項 -->
          <div class="d-flex justify-content-between">
            <a>訂位時間</a><a>{{ orderCheckData.PlayDate }}</a>
          </div>
          <hr />
          <div class="d-flex justify-content-between">
            <a>訂位時段</a
            ><a
              >{{ orderCheckData.StartTime }} - {{ orderCheckData.EndTime }}</a
            >
          </div>
          <hr />
          <div class="d-flex justify-content-between">
            <a>訂位人數</a><a>{{ orderCheckData.Quantity }} 人</a>
          </div>
          <hr />
          <div class="d-flex justify-content-between">
            <a>遊玩時數</a><a>{{ orderCheckData.TimeCount }} 小時</a>
          </div>
          <hr />
          <div class="d-flex justify-content-between">
            <a>套用優惠</a><a>{{ orderCheckData.CouponName }} </a>
          </div>
          <hr />
          <div class="d-flex justify-content-between">
            <a>優惠折扣</a><a>{{ orderCheckData.CouponDiscount }}</a>
          </div>
          <hr />
          <div class="d-flex justify-content-between">
            <a>點數折扣</a><a>{{ orderCheckData.PointDiscount }}</a>
          </div>
          <hr />
          <div class="d-flex justify-content-between">
            <a>聯絡人姓名</a><a>{{ orderCheckData.Contact }}</a>
          </div>
          <hr />
          <div class="d-flex justify-content-between">
            <a>聯絡人電話</a><a>{{ orderCheckData.Phone }}</a>
          </div>
          <hr />
          <div class="d-flex justify-content-between">
            <a>Email</a><a>{{ orderCheckData.Email }}</a>
          </div>
          <hr />
          <div class="d-flex justify-content-between">
            <a>備註</a><a>{{ orderCheckData.Note }}</a>
          </div>
          <hr />
          <!-- 細項end -->
          <p class="text-end">
            金額&ensp;
            <span style="font-size: xx-large; color: rgb(246, 18, 18)">{{
              orderCheckData.Price * orderCheckData.Quantity
            }}</span
            >&ensp;元&ensp;整
          </p>
        </div>
      </div>
      <div class="d-flex justify-content-center pb-5">
        <router-link @click="submitOrder(orderCheckData)" to="">
          <div class="mainBtn submit" style="width: 200px">確認預定</div>
        </router-link>
      </div>
    </div>
  </div>
  <!-- desk end -->

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
</template>
<script>
import { db } from "@/firebase/config";
import { getDoc, doc, addDoc, collection } from "firebase/firestore";
export default {
  data() {
    return {
      step: 2,
      bookingStore: {},
      loading: null,
    };
  },
  created() {
    this.getSingleStore();
  },
  computed: {
    bookingStoreID() {
      return this.$store.state.bookingStoreID;
    },
    orderCheckData() {
      return this.$store.state.orderCheckData;
    },
  },
  methods: {
    async getSingleStore() {
      // console.log("get single store");
      // const docRef = doc(db, "Store", String(this.bookingStoreID));
      const result = await getDoc(
        doc(db, "Store", String(this.bookingStoreID))
      );
      // const result = await getDoc(docRef)
      // console.log(result.data())
      this.bookingStore = result.data();
      console.log(this.bookingStore);
    },
    submitOrder(orderCheckData) {
      this.loading = true;
      addDoc(collection(db, "BookingLists"), {
        BookingListId: orderCheckData.BookingListId,
        StoreId: orderCheckData.StoreId,
        BookingId: [{
          Count: orderCheckData.BookingId.Count,
          Id: orderCheckData.BookingId.Id,
        }],
        Participant: orderCheckData.Participant,
        PlayDate: orderCheckData.PlayDate,
        Quantity: orderCheckData.Quantity,
        StartTime: orderCheckData.StartTime,
        EndTime: orderCheckData.EndTime,
        TimeCount: orderCheckData.TimeCount,
        Status: "一般已訂位",
        Name: "一般訂位",
        Tags: [],
        Contact: orderCheckData.Contact,
        Phone: orderCheckData.Phone,
        Email: orderCheckData.Email,
        Note: orderCheckData.Note,
        CouponName: orderCheckData.CouponName,
        CouponDiscount: orderCheckData.CouponDiscount,
        PointDiscount: orderCheckData.PointDiscount,
        Price: orderCheckData.Price,
      })
        .then(() => {
          this.loading = false;
          this.$snackbar.add({
            type: "success",
            text: "訂位成功！",
          });
          this.$store.commit("clearOrderCheckData");
          setTimeout(() => {
            this.$router.push("/ordercompletion");
          }, 4500);
        })
        .catch((err) => {
          this.loading = false;
          this.$snackbar.add({
            type: "error",
            text: `${err.message}\n請重新輸入訂位資訊`,
          });
          setTimeout(() => {
            this.$router.push("/booking");
          }, 4000);
        });
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 580px) {
  .wrapper {
    width: 90vw;
  }
}

.wrapper {
  background-color: #fff;
  max-width: 700px;
  margin-top: 8vh;
  margin-bottom: 8vh;
  padding-top: 6vh 4vw;
  border-radius: 5px;
  border: 3px solid rgb(246, 213, 94);
  box-shadow: 0px 4px 4px 2px rgb(200, 200, 200);
}
.send {
  background-color: rgb(246, 213, 94);
  color: rgb(69, 144, 212);
  width: 300px;
  text-align: center;
  font-weight: bolder;
  font-size: 24px;
  line-height: 1.8;
  box-shadow: 0 4px 6px rgb(180, 180, 180);
}
.step-circle-wrap {
  /* margin: 0 auto; */
  display: flex;
  flex-direction: column;
  align-items: center;
  white-space: nowrap;
}
.step-start-wrap {
  height: 4rem;
}
.step-start {
  width: 2rem;
  height: 2rem;
  border-radius: 99rem;
  line-height: 2rem;
  background-color: rgb(246, 213, 94);
}
.step-line-wrap {
  height: 4rem;
  width: 6vw;
}
.step-line {
  height: 2px;
  width: 2vw;
  border: solid 1px rgb(246, 213, 94);
  transform: scale(3);
}
.step-circle {
  width: 4rem;
  height: 4rem;
  border-radius: 99rem;
  line-height: 4rem;
  color: #000;
  background-color: #a6a6a6;
  margin-bottom: 1rem;
}
.step-number {
  line-height: 4rem;
}
.step-pill {
  width: 7rem;
  height: 4rem;
  border-radius: 75rem;
  line-height: 4rem;
  color: #000;
  background-color: #a6a6a6;
  margin-bottom: 1rem;
}
.step-text {
  height: 4rem;
}
.send {
  background-color: var(--primary-color);
  letter-spacing: 3px;
  padding: 20px;
  color: var(--accent-color);
}
.badge {
  background-color: #4590d5 !important;
}
.btn {
  background-color: #4590d5 !important;
}
.checkRoute{
  color: #4590d5 !important;
}
</style>
