<template>
  <div class="vh-90 d-flex justify-content-center align-items-center">
    <div class="wrapper">
      <h1 class="text-center pb-5">優惠相關</h1>
      <div class="container">
  <div class="row justify-content-center">
    <div class="col-lg-4 col-md-12 col-sm-12 text-center mb-3">
      <!-- router-link -->
      <router-link to="/SendingCoupons" class="">
      <!-- 廣版按鈕 -->
        <img src="../../assets/AdminBackendSvg/發送優惠券.png" alt="" class="disabled d-none d-lg-block text-center" style="margin:0px auto;max-width: 100%;" />
        <!-- 窄版按鈕 -->
        <img src="../../assets/AdminBackendSvg/發送優惠券2.png" alt="" class="d-block d-lg-none" style="margin:0px auto; max-width: 100%;"/>
      </router-link>
    </div>
    <div class="col-lg-4 col-md-12 col-sm-12 text-center mb-3">
      <!-- router-link -->
      <router-link to="/SendingPoint" class="">
      <!-- 廣版按鈕 -->
        <img src="../../assets/AdminBackendSvg/發送點數.png" alt="" class="d-none d-lg-block text-center" style="margin:0px auto;max-width: 100%;"  />
        <!-- 窄版按鈕 -->
        <img src="../../assets/AdminBackendSvg/發送點數2.png" alt="" class="d-block d-lg-none" style="margin:0px auto; max-width: 100%;" />
      </router-link>
    </div>
  </div>
</div>
    </div>
  </div>

  
</template>
<style scoped>
.wrapper {
  max-width: 80%;
  /* padding-bottom: 100px; */
}
</style>