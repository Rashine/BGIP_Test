<template>
  <div class="TeamsSearchView container px-5 py-3">
    <h2 class="container py-3">篩選範圍</h2>
    <div class="d-flex flex-column">
      <div class="d-flex searchArea flex-wrap justify-content-md-evenly">
        <div class="d-flex flex-nowrap">
          <p class="grayColor me-2">日期</p>
          <div class="beginningtime-block">
            <div class="input-group input-group-sm">
              <input
                type="date"
                class="btn btn-outline-secondary"
                style="border-radius: 4px"
                v-model="infos.searchDate"
              />
            </div>
          </div>
        </div>
        <div class="d-flex flex-nowrap">
          <p class="grayColor me-2">時間</p>
          <div class="beginningtime-block">
            <div class="input-group input-group-sm">
              <div
                type="input"
                class="time-select-output btn btn-outline-secondary"
              >
                {{ infos.beginningTime }}
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
        <div class="d-flex flex-nowrap">
          <p class="grayColor me-2">狀態</p>
          <div class="enddingtime-block">
            <div class="input-group input-group-sm">
              <div
                type="input"
                class="time-select-output btn btn-outline-secondary"
              >
                {{ infos.status }}
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
                  v-for="dropdownValue in StatusDropdownValues"
                  :key="dropdownValue"
                  @click="getStatus(dropdownValue)"
                >
                  {{ dropdownValue }}
                </li>
              </ul>
            </div>
          </div>
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
      >
        <TeamCard
          :team="list"
          :userinfo="userinfo"
          :name="'TeamsSearchView'"
        ></TeamCard>
      </div>
    </div>
  </div>
</template>

<script>
import TeamCard from "@/components/TeamBooking/TeamCard.vue";
export default {
  name: "TeamsSearchView",
  components: {
    TeamCard,
  },
  props: ["teams", "userinfo"],
  data() {
    return {
      name: "Search",
      infos: {
        searchDate: "",
        beginningTime: "全時段",
        status: "全選",
        searchWords: "",
      },
      // BeginningTime: "全時段",
      dropdownValues: [
        "全時段",
        "00:00",
        "01:00",
        "02:00",
        "03:00",
        "04:00",
        "05:00",
        "06:00",
        "07:00",
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
        "23:00",
      ],
      // Status: "全選",
      StatusDropdownValues: ["全選", "未達標", "已達標", "人數已滿"],
      // searchDate: "",
      searchTeams: this.teams,
      // searchWords: "",
    };
  },
  methods: {
    getBeginningTime(dropdownValue) {
      this.infos.beginningTime = dropdownValue;
    },

    getStatus(dropdownValue) {
      this.infos.status = dropdownValue;
    },
    dofilter() {
      let oldTeamData = [...this.teams];
      // let resultData = [];

      if (this.infos.searchDate && this.infos.searchDate != "") {
        console.log("this.infos.searchDate", this.infos.searchDate);
        oldTeamData = oldTeamData.filter(
          (list) => list.PlayDate == this.infos.searchDate
        );
      }
      if (this.infos.beginningTime && this.infos.beginningTime != "全時段") {
        console.log("this.infos.beginningTime", this.infos.beginningTime);
        oldTeamData = oldTeamData.filter(
          (list) => list.StartTime == this.infos.beginningTime
        );
      }

      if (this.infos.status == "未達標") {
        oldTeamData = oldTeamData.filter(
          (list) => list.Quantity - list.MinPlayer < 0
        );
      } else if (this.infos.status == "已達標") {
        oldTeamData = oldTeamData.filter(
          (list) => list.Quantity - list.MinPlayer >= 0
        );
      } else if (this.infos.status == "人數已滿") {
        oldTeamData = oldTeamData.filter(
          (list) => list.Quantity - list.MaxPlayer >= 0
        );
      }
      console.log("oldTeamData", oldTeamData);
      this.searchTeams = oldTeamData;
      console.log("Final", this.searchTeams);
      this.filterSearch();
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

.time-dropdown-menu {
  max-height: 50vh;
  overflow-y: scroll;
}
</style>