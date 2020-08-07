<template lang="pug">
  .container
    p {{size}}
    .links
      router-link(to="/parse") Parse JSON
      router-link(to="/breakpoint") braikpoints

    .grids
      .card(v-for="(card,index) of cards")
        img(:src="`https://picsum.photos/id/${1 + index}/1000/500`")
    button(@click="cards++") add cart
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
      cards: 20,
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

.grids {
  $rows: auto;
  display: grid;
  grid-gap: 15px;
  grid-template:
        'a1 a1 a2 a2 a3' $rows
        'a1 a1 a4 a5 a6' $rows
        'a7 a8 a9 a10 a13' $rows
        'a11 a12 a14 a10 a15' $rows
        'a16 a17 a18 a19 a20' $rows
        'a21 a22 a23 a24 a25' $rows
        'a26 a27 a28 a29 a30' #{$rows}
        /
        1fr 1fr 1fr 1fr 1fr;


}

.card {
  padding: 10px;
  border: 1px solid blueviolet;

  img {
    width: 100%;
    height: auto;
  }

  @for $i from 1 through 30 {
    &:nth-of-type(#{$i}) {
      grid-area: a#{$i};
    }
  }
}

</style>
