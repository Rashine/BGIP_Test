<template>
  <div class="store-view container">
    <div class="row justify-content-center">
      <div class="wrapper col-10">
        <!-- <h1>{{ currentStore.StoreName }}</h1>
        <button @click="redirectBooking">我要訂位</button> -->
        <div>
          <div>
            <h1>Name</h1>
            <div class="d-flex align-items-center gap-3">
              <p class="grayColor">地址</p>
              <span class="grade-font accentColor">查看路線</span>
            </div>
            <div class="d-flex grade-font align-items-center gap-2">
              <div>
                ⭐️⭐️⭐️⭐️⭐️
              </div>
              <div class="tag">
                9.2
              </div>
              <div class="grade-font accentColor">
                非常棒！
              </div>
              <div class="grade-font grayColor">
                50則評論
              </div>
            </div>
            <div class="d-flex">
              <div class="tag">
                <p>簡餐</p>
              </div>
            </div>
          </div>
          <hr>
          <div class="row gx-5 grayColor">
            <div class="col-6 d-flex justify-content-between">
              <div class="d-flex align-items-center">
              營業時段
              </div>
              <div>
                <div class="d-flex">
                  <div>星期</div>
                  <div>時間</div>
                </div>
                <div class="d-flex">
                  <div>星期</div>
                  <div>時間</div>
                </div>
                <div class="d-flex">
                  <div>星期</div>
                  <div>時間</div>
                </div>
              </div>
            </div>
            <div class="col-6 d-flex justify-content-between">
              <div class="d-flex align-items-center">
              收費方式
              </div>
              <div>
                <div class="d-flex">
                  <div>星期</div>
                  <div>時間</div>
                </div>
                <div class="d-flex">
                  <div>星期</div>
                  <div>時間</div>
                </div>
                <div class="d-flex">
                  <div>星期</div>
                  <div>時間</div>
                </div>
              </div>
            </div>
          </div>
          <hr>
          <div class="row gx-5">
            <div class="col-8">
              <div class="mb-3 accent-title">
              <p>店家介紹</p>
              </div>
              <div class="slider">
                <input v-for="(img,index) in imgs" :key="img" type="radio" name="slider" :id="index" @click="i=index" :checked="i===index">
                <div class="slides-group d-flex">
                  <div class="left-arrow d-flex align-items-center" @click="getOrder('Prev',imgs)">
                    ＜
                  </div>
                  <div class="slides">
                    <div class="overflow d-flex">
                      <img :src="img" alt="" v-for="img in imgs" :key="img">
                    </div>
                  </div>
                  <div class="right-arrow  d-flex align-items-center" @click="getOrder('Next',imgs)">
                    ＞
                  </div>
                </div>
                <div class="bullets text-center">
                  <label v-for="(img, index) in imgs" :key="img" :for="index" :style="i===index?'background:var(--accent-color)':''"></label>
                </div>
              </div>
              <article class="grayColor">
                荀子講過，公生明，偏生暗。這段話雖短，卻足以改變人類的歷史。老舊的想法已經過時了。儘管如此，我們仍然需要對桌遊保持懷疑的態度。這必定是個前衛大膽的想法。這種事實對本人來說意義重大，相信對這個世界也是有一定意義的。昆圖斯曾經說過，膽小的狗叫起來兇，但不會傷人。這啟發了我。若沒有桌遊的存在，那麼後果可想而知。梁曉聲說過一句很有意思的話，友誼，好比一瓶酒，封存的時間越長，價值則越高; 而一旦啟封，還夠一個酒鬼濫飲一次。這讓我對於看待這個問題的方法有了巨大的改變。
              </article>
            </div>
            <div class="col-4 d-flex flex-column">
              <div class="accent-title mb-3">
                <p>訂位概況</p>
              </div>
              <div class="col-12 d-flex flex-column justify-content-center align-items-center">
                <DatePicker
                is-expanded
                v-model="date"
                :min-date="new Date()"
                :disabled-dates="{ weekdays: [1, 2] }"
                />
                <div class="accent-title d-flex mt-3">
                  {{ getDate() }}
                </div>
                <div class="accent-title d-flex my-3">
                  <p>剩餘座位：</p><p>{{Attendance}}</p><p>人</p>
                </div>
                <button class="Booking-Btn" @click="redirectBooking">
                  <p>我要訂位</p>
                </button>
                <button class="Booking-Btn my-3" @click="redirectNewTeam">
                  <p>我要開團</p>
                </button>
              </div>

            </div>
          </div>
          <hr>
          <div class="accent-title">
            當前活動
          </div>
          <hr>
          <div>
            <div class="accent-title">
              <p>顧客評價</p>
            </div>
            <div class="d-flex justify-content-center m-3">
              <div class="" @click="getOrder('Prev',copyReviews)">
                ＜
              </div>
                <div class="col-11 d-flex justify-content-center">
                  <div class="reviews-block">
                    <transition-group name="flip-list"  tag="div" class="d-flex">
                      <ReviewCard v-for="review in copyReviews" :key="review.id" 
                        :review="review"/>
                    </transition-group>
                  </div>
                </div>
                <div class="" @click="getOrder('Next',copyReviews)">
                  ＞
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import { DatePicker } from "v-calendar";
import { db } from "@/firebase/config";
import { getDoc, doc } from "firebase/firestore";
import ReviewCard from "../../components/StoreBooking/ReviewCard.vue";
export default {
  name: "StoreView",
  components: {
    DatePicker,
    ReviewCard,
  },
  data() {
    return {
      Attendance:5,
      date: "",
      order:'',
      i:0,
      imgs:['https://picsum.photos/300/300','https://picsum.photos/200/300','https://picsum.photos/100/300','https://picsum.photos/600/400','https://picsum.photos/500/300'],
      copyImgs:[],
      currentImg:'',
      reviews:[1,2,3,4,5,6,7,8,9,10],
      copyReviews:[],
      currentStore: {},
    };
  },
  mounted() {
    this.getSingleStore();
    this.getDoubleItems(this.reviews,this.copyReviews);
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    getDoubleItems: function(Arr,copyArr){ 
      for(let i = 0 ; i < Arr.length * 2 ; i++){
        let obj = {}
        obj.id = i ;
        obj.item = Arr[i % Arr.length] ;
        copyArr.push(obj)
      }
    },
    getOrder: function(order,copyArr){
      this.order = order
      if(order=='Next'){
        const shiftItem = copyArr.shift();
        copyArr.push(shiftItem);
      }
      else if(order=='Prev'){
        const shiftItem = copyArr.pop();
        copyArr.unshift(shiftItem);
      }
    },
    getDate: function () {
      let dateBase = this.date;
      let getDate = "";
      let Chinese = ["日", "一", "二", "三", "四", "五", "六"];

      if (this.date != "") {
        let day = dateBase.getDay();
        let getChineseDay = Chinese[day];
        let year = dateBase.getFullYear();
        let month = dateBase.getMonth() + 1;
        let date = dateBase.getDate();

        getDate =
          year + "年" + month + "月" + date + "日 " + " 星期" + getChineseDay;
      }
      // this.infos[0].value = getDate;
      return getDate;
    },
    async getSingleStore() {
      const docRef = await doc(db, "Store", String(this.$route.params.storeId));
      getDoc(docRef).then((doc) => {
        this.currentStore = doc.data();
      });
    },
    redirectBooking() {
      if (this.user) {
        this.$store.commit(
          "setBookingStoreID",
          String(this.$route.params.storeId)
        );
        // console.log(
        //   "getting store info from",
        //   this.$store.state.bookingStoreID
        // );
        this.$router.push("/booking");
      } else {
        alert("請先登入");
        this.$router.push("/login");
      }
    },
    redirectNewTeam() {
      if (this.user) {
        this.$store.commit(
          "setBookingStoreID",
          String(this.$route.params.storeId)
        );
        // console.log(
        //   "getting store info from",
        //   this.$store.state.bookingStoreID
        // );
        this.$router.push("/newteam");
      } else {
        alert("請先登入");
        this.$router.push("/login");
      }
    },    
  },
};
</script>

<style scoped>
.store-view{
  margin:100px auto ;
}
.wrapper {
  background-color: #fff;
  padding: 2vh 2vw;
  border-radius: 12px;
  box-shadow: 0px 4px 4px 2px rgb(200, 200, 200);
}
.accent-title{
  font-weight: 600;
}
.grade-font{
  font-size: 18px;
}
.slider input{
  display: none;
}
.slides{
  width: 80%;
  padding: 5px;
  border: solid 1px;
}
.overflow{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
img{
  object-fit: cover;
  border-radius: 10px;
  /* width: calc(50% - 10px); */
  flex: calc(50% - 10px) 0 0;
  height: 200px;
  margin: 5px;
}
.bullets label{
  width: 10px;
  height: 10px;
  border-radius:100%;
  background: #ccc;
  margin: 0 5px;
}
article{
  padding: 30px;
}
.vc-container {
  border: 0px;
  border-radius: 0;
  box-shadow: 4px 4px 10px 2px rgb(210, 210, 210);
}
.Booking-Btn{
  font-size: 2rem;
  font-weight: bolder;
  padding: 6px 20px;
  background-color: #f6d55e;
  color: #4590d4;
  width:200px;
  text-align: center;
  line-height: 1.8;
  box-shadow: 0 4px 6px rgb(180, 180, 180);
  border-radius: 100rem;
  border: none;
  text-decoration: none;
}
p{
  margin-bottom: 0;
}
 .reviews-block{
  overflow: hidden;
  width: 850px;
  padding: 25px;
  position: relative;
  /* border: solid 1px #4590d4; */
}   
.flip-list-move{
  transition: all .5s linear;
}

</style>