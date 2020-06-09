<template lang="pug">
  .container
    p {{size}}
    .links
      router-link(to="/parse") Parse JSON
      router-link(to="/breakpoint") braikpoints

</template>

<script>

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      counter: 1,
      text: '',
      size: ''
    };
  },
  methods: {
    log(data) {
      console.log(data)
    },
    windowSize() {
      let w = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      let h = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
      this.size = `${w} x ${h}`
    }
  },
  mounted() {
   this.windowSize();
    window.addEventListener("resize",this.windowSize, false);
  }
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
