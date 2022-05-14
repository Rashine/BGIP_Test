<template>
  <div class="vh-90 d-flex justify-content-center align-items-center">
    <div class="wrapper">
      <h1 class="text-center pb-5">設定</h1>
      <div class="container">
  <div class="row row-cols-1 row-cols-md-1 row-cols-lg-3">
    <div class="col text-center mb-3">
      <!-- router-link -->
      <router-link to="/" class="">
      <!-- 廣版按鈕 -->
        <img src="../../assets/StoreFrontSvg/定位管理.png" alt="" class="d-none d-lg-block" style="max-width: 100%; margin:0px auto"  />
        <!-- 窄版按鈕 -->
        <img src="../../assets/StoreFrontSvg/定位管理2.png" alt="" class="d-block d-lg-none" style="margin:0px auto; max-width: 100%;" />
      </router-link>
    </div>
    <div class="col text-center mb-3">
      <!-- router-link -->
      <router-link to="/BookingManagement" class="">
      <!-- 廣版按鈕 -->
        <img src="../../assets/StoreFrontSvg/活動管理.png" alt="" class="d-none d-lg-block" style="max-width: 100%; margin:0px auto"  />
        <!-- 窄版按鈕 -->
        <img src="../../assets/StoreFrontSvg/定位管理2.png" alt="" class="d-block d-lg-none" style="margin:0px auto; max-width: 100%;" />
      </router-link>
    </div>
    <div class="col text-center mb-3">
      <!-- router-link -->
      <router-link to="/" class="">
      <!-- 廣版按鈕 -->
        <img src="../../assets/StoreFrontSvg/數據報告.png" alt="" class="d-none d-lg-block" style="max-width: 100%; margin:0px auto" />
        <!-- 窄版按鈕 -->
        <img src="../../assets/StoreFrontSvg/數據報告2.png" alt="" class="d-block d-lg-none" style="margin:0px auto; max-width: 100%;"/>
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
