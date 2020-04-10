<template lang="pug">
  .container
    h1.test Hello pug
    p {{counter}}
    button(@click="counterTest") press
    //router-link(to="/test") Test
    router-link(to="/test") TypeScript
    router-link(to="/vuex") Vuex
    i.fas.fa-address-book
    span#cross-test
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
  #cross-test {
    @include cross(20px,12px,2px,black)
  }
</style>
