<script>
import apiCategories from '../../api/categories';
// import CardProduct from '../base/CardProduct.vue';
// import PopularProducts from '../products/PopularProducts.vue';

export default {

    data() {
        return {
            categories: [],
        }
    },

    methods: {
        getCategories() {
            apiCategories.listCategories()
                .then(response => {
                this.categories = response.data.items;
                // console.log(response.data)
                // this.categories.map(item => console.log(item)) ;
        })
        }
    },
    
    mounted(){
        this.getCategories();
    },
}
</script>

<template>
    <!-- <div class="card-container">
        <div 
        class="card cards border-dark"
        v-for="category in categories" 
        :key="category.id">
            <div class="card-body">     
                <router-link 
                class="link-category"
                :to="{ name: 'categories', params: { 'category': category.id}}">
                    <h5 class="card-title text-center">{{ category.name }}</h5>
                </router-link>
            </div>
        </div>

        
    </div> -->

    <div class="card-container">
        <div 
        class="card cards border-dark">
            <div class="card-body">     
                <router-link 
                class="link-category"
                :to="{ name: 'categories', params: { 'category': '01'}}">
                    <h5 class="card-title text-center">Heces</h5>
                </router-link>
            </div>
        </div>

        <div 
        class="card cards border-dark">
            <div class="card-body">     
                <router-link 
                class="link-category"
                :to="{ name: 'categories', params: { 'category': '02'}}">
                    <h5 class="card-title text-center">Orina</h5>
                </router-link>
            </div>
        </div>
    </div>

</template>


<style scoped>
.link-category {
    text-decoration: none;
    color: black;
}
.card-container {
    display: flex;
    gap: 9px;
}
.cards {
    cursor: pointer;
    transform: scale(var(--escala, 1));
    transition: transform 0.25s;
    /* flex-grow: auto; */
}
.card:hover {
    --escala: 1.1;
}
.card-body {
    padding: 5px;
}
.card-title {
    font-size: 1rem;
}
h5 {
    margin-bottom: 0.3rem;
}
</style>