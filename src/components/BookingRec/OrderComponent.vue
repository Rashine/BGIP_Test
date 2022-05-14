<template>
  <div class="order shadow-sm row d-flex align-items-center">
    <div class="col-3 col-md-1">
      <img :src="coverPhoto" alt="store" class="rounded img-fluid" />
    </div>
    <div class="col-9 col-md-3">
      <!-- <h5><b>中山旗艦店</b></h5> -->
      <h5>
        <b>{{ storeName }}</b>
      </h5>
    </div>
    <div class="col-12 col-md-3 grayColor">
      <p>{{date}} {{order.StartTime}}-{{order.EndTime}}</p>
    </div>
    <div class="col-6 col-md-3 grayColor">
      <p>{{ order.Name }} {{ order.Quantity }}人</p>
    </div>
    <div class="col-6 col-md-2 text-end grayColor">
      <p>
        金額 <span>{{ order.Price * order.Quantity }}</span> 元
      </p>
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase/config";
import {
  collection,
  query,
  where,
  // doc,
  // getDoc,
  getDocs,
} from "firebase/firestore";

export default {
  props: ["order"],
  async created() {
    console.log("component start!");
    console.log(this.$props.order.StoreId);

    // 取得店家資料
    var colRef = collection(db, "Store");
    var q = query(
      colRef,
      where("StoreID", "==", String(this.$props.order.StoreId))
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      // this.orderStore.push({ ...doc.data() });
      var result = doc.data();
      this.storeName = result.StoreName;
      this.coverPhoto = result.CoverPhoto;
    });
    // console.log(querySnapshot.data());
  },

  data() {
    return {
      storeName: "",
      coverPhoto: "",
    };
  },
  computed: {
    date(){
      var string = this.$props.order.PlayDate
      var result = string.split(" ")
      return result[0]
    }
  },
};
</script>

<style scoped>
/* 單筆訂單 */
.order {
  border: 0.1px #eeeeee solid;
  margin: 3px 12px;
  padding: 3px;
}
.col-12 {
  margin-top: 10px;
}
p,
h5,
span {
  margin: 0px;
}
span {
  color: red;
}
</style>
