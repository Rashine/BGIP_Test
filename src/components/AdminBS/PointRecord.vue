<template>
          <!-- <PointRecord /> -->
          <div
            class="py-5"
            style="max-width: 961px; min-width: 362px; margin: 0px auto"
          >
            <div class="row justify-content-between pb-3 px-3">
              <div class="col-5 text-start">明細</div>
              <div class="col-3 text-center">點數</div>
              <div class="col-4 text-end">消費日期</div>
            </div>
            <hr>
            <div class="row justify-content-between py-1 px-3">
              <div class="col-5 text-start">消費:XXX桌遊店</div>
              <div class="col-3 text-center">-50點</div>
              <div class="col-4 text-end">2022/02/22</div>
            </div>
            <hr>
            <div class="row justify-content-between py-1 px-3">
              <div class="col-5 text-start">消費:ZZZZZZZ桌遊店</div>
              <div class="col-3 text-center">-100點</div>
              <div class="col-4 text-end">2022/02/22</div>
            </div>
            <hr>
          </div>
              <router-link to="/SendingPoint">
      <div class="btn-block d-flex justify-content-center">
        <button class="mainBtn text-center mb-5" style="text-decoration: none">
          發放點數
        </button>
      </div>
    </router-link>
          <!-- <PointRecord /> -->
</template>