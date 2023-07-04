<template>
  <div>
    <SearchBar />
    <SortDropdown />
    <ProductList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SearchBar from "@/components/SearchBar.vue";
import SortDropdown from "@/components/SortDropdown.vue";
import ProductList from "@/components/ProductList.vue";

export default defineComponent({
  name: "MainComponent",
  components: {
    SearchBar,
    ProductList,
    SortDropdown,
  },
});
</script>
