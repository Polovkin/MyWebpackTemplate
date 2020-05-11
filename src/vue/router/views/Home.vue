<template lang="pug">
  .container
    h1.test Hello pug
    button(@click="log(123)") Press
    p {{text}}
    input(v-model.lazy="text")
    .links
      router-link(to="/parse") Parse JSON
      router-link(to="/parse2") Parse comments
      router-link(to="/pagination") pagination
</template>

<script>

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      counter: 1,
      text: '',
    };
  },
  methods: {
    log(data) {
      console.log(data)
    }
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
    .eblo {
      color: red
    }
  }

</style>
