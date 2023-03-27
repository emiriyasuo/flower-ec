<script setup lang="ts">
import { inject, computed } from 'vue';
import type { Item } from "@/interfaces"
import { RouterLink } from "vue-router";
import router from '@/router';

interface Props {
    id: number;
}

const props = defineProps<Props>();
const ItemList  = inject("itemList") as Map<number, Item>;

console.log(ItemList)

const item = computed(
    ():Item => {
        return ItemList.get(props.id) as Item;
    }
)
</script>

<template>
<RouterLink v-bind:to="{name:'ItemList'}">
    アイテムリスト
</RouterLink>
{{ ItemList }}
{{ item }}
</template>
