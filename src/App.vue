<script setup lang="ts">
import { reactive, provide } from 'vue';
import {RouterView} from "vue-router";
import type {Member} from "@/interfaces";
import type {Item} from "@/interfaces"
import { ref } from 'vue';

const memberList = new Map<number, Member>();
memberList.set(33456,{id:33456,name:"田中太郎",email:"bow@example.com",points:35,note:"初回入会特典あり"});
memberList.set(47783,{id:44783,name:"鈴木二郎",email:"mue@example.com",points:53});
provide("memberList",reactive(memberList));

console.log( memberList)


const getItemList :any = ref([]);
const getItems = async () => {
  const response = await fetch('http://localhost:3000/item');
  const data = await response.json();
  getItemList.value = data;
};
getItems();

console.log(getItemList)
const itemList = new Map<number,Item>();

for(let i=0;i<getItemList.length;i++){
  itemList.set(getItemList[i].id,getItemList[i])
}

provide("itemList",reactive(itemList));

// console.log(itemList)
</script>

<template>
  <!-- <header>
    <h1>Vue Routerサンプル</h1>
  </header>
  <main> -->
    <RouterView />
  <!-- </main> -->
</template>

<style>
  main{
    border: blue 1px solid;
    padding:10px;
  }
  #breadcrumbs ul li{
    display:inline;
    list-style-type: none;
  }
  #breadcrumbs{
    margin-left: 0px;
  }
  #breadcrumbs ul{
    padding-left: 0px;
  }
  #breadcrumbs ul .current{
    color: red;
  }
  #breadcrumbs ul li:before{
    content:">";
  }
  #breadcrumbs ul li:first-child:before{
    content:none;
  }
</style>
