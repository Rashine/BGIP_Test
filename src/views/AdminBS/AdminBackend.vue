<template>
  <div class="vh-90 d-flex justify-content-center align-items-center">
    <div class="wrapper">
      <h1 class="text-center pb-5">管理員後臺</h1>
      <div class="container">
  <div class="row row-cols-1 row-cols-md-1 row-cols-lg-4">
    <div class="col text-center mb-3">
      <!-- router-link -->
      <router-link to="/UserList" class="">
      <!-- 廣版按鈕 -->
        <img src="../../assets/AdminBackendSvg/會員管理.png" alt="" class="d-none d-lg-block text-center" style="max-width: 100%;"  />
        <!-- 窄版按鈕 -->
        <img src="../../assets/AdminBackendSvg/會員管理2.png" alt="" class="d-block d-lg-none" style="margin:0px auto; max-width: 100%;" />
      </router-link>
    </div>
    <div class="col text-center mb-3">
      <!-- router-link -->
      <router-link to="/" class="" disabled>
      <!-- 廣版按鈕 -->
        <img src="../../assets/AdminBackendSvg/文章管理.png" alt="" class="d-none d-lg-block" style="max-width: 100%;"  />
        <!-- 窄版按鈕 -->
        <img src="../../assets/AdminBackendSvg/文章管理2.png" alt="" class="d-block d-lg-none" style="margin:0px auto; max-width: 100%;" />
      </router-link>
    </div>
    <div class="col text-center mb-3">
      <!-- router-link -->
      <router-link to="/" class="" disabled>
      <!-- 廣版按鈕 -->
        <img src="../../assets/AdminBackendSvg/數據分析.png" alt="" class="d-none d-lg-block" style="max-width: 100%;"  />
        <!-- 窄版按鈕 -->
        <img src="../../assets/AdminBackendSvg/數據分析2.png" alt="" class="d-block d-lg-none" style="margin:0px auto; max-width: 100%;" />
      </router-link>
    </div>
    <div class="col text-center mb-3">
      <!-- router-link -->
      <router-link to="/OfferRelated" class="">
      <!-- 廣版按鈕 -->
        <img src="../../assets/AdminBackendSvg/優惠相關.png" alt="" class="disabled d-none d-lg-block text-center" style="max-width: 100%;" />
        <!-- 窄版按鈕 -->
        <img src="../../assets/AdminBackendSvg/優惠相關2.png" alt="" class="d-block d-lg-none" style="margin:0px auto; max-width: 100%;"/>
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
<script>
</script>
