<template>
  <button
    class="
      py-3
      shadow-sm
      d-flex
      justify-content-center
      align-items-center
      detailBox
    "
    @click="doOpenDetail(this.listId)"
  >
    <div class="row detailBox">
      <div class="col-3 text-center">{{ name }}</div>
      <div class="col-6">
        <div class="row">
          <div class="col-sm-12 col-lg-5 text-center" v-if="dataReady">
            {{ Pmonth }}月{{ Pday }}日
          </div>
          <div class="col-sm-12 col-lg-7 text-center">
            {{ Stime }} ~ {{ Etime }}
          </div>
        </div>
      </div>
      <div class="col-3 text-center">{{ quantity }}人</div>
    </div>
  </button>
</template>


<script>
export default {
  name: "StoreBookingList",
  data() {
    return {
      dataReady: false,
      Pmonth: null,
      Pday: null,

    };
  },
  props: ["name", "Pdate", "Stime", "Etime", "quantity", "listId"],
  async mounted() {
    //異步：將日期格式拆解分為月與日
    const array = this.Pdate;
    const Pdate = await array.split("/");
    this.Pmonth = Pdate[1];
    this.Pday = Pdate[2];
    console.log("月", this.Pmonth, "日", this.Pday);
    this.dataReady = true;
    console.log(this.listId);
    
  },
  methods: {
    doOpenDetail(listId) {
      console.log(`${listId}`);
      console.log(this.listId);
      this.$router.push(`/bookingmanagement/${listId}`);
    },
  },
};
</script>


<style scoped>
.detailBox {
  width: 100%;
  background-color: #ffffff;
  border: none;
}
</style>
