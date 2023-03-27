<script setup lang="ts">
import { ref } from 'vue';
import  {inject} from "vue";
import { RouterLink} from "vue-router";
import type {Item} from "@/interfaces";

const itemList = inject("itemList") as Map<any, Item>;

</script>

<template>
    <h1>flower</h1>
    <ul>
    <li v-for="item in itemList" :key="item">
      <RouterLink v-bind:to="{name:'ItemDetail', params:{id:item.id}}">
    <p>{{item.name}}</p>
    <img src="../../../public/IMG_02.jpg"  alt="商品画像" />
    </RouterLink>
    </li>
    </ul>
</template>

<style scoped>
img{
  width:300px;
  height:300px
}
li{
  list-style:none;
}
</style>
