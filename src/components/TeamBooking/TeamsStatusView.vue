<template>
  <div class="TeamsStatusView container px-5 py-3">
    <h2 class="container py-3">篩選範圍</h2>
    <div class="d-flex flex-wrap justify-content-center align-items-center">
      <div class="d-flex flex-wrap mx-3 my-3">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
            v-model="infos.hobbies01"
            checked
          />
          <label class="form-check-label" for="inlineCheckbox1">正在揪團</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
            v-model="infos.hobbies02"
            checked
          />
          <label class="form-check-label" for="inlineCheckbox2">最後確認</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox3"
            value="option3"
            v-model="infos.hobbies03"
            checked
          />
          <label class="form-check-label" for="inlineCheckbox3">成功訂位</label>
        </div>
      </div>
      <div class="search-block">
        <div class="d-flex justify-content-center">
          <input
            class="form-control border border-secondary"
            type="text"
            placeholder="請輸入關鍵字"
            style="max-width: 500px"
            v-model="infos.searchWords"
          />
        </div>
      </div>
    </div>
  </div>

  <hr />
  <div class="">
    <div class="row py-4 px-md-4 px-sm-1">
      <div
        class="col-md-6 col-sm-12 d-flex justify-content-center"
        v-for="list in searchTeams"
        :key="list.TeamName"
        target="_blank"
      >
        <TeamCard :team="list" :userinfo="userinfo" :name="'TeamsStatusView'"></TeamCard>
      </div>
    </div>
  </div>
</template>

<script>
import TeamCard from "@/components/TeamBooking/TeamCard.vue";

export default {
  name: "TeamsStatusView",
  components: {
    TeamCard,
  },
  props: ["teams", "userinfo"],
  data() {
    return {
      
      infos: {
        searchWords: "",
        hobbies01: true,
        hobbies02: true,
        hobbies03: true,
      },
      name: "Status",
      searchTeams: this.teams,//預設搜尋結果為全部
    };
  },
  methods: {
    dofilter() {
      let oldTeamData = [...this.teams];
      let resultData = [];
      console.log("Start", resultData);
      let res = "";
      if (this.infos) {
        if (this.infos.hobbies01) {
          res = oldTeamData.filter((list) => list.Status == "正在揪團");
          console.log("RES1", res);
          if (res.length > 0) {
            // ES6 Spread
            resultData = [...resultData, ...res];
          }
        }
        if (this.infos.hobbies02) {
          res = oldTeamData.filter((list) => list.Status == "最後確認");
          console.log("RES2", res);
          if (res.length > 0) {
            resultData = [...resultData, ...res];
          }
        }
        if (this.infos.hobbies03) {
          res = oldTeamData.filter((list) => list.Status == "成功訂位");
          console.log("RES3", res);
          if (res.length > 0) {
            resultData = [...resultData, ...res];
          }
        }
        console.log("resultData", resultData);
        this.searchTeams = resultData;
        console.log("Final", this.searchTeams);
        (this.filterSearch)();
      }
    },
    filterSearch() {
      console.log(this.infos.searchWords);
      let searchResult = [];
      let teamName = this.searchTeams.filter((searchResult) =>
        searchResult.TeamName.match(this.infos.searchWords)
      );
      searchResult = [...searchResult, ...teamName];
      // let storeName = this.searchTeams.filter((searchResult) =>
      //   searchResult.StoreName.match(this.searchWords)
      // );
      // searchResult = [...searchResult, ...storeName];
      this.searchTeams = searchResult;
      return searchResult;
    },
  },
  watch: {
    infos: {
      handler: "dofilter",
      deep: true,
    },
  },
  computed: {
    
  },
};
</script>



<style scoped>
* {
  --step-gray: rgb(166, 166, 166);
  --input-gray: rgb(118, 118, 118);
  --input-btn-gray-hover: rgba(118, 118, 118, 0.7);
}

.searchArea {
  flex: auto;
  align-items: center;
  justify-content: space-evenly;
}

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
</style>