<template>
  <div class="container">
    <div class="wrapper">
      <h1 class="text-center">會員管理</h1>
      <!-- TODO: Search -->
      <div class="search-block d-flex justify-content-center my-4">
        <form class="d-flex">
          <input
            class="form-control border border-secondary"
            type="search"
            placeholder="請輸入關鍵字"
            aria-label="Search"
          />
          <button class="btn btn-secondary" type="submit">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
      <div class="title row shadow-sm mb-2">
        <div class="text-center d-block d-md-none">暱稱/狀態</div>
        <div class="col-3 text-center d-none d-md-block">暱稱</div>
        <div class="col-3 text-center d-none d-md-block">電話</div>
        <div class="col-3 text-center d-none d-md-block">Email</div>
        <div class="col-3 text-center d-none d-md-block">狀態</div>
      </div>
      <!-- v-for -->
      <div class="user-list row shadow-sm mb-2">
        <div class="col-md-3 text-center">Max</div>
        <div class="col-12 col-md-3 text-center d-none d-md-block">
          0911111111
        </div>
        <div class="col-12 col-md-3 text-center d-none d-md-block">
          Max@gmail.com
        </div>
        <div class="col-md-3 text-center">黑名單</div>
      </div>
      <!-- v-for -->
      <div class="user-list row shadow-sm mb-2">
        <div class="col-md-3 text-center">Ellen</div>
        <div class="col-12 col-md-3 text-center d-none d-md-block">
          0922222222
        </div>
        <div class="col-12 col-md-3 text-center d-none d-md-block">
          ellen1234@gmail.com
        </div>
        <div class="col-md-3 text-center">一般會員</div>
      </div>
      <div class="user-list row shadow-sm mb-2">
        <div class="col-md-3 text-center">範例桌遊店 - 中山旗艦店</div>
        <div class="col-12 col-md-3 text-center d-none d-md-block">
          0955555555
        </div>
        <div class="col-12 col-md-3 text-center d-none d-md-block">
          EthanEthanEthanEthan@gmail.com
        </div>
        <div class="col-md-3 text-center">活躍店家</div>
      </div>
      <div class="user-list row shadow-sm mb-2">
        <div class="col-md-3 text-center">悲慘桌遊店XXXXXXXXX - 結束營運店</div>
        <div class="col-12 col-md-3 text-center d-none d-md-block">
          0955555555
        </div>
        <div class="col-12 col-md-3 text-center d-none d-md-block">
          EthanEthanEthanEthan@gmail.com
        </div>
        <div class="col-md-3 text-center">關閉店家</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  background-color: #f6d55e;
  color: #4590d4;
  border-radius: 10px 10px 0px 0px;
}
.user-list {
  background-color: #ffffff;
  padding: 12px;
}
.text-center {
  overflow-wrap: break-word;
}
</style>