<script>
import { mapActions } from 'vuex'

import ListCategories from '../components/categories/ListCategories.vue';
// import PopularProducts from '../components/products/PopularProducts.vue';

import Ecommerce from "@ecwid/sdk";


export default{
    components: {
        ListCategories,
    },

    methods: {
        ...mapActions(['setPhoneNumber'])
    },    
    mounted() {
        // this.$store.dispatch('setPhoneNumber', this.$route.params.phone_number)
        // if(this.$route.params.phone_number === " " || this.$route.params.phone_number === null) {
        //     // console.log(this.$route.params.phone_number, 'vacio')
        //     this.$router.push({ name: '404'})
        // }

        const phoneGet = this.$store.getters.getPhoneNumber;
        if(phoneGet !== " " && phoneGet !== null){
            console.log('phoneget trae algo:', phoneGet)
        } else {
        // this.$store.commit('setPhoneNumber', this.$route.params.phone_number)
        this.$store.dispatch('setPhoneNumber', this.$route.params.phone_number)

        console.log('no trae nada phone get:', phoneGet)


        const ecommerce = new Ecommerce({
            storeId: 82202526,

        });
        const cart = ecommerce.cart.get()
        .then((result) => console.log(result))
        .catch((error) => console.error(error))

      }
    //   const phone = this.$store.state.phoneNumber;
      console.log(phoneGet);
        // console.log(this.$route.params.phone_number)
    }
}
</script>


<template>
    <div class="container" style="margin-top:5em">
        <h2 class="mt-5">Categorias</h2>
        <div class="overflow">
            <ListCategories />
        </div>


        <div class="transition-router">

            <router-view></router-view>

        </div>

    </div>
</template>



<style scoped>

/* .transition-router {
    transition: all 4s ease;
} */
.overflow {
    display: flex;
    overflow-x:auto;
    overflow-y: hidden;
    padding: 5px;
    width: auto;
}
@media screen and (min-width: 480px) {
    .overflow {
        justify-content: center;
        align-items: center;
    }
}

.overflow::-webkit-scrollbar {
    -webkit-appearance: none;
}

.overflow::-webkit-scrollbar:vertical {
    width:10px;
}

.overflow::-webkit-scrollbar-button:increment,.overflow::-webkit-scrollbar-button {
    display: none;
} 

.overflow::-webkit-scrollbar:horizontal {
    height: 10px;
}

.overflow::-webkit-scrollbar-thumb {
    background-color: #797979;
    border-radius: 20px;
    border: 2px solid #f1f2f3;
}

.overflow::-webkit-scrollbar-track {
    border-radius: 10px;  
}
</style>