<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top shadow">
    <div class="container-fluid">
      <RouterLink to="/" class="navbar-brand"
        ><h3 class="fw-bold">
          <span class="px-2 bg-primary rounded text-white">PS</span> Shop
        </h3></RouterLink
      >

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarScroll"
      >
        <ul class="navbar-nav me-5" style="--bs-scroll-height: 100px">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link active" aria-current="page"
              >Home</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link">About</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Products
            </a>
            <ul class="dropdown-menu">
              <li>
                <RouterLink to="/product" class="dropdown-item"
                  >Laptop</RouterLink
                >
              </li>
              <li>
                <RouterLink to="/desktop" class="dropdown-item"
                  >Desktop</RouterLink
                >
              </li>
              <li>
                <RouterLink to="/monitor" class="dropdown-item"
                  >Monitor</RouterLink
                >
              </li>
            </ul>
          </li>
        </ul>

        <div class="d-flex" role="search">
          <form @submit.prevent="searchProducts" class="d-flex">
            <input
              v-model="searchQuery"
              type="search"
              class="form-control me-2"
              placeholder="Search products..."
            />

            <button type="submit" class="btn btn-primary">
              <i class="bi bi-search"></i>
            </button>
          </form>
          <!-- <button class="btn btn-outline-success" type="submit">Search</button> -->

          <RouterLink
            to="/cart"
            class="card px-2 py-1 text-decoration-none text-dark ms-2 position-relative"
          >
            <i class="bi bi-bag fs-4 me-1"></i>
            <span
              v-if="cartStore.totalItems > 0"
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            >
              {{ cartStore.totalItems }}
            </span>
          </RouterLink>

          <div class="card ms-2 px-1">
            <i class="bi bi-person-circle fs-4 me-1 ms-1 mt-1"></i>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <RouterView></RouterView>
</template>

<script setup lang="ts">
import { useCartStore } from "../stores/useCartStore";

const cartStore = useCartStore();

import { ref } from "vue";
import { useRouter } from "vue-router";

const searchQuery = ref("");
const router = useRouter();

function searchProducts() {
  const query = searchQuery.value.trim();

  if (!query) return;

  router.push({
    path: "/search",
    query: { q: query },
  });
}
</script>
