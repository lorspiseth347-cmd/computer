<script setup lang="ts">
import { dellProducts } from "../data/Product";
import { useCartStore } from "../stores/useCartStore";
const cartStore = useCartStore();
</script>

<template>
  <div class="container mt-4">
    <div class="row">
      <div
        v-for="products in dellProducts"
        class="col-12 col-md-4 col-lg-3 mt-3"
      >
        <div class="card" style="width: auto; max-height: 300px">
          <img
            :src="products.images"
            class="img card-img-top"
            alt="..."
            style="max-height: 180px; min-height: 170px"
          />
          <div class="position-absolute" style="top: 15px; left: 10px">
            <span style="background-color: lime" class="px-3 py-1 rounded-pill fw-bold"
              >{{ products.qty }} Left</span
            >
          </div>
          <div class="card-body">
            <h5 class="card-title fw-bold">{{ products.title }}</h5>
            <h5 class="card-title fw-bold">{{ products.price }}</h5>
            <!-- <p class="card-text" style="min-height: 80px;">
              {{ products.discription }}
            </p> -->
            <div class="d-flex" style="margin-bottom: 50px">
              <RouterLink
                :to="`/dellProducts/${products.id}`"
                class="btn btn-secondary"
                >View</RouterLink
              >
              <button
                @click="cartStore.addToCart(products)"
                class="btn btn-primary w-100 ms-2"
                :disabled="products.qty === 0"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
