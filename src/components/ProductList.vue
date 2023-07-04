<template>
  <section>
    <div class="product-list-container container-fluid">
      <div class="container">
        <div class="row pt-3">
          <Loading v-if="isLoading" />
          <div class="col-12">
            <div class="row g-3">
              <ProductCard
                v-for="product in products"
                :key="product.id"
                :product="product"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useProductStore } from "@/stores/ProductStore";
import ProductCard from "./Products/ProductCard.vue";
import Loading from "./Loading.vue";
import { storeToRefs } from "pinia";

export default defineComponent({
  name: "ProductList",
  components: {
    ProductCard,
    Loading,
  },
  setup() {
    const productStore = useProductStore();

    const { products, isLoading } = storeToRefs(productStore);

    productStore.fetchProducts();

    return {
      products,
      isLoading,
    };
  },
});
</script>

<style>
.product-list-container {
  background-color: #f8f9fa;
  height: 100%;
  min-height: 100vh;
}
</style>
