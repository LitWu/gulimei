<template>
    <div class="">
        <ProductList/>
    </div>
    
</template>

<script setup>
import ProductList from '../components/ProductList.vue'
import { ref } from "vue"
const pageName = ref("ProductCategoriesPage")

</script>