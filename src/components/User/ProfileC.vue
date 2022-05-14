<template>
  <div
    class="tab-pane fade show active rounded-bottom"
    id="profile"
    role="tabpanel"
    aria-labelledby="profile-tab"
  >
    <div class="container">
      <div class="row m-5">
        <form>
          <!-- 生日 -->
          <div class="form-group row">
            <label for="birthday" class="col-sm-10 col-form-label">生日</label>
            <div class="col-sm-2">
              <input
                type="date"
                readonly
                class="form-control-plaintext"
                id="birthday"
                v-model="userInfo.Birthday"
              />
            </div>
          </div>
          <hr />
          <!-- 信箱 -->
          <div class="form-group row">
            <div class="col-sm-10">
              <label for="email" class="col-form-label">信箱</label>
            </div>
            <div class="col-sm-2">
              <div>
                <input
                  type="email"
                  readonly
                  class="form-control-plaintext"
                  id="email"
                  v-model="userInfo.Email"
                />
              </div>
              <!-- mail已認證 -->
              <div>
                <!-- mail已認證 -->
                <button class="astext" v-if="isEmailVerified">已綁定</button>
                <!-- mail未認證 -->
                <button class="astext" v-else @click="sendEmailVerification">
                  發送認證信
                </button>
              </div>
            </div>
          </div>
          <hr />
          <!-- 密碼 -->
          <div :class="color" class="form-group row">
            <label for="password" class="col-sm-2 col-form-label">密碼</label>
            <div class="col-sm-8">
              <input
                type="password"
                readonly
                class="form-control-plaintext"
                id="password"
              />
            </div>
            <div class="col-sm-2">
              <button v-if="resetPsw" class="astext" @click="doResetPsw(false)">
                關閉
              </button>
              <button class="astext" v-else @click="doResetPsw(true)">
                修改
              </button>
            </div>
            <div v-if="resetPsw">
              <div class="container">
                <div class="row flex-column">
                  <div class="content">
                    <div class="password-input mb-4">
                      <p class="input_title mt-2">重設密碼</p>
                      <div class="form-floating col-md-6">
                        <input
                          type="password"
                          class="form-control"
                          id="floatingInput"
                          placeholder="請輸入英數字6~12位密碼"
                          pattern="[0-9a-zA-z] {6,12}"
                          v-model="newPassword"
                        />
                        <label for="floatingInput"
                          >請輸入英數字6~12位密碼</label
                        >
                        <!-- <p class="mt-2">
                            半形英文字或阿拉伯數字6位以上，最多12位
                          </p> -->
                      </div>
                    </div>
                    <div class="pw-input">
                      <div class="form-floating col-md-6">
                        <input
                          type="password"
                          class="form-control"
                          id="floatingPassword"
                          placeholder="請再次輸入密碼"
                          pattern="[0-9a-zA-z] {6,12}"
                          v-model="repeatPassword"
                        />
                        <label for="floatingPassword">請再次輸入密碼</label>
                      </div>
                    </div>
                    <div class="error-message">
                      <p></p>
                    </div>
                    <div class="btn-block d-flex mt-3 mb-4">
                      <button
                        class="astext smallBtn btn rounded-pill text-center col-md-6"
                        @click="updatePassword(newPassword)"
                      >
                        確認
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <!-- 電話  -->
          <div class="form-group row wrap d-flex justify-content-between">
            <div class="col-sm-10">
              <label for="phone" class="col-form-label">電話</label>
            </div>
            <div class="col-sm-2">
              <div v-if="!phoneEdit">
                <input
                  type="tel"
                  readonly
                  class="form-control-plaintext"
                  id="phone"
                  v-model="userInfo.Phone"
                />
                <div>
                  <button class="astext" @click="togglePhoneEdit">修改</button>
                </div>
              </div>
              <div v-else>
                <input
                  type="tel"
                  class="form-control-plaintext"
                  id="phone"
                  v-model="userInfo.Phone"
                />
                <div>
                  <button class="astext" @click="updateUserInfo">
                    修改完成
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <!-- 加入日期 -->
          <div class="form-group row">
            <label for="signupDate" class="col-sm-10 col-form-label"
              >加入日期</label
            >
            <div class="col-sm-2">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                v-model="userInfo.RegisterDate"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="m-5 text-end">
      <button class="mainBtn" @click="signOut">登出</button>
    </div>
  </div>
</template>

<script>
import { auth } from "@/firebase/config";
import { signOut } from "firebase/auth";
// import { getDoc, doc } from "firebase/firestore";
export default {
  data() {
    return {
      phoneEdit: false,
      newPassword: "",
      repeatPassword: "",
      resetPsw: false,
      color: "white",
    };
  },
  computed: {
    isEmailVerified() {
      return this.$store.state.user.emailVerified;
    },
    userInfo() {
      return this.$store.state.userInfo;
    },
    Username: {
      get() {
        return this.$store.state.userInfo.Username;
        // return this.state.userInfo.Username
      },
      set(payload) {
        this.$store.commit("updateUsername", payload);
      },
    },
    UserPhone: {
      get() {
        return this.$store.state.userInfo.Phone;
        // return this.state.userInfo.Phone;
      },
      set(payload) {
        this.$store.commit("updateUserPhone", payload);
      },
    },
  },
  methods: {
    togglePhoneEdit() {
      this.phoneEdit = !this.phoneEdit;
    },
    async sendEmailVerification() {
      try {
        await this.$store.dispatch("sendEmailVerification");
        alert("Verification email sent successfully");
      } catch (error) {
        console.log(error);
      }
    },
    async updateUserInfo() {
      try {
        // console.log(this.Username);
        await this.$store.dispatch("updateUserInfo");
        this.togglePhoneEdit();
      } catch (error) {
        console.log(error);
      }
    },
    async updatePassword(newPassword) {
      try {
        await this.$store.dispatch("updatePassword", {
          newPassword,
        });
      } catch (error) {
        console.log(error);
      }
    },
    // passwordcheck() {
    //        this.firstInputFieldSize = this.inputFieldA.length()
    //   if( this.firstInputFieldSize == secondInputFieldSize) {
    //      if(firstInputField != secondInputField) { showErrorLabel()}
    //   }
    //   最後 , 離開secondInputField focus的時候
    //   檢查fieldA == fieldB : boolean
    // },

    doResetPsw(resetPsw) {
      this.resetPsw = resetPsw;
      if (this.resetPsw == true) {
        this.color = "yellow";
      } else {
        this.color = "white";
      }
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
};
</script>
<style scoped>
.img-thumbnail {
  background-color: #4590d4;
}
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
.tab-pane {
  background: #ffffff;
  padding: 1rem;
}
.astext {
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  color: #4590d4;
}
input {
  border: none;
  outline: none;
}
.input_title {
  color: #767676;
  font-size: 20px;
  font-weight: bolder;
}
label {
  color: rgb(150, 150, 150);
}
.content1 {
  background-color: #ffffff;
  margin-top: 4rem;
  box-shadow: 0px 4px 4px 2px rgb(200, 200, 200);
  border-radius: 16px;
}
.tab-content {
  margin-bottom: 10rem;
  box-shadow: 0px 4px 4px 2px rgb(200, 200, 200);
  background-color: #ffffff;
  border-radius: 0px 0px 16px 16px;
}
p {
  color: #767676;
}

h1 {
  color: rgb(69, 144, 212);
}
h4 {
  color: #767676;
}
.couponTitle {
  color: #ffffff;
}
.white {
  background-color: #ffffff;
}
.yellow {
  background-color: rgb(253, 243, 209);
}
.send {
  background-color: #4590d4;
}
.points {
  margin: 20px 60px;
}
.editInput {
  border-radius: 100px;
  border: 3px solid rgb(246, 213, 94);
  height: 3.5rem !important;
  padding-left: 1rem !important;
  text-align: center;
}
.smallBtn {
  font-size: 1.3rem;
  font-weight: 500;
  background-color: #f6d55e;
  color: #4590d4;
  width: 150px;
  max-width: 200px;
  text-align: center;
  line-height: 1.8;
  box-shadow: 0 4px 6px rgb(180, 180, 180);
  border-radius: 100rem;
  border: none;
  text-decoration: none;
}
</style>
