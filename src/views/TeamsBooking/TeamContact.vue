<template>
  <div class="container">
    <div>
      <p>聯絡人姓名</p>
      <input type="text" v-model="contactName" />
    </div>
    <hr />
    <div>
      <p>聯絡人電話</p>
      <input type="phone" v-model="contactPhone" />
    </div>
    <hr />
    <div>
      <p>Email</p>
      <input type="email" v-model="contactEmail" />
    </div>
    <hr />
    <div class="d-flex justify-content-between align-items-center">
      <p>套用優惠</p>
      <div class="coupon-block">
        <div class="input-group input-group-sm">
          <button
            type="button"
            class="coupon-select-output btn btn-outline-secondary"
          >
            {{ Coupon }}
          </button>
          <button
            type="button"
            class="
              split-btn
              btn btn-outline-secondary
              dropdown-toggle dropdown-toggle-split
            "
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span class="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul class="coupon-dropdown-menu dropdown-menu dropdown-menu-end">
            <li
              class="dropdown-item"
              v-for="coupon in useCoupon"
              :key="coupon"
              @click="getCoupon(coupon)"
            >
              {{ coupon.key }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr />
    <div>
      <p>訂位人數</p>
      <div
        class="
          attendance-group
          d-flex
          justify-content-center
          align-items-center
        "
      >
        <div class="btn-group btn-group-sm me-1">
          <button
            class="minus-btn btn btn-outline-secondary"
            type="button"
            @click="quantity >= 2 ? quantity-- : quantity == 1"
          >
            －
          </button>
          <input
            type="text"
            class="form-control text-center"
            oninput="value=value.replace(/[^\d]/g,'')"
            v-model="quantity"
          />
          <button
            class="plus-btn btn btn-outline-secondary"
            type="button"
            @click="quantity++"
          >
            ＋
          </button>
        </div>
        <p>人</p>
      </div>
    </div>
    <button @click="submitContact">確認資訊</button>
  </div>
</template>

<script>
import { db } from "@/firebase/config";
import {
  getDoc,
  doc,
  //addDoc, collection
} from "firebase/firestore";
export default {
  name: "TeamContact",
  mounted() {
    this.setContact();
  },
  data() {
    return {
      contactName: "",
      contactEmail: "",
      contactPhone: "",
      Coupon: "選擇優惠券",
      useCoupon: [
        { key: "免費點心", value: 0 },
        { key: "折價30元", value: 30 },
        { key: "折價50元", value: 50 },
      ],
      couponName: "",
      couponDiscount: "",
      quantity: 1,
      userId:""
    };
  },
  computed: {
    userUID() {
      return this.$store.state.user.uid;
    },
  },
  methods: {
    async setContact() {
      const getData = await getDoc(doc(db, "Account", this.userUID));
      const result = getData.data();
      this.contactEmail = result.Email;
      this.contactPhone = result.Phone;
      this.userId = result.UserId
    },
    getCoupon: function (coupon) {
      this.Coupon = coupon.key;
      this.couponName = this.Coupon;
      this.couponDiscount = coupon.value;
    },
    submitContact() {
      if (this.contactName == "") {
        this.$snackbar.add({
          type: "error",
          text: "請填寫聯絡人姓名",
        });
        return;
      } else if (this.contactPhone == "") {
        this.$snackbar.add({
          type: "error",
          text: "請填寫聯絡人電話",
        });
        return;
      } else if (this.contactEmail == "") {
        this.$snackbar.add({
          type: "error",
          text: "請填寫聯絡人Email",
        });
        return;
      } else {
        var teamContact = {
          BookingId: {
            Count: this.quantity,
            Id: this.userId,
          },
          Quantity: this.quantity,
          Participant: [String(this.userId)],
          Contact: this.contactName,
          Phone: this.contactPhone,
          Email: this.contactEmail,
          Coupon: 1,
          CouponName: this.couponName,
          CouponDiscount: this.couponDiscount,
        };
        this.$store.commit("setTeamContact", teamContact);
        console.log(this.$store.state.teamContact);
        this.$router.push("/ConfirmOrder");
      }
    },
  },
};
</script>

<style>
</style>