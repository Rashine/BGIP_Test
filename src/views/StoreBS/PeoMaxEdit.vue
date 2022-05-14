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
  <div class="row justify-content-between">
    <div class="col-6 text-center pt-4 pb-4">
      目前人數上限
    </div>
    <div class="col-6 text-center pt-4 pb-4">
      <input type="text" style="text-align: center; width: 70px;background-color: #f8efd0;" /> 人
    </div>
  </div>
</div>
        <!-- 第一項結束 -->
      </div>
      
    </div>
    
<!-- 按鈕區 -->
<div class="container">
  <div class="row row-cols-1 row-cols-sm-3">
    <div class="col">
        
    </div>
    <div class="col">
<div class="d-flex justify-content-center pb-3">
    <div class="mainBtn" style="width: 200px">儲存</div>
  </div>
    </div>
<div class="d-flex justify-content-center pb-5">
    <div class="mainBtn" style="width: 200px">取消</div>
  </div>
  </div>
</div>
<!-- 按鈕區結束 -->
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
  };
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