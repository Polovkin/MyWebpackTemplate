<template lang="pug">
  div
    h2 TypeScript
    router-link(to="/") Home
</template>

<script lang="ts">
  import Component from "vue-class-component"
  import { Prop } from "vue-property-decorator"
  type ComplexObjectInterface = {
    testProp: string
    modelName: number
  }
  @Component
  export default ComponentName extends Component {
  @Prop({
    type: Object
  })
    propExample: ComplexObjectInterface

    dataExample: string = "This Property Will Be Data"

    get computedExample() {
      return this.dataExample + this.propExample.testProp + "Computed Property Example";
    }

    methodExample() {
      this.dataExample = "This is being done in a method"
    }
  }

</script>

<style scoped>

</style>
