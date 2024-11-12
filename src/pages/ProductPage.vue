<template>
    <h1 class="text-2xl font-bold mb-6 text-center">Product</h1>
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="product in Products" :key="product.id" class="p-4 border rounded-lg shadow-md">
                <img :src="product.image" alt="Product Image" class="w-full h-48 object-cover mb-4 rounded">
                <h3 class="product-name text-xl font-semibold mb-2">{{ product.name }}</h3>
                <p class="product-price text-white mb-4">{{ product.price }}</p>
                <router-link :to="'/product/' + product.id"
                    class="btn bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    View Details
                </router-link>
            </div>
        </div>
    </div>


</template>

<script setup>
import { ref } from 'vue';


const Products = ref([
    {
        id: 1,
        name: 'Lemon',
        image: '/assets/lemon.jpg',
        price: '50'
    },
    {
        id: 2,
        name: 'Apple',
        image: '/assets/apple.jpg',
        price: '60'
    },
    {
        id: 3,
        name: 'Apple',
        image: '/assets/apple.jpg',
        price: '60'
    },
    {
        id: 4,
        name: 'Apple',
        image: '/assets/apple.jpg',
        price: '60'
    },
])




</script>