<!-- <script setup lang="ts">
import {inject, reactive} from "vue";
import { useRouter } from 'vue-router';
import type {Cart} from "@/interfaces";

const router = useRouter();
const cartList = inject("cartList") as any;
const cart:Cart = reactive(
    {
        // id:"",
        itemId:"itemId",
        quantity:""
    }
);

const onAdd = ():void =>{
    console.log(cart);
    cartList.set(cart);
    router.push({name:"cartList"})
}

</script>

<template>
            <from v-on:submit.prevent="onAdd">
            <dl>
                <dt>
                    <label for="itemId">ID&nbsp</label>
                </dt>
                <dd>
                    <input type="text" id="itemId" v-model="cart.itemId" required>
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
</template> -->
