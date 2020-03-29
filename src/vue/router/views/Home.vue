<template lang="pug">
  .container
    h1.test Hello pug
    p {{counter}}
    button(@click="counterTest") press
    //router-link(to="/test") Test
    a(href="/test") Test
    a(href="/vuex") Vuex
    i.fas.fa-address-book
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

<style lang="scss" scoped>

</style>
