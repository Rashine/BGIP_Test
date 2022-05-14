<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="cardWidth" style="padding: 0px">
        <!-- 黃容器 -->
        <h1 class="text-center p-2" style="background-color: #f6d55e;font-sm-size:24px">
          營業時間
        </h1>
        <!-- 黃容器結束 -->
        <!-- 第一項 -->
<div class="container">
  <div class="row row-cols-4">
    <div class="col text-center pt-4 pb-4"></div>
    <div class="col text-center pt-4 pb-4"><b>開始營業</b></div>
    <div class="col text-center  pt-4 pb-4"> <b>結束營業</b> </div>
    <div class="col text-center pt-4 pb-4">不營業</div>
  </div>
</div>
        <!-- 第一項結束 -->
        <hr>
                <!-- 第2項 -->
<div class="container">
  <div class="row row-cols-4">
    <div class="col text-center pt-4 pb-4"> <b>星期日</b> </div>
    <div class="col text-center pt-4 pb-4">10:00</div>
    <div class="col text-center pt-4 pb-4">22:00</div>
    <div class="col text-center pt-4 pb-4">-</div>
  </div>
</div>
        <!-- 第2項結束 -->
        <hr>
                <!-- 第3項 -->
<div class="container">
  <div class="row row-cols-4">
    <div class="col text-center pt-4 pb-4"><b>星期1</b></div>
    <div class="col text-center pt-4 pb-4">10:00</div>
    <div class="col text-center pt-4 pb-4">22:00</div>
    <div class="col text-center pt-4 pb-4">-</div>
  </div>
</div>
        <!-- 第3項結束 --><hr>
                <!-- 第4項 -->
<div class="container">
  <div class="row row-cols-4">
    <div class="col text-center pt-4 pb-4"><b>星期2</b></div>
    <div class="col text-center pt-4 pb-4">10:00</div>
    <div class="col text-center pt-4 pb-4">22:00</div>
    <div class="col text-center pt-4 pb-4">-</div>
  </div>
</div>
        <!-- 第4項結束 --><hr>
                <!-- 第5項 -->
<div class="container">
  <div class="row row-cols-4">
    <div class="col text-center pt-4 pb-4"><b>星期3</b></div>
    <div class="col text-center pt-4 pb-4">10:00</div>
    <div class="col text-center pt-4 pb-4">22:00</div>
    <div class="col text-center pt-4 pb-4">-</div>
  </div>
</div>
        <!-- 第5項結束 --><hr>
                <!-- 第6項 -->
<div class="container">
  <div class="row row-cols-4">
    <div class="col text-center pt-4 pb-4"><b>星期4</b></div>
    <div class="col text-center pt-4 pb-4">10:00</div>
    <div class="col text-center pt-4 pb-4">22:00</div>
    <div class="col text-center pt-4 pb-4"><p style="color:red">不營業</p></div>
  </div>
</div>
        <!-- 第6項結束 --><hr>
                <!-- 第7項 -->
<div class="container">
  <div class="row row-cols-4">
    <div class="col text-center pt-4 pb-4"><b>星期5</b></div>
    <div class="col text-center pt-4 pb-4">10:00</div>
    <div class="col text-center pt-4 pb-4">22:00</div>
    <div class="col text-center pt-4 pb-4">-</div>
  </div>
</div>
        <!-- 第7項結束 -->
        <!-- 第8項 -->
<div class="container">
  <div class="row row-cols-4">
    <div class="col text-center pt-4 pb-4"><b>星期6</b></div>
    <div class="col text-center pt-4 pb-4">10:00</div>
    <div class="col text-center pt-4 pb-4">22:00</div>
    <div class="col text-center pt-4 pb-4">-</div>
  </div>
</div>
        <!-- 第8項結束 -->
      </div>
      
    </div>
    
  </div>
    <div class="d-flex justify-content-center pb-5">
    <div class="mainBtn" style="width: 200px">編輯</div>
  </div>
</template>
<style  scoped>
* {
  padding: 0px;
  margin: 0px;
}
@media screen and (max-width: 580px) {
  .cardWidth {
    width: 90%;
  }
}
.cardWidth {
  max-width: 1061px;
  border: 4px solid rgb(246, 213, 94);
  background-color: rgb(255, 255, 255);
  margin-top: 8vh !important;
  margin-bottom: 8vh !important;
  /* padding: 6vh 6vw !important; */
  border-radius: 12px;
  box-shadow: 0px 4px 4px 2px rgb(200, 200, 200);
  overflow: hidden; /* 切邊 */
  flex: auto;
  justify-content: center;
  align-items: center;
}
</style>
<script>
</script>