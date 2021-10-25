<template>
  <div>
    <p>{{ price | toFixed(2) | toDoller }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: 1000,
    };
  },
};
</script>

<style></style>
