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
        //Loader(v-if="!baseArr", :msg="'Запрос с сервера прийдет через 4-5сек'")

        .sizes()
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
          .summ
            template(,v-for="item of sortingArr" )
              .cart
                p {{item.fullSize}}
                p(:style="`background-color: ${item.percent > 5 ? 'green': 'red' } ;color: white`") {{item.percent}}


</template>

<script>
  import Loader from "../../components/app/loader.vue";

  export default {
    name: 'Breakpoint.vue',
    components: {Loader},
    data() {
      return {
        arr: [],
        sortMethod: '',
        baseArr: '',
        file: '',
      }
    },
    async mounted() {
      this.baseArr = await this.$store.dispatch('GET_CSV')
      this.arr = this.baseArr

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
      sumPercent() {
        let summ = 0;
        this.arr.forEach((item) => {
          summ += item.percent
        })
        return Math.round(summ)
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
    @include breakpoint($width__desktop-hd-min  ) {
      .width:after {
        color: red;
        content: '#{$width__desktop-hd-min }';
      }

      .container-width:after {
        color: red;
        content: '1440px';
      }
      .title:after {
        content: 'Full HD';
      }
    }
    @include breakpoint($desktop__all ) {
      .width:after {
        color: green;
        content: '#{$width__desktop-min }';
      }

      .container-width:after {
        color: green;
        content: '1140px';
      }
      .title:after {
        content: 'HD monitor, notebook';
      }
    }
    @include breakpoint($tablet__landscape ) {
      .width:after {
        color: royalblue;
        content: '#{$width__tablet-land}';

      }
      .title:after {
        content: 'Landscape tablet , large tablet';
      }
      .container-width:after {
        color: royalblue;
        content: '960px';
      }
    }
    @include breakpoint($width__tablet-port) {
      .width:after {
        color: violet;
        content: '#{$width__tablet-port}';
      }

      .container-width:after {
        color: violet;
        content: '720px';
      }
      .title:after {
        content: 'Portrait tablet , landscape phone';
      }
    }
    @include breakpoint($width__mobile-max   $width__tablet-port ) {
      .width:after {
        color: blue;
        content: '#{$width__mobile-max }';
      }

      .container-width:after {
        color: blue;
        content: '540px';
      }
      .title:after {
        content: 'Landscape phone,portrait tablet';
      }
    }
    @include breakpoint($phone__all  ) {
      .width:after {
        color: purple;
        content: '#{$width__mobile-max}';
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

  button {
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px 10px;
    margin: 5px;
  }
</style>
