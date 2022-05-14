<template>
  <div class="container">
    <!-- step-block -->
    <div class="step-block d-flex justify-content-center text-center my-5">
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
        <p>預定成功</p>
      </div>
    </div>

    <!-- main-block -->
    <div class="main row justify-content-center gap-5">
      <!-- input-block -->
      <div class="input-form col-xl-4 col-lg-5 col-md-8 col-sm-10 col-xs-10">
        <!-- RWD-info-block -->
        <div class="md-display">
          <div class="wrapper d-flex flex-column mb-5">
            <div class="d-flex">
              <div class="img-block rounded me-3">
                <img :src="bookingStore.CoverPhoto" alt="" />
              </div>
              <div class="d-flex flex-column justify-content-between">
                <div>
                  <h2>{{ bookingStore.StoreName }}</h2>
                </div>
                <StarRating
                  v-model:rating="bookingStore.Rating"
                  read-only
                  :show-rating="showRating"
                />
                <div class="d-flex">
                  <div
                    class="
                      rating-block
                      d-flex
                      align-items-center
                      justify-content-center
                      me-2
                    "
                  >
                    <!-- <h4>9.2</h4> -->
                    <h4>{{ bookingStore.Rating }}</h4>
                  </div>
                  <div>
                    <div><h5>非常棒！</h5></div>
                    <div><p class="xs-font">50則評論</p></div>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="mt-3">地址</div> -->
            <div class="mt-3">{{ bookingStore.StoreLocation.Address }}</div>

            <hr />
            <div class="d-flex">
              <div class="tag me-2" v-for="tag in bookingStore.Tags" :key="tag">
                <!-- <div class="tag me-2" v-for="tag in tags" :key="tag"> -->
                <p>{{ tag }}</p>
              </div>
            </div>
            <hr />
            <div class="d-flex justify-content-between align-items-center">
              <div>營業時段</div>
              <div class="d-flex flex-column">
                <template
                  v-for="(day, index) in bookingStore.WeekPlan"
                  :key="index"
                >
                  <div class="d-flex justify-content-between" v-bind="day">
                    <div>星期 {{ transferIndex(index) }}</div>
                    <div>時間 {{ day.Open }} - {{ day.Close }}</div>
                  </div>
                </template>
                <!-- <div class="d-flex justify-content-between">
                  <div>星期</div>
                  <div>時間</div>
                </div>
                <div class="d-flex justify-content-between">
                  <div>星期</div>
                  <div>時間</div>
                </div>
                <div class="d-flex justify-content-between">
                  <div>星期</div>
                  <div>時間</div>
                </div> -->
              </div>
            </div>
            <hr />
            <div class="d-flex justify-content-between align-items-center">
              <div>收費方式</div>
              <div>
                <!-- <div class="d-flex justify-content-between">
                  <div>星期</div>
                  <div>價格</div>
                </div>
                <div class="d-flex justify-content-between">
                  <div>星期</div>
                  <div>價格</div>
                </div> -->
                <template
                  v-for="(day, index) in bookingStore.WeekPlan"
                  :key="index"
                >
                  <div class="d-flex justify-content-between">
                    <div>星期{{ transferIndex(index) }}</div>
                    <div>{{ day.Fee }}元/人/{{ day.BasicHour }}小時</div>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
        <!-- form-block -->
        <div class="wrapper">
          <div class="d-flex justify-content-center">
            <DatePicker
              is-expanded
              v-model="date"
              :min-date="new Date()"
              @click="convertDayValue"
            />
            <!-- 以下為公休日設定 -->
            <!-- :disabled-dates="{ weekdays: [1, 2] }" -->
          </div>
          <div class="d-flex justify-content-between">
            <p>訂位日期</p>
            <p>{{ getDate() }}</p>
          </div>
          <hr />
          <div class="d-flex justify-content-between align-items-center mb-3">
            <p>訂位人數</p>

            <div
              class="
                attendance-group
                d-flex
                justify-content-center
                align-items-center
              "
            >
              <div class="btn-group btn-group-sm me-1">
                <button
                  class="minus-btn btn btn-outline-secondary"
                  type="button"
                  @click="
                    infos[1].value >= 2 ? infos[1].value-- : infos[1].value == 1
                  "
                >
                  －
                </button>
                <input
                  type="text"
                  class="form-control text-center"
                  oninput="value=value.replace(/[^\d]/g,'')"
                  v-model="infos[1].value"
                />
                <button
                  class="plus-btn btn btn-outline-secondary"
                  type="button"
                  @click="infos[1].value++"
                >
                  ＋
                </button>
              </div>
              <p>人</p>
            </div>
          </div>
          <div class="d-flex justify-content-between align-items-center mb-3">
            <p>開始時段</p>
            <div class="beginningtime-block">
              <div class="input-group input-group-sm">
                <div
                  type="input"
                  class="time-select-output btn btn-outline-secondary"
                >
                  {{ BeginningTime }}
                </div>
                <button
                  type="button"
                  class="
                    split-btn
                    btn btn-outline-secondary
                    dropdown-toggle dropdown-toggle-split
                  "
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span class="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul class="time-dropdown-menu dropdown-menu dropdown-menu-end">
                  <li
                    class="dropdown-item"
                    v-for="dropdownValue in dropdownValues"
                    :key="dropdownValue"
                    @click="getBeginningTime(dropdownValue)"
                  >
                    {{ dropdownValue }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <p>結束時段</p>
            <div class="enddingtime-block">
              <div class="input-group input-group-sm">
                <div
                  type="input"
                  class="time-select-output btn btn-outline-secondary"
                >
                  {{ EnddingTime }}
                </div>
                <button
                  type="button"
                  class="
                    split-btn
                    btn btn-outline-secondary
                    dropdown-toggle dropdown-toggle-split
                  "
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span class="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul class="time-dropdown-menu dropdown-menu dropdown-menu-end">
                  <li
                    class="dropdown-item"
                    v-for="dropdownValue in dropdownValues"
                    :key="dropdownValue"
                    @click="getEnddingTime(dropdownValue)"
                  >
                    {{ dropdownValue }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <div class="d-flex justify-content-between align-items-center">
            <p>套用優惠</p>
            <div class="coupon-block">
              <div class="input-group input-group-sm">
                <button
                  type="button"
                  class="coupon-select-output btn btn-outline-secondary"
                >
                  {{ Coupon }}
                </button>
                <button
                  type="button"
                  class="
                    split-btn
                    btn btn-outline-secondary
                    dropdown-toggle dropdown-toggle-split
                  "
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span class="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul
                  class="coupon-dropdown-menu dropdown-menu dropdown-menu-end"
                >
                  <li
                    class="dropdown-item"
                    v-for="coupon in useCoupon"
                    :key="coupon"
                    @click="getCoupon(coupon)"
                  >
                    {{ coupon.key }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <div class="d-flex justify-content-between align-items-center">
            <p>點數折扣</p>
            <div class="point-block d-flex align-items-center">
              <div class="point-input input-group input-group-sm me-1">
                <input
                  type="text"
                  class="form-control"
                  v-model.trim="infos[6].value"
                />
              </div>

              <p class="me-2">點</p>
              <span>(剩餘</span>
              <span>{{ remainPoints }}</span>
              <span>點)</span>
            </div>
          </div>
          <hr />
          <div class="d-flex justify-content-between align-items-center">
            <p>聯絡人姓名</p>
            <div class="d-flex align-items-center">
              <div class="text-input input-group input-group-sm">
                <input
                  type="text"
                  class="form-control"
                  v-model.trim="infos[7].value"
                />
              </div>
            </div>
          </div>
          <hr />
          <div class="d-flex justify-content-between align-items-center">
            <p>聯絡人電話</p>
            <div class="d-flex align-items-center">
              <div class="text-input input-group input-group-sm">
                <input
                  type="text"
                  class="form-control"
                  v-model.trim="infos[8].value"
                />
              </div>
            </div>
          </div>
          <hr />
          <div class="d-flex justify-content-between align-items-center">
            <p>Email</p>
            <div>
              <div class="text-input input-group input-group-sm">
                <input
                  type="text"
                  class="form-control"
                  v-model.trim="infos[9].value"
                />
              </div>
            </div>
          </div>
          <hr />
          <div class="d-flex justify-content-between align-items-center mb-3">
            <p>備註</p>
            <p>注意事項</p>
          </div>
          <textarea
            name=""
            id=""
            class="col-12"
            rows="10"
            v-model.trim="infos[10].value"
          ></textarea>
        </div>
      </div>

      <!-- output-block -->
      <div class="output-form col-lg-5 col-md-10 col-sm-10 d-flex flex-column">
        <!-- info-block -->
        <div class="wrapper d-flex flex-column mb-4">
          <div class="d-flex">
            <div class="img-block rounded me-3">
              <img :src="bookingStore.CoverPhoto" alt="" />
            </div>
            <div class="d-flex flex-column justify-content-between">
              <div>
                <h2>{{ bookingStore.StoreName }}</h2>
                <!-- <h2>店名</h2> -->
              </div>
              <StarRating
                v-model:rating="bookingStore.Rating"
                read-only
                :show-rating="showRating"
              />
              <div class="d-flex">
                <div
                  class="
                    rating-block
                    d-flex
                    align-items-center
                    justify-content-center
                    me-2
                  "
                >
                  <!-- <h4>4.5</h4> -->
                  <h4>{{ bookingStore.Rating }}</h4>
                </div>
                <div>
                  <div><h5>非常棒！</h5></div>
                  <div><p class="xs-font">50則評論</p></div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-3">{{ bookingStore.StoreLocation.Address }}</div>
          <!-- <div class="mt-3">地址</div> -->

          <hr />
          <div class="d-flex">
            <div class="tag me-2" v-for="tag in bookingStore.Tags" :key="tag">
              <!-- <div class="tag me-2" v-for="tag in tags" :key="tag"> -->
              <p>{{ tag }}</p>
            </div>
          </div>
          <hr />
          <div class="d-flex justify-content-between align-items-center">
            <div>營業時段</div>
            <div class="d-flex flex-column">
              <template
                v-for="(day, index) in bookingStore.WeekPlan"
                :key="index"
              >
                <div class="d-flex justify-content-between" v-bind="day">
                  <div>星期 {{ transferIndex(index) }}</div>
                  <div>時間 {{ day.Open }} - {{ day.Close }}</div>
                </div>
              </template>
              <!-- <div class="d-flex justify-content-between">
                <div>星期</div>
                <div>時間</div>
              </div>
              <div class="d-flex justify-content-between">
                <div>星期</div>
                <div>時間</div>
              </div>
              <div class="d-flex justify-content-between">
                <div>星期</div>
                <div>時間</div>
              </div> -->
            </div>
          </div>
          <hr />
          <div class="d-flex justify-content-between align-items-center">
            <div>收費方式</div>
            <div class="d-flex flex-column">
              <template
                v-for="(day, index) in bookingStore.WeekPlan"
                :key="index"
              >
                <div class="d-flex justify-content-between">
                  <div>星期{{ transferIndex(index) }}</div>
                  <div>{{ day.Fee }}元/人/{{ day.BasicHour }}小時</div>
                </div>
              </template>
              <!-- <div class="d-flex justify-content-between">
                <div>星期</div>
                <div>價格</div>
              </div>
              <div class="d-flex justify-content-between">
                <div>星期</div>
                <div>價格</div>
              </div> -->
            </div>
          </div>
        </div>

        <!-- comfirmation-block -->
        <div class="comfirmation-wrapper text-center mb-5">
          <div class="content">
            <div
              v-for="info in infos.slice(0, -1)"
              :key="info"
              class="d-flex justify-content-between align-items-center mb-3"
            >
              <p>{{ info.key }}</p>
              <p>{{ info.value }}</p>
            </div>
            <div class="note-block">
              <p>{{ infos[10].value }}</p>
            </div>
            <hr />
            <div
              class="
                count-block
                d-flex
                justify-content-between
                align-items-center
              "
            >
              <div class="form-check d-flex">
                <input
                  class="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked
                />
                <label class="form-check-label" for="flexCheckChecked"
                  >我同意 <router-link to="/terms">使用條約</router-link></label
                >
              </div>
              <div class="d-flex align-items-center gap-3">
                <p>總計</p>
                <h2 class="text-danger">{{ getCount }}</h2>
                <p>元</p>
              </div>
            </div>
          </div>
          <router-link @click="submitOrder" to="" style="text-decoration: none"
            ><h5 class="send">確認預定</h5></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
import { DatePicker } from "v-calendar";
// import 'v-calendar/dist/style.css';
import { db } from "@/firebase/config";
import {
  getDoc,
  doc,
  //addDoc, collection
} from "firebase/firestore";

export default {
  async created() {
    await this.getSingleStore();
    await this.setBookingContact();
  },
  components: {
    DatePicker,
    StarRating,
  },
  data() {
    return {
      bookingStore: {},
      showRating: false,
      step: 1,
      date: "",
      dayTimeValue: {},
      userPoints: 0,
      bookingListId: "",
      userId: "",

      infos: [
        { key: "訂位日期", value: "" },
        { key: "訂位人數", value: "1" },
        { key: "訂位時段", value: "" },
        { key: "遊玩時數", value: "" },
        { key: "套用優惠", value: "" },
        { key: "優惠折扣", value: "" },
        { key: "點數折扣", value: 0 },
        { key: "聯絡人姓名", value: "" },
        { key: "聯絡人電話", value: "" },
        { key: "Email", value: "" },
        { key: "", value: "" },
      ],

      BeginningTime: "選擇時段",
      EnddingTime: "選擇時段",
      dropdownValues: [
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "13:00",
        "13:30",
        "14:00",
        "14:30",
        "15:00",
        "15:30",
      ],

      Coupon: "選擇優惠券",
      useCoupon: [
        { key: "免費點心", value: 0 },
        { key: "折價30元", value: 30 },
        { key: "折價50元", value: 50 },
      ],
    };
  },
  computed: {
    bookingStoreID() {
      return this.$store.state.bookingStoreID;
    },
    userUID() {
      return this.$store.state.user.uid;
    },
    remainPoints() {
      return this.userPoints - this.infos[6].value;
    },
    getCount: function () {
      let count = 0;
      let infos = this.infos;
      // let charge = this.charge;
      let plan = this.bookingStore.WeekPlan;
      let attendance = Number(infos[1].value);
      if (this.date != "" && infos[3].value != "" && attendance > 0) {
        let day = this.date.getDay();
        let actualHours = Math.ceil(Number(infos[3].value));
        // let baseHours = charge[day].hours;
        let baseHours = plan[day].BasicHour;
        // let baseCharge = charge[day].price;
        let baseCharge = plan[day].Fee;
        if (actualHours < baseHours) {
          actualHours = baseHours;
        }
        let total =
          Math.ceil(actualHours / baseHours) * baseCharge * attendance;
        let discount = infos[5].value;
        let point = infos[6].value;
        count = total - discount - point;
      }
      return count;
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

    async setBookingContact() {
      const getData = await getDoc(doc(db, "Account", this.userUID));
      const result = getData.data();
      this.infos[9].value = result.Email;
      this.infos[8].value = result.Phone;
      this.userPoints = result.Points;
      this.userId = result.UserId;
    },

    transferIndex(index) {
      let Chinese = ["日", "一", "二", "三", "四", "五", "六"];
      let ChineseDay = Chinese[index];
      return ChineseDay;
    },

    convertDayValue() {
      let dateBase = this.date;
      var dayIndex = dateBase.getDay();
      var open = this.bookingStore.WeekPlan[dayIndex].Open;
      var close = this.bookingStore.WeekPlan[dayIndex].Close;
      var openSplit = open.split(":");
      var closeSpit = close.split(":");

      var openH = Number(openSplit[0]);
      var openM = Number(openSplit[1] / 60);

      var closeH = Number(closeSpit[0]);
      var closeM = Number(closeSpit[1] / 60);

      this.dayTimeValue = {
        openTime: openH + openM,
        closeTime: closeH + closeM,
      };

      // console.log(this.dayTimeValue);
      this.getTimeArray();
    },

    getTimeArray() {
      const generateHoursInterval = (
        startHourInMinute,
        endHourInMinute,
        interval
      ) => {
        const times = [];

        for (let i = 0; startHourInMinute < 24 * 60; i++) {
          if (startHourInMinute > endHourInMinute) break;

          var hh = Math.floor(startHourInMinute / 60); // getting hours of day in 0-24 format

          var mm = startHourInMinute % 60; // getting minutes of the hour in 0-55 format

          times[i] = ("0" + (hh % 24)).slice(-2) + ":" + ("0" + mm).slice(-2);

          startHourInMinute = startHourInMinute + interval;
        }

        return times;
      };

      const interval = 30; //minutes interval

      const startDate = 60 * this.dayTimeValue.openTime; // start time in minutes

      const endDate = 60 * this.dayTimeValue.closeTime; // end time in minutes

      const foo = generateHoursInterval(startDate, endDate, interval);

      this.dropdownValues = foo;
    },

    getBeginningTime: function (dropdownValue) {
      let BeginningArr = dropdownValue.split(":");
      let EnddingArr = this.EnddingTime.split(":");
      let BeginningNumber =
        (Number(BeginningArr[0]) * 60 + Number(BeginningArr[1])) / 60;
      let EnddingNumber =
        (Number(EnddingArr[0]) * 60 + Number(EnddingArr[1])) / 60;
      if (EnddingNumber > BeginningNumber || isNaN(EnddingNumber)) {
        this.BeginningTime = dropdownValue;
        this.infos[2].value = this.BeginningTime + "-" + this.EnddingTime;
        this.infos[3].value = EnddingNumber - BeginningNumber;
      }
    },
    getEnddingTime: function (dropdownValue) {
      let BeginningArr = this.BeginningTime.split(":");
      let EnddingArr = dropdownValue.split(":");
      let BeginningNumber =
        (Number(BeginningArr[0]) * 60 + Number(BeginningArr[1])) / 60;
      let EnddingNumber =
        (Number(EnddingArr[0]) * 60 + Number(EnddingArr[1])) / 60;
      if (EnddingNumber > BeginningNumber || isNaN(BeginningNumber)) {
        this.EnddingTime = dropdownValue;
        this.infos[2].value = this.BeginningTime + "-" + this.EnddingTime;
        this.infos[3].value = EnddingNumber - BeginningNumber;
      }
    },
    getCoupon: function (coupon) {
      this.Coupon = coupon.key;
      this.infos[4].value = this.Coupon;
      this.infos[5].value = coupon.value;
    },
    getDate: function () {
      let dateBase = this.date;
      let getDate = "";
      let Chinese = ["日", "一", "二", "三", "四", "五", "六"];

      if (this.date != "") {
        let day = dateBase.getDay();
        let getChineseDay = Chinese[day];
        let year = dateBase.getFullYear();
        let month = dateBase.getMonth() + 1;
        let date = dateBase.getDate();

        getDate =
          year + "年" + month + "月" + date + "日 " + " 星期" + getChineseDay;
      }
      this.infos[0].value = getDate;
      return getDate;
    },
    getRandom(x) {
      return Math.floor(Math.random() * x) + 1;
    },
    getRandomID(ID) {
      var n = 0;
      for (var i = 0; i < 4; i++) {
        n = this.getRandom(9);
        ID += String(n);
      }
      return ID;
    },
    submitOrder() {
      let dateBase = this.date;
      // var dayIndex = dateBase.getDay();

      if (!this.date) {
        this.$snackbar.add({
          type: "error",
          text: "尚未選擇訂位日期",
        });
        return;
      } else if (isNaN(this.infos[3].value) || this.infos[3].value == "") {
        this.$snackbar.add({
          type: "error",
          text: "請務必選擇開始及結束時間",
        });
        return;
      } else if (
        this.infos[3].value <
        this.bookingStore.WeekPlan[dateBase.getDay()].BasicHour
      ) {
        this.$snackbar.add({
          type: "warning",
          text: `遊玩時數未達基礎時數，金額仍將以基礎消費計算`,
        });
      } else if (this.infos[7].value == "") {
        this.$snackbar.add({
          type: "error",
          text: "請填寫訂位人姓名",
        });
        return;
      } else {
        const string = this.infos[2].value;
        const stringResult = string.split("-");
        const start = stringResult[0];
        const end = stringResult[1];

        var orderDetail = {
          BookingListId: this.getRandomID("7000"),
          StoreId: this.bookingStore.StoreID,
          BookingId: {
            Count: this.infos[1].value,
            Id: this.userId,
            Comfirm:true,
          },
          Participant: [String(this.userId)],
          PlayDate: this.infos[0].value,
          Quantity: this.infos[1].value,
          StartTime: start,
          EndTime: end,
          TimeCount: this.infos[3].value,
          Status: "一般已訂位",
          Name: "一般訂位",
          Tags: [],
          Contact: this.infos[7].value,
          Phone: this.infos[8].value,
          Email: this.infos[9].value,
          Note: this.infos[10].value,
          CouponName: this.infos[4].value,
          CouponDiscount: this.infos[5].value,
          PointDiscount: this.infos[6].value,
          Price: this.getCount / this.infos[1].value,
        };
        this.$store.commit("setOrderCheckData", orderDetail);
        this.$router.push("/orderdetail");
      }
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 991px) {
  .md-display.md-display {
    display: block;
  }
  .lg-display {
    display: none;
  }
}
* {
  --step-gray: rgb(166, 166, 166);
  --input-gray: rgb(118, 118, 118);
  --input-btn-gray-hover: rgba(118, 118, 118, 0.7);
}

/* font */
p,
h4,
h5,
h6 {
  margin-bottom: 0px;
}
.md-display {
  display: none;
}

/* calendar */
.vc-container {
  border: 0px;
}

/* step-block */
.step-start-wrap {
  height: 4rem;
}
.step-start {
  width: 2rem;
  height: 2rem;
  border-radius: 99rem;
  line-height: 2rem;
  background-color: var(--primary-color);
}

.step-line-wrap {
  height: 4rem;
  width: 6vw;
}
.step-line {
  height: 2px;
  width: 2vw;
  border: solid 1px var(--primary-color);
  transform: scale(3);
}

.step-circle-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  white-space: nowrap;
}
.step-circle {
  width: 4rem;
  height: 4rem;
  border-radius: 99rem;
  line-height: 4rem;
  color: #fff;
  background-color: var(--step-gray);
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
  color: #fff;
  background-color: var(--step-gray);
  margin-bottom: 1rem;
}

/* input-block */
.wrapper {
  background-color: #fff;
  padding: 2vh 2vw;
  border-radius: 12px;
  box-shadow: 0px 4px 4px 2px rgb(200, 200, 200);
}

/* attendance-input-block */
.attendance-group {
  width: 120px;
}
.minus-btn,
.plus-btn {
  background-color: var(--input-gray);
  color: #fff;
}
.minus-btn:hover,
.plus-btn:hover {
  background: var(--input-btn-gray-hover);
}

/* time-select-block */
.time-select-output {
  width: 90px;
  cursor: default;
}
.time-select-output:hover {
  background-color: #fff;
  color: var(--input-gray);
  cursor: default;
}
.split-btn {
  width: 30px;
  background-color: var(--input-gray);
  color: #fff;
}
.split-btn:hover {
  background: var(--input-btn-gray-hover);
}
.split-btn:focus:hover {
  background-color: var(--input-btn-gray-hover);
}
.time-dropdown-menu {
  min-width: 120px;
  cursor: pointer;
}

/* .coupon-select-block */
.coupon-select-output {
  width: 140px;
  cursor: default;
}
.coupon-select-output:hover {
  background-color: #fff;
  color: var(--input-gray);
  cursor: default;
}
.coupon-dropdown-menu {
  width: 170px;
  cursor: pointer;
}

/* point-block */
.point-input {
  width: 70px;
}
span {
  font-size: 12px;
  margin: 0;
  padding: 0;
}

/* note-block */
.note-input {
  width: 170px;
}

/* store-info-block     */
.img-block {
  width: 50%;
  height: 120px;
  overflow: hidden;
  background-color: #000;
}
.rating-block {
  background-color: var(--accent-color);
  width: 60px;
  color: #fff;
  border-radius: 16px;
}
.tag {
  border-radius: 80px;
  background-color: var(--accent-color);
  padding: 0.1em 0.6em;
  color: #fff;
}

/* comfirmation-block */
.comfirmation-wrapper {
  background-color: #fff;
  border: solid 6px var(--primary-color);
  border-radius: 12px;
  box-shadow: 0px 4px 4px 2px rgb(200, 200, 200);
}
.content {
  padding: 4vh 3vw;
  width: 100%;
}
/* .note-output{
        width: 100%;
        height: 100px;
        border: 1px solid var(--input-gray);
        border-radius: 4px;
    } */
.note {
  max-width: 20vw;
  word-break: break-all;
  white-space: pre-wrap;
}
.send {
  background-color: var(--primary-color);
  letter-spacing: 3px;
  padding: 20px;
  color: var(--accent-color);
}
</style>