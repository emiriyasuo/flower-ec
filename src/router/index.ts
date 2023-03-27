import { createRouter, createWebHistory } from 'vue-router'
import type {RouteRecordRaw} from "vue-router";
import AppTop from "@/views/AppTop.vue";
import TopView from "../views/TopView.vue";
import ItemList from "../views/item/ItemList.vue"
import ItemDetail from "../views/item/ItemDetail.vue"
import App from "../App.vue"

const routeSettings: RouteRecordRaw[]=[
  {
    path:"/top",
    name:"AppTop",
    component:AppTop
  },
  {
    path:"/app",
    name:"App",
    component:App
  },
  {
    path:"/",
    name:"TopView",
    component:TopView
  },
  {
    path:"/item/itemList",
    name:"ItemList",
    component:()=>{
      return import("@/views/item/ItemList.vue")
    },
  },
  {   
        path:"/item/detail/:id",
        name:"ItemDetail",
        component:()=>{
          return import("@/views/item/ItemDetail.vue")
        },
        props:(routes)=>{
          const idNum = Number(routes.params.id);
          return{
            id:idNum
          };
        }
  },
    // component:ItemList,
  //   children: [
  //     {
  //       path:"/item/detail/:id",
  //       name:"ItemDetail",
  //       component:()=>{
  //         return import("@/views/item/ItemDetail.vue")
  //       },
  //       props:(routes)=>{
  //         const idNum = Number(routes.params.id);
  //         return{
  //           id:idNum
  //         };
  //       }
  //     }
  //   ]
  // },
  {
    path:"/member/memberList",
    name:"MemberList",
    component:()=>{
      return import("@/views/member/MemberList.vue")
    },

  children: [
  {
    path:"/member/detail/:id",
    name:"MemberDetail",
    component:()=>{
      return import("@/views/member/MemberDetail.vue")
    },
    props:(routes)=>{
      const idNum = Number(routes.params.id);
      return{
        id:idNum
      };
    }
  },
  {
    path:"/member/add",
    name:"MemberAdd",
    component:()=>{
      return import("@/views/member/MemberAdd.vue")
    }
  },
]
},
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routeSettings
})

export default router;
