<template>
  <div class="container">
    <Loading v-show="loading" />
    <div class="row justify-content-center">
      <div class="userEntry-wrapper row flex-column align-items-center">
        <div class="main">
          <h1 class="title text-center">重新設定密碼</h1>
          <div class="content">
            <div class="email-input mb-4">
              <p class="input_title">Email</p>
              <div class="form-floating">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  v-model="emailSend"
                />
                <label for="floatingInput">name@example.com</label>
              </div>
            </div>
            <p class="msg">
              按下重新設定密碼後，會收到一封來自
              noreply@bgip-2205.firebaseapp.com的信件，
              請事先確認您的電子信箱過濾設定以確保認證電子信件能順利送達，點擊連結後即可進入重設密碼頁面。
            </p>
            <div class="error-message">
              <p>{{ error }}</p>
            </div>
            <div class="btn-block d-flex justify-content-center mt-5">
              <router-link
                to=""
                class="mainBtn text-center"
                @click="forgetPassword(emailSend)"
              >
                重新設定密碼
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { auth } from "@/firebase/config";
import { sendPasswordResetEmail } from "firebase/auth";

export default {
  components: {},
  data() {
    return {
      emailSend: null,
      // error: "",
      loading: null,

    };
  },
  methods: {
    async forgetPassword(emailSend) {
      this.loading = true
      sendPasswordResetEmail(auth, emailSend)
        .then(() => {
          this.loading = false
          this.$snackbar.add({
            type: "success",
            text: "已為您寄出重設密碼的電子郵件！",
          });
          this.$router.push("/login")
          // console.log("password reset email sent!");
        })
        .catch((err) => {
          this.$snackbar.add({
            type: "error",
            text: `${err.message}`,
          });
          // console.log(err.message);
        });

      // try {
      //   await this.$store.dispatch("forgetPassword", {
      //     emailSend: this.emailSend,
      //   });
      //   this.$router.push("login");
      // } catch (err) {
      //   this.$snackbar.add({
      //     type: "error",
      //     text: `${err.message}`,
      //   });
      //   // this.error = err.message;
      // }
    },
  },
};
</script>

<style scoped>
.title {
  color: rgb(69, 144, 212);
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
  font-size: 14px;
}
.send {
  background-color: rgb(246, 213, 94);
  color: rgb(69, 144, 212);
  width: 70%;
  text-align: center;
  font-weight: bolder;
  font-size: 24px;
  line-height: 1.8;
  box-shadow: 0 4px 6px rgb(180, 180, 180);
}
</style>

    