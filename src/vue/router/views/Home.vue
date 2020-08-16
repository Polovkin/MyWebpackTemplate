<template lang="pug">
  .container
    p {{size}}
    .links
      router-link(to="/parse") Parse JSON
      router-link(to="/breakpoint") braikpoints
      router-link(to="/database") firebase


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
      test: ['a', 'b', 'c', 'd', 'a', 'b', 'c', 'd', 'a', 'b', 'c', 'd'],
      test2: '',
      cards: 9,
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


}
@mixin grid-area($rows,$cols,$width,$height) {
  display: grid;
  grid-template:
     'a1 a2 a3' auto
     'a4 a5 a6' auto
     'a7 a8 a9' auto
     'a10 a11 a12' auto/
    33% 33% 33%;

}

.grids {
  $rows: auto;
  //$var-areas: ("row1": 'a1 a2 a3' 'a4 a5 a6', "row2": 'a4 a5 a6');

  grid: {
    gap: 10px;
    template: {
      columns: repeat(3,33%);
      rows: repeat(4,auto);
      areas:  'a1 a2 a3' 'a4 a5 a6' 'a7 a8 a9';
    };

  }
  @for $i from 1 through 9 {
    .card:nth-of-type(#{$i}) {
      grid-area: unquote("a" + $i);
    }
  }
}

.card {
  padding: 10px;
  border: 1px solid blueviolet;

  img {
    width: 200px;
    height: 100px;
  }
  @mixin grid-area($rows,$cols,$width,$height) {
    display: grid;
    grid-template:
      'a1 a2' $height
      /$width $width;
  }
  @for $i from 1 through 30 {
    &:nth-of-type(#{$i}) {
     grid-area: area#{$i};
    }
  }
}

</style>
