<template>
  <div class="home">
    <button @click="signOut" class="mainBtn">登出</button>
  </div>
</template>

<script>
import { auth } from "@/firebase/config";
import { signOut } from "firebase/auth";

export default {
  name: "HomeView",
  components: {},
  methods: {
    async signOut() {
      signOut(auth)
        .then(() => {
          this.$store.commit("clearUserInfo")
          console.log("user info cleared")
          this.$router.push("/")
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  },
};
</script>
