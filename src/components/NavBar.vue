<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand h-48" href="/"
        ><img src="../assets/logo.svg" alt="logo"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul
          class="navbar-nav navbar-end ms-auto mb-2 mb-lg-0 justify-content-end"
        >
          <!-- mobile登入後出現 -->
          <li class="nav-item" v-if="user">
            <router-link
              to="/user"
              class="nav-link userinfo pb-0 d-block d-md-none"
            >
              <div class="row">
                <div class="col-2">
                  <img
                    class="avator-mobile rounded-circle mx-1"
                    :src="userInfo.PhotoURL"
                  />
                </div>
                <div class="col-10 ps-4">
                  <h5>{{ userInfo.Username }}</h5>
                  <p>{{ userInfo.Email }}</p>
                </div>
              </div>
              <div class="nav-link text-end pe-4">
                <span @click="signOut"> 登出 </span>
              </div>
            </router-link>
          </li>
          <!-- mobile登入後出現 end-->

          <!-- mobile登入前出現 -->
          <li class="nav-item" v-if="!user">
            <router-link
              to="/login"
              class="nav-link userinfo d-block d-md-none"
            >
              <div class="row">
                <div class="col-2">
                  <!-- mobile未登入預設頭像 -->
                  <img
                    class="avator-mobile rounded-circle mx-1"
                    src="../assets/user.svg"
                    alt="avator"
                  />
                </div>
                <div class="col-10 ps-4">
                  <h5>註冊 | 登入</h5>
                </div>
              </div>
            </router-link>
          </li>
          <!-- mobile登入前出現 end-->

          <!-- 一般使用者選項 -->
          <li class="nav-item">
            <router-link to="/stores" class="nav-link">店家搜</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/teams" class="nav-link">揪團搜</router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link to="/" a class="nav-link">桌遊資訊</router-link>
          </li> -->
          <li class="nav-item">
            <router-link to="/orderlist" a class="nav-link"
              >訂位紀錄</router-link
            >
          </li>
          <!-- 一般使用者選項 end-->

          <!-- 帳號判定選項 -->
          <li class="nav-item">
            <router-link to="/" a class="nav-link">店家後台</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" a class="nav-link">管理員後台</router-link>
          </li>
          <!-- 帳號判定選項 end-->

          <!-- desktop登入後出現 -->
          <li class="nav-item" v-if="user">
            <router-link to="/user" a class="nav-link d-none d-md-block"
              >嗨! {{ userInfo.Username }}
              <img
                class="avator rounded-circle mx-1"
                :src="userInfo.PhotoURL"
              />
            </router-link>
          </li>
          <li class="nav-item" v-if="user" @click="signOut">
            <router-link to="/" class="nav-link d-none d-md-block">
              登出
            </router-link>
          </li>
          <!-- desktop登入後出現 end-->

          <!-- desktop登入前出現 -->
          <li class="nav-item">
            <router-link
              to="/login"
              v-if="!user"
              a
              class="nav-link d-none d-md-block"
              >註冊 | 登入
              <!-- desktop未登入預設頭像 -->
              <img
                class="avator d-inline-block rounded-circle mx-1"
                src="../assets/user.svg"
                alt="avator"
              />
            </router-link>
          </li>
          <!-- desktop登入前出現 end-->
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { getDoc, doc } from "firebase/firestore";
import { db } from "@/firebase/config";
import { auth } from "@/firebase/config";
import { signOut } from "firebase/auth";

export default {
  data() {
    return {
      userInfo: {},
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    async getUserInfo() {
      const getUserInfo = await getDoc(doc(db, "Account", this.user.uid));
      this.userInfo = getUserInfo.data();
      // console.log(this.userInfo);

      // 先取得UserId起頭，判定是否為店家
      // const str = String(this.userInfo.UserId);
      // console.log(str.charAt(0));

      // if (str.charAt(0) != 9) {
      //   //把使用者趕回首頁
      //   this.$snackbar.add({
      //     type: "error",
      //     text: "無訪問店家後台權限",
      //   });
      //   setTimeout(() => {
      //     this.$router.push("/");
      //   }, 4500);
      // } else {
      //   執行正常行為;
      // }
    },
    async signOut() {
      signOut(auth)
        .then(() => {
          this.$store.commit("clearUserInfo");
          console.log("user info cleared");
          this.$router.push("/");
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  },
  mounted() {
    this.getUserInfo();
  },
};
</script>

<style scoped>
nav {
  background-color: #f6d55e;
}
.nav-link {
  color: #4590d4 !important;
}
.avator {
  width: 24px;
  height: 24px;
  border: 2px #4590d4 solid;
}
.avator-mobile {
  width: 54px;
  height: 54px;
  border: 2px #4590d4 solid;
}
.userinfo {
  border-bottom: 1px #4590d4 solid;
  overflow-wrap: break-word;
}
/* focus effect*/
.nav-link:focus {
  background-color: #f2c624;
  color: #ffffff !important;
  border-radius: 0.2rem;
}
.nav-link:focus .avator {
  border: 2px #ffffff solid;
}
.nav-link:focus .avator-mobile {
  border: 2px #ffffff solid;
}
.userinfo:focus {
  border-bottom: 1px #ffffff solid;
}
</style>
