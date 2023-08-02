<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['cart']),
  },
}
</script>

<template>
    <nav class="navbar navbar-expand-lg m-0 bg-primary bg-body-tertiary fixed-top" data-bs-theme="primary">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">MiTienda</router-link>
        
        <router-link to="/cart" class="cart position-relative">
          <v-icon name="la-shopping-bag-solid" scale="1.2" color="black" />
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" v-if="cart.length > 0">{{ cart.length }}</span>
        </router-link>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>



        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <router-link to="products" class="nav-link active" aria-current="page">Products</router-link>
                </li>
                <li class="nav-item">
                <router-link :to="{name: 'categories', params: {'phone_number': ' ', 'category': ' '}}" class="nav-link">Categories</router-link>
                </li>
            </ul>

        </div>
      </div>
    </nav>
</template>