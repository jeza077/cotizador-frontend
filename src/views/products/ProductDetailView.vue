<script>
import ProductDetail from '../../components/products/ProductDetail.vue';

export default {
    components: {
        ProductDetail
    },
    name: 'ProductDetailView',
    mounted() {
        console.log('ProductDetailView mounted');
        console.log('id:', this.$route.params.id);

    }
}
</script>


<template>
    <div class="container" style="margin-top:5em">
        <div class="row row-cols-1 row-cols-lg-2 g-2">
            <ProductDetail />
        </div>
    </div>
</template>