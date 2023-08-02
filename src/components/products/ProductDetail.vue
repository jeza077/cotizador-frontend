<script>
import apiProducts from '../../api/products';
import { mapActions } from 'vuex'
import {useToast} from "vue-toastification";
import "vue-toastification/dist/index.css";


export default {
    setup() {
      // Get toast interface
      const toast = useToast();
    //   toast("I'm a toast!");

      return {toast};
    },

    data() { 
        return { 
            productDetail: '', 
            quantity: 1, 
            selectedOptions: {},
            cart: [], // Agrega una lista para almacenar los objetos de carrito
            showCart: false // Agrega una propiedad para controlar la visibilidad del carrito
        }; 
    },

    computed: {
        // ...mapGetters(['getPhoneNumber']),

        totalPrice() {

            console.log(this.selectedOptions)

            let total = this.productDetail.price * this.quantity; // Inicializar el precio total con el precio base
 
             // Sumar el precio modificador de los RADIO BUTTON
            for (const optionType in this.selectedOptions) {
                if (optionType !== 'Extras' && optionType !== 'Extra' && optionType !== 'Combo' && optionType !== 'Postre') {
                total += this.selectedOptions[optionType].priceModifier;
                }
            }

            for (const optionType in this.selectedOptions) {
                if (optionType === 'Extras' || optionType === 'Extra' || optionType === 'Combo' || optionType === 'Postre') {
                total += this.selectedOptions[optionType].reduce((acc, extra) => {
                    return acc + extra.priceModifier;
                }, 0);
                }
            }
            return total;

            
        },

        
    },

    mounted() {
        this.getProductDetail();
        // const phone = this.$store.getters.getPhoneNumber;
        console.log(this.getProductDetail());

    },
    methods: {
        getProductDetail() {
            apiProducts.detailProduct(this.$route.params.id)
                .then(response => {
                    this.productDetail = response.data;
                    console.log(response.data.defaultCategoryId);
                })
        },

        incrementQuantity() {
            this.quantity++;
        },

        decrementQuantity() {
            if (this.quantity > 1) {
                this.quantity--;
            }
        },

        optionSelected(options, choices) {
   
            // Si la opción es de tipo RADIO, almacenar el valor seleccionado directamente
            if (options.type === 'RADIO') {
                this.selectedOptions[options.name] = choices;
            }
            // Si la opción es de tipo CHECKBOX
            else if (options.type === 'CHECKBOX') {
                if (!this.selectedOptions[options.name]) {
                this.selectedOptions[options.name] = [];
                }

                // Si la opción es de los extras
                if (options.name.includes('Extra') || options.name.includes('Extras') || options.name.includes('Combo') || options.name.includes('Postre')) {
                const index = this.selectedOptions[options.name].findIndex(e => e.text === choices.text);

                // Si el objeto ya está en el array, eliminarlo con splice()
                if (index !== -1) {
                    this.selectedOptions[options.name].splice(index, 1);
                }
                // Si el objeto no está en el array, agregarlo
                else {
                    this.selectedOptions[options.name].push(choices);
                }
                }
                // Si la opción no es de los extras, agregar el valor seleccionado al array
                else {
                this.selectedOptions[options.name].push(choices);
                }
            }

           
        },

        // Agregar al store global
        ...mapActions(['addToCart']),

        
        addProductToCart() {
        console.log(this.productDetail)

            
            const product = {
                id: this.productDetail.id,
                categoryId: this.productDetail.defaultCategoryId,
                name: this.productDetail.name,
                urlImg: this.productDetail.imageUrl,
                description: this.productDetail.seoDescription,
                price: this.totalPrice,
                originalPrice: this.productDetail.price,
                priceProduct: this.productDetail.price,
                quantity: this.quantity,
                options: this.selectedOptions,
            };
            this.addToCart(product)

            this.cart.push(product);
            console.log('product:', product);
            console.log(this.cart.push(product));
            
            this.toast.success('El producto se ha agregado al carrito.');

        },

    
    },
} 
</script> 
<template>
    <div class="card"> <img :src="productDetail.imageUrl" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title title">{{ productDetail.name }}</h5>
            <p class="text-link">{{ productDetail.seoDescription }}</p>
            <div class="row row-col-6">
                <p class="card-text col-8 fw-semibold text-price m-0">L.{{ totalPrice }}</p> 
                <button class="btn btn-increment col-1" @click="decrementQuantity">-</button>
                <p class="col-1 increment-number">{{ quantity }}</p> 
                <button class="btn btn-increment col-1" @click="incrementQuantity">+</button> 
            </div>
        </div>
    </div>
    <form @submit.prevent="addProductToCart">
        <div class="card" v-for="options, index in productDetail.options" :key="index">
            <div class="card-body">
                <div class="card-title"> 
                    {{ options.required ? 'Elige tu ' : 'Puedes añadir ' }}{{ options.name }} 
                </div>
                <div class="form-check" v-for="(choices, i) in options.choices" :key="i">
                    <input class="form-check-input"
                        :type="options.type"
                        :name="options.type === 'RADIO' ? 'option-' + index : ''"
                        :id="options.type + '-' + index + '-' + i"
                        :value="choices.priceModifier"
                        :multiple="options.type === 'CHECKBOX'"
                        :required="options.required === true ? true : false"
                        @change="optionSelected(options, choices)"/>
                    <label class="form-check-label" :for="options.type + '-' + index + '-' + i">
                        {{ choices.text }}
                        <span v-if="choices.priceModifier !== 0" class="extra-price">(+L.{{ choices.priceModifier }})</span>
                    </label>
                </div>
            </div>
        </div>
        <div class="card p-2 mt-3"> <button type="submit" class="btn btn-primary">AGREGAR AL CARRITO</button> </div>
    </form>

</template>

<style scoped>
.title {
    font-weight: 700;
    font-size: 0.9rem;
    letter-spacing: -1px;
}

.text-link {
    color: #8e8e8e;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -1px;
    line-height: 1;
}

img {
    height: 200px;
}

/* @media screen and (min-width: 480px) {
    img {
        height: 250px;
    }
} */

    .text-price {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .increment-number {
        padding: 0;
        margin: 0;
        display: flex;
        /* text-align: center; */
        justify-content: center;
        align-items: center;
    }

    .btn-increment {
        padding: 1px 20px;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #2d2d2d;
        color: white;
        font-size: 1.5rem;
    }
</style>