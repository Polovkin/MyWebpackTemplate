<template lang="pug">
  div
    router-link(to="/") Home
    button(@click="counterClick") vuex
    counter
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import Counter from '../../components/Counter.vue';

export default {
  name: 'VuexTest.vue',
  components: {Counter},
  computed: {
    ...mapGetters([
      'COUNTER_PLUS',
    ]),
  },
  methods: {
    counterClick() {
      // this.$store.commit('CHANGE_COUNTER'); //напрямую к мутации
      this.$store.dispatch('COUNTER_PLUS'); // асинхронно через action
    },
  },
};
</script>

<style scoped>

</style>
