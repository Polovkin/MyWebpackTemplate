<template>
  <div id="app">
    <h2>{{ eblo }}</h2>
    <button @click="eblo++">push</button>
    <Test/>
    <Test2/>
  </div>
</template>

<script>
  import Test2 from "./components/Test2.vue";
  import Test from "./components/Test.vue";

  export default {
    name: "app",
    components: {
      Test2, Test

    },
    data() {
      return {
        eblo: 1
      }
    },
  };
</script>

<style lang="scss">
 @import "../assets/scss/base/variables";
  @import "../assets/scss/utils/mixins";

  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;

    @include mediaQueriesFor(1200px) {
        color: red;
    }
    @include mediaQueriesFor(120px) {
      color: navajowhite;
    }
    @include mediaQueriesFor(12300px) {
      color: yellow;
    }
    @include mediaQueriesFor(500px) {
      color: green;
    }
@include mediaQueriesFor(tablet-max) {

}
  }


</style>
