<template>
  <Loading v-if="isLoading" />
  <div class="container content1">
    <div class="row">
      <!-- 頭像 -->
      <div class="mt-5 text-center upload-photo">
        <label>
          <img
            @click="toggleUserImgEdit"
            :src="userInfo.PhotoURL"
            class="rounded-circle img-thumbnail"
          />
          <input
            v-if="userImgEdit"
            @change="fileChange"
            type="file"
            ref="profilePhoto"
            class="profile-photo"
            accept=".png, .jpg, ,jpeg"
          />
          <button
            v-if="userImgEdit"
            @click="uploadProfilePhoto"
            class="smallBtn mt-2"
          >
            <b>上傳新頭像</b>
          </button>
        </label>
      </div>
      <!-- 用戶名 -->
      <div class="userName mt-4 wrap d-flex justify-content-center">
        <div>
          <h1>
            <b v-if="!usernameEdit"> {{ userInfo.Username }}</b>
          </h1>
          <input
            type="text"
            class="editInput"
            v-if="usernameEdit"
            v-model="userInfo.Username"
          />
          <button
            class="smallBtn m-3"
            v-if="usernameEdit"
            @click="updateUserInfo"
          >
            <b>修改完成</b>
          </button>
        </div>

        &emsp;
        <!-- 點擊後切換成input -->
        <!-- 更改用戶名icon -->
        <div>
          <img
            src="../../assets/icon/edit-text.svg"
            alt="edit"
            v-if="!usernameEdit"
            @click="toggleUsernameEdit"
          />
        </div>
      </div>
      <!-- 點數 -->
      <div class="wrap d-flex justify-content-center mb-4">
        <div>
          <h4>點數:&emsp;</h4>
        </div>
        <div>
          <h4>{{ userInfo.Points }}</h4>
        </div>
      </div>
    </div>
  </div>
  <!-- TAB標題 -->
  <div class="container p-0 mt-2">
    <ul class="nav nav-tabs nav-justified p-0" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          id="profile-tab"
          data-bs-toggle="tab"
          data-bs-target="#profile"
          type="button"
          role="tab"
          aria-controls="profile"
          aria-selected="true"
        >
          個人資料
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="coupon-tab"
          data-bs-toggle="tab"
          data-bs-target="#coupon"
          type="button"
          role="tab"
          aria-controls="coupon"
          aria-selected="false"
        >
          優惠券
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="points-tab"
          data-bs-toggle="tab"
          data-bs-target="#points"
          type="button"
          role="tab"
          aria-controls="points"
          aria-selected="false"
        >
          點數紀錄
        </button>
      </li>
    </ul>

    <!-- 個人資料 content -->
    <div class="tab-content" id="myTabContent">
      <ProfileC></ProfileC>
      <!-- 優惠券content -->
      <CouponC></CouponC>
      <!-- 點數紀錄content -->
      <PointC></PointC>
    </div>
  </div>
</template>

<script>
import ProfileC from "@/components/User/ProfileC";
import CouponC from "@/components/User/CouponC";
import PointC from "@/components/User/PointC";
import Loading from "@/components/LoadingComponent.vue";
import { db } from "@/firebase/config";
// import { signOut } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";

export default {
  data() {
    return {
      usernameEdit: false,
      userImgEdit: false,
    };
  },
  components: {
    Loading,
    ProfileC,
    CouponC,
    PointC,
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
    userInfo() {
      return this.$store.state.userInfo;
    },
    PhotoURL: {
      get() {
        return this.$store.state.userInfo.PhotoURL;
      },
      set(payload) {
        this.$store.commit("updatePhotoURL", payload);
      },
    },
  },
  methods: {
    toggleUsernameEdit() {
      this.usernameEdit = !this.usernameEdit;
    },
    toggleUserImgEdit() {
      this.userImgEdit = !this.userImgEdit;
    },
    fileChange(event) {
      this.file = event.target.files[0];
      const fileName = this.file.name;
      //console.log(fileName);
      this.$store.commit("fileNameChange", fileName);
      this.$store.commit("updatePhotoURL", URL.createObjectURL(this.file));
    },

    async updateUserInfo() {
      try {
        // console.log(this.Username);
        await this.$store.dispatch("updateUserInfo");
        this.toggleUsernameEdit();
      } catch (error) {
        console.log(error);
      }
    },
    async uploadProfilePhoto() {
      //console.log(this.file);
      //console.log(this.$store.state.PhotoName);
      if (this.file) {
        try {
          await this.$store.dispatch("uploadProfilePhoto", this.file);
          this.toggleUserImgEdit();
        } catch (error) {
          console.log(error);
        }
      }
    },
    async getUserInfo() {
      // console.log(this.$store.state.user.uid);
      // const getUserInfo = await getDoc(doc(db, "Account", this.user.uid));
      const getUserInfo = await getDoc(
        doc(db, "Account", this.$store.state.user.uid)
      );
      this.$store.state.userInfo = getUserInfo.data();
    },
  },
  mounted() {
    this.getUserInfo();
  },
};
</script>

<style scoped>
.img-thumbnail {
  background-color: #4590d4;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  height: 300px;
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
.profile-photo {
  display: none;
}
</style>
