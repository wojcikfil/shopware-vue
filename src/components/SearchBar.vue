<template>
  <section>
    <div class="container search-container">
      <div class="row justify-content-center">
        <div class="col-6 mx-auto">
          <div class="input-group">
            <input
              class="form-control"
              type="text"
              v-model="productStore.filters.query"
              placeholder="Szukaj..."
              @change="handleSearchAndAddRecent"
            />
            <button
              class="btn dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              v-if="productStore.recentSearches.length"
            ></button>
            <ul class="dropdown-menu">
              <li
                class="dropdown-item"
                v-for="recentSearch in recentSearches"
                :key="recentSearch"
                @click="handleRecentSearchClick(recentSearch)"
              >
                {{ recentSearch }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { useProductStore } from "@/stores/ProductStore";
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";

export default defineComponent({
  name: "SearchBar",
  setup() {
    const productStore = useProductStore();
    const { addRecentSearch } = productStore;
    const { recentSearches } = storeToRefs(productStore);

    const handleSearch = () => {
      productStore.searchProducts();
    };
    const handleRecentSearchClick = (search: string) => {
      productStore.filters.query = search;
      productStore.searchProducts();
    };
    const showRecentSearches = () => {
      return productStore.filters.query.length > 0;
    };
    const handleSearchAndAddRecent = () => {
      addRecentSearch(productStore.filters.query);
      handleSearch();
    };
    return {
      productStore,
      recentSearches,
      handleSearchAndAddRecent,
      handleSearch,
      handleRecentSearchClick,
      showRecentSearches,
    };
  },
});
</script>

<style>
.search-container {
  padding: 20px 0;
}
@media (min-width: 768px) {
  .search-container {
    padding: 100px 0;
  }
}

.input-group {
  position: relative;
  display: flex;
  width: 100%;
}
.search-container .dropdown-toggle {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  border-color: #ced4da;
  border-left-width: 0;
  border-radius: 0 0.25rem 0.25rem 0;
  pointer-events: auto;
  cursor: pointer;
}

.search-container .dropdown-menu {
  position: absolute;
  display: none;
  width: 100%;
  transform: translate3d(0px, 40px, 0px) !important;
  cursor: pointer;
}

.search-container .dropdown-menu.show {
  display: block;
}
</style>
