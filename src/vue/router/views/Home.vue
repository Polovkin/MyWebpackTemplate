<template lang="pug">
  .container
    h1.test Hello pug
    .links
      router-link(to="/parse") Parse JSON
</template>

<script>

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      counter: 1,
    };
  },
};
</script>

<style lang="scss"
       scoped>
  .links {
    padding: 20px;
    display: flex;
    flex-direction: column;
    a {
      color: blue;
    }
  }

</style>
