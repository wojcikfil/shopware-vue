<template>
  <p class="card-text">
    <span class="fw-bolder">Cena</span>: {{ price }} {{ currency }}
  </p>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProductPrice",
  props: {
    price: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
  },
});
</script>
