<script setup lang="ts">
import { msiProducts } from "../data/Product";
import { useCartStore } from "../stores/useCartStore";
const cartStore = useCartStore()
</script>

<template>
  <div class="container mt-4 ">
    <div class="row">
      <div v-for="products in msiProducts" class="col-12 col-md-4 col-lg-3 mt-3">
        <div class="card" style="max-height: 300px;">
          <img :src="products.images" class="card-img-top" alt="..." style="max-height: 180px; min-height: 170px;"  />
          <div class="position-absolute fw-bold" style="top: 15px; left: 10px;"><span style="background-color: lime;" class="py-1 px-3 rounded-pill">{{ products.qty }} Left</span></div>
          <div class="card-body">
            <h6 class="card-title fw-bold">{{ products.title }}</h6>
            <h5 class="card-title fw-bold">{{ products.price }}</h5>
            <!-- <p class="card-text" style="min-height: 80px;">
              {{ products.discription }}
            </p> -->
          <div class="d-flex" style="margin-bottom: 50px;">
            <RouterLink :to="`/msiProducts/${products.id}`" class="btn btn-outline-secondary fw-bold">View</RouterLink>
            <button @click="cartStore.addToCart(products)" class="btn btn-primary ms-2 w-100">Add to cart</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
