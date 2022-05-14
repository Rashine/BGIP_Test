import { createRouter, createWebHistory } from "vue-router";
// 無所屬
import HomeView from "../views/HomeView.vue";
import TermsView from "../views/TermsView.vue";

//登入與加入
import LoginView from "../views/LoginSignUp/LoginView.vue";
import EmailSendView from "../views/LoginSignUp/EmailSendView.vue";
import SignupView from "../views/LoginSignUp/SignupView.vue";

//店家搜
import BookingView from "../views/StoresBooking/BookingView.vue";
import OrderDetail from "../views/StoresBooking/OrderDetail.vue";
import OrderCompletion from "../views/StoresBooking/OrderCompletion.vue";
import StoresView from "../views/StoresBooking/StoresView.vue";
import StoreView from "../views/StoresBooking/StoreView.vue";
import StoreSearchView from "../views/StoresBooking/StoreSearchView.vue";

//訂位紀錄
import OrderCheck from "../views/BookingRec/OrderCheck.vue";
import OrderListView from "../views/BookingRec/OrderListView.vue";

//個人頁面
import UserProfile from "../views/User/UserView.vue";
import StoreCoupon from "../views/User/StoreCoupon.vue";
import InstantCoupon from "../views/User/InstantCoupon.vue";
import UseCoupon from "../views/User/UseCoupon.vue";

//店家後台
import DetailInfo from "../views/StoreBS/DetailInfo.vue";
import ChargMethod from "../views/StoreBS/ChargMethod.vue";
import ChargMethodEdit from "../views/StoreBS/ChargMethodEdit.vue";
import BusinessHours from "../views/StoreBS/BusinessHours.vue";
import BusinessHoursEdit from "../views/StoreBS/BusinessHoursEdit.vue";
import PeoMax from "../views/StoreBS/PeoMax.vue";
import PeoMaxEdit from "../views/StoreBS/PeoMaxEdit.vue";
import StoreFront from "../views/StoreBS/StoreFront.vue";
import SettingsView from "../views/StoreBS/SettingsView.vue";
import BookingManagement from "../views/StoreBS/BookingManagement.vue";

//揪團搜
import ConfirmOrder from "../views/TeamsBooking/ConfirmOrder.vue";
import TeamSuccess from "../views/TeamsBooking/TeamSuccess.vue";
import TeamsSecView from "../views/TeamsBooking/TeamsSecView.vue";
import NewTeam from "../views/TeamsBooking/NewTeam.vue";
import TeamContact from "../views/TeamsBooking/TeamContact.vue";
import InitiatingView from "../views/TeamsBooking/InitiatingView.vue";
import CreativeTeam from "../views/TeamsBooking/CreativeTeam.vue";

//管理員後台
import AdminBackend from "../views/AdminBS/AdminBackend.vue";
import CouponsRecord from "../views/AdminBS/CouponsRecord.vue";
import OfferRelated from "../views/AdminBS/OfferRelated.vue";
import SendingPoint from "../views/AdminBS/SendingPoint.vue";
import SendingCoupons from "../views/AdminBS/SendingCoupons.vue";
import MemberInfo from "../views/AdminBS/MemberInfo.vue";
import UserList from "../views/AdminBS/UserList.vue"



const routes = [
  //無所屬
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/terms",
    name: "terms",
    component: TermsView,
  },

  //登入與加入
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/emailsend",
    name: "emailsend",
    component: EmailSendView,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
  },

  //店家搜
  {
    path: "/booking",
    name: "booking",
    component: BookingView,
  },
  {
    path: "/orderdetail",
    name: "OrderDetail",
    component: OrderDetail,
  },
  {
    path: "/ordercompletion",
    name: "OrderCompletion",
    component: OrderCompletion,
  },
  {
    path: "/stores",
    name: "StoresView",
    component: StoreSearchView,
  },
  {
    path: "/stores/:storeId",
    name: "StoreView",
    component: StoreView,
  },
  {
    path: "/storesearch",
    name: "storesearch",
    component: StoresView,
  },

  //訂位紀錄
  {
    path: "/ordercheck",
    name: "OrderCheck",
    component: OrderCheck,
  },
  {
    path: "/orderlist",
    name: "orderlist",
    component: OrderListView,
  },

  //個人頁面
  {
    path: "/user",
    name: "UserProfile",
    component: UserProfile,
  },
  {
    path: "/storecoupon",
    name: "StoreCoupon",
    component: StoreCoupon,
  },
  {
    path: "/instantcoupon",
    name: "InstantCoupon",
    component: InstantCoupon,
  },
  {
    path: "/usecoupon",
    name: "UseCoupon",
    component: UseCoupon,
  },

  //店家後台
  {
    path: "/BookingManagement/:listId",
    name: "DetailInfo",
    component: DetailInfo,
  },
  {
    path: "/ChargMethod",
    name: "ChargMethod",
    component: ChargMethod,
  },
  {
    path: "/ChargMethodEdit",
    name: "ChargMethodEdit",
    component: ChargMethodEdit,
  },
  {
    path: "/BusinessHours",
    name: "BusinessHours",
    component: BusinessHours,
  },
  {
    path: "/BusinessHoursEdit",
    name: "BusinessHoursEdit",
    component: BusinessHoursEdit,
  },
  {
    path: "/PeoMax",
    name: "PeoMax",
    component: PeoMax,
  },
  {
    path: "/PeoMaxEdit",
    name: "PeoMaxEdit",
    component: PeoMaxEdit,
  },
  {
    path: "/StoreFront",
    name: "StoreFront",
    component: StoreFront,
  },
  {
    path: "/SettingsView",
    name: "SettingsView",
    component: SettingsView,
  },
  {
    path: "/BookingManagement",
    name: "BookingManagement",
    component: BookingManagement,
  },

  //揪團搜
  {
    path: "/ConfirmOrder",
    name: "ConfirmOrder",
    component: ConfirmOrder,
  },
  {
    path: "/TeamSuccess",
    name: "TeamSuccess",
    component: TeamSuccess,
  },
  {
    path: "/teams",
    name: "teams",
    component: TeamsSecView,
  },
  {
    path: "/newteam",
    name: "newteam",
    component: NewTeam,
  },
  {
    path: "/teamcontact",
    name: "teamcontact",
    component: TeamContact,
  },
  {
    path: "/initiating",
    name: "initiating",
    component: InitiatingView,
  },
  {
    path: "/CreativeTeam",
    name: "CreativeTeam",
    component: CreativeTeam,
  },
    //管理員後台
    {
      path: "/AdminBackend",
      name: "AdminBackend",
      component: AdminBackend,
    },
    {
      path: "/CouponsRecord",
      name: "CouponsRecord",
      component: CouponsRecord,
    },
    {
      path: "/OfferRelated",
      name: "OfferRelated",
      component: OfferRelated,
    },
    {
      path: "/SendingCoupons",
      name: "SendingCoupons",
      component: SendingCoupons,
    },
    {
      path: "/SendingPoint",
      name: "SendingPoint",
      component: SendingPoint,
    }, 
    {
      path: "/MemberInfo",
      name: "homeMemberInfo",
      component: MemberInfo,
    },
    {
      path: "/UserList",
      name: "UserList",
      component: UserList,
    },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
