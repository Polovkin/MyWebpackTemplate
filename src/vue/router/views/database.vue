<template lang="pug">
  div
    h1 Firebase test
    router-link(to="/") Home
    button(@click="writeData") writeData
</template>

<script>


export default {
  name: 'Breakpoint.vue',
  data() {
    return {

    }
  },
  async mounted() {

  },
  methods: {
    writeData(){
      this.$store.dispatch('WRITE_DATA');
    },
  },
  computed: {

  }
};
</script>

<style scoped
       lang="scss">

</style>
