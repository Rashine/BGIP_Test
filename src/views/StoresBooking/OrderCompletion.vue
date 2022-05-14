<template>
  <!-- step-block -->
  <div class="container">
    <div class="step-block d-flex justify-content-center text-center mt-5">
      <div class="step-start-wrap d-flex align-items-center">
        <div class="step-start"></div>
      </div>
      <div
        class="step-line-wrap d-flex align-items-center justify-content-center"
      >
        <div class="step-line"></div>
      </div>
      <div class="step-circle-wrap">
        <div
          class="step-circle"
          :style="step >= 1 ? 'background-color: rgb(246, 213, 94);' : ''"
        >
          <h4 class="step-number">1</h4>
        </div>
        <p>填選訂單</p>
      </div>
      <div
        class="step-line-wrap d-flex align-items-center justify-content-center"
      >
        <div
          class="step-line"
          :style="step < 2 ? 'border: dashed 1px #A6A6A6;' : ''"
        ></div>
      </div>
      <div class="step-circle-wrap">
        <div
          class="step-circle"
          :style="step >= 2 ? 'background-color: rgb(246, 213, 94);' : ''"
        >
          <h4 class="step-number">2</h4>
        </div>
        <p>確認預定</p>
      </div>
      <div
        class="step-line-wrap d-flex align-items-center justify-content-center"
      >
        <div
          class="step-line"
          :style="step < 3 ? 'border: dashed 1px #A6A6A6' : ''"
        ></div>
      </div>
      <div class="step-circle-wrap">
        <div
          class="step-pill"
          :style="step >= 3 ? 'background-color: rgb(246, 213, 94);' : ''"
        >
          <h4 class="step-number">完成</h4>
        </div>
      </div>
    </div>
  </div>
  <!-- step-block end -->
  <!-- card -->
  <div class="container">
    <div class="row justify-content-center">
      <div class="wrapper row flex-column align-items-center m-5 p-5">
        <p class="text-center">恭喜，已成功完成訂位</p>
        <p class="text-center">
          將自動跳轉至訂位紀錄頁面，若未自動跳轉請自行點選下面按鈕
        </p>
      </div>
      <div class="btn-block d-flex justify-content-center">
        <button class="send btn rounded-pill text-center mb-5">
          到訂位紀錄
        </button>
      </div>
    </div>
  </div>
  <!-- card end -->
</template>
<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$router.push("/orderlist");
    },4000);
  },
  data() {
    return {
      step: 3,
    };
  },
  methods: {
    redirect() {
      this.$router.push("/orderlist");
    },
  },
};
</script>

    <style scoped>
@media screen and (max-width: 580px) {
  .wrapper {
    width: 90vw;
  }
}

.wrapper {
  background-color: #fff;
  max-width: 700px;
  margin-top: 8vh;
  margin-bottom: 8vh;
  padding-top: 6vh 4vw;
  border-radius: 5px;
  box-shadow: 0px 4px 4px 2px rgb(200, 200, 200);
}

.send {
  background-color: rgb(246, 213, 94);
  color: rgb(69, 144, 212);
  width: 300px;
  text-align: center;
  font-weight: bolder;
  font-size: 24px;
  line-height: 1.8;
  box-shadow: 0 4px 6px rgb(180, 180, 180);
}
.step-circle-wrap {
  /* margin: 0 auto; */
  display: flex;
  flex-direction: column;
  align-items: center;
  white-space: nowrap;
}
.step-start-wrap {
  height: 4rem;
}
.step-start {
  width: 2rem;
  height: 2rem;
  border-radius: 99rem;
  line-height: 2rem;
  background-color: rgb(246, 213, 94);
}
.step-line-wrap {
  height: 4rem;
  width: 6vw;
}
.step-line {
  height: 2px;
  width: 2vw;
  border: solid 1px rgb(246, 213, 94);
  transform: scale(3);
}
.step-circle {
  width: 4rem;
  height: 4rem;
  border-radius: 99rem;
  line-height: 4rem;
  color: #000;
  background-color: #a6a6a6;
  margin-bottom: 1rem;
}
.step-number {
  line-height: 4rem;
}
.step-pill {
  width: 7rem;
  height: 4rem;
  border-radius: 75rem;
  line-height: 4rem;
  color: #000;
  background-color: #a6a6a6;
  margin-bottom: 1rem;
}
.step-text {
  height: 4rem;
}
</style>