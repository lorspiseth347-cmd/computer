<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { allProducts } from "../data/Product";
import { useCartStore } from "../stores/useCartStore";
const cartStore = useCartStore()

const route = useRoute();
const router = useRouter();

// Find product by ID
const product = computed(() => {
  return allProducts.find(
    (item) => item.id === Number(route.params.id)
  );
});

// Go back to products
const goBack = () => {
  router.back();
};
</script>

<template>
  <div class="container py-5">

    <!-- Back Button -->
    <button
      class="btn btn-outline-secondary mb-4"
      @click="goBack"
    >
      <i class="bi bi-arrow-left"></i>
      Back to Products
    </button>

    <!-- Product Not Found -->
    <div v-if="!product" class="text-center py-5">
      <h2 class="text-danger">Product Not Found</h2>
      <p class="text-muted">
        The product you are looking for does not exist.
      </p>
    </div>

    <!-- Product Detail -->
    <div v-else>

      <!-- Main Product Information -->
      <div class="row g-5 align-items-center">

        <!-- Product Image -->
        <div class="col-12 col-lg-6">

          <div class="card border-0 shadow-sm p-3">
            <img
              :src="product.images"
              :alt="product.title"
              class="img-fluid rounded product-image"
            />
          </div>

        </div>

        <!-- Product Information -->
        <div class="col-12 col-lg-6">

          <!-- <span class="badge bg-primary mb-3">
            MSI Laptop
          </span> -->

          <h1 class="fw-bold">
            {{ product.title }}
          </h1>

          <h2 class="fw-bold mt-3">
            {{ product.price }}
          </h2>

          <!-- Stock -->
          <div class="mt-3">

            <span
              v-if="product.qty > 0"
              class="badge bg-success"
            >
              In Stock
            </span>

            <span
              v-else
              class="badge bg-danger"
            >
              Out of Stock
            </span>

            <span class="ms-2 text-muted">
              {{ product.qty }} units available
            </span>

          </div>

          <!-- Description -->
          <div class="mt-4">

            <h5 class="fw-bold">
              Description
            </h5>

            <p class="text-muted">
              {{ product.discription }}
            </p>

          </div>

          <!-- Quantity -->
          <div class="mt-4">

            <label class="form-label fw-bold">
              Quantity
            </label>

            <div class="input-group" style="max-width: 150px">

              <button class="btn btn-outline-secondary">
                -
              </button>

              <input
                type="number"
                class="form-control text-center"
                value="1"
                min="1"
                :max="product.qty"
              />

              <button class="btn btn-outline-secondary">
                +
              </button>

            </div>

          </div>

          <!-- Buttons -->
          <div class="d-flex gap-2 mt-4">

            <button
            @click="cartStore.addToCart(product)"
              class="btn btn-primary btn-lg px-4"
              :disabled="product.qty === 0"
            >
              <i class="bi bi-cart-plus"></i>
              Add to Cart
            </button>

            <button
              class="btn btn-outline-dark btn-lg px-4"
            >
              Buy Now
            </button>

          </div>

        </div>

      </div>


      <!-- Technical Specifications -->
      <div class="mt-5 pt-4">

        <h2 class="fw-bold mb-4">
          Technical Specifications
        </h2>

        <div class="card border-0 shadow-sm">

          <div class="table-responsive">

            <table class="table table-bordered mb-0">

              <tbody>

                <tr>
                  <th class="spec-title">
                    Processor
                  </th>

                  <td>
                    {{ product.specifications.processor }}
                  </td>
                </tr>

                <tr>
                  <th class="spec-title">
                    RAM
                  </th>

                  <td>
                    {{ product.specifications.ram }}
                  </td>
                </tr>

                <tr>
                  <th class="spec-title">
                    Storage
                  </th>

                  <td>
                    {{ product.specifications.storage }}
                  </td>
                </tr>

                <tr>
                  <th class="spec-title">
                    Display
                  </th>

                  <td>
                    {{ product.specifications.display }}
                  </td>
                </tr>

                <tr>
                  <th class="spec-title">
                    Graphics
                  </th>

                  <td>
                    {{ product.specifications.graphics }}
                  </td>
                </tr>

                <tr>
                  <th class="spec-title">
                    Operating System
                  </th>

                  <td>
                    {{ product.specifications.operatingSystem }}
                  </td>
                </tr>

                <tr>
                  <th class="spec-title">
                    Battery
                  </th>

                  <td>
                    {{ product.specifications.battery }}
                  </td>
                </tr>

                <tr>
                  <th class="spec-title">
                    Weight
                  </th>

                  <td>
                    {{ product.specifications.weight }}
                  </td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>

  </div>
</template>


<style scoped>

.product-image {
  width: 100%;
  height: 450px;
  object-fit: contain;
}

.spec-title {
  width: 30%;
  background-color: #f8f9fa;
  font-weight: 600;
}

.table td,
.table th {
  padding: 16px;
}

@media (max-width: 768px) {

  .product-image {
    height: 300px;
  }

}

</style>