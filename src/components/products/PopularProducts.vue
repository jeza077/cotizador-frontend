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
    <!-- <div class="mt-2 row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-2 g-2">
        <div class="col"
        v-for="product in products"
        :key="product.id">
            <CardProduct 
                :image= product.imageUrl
                :name= product.name
                :price="product.defaultDisplayedPriceFormatted"
            />
        </div>
    </div> -->
    
    <!-- <div class="row contenedor">

        <div class="card link-none col-5">
            <div class="card-body">
            <h5 class="card-title title">Examen General Orina</h5>
            <span 
                href="#"
                class="text-link">Preparación del paciente: <b>Cualquier hora del día</b>
            </span>
            <sapn 
                href="#"
                class="text-link">Entrega: <b>Mismo día, dentro de 1 hora.</b>
            </sapn>
            <div class="row mt-3">
                <p class="card-text col-6 fw-semibold align-text-bottom m-0">Costo: <b>L195.00</b></p>
                <a :to="route" class="col-6 btn btn-primary">Añadir</a>
            </div>

            </div>
        </div>

        <div class="card link-none col-5">

            <div class="card-body">
            <h5 class="card-title title">Examen General Heces</h5>
            <sapn 
                href="#"
                class="text-link">Preparación del paciente: <b>Cualquier hora del día</b>
            </sapn>
            <span 
                href="#"
                class="text-link">Entrega: <b>Mismo día, dentro de 1 hora.</b>
            </span>
            <div class="row mt-3">
                <p class="card-text col-6 fw-semibold align-text-bottom m-0">Costo: <b>L.250.00</b></p>
                <a :to="route" class="col-6 btn btn-primary">Añadir</a>
            </div>

            </div>
        </div>
    </div> -->
</template>