<script>
import apiProducts from '../../api/products';
import CardProduct from '../base/CardProduct.vue';
import { mapActions } from 'vuex'
import {useToast} from "vue-toastification";
import "vue-toastification/dist/index.css";

export default{
    setup() {
      // Get toast interface
      const toast = useToast();
    //   toast("I'm a toast!");

      return {toast};
    },

    components: {
        CardProduct
    },

    data(){
        return {
            exams: [
                {
                    id: 1,
                    name: "Examen General de Orina",
                    price: 195.0,
                    preparation: "Cualquier hora del día ",
                    delivery: "Mismo día, dentro de 1 hora.",
                },
                {
                    id: 2,
                    name: "Examen General Heces",
                    price: 250.0,
                    preparation: "Cualquier hora del día ",
                    delivery: "Mismo día, dentro de 1 hora.",
                },
                // Agregar más exámenes aquí...
            ],
            // productDetail: '', 
            // productsByCategory: null,
            cart: [], // Agrega una lista para almacenar los objetos de carrito
            showCart: false // Agrega una propiedad para controlar la visibilidad del carrito
        };
    },

    // watch: {
    //     '$route.params.category': function () {
    //         this.getProductsByCategory();
    //     }
    // },

    // mounted(){
    //     this.getProductsByCategory();
    // },

    methods:{
        // getProductsByCategory(){
        //     let categoryId = this.$route.params.category;
        //     if(categoryId !== " "){

        //         let filters = `category=${categoryId}`;
        //         apiProducts.listProductsByCategory(filters)
        //         .then(response => {
        //             this.productsByCategory = response.data.items;
        //         })
                
        //     } else {
        //         apiProducts.listProducts()
        //         .then(response => {
        //             this.productsByCategory = response.data.items;
 
        //         })

        //     }


        // },


        // Agregar al store global
        ...mapActions(['addToCart']),


        addProductToCart(exam) {
        // console.log(this.productDetail)

            
            // const examen = {
            //     id: this.exams.id,
            //     name: this.exams.name,
            //     price: this.exams.price,
            //     preparation: this.exams.preparation,
            //     delivery: this.exams.delivery,
            // };
            // this.addToCart(product)

            // this.cart.push(product);
            // console.log('product:', product);
            // console.log(this.cart.push(product));
            
            // this.toast.success('El producto se ha agregado al carrito.');

            // this.addToCart(examen)

            // Agregar el examen al carrito
            this.cart.push(exam);
            // Mostrar un mensaje de éxito
            this.toast.success("Examen agregado al carrito exitosamente.");
            console.log(exam)

        },
    }
}
</script>


<template>
    <!-- <div class="mt-2 row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-2 g-2">
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
    </div> -->

    <form @submit.prevent="addProductToCart">
    <div class="row contenedor">
      <div
        class="card link-none col-5"
        v-for="exam in exams"
        :key="exam.id"
      >
        <div class="card-body">
          <h5 class="card-title title">{{ exam.name }}</h5>
          <span class="text-link">Preparación del paciente: <b>{{ exam.preparation }}</b></span>
          <span class="text-link">Entrega: <b>{{ exam.delivery }}</b></span>
          <div class="row mt-3">
            <p class="card-text col-6 fw-semibold align-text-bottom m-0">Costo: <b>L{{ exam.price.toFixed(2) }}</b></p>
            <div class="card p-2 mt-3">
                <button type="submit" class="btn btn-primary" @click="addToCart(exam)">AGREGAR AL CARRITO</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>