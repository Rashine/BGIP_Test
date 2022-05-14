<template>
    <!-- card -->
    <div class="container pt-5">
        <div class="row justify-content-center">
            <div class="cardWidth row flex-column align-items-center m-5 p-5">
                <p class="text-center">恭喜，已成功開團!立馬到揪團狀態去確認吧!</p>
                <p class="text-center">將自動跳轉至揪團頁面，若未自動跳轉請自行點選下面按鈕</p>
            </div>
  <div class="d-flex justify-content-center pb-5">
    <div class="mainBtn" style="width: 250px" @click="redirect">到揪團狀態</div>
  </div>
        </div>
    </div>
    <!-- card end -->
</template>
<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$router.push("/teams")
    },5000)
  },
  methods:{
    redirect(){
      this.$router.push("/teams")
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 580px) {
  .cardWidth {
    width: 89%;
  }
  .mainBtn {
    position: relative;
    justify-content: center !important;
  }
}
.cardWidth {
  max-width: 700px;
  /* border: 4px solid rgb(246, 213, 94); */
  background-color: rgb(255, 255, 255);
  margin-top: 8vh !important;
  margin-bottom: 8vh !important;
  padding: 6vh 6vw !important;
  border-radius: 8px;
  box-shadow: 0px 4px 4px 2px rgb(200, 200, 200);
  overflow: hidden; /* 切邊 */
  flex: auto;
  justify-content: center;
  align-items: center;
  text-align: center;
}

</style>