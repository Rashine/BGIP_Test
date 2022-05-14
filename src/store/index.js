import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import { auth, db, storage } from "@/firebase/config";
import {
  //createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  // sendPasswordResetEmail,
  signOut,
  sendEmailVerification,
  reauthenticateWithCredential,
  updatePassword,
  EmailAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import {
  setDoc,
  // getDoc,
  updateDoc,
  doc,
  // collection,
  // getDocs,
  // query,
  // orderBy,
} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const providerGoogle = new GoogleAuthProvider();

export default createStore({
  plugins: [createPersistedState()],
  state: {
    user: null,
    isLoading: null,
    //userInfo: {},
    // allStores: [],
    // currentStore: [],
    bookingStoreID: null,
    orderCheckData: {},
    teamData: {},
    teamContact: {},
    PhotoName: null,
    // bookingLists: [],
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
      console.log("user state changed:", state.user.uid);
      //console.log(state.user.emailVerified)
    },
    setAuthIsReady(state, payload) {
      state.authIsReady = payload;
    },
    clearUserInfo(state) {
      state.user = null;
      state.userInfo = {};
    },
    setOrderCheckData(state, payload) {
      state.orderCheckData = payload;
      // console.log(state.orderCheckData)
    },
    clearOrderCheckData(state) {
      state.orderCheckData = {};
      state.teamData = {};
      state.teamContact = {};
    },
    setTeamData(state, payload) {
      state.teamData = payload;
    },
    setTeamContact(state, payload) {
      state.teamContact = payload;
    },
    updateUsername(state, payload) {
      state.userInfo.Username = payload;
    },
    updateUserPhone(state, payload) {
      state.userInfo.Phone = payload;
    },
    updatePhotoURL(state, payload) {
      state.userInfo.PhotoURL = payload;
    },
    fileNameChange(state, payload) {
      state.PhotoName = payload;
    },
    setBookingStoreID(state, payload) {
      state.bookingStoreID = payload;
    },
  },
  actions: {
    // User
    // async signup(context, userInfo) {
    //   console.log("signup action start");
    //   console.log(userInfo);
    //   this.state.isLoading = true;
    //   const res = await createUserWithEmailAndPassword(
    //     auth,
    //     userInfo.email,
    //     userInfo.password
    //   ).catch((err) => {
    //     console.log(err);
    //     this.state.isLoading = false;
    //   });
    //   if (res) {
    //     var date = new Date();
    //     var dateresult = date.toDateString();
    //     console.log("signup complete!");
    //     await setDoc(doc(db, "Account", res.user.uid), {
    //       PhotoURL:
    //         "https://firebasestorage.googleapis.com/v0/b/bgip-2205.appspot.com/o/Assets%2Fconfrontation.png?alt=media&token=ebbe1197-ec70-42a7-9525-7f7a94539c44",
    //       Username: userInfo.username,
    //       Email: userInfo.email,
    //       Role: "一般用戶",
    //       Phone: userInfo.phone,
    //       Birthday: userInfo.birthday,
    //       Points: 0,
    //       Coupons: [],
    //       FavStores: [],
    //       FavJoins: [],
    //       FavArticles: [],
    //       RegisterDate: dateresult,
    //       PunishDate: "",
    //     });
    //     console.log("userInfo complete!");
    //     this.state.isLoading = false;
    //   } else {
    //     this.state.isLoading = false;
    //     throw new Error("Couldn't complete Signup!");
    //   }
    // },
    async login(store, { email, password }) {
      signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          console.log(res.user.uid);
          onAuthStateChanged(auth, (user) => {
            if (user) {
              store.commit("setUser", user);
              store.dispatch("getUserInfo", user.uid);
            }
          });
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    async googleLogin() {
      signInWithPopup(auth, providerGoogle)
        .then((res) => {
          const user = res.user;
          var date = new Date();
          var dateresult = date.toDateString();
          //console.log(user);
          setDoc(doc(db, "Account", user.uid), {
            PhotoURL: user.photoURL,
            Username: user.displayName,
            Email: user.email,
            Role: "一般用戶",
            Phone: "",
            Birthday: "",
            Points: 0,
            Coupons: [],
            FavStores: [],
            FavJoins: [],
            FavArticles: [],
            RegisterDate: dateresult,
            PunishDate: "",
          });
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    // async getUserInfo({state}, uid) {
    //   const getUserInfo = await getDoc(doc(db, "Account", uid));
    //   state.userInfo = getUserInfo.data();
    //   console.log("get user", this.state.displayName, "'s info");
    //   console.log(this.state.userInfo)
    // },
    // async forgetPassword(email) {
    //   sendPasswordResetEmail(auth, email)
    //     .then(() => {
    //       console.log("password reset email sent!");
    //     })
    //     .catch((err) => {
    //       console.log(err.message);
    //     });
    // },
    async signOut() {
      signOut(auth)
        .then(() => {
          console.log("sign out");
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    async sendEmailVerification() {
      sendEmailVerification(auth.currentUser)
        .then(() => {
          console.log("verification email sent!");
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    async updateUserInfo(context) {
      //this.state.isLoading = true;
      const uid = this.state.user.uid;
      //console.log(this.state.userInfo.Username);
      await updateDoc(doc(db, "Account", uid), {
        Username: this.state.userInfo.Username,
        Phone: this.state.userInfo.Phone,
      })
        .then(() => {
          console.log("update user info complete!");
          context.dispatch("getUserInfo", uid);
          this.state.isLoading = false;
        })
        .catch((err) => {
          console.log(err.message);
          this.state.isLoading = false;
        });
    },
    async updatePassword(context, { oldPassword, newPassword }) {
      const user = auth.currentUser;
      const authCredential = EmailAuthProvider.credential(
        user.email,
        oldPassword
      );
      // console.log(authCredential);
      await reauthenticateWithCredential(user, authCredential)
        .then(() => {
          console.log("User re-authenticated.");
          updatePassword(user, newPassword).then(() => {
            console.log("password updated!");
          });
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    async uploadProfilePhoto(context, payload) {
      this.state.isLoading = true;
      const storageRef = ref(
        storage,
        `/UserProfilePhoto/${this.state.PhotoName}`
      );
      const uploadTask = uploadBytesResumable(storageRef, payload);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          console.log(snapshot);
        },
        (err) => {
          console.log(err);
          this.state.isLoading = false;
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          await updateDoc(doc(db, "Account", this.state.user.uid), {
            PhotoURL: downloadURL,
          });
          await context.dispatch("getUserInfo", this.state.user.uid);
          this.state.isLoading = false;
        }
      );
    },
    // 訂單
    // async getAllStore({ state }) {
    //   const dataBase = await collection(db, "Store");
    //   const dbResult = await getDocs(query(dataBase, orderBy("StoreName")));
    //   dbResult.docs.forEach((doc) => {
    //     state.allStores.push({ ...doc.data() });
    //   });
    // },
    // async getSingleStore({ state }, payload) {
    //   console.log(payload);
    //   const docRef = await doc(db, "Store", String(payload));
    //   getDoc(docRef).then((doc) => {
    //     console.log(doc.data(), doc.id);
    //     state.currentStore = doc.data();
    //   });
    // },
    //接收訂單
    // async getBookingList({ state }) {
    //   const dataBase = await collection(db, "BookingLists");
    //   const dbResult = await getDocs(query(dataBase, orderBy("BookingListId")));
    //   dbResult.docs.forEach((doc) => {
    //     state.bookingLists.push({ ...doc.data() });
    //   });
    // },
  },
  modules: {},
});
