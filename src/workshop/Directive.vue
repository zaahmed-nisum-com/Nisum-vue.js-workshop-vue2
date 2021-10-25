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
    <div>
      <div v-for="(user, index) of users" v-bind:key="index + 1">
        <p>{{ user.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDarkMode: false,
      users: [
        { id: 1, name: "Zain Ahmed" },
        { id: 2, name: "Faraz Ahmed" },
        { id: 3, name: "Arsalan Ahmed" },
      ],
    };
  },
  methods: {
    toggleCheckBox() {
      this.isDarkMode = !this.isDarkMode;
    },
  },
};
</script>

<style></style>
