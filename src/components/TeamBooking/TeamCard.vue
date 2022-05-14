<template>
  <!-- 揪團卡片 -->
  <button
    class="
      TeamCardComp
      teamCard
      m-2
      d-flex
      flex-column
      align-items-stretch
      justify-content-between
    "
    data-bs-toggle="modal"
    :data-bs-target="'#' + name + Id"
  >
    <div>
      <div class="d-flex justify-content-between titleBar py-1">
        <div class="d-flex">
          <img
            src="../../assets/TeamsBookingSVG/Heart_Default.svg"
            alt=""
            class="mx-2"
            v-if="!this.favorite"
          />
          <img
            src="../../assets/TeamsBookingSVG/Heart_Active.svg"
            alt=""
            class="mx-2"
            v-if="this.favorite"
          />
          <div>{{ team.TeamName }}</div>
        </div>
        <div v-if="team.Status == '最後確認'">最後確認</div>
        <div v-if="team.Status == '成功訂位'">成功訂位</div>
        <div v-if="team.Status == '正在揪團'">
          還缺
          <span class="text-danger">
            {{ team.MinPlayer - team.Quantity }}
          </span>
          人
        </div>
      </div>
      <div class="d-flex flex-wrap align-items-center" style="min-height: 32px">
        <div v-for="list in this.team.Tag" :key="list">
          <div class="badge tagcolor mx-1">{{ list }}</div>
        </div>
      </div>
    </div>

    <div class="p-1 flex-grow-1">
      <div class="d-flex row mt-2" style="height: 100px; overflow: hidden">
        <div class="col-md-8 col-sm-12">
          <div class="font16 weightBlack">{{ team.StoreName }}</div>
          <div class="font16 grayColor textBox">
            {{ team.Content }}
          </div>
        </div>
        <div
          class="
            col-md-4 col-sm-12
            dateflex
            d-flex
            flex-sm-row flex-md-column
            align-items-end
          "
          style="max-height: 100px"
        >
          <div class="font16">{{ team.PlayDate }}</div>
          <div class="font16">{{ team.StartTime }}-{{ team.EndTime }}</div>
        </div>
      </div>
    </div>
  </button>

  <!-- 詳細頁面 -->
  <div
    class="modal fade"
    :id="name + Id"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content" style="border: 2px solid #f6d55e">
        <div class="modal-header" style="background-color: #f6d55e">
          <div class="d-flex">
            <button
              class="mx-2 favBtn"
              :class="{ favorite: favorite }"
              @click="toggleLike()"
            >
              <img
                src="../../assets/TeamsBookingSVG/Heart_Default.svg"
                alt="空愛心"
                v-if="!this.favorite"
              />
              <img
                src="../../assets/TeamsBookingSVG/Heart_Active.svg"
                alt="實愛心"
                v-if="this.favorite"
              />
            </button>
            <h2 class="modal-title">{{ team.TeamName }}</h2>
          </div>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="container">
            <div class="d-flex flex-nowrap align-items-center my-1">
              <div class="itemSelectName">日期</div>
              <div>{{ team.PlayDate }}</div>
            </div>
            <div class="d-flex flex-nowrap align-items-center my-1">
              <div class="itemSelectName">時間</div>
              <div>
                {{ team.StartTime }} - {{ team.EndTime }} 共
                {{ team.TimeCount }} 小時
              </div>
            </div>
            <div
              class="d-flex flex-nowrap align-items-center my-1"
              v-if="name == 'TeamsStatusView'"
            >
              <div class="itemSelectName">狀態</div>
              <div
                v-if="team.Status == '正在揪團'"
                class="weightBlack"
                style="color: #4590d4"
              >
                {{ team.Status }}
              </div>
              <div
                v-if="team.Status == '最後確認'"
                class="weightBlack"
                style="color: #ff3d3d"
              >
                {{ team.Status }}
              </div>
              <div
                v-if="team.Status == '成功訂位'"
                class="weightBlack"
                style="color: #29e930"
              >
                {{ team.Status }}
              </div>
            </div>
            <div class="d-flex flex-nowrap align-items-center my-1">
              <div class="itemSelectName">價位</div>
              <div>{{ team.Price }} / 人</div>
            </div>
            <div class="d-flex flex-nowrap align-items-center my-1">
              <div class="itemSelectName">店家</div>
              <div>{{ team.StoreName }}</div>
            </div>
            <div class="d-flex flex-nowrap align-items-center my-1">
              <div class="itemSelectName">地址</div>
              <div>{{ team.StoreLocation.Address }}</div>
            </div>
            <div class="d-flex flex-nowrap align-items-center my-1">
              <div class="itemSelectName">目前人數</div>
              <div>
                {{ team.Quantity }}人 &#40;最少 {{ team.MinPlayer }} 人 最多
                {{ team.MaxPlayer }} 人&#41;
              </div>
            </div>
            <div class="d-flex flex-nowrap align-items-center my-1">
              <div class="itemSelectName">標籤</div>
              <div>
                <div
                  v-for="list in this.team.Tag"
                  :key="list"
                  class="badge tagcolor me-1"
                >
                  {{ list }}
                </div>
              </div>
            </div>
            <div
              class="d-flex flex-nowrap align-items-center my-1"
              v-if="team.Status != '成功訂位'"
            >
              <div class="itemSelectName">截止倒數</div>
              <div class="d-flex flex-wrap">
                <div class="text-danger me-2">
                  {{ day }}日 {{ hr }}:{{ min }}:{{ sec }}
                </div>
                <div>&#40;{{ team.TimeLimit }} &#41;</div>
              </div>
            </div>
            <hr style="margin: 10px 0px" />
            <div class="d-flex flex-nowrap align-items-center my-1">
              <div class="itemSelectName">開團人</div>
              <div>{{ leader.Username }}</div>
            </div>
            <div class="d-flex flex-nowrap align-items-center my-1">
              <div class="itemSelectName">參加成員</div>
              <div class="d-flex flex-wrap">
                <div v-for="mate in teammate" :key="mate.UserId">
                  <div
                    class="badge /matecolor me-1"
                    v-if="mate.Status"
                    style="
                      background: #ffffff;
                      border: 1px solid #4590d4;
                      color: #4590d4;
                    "
                  >
                    {{ mate.Username }} 已確認
                  </div>
                  <div
                    class="badge /matecolor me-1"
                    v-if="!mate.Status"
                    style="
                      background: #ffffff;
                      border: 1px solid #e03535;
                      color: #e03535;
                    "
                  >
                    {{ mate.Username }} 未確認
                  </div>
                </div>
              </div>
            </div>
            <hr style="margin: 10px 0px" />
            <div class="mb-3">{{ team.Content }}</div>

            <div class="container">
              <div
                class="d-flex justify-content-center align-items-center my-5"
              >
                <button
                  type="button"
                  class="mainBtn"
                  v-if="
                    team.UsersTeam == false &&
                    (name == 'TeamsSearchView' || name == 'FavTeamsView')
                  "
                  @click="joinTeam()"
                >
                  我要參加
                </button>
                <div
                  v-if="
                    team.UsersTeam == true &&
                    (name == 'TeamsSearchView' || name == 'FavTeamsView')
                  "
                >
                  已參加
                </div>
                <button
                  type="button"
                  class="mainBtn text-danger"
                  v-if="
                    team.UsersTeam == true &&
                    name == 'TeamsStatusView' &&
                    team.Status == '正在揪團'
                  "
                  @click="leftTeam()"
                >
                  取消參加
                </button>
                <button
                  type="button"
                  class="mainBtn text-danger"
                  v-if="
                    team.UsersTeam == true &&
                    name == 'TeamsStatusView' &&
                    team.Status == '成功訂位'
                  "
                  @click="leftTeam()"
                >
                  取消參加
                </button>
                <button
                  type="button"
                  class="mainBtn"
                  v-if="
                    team.UsersTeam == true &&
                    name == 'TeamsStatusView' &&
                    team.Status == '最後確認'
                  "
                  @click="checkTeam()"
                >
                  確定參加
                </button>
                <button
                  type="button"
                  class="mainBtn text-danger"
                  v-if="
                    team.UsersTeam == true &&
                    name == 'TeamsStatusView' &&
                    team.Status == '最後確認'
                  "
                  @click="leftTeam()"
                >
                  不參加了
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase/config";
import {
  doc,
  updateDoc,
  query,
  where,
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore";

export default {
  name: "TeamCardComp",
  props: ["team", "userinfo", "name"],
  data() {
    return {
      MaxPlayer: this.team.MaxPlayer,
      MinPlayer: this.team.MinPlayer,

      Id: this.team.TeamId,
      favorite: false,
      TimeLimit: this.team.TimeLimit,
      // UsersTeam:this.team.UsersTeam,

      day: 0,
      hr: 0,
      min: 0,
      sec: 0,

      leader: [],
      teammate: [],

      bookingListId: "",
    };
  },
  updated() {
    this.findFav();
  },
  created() {
    this.findFav();
    this.getTeammate();
    this.countDown();
  },
  methods: {
    toggleLike: async function () {
      this.favorite = this.favorite ? false : true;
      console.log("this.favorite", this.favorite);
      if (this.favorite) {
        const teamList = this.userinfo.FavJoins;
        teamList.push(this.Id);

        await updateDoc(doc(db, "Account", this.$store.state.user.uid), {
          FavJoins: teamList,
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
        const toRemove = this.Id;
        let teamList = this.userinfo.FavJoins;
        teamList = teamList.filter(function (item) {
          return item !== toRemove;
        });
        console.log(teamList);

        await updateDoc(doc(db, "Account", this.$store.state.user.uid), {
          FavJoins: teamList,
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
    countDown: function () {
      // 不能直接呼叫prop，會promise panding
      const end = Date.parse(new Date(this.TimeLimit));
      const now = Date.parse(new Date());
      const msec = end - now;
      let day = parseInt(msec / 1000 / 60 / 60 / 24);
      let hr = parseInt((msec / 1000 / 60 / 60) % 24);
      let min = parseInt((msec / 1000 / 60) % 60);
      let sec = parseInt((msec / 1000) % 60);

      this.day = day;
      this.hr = hr > 9 ? hr : "0" + hr;
      this.min = min > 9 ? min : "0" + min;
      this.sec = sec > 9 ? sec : "0" + sec;

      const that = this;

      setTimeout(function () {
        that.countDown();
      }, 1000);
    },
    findFav: function () {
      // 判定該訂單是否蒐藏
      if (this.userinfo) {
        const found = this.userinfo.FavJoins.find(
          (element) => element == this.Id
        );
        if (found) {
          this.favorite = true;
        } else {
          this.favorite = false;
        }
      }
    },
    getTeammate: function () {
      this.team.BookingId.forEach(async (element) => {
        let q = await query(
          collection(db, "Account"),
          where("UserId", "==", Number(element.Id))
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          //將該使用者的 最後確認與否 放在這裡判定
          let d = doc.data();
          if (element.Confirm) {
            d.Status = true;
          } else {
            d.Status = false;
          }
          // console.log(d);
          this.teammate.push(d);
        });
        this.leader = this.teammate[0];
        // this.teammate = [...this.teammate.slice(0)];
      });
    },
    joinTeam: async function () {
      const teamMember = this.team.BookingId;
      const newMember = {
        Confirm: false,
        Count: 1,
        Id: String(this.userinfo.UserId),
      };
      teamMember.push(newMember);

      let pushData = {
        BookingId: teamMember,
        Quantity: this.team.Quantity+1,
      };

      let quantity = 0;
      teamMember.forEach((element) => {
        quantity += Number(element.Count);
      });
      console.log("quantity", quantity);
      if (quantity >= this.team.MinPlayer) {
        pushData.Status = "最後確認";
      }

      await updateDoc(doc(db, "Teams", this.team.TeamId), pushData)
        .then(() => {
          this.$snackbar.add({
            type: "success",
            text: "已加入揪團!",
          });
          setTimeout(() => {
            this.$router.go(0);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    leftTeam: async function () {
      const toRemove = String(this.userinfo.UserId);
      let teamMember = this.team.BookingId;
      teamMember = teamMember.filter(function (item) {
        return item.Id !== toRemove;
      });

      let pushData = {
        BookingId: teamMember,
        Quantity: this.team.Quantity-1,
      };

      let quantity = 0;
      teamMember.forEach((element) => {
        quantity += Number(element.Count);
      });
      console.log("quantity", quantity);
      if (quantity < this.team.MinPlayer) {
        pushData.Status = "正在揪團";
      }

      await updateDoc(doc(db, "Teams", this.team.TeamId), pushData)
        .then(() => {
          this.$snackbar.add({
            type: "error",
            text: "已退出該揪團 :(",
          });
          setTimeout(() => {
            this.$router.go(0);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    checkTeam: async function () {
      const toCheck = String(this.userinfo.UserId);
      let memberList = this.team.BookingId;
      let confirmCheck = true;
      memberList.forEach((item) => {
        if (item.Id == toCheck) {
          item.Confirm = true;
          // console.log("找到了!");
        }
        if (item.Confirm == false) {
          confirmCheck = false;
        }
      });
      // console.log("memberList", memberList);

      let pushData = {
        BookingId: memberList,
      };
      if (confirmCheck) {
        pushData.Status = "成功訂位";
      }
      await updateDoc(doc(db, "Teams", this.team.TeamId), pushData)
        .then(() => {
          this.$snackbar.add({
            type: "success",
            text: "已確認揪團囉! 靜候佳音!",
          });
          if (pushData.Status != "成功訂位") {
            setTimeout(() => {
              this.$router.go(0);
            });
          } else if (pushData.Status === "成功訂位") {
            this.getRandomID();
            this.submitOrder(pushData);
          }
        })
        .catch((err) => {
          console.log(err);
        });
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
    submitOrder(pushData) {
      addDoc(collection(db, "BookingLists"), {
        BookingListId: this.bookingListId,
        StoreId: this.team.StoreId,
        BookingId: pushData,
        PlayDate: this.team.PlayDate,
        Quantity: this.team.Quantity,
        StartTime: this.team.StartTime,
        EndTime: this.team.EndTime,
        TimeCount: this.team.TimeCount,
        Status: "揪團已訂位",
        Name: this.team.TeamName,
        Tags: this.team.Tag,
        Contact: this.team.Contact,
        Phone: this.team.Phone,
        Email: this.team.Email,
        Note: this.team.Content,
        CouponName: this.team.CouponName,
        CouponDiscount: this.team.CouponDiscount,
        PointDiscount: 0,
        Price: this.team.Price,
      })
        .then(() => {
          this.loading = false;
          this.$snackbar.add({
            type: "success",
            text: "大家都確認完畢！訂位成功！",
          });
          setTimeout(() => {
            this.$router.push("/ordercompletion");
          }, 4500);
        })
        .catch((err) => {
          this.loading = false;
          this.$snackbar.add({
            type: "error",
            text: `${err.message}\n請重新輸入訂位資訊`,
          });
          setTimeout(() => {
            this.$router.push("/teams");
          }, 4000);
        });
    },
  },
};
</script>


<style scoped>
.teamCard {
  border: 4px solid #f6d55e;
  border-radius: 4px;
  background-color: #fff;
  padding: 0;
  width: 100%;
  text-align: left;
}

.tagcolor {
  background: #4590d4;
}

.matecolor {
  background: #ffffff;
  border: 1px solid #4590d4;
  color: #4590d4;
}

.titleBar {
  background: #f6d55e;
}

.dateflex {
  justify-content: end;
}

.favBtn {
  background-color: #ffffff00;
  border: none;
  padding: 0;
}

.itemSelectName {
  width: 150px;
  flex-shrink: 0;
}

.textBox {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

@media screen and (max-width: 580px) {
  .dateflex {
    justify-content: space-between;
    margin-top: 0.5rem;
  }
  .itemSelectName {
    width: 100px;
  }
  .textBox {
    -webkit-line-clamp: 2;
  }
}
</style>