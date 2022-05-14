<template>
  <div class="store-card col-12 col-md-6" @click="redirect(store.StoreUID)">
    <div class="store-title row d-flex p-3">
      <div class="col-10">
        <h5>{{ store.StoreName }}</h5>
        <!-- <span>★★★★★(95則評價)</span> -->
      </div>
      <div class="col-2 d-flex justify-content-end">
        <button
          class="mx-2 favBtn"
          :class="{ favorite: favorite }"
          @click="toggleLike(store.StoreUID)"
        >
          <i class="fa-regular fa-heart" v-if="!this.favorite"></i>
          <i class="fa-solid fa-heart fav" v-if="this.favorite"></i>
        </button>
      </div>
    </div>
    <div class="store-img">
      <img :src="store.CoverPhoto" class="card-img-top" alt="store-img" />
    </div>
    <div class="store-info row p-3">
      <div class="table-responsive col-md-9">
        <template v-for="(day, index) in store.WeekPlan" :key="index">
          <div class="d-flex justify-content-between" v-bind="day">
            <div>星期 {{ transferIndex(index) }}</div>
            <div>時間 {{ day.Open }} - {{ day.Close }}</div>
            <div>每{{ day.BasicHour }}小時 {{ day.Fee }}元/人</div>
          </div>
        </template>
      </div>
      <div class="col-md-3 d-flex align-items-end justify-content-center">
        <span class="status">還有位</span>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase/config";
import { updateDoc, doc } from "firebase/firestore";

export default {
  data() {
    return {
      user: this.$store.state.user,
      favorite: false,
      Id: this.store.StoreUID,
    };
  },
  created() {
    this.findFav();
  },
  props: ["store", "userInfo"],
  methods: {
    transferIndex(index) {
      let Chinese = ["日", "一", "二", "三", "四", "五", "六"];
      let ChineseDay = Chinese[index];
      return ChineseDay;
    },
    toggleLike: async function (StoreUID) {
      this.favorite = this.favorite ? false : true;

      if (this.favorite) {
        const storeList = this.userInfo.FavStores;
        console.log("storeList", storeList);
        storeList.push(StoreUID);

        await updateDoc(doc(db, "Account", this.user.uid), {
          FavStores: storeList,
        })
          .then(() => {
            this.$snackbar.add({
              type: "success",
              text: "已收藏！",
            });
            setTimeout(() => {
              this.$router.go(0);
            });
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        // console.log("等待取消收藏");
        const toRemove = StoreUID;
        let storeList = this.userInfo.FavStores;
        storeList = storeList.filter(function (item) {
          return item !== toRemove;
        });
        // console.log(storeList);

        await updateDoc(doc(db, "Account", this.$store.state.user.uid), {
          FavStores: storeList,
        })
          .then(() => {
            this.$snackbar.add({
              type: "success",
              text: "已取消收藏",
            });
            setTimeout(() => {
              this.$router.go(0);
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    findFav: function () {
      // 判定該訂單是否蒐藏
      if (this.userInfo) {
        const found = this.userInfo.FavStores.find(
          (element) => element == this.Id
        );
        if (found) {
          this.favorite = true;
        } else {
          this.favorite = false;
        }
      }
    },
    redirect(storeID) {
      this.$router.push(`/stores/${storeID}`);
    },
  },
};
</script>

<style scoped>
.store-card {
  background-color: #ffffff;
  border: 1px solid #f5c000;
  border-radius: 12px;
  /* width: 33%; */
  /* margin-left: 10px; */
}
/* 收藏愛心變色 */
.fa-heart {
  color: #ee5c5c;
}
.favBtn {
  background-color: #ffffff00;
  border: none;
  padding: 0;
}
</style>
