<template>
  <h5 class="card-title">{{ name }}</h5>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProductTitle",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
});
</script>
