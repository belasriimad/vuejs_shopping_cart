<template>
    <div class="col-md-4 mb-2">
        <div class="card" style="width: '18rem'">
            <img :src="product.image" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{{product.name}}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button 
                    @click="data.addToCart(product)"
                    class="btn btn-primary">
                    <i class="bi bi-cart-check"></i> add to cart
                </button>
            </div>
        </div>
    </div>  
</template>

<script setup>
    import { useShoppingStore } from '../stores'
    //get props
    const props = defineProps({
        product: {
            type: Object,
            required: true
        }
    });
    //get store
    const data = useShoppingStore();
</script>

<style>

</style>