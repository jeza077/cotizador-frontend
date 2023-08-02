<script setup>
defineProps({
  image: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  route: {
    type: Object,
    required: true
  }

})
</script>

<template>
<router-link :to="route" class="card link-none">
  <img 
    :src="image" 
    class="card-img-top">
  <div class="card-body">
    <h5 class="card-title title">{{ name }}</h5>
    <a 
      href="#"
      class="text-link">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, qui!
    </a>
    <div class="row mt-3">
        <p class="card-text col-6 fw-semibold align-text-bottom m-0">{{ price }}</p>
        <router-link :to="route" class="col-6 btn btn-primary">Añadir</router-link >
    </div>

  </div>
</router-link>
</template>

<style scoped>

.link-none {
  text-decoration: none;
}

.title {
    font-weight: 700;
    font-size: 0.9rem;
    letter-spacing: -1px;
}
@media screen and (min-width: 480px) {
    .title {
      font-size: 1.1rem;
    }
}
.text-link {
    text-decoration: none;
    color: #8e8e8e;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -1px;
    line-height: 0;
}

img {
  height: 150px;
}
@media screen and (min-width: 480px) {
    img {
        height: 250px;
    }
}
</style>