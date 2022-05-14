<template>
  <!-- Record components -->

  <!-- 標題 -->
  <div class="container d-md-block d-none">
    <div class="row">
      <div class="col-3 text-center"><b>對象</b></div>
      <div class="col-3 text-center">優惠日期</div>
      <div class="col-3 text-center">優惠券名稱</div>
      <div class="col-3 text-center">詳細</div>
    </div>
  </div>
  <!-- 標題end -->
  <!-- 摺疊項目1 -->
  <div class="container mt-5 mb-1">
    <div class="row">
      <div class="col-6 col-md-3 text-center"><b>全體發放</b></div>
      <div class="col-6 col-md-3 text-center">2022/4/4</div>
      <div class="col-6 col-md-3 text-center">周前慶折價券</div>
      <div class="col-6 col-md-3 text-center">
        <a
          class="btn btn-primary"
          data-bs-toggle="collapse"
          href="#collapseExample1"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
          v-on:click="but = but === 'Expand' ? 'Close' : 'Expand'"
        >
          {{ but }}
        </a>
      </div>
    </div>

    <div class="collapse mx-3" id="collapseExample1">
      <div class="card card-body" style="background-color: #fff2c5">
        <div class="row justify-content-center mt-3">
          <div class="col-5 col-md-3 p-0 text-end">優惠券名稱</div>
          <div class="col-7 col-md-7">活動贈送50點xxxxxx</div>
        </div>
        <div class="row justify-content-center mt-1">
          <div class="col-5 col-md-3 text-end p-0">優惠日期</div>
          <div class="col-7">
            2022/04/30&ensp;10:00&ensp;~&ensp;2022/13/13&ensp;22:00
          </div>
        </div>
        <div class="row justify-content-center mt-1">
          <div class="col-5 col-md-3 text-end p-0">發放對象</div>
          <div class="col-7">
            123@123 <br />
            123@123 <br />
            123@123 <br />
            123@123 <br />
          </div>
        </div>
        <div class="row justify-content-center mt-1">
          <div class="col-5 col-md-3 text-end">發送日期</div>
          <div class="col-7">2022/04/18</div>
        </div>
        <div class="row justify-content-center mt-1">
          <div class="col-5 col-md-3 text-end">優惠券代碼</div>
          <div class="col-7">feufirhgeiu24798fewjhsfk</div>
        </div>
        <div class="row justify-content-center mt-1">
          <div class="col-5 col-md-3 text-end">使用上限</div>
          <div class="col-7">期間無上限</div>
        </div>
        <div class="row justify-content-center mt-1">
          <div class="col-5 col-md-3 text-end">優惠折扣</div>
          <div class="col-7">折扣&ensp;100元</div>
        </div>
        <div class="row justify-content-center mt-1">
          <div class="col-5 col-md-3 text-end">使用次數</div>
          <div class="col-7">4次</div>
        </div>
        <div class="row justify-content-center mt-1 mb-3">
          <div class="col-5 col-md-3 text-end">優惠內容</div>
          <div class="col-7 pe-0">
            滿滿的內文滿滿的內文滿滿的內文滿滿的內文滿滿的內文滿滿的內文滿滿的內文滿滿的內文滿滿的內文滿滿的內文滿滿的內文滿滿的內文滿滿的內文滿滿的內文滿滿的內文滿滿的內文滿滿的內文
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 摺疊項目1end -->
  <!-- 摺疊項目2 -->
  <div class="container mt-5 mb-1">
    <div class="row">
      <div class="col-6 col-md-3 text-center"><b>個別發放</b></div>
      <div class="col-6 col-md-3 text-center">2022/4/4</div>
      <div class="col-6 col-md-3 text-center">活動贈送50點xxxxxx</div>
      <div class="col-6 col-md-3 text-center">
        <a
          class="btn btn-primary"
          data-bs-toggle="collapse"
          href="#collapseExample2"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
          v-on:click="butt = butt === 'Expand' ? 'Close' : 'Expand'"
        >
          {{ butt }}
        </a>
      </div>
    </div>

    <div class="collapse mx-3" id="collapseExample2">
      <div class="card card-body" style="background-color: #fff2c5">
        <div class="row justify-content-center mt-3">
          <div class="col-5 col-md-3 p-0 text-end">優惠券名稱</div>
          <div class="col-7 col-md-7">活動贈送50點xxxxxx</div>
        </div>
        <div class="row justify-content-center mt-1">
          <div class="col-5 col-md-3 text-end p-0">優惠日期</div>
          <div class="col-7">
            2022/04/30&ensp;10:00&ensp;~&ensp;2022/13/13&ensp;22:00
          </div>
        </div>
        <div class="row justify-content-center mt-1">
          <div class="col-5 col-md-3 text-end p-0">發放對象</div>
          <div class="col-7">
            123@123 <br />
            123@123 <br />
            123@123 <br />
            123@123 <br />
          </div>
        </div>
        <div class="row justify-content-center mt-1">
          <div class="col-5 col-md-3 text-end">發送日期</div>
          <div class="col-7">2022/04/18</div>
        </div>
        <div class="row justify-content-center mt-1">
          <div class="col-5 col-md-3 text-end">優惠券代碼</div>
          <div class="col-7">feufirhgeiu24798fewjhsfk</div>
        </div>
        <div class="row justify-content-center mt-1">
          <div class="col-5 col-md-3 text-end">使用上限</div>
          <div class="col-7">期間無上限</div>
        </div>
        <div class="row justify-content-center mt-1">
          <div class="col-5 col-md-3 text-end">優惠折扣</div>
          <div class="col-7">折扣&ensp;100元</div>
        </div>
        <div class="row justify-content-center mt-1">
          <div class="col-5 col-md-3 text-end">使用次數</div>
          <div class="col-7">4次</div>
        </div>
        <div class="row justify-content-center mt-1 mb-3">
          <div class="col-5 col-md-3 text-end">優惠內容</div>
          <div class="col-7 pe-0">
            滿滿的內文滿滿的內文滿滿的內文滿滿的內文滿滿的內文滿滿的內文滿滿的內文滿滿的內文滿滿的內文滿滿的內文滿滿的內文滿滿的內文滿滿的內文滿滿的內文滿滿的內文滿滿的內文滿滿的內文
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 摺疊項目2end -->
  <!-- 摺疊項目3 -->
  <div class="container mt-5 mb-1">
    <div class="row">
      <div class="col-6 col-md-3 text-center"><b>代碼發放</b></div>
      <div class="col-6 col-md-3 text-center">2022/4/4</div>
      <div class="col-6 col-md-3 text-center">輸入yccccc得到50點優惠券</div>
      <div class="col-6 col-md-3 text-center">
        <a
          class="btn btn-primary"
          data-bs-toggle="collapse"
          href="#collapseExample3"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
          v-on:click="buttt = buttt === 'Expand' ? 'Close' : 'Expand'"
        >
          {{ buttt }}
        </a>
      </div>
    </div>

    <div class="collapse mx-3" id="collapseExample3">
      <div class="card card-body" style="background-color: #fff2c5">
        <div class="row justify-content-center mt-3">
          <div class="col-5 col-md-3 p-0 text-end">優惠券名稱</div>
          <div class="col-7 col-md-7">活動贈送50點xxxxxx</div>
        </div>
        <div class="row justify-content-center mt-1">
          <div class="col-5 col-md-3 text-end p-0">優惠日期</div>
          <div class="col-7">
            2022/04/30&ensp;10:00&ensp;~&ensp;2022/13/13&ensp;22:00
          </div>
        </div>
        <div class="row justify-content-center mt-1">
          <div class="col-5 col-md-3 text-end p-0">發放對象</div>
          <div class="col-7">
            123@123 <br />
            123@123 <br />
            123@123 <br />
            123@123 <br />
          </div>
        </div>
        <div class="row justify-content-center mt-1">
          <div class="col-5 col-md-3 text-end">發送日期</div>
          <div class="col-7">2022/04/18</div>
        </div>
        <div class="row justify-content-center mt-1">
          <div class="col-5 col-md-3 text-end">優惠券代碼</div>
          <div class="col-7">feufirhgeiu24798fewjhsfk</div>
        </div>
        <div class="row justify-content-center mt-1">
          <div class="col-5 col-md-3 text-end">使用上限</div>
          <div class="col-7">期間無上限</div>
        </div>
        <div class="row justify-content-center mt-1">
          <div class="col-5 col-md-3 text-end">優惠折扣</div>
          <div class="col-7">折扣&ensp;100元</div>
        </div>
        <div class="row justify-content-center mt-1">
          <div class="col-5 col-md-3 text-end">使用次數</div>
          <div class="col-7">4次</div>
        </div>
        <div class="row justify-content-center mt-1 mb-3">
          <div class="col-5 col-md-3 text-end">優惠內容</div>
          <div class="col-7 pe-0">
            滿滿的內文滿滿的內文滿滿的內文滿滿的內文滿滿的內文滿滿的內文滿滿的內文滿滿的內文滿滿的內文滿滿的內文滿滿的內文滿滿的內文滿滿的內文滿滿的內文滿滿的內文滿滿的內文滿滿的內文
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 摺疊項目3end -->
  <!-- Record componentsEND -->
</template>
<script>
export default {
  data() {
    return {
      but: "Expand",
      butt: "Expand",
      buttt: "Expand",
    };
  },
};
</script>
<style>
.aa:focus {
  background: #fff2c5 !important;
}
</style>