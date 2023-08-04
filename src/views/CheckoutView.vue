<script>
import { mapState } from 'vuex'
import axios from 'axios'

export default {

    data() {
        return {
            isLoading: false
        }
    },

    computed: {
        ...mapState(['cart'])
    },

    mounted() {
        if(this.cart.length == 0) {
            this.$router.push({ name: 'cart'})
        }
        console.log(this.cart); // Imprime el carrito en la consola para verificar que se recibió correctamente
        const phone = this.$store.state.phoneNumber;
        console.log(phone)
        
    },

    methods: {
    async enviarPedido() {
        const phone = this.$store.state.phoneNumber;
        const pedido = {
            phoneNumberClient: phone,
            cart: this.cart
        };
        
        //Habilitamos el loading al hacer click y deshabilitamos el boton mientras tanto
        this.isLoading = true;
        // const button = document.querySelector('#btn-whatsapp');
        // button.disabled = true;

        try {
            // const response = await axios.post('https://cors-server-glt0.onrender.com/https://botwa-stage.onrender.com/backWa', pedido, {
            const response = await axios.post('https://cors-server-glt0.onrender.com/https://0daf-45-238-141-13.ngrok-free.app/backWa', pedido, {
            // const response = await axios.post('http://localhost:8080/http://localhost:3000/backWa', pedido, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
            });
            console.log(response.data);
            if(response.data) {
                // console.log(response.data);
                window.location.href = `https://wa.me/15551015670`;
            }
            console.log('Pedido enviado:', pedido);

        } catch (error) {
            console.error(error);

        } finally { //Finalizar el loading y habilitar el boton
            this.isLoading = false;
        }

        /*
      // Aquí debes hacer la solicitud a tu API con el objeto pedido
    //   fetch('https://cors-server-glt0.onrender.com/https://botapp-ojh1.onrender.com/backWa', {
        fetch('http://localhost:8080/http://localhost:3000/backWa', {
        // mode: 'no-cors',
        method: 'POST',
        body: JSON.stringify(pedido),
        headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        }
    })
    .then(res => res.json()) //AGREGAR CORS ERROR
    .then(data => console.log(data))
      console.log('Pedido enviado:', pedido);
      */
    }
  }
}
</script>

<template>
    <div class="container" style="margin-top:0em">
        <div class="content-wa">
            <h5>¡Se agregaron los productos a tu pedido!</h5>
            <p>Regresa a Whatsapp para poder confirmarlo.</p>
            <button class="btn btn-success" @click="enviarPedido" :disabled="isLoading">
                <span v-if="isLoading" class="spinner-border spinner-border-sm"></span>
                {{ isLoading ? 'Enviando pedido...' : 'Volver a WhatsApp' }}
            </button>
        </div>

    </div>
</template>

<style scoped>
.container {
    height: 100vh;
    display: flex;
}

.content-wa {
    margin: auto;
    display: inline-grid;
    align-items: center;
}
.content-wa h5 {
    text-align: center;
    font-size: 1.1em;
}

.content-wa p {
    color: #838383;
    font-size: 0.8em;
    font-weight: 600;
    line-height: 30px;
    text-align: center;
}
</style>