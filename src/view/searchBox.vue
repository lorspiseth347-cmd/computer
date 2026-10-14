```vue
<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { dellProducts, asusProducts, msiProducts } from "../data/Product";
import { useCartStore } from "../stores/useCartStore";

const route = useRoute();

// Get the search term from the URL
const searchQuery = computed(() => {
  const query = route.query.q;

  return (Array.isArray(query) ? query[0] : (query ?? ""))
    .toString()
    .trim()
    .toLowerCase();
});

// Combine your product arrays
const allProducts = [...dellProducts, ...asusProducts, ...msiProducts];

// Filter products based on the search term
const searchResults = computed(() => {
  if (!searchQuery.value) {
    return [];
  }

  return allProducts.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.value),
  );
});

const cartStore = useCartStore();
</script>

<template>
  <div class="container py-5">
    <h2 class="fw-bold mb-4">Search Results</h2>

    <p>
      Search:
      <strong>{{ route.query.q }}</strong>
    </p>

    <div v-if="!searchQuery" class="alert alert-info">
      Please enter a product name to search.
    </div>

    <div v-else-if="searchResults.length === 0" class="alert alert-warning">
      No products found for "{{ route.query.q }}".
    </div>

    <div v-else class="row g-4">
      <div
        v-for="product in searchResults"
        :key="product.id"
        class="col-12 col-md-6 col-lg-3"
      >
        <div class="card h-100 shadow-sm">
          <img
            :src="product.images"
            :alt="product.title"
            class="card-img-top p-3"
            style="height: 200px; object-fit: contain"
          />

          <div class="card-body">
            <h6 class="card-title fw-bold">
              {{ product.title }}
            </h6>

            <p class="text-primary fw-bold">
              {{ product.price }}
            </p>

            <div class="d-flex">
              
                <RouterLink
                  :to="`/pro-detail/${product.id}`"
                  class="btn btn-secondary fw-bold"
                >
                  View
                </RouterLink>
           
             
                <button
                  @click="cartStore.addToCart(product)"
                  class="btn btn-primary ms-2 w-100"
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
```
