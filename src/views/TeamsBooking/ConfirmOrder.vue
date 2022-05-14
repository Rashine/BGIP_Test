<template>
  <Loading v-show="loading" />
  <!-- 確認訂單頁面 -->
  <div class="container">
    <div class="row justify-content-center">
      <div class="cardWidth">
        <div class="container p-5">
          <h1 class="pt-3">創立揪團</h1>
          <p class="p-3 grayColor"><b>揪團資訊</b></p>
          <!-- 細項 -->
          <div class="d-flex justify-content-between grayColor">
            <a>選擇店家</a
            ><a>
              <b>{{ bookingStore.StoreName }}</b></a
            >
          </div>
          <hr />
          <div class="d-flex justify-content-between grayColor">
            <a>訂位日期</a><a>{{ teamData.PlayDate }}</a>
          </div>
          <hr />
          <div class="d-flex justify-content-between grayColor">
            <a>定位時段</a
            ><a>{{ teamData.StartTime }}-{{ teamData.EndTime }}</a>
          </div>
          <hr />
          <div class="d-flex justify-content-between grayColor">
            <a>遊玩時數</a><a>{{ teamData.TimeCount }}小時</a>
          </div>
          <hr />
          <div class="d-flex justify-content-between grayColor">
            <a>目前人數</a
            ><a
              >{{ teamContact.Quantity }}人(最少{{
                teamData.TeamMembers.min
              }}人最多{{ teamData.TeamMembers.max }}人)</a
            >
          </div>
          <hr />

          <div class="d-flex justify-content-between grayColor">
            <a>遊玩遊戲</a>
            <a>
              <div class="input-group">
                <button
                  type="button"
                  class="select-output btn btn-outline-secondary"
                >
                  {{ info.gameName }}
                </button>
                <button
                  type="button"
                  class="
                    split-btn
                    btn btn-secondary
                    dropdown-toggle dropdown-toggle-split
                  "
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span class="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul class="dropdown-menu">
                  <li
                    class="dropdown-item"
                    v-for="gameName in gameNames"
                    :key="gameName"
                    @click="getGameName(gameName)"
                  >
                    {{ gameName }}
                  </li>
                </ul>
              </div>
            </a>
          </div>

          <hr />
          <div class="d-flex justify-content-between grayColor">
            <a>揪團名稱</a><a>{{ teamData.Name }}</a>
          </div>
          <hr />
          <div class="d-flex justify-content-between grayColor">
            <a>揪團標籤</a
            ><a>
              <template v-for="tag in teamData.Tags" :key="tag">
                <span class="badge bg-primary me-1">{{ tag }}</span>
              </template>
            </a>
          </div>
          <hr />
          <div class="d-flex justify-content-between grayColor">
            <a>截止日期</a><a>{{ teamData.DueDate }}</a>
          </div>
          <hr />
          <div class="row grayColor">
            <div class="col-md-4 col-12 text-start">揪團描述</div>
            <div class="col-md-8 col-12">
              {{ teamData.Note }}
            </div>
            <div class="col-7" v-if="teamData.Note.length == 0">無揪團描述</div>
          </div>
        </div>
        <!-- 細項end -->
        <!-- 上下部分隔線 -->
        <hr class="" style="margin: 20px 0px" />
        <!-- 上下部分隔線end -->
        <p class="p-3 grayColor"><b>揪團資訊</b></p>
        <!-- 細項 -->
        <div class="container px-5">
          <div class="d-flex justify-content-between grayColor">
            <a>套用優惠</a><a>{{ teamContact.CouponName }}</a>
            <a v-if="teamContact.CouponName.length == 0">未套用優惠。</a>
          </div>
          <hr />
          <div class="d-flex justify-content-between grayColor">
            <a>聯絡人姓名</a><a>{{ teamContact.Contact }}</a>
          </div>
          <hr />
          <div class="d-flex justify-content-between grayColor">
            <a>聯絡人電話</a><a>{{ teamContact.Phone }}</a>
          </div>
          <hr />
          <div class="d-flex justify-content-between grayColor">
            <a>Email</a><a>{{ teamContact.Email }}</a>
          </div>
          <!-- <hr />
          <div class="row grayColor">
            <div class="col-4 text-start">備註</div>
            <div class="col-8 text-end">老闆，狼人撒留一套，多謝</div>
          </div> -->
          <p class="text-end p-5">
            <b>
              預估金額&ensp;
              <span style="font-size: 48px; color: rgb(246, 18, 18)">
                <b>{{ total }}</b>
              </span>
              &ensp;元&ensp;整</b
            >
          </p>
        </div>
        <!-- 細項end -->
      </div>
    </div>
  </div>
  <!-- 按鈕 -->

  <div class="d-flex justify-content-center pb-5">
    <div class="mainBtn" style="width: 250px" @click="submitTeamOrder">
      確認開團
    </div>
  </div>

  <!-- 按鈕 end -->
</template>
<style  scoped>
@media screen and (max-width: 580px) {
  .cardWidth {
    width: 89%;
  }

  .mainBtn {
    position: relative;
    justify-content: center !important;
  }
}

.cardWidth {
  max-width: 700px;
  border: 4px solid rgb(246, 213, 94);
  background-color: rgb(255, 255, 255);
  margin-top: 8vh !important;
  margin-bottom: 8vh !important;
  /* padding: 6vh 6vw !important; */
  border-radius: 8px;
  box-shadow: 0px 4px 4px 2px rgb(200, 200, 200);
  overflow: hidden;
  /* 切邊 */
  flex: auto;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
<script>
import { db } from "@/firebase/config";
import { getDoc, doc, addDoc, collection } from "firebase/firestore";
export default {
  mounted() {
    this.getSingleStore();
  },
  data() {
    return {
      bookingStore: {},
      loading: null,
    };
  },
  computed: {
    bookingStoreID() {
      return this.$store.state.bookingStoreID;
    },
    teamData() {
      return this.$store.state.teamData;
    },
    teamContact() {
      return this.$store.state.teamContact;
    },
    total() {
      var result =
        this.teamData.Price * this.teamContact.Quantity -
        this.teamContact.CouponDiscount;
      return Math.floor(result);
    },
  },
  methods: {
    async getSingleStore() {
      const result = await getDoc(
        doc(db, "Store", String(this.bookingStoreID))
      );
      this.bookingStore = result.data();
    },
    submitTeamOrder() {
      this.loading = true;
      addDoc(collection(db, "Teams"), {
        BookingId: [
          {
            Count: this.teamContact.BookingId.Count,
            Id: this.teamContact.BookingId.Id,
            Comfirm: false,
          },
        ],
        Participant: this.teamContact.Participant,
        Content: this.teamData.Note,
        EndTime: this.teamData.EndTime,
        MaxPlayer: this.teamData.TeamMembers.max,
        MinPlayer: this.teamData.TeamMembers.min,
        PlayDate: this.teamData.PlayDate,
        Price: this.teamData.Price,
        Quantity: this.teamContact.Quantity,
        StartTime: this.teamData.StartTime,
        Status: this.teamData.Status,
        StoreId: this.teamData.StoreId,
        StoreLocation: {
          Address: this.teamData.StoreLocation.Address,
          lat: this.teamData.StoreLocation.lat,
          lng: this.teamData.StoreLocation.lng,
        },
        StoreName: this.teamData.StoreName,
        Tags: this.teamData.Tags,
        TeamName: this.teamData.Name,
        TimeCount: this.teamData.TimeCount,
        TimeLimit: this.teamData.DueDate,
        CouponName: this.teamContact.CouponName,
        CouponDiscount: this.teamContact.CouponDiscount,
        Contact: this.teamContact.Contact,
        Phone: this.teamContact.Phone,
        Email: this.teamContact.Email,
      })
        .then(() => {
          this.loading = false;
          this.$snackbar.add({
            type: "success",
            text: "訂位成功！",
          });
          this.$store.commit("clearOrderCheckData");
          setTimeout(() => {
            this.$router.push("/TeamSuccess");
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