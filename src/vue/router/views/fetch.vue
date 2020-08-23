<template lang="pug">
  div
    h1 Fetch test
    template(v-for="user of GET_USERS")
      p {{user.name}}
      p {{user.phone}}
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'Breakpoint.vue',
  data() {
    return {}
  },
  computed: mapGetters(['GET_USERS']),
  mounted() {
    this.$store.dispatch('GET_USERS_DATA')
  }
};
</script>

<style scoped
       lang="scss">

</style>
