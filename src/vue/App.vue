<template lang="pug">

  #app
    .container-base
      h1 Hello pug
      p {{counter}}
      button(@click="counterTest") press
</template>

<script>


export default {
  name: 'app',
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

<style lang="scss">

</style>
