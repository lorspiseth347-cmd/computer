<script setup lang="ts">
import { desktopProducts } from "../data/Product";
import { useCartStore } from "../stores/useCartStore";
const cartStore = useCartStore()
</script>

<template>
  <div class="container-fluid bg-dark py-3">
    <div class="row">
      <div class="col-12 col-lg-6">
        <div class="p-5 mt-5">
          <h1 style="font-size: 50px" class="text-primary fw-bold">
            Welcome to DESKTOP
          </h1>
          <p class="text-white">
            There are many products here. Please enjoy shoping. <br />
            We also has a quality products. We will discount 40% for customers
            who buy laptop here.
          </p>
        </div>
      </div>
      <div class="col-12 col-lg-6">
        <div class="p-4">
          <img
            class="img-fluid rounded"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJFbMi0ege68zuq1n1LbIn-reoz6SW2FuS6hwESySXbA&s=10"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>

  <div class="container mt-4">
    <div class="row">
      <div
        v-for="products in desktopProducts"
        class="col-12 col-md-4 col-lg-3 mt-3"
      >
        <div class="card" style="width: auto; max-height: 330px">
          <img
            :src="products.images"
            class="img card-img-top"
            alt="..."
            style="max-height: 180px; min-height: 170px"
          />
          <div class="position-absolute" style="top: 15px; left: 10px">
            <span style="background-color: lime" class="px-3 py-1 rounded-pill"
              >{{ products.qty }} Left</span
            >
          </div>
          <div class="card-body">
            <h6 class="card-title fw-bold" style="min-height: 40px;">{{ products.title }}</h6>
            <h5 class="card-title fw-bold">{{ products.price }}</h5>
            <!-- <p class="card-text" style="min-height: 80px;">
              {{ products.discription }}
            </p> -->
            <div class="d-flex" style="margin-bottom: 50px">
              <RouterLink
                :to="`/dellProducts/${products.id}`"
                class="btn btn-outline-secondary"
                >View</RouterLink
              >
             <button @click="cartStore.addToCart(products)" class="btn btn-primary w-100 ms-2">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
