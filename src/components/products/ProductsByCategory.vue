<script>
import apiProducts from '../../api/products';
import CardProduct from '../base/CardProduct.vue';

export default{
    components: {
        CardProduct
    },
    data(){
        return { productsByCategory: null };
    },

    watch: {
        '$route.params.category': function () {
            this.getProductsByCategory();
        }
    },

    mounted(){
        this.getProductsByCategory();
    },

    methods:{
        getProductsByCategory(){
            let categoryId = this.$route.params.category;
            if(categoryId !== " "){

                let filters = `category=${categoryId}`;
                apiProducts.listProductsByCategory(filters)
                .then(response => {
                    this.productsByCategory = response.data.items;
                })
                
            } else {
                apiProducts.listProducts()
                .then(response => {
                    this.productsByCategory = response.data.items;
 
                })

            }


        }
    }
}
</script>


<template>
    <div class="mt-2 row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-2 g-2">
        <div class="col"
        v-for="product in productsByCategory"
        :key="product.id">
            <CardProduct 
                :image= product.imageUrl
                :name= product.name
                :price="product.defaultDisplayedPriceFormatted"
                :route="{ name: 'product-detail', params: { id: product.id} }"
            />
        </div>
    </div>
</template>