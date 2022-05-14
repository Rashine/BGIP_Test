<template>
  <div class="BG">
    <div class="middle">
      <NavBar />
      <router-view />
    </div>
    <div class="footer"></div>
    <teleport to="body">
      <vue3-snackbar top :duration="3500"></vue3-snackbar>
    </teleport>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import { auth } from "@/firebase/config";
import { onAuthStateChanged } from "firebase/auth";

export default {
  components: {
    NavBar,
  },
  created() {
    // this.$store.dispatch("getAllStore");
    // console.log(this.$store.state.allStores);
    if (!this.$store.state.user) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.$store.commit("setUser", user);
          this.$store.dispatch("getUserInfo", user.uid);
        }
      });
    }
  },
};
</script>

<style>
:root {
  --primary-color: rgb(246, 213, 94);
  --accent-color: rgb(69, 144, 212);
}
.BG {
  background-color: rgb(253, 243, 209);
  min-height: 100vh;
}
.middle {
  min-height: 90vh;
}
.footer {
  height: 10vh;
  background-color: #f6d55e;
}

/* Font Style */
h1 {
  font-size: 3rem !important;
  font-weight: 900 !important;
  color: #4590d4;
}
h2 {
  font-size: 1.5rem !important;
  font-weight: 900 !important;
}
p,
div,
a,
span {
  font-size: 1.3rem;
}

/* 特殊字體大小 */
/* 16號字 */
.font16 {
  font-size: 1rem;
}
/* 32號字 較少見 */
.font32 {
  font-size: 2rem;
}
/* 粗體 */
.weightBlack {
font-weight: 900;
}

/* 灰字顏色 */
.grayColor {
  color: #767676;
}
.accentColor {
  color: #4590d4;
}

/* 標籤功能 */
.tag {
  font-size: 1rem;
  border-radius: 0.8em;
  background-color: rgb(69, 144, 212);
  padding: 0.1em 0.6em;
  color: #fff;
  margin: 0.2rem;
}

/* 正常按鈕 */
.mainBtn {
  font-size: 2rem;
  font-weight: bolder;
  background-color: #f6d55e;
  color: #4590d4;
  width: 300px;
  max-width: 300px;
  text-align: center;
  line-height: 1.8;
  box-shadow: 0 4px 6px rgb(180, 180, 180);
  border-radius: 100rem;
  border: none;
  text-decoration: none;
}

/* 小(手機)按鈕 */
.smallBtn {
  font-size: 1.3rem;
  font-weight: 500;
  background-color: #f6d55e;
  color: #4590d4;
  width: 200px;
  max-width: 200px;
  text-align: center;
  line-height: 1.8;
  box-shadow: 0 4px 6px rgb(180, 180, 180);
  border-radius: 100rem;
  border: none;
  text-decoration: none;
}

/* 底框 */
.userEntry-wrapper {
  background-color: rgb(255, 255, 255);
  margin-top: 8vh !important;
  margin-bottom: 8vh !important;
  padding: 6vh 6vw !important;
  border-radius: 12px;
  box-shadow: 0px 4px 4px 2px rgb(200, 200, 200);
  overflow: hidden; /* 切邊 */
  flex: auto;
  justify-content: center;
  align-items: center;
}
.wrapper {
  background-color: rgb(255, 255, 255);
  margin-top: 8vh !important;
  margin-bottom: 8vh !important;
  padding: 6vh 6vw !important;
  border-radius: 12px;
  box-shadow: 0px 4px 4px 2px rgb(200, 200, 200);
  overflow: hidden; /* 切邊 */
  flex: auto;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 580px) {
  h1 {
    font-size: 2.5rem !important;
  }

  p,
  div,
  a,
  span {
    font-size: 1rem;
  }

  .userEntry-wrapper {
    width: 90vw !important;
  }
  .wrapper {
    width: 90vw !important;
  }

  .mainBtn {
    font-size: 1.3rem;
    font-weight: 700;
    max-width: 200px;
  }
}
</style>
