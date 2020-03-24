<template lang="pug">
  .container
    h1 Hello pug
    p {{counter}}
    button(@click="counterTest") press
    router-link(to="/test") Test

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
  methods: {
    counterTest() {
      this.counter++;
    },
  },
};
</script>

<style scoped>

</style>
