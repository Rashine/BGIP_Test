<template>
  <div
    class="tab-pane fade rounded-bottom"
    id="points"
    role="tabpanel"
    aria-labelledby="points-tab"
  >
    <div class="points m-5">
      <div class="d-flex justify-content-between">
        <p class="col-md-6">明細</p>
        <p class="col-md-3">點數</p>
        <p class="col-md-3 text-end">消費日期</p>
      </div>
      <hr />
      <div v-for="pointDetail in pointDetails" v-bind:key="pointDetail">
        <div class="d-flex justify-content-between">
          <p class="col-md-6">{{ pointDetail.data().Content }}</p>
          <p class="col-md-3">{{ pointDetail.data().Count }}</p>
          <p class="col-md-3 text-end">{{ pointDetail.data().Date }}</p>
        </div>
        <hr />
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
      pointInfo: {},
      pointDetails: [],
    };
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    },
  },
  methods: {
    async getUsersPointsDetails() {
      // console.log("h:", this.$store.state.userInfo.Email);
      this.pointInfo = await getDocs(collection(db, "PointRecord"));
      console.log(this.pointInfo);

      // x=Target陣列內的值
      // y=(db,"PointRecord")的一筆資料
      this.pointInfo.forEach((y) => {
        console.log(y.data().Target);
        for (let x of y.data().Target) {
          if (x.localeCompare(this.userInfo.UserId) == 0) {
            console.log("got");
            this.pointDetails.push(y);
          }
        }
      });
    },
  },
  mounted() {
    console.log("mounted");
    // this.getCouponInfo();
    //console.dir(this.couponInfo.docs);
    this.getUsersPointsDetails();
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
</style>
