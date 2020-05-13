<template lang="pug">
  .container
    h1.test Hello pug
      .wrap
        router-link(to="/").btn-primary.btn return
        button.btn.btn-primary(@click="alertTest(123)") press
    .carts-container
      nav
        li
          label.form-group Filter
            select#filter.form-control(v-model="sortOption")
              option(v-for="sort in sortValues") {{sort}}
            button.btn.btn-primary(@click="sort") Sort
        li
          label.form-group Search
            input#search.form-control(v-model='searchData')
          p {{searchData}}
        li
          .form-group
            button.btn.btn-primary(@click="addUser") add user
      #grid-test
        template(v-for="(items,index) in numbers")
          div.cart(:class="`cart${index+1}`")
            h1 {{index+1}}
        //div.cart(v-for="user in filteredData")
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
        numbers: [1, 2, 3, 4, 5, 6],
        sortValues: ['id', 'name', 'data'],
        sortOption: '',
      };
    },
    methods: {
      alertTest() {
        console.log(1123)
      },
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

  .wrap {
    .btn {
      margin: 10px;
    }
  }

  nav {
    display: flex;

    li {
      .form-group {
        display: flex;
        padding: 10px;
        margin-bottom: 0;

        input {
          margin-right: 10px;
          margin-left: 10px;
        }
      }
    }
  }



</style>
