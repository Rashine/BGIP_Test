<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="cardWidth">
        <div class="container p-4">
          <p style="margin: 0px;color:black;text-align: start;">
            <b
              >範例桌遊店 - 中山旗艦店 <br />
              (2行版型預留位)</b
            >
          </p>
        </div>
        <hr class="d-block d-md-none" style="margin: 0px" />
        <!-- status -->
        <div class="status">
          <p
            v-if="status === 1"
            style="
              background-color: red;
              color: rgb(255, 255, 255);
              text-align: center;
              margin: 0px auto;
            "
          >
            已取消
          </p>
          <p
            v-else-if="status === 2"
            style="
              background-color: #68CAF4;
              color: rgb(255, 255, 255);
              text-align: center;
              margin: 0px 0px;
            "
          >
            已預定
          </p>
          <p
            v-else
            style="
              background-color: #A6FF87;
              text-align: center;
              color:black
            "
          >
            已完成
          </p>
        </div>
        <!-- status end -->
        <hr class="d-none d-md-block" style="margin: 0px" />

        <!-- 細項 -->
        <div class="container p-5">
          <div class="d-flex justify-content-between grayColor">
            <a>揪團搜</a><a> <b>黃金單身漢{{ listDetail.Contact }}</b></a>
          </div>
          <hr />
          <div class="d-flex justify-content-between grayColor">
            <a>訂位日期</a><a>{{ listDetail.PlayDate }}</a>
          </div>
          <hr />
          <div class="d-flex justify-content-between grayColor">
            <a>定位時段</a><a>{{ listDetail.StartTime }}~{{ listDetail.EndTime }}</a>
          </div>
          <hr />
          <div class="d-flex justify-content-between grayColor">
            <a>定位人數</a><a>{{ listDetail.Quantity }}</a>
          </div>
          <hr />
          <div class="d-flex justify-content-between grayColor">
            <a>遊玩時數</a><a>{{ listDetail.TimeCount }}</a>
          </div>
          <hr />
          <div class="d-flex justify-content-between grayColor">
            <a>套用優惠</a><a>{{ listDetail.CouponName }}</a>
          </div>
          <hr />
          <div class="d-flex justify-content-between grayColor">
            <a>優惠折扣</a><a>{{ listDetail.CouponDiscount }}</a>
          </div>
          <hr />
          <div class="d-flex justify-content-between grayColor">
            <a>點數折扣</a><a>{{ listDetail.PointDiscount }}</a>
          </div>
          <hr />
          <div class="d-flex justify-content-between grayColor">
            <a>聯絡人姓名</a><a>{{ listDetail.Contact }}</a>
          </div>
          <hr />
          <div class="d-flex justify-content-between grayColor">
            <a>聯絡人電話</a><a>{{ listDetail.Phone }}</a>
          </div>
          <hr />
          <div class="d-flex justify-content-between grayColor">
            <a>Email</a><a>{{ listDetail.Email }}</a>
          </div>
          <hr />
          <div class="d-flex justify-content-between grayColor">
            <a>備註</a><a>{{ listDetail.Note }}</a>
          </div>
          <p class="text-end pt-5">
            金額&ensp;
            <span style="font-size: 48px; color: rgb(246, 18, 18)">
              <b>{{ listDetail.Quantity*150 }}</b>
            </span>
            &ensp;元&ensp;整
          </p>
        </div>
        <!-- 細項end -->
      </div>
    </div>
  </div>
  <!-- 按鈕status -->
  <!-- 紅色status已取消 -->
  <div v-if="status === 1" class="d-flex justify-content-center pb-5">
    <div class="mainBtn" style="width: 200px">確認</div>
  </div>
  <!-- 紅色status已取消 end -->
  <!-- 藍色status已預訂-->
  <div class="container">
    <div class="row justify-content-center">
      <div class="btnw">
        <div v-if="status === 2" class="d-flex">
          <div class="row row-cols-1 row-cols-sm-3">
            <div class="col">
              <div class="d-flex pb-2">
                <div class="mainBtn" style="width: 200px">確認</div>
              </div>
            </div>
            <div class="col">
              <div class="d-flex pb-2">
                <div class="mainBtn" style="width: 200px">已到場</div>
              </div>
            </div>
            <div class="d-flex pb-5">
              <div class="mainBtn" style="width: 200px">聯絡</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 藍色status已預定 end -->
  <!-- 綠色status已完成 -->
  <div v-if="status === 3" class="d-flex justify-content-center pb-5">
    <div class="mainBtn" style="width: 200px">確認</div>
  </div>
  <!-- 綠色status已完成 end -->
  <!-- 按鈕status end -->
</template>
<style  scoped>
@media screen and (max-width: 580px) {
  .cardWidth {
    width: 89%;
  }
  .mainBtn {
    position: relative;
    /* left: 100px; */
    /* justify-content: center; */
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
  border-radius: 12px;
  box-shadow: 0px 4px 4px 2px rgb(200, 200, 200);
  overflow: hidden; /* 切邊 */
  flex: auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  
}
.btnw {
  max-width: 700px;
  flex: auto;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
<script>
import { db } from "@/firebase/config";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
export default {
  data() {
    return {
      status: 3,
      dbLists: [],
      listDetail: "",
    };
  },
  async created() {
    //呼叫資料庫
    const dataBase = await collection(db, "BookingLists");
    const dbResult = await getDocs(query(dataBase, orderBy("BookingListId")));
    dbResult.docs.forEach((doc) => {
      this.dbLists.push({ ...doc.data() });
    });
    console.log("dbLists", this.dbLists);
    //選出該筆資料
    this.listDetail = await this.dbLists.find(
      (item) => item.BookingListId == this.$route.params.listId
    );
    console.log("listDetaill", this.listDetail);
  },
};
</script>