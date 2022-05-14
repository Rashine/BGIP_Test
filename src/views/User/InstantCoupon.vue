<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="wrapper">
        <div class="card" style="max-width: 500px">
          <div class="row g-0">
            <div class="col-sm-5" style="background: #ff6c6c">
              <h4 class="couponTitle m-5">馬上折抵</h4>
            </div>
            <div class="col-sm-7">
              <div class="card-body">
                <h5 class="card-title">50元折價券</h5>
                <p class="card-text">有效日期:2022.04.23</p>
                <button class="astext">使用規則</button>
              </div>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="my-4">
            <b>優惠內容</b>
            <p>使用平台訂位XXX桌遊店，可享10元優惠</p>
          </div>
          <div class="my-4">
            <b>使用期限</b>
            <p>2022/02/22 - 2022/04/23</p>
          </div>
          <div class="my-4">
            <b>適用店家</b>
            <p>XXX 桌遊店</p>
          </div>
          <div class="my-4">
            <b>剩餘使用次數</b>
            <p>1次</p>
          </div>
          <div class="my-4">
            <b>查看詳情</b>
            <p>相關優惠單筆訂位只能使用一次該類型折價券。</p>
          </div>
          <div class="text-center">
            <router-link to="usecoupon"
              ><button class="mainBtn m-3">使用</button></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.wrapper {
  max-width: 700px;
  margin: 5vh;
}
</style>