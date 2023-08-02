<script>
import apiProducts from '../../api/products';
import CardProduct from '../base/CardProduct.vue';

export default{
    components: {
        CardProduct
    },
    data(){
        return { products: null };
    },

    mounted(){
        this.getProducts();
    },

    methods:{
        getProducts(){
           apiProducts.listProducts()
            .then(response => {
                this.products = response.data.items;
                // console.log(response.data)
                // this.categories.map(item => console.log(item)) ;
            })
        }
    }
}

</script>

<template>
    <div class="mt-2 row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-2 g-2">
        <div class="col"
        v-for="product in products"
        :key="product.id">
            <CardProduct 
                :image= product.imageUrl
                :name= product.name
                :price="product.defaultDisplayedPriceFormatted"
            />
        </div>
    </div>
</template>