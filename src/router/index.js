import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../components/Main.vue";
import Bedding from "../components/Bedding.vue";
import Winter from "../components/Winter.vue";
import Summer from "../components/Summer.vue";
import Login from "../components/Login.vue";
import Cart from "../components/Cart.vue";
import SummerCoolMat from "../components/SummerCoolMat.vue";
import SummerFan from "../components/SummerFan.vue";
import WinterCarbonMat from "../components/WinterCarbonMat.vue";
import WinterTopper from "../components/WinterTopper.vue";
import Bedding_inner from "../components/Bedding_inner.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/bedding",
    name: "bedding",
    component: Bedding,
  },
  {
    path: "/winter",
    name: "winter",
    component: Winter,
  },
  {
    path: "/summer",
    name: "summer",
    component: Summer,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
  {
    path: "/coolmat",
    name: "coolmat",
    component: SummerCoolMat,
  },
  {
    path: "/fan",
    name: "fan",
    component: SummerFan,
  },
  {
    path: "/carbon",
    name: "carbon",
    component: WinterCarbonMat,
  },
  {
    path: "/topper",
    name: "tooper",
    component: WinterTopper,
  },
  {
    path: "/bedinner",
    name: "bedinner",
    component: Bedding_inner,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
