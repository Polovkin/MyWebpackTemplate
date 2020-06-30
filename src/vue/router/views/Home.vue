<template lang="pug">
  .container
    p {{size}}
    .links
      router-link(to="/parse") Parse JSON
      router-link(to="/breakpoint") braikpoints

</template>

<script>
  let _ = require('lodash');
  export default {
    name: 'Home',
    components: {},
    data() {
      return {
        counter: 1,
        text: '',
        size: '',
        test: ['a', 'b', 'c', 'd','a', 'b', 'c', 'd','a', 'b', 'c', 'd'],
        test2: ''
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
      },
      chunk() {

        console.log(_.chunk(this.test, 3))
      }
    },
    mounted() {
      this.chunk()
      this.windowSize();
      window.addEventListener("resize", this.windowSize, false);
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
