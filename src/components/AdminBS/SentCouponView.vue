<template>
          <!-- Coupons components -->
          <form action="" class="d-flex">
            <div class="container py-3">
              <!-- 優惠券名稱 -->
              <div class="row pt-3 pb-3">
                <div
                  class="col-4 text-lg-end col-lg-3 text-center"
                  style="padding: 0px"
                >
                  <a style="background-color: #f6d55e; padding: 5px"
                    >優惠券名稱</a
                  >
                </div>
                <div class="col-1 d-lg-block d-none"></div>
                <div class="col-7 col-lg-6 text-start">
                  <input
                    class="form-control"
                    type="text"
                    style=""
                    placeholder="50元折扣優惠"
                  />
                </div>
              </div>
              <!-- 優惠券名稱end -->
              <!-- 優惠日期 -->
              <div class="row pb-3">
                <div class="col-3 text-end" style="padding: 0px">
                  <a style="background-color: #f6d55e; padding: 5px"
                    >優惠日期</a
                  >
                </div>
                <div class="col-1 d-lg-block d-none"></div>
                <div class="col-8 col-lg-6 m-0">
                  <div class="input-group">
                    <span
                      class=""
                      style="padding: 0px; background-color: #ffffff"
                      >開始日期&emsp;</span
                    >
                    <input
                      type="text"
                      aria-label="yymmdd"
                      class="form-control"
                      style="min-width: 66px"
                      placeholder="yy/mm/dd"
                    />&emsp;
                    <input
                      type="text"
                      aria-label="time"
                      class="form-control"
                      style="min-width: 50px"
                      placeholder="00:00"
                    />
                  </div>
                  <div class="input-group">
                    <span
                      class=""
                      style="padding: 0px; background-color: #ffffff"
                      >結束日期&emsp;</span
                    >
                    <input
                      type="text"
                      aria-label="yymmdd"
                      class="form-control"
                      style="min-width: 66px"
                      placeholder="yy/mm/dd"
                    />&emsp;
                    <input
                      type="text"
                      aria-label="time"
                      class="form-control"
                      style="min-width: 50px"
                      placeholder="00:00"
                    />
                  </div>
                </div>
              </div>
              <!-- 優惠日期end -->
              <!-- 發放對象 -->
              <div class="row pb-3">
                <div class="col-3 text-end" style="padding: 0px">
                  <a style="background-color: #f6d55e; padding: 5px"
                    >發放對象</a
                  >
                </div>
                <div class="col-1 d-lg-block d-none"></div>
                <div class="col-8 m-0">
                  <div class="container p-0">
                    <div class="row">
                      <div class="col-11">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault1"
                          >
                            全體發放
                          </label>
                        </div>
                      </div>
                      <div class="col-1"></div>
                    </div>
                    <div class="row">
                      <div class="col-lg-3 col-11">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            checked
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault2"
                          >
                            代碼發放
                          </label>
                        </div>
                      </div>
                      <div class="col-lg-6 col-11">
                        <div class="aa">
                          <div class="input-group">
                            <span class="" id="basic-addon1">代碼:&emsp;</span>
                            <input
                              type="text"
                              class="form-control mb-3"
                              placeholder="僅能輸入英數字20字以內不區分大小寫"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                              title="僅能輸入英數字20字以內不區分大小寫"
                            />
                          </div>
                          <span
                            class="d-block d-lg-none"
                            style="color: red; font-size: 14px"
                            >僅能輸入英數字20字以內不區分大小寫</span
                          >
                        </div>
                        <div class="row">
                          <div class="col-lg-6 col-md-6 col-11 mb-3">
                            使用上限 <input type="text" style="width: 40px" />次
                          </div>
                          <div class="col-lg-6 col-md-6 col-11">
                            <span class="form-check">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                              />
                              <label
                                class="form-check-label"
                                for="flexCheckDefault"
                              >
                                期間無上限
                              </label>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12 col-lg-9">
                        <div class="input-group mb-3">
                          <input
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
              <!-- 優惠折扣 -->
              <div class="row pb-3">
                <div class="col-3 text-end" style="padding: 0px">
                  <a style="background-color: #f6d55e; padding: 5px"
                    >優惠折扣</a
                  >
                </div>
                <div class="col-1 d-lg-block d-none"></div>
                <div class="col-8">
                  <div class="row">
                    <select
                      name="open"
                      class="mb-3"
                      style="width: 150px; margin: 0px 10px"
                    >
                      <option value="">-</option>
                      <optgroup label="上午">
                        <option value="" selected>請選擇</option>
                        <option value="">9:30</option>
                        <option value="">10:00</option>
                      </optgroup>
                    </select>
                  </div>
                  <div class="row">
                    <div class="col-11 col-lg-4">
                      <select name="open" class="mb-3" style="width: 150px">
                        <option value="">-</option>
                        <optgroup label="上午">
                          <option value="" selected>折扣</option>
                          <option value="">9:30</option>
                          <option value="">10:00</option>
                        </optgroup>
                      </select>
                    </div>
                    <div class="col-11 col-lg-6">
                      <select name="open" class="mb-3" style="width: 100px">
                        <option value="">-</option>
                        <optgroup label="上午">
                          <option value="" selected>請選擇</option>
                          <option value="">9:30</option>
                          <option value="">10:00</option>
                        </optgroup></select
                      >元
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-11 col-lg-4">
                      <select name="open" class="mb-3" style="width: 150px">
                        <option value="">-</option>
                        <optgroup label="上午">
                          <option value="" selected>兌換</option>
                          <option value="">9:30</option>
                          <option value="">10:00</option>
                        </optgroup>
                      </select>
                    </div>
                    <div class="col-11 col-lg-6">
                      <select name="open" class="mb-3" style="width: 200px">
                        <option value="">-</option>
                        <optgroup label="上午">
                          <option value="" selected>免費點心</option>
                          <option value="">9:30</option>
                          <option value="">10:00</option>
                        </optgroup>
                      </select>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-11 col-lg-4">
                      <select name="open" class="mb-3" style="width: 150px">
                        <option value="">-</option>
                        <optgroup label="上午">
                          <option value="" selected>馬上用</option>
                          <option value="">9:30</option>
                          <option value="">10:00</option>
                        </optgroup>
                      </select>
                    </div>
                    <div class="col-11 col-lg-6">
                      <select name="open" class="mb-3" style="width: 200px">
                        <option value="">-</option>
                        <optgroup label="上午">
                          <option value="" selected>折抵消費兩百元</option>
                          <option value="">9:30</option>
                          <option value="">10:00</option>
                        </optgroup>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 優惠折扣end -->
              <!-- 使用次數 -->
              <div class="row pb-3">
                <div class="col-3 text-end" style="padding: 0px">
                  <a style="background-color: #f6d55e; padding: 5px"
                    >使用次數</a
                  >
                </div>
                <div class="col-1 d-lg-block d-none"></div>
                <div class="col-7 text-start">
                  <div class="input-group mb-3">
                    <input type="text" style="width: 50px" />
                    <span class="">次</span>
                  </div>
                </div>
              </div>
              <!-- 使用次數end -->
              <!-- 優惠內文 -->
              <div class="row pb-4">
                <div class="col-3 text-end" style="padding: 0px">
                  <a style="background-color: #f6d55e; padding: 5px"
                    >優惠內文</a
                  >
                </div>
                <div class="col-1 d-lg-block d-none"></div>
                <div class="col-8 col-lg-6 text-start">
                  <div class="form-floating">
                    <textarea
                      class="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                      style="height: 100px"
                    ></textarea>
                    <label for="floatingTextarea2">Comments</label>
                  </div>
                </div>
              </div>
              <!-- 優惠內文end -->
              <div class="btn-block d-flex justify-content-center mt-3">
                <button class="mainBtn text-center mb-5">確定發放</button>
              </div>
            </div>
          </form>
          <!-- Coupons componentsEND -->
</template>