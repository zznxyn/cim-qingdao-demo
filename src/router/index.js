import Vue from "vue";
import VueRouter from "vue-router";
import Login from '../views/Login.vue' //登录
import Home from "../views/Home.vue";  //总入口
import InnerHome from '../views/Home/InnerHome.vue';//总览
import Merchants from "../views/Merchants";//招商
import MerchantsInner from '../views/Merchants/InnerMerchants.vue';//招商总览
import Manage from '../views/Merchants/Manage.vue';//招商————项目管理

import Build from '../views/Build.vue';//规建
import Rules from '../views/RulesToBuild/RulesToBuild.vue';//规建——总览
import Inquiry from '../views/RulesToBuild/Inquiry.vue';//规建——项目资料预审
import Solutions from '../views/RulesToBuild/Solutions.vue';//规建——智慧工地
import Single from '../views/RulesToBuild/Single.vue';//智慧工地——单个项目


import Operation from '../views/Operation.vue';  //运营  
import OperationMethods from '../views/Run/OperationMethods.vue';//运行——应急预案
import Sets from '../views/Run/Set.vue' ;//运营——设备设施
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/home",
    component: Home,
    redirect() {
      return '/home/total'
    },
    children: [
      {
        path: "total",
        name: "home",
        component:InnerHome
      },
      {
        path: "merchants",//招商
        component: Merchants,
        children: [
          {
            path: "",
            name: "merchantsInner",
            component: MerchantsInner,
          },
          {
            path: "manage",
            name: "manage",
            component: Manage,
          },
        ],
      },
      {
        path: "build", //规建
        component: Build,
        children: [
          {
            path: "",
            name: "rules",
            component: Rules,
          },
          {
            path: "inquiry",
            name: "inquiry",
            component: Inquiry,
          },
          {
            path: "solutions",
            name: "solutions",
            component: Solutions,
          },
          {
            path: "single",
            name: 'single',
            component: Single
          }
        ],
      },
      {
        path:'operation',
        component:Operation,
        children:[
          {
            path: "",
            name: "methods",
            component: OperationMethods,
          },
          {
            path: "set",
            name: "set",
            component: Sets,
          }
        ]
      }
    ],
  },
];

const router = new VueRouter({
  routes
});

export default router;
