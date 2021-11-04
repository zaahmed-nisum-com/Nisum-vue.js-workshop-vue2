<template>
  <diV>
    <input type="text" v-model="name" />
    <input type="number" v-model="price" />

    <div>
      <p>{{ name }}</p>
      <p>{{ price }}</p>
    </div>
  </diV>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      price: "",
    };
  },
};
</script>

<style></style>
