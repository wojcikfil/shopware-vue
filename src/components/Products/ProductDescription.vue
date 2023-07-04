<template>
  <p class="product-description">{{ description }}</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProductDescription",
  props: {
    description: {
      type: String,
      required: true,
    },
  },
});
</script>
