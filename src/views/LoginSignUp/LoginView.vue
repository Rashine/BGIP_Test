<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="userEntry-wrapper row flex-column align-items-center">
        <h1 class="title text-center">會員登入</h1>
        <div class="content">
          <div class="email-input mb-4">
            <p class="input_title">電子信箱</p>
            <div class="form-floating">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                v-model="email"
              />
              <label for="floatingInput">name@example.com</label>
            </div>
          </div>
          <div class="pw-input mb-4">
            <p class="input_title">密碼</p>
            <div class="form-floating">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
                v-model="password"
              />
              <label for="floatingPassword">請輸入密碼</label>
            </div>
          </div>
          <div class="error-message" v-if="error">
            <p>{{ errorMsg }}</p>
          </div>
          <div class="btn-block d-flex justify-content-center mt-5">
            <button class="mainBtn text-center" @click="login">
              登&emsp;&emsp;入
            </button>
          </div>
          <div class="toggle-form d-flex justify-content-center mb-3 p-2">
            <router-link to="signup" style="text-decoration: none"
              ><span>註冊會員</span></router-link
            >&emsp;<router-link to="emailsend" style="text-decoration: none"
              ><span>忘記密碼?</span></router-link
            >
          </div>
        </div>
        <hr
          style="border: 2px solid rgb(246, 213, 94); color: rgb(246, 213, 94)"
        />
        <div class="email-input mb-4">
          <p class="input_title">或使用</p>
          <div class="btn-block d-flex justify-content-center mt-2">
            <button class="googleBtn text-center" @click="googleLogin">
              <img src="../../assets/icon/google.png" alt="" width="" />
              google登入
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { auth } from "@/firebase/config";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

export default {
  components: {},
  data() {
    return {
      email: null,
      password: null,
      error: null,
      errorMsg: "",
    };
  },
  methods: {
    // async handleSubmit() {
    //   try {
    //     await this.$store.dispatch("login", {
    //       email: this.email,
    //       password: this.password,
    //     });
    //     this.$router.push("/");
    //   } catch (err) {
    //     this.error = err.message;
    //   }
    // },
    async login() {
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          onAuthStateChanged(auth, (user) => {
            if (user) {
              this.$store.commit("setUser", user);
              this.$router.push("/")
            }
          });
        })
        .catch((err) => {
          this.error = true;
          this.errorMsg = err.message;
          setTimeout(() => {
            this.error = false;
          }, 3000);
        });
    },
    async googleLogin() {
      try {
        await this.$store.dispatch("googleLogin");
        this.$router.push("/");
      } catch (err) {
        this.error = err.message;
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
  font-size: 14px;
}
.googleBtn {
  font-size: 1.8rem;
  /* font-weight: bolder; */
  background-color: white;
  color: #4590d4;
  width: 300px;
  max-width: 300px;
  text-align: center;
  line-height: 1.8;
  box-shadow: 0 4px 6px rgb(180, 180, 180);
  border-radius: 100rem;
  border: 3px solid rgb(246, 213, 94);
  text-decoration: none;
}
</style>

    