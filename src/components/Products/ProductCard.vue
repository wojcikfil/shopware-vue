<template>
  <div class="col-lg-4 mb-3 d-flex align-items-stretch">
    <div class="card">
      <div class="card-body">
        <ProductTitle :name="product.name" />
        <ProductDescription :description="product.description" />
        <ProductPrice
          :price="product.calculatedPrice.totalPrice"
          :currency="product.calculatedPrice.currency.isoCode"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductTitle from "./ProductTitle.vue";
import ProductDescription from "./ProductDescription.vue";
import ProductPrice from "./ProductPrice.vue";
import { Product } from "@/types";

export default defineComponent({
  name: "ProductCard",
  components: {
    ProductTitle,
    ProductDescription,
    ProductPrice,
  },
  props: {
    product: {
      type: Object as () => Product,
      required: true,
    },
  },
});
</script>
