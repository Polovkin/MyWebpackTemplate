<template lang="pug">
  div
    section.container
      router-link(to="/") Home
      h1 Test breakpoints
    div.bg
      .container
        .test
          span.width window width >
          span.container-width container width:
          span.title
        .sizes
          .values
            button.size(@click="showBase()") ALL
            button.size(@click="showByDevice(9999,1200)") Desktop
            button.size(@click="showByDevice(1200,767)") Tablet
            button.size(@click="showByDevice(768,0)") mobile
          .sorting
            button.size(@click="sortMethod = 'width'") По ширине
            button.size(@click="sortMethod = 'height'") По высоте
            button.size(@click="sortMethod = 'usage'") По использованию

            //button.size(@click="showtLaptop") Laptop
          template(v-for="item of sortingArr" )
            .cart
              p {{item.fullSize}}
              p(:style="`background-color: ${item.percent > 10 ? 'green': 'red' } ;color: white`") {{item.percent}}


</template>

<script>
  export default {
    name: 'Breakpoint.vue',
    components: {},
    data() {
      return {
        size: [
          {'1366x768': 15.44},
          {'360x640': 14.83},
          {'1920x1080': 11.69},
          {'375x667': 4.82},
          {'360x720': 4.21},
          {'1280x1024': 3.77},
          {'1536x864': 3.50},
          {'360x780': 3.25},
          {'320x568': 2.33},
          {'393x851': 2.28},
          {'1440x900': 2.07},
          {'1280x800': 1.91},
          {'375x812': 1.77},
          {'414x896': 1.70},
          {'412x892': 1.67},
          {'1280x720': 1.35},
          {'414x736': 1.16},
          {'1680x1050': 1.11},
          {'768x1024': 1.10}
        ],
        arr: [],
        sortMethod: '',
        baseArr: '',
      }
    },
    mounted() {
      function Size(key, value) {
        this.width = key.split('x')[0];
        this.height = key.split('x')[1];
        this.fullSize = key;
        this.percent = value;
      }

      for (let i = 0; i < this.size.length; i++) {
        for (let key in this.size[i]) {
          this.arr.push(new Size(key, this.size[i][key]))
        }
      }
      this.baseArr = this.arr
    },
    methods: {
      showBase() {
        this.arr = this.baseArr
      },
      showByDevice(max, min) {
        this.arr = this.baseArr.filter((e) => {
          return (e.width > min && e.width < max)
        })
      },

    },
    computed: {
      sortingArr() {
        switch (this.sortMethod) {
          case "width":
            this.arr.sort(function (a, b) {
              return b.width - a.width
            })
            break
          case "height":
            this.arr.sort(function (a, b) {
              return b.height - a.height
            })
            break
          case "usage":
            this.arr.sort(function (a, b) {
              return b.percent - a.percent
            })
            break
          default:
            return this.arr
        }
        return this.arr
      },
    }
  };
</script>

<style scoped
       lang="scss">
  .bg {
    //background-color: black;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 20px;

    & > .container {
    }
  }

  .test {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    height: 100%;

    span {
      font-weight: bold;
      font-size: 30px;
      color: black;

      &:before, &:after {
        position: relative;

      }
    }

    .title:after {
      color: orange;
    }

    @include breakpoint($desktop_1600) {
      .width:after {
        color: red;
        content: '#{$desktop_1600}';
      }

      .container-width:after {
        color: red;
        content: '1440px';
      }
      .title:after {
        content: 'Full HD';
      }
    }
    @include breakpoint($onlyDesktop) {
      .width:after {
        color: green;
        content: '#{$tablet_1280}';
      }

      .container-width:after {
        color: green;
        content: '1140px';
      }
      .title:after {
        content: 'HD monitor, notebook';
      }
    }
    @include breakpoint($onlyTabletLandscape) {
      .width:after {
        color: royalblue;
        content: '#{$tablet_992}';

      }
      .title:after {
        content: 'Landscape tablet , large tablet';
      }
      .container-width:after {
        color: royalblue;
        content: '960px';
      }
    }
    @include breakpoint($onlyTabletPortrait) {
      .width:after {
        color: violet;
        content: '#{$tablet_768}';
      }

      .container-width:after {
        color: violet;
        content: '720px';
      }
      .title:after {
        content: 'Portrait tablet , landscape phone';
      }
    }
    @include breakpoint($mobile_576) {
      .width:after {
        color: blue;
        content: '#{$mobile_576 }';
      }

      .container-width:after {
        color: blue;
        content: '540px';
      }
      .title:after {
        content: 'Landscape phone,portrait tablet';
      }
    }
    @include breakpoint($minWidth $mobile_576) {
      .width:after {
        color: purple;
        content: '#{$mobile_320}';
      }

      .container-width:after {
        color: purple;
        content: '100%';
      }
      .title:after {
        content: 'Mobile phone';
      }
    }
  }

  .sizes {
    margin-top: 50px;
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;

    .cart {
      justify-content: space-between;
      padding: 10px;
      border-radius: 10px;
      border: 1px solid black;
      display: flex;
    }

  }
</style>
