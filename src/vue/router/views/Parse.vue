<template lang="pug">
  .container
    h1.test Hello pug
    router-link(to="/") return
    .carts-container
      nav
        li
          label Filter
            select#filter(v-model="sortOption")
              option(v-for="sort in sortValues") {{sort}}
            button(@click="sort") Sort
        li
          label Search
            input#search(v-model='searchData')
          p {{searchData}}
        li
           button(@click="addUser") add user
      div.cart(v-for="user in filteredData")
        h4 {{user.name}}
        p id :{{user.id}}
        details.cart__body
          summary More info
          .data
            p Full name: {{user.name}}
            p.mail Mail: {{user.email}}
          .address
            p City: {{user.address.city}}
            p Street: {{user.address.street}}
            p Suite: {{user.address.suite}}
            p Zipcode: {{user.address.zipcode}}
</template>

<script>

export default {
  name: 'Parse',
  components: {},
  data() {
    return {
      counter: 1,
      data: '',
      searchData: '',
      sortValues: ['id', 'name', 'data'],
      sortOption: '',
    };
  },
  methods: {
    counterTest() {
      this.counter++;
    },
    sort() {
      switch (this.sortOption) {
        case 'id':
          this.data = this.data.sort((a, b) => a.id - b.id);
          break;
        case 'name':
          this.data = this.data.sort((a, b) => a.name.localeCompare(b.name));
      }
    },
    async addUser() {
      const newUser = await this.$store.dispatch('CREATE_USER');
      this.data.push(newUser);
      console.log(1)
    },
  },
  computed: {
    filteredData() {
      return this.searchData === '' ? this.data :
          Object.values(this.data).filter((user) => {
            const userName = user.name.split()[0].toLowerCase();
            const userId = user.id;
            if (Number(this.searchData) === userId) {
              return user;
            } else if (userName.indexOf((this.searchData.toLowerCase())) + 1) {
              return user;
            }
          });
    },

  },
  async mounted() {
    this.data = await this.$store.dispatch('GET_TODO');
  },
};
</script>

<style lang="scss"
       scoped>
  .carts-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: 10px;

    .cart {
      border-radius: 10px;
      padding: 20px 30px;
      border: 1px solid lightgray;
      margin: 10px;
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);

      h4 {
        color: red;
      }

      .data {
        display: flex;

        p {
          margin-right: 10px;
        }

      }

      .mail {
        color: dodgerblue;
      }

      .address {
        padding: 10px;
        border: 1px solid lightgray;
        display: grid;
        grid-gap: 5px;
        grid-template-columns: repeat(2, 1fr);
      }
    }

    nav {
      display: flex;

      li {
        margin: 20px;
      }


    }
  }

</style>
