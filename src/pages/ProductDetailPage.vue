<template>
    <h1 class="text-2xl font-bold mb-6 text-center">Product Detail page</h1>
    <template>
  <div class="container mx-auto my-64">
    <h1 class="text-2xl font-bold mb-6 text-center">Product Details</h1>

    <div v-if="product">
      <h3 class="product-name text-xl font-semibold mb-2">{{ product.name }}</h3>
      <p class="product-price text-gray-600 mb-4">{{ product.price }}</p>
      <img :src="product.image" alt="Product Image" class="w-full h-48 object-cover mb-4 rounded">
      <!-- แสดงรายละเอียดสินค้าที่นี่ -->
    </div>
    <div v-else>
      <p>Product not found</p>
    </div>
  </div>
</template>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const productId = parseInt(route.params.id);

onMounted(() => {
  product.value = Products.find(p => p.id === productId);
});

</script>