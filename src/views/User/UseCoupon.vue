<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="wrapper">
        <div class="card mb-5" style="max-width: 500px">
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
        <b>店家確認</b>
        <p class="input_title mb-5">請店家輸入店家ID:</p>
        <div class="mb-3 form-floating">
          <input
            type="text"
            class="form-control"
            id="couponId"
            placeholder="請輸入ID"
          />
          <label for="text" class="form-floating">請輸入ID</label>
        </div>
        <div class="mt-5 text-center">
          <button class="mainBtn">確認</button>
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
.form-control {
  border-radius: 100px;
  border: 3px solid rgb(246, 213, 94);
  height: 3.5rem !important;
  padding-left: 2rem !important;
}
.form-control:focus {
  border-color: rgb(246, 213, 94, 0.6);
  box-shadow: 0 0 2px 4px rgba(246, 213, 94, 0.3);
}
label {
  color: rgb(150, 150, 150);
  margin-left: 1.3rem;
}
</style>