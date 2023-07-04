<template>
  <header class="navbar navbar-expand navbar-dark bg-dark">
    <div class="container">
      <div class="navbar-brand">
        <a class="text-decoration-none fw-bolder text-capitalize" href="#"
          >Shopware listing</a
        >
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <SortDropdown />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SortDropdown from "./SortDropdown.vue";
export default defineComponent({
  components: {
    SortDropdown,
  },
});
</script>

<style>
.navbar-brand a {
  color: inherit;
}
</style>
