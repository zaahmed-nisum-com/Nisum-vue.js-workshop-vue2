<template>
  <div>
    <div>
      <input
        type="checkbox"
        :checked="isDarkMode"
        v-on:change="toggleCheckBox"
      />
    </div>
    <p v-if="isDarkMode">{{ isDarkMode }}</p>
    <p v-if="!isDarkMode">{{ isDarkMode }}</p>
  </div>
</template>

<script>

export default {
  components: {
  },

  data() {
    return {
      isDarkMode: false,
    };
  },
  methods: {
    toggleCheckBox() {
      this.isDarkMode = !this.isDarkMode;
    },
  },

  beforeCreate() {
    console.log("beforeCreate");
  },

  created() {
    console.log("created");
  },

  beforeMount() {
    console.log("beforeMount");
  },

  mounted() {
    console.log("mounted");
  },

  beforeUpdate() {
    console.log("beforeUpdate");
  },

  updated() {
    console.log("updated");
  },

  unmounted() {
    console.log("unmounted");
  },
};
</script>

<style></style>
