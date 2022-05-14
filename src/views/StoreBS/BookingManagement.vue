<template>
  <div class="container">
    <div class="wrapper">
      <!-- v-calender -->
      <div
        class="
          d-flex
          flex-column
          justify-content-center
          align-items-center
          mb-5
        "
      >
        <div class="calenderBox">
          <div class="mb-3">
            <DatePicker
              is-expanded
              v-model="date"
              :min-date="new Date()"
              :disabled-dates="{ weekdays: [3] }"
            />
          </div>
          <div
            class="d-flex flex-column justify-content-center align-items-center"
          >
            <div class="mb-3">
              <div>{{ getDate() }}</div>
              <div>剩餘座位 {{ getSeat() }} 人</div>
              <div>營業時間 {{ startTime }} ~ {{ endTime }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 店家搜列表 -->
      <div class="title">店家搜</div>
      <ul
        class="nav nav-tabs nav-justified listStyle"
        id="myTab"
        role="tablist"
      >
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="reserve-tab"
            data-bs-toggle="tab"
            data-bs-target="#storereserve"
            type="button"
            role="tab"
            aria-controls="storereserve"
            aria-selected="true"
          >
            已預訂
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="complete-tab"
            data-bs-toggle="tab"
            data-bs-target="#storecomplete"
            type="button"
            role="tab"
            aria-controls="storecomplete"
            aria-selected="false"
          >
            已結束
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="cancel-tab"
            data-bs-toggle="tab"
            data-bs-target="#storecancel"
            type="button"
            role="tab"
            aria-controls="storecancel"
            aria-selected="false"
          >
            已取消
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active rounded-bottom"
          id="storereserve"
          role="tabpanel"
          aria-labelledby="reserve-tab"
        >
          <div v-for="list in bookinglists" :key="list.BookingListId">
            <div v-if="list.Status === '一般已訂位'">
              <StoreBookingList
                :name="list.Contact"
                :Pdate="list.PlayDate"
                :Stime="list.StartTime"
                :Etime="list.EndTime"
                :quantity="list.Quantity"
                :listId="list.BookingListId"
              ></StoreBookingList>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade show active rounded-bottom"
          id="storecomplete"
          role="tabpanel"
          aria-labelledby="complete-tab"
        >
          <div v-for="list in bookinglists" :key="list.BookingListId">
            <div v-if="list.Status === '一般已結束'">
              <StoreBookingList
                :name="list.Contact"
                :Pdate="list.PlayDate"
                :Stime="list.StartTime"
                :Etime="list.EndTime"
                :quantity="list.Quantity"
                :listId="list.BookingListId"
              ></StoreBookingList>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade show active rounded-bottom"
          id="storecancel"
          role="tabpanel"
          aria-labelledby="cancel-tab"
        >
          <div v-for="list in bookinglists" :key="list.BookingListId">
            <div v-if="list.Status === '一般已取消'">
              <StoreBookingList
                :name="list.Contact"
                :Pdate="list.PlayDate"
                :Stime="list.StartTime"
                :Etime="list.EndTime"
                :quantity="list.Quantity"
                :listId="list.BookingListId"
              ></StoreBookingList>
            </div>
          </div>
        </div>
      </div>

      <div class="title">揪團搜</div>
      <ul
        class="nav nav-tabs nav-justified listStyle"
        id="myTab"
        role="tablist"
      >
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="reserve-tab"
            data-bs-toggle="tab"
            data-bs-target="#teamreserve"
            type="button"
            role="tab"
            aria-controls="teamreserve"
            aria-selected="true"
          >
            已預訂
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="complete-tab"
            data-bs-toggle="tab"
            data-bs-target="#teamcomplete"
            type="button"
            role="tab"
            aria-controls="teamcomplete"
            aria-selected="false"
          >
            已結束
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="cancel-tab"
            data-bs-toggle="tab"
            data-bs-target="#teamcancel"
            type="button"
            role="tab"
            aria-controls="teamcancel"
            aria-selected="false"
          >
            已取消
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active rounded-bottom"
          id="teamreserve"
          role="tabpanel"
          aria-labelledby="reverse-tab"
        >
          <div v-for="list in bookinglists" :key="list.BookingListId">
            <div v-if="list.Status === '揪團已訂位'">
              <StoreBookingList
                :name="list.Contact"
                :Pdate="list.PlayDate"
                :Stime="list.StartTime"
                :Etime="list.EndTime"
                :quantity="list.Quantity"
                :listId="list.BookingListId"
              ></StoreBookingList>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade show active rounded-bottom"
          id="teamcomplete"
          role="tabpanel"
          aria-labelledby="complete-tab"
        >
          <div v-for="list in bookinglists" :key="list.BookingListId">
            <div v-if="list.Status === '糾團已結束'">
              <StoreBookingList
                :name="list.Contact"
                :Pdate="list.PlayDate"
                :Stime="list.StartTime"
                :Etime="list.EndTime"
                :quantity="list.Quantity"
                :listId="list.BookingListId"
              ></StoreBookingList>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade show active rounded-bottom"
          id="teamcancel"
          role="tabpanel"
          aria-labelledby="cancel-tab"
        >
          <div v-for="list in bookinglists" :key="list.BookingListId">
            <div v-if="list.Status === '揪團已取消'">
              <StoreBookingList
                :name="list.Contact"
                :Pdate="list.PlayDate"
                :Stime="list.StartTime"
                :Etime="list.EndTime"
                :quantity="list.Quantity"
                :listId="list.BookingListId"
              ></StoreBookingList>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { DatePicker } from "v-calendar";
import StoreBookingList from "@/components/StoreBS/StoreBookingList.vue";
import { db } from "@/firebase/config";
import {
  collection,
  getDocs,
  query,
  orderBy,
  doc,
  where,
  getDoc,
} from "firebase/firestore";

export default {
  components: {
    DatePicker,
    StoreBookingList,
  },
  data() {
    return {
      date: "",
      currentDate: "",
      startTime: "",
      endTime: "",
      dbLists: [],
      bookinglists: [],
      storeData: [],
      user: this.$store.state.user,
      userInfo: "",
    };
  },
  async created() {
    //取得使用者資訊
    // console.log("this.user", this.user);
    let getUserInfo = await getDoc(doc(db, "Account", this.user.uid));
    this.userInfo = getUserInfo.data();
    // console.log("userInfo.userId", this.userInfo.UserId);

    // 先取得UserId起頭，判定是否為店家
    let str = String(this.userInfo.UserId);
    console.log(str.charAt(0));

    if (str.charAt(0) != 9) {
      this.$snackbar.add({
            type: "error",
            text: "你不是訂家，不該來這裡",
          });
          setTimeout(() => {
            this.$router.push("/");
          }, 4500);
    } else {

      //呼叫BookingLists資料庫
      let dataBase = await collection(db, "BookingLists");
      let dbResult = await getDocs(query(dataBase, orderBy("BookingListId")));
      dbResult.docs.forEach((doc) => {
        this.dbLists.push({ ...doc.data() });
      });
      // console.log("this.dbLists", this.dbLists);

      //呼叫該店家資料庫
      let dbRes = await getDocs(
        query(
          collection(db, "Store"),
          where("StoreOwner", "==", String(this.userInfo.UserId))
        )
      );
      dbRes.docs.forEach((doc) => {
        this.storeData.push({ ...doc.data() });
      });
      console.log("this.storeData", this.storeData);

      this.seat = this.storeData[0].Capacity;
    }
  },
  watch: {
    currentDate: function () {
      console.log("currentDateChanged!", this.currentDate);

      //訂單篩選
      function filterByDate(aim, currentDate) {
        let result = aim.filter((item) => item.PlayDate == currentDate);
        return result;
      }
      //列出目標訂單
      this.bookinglists = filterByDate(this.dbLists, this.currentDate);
      // console.log("this.bookinglists", this.bookinglists);
    },
  },
  methods: {
    getDate: function () {
      let dateBase = this.date;
      let getDate = "";

      if (this.date != "") {
        let year = dateBase.getFullYear();
        let month = dateBase.getMonth() + 1;
        let date = dateBase.getDate();
        let day = dateBase.getDay();

        getDate = year + "年" + month + "月" + date + "日";

        //選定日期
        this.currentDate = year + "/" + month + "/" + date;
        // console.log("urrentDate", this.currentDate);

        //營業時間
        this.startTime = this.storeData[0].WeekPlan[day].Open;
        this.endTime = this.storeData[0].WeekPlan[day].Close;
      }
      return getDate;
    },
    getSeat: function () {
      //剩餘座位
      let seatQuantity = this.bookinglists.filter(
        (item) => item.Status === ("一般已訂位" || "揪團已訂位")
      );
      console.log("seatQuantity", seatQuantity);
      let seat = this.storeData[0].Capacity;
      if (seatQuantity == "") {
        console.log("沒有相關資訊");
      } else {
        seatQuantity.forEach((element) => {
          seat -= element.Quantity;
        });
      }
      return seat;
    },
  },
};
</script>

<style scoped>
.calenderBox {
  box-shadow: 0px 4px 4px 2px rgb(200 200 200);
  width: 300px;
  border-radius: 4px;
}

.title {
  font-size: 32px;
  font-weight: 900;
}

.listStyle {
  border-radius: 12px 12px 0px 0px;
  overflow: hidden;
  box-shadow: 0px 4px 4px 2px rgb(200 200 200);
}
</style>