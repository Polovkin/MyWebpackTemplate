<template lang="pug">
  .lds-ring
    div
    div
    div
    div
</template>

<script>
  export default {
    name: "loader"
  }
</script>

<style scoped
       lang="scss">
  .lds-ring {
    position: fixed;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    width: 300px;
    height: 300px;

    & div {
      width: 100%;
      height: 100%;
    }
  }
</style>
