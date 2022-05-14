<template>
  <div class="container">
    <div class="row justify-content-center">
      <Loading v-show="loading" />
      <div class="userEntry-wrapper">
        <h1 class="title text-center">加入會員</h1>
        <div class="content">
          <div class="mb-4">
            <p class="input_title">電子信箱</p>
            <div class="form-floating">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                v-model="userInfo.email"
              />
              <label for="floatingInput">請輸入電子信箱</label>
            </div>
          </div>
          <div class="mb-4">
            <p class="input_title">密碼</p>
            <div class="form-floating">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
                v-model="userInfo.password"
              />
              <label for="floatingPassword">請輸入密碼</label>
            </div>
            <p class="msg mb-2">半形英文字或阿拉伯數字6位數以上，最多12位</p>
            <div class="form-floating">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="PasswordCheck"
                v-model="userInfo.passwordCheck"
                @keyup="passwordCheck"
              />
              <label for="floatingPassword">請再次輸入密碼</label>
            </div>
          </div>
          <div class="mb-4">
            <p class="input_title">手機號碼</p>
            <div class="form-floating">
              <input
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="0912345678"
                v-model="userInfo.phone"
              />
              <label for="floatingInput">請輸入手機號碼</label>
            </div>
          </div>
          <div class="mb-4">
            <p class="input_title">暱稱</p>
            <div class="form-floating">
              <input
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="王小明"
                v-model="userInfo.username"
              />
              <label for="floatingInput">中英文字8字元以內，後續可修改</label>
            </div>
          </div>
          <div class="mb-4">
            <p class="input_title">生日</p>
            <div class="form-floating">
              <input
                type="date"
                class="form-control"
                id="floatingInput"
                placeholder="2022/xx/xx"
                v-model="userInfo.birthday"
              />
              <label for="floatingInput">請選擇生日</label>
            </div>
          </div>
          <hr />
          <div :class="{ invisible: !error }" class="err-message d-flex">
            <div><span>Error: </span>{{ this.errorMsg }}</div>
          </div>
          <div class="form-check d-flex justify-content-center my-4">
            <input
              class="form-check-input me-2"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              checked
            />
            <p class="form-check-label" for="flexCheckChecked">
              我同意 <router-link to="/terms">使用條約</router-link>
            </p>
          </div>
          <div class="text-center my-3">
            <button class="mainBtn" @click="handleSubmit(userInfo)">
              註冊
            </button>
          </div>
          <div class="toggle-form d-flex justify-content-center">
            <router-link to="login">已有會員？登入</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from "@/components/LoadingComponent.vue";
import { auth, db } from "@/firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
export default {
  components: { Loading },
  data() {
    return {
      loading: null,
      error: null,
      errorMsg: "",
      userInfo: {
        email: null,
        password: null,
        passwordCheck: null,
        phone: null,
        username: null,
        birthday: null,
      },
    };
  },
  computed: {
    // isLoading() {
    //   return this.$store.state.isLoading;
    // },
  },
  methods: {
    getRandom(x) {
      return Math.floor(Math.random() * x) + 1;
    },
    getRandomID(ID) {
      var n = 0;
      for (var i = 0; i < 4; i++) {
        n = this.getRandom(9);
        ID += String(n);
      }
      this.bookingListId = ID;
      console.log(this.bookingListId);
      return ID;
    },
    async handleSubmit(userInfo) {
      if (
        userInfo.email === null ||
        userInfo.password === null ||
        userInfo.passwordCheck === null ||
        userInfo.phone === null ||
        userInfo.nickName === null ||
        userInfo.birthday === null
      ) {
        // this.error = true;
        // this.errorMsg = "請務必填寫所有欄位";
        // setTimeout(() => {
        //   this.error = false;
        // }, 3000);
        this.$snackbar.add({
          type: "error",
          text: "請務必填寫所有欄位",
        });
        return;
      } else if (userInfo.password.length <= 6) {
        // this.error = true;
        // this.errorMsg = "密碼長度過短，請重新輸入";
        this.$snackbar.add({
          type: "error",
          text: "密碼長度過短，請重新輸入",
        });
        this.userInfo.password = "";
        this.userInfo.passwordCheck = "";
        // setTimeout(() => {
        //   this.error = false;
        // }, 3000);
        return;
      } else if (userInfo.passwordCheck !== userInfo.password) {
        // this.error = true;
        // this.errorMsg = "兩次密碼不一致，請重新輸入";
        this.$snackbar.add({
          type: "error",
          text: "兩次密碼不一致，請重新輸入",
        });
        this.userInfo.password = "";
        this.userInfo.passwordCheck = "";
        // setTimeout(() => {
        //   this.error = false;
        // }, 3000);
        return;
      } else if (userInfo.phone.length !== 10) {
        // this.error = true;
        // this.errorMsg = "手機號碼格式錯誤";
        // setTimeout(() => {
        //   this.error = false;
        // }, 3000);
        this.$snackbar.add({
          type: "error",
          text: "手機號碼格式錯誤",
        });
        return;
      } else {
        // try {
        //   await this.$store.dispatch("signup", userInfo);
        //   this.$router.push("/user");
        // } catch (error) {
        //   console.log(error);
        // }
        this.loading = true;
        const res = await createUserWithEmailAndPassword(
          auth,
          userInfo.email,
          userInfo.password
        ).catch((err) => {
          this.loading = false;
          // this.error = true;
          // this.errorMsg = err.message;
          this.$snackbar.add({
            type: "error",
            text: `${err.message}`,
          });
          return;
        });
        if (res) {
          var date = new Date();
          var dateResult = date.toDateString();
          setDoc(doc(db, "Account", res.user.uid), {
            PhotoURL:
              "https://firebasestorage.googleapis.com/v0/b/bgip-2205.appspot.com/o/Assets%2Fconfrontation.png?alt=media&token=ebbe1197-ec70-42a7-9525-7f7a94539c44",
            UserId: this.getRandomID("1000"),
            Username: userInfo.username,
            Email: userInfo.email,
            Role: "一般用戶",
            Phone: userInfo.phone,
            Birthday: userInfo.birthday,
            Points: 0,
            Coupons: [],
            FavStores: [],
            FavJoins: [],
            FavArticles: [],
            RegisterDate: dateResult,
            PunishDate: "",
          })
            .then(() => {
              this.loading = false;
              this.$router.push("/");
            })
            .catch((err) => {
              this.loading = false;
              // this.error = true;
              // this.errorMsg = error.message;
              this.$snackbar.add({
                type: "error",
                text: `${err.message}`,
              });
            });
        }
      }
    },
  },
};
</script>

<style scoped>
.title {
  margin-bottom: 4vh;
}
.form-control {
  border-radius: 100px;
  border: 3px solid rgb(246, 213, 94);
  height: 3.5rem !important;
  padding-left: 2rem !important;
}
.form-control:focus {
  border-color: rgb(246, 213, 94, 0.6);
  box-shadow: 0 0 2px 4px rgba(246, 213, 94, 0.3);
}
label {
  color: rgb(150, 150, 150);
  margin-left: 1.3rem;
}
.input_title {
  padding-left: 2rem;
  margin-bottom: 2px;
}
.msg {
  padding-left: 20px;
  margin-bottom: 0px;
  color: rgb(150, 150, 150);
  font-size: 16px;
}
.warning-msg {
  padding-left: 20px;
  margin-bottom: 0px;
  color: #ff0000;
  font-size: 14px;
}
.form-check-input:checked {
  background-color: rgb(69, 144, 212);
  border: rgb(69, 144, 212);
}

.invisible {
  opacity: 0 !important;
}

.err-message {
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  color: #fff;
  bottom: 10px;
  background-color: #777777;
  opacity: 1;
  transition: 0.5s ease all;
}

.err-message div {
  color: #fff;
}
.err-message span {
  font-weight: 600;
}
</style>

    