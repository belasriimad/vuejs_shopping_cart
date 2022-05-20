<template>
    <div className='row my-4'>
        <ProductListItem v-for="product in data.products" 
            :key="product.id" :product="product" />
    </div>
</template>

<script setup>
import ProductListItem from './ProductListItem.vue'
import { useShoppingStore } from '../stores'

//get products from store
const data = useShoppingStore();
</script>

<style>
</style>