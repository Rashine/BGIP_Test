<template>
  <div class="container py-5 TeamsSecView">
    <div class="d-flex justify-content-end">
      <router-link to="/newteam">
        <button class="mainBtn">馬上開團</button>
      </router-link>
    </div>

    <div class="wrapper /listStyle">
      <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
        
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="search-tab"
            data-bs-toggle="tab"
            data-bs-target="#teamsearch"
            type="button"
            role="tab"
            aria-controls="teamsearch"
            aria-selected="true"
            @click="showCurrent('揪團搜尋')"
          >
            揪團搜尋
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="status-tab"
            data-bs-toggle="tab"
            data-bs-target="#teamstatus"
            type="button"
            role="tab"
            aria-controls="teamstatus"
            aria-selected="false"
            @click="showCurrent('揪團狀態')"
          >
            揪團狀態
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="fav-tab"
            data-bs-toggle="tab"
            data-bs-target="#teamfav"
            type="button"
            role="tab"
            aria-controls="teamfav"
            aria-selected="false"
            @click="showCurrent('揪團收藏')"
          >
            揪團蒐藏
          </button>
        </li>
      </ul>

      <div class="/tab-content" id="/myTabContent">
        <div
          class="/tab-pane fade show active rounded-bottom"
        
          v-if="currentPage=='揪團搜尋'"
        >
          <TeamsSearch
            :teams="this.allTeams"
            :userinfo="this.userInfo"
          ></TeamsSearch>
        </div>

        <div
          class="/tab-pane fade show active rounded-bottom"
        
          v-if="currentPage=='揪團狀態'"
        >
          <TeamsStatus
            :teams="this.userTeams"
            :userinfo="this.userInfo"
          ></TeamsStatus>
        </div>

        <div
          class="/tab-pane fade show active rounded-bottom"
       
          v-if="currentPage=='揪團收藏'"
        >
          <FavTeams :teams="this.favTeams" :userinfo="this.userInfo"></FavTeams>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TeamsSearch from "@/components/TeamBooking/TeamsSearchView.vue";
import TeamsStatus from "@/components/TeamBooking/TeamsStatusView.vue";
import FavTeams from "@/components/TeamBooking/FavTeamsView.vue";

import { db } from "@/firebase/config";
import {
  collection,
  getDocs,
  query,
  orderBy,
  doc,
  getDoc,
} from "firebase/firestore";

export default {
  name:"TeamsSecView",
  components: {
    TeamsSearch,
    FavTeams,
    TeamsStatus,
  },
  data() {
    return {
      user: this.$store.state.user,
      allTeams: [],
      userInfo: "",
      userTeams: [],
      favTeams: [],
      currentPage: "揪團搜尋",
    };
  },
  async created() {
    console.log("畫面開始");
    //呼叫Teams資料庫
    let dataBase = await collection(db, "Teams");
    let dbResult = await getDocs(query(dataBase, orderBy("TimeLimit")));
    dbResult.docs.forEach((doc) => {
      this.allTeams.push({ ...doc.data() });
    });

    //取得使用者資訊
    let getUserInfo = await getDoc(doc(db, "Account", this.user.uid));
    this.userInfo = getUserInfo.data();

    //篩選該使用者的揪團清單
    this.allTeams.forEach((element) => {
      const found = element.BookingId.find(
        (user) => user.Id == this.userInfo.UserId
      );
      if (found) {
        element.UsersTeam = true;//物件添加一個元素判定該帳號是否參加揪團
        this.userTeams.push(element);//將這些訂單另外放到一個userTeams中
      }else{
        element.UsersTeam = false;
      }
    });

    //取得該使用者的最愛揪團
    this.userInfo.FavJoins.forEach((element) => {
      const found = this.allTeams.find((team) => team.TeamId == element);
      if (found) {
        this.favTeams.push(found);
      }
    });
    console.log("畫面結束");
  },
  methods: {
    showCurrent(val) {
      this.currentPage = val;
    },
  },
};
</script>



<style scoped>
.nav-item {
  background-color: #f6d55e;
}
.nav-item button {
  color: #4590d4 !important;
}
.nav-item .active {
  background-color: #4590d4 !important;
  color: #ffffff !important;
}

.wrapper {
  padding: 0 !important;
  overflow: visible;
}

.tab-content {
  box-shadow: none;
}

/* .title {
  font-size: 32px;
  font-weight: 900;
} */

.listStyle {
  border-radius: 12px 12px 12px 12px;
  overflow: hidden;
  box-shadow: 0px 4px 4px 2px rgb(200 200 200);
}
</style>