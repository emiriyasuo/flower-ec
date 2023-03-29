<script setup lang="ts">
import { inject, computed,reactive} from 'vue';
import type { Item } from "@/interfaces"
import { RouterLink } from "vue-router";
import router from '@/router';
import type {Cart} from "@/interfaces";
import { ref } from 'vue';

interface Props {
    id: number;
}

const props = defineProps<Props>();
const ItemList  = inject("itemList") as any;

// Map<number, Item>
console.log(ItemList)

const item = computed(
    ():Item => {
        return ItemList.get(props.id) as Item;
    }
)

const carts = ref([]);
const id = ref('');
const quantity=ref('');
const getCarts = async () => {
  const response = await fetch('http://localhost:3000/cart');
  const data = await response.json();
  carts.value = data;
};
getCarts();

const addCart = async () => {
  const response = await fetch('http://localhost:3000/cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({itemId:`${props.id}`,quantity:quantity.value}),
  });
  const data = await response.json();
  carts.value.push(data);
  id.value = '';
  quantity.value='';
};

// const cartList = inject("cartList") as any;
// const cart:Cart = reactive(
//     {
//         id:"",
//         itemId:"",
//         quantity:""
//     }
// );
// const onAdd = ():void =>{
//     console.log(cart);
//     cartList.set(cart);
//     router.push({name:"cartList"})
// }
</script>

<template>
<!-- <RouterLink v-bind:to="{name:'ItemList'}">
    アイテムリスト
</RouterLink> -->
    <div v-for="item in ItemList">
        <div v-if="item.id === props.id">
            <div>{{ item.name}} 価格:{{ item.price }}円</div>
            <!-- <img v-bind:src= "item.image"/> -->
            <img src= "../../../public/IMG_01.jpg"/>
            <div>{{ item.detail }}</div>
        </div>
    </div>
    <form @submit.prevent="addCart">
    <div>
      <!-- <p>id:<input v-model="id" /></p> -->
      <p>数量:<input v-model="quantity" /></p>
      <!-- <p>itemid:<input v-model="props.id"></p> -->
    </div>
    <div>
      <button type="submit">cartに追加</button>
    </div>
  </form> 
    <!-- <from v-on:submit.prevent="onAdd">
            <dl> -->
                <!-- <dt>
                    <label for="itemId">ID&nbsp</label>
                </dt> -->
                <!-- <dd>
                    <input type="text" id="id" v-model="cart.id" required>
                </dd>
                <dd>
                    <input type="text" id="itemId" v-model="props.id" required>
                </dd>
                <dt>
                    <label for="quantity">数量</label>
                </dt>
                <dd>
                    <input type="text" id="quantity" v-model="cart.quantity" required>
                </dd>
            </dl>
            <button type="submit">登録</button>
        </from>
     -->
<!-- {{ ItemList }} -->
</template>

<style scoped>
img{
  width:300px;
  height:300px
}

</style>
