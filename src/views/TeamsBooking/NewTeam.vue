<template>
  <div class="container">
    <h1>創立揪團</h1>
    <hr />
    <div>地點：{{ bookingStore.StoreName }}</div>
    <h4>訂位日期：{{ bookingDate }}</h4>
    <DatePicker v-model="date" @click="chooseDate" />
    <hr />
    <div class="d-flex justify-content-start align-items-center mb-3">
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
    <hr />
    <div class="d-flex justify-content-start align-items-center">
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
    <div>
      <p>人數範圍</p>
      <div>
        最少<input type="number" v-model="minMember" />人 最多<input
          type="number"
          v-model="maxMember"
        />人
      </div>
    </div>
    <hr />
    <div>
      <p>揪團名稱</p>
      <input type="text" v-model="teamName" placeholder="揪團名稱最多十個字" />
    </div>
    <hr />
    <div>
      <p>揪團標籤</p>
      <div>
        <input type="text" v-model="newTag" placeholder="幫你的團加上標籤吧" />
        <span class="icon ms-1" @click="addTag"
          ><i class="fa-solid fa-plus"></i
        ></span>
      </div>
      <template v-for="(tag, index) in teamTags" :key="tag">
        <span class="tag ms-1"
          >{{ tag }}
          <span class="delete-button" @click="deleteTag(index)">
            <i class="fa-solid fa-xmark"></i> </span
        ></span>
      </template>
    </div>
    <hr />
    <div>
      <p>截止日期</p>
      <input type="date" v-model="dueDate" />
    </div>
    <hr />
    <div>
      <p>揪團描述</p>
      <textarea cols="30" rows="10" v-model="teamDescription"></textarea>
    </div>
    <hr />
    <button @click="submitOrder">下一步</button>
  </div>
</template>

<script>
import { db } from "@/firebase/config";
import { getDoc, doc } from "firebase/firestore";
// import { DatePicker } from "v-calendar";
export default {
  name: "NewTeam",
  component: {
    // DatePicker,
  },
  data() {
    return {
      bookingStore: {},
      bookingDate: "尚未選擇日期",
      bookingPeriod: "",
      bookingHour: 0,
      date: new Date(),
      BeginningTime: "選擇時段",
      EnddingTime: "選擇時段",
      dropdownValues: [],
      minMember: 2,
      maxMember: 0,
      teamName: "",
      teamTags: [],
      newTag: "",
      dueDate: "",
      teamDescription: "",
      price: 0,
    };
  },
  mounted() {
    this.getSingleStore();
  },
  computed: {
    bookingStoreID() {
      return this.$store.state.bookingStoreID;
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
      // console.log(this.bookingStore);
    },
    chooseDate() {
      let dateBase = this.date;
      let month = dateBase.getMonth() + 1;
      let date = dateBase.getDate();
      this.bookingDate = month + "月" + date + "日 ";

      var dayIndex = dateBase.getDay();
      var open = this.bookingStore.WeekPlan[dayIndex].Open;
      var close = this.bookingStore.WeekPlan[dayIndex].Close;
      var openSplit = open.split(":");
      var closeSpit = close.split(":");

      var basicHour = this.bookingStore.WeekPlan[dayIndex].BasicHour;
      var fee = this.bookingStore.WeekPlan[dayIndex].Fee;
      if (this.bookingHour <= basicHour) {
        this.price = fee;
      } else if (this.bookingHour > basicHour) {
        if (Number.isInteger(this.bookingHour / basicHour)) {
          this.price = (this.bookingHour / basicHour) * fee;
        } else {
          this.price = (Math.floor(this.bookingHour / basicHour) + 1) * fee;
        }
      }

      var openH = Number(openSplit[0]);
      var openM = Number(openSplit[1] / 60);

      var closeH = Number(closeSpit[0]);
      var closeM = Number(closeSpit[1] / 60);

      var openValue = openH + openM;
      var closeValue = closeH + closeM;

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
      const startDate = 60 * openValue; // start time in minutes
      const endDate = 60 * closeValue; // end time in minutes

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
        this.bookingPeriod = this.BeginningTime + "-" + this.EnddingTime;
        this.bookingHour = EnddingNumber - BeginningNumber;
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
        this.bookingPeriod = this.BeginningTime + "-" + this.EnddingTime;
        this.bookingHour = EnddingNumber - BeginningNumber;
      }
    },
    addTag() {
      if (this.newTag == "") {
        this.$snackbar.add({
          type: "error",
          text: "新標籤內容不得為空",
        });
        return;
      } else if (this.teamTags.length >= 5) {
        this.$snackbar.add({
          type: "error",
          text: "標籤數不得超過5",
        });
        this.newTag = "";
        return;
      }
      this.teamTags.push(this.newTag);
      this.newTag = "";
    },
    deleteTag(index) {
      this.teamTags.splice(index, 1);
    },
    getRandom(x) {
      return Math.floor(Math.random() * x) + 1;
    },
    getRandomID() {
      var ID = "7000";
      var n = 0;
      for (var i = 0; i < 4; i++) {
        n = this.getRandom(9);
        ID += String(n);
      }
      this.bookingListId = ID;
      console.log(this.bookingListId);
      return ID;
    },
    submitOrder() {
      let dateBase = this.date;
      // var dayIndex = dateBase.getDay();

      if (this.bookingDate == "尚未選擇日期") {
        this.$snackbar.add({
          type: "error",
          text: "尚未選擇揪團日期",
        });
        return;
      } else if (isNaN(this.bookingHour)) {
        this.$snackbar.add({
          type: "error",
          text: "請務必選擇開始及結束時間",
        });
        return;
      } else if (
        this.bookingHour <
        this.bookingStore.WeekPlan[dateBase.getDay()].BasicHour
      ) {
        this.$snackbar.add({
          type: "warning",
          text: `遊玩時數未達基礎時數，金額仍將以基礎消費計算`,
        });
        return;
      } else if (
        this.minMember == 0 ||
        this.maxMember == 0 ||
        this.minMember > this.maxMember
      ) {
        this.$snackbar.add({
          type: "error",
          text: "請正確填寫人數範圍",
        });
        return;
      } else if (this.teamName == "") {
        this.$snackbar.add({
          type: "error",
          text: "請填寫揪團名稱",
        });
        return;
      } else if (this.teamName.length > 10) {
        this.$snackbar.add({
          type: "error",
          text: "揪團名稱不得超過十字",
        });
        return;
      } else if (this.dueDate == "") {
        this.$snackbar.add({
          type: "error",
          text: "請務必選擇截止時間",
        });
        return;
      } else {
        // const string = this.infos[2].value;
        // const stringResult = string.split("-");
        // const start = stringResult[0];
        // const end = stringResult[1];
        // let dateBase = this.date;
        // var dayIndex = dateBase.getDay();
        // var price = this.bookingStore.WeekPlan[dayIndex].Fee;
        var teamDetail = {
          BookingListId: this.getRandomID(),
          StoreId: this.bookingStore.StoreID,
          StoreLocation: {
            Address: this.bookingStore.StoreLocation.Address,
            lat: this.bookingStore.StoreLocation.lat,
            lng: this.bookingStore.StoreLocation.lng,
          },
          StoreName: this.bookingStore.StoreName,
          PlayDate: this.bookingDate,
          TeamMembers: {
            min: this.minMember,
            max: this.maxMember,
          },
          StartTime: this.BeginningTime,
          EndTime: this.EnddingTime,
          TimeCount: this.bookingHour,
          Status: "正在揪團",
          Name: this.teamName,
          Tags: this.teamTags,
          DueDate: this.dueDate,
          Note: this.teamDescription,
          TeamLimit: this.maxMember,
          Price: this.price,
        };
        this.$store.commit("setTeamData", teamDetail);
        console.log(this.$store.state.teamData);
        this.$router.push("/teamcontact");
      }
    },
  },
};
</script>

<style>
.icon {
  color: #4590d4;
  cursor: pointer;
}
.icon:hover {
  color: #205281;
}
.delete-button {
  color: #fff;
}
.delete-button:hover {
  color: #ccc;
}
</style>