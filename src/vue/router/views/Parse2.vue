<template lang="pug">
  .container
    h1.test Hello pug
    router-link(to="/") return
    button.btn.btn-primary(@click="setPages()") press
    .carts-container
      nav
        li
          label.form-group Filter
            select#filter.form-control(v-model="sortOption", @change="sort")
              option(v-for="sort in sortValues") {{sort}}
        li
          label.form-group Search
            input#search.form-control(v-model='searchData')
          p {{searchData}}
        li
          button.btn.btn-primary(@click="addUser") add user
      div.cart(v-for="user in filteredData")
        h4 name: {{user.name}}
        p email: {{user.email}}

        .data
          span postID: {{user.id}}
          p {{user.body}}
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
        pages: [],
        perPage: 9,
      };
    },
    methods: {
      alertTest(data) {
        console.log(data)
      },
      counterTest() {
        this.counter++;
      },

      async addUser() {
        const newUser = await this.$store.dispatch('CREATE_USER');
        this.data.push(newUser);
      },
    },
    setPages () {
      let numberOfPages = Math.ceil(this.data.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
      console.log(this.pages)
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
      sort() {
        switch (this.sortOption) {
          case 'id':
           return  this.data = this.data.sort((a, b) => a.id - b.id);
          case 'name':
           return  this.data = this.data.sort((a, b) => a.name.localeCompare(b.name));
        }
      },
    },
    async mounted() {
      this.data = await this.$store.dispatch('GET_COMMENTS');
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
flex-direction: column;
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
