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
</template>

<script>


  export default {
    name: 'Braikpoints.vue',
    components: {},
    computed: {},
    methods: {},
  };
</script>

<style scoped
       lang="scss">
  .bg {
    background-color: black;
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
        content: '#{$tablet_1200}';
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
    @include breakpoint($minWidth$mobile_576) {
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
</style>
