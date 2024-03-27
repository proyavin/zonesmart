<script>
import ProductsTable from "@/components/products/Table.vue"
import productsStore from '@/store/products.store.js'
export default {
    name: "HomeView",
    components: {
        ProductsTable
    },
    computed: {
        products() {
            return productsStore.state.products
        }
    },
    created() {
        this.getProducts()
    },
    methods: {
        async getProducts() {
            try {
                await productsStore.dispatch("getProducts")
            } catch (err) {
                alert(err)
            }
        }
    }
}
</script>

<template lang="pug">
    ProductsTable(:products="products")
</template>
