<template>
  <div class="container-fluid">
    <div class="row bg-dark" style="height: auto">
      <div class="col-lg-6" style="margin-top: 80px">
        <div class="container">
          <span class="p-1 bg-primary rounded text-white fw-bold"
            >New collection 2026</span
          >
          <div class="mt-4">
            <h1 class="text-white fw-bold" style="font-size: 60px">
              Build Your Perfect
            </h1>
            <h1 class="text-primary fw-bold" style="font-size: 60px">
              Computer Setup
            </h1>
          </div>
          <div class="">
            <p class="text-secondary fs-4">
              Discover Laptop, gaming PCs, monitors, keyboard and accessories at
              the best prices.
            </p>
          </div>
          <div class="">
            <button class="btn btn-primary fs-4">Shop Now</button>
            <button class="btn btn-outline-light ms-3 fs-4">Learn more</button>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="mt-5 mb-5">
          <img
            src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
            alt="computer"
            class="img-fluid rounded-4"
          />
        </div>
      </div>
    </div>

    <div class="container-fluid bg-light">
      <div class="py-4">
        <h1 class="text-center text-dark fw-bold">Shop By Category</h1>
        <p class="text-center mt-2">Choose your favorite producst</p>
      </div>

      <div class="container">
        <div class="row bg-light">
          <div class="col-12 col-md-6 col-lg-3">
            <RouterLink
              to="/product"
              style="text-decoration: none"
              class="text-dark"
            >
              <div class="m-3 rounded-3 shadow p-2">
                <div class="text-center">
                  <i class="bi bi-laptop mt-3" style="font-size: 90px"></i>
                </div>
                <div class="text-center"><h3 class="fw-bold">Laptop</h3></div>
              </div>
            </RouterLink>
          </div>

          <div class="col-12 col-md-6 col-lg-3">
            <RouterLink
              to="/desktop"
              style="text-decoration: none"
              class="text-dark"
            >
              <div class="m-3 rounded-3 shadow p-2">
                <div class="text-center">
                  <i class="bi bi-pc-display" style="font-size: 90px"></i>
                </div>
                <div class="text-center fw-bold">
                  <h3 class="fw-bold">Desktop</h3>
                </div>
              </div>
            </RouterLink>
          </div>

          <div class="col-12 col-md-6 col-lg-3">
            <RouterLink
              to="/monitor"
              style="text-decoration: none"
              class="text-dark"
            >
              <div class="rounded-3 shadow p-2 m-3">
                <div class="text-center">
                  <i class="bi bi-display" style="font-size: 90px"></i>
                </div>
                <div class="text-center"><h3 class="fw-bold">Monitors</h3></div>
              </div>
            </RouterLink>
          </div>

          <div class="col-12 col-md-6 col-lg-3">
            <div class="rounded-3 shadow p-2 m-3">
              <div class="text-center">
                <i class="bi bi-grip-horizontal" style="font-size: 90px"></i>
              </div>
              <div class="text-center">
                <h3 class="fw-bold">Accessories</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="py-4">
        <h1 class="text-center fw-bold">Featured Products</h1>
      </div>
      <div class="container mt-4">
        <div class="row">
          <div
            v-for="products in asusProducts"
            class="col-12 col-md-4 col-lg-3 mt-3"
          >
            <div class="card" style="max-height: 300px">
              <img
                :src="products.images"
                class="card-img-top"
                alt="..."
                style="max-height: 170px; min-height: 170px"
              />
              <div class="position-absolute" style="top: 15px; left: 10px">
                <span
                  style="background-color: lime"
                  class="px-3 py-1 rounded-pill"
                  >{{ products.qty }} Left</span
                >
              </div>
              <div class="card-body">
                <h6 class="card-title fw-bold">{{ products.title }}</h6>
                <h6 class="card-title fw-bold">{{ products.price }}</h6>
                <!-- <p class="text-muted" style="min-height: 80px">
                  {{ products.discription }}
                </p> -->
                <div class="d-flex" style="margin-bottom: 50px">
                  <RouterLink
                    :to="`/asusProducts/${products.id}`"
                    class="btn btn-secondary"
                    >View</RouterLink
                  >
                  <RouterLink to="#" class="btn btn-primary w-100 ms-2"
                    >Add to cart</RouterLink
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-primary p-3 mt-5">
    <div class="mt-3">
      <h1 class="text-center p-2 text-white fw-bold">Special Offer</h1>
    </div>
    <p class="text-center text-white fs-5">
      Get up to get 20% on gaming products
    </p>
    <div class="text-center">
      <button class="btn btn-light">Shop Now</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { asusProducts } from "../data/Product";
</script>
