<script>
import axios from 'axios'
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      cartData: [],
      cartItem: {},
      data: {}
    }
  },

  computed: {
    ...mapState(['cart']),
    total() {
      return this.cart.reduce((total, product) => total + product.price, 0) // Calcula el total del carrito
    },
  },

  methods: {
    // remover producto del carrito
    ...mapActions(['removeFromCart']),

    // increment(product) {
    //   product.quantity++
    //   this.updateProductPrice(product)
    // },
    // decrement(product) {
    //   if (product.quantity > 1) {
    //     product.quantity--
    //     console.log(product.quantity)
    //     console.log(product)
    //   }
    //   console.log(this.updateProductPrice(product))

    // },
    // updateProductPrice(product) {
    //   console.log(product)
    //   console.log(product.originalPrice)
    //   product.price = (product.quantity * product.originalPrice)
    //   console.log(product.price)
    // },

    async proceedToCheckout() {
      console.log(this.cart)
      if (this.cart.length === 0) {
        alert('No hay productos en el carrito.')
        return
      }

      // const phone = this.$store.getters.getPhoneNumber;
      const phone = this.$store.state.phoneNumber;
      console.log(phone)
      // const name = 'nombrePrueba';
      const email = 'prueba@mail.com';
      // const phone = '50431415039';

      /*
      // Crea la orden en Ecwid QUEDA A LA ESPERA DEL PERMISO EN ECWID
      try {
        const response = await axios.post('https://app.ecwid.com/api/v3/82202526/orders', {
          paymentMethod: "Manual",
          shippingMethod: "Manual",
          totalPrice: this.total,
          customerEmail: email,
          items: this.cart.map(item => {
            const productOptions = Object.keys(item.options).map(optionName => {
              const option = item.options[optionName];
              if (Array.isArray(option)) {
                return {
                  name: optionName,
                  value: option.map(value => value.text).join(", "),
                  priceModifier: option.reduce((acc, value) => acc + value.priceModifier, 0)
                };
              } else {
                return {
                  name: optionName,
                  value: option.text,
                  priceModifier: option.priceModifier
                };
              }
            });
            return {
              productId: item.id,
              name: item.name,
              sku: item.id,
              quantity: item.quantity,
              price: item.price,
              imageUrl: item.urlImg,
              options: productOptions
            };
          })
        }, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer secret_KFCSzdTvExP3g2CF9xCUc4Pi3APGGC4m'
          }
        });
        console.log(response.data);
        console.log('¡Orden creada con éxito!');
      } catch (error) {
        console.error(error);
        console.log('¡Hubo un error al crear la orden!');
      }
      */

      this.$router.push({ name: 'checkout'})
      
    },
        
    
  },

  mounted() {
    console.log(this.cart);
    // this.cart.forEach(product => {
    //   if((product.price / product.quantity) !== (product.originalPrice)) {
    //     // console.log('es distinto price', (product.price / product.quantity), product.originalPrice)
    //     product.originalPrice = product.price
    //   } 
    // })
  }

}
</script>


<template>
    <div class="container" style="margin-top:5em">
        <h1>Resumen de tu pedido</h1>
        <div v-if="cart.length === 0">
            No hay productos en el carrito.
        </div>
        <div v-else class="overflow-y-auto">
            <div v-for="(product, index) in cart" :key="index" class="card mt-2">
                <div class="row row-col-6 p-1">

                    <div class="card-body col-9">
                        <h6>{{product.name}}</h6>
                        <p class="description">{{ product.price }}</p>
                        <p class="description">{{ product.preparation }}</p>
                        <p class="description">{{ product.delivery }}</p>
                      
                    </div>
                </div>
    
                <div class="card-footer">
                    <div class="row row-col-4">
                        <p class="card-text col-5 fw-semibold text-price m-0">L.{{ product.price }}</p> 
                        <button class="btn btn-danger col-1 me-5" @click="removeFromCart(product)">E</button>

                        <!-- <button class="btn btn-increment col-1" @click="decrement(product)">-</button>
                        <p class="col-1 increment-number">{{ product.quantity }}</p> 
                        <button class="btn btn-increment col-1" @click="increment(product)">+</button>  -->
                    </div>
                </div>
                
            </div>
            

            <div class="row row-col-6 p-2 card-send-order fixed-bottom">
                <p class="card-text col-6 fw-semibold text-price m-0">Total: L.{{ total }}</p> 
                <button class="btn btn-primary col-6" @click="proceedToCheckout">Enviar pedido</button>
            </div>


        </div>

    </div>
</template>


<style scoped>

.container-options span {
    display: block;
    font-size: 0.8rem;
    font-weight: 600;
    color: #8f8f8f;
}

.description {
    font-size: 0.7rem;
    font-weight: 600;
    color: #8d8d8db8;
    line-height: 1;
}

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

.card-send-order {
    margin: 10px 1px 0;
    border: 1px solid rgba(0,0,0,0.175);
    background-color: white;
}
</style>