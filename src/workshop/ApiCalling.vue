<template>
  <div>
    <p v-if="isLoading">isLoading...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      data: [],
    };
  },

  methods: {
    async fetchToDos() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      if (response.status == 200) {
        this.isLoading = false;
        this.data = await response.json();
      }
    },
  },
  mounted() {
    this.isLoading = true;
    setTimeout(() => {
      this.fetchToDos();
    }, 3000);
  },
  //   created() {
  //     this.fetchToDos();
  //   },
};
</script>

<style></style>
