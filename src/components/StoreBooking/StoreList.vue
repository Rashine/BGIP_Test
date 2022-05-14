<template>
  <div class="store-list row">
    <!-- 店家基本資訊 -->
    <div class="col-md-6 row">
      <div class="store-img col-4 col-md-6 px-0">
        <img
          src="https://picsum.photos/360/150"
          alt="store-img"
          class="rounded img-fluid"
        />
      </div>
      <div class="col-8 col-md-6 mb-3">
        <h5>
          <b
            >XXXXXX桌遊 中山店 <i class="fa-regular fa-heart"></i>
            <i class="fa-solid fa-heart fav"></i
          ></b>
        </h5>
        <span>★★★★★(95則評價)</span>
        <p class="mb-0">台北市中山區xxx弄xxx號3樓</p>
        <span class="badge me-1">簡餐</span>
        <span class="badge me-1">劇本殺</span>
        <span class="badge me-1">整天暢玩</span>
      </div>
    </div>
    <!-- 營業時間收費資訊 -->
    <div class="charge-info col-md-6 row grayColor">
      <div class="col-4">
        <p>週一/三/四/五</p>
        <p>週六/日</p>
        <p>週二</p>
      </div>
      <div class="col-4">
        <p>15:00 - 21:00</p>
        <p>13:00 - 22:00</p>
        <p>公休</p>
      </div>
      <div class="col-4">
        <p>每3小時 220元/人</p>
        <p>每3小時 220元/人</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.store-list {
  background-color: #ffffff;
  border: 1px solid #f5c000;
  border-radius: 12px;
  padding: 10px;
}
/* 店家基本資訊 */
.badge {
  background-color: #4590d4;
}
/* 愛心只會顯示一個 */
.fav {
  color: #ee5c5c;
}
/* .col-md-6,
.col-4,
.col-5 .col-md-6 {
  border: 1px solid #818181;
} */

/* 營業時間收費資訊 */
.charge-info > .col-4,
p {
  padding: 0px;
  margin: 0px;
}
</style>
