<template>
  <div>
    <button :disabled="isDisable">Click Me</button>
    <div style="backgound-color: green; height: 50px;">
      <p :style="{ fontSize: fontSize + 'px' }">Zain Ahmed</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDisable: false,
      fontSize: 10,
    };
  },
  mounted() {
    setTimeout(() => {
        this.isDisable=true,
        this.fontSize=100
    }, 1000);
  },
};
</script>

<style></style>
