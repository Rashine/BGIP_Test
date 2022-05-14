<template>
  <div class="store-list-card row" @click="redirect(store.StoreUID)">
    <!-- store-info 店家基本資訊:圖片,名稱,地址 -->
    <div class="store-info col-md-7 row">
      <!-- store-pic -->
      <div class="store-pic col-4 col-md-6 px-0 rounded overflow-hidden">
        <img
          :src="store.CoverPhoto"
          alt="store-pic"
          class="position-relative h-100 top-50 start-50 translate-middle"
        />
      </div>
      <!-- store-pic end -->
      <div class="col-8 col-md-6 mb-3">
        <h5>
          <b>{{ store.StoreName }} </b>
          <button
            class="mx-2 favBtn"
            :class="{ favorite: favorite }"
            @click="toggleLike(store.StoreUID)"
          >
            <i class="fa-regular fa-heart" v-if="!this.favorite"></i>
            <i class="fa-solid fa-heart fav" v-if="this.favorite"></i>
          </button>
        </h5>
        <!-- <span>★★★★★(95則評價)</span> -->
        <p class="cardTxt mb-0">
          {{ store.StoreLocation.Address }}
        </p>
        <span class="badge tag me-0" v-for="tag in store.Tags" :key="tag">{{
          tag
        }}</span>
      </div>
    </div>
    <!-- store-info end-->

    <!-- store-biz 店家商業資訊:時間,收費 -->
    <div class="store-biz col-md-5">
      <template v-for="(day, index) in store.WeekPlan" :key="index">
        <div class="row grayColor" v-bind="day">
          <div class="col-3 p-0">
            <p class="cardTxt">星期{{ transferIndex(index) }}</p>
          </div>
          <div class="col-4 p-0">
            <p class="cardTxt">{{ day.Open }} - {{ day.Close }}</p>
          </div>
          <div class="col-5 p-0">
            <p class="cardTxt">每{{ day.BasicHour }}小時 {{ day.Fee }}元/人</p>
          </div>
        </div>
      </template>
    </div>
    <!-- store-biz end -->
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
/* 收藏功能 愛心變色 */
.fa-heart {
  color: #ee5c5c;
}
.favBtn {
  background-color: #ffffff00;
  border: none;
  padding: 0;
}

.store-list-card {
  background-color: #ffffff;
  border: 1px solid #f5c000;
  border-radius: 12px;
  padding: 10px;
  margin-bottom: 10px;
}
.badge {
  background-color: #4590d4;
}
.store-pic {
  height: 180px;
  max-height: 100%;
  background-color: #000;
}
.store-pic img {
  object-fit: cover;
}

/* mobile卡片文字大小需12px */
.cardTxt {
  font-size: 1rem;
  margin: 0px;
}

@media screen and (max-width: 580px) {
  .cardTxt {
    font-size: 0.75rem;
  }
  .store-pic {
    height: 80px;
  }
}

/* RWD測試用 */
.col-2,
.col-3,
.col-5,
.col-6,
.col-4 {
  /* border: 1px solid #ee5c5c; */
  padding: 0px;
}
</style>
