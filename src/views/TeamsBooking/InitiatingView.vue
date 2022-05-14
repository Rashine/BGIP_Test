<template>
  <div class="initiating-view container">
    <div class="row justify-content-center">
      <div class="d-flex flex-column justify-content-center align-items-center">
      <div class="col-8 initiating-wrapper">
        <div class="text-center">
          <h1>創立揪團</h1>
        </div>
        <div class="d-flex justify-content-between mt-5">
          <div>選擇地點</div>
          <div>
            <input list="stores" placeholder="請輸入店家名稱或搜尋" type="text" name="search" @input="getStore">
            <datalist id="stores">
              <option :value="store.name" v-for="store in stores" :key="store"></option>
            </datalist>
          </div>
          <div class="grade-font accentColor">地圖搜尋</div>
        </div>

        <transition>
        <div class="row justify-content-center store-card" v-show="store!=''">
          <div class="store-card-wrapper col-11 my-4">
            <div class="d-flex gap-3">
              <div class="col-6">
                <img src="https://picsum.photos/300/300" alt="">
              </div>
              <div class="col-5 d-flex flex-column justify-content-between">
                <div>
                  name {{store.name}}
                </div>
                
                <div>
                  <div>
                  ⭐️⭐️⭐️⭐️⭐️
                  </div>
                  <div class="d-flex">
                    <div class="tag d-flex align-items-center">
                      9.2
                    </div>
                    <div>
                      <div class="grade-font accentColor">
                        非常棒！
                      </div>
                      <div class="grade-font grayColor">
                        50則評論
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr>
            <div class="col-12 d-flex justify-content-between">
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
            <hr>
            <div class="col-12 d-flex justify-content-between">
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

        </div>
        </transition>
        <hr>
        <div class="row justify-content-center">
          <div class="">
            <DatePicker
                  is-expanded
                  container
                  v-model="date"
                  :min-date="new Date()"
                  :disabled-dates="{ weekdays: [1, 2] }"
                  :columns="$screens({ default: 1, lg: 2 })"
                  class="my-5"
                  />
          </div>
          <div class="d-flex justify-content-between">
            <div>訂位日期</div>
            <div>{{ getDate() }}</div>
          </div>
        </div>
        <hr>
        <div class="d-flex justify-content-between">
          <div>開始時段</div>
          <div class="beginningtime-block">
            <div class="input-group input-group-sm">
              <div
                type="input"
                class="time-select-output btn btn-outline-secondary"
              >
                {{ BeginningTime }}
              </div>
              <button
                type="button"
                class="
                  split-btn
                  btn btn-outline-secondary
                  dropdown-toggle dropdown-toggle-split
                "
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span class="visually-hidden">Toggle Dropdown</span>
              </button>
              <ul class="time-dropdown-menu dropdown-menu dropdown-menu-end">
                <li
                  class="dropdown-item"
                  v-for="dropdownValue in dropdownValues"
                  :key="dropdownValue"
                  @click="getBeginningTime(dropdownValue)"
                >
                  {{ dropdownValue }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr>
        <div class="d-flex justify-content-between">
          <div>結束時段</div>
          <div class="enddingtime-block">
            <div class="input-group input-group-sm">
              <div
                type="input"
                class="time-select-output btn btn-outline-secondary"
              >
                {{ EnddingTime }}
              </div>
              <button
                type="button"
                class="
                  split-btn
                  btn btn-outline-secondary
                  dropdown-toggle dropdown-toggle-split
                "
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span class="visually-hidden">Toggle Dropdown</span>
              </button>
              <ul class="time-dropdown-menu dropdown-menu dropdown-menu-end">
                <li
                  class="dropdown-item"
                  v-for="dropdownValue in dropdownValues"
                  :key="dropdownValue"
                  @click="getEnddingTime(dropdownValue)"
                >
                  {{ dropdownValue }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr>
        <div class="col-12 d-flex justify-content-between">
          <div>人數範圍</div>
          <div class="d-flex flex-column">
            
            <div>最少 <input type="number" name="attendance">人</div>
            <div>最多 <input type="number" name="attendance">人</div>

          </div>
        </div>
        <hr>
        <div class="d-flex justify-content-between">
          <div>揪團名稱</div>
          <input type="text" placeholder="揪團名稱最多十個字" maxlength="10">
        </div>
        <hr>
        <div class="d-flex justify-content-between mt-4">
          <div>揪團標籤</div>
          <div class="d-flex flex-column align-items-end">
            <div>
              <input list="tags" type="text" name="tag" placeholder="最多十個字 空白無效" maxlength="10" v-model="newTag">
              <input type="submit" value="＋" @click="addTag">
              <datalist id="tags" >
                <option :value="tag" v-for="tag in tags" :key="tag"></option>
              </datalist>
            </div>
            
            <div class="d-flex">
              <div class="tag mt-2" v-for="selectedTag in selectedTags" :key="selectedTag">
                {{selectedTag}}
              </div>
            </div>
          </div>
        </div>
        <hr>
        <div class="d-flex justify-content-between">
          <div>截止日期</div>
          <div><input type="date"></div>
        </div>
        <hr>
        <div>
          <div class="mb-3">
            揪團描述
          </div>
          <div>
            <textarea name="" id="" rows="10" class="col-12"></textarea>
          </div>
        </div>
      </div>
      <button class="Booking-Btn">下一步</button>

      </div>
    </div>
  </div>
</template>
<script>
import { DatePicker } from "v-calendar";

export default {
  name:"InitiatingView",
  setup() {
    
  },
  components: {
    DatePicker,
  },
  data(){
    return{
      date: "",
      stores:[{'name':'A'},{'name':'B'},{'name':'C'},{'name':'D'}],
      store:'',
      BeginningTime: "選擇時段",
      EnddingTime: "選擇時段",
      dropdownValues: [
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "13:00",
        "13:30",
        "14:00",
        "14:30",
        "15:00",
        "15:30",
      ],
      tags:['AA','BB','CC'],
      newTag:'',
      selectedTags:[],
    }
  },
  methods:{
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
    getStore: function(event){
      let selectedStore = event.target.value.trim()
      this.stores.forEach(function(item){
        if(selectedStore == item.name){
          this.store = item
        } 
      },this)
    },
    addTag: function(){
      if(this.tags.includes(this.newTag.trim())===false && this.newTag.trim() != ''){
        this.tags.push(this.newTag.trim());
        this.selectedTags.push(this.newTag.trim());
      }else if(this.tags.includes(this.newTag.trim())===true &&
               this.newTag.trim() != '' &&
               this.selectedTags.includes(this.newTag.trim())===false){
        this.selectedTags.push(this.newTag.trim());
      }
      this.newTag = ""
    }
  }
}
</script>

<style scoped>
* {
  --input-gray: rgb(118, 118, 118);
  --input-btn-gray-hover: rgba(118, 118, 118, 0.7);
}

.vc-day{
  min-height: 100px !important;
}
.initiating-view{
  padding: 100px 0;
}
.initiating-wrapper{
  background-color: #fff;
  padding: 8vh 8vw;
  border-radius: 12px;
  box-shadow: 0px 4px 4px 2px rgb(200, 200, 200);
  margin-bottom: 50px;
}
.store-card-wrapper {
  background-color: #fff;
  padding: 2vh 2vw;
  border: solid 2px var(--primary-color);
  border-radius: 12px;
  box-shadow: 0px 4px 4px 2px rgb(200, 200, 200);
}
.grade-font{
  font-size: 18px;
}
input[name=search]{
  outline: none;
  border: 0;
  border-bottom: solid 1px black;
  font-size: 16px;
}
input[name=tag]{
  outline: none;
  border: 0;
  border-bottom: solid 1px black;
  font-size: 16px;
}
input[type=submit]{
  all: unset;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: solid 1px black;
  background-color: #fff;
  cursor: pointer;
  text-align: center;
  font-weight: 600;
}
input[type=submit]:hover{
  background-color: #ccc;
  color: #fff;
  border: solid 1px rgb(150, 150, 150);
}
input[name=search]::-webkit-calendar-picker-indicator,
input[name=tag]::-webkit-calendar-picker-indicator{
  display: none !important;
}
input[name=attendance]{
  width: 50px;
}
img{
  object-fit: cover;
  border-radius: 10px;
  width: 100%;
  height: 12vw;
  min-height: 100px;
  margin: 5px;
}

/* time-select-block */
.time-select-output {
  width: 90px;
  cursor: default;
}
.time-select-output:hover {
  background-color: #fff;
  color: var(--input-gray);
  cursor: default;
}
.split-btn {
  width: 30px;
  background-color: var(--input-gray);
  color: #fff;
}
.split-btn:hover {
  background: var(--input-btn-gray-hover);
}
.split-btn:focus:hover {
  background-color: var(--input-btn-gray-hover);
}
.time-dropdown-menu {
  min-width: 120px;
  cursor: pointer;
}
textarea{
  resize: none;
  padding: 20px;
  outline: none;
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
.v-enter-active
 {
    transition: opacity 1s ease-out;
    opacity: 0;
  }

  .v-enter-to{
    opacity: 0.9;
  }

</style>
