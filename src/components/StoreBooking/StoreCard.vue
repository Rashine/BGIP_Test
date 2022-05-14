<template>
  <div class="store-card">
    <div class="store-title row d-flex p-3">
      <div class="col-10">
        <h5>某某桌遊 中山店</h5>
        <span>★★★★★(95則評價)</span>
      </div>
      <div class="col-2 d-flex justify-content-end">
        <i class="fa-regular fa-heart"></i>
      </div>
    </div>
    <div class="store-img">
      <img
        src="https://picsum.photos/800/450"
        class="card-img-top"
        alt="店家圖片"
      />
    </div>
    <div class="store-info row p-3">
      <div class="table-responsive col-md-9">
        <table>
          <tr>
            <td>週一/三/四/五</td>
            <td>15:00 - 21:00</td>
          </tr>
          <tr>
            <td colspan="2">每3小時 150元 / 人</td>
          </tr>
          <tr>
            <td>週六/日</td>
            <td>13:00 - 22:00</td>
          </tr>
          <tr>
            <td colspan="2">每3小時 220元 / 人</td>
          </tr>
          <tr>
            <td colspan="2">週二 公休</td>
          </tr>
        </table>
      </div>
      <div class="col-md-3 d-flex align-items-end justify-content-center">
        <span class="status">還有位</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.store-card {
  background-color: #ffffff;
  border: 1px solid #f5c000;
  border-radius: 12px;
}
.fa-heart {
  /* width: 48px;
  height: 48px; */
}
.status {
  color: green;
}
</style>
