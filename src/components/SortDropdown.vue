<template>
  <div class="collapse navbar-collapse" id="navbarCollapse">
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
      <li class="nav-item dropdown">
        <select
          class="nav-link bg-dark"
          id="dropdownMenuButton"
          v-model="productStore.filters.order"
          @change="handleSortBy(productStore.filters.order)"
        >
          <option value="" disabled>Sortuj</option>
          <option value="price-asc">Od najtańszych</option>
          <option value="price-desc">Od najdroższych</option>
        </select>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useProductStore } from "@/stores/ProductStore";

export default defineComponent({
  name: "SortDropdown",
  setup() {
    const productStore = useProductStore();
    const { filters, searchProducts } = productStore;

    const handleSortBy = (orderKey: string = filters.order) => {
      productStore.filters.order = orderKey;
      searchProducts(orderKey);
    };

    return {
      productStore,
      handleSortBy,
    };
  },
});
</script>

<style scoped>
.filters {
  margin-bottom: 20px;
}
</style>
