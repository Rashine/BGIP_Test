
<template>
  <!-- Coupons components -->
  <form action="" class="d-flex">
    <div class="container py-3">
      <!-- 點數明細 -->
      <div class="row pt-3 pb-3">
        <div class="col-3 text-end" style="padding: 0px">
          <a style="background-color: #f6d55e; padding: 5px">點數明細</a>
        </div>
        <div class="col-1 d-lg-block d-none"></div>
        <div class="col-8 col-lg-6 m-0">
          <input
            class="form-control"
            type="text"
            style=""
            placeholder="活動贈送50點"
          />
        </div>
      </div>
      <!-- 點數明細end -->
      <!-- 點數金額 -->
      <div class="row pb-3">
        <div class="col-3 text-end" style="padding: 0px">
          <a style="background-color: #f6d55e; padding: 5px">點數金額</a>
        </div>
        <div class="col-1 d-lg-block d-none"></div>

        <div class="col-8 col-lg-6 m-0">
    <ul class="nav nav-pills mb-3">
      <li class="" role="">
        <button class="nav-link active" data-bs-toggle="pill" type="button">增加</button>
      </li>
      <li class="" role="">
        <button class="nav-link" data-bs-toggle="pill" type="button">扣除</button>&nbsp;
      </li>
      <li class="" role="">
        <input type="text" class="ms-1 mt-1" style="width: 60px" placeholder="50" />&nbsp;點
      </li>
    </ul>
        </div>
      </div>
      <!-- 點數金額end -->
      <!-- 發放對象 -->
      <div class="row pb-3">
        <div class="col-3 text-end" style="padding: 0px">
          <a style="background-color: #f6d55e; padding: 5px">發放對象</a>
        </div>
        <div class="col-1 d-lg-block d-none"></div>
        <div class="col-8 m-0">
          <div class="container p-0">
            <div class="row">
              <div class="col-11">
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckDefault" @click="submit()">
    全體發放
  </label>
</div>
              </div>
            </div>

            <div class="row">
              <div class="col-12 col-lg-9">
                <div class="input-group mb-3">
                  <input
                    :disabled="isDisable"
                    type="text"
                    class="form-control"
                    placeholder="請輸入email"
                    aria-label=""
                    aria-describedby="basic-addon2"
                  />
                  <span class="" id="basic-addon2">
                    <img src="../../assets/icon/加加.png" alt=""><img src="../../assets/icon/剪剪.png" alt="">
                  </span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-lg-9">
                <div class="input-group mb-3">
                  <input
                    :disabled="isDisable"
                    type="text"
                    class="form-control"
                    placeholder="請輸入email"
                    aria-label=""
                    aria-describedby="basic-addon2"
                  />
                  <span class="" id="basic-addon2">
                    <img src="../../assets/icon/加加.png" alt=""><img src="../../assets/icon/剪剪.png" alt="">
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 發放對象end -->
      <div class="btn-block d-flex justify-content-center mt-3">
        <button class="mainBtn text-center mb-5">確定發放</button>
      </div>
    </div>
  </form>
  <!-- Coupons componentsEND -->
</template>

<style scoped>
.nav-link {
  background: #5776ca;
}
.li button {
  color: #5e6165 !important;
}
.nav-link .active {
  background-color: #4590d4 !important;
  color: #ffffff !important;
}
</style>
<script>
 export default {
  data: function () {
   return {
    isDisable: false
   }
  },
  methods: {
   submit() {
    this.isDisable = !this.isDisable

   }
  },
 }
</script>

