<template>
  <!-- 確認訂單頁面 -->
  <form action="">
  <div class="container">
    <div class="row justify-content-center">
      <div class="cardWidth">
        <div class="container p-5">
          <h1 class="pt-3">創立揪團</h1>
        </div>
        <div
          class="div"
          style="
            max-width: 480px;
            min-width: 300px;
            height: auto;
            margin: 0px auto;
          "
        >
          <div class="d-flex justify-content-between grayColor py-2">
            <a>聯絡人姓名</a
            ><a
              ><input
                type="text"
                placeholder="黃士彥"
                size="5"
                style="text-align: center"
            /></a>
          </div>
          <hr />
          <div class="d-flex justify-content-between grayColor py-2">
            <a>電話</a
            ><a
              ><input
                type="text"
                placeholder="0912345678"
                size="10"
                style="text-align: center"
            /></a>
          </div>
          <hr />
          <div class="d-flex justify-content-between grayColor py-2">
            <a>Email</a
            ><a
              ><input
                type="text"
                placeholder="aa123@gmail.com"
                size="15"
                style="text-align: center"
            /></a>
          </div>
          <hr />
          <div class="d-flex justify-content-between grayColor py-2">
            <a>套用優惠</a>
            <a>
              <div class="">
                <div class="input-group">
                  <button
                    type="button"
                    class="select-output btn btn-outline-secondary"
                  >
                    {{ infos.discount }}
                  </button>
                  <button
                    type="button"
                    class="
                      split-btn
                      btn btn-secondary
                      dropdown-toggle dropdown-toggle-split
                    "
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span class="visually-hidden">Toggle Dropdown</span>
                  </button>
                  <ul
                    class="dropdown-menu"
                  >
                    <li
                      class="dropdown-item"
                      v-for="discount in discounts"
                      :key="discount"
                      @click="getDiscount(discount)"
                    >
                      {{ discount }}
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </div>
          <hr />
          <div class="d-flex justify-content-between grayColor pt-2 pb-5">
            <a>訂位人數</a>

            <a>
              <div
                class="d-flex justify-content-center align-items-center"
                style="width: 130px"
              >
                <div class="btn-group btn-group-sm me-1">
                  <button
                    class="btn btn-secondary"
                    type="button"
                    @click="info >= 2 ? info-- : info == 1"
                  >
                    －
                  </button>
                  <input
                    type="text"
                    class="form-control text-center"
                    oninput="value=value.replace(/[^\d]/g,'')"
                    v-model="info"
                  />
                  <button
                    class="btn btn-secondary"
                    type="button"
                    @click="info++"
                  >
                    ＋
                  </button>
                </div>
                <p class="pt-2">人</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 按鈕 -->
  <router-link to="/ConfirmOrder">
    <div class="d-flex justify-content-center pb-5">
      <div class="mainBtn" style="width: 250px">確認資訊</div>
    </div>
  </router-link>
  <!-- 按鈕 end -->
  </form>
</template>
<style  scoped>
@media screen and (max-width: 580px) {
  .cardWidth {
    width: 89%;
  }
  .mainBtn {
    position: relative;
    justify-content: center !important;
    text-decoration: none !important;
  }
}
.cardWidth {
  max-width: 700px;
  border: 4px solid rgb(246, 213, 94);
  background-color: rgb(255, 255, 255);
  margin-top: 8vh !important;
  margin-bottom: 8vh !important;
  /* padding: 6vh 6vw !important; */
  border-radius: 8px;
  box-shadow: 0px 4px 4px 2px rgb(200, 200, 200);
  overflow: hidden; /* 切邊 */
  flex: auto;
  justify-content: center;
  align-items: center;
  text-align: center;
}

</style>
<script>
export default {
  data() {
    return {
      infos: {
        discount: "免費點心",
      },

      discount: "免費點心",
      discounts: [
        "免費點心",
        "免費飲料",
        "贈送一小時",
        "免費停車",
        "免費吹冷氣",
      ],
      info: 1,
    };
  },

  methods: {
    getDiscount: function (discount) {
      this.infos.discount = discount;
    },
  },
};
</script>