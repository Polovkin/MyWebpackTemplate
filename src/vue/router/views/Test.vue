<template lang="pug">
  div
    h2 TypeScript
    router-link(to="/") Home
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'

  @Component
  export default class HelloWorld extends Vue {
    private msg: string = "welcome to my app";
    private list: Array<object> = [
      {
        name: 'Preetish',
        age: '26'
      },
      {
        name: 'John',
        age: '30'
      }
    ]
  }
</script>

<style scoped>

</style>
