<template>
  <div>
    <p v-once>{{ name }}</p>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Zain Ahmed",
      message: "Hye all this is vue.js first class - 1",
    };
  },

  mounted() {
    setTimeout(() => {
      this.message = "Owais Khan";
      this.message = "Welcome to class-1";
    }, 5000);
  },
};
</script>

<style></style>
