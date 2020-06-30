<template lang="pug">
  .container
    h1.test JSON parse filter
      .wrap
        router-link(to="/").btn-primary.btn return
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
          .form-group
            button.btn.btn-primary(@click="addUser") add user


      loader(v-if="loader",msg="test")
      #grid-test(v-else)
        div.cart(v-for="(user,index) in filteredData", :class="'cart-'+ (index + 1)")
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

  import Loader from "../../components/app/loader.vue";

  export default {
    name: 'Parse',
    components: {Loader},
    data() {
      return {
        counter: 1,
        data: '',
        searchData: '',
        numbers: [1, 2, 3, 4, 5, 6],
        sortValues: ['id', 'name', 'data'],
        sortOption: '',
        loader: true,
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
            return this.data = this.data.sort((a, b) => a.id - b.id);
          case 'name':
            return this.data = this.data.sort((a, b) => a.name.localeCompare(b.name));
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
      this.data = await this.$store.dispatch('GET_DATA');
      this.loader = false;

    },

  };
</script>

<style lang="scss"
       scoped>
  .test:after {



  }
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

     @include breakpoint ($phone__all) {
         flex-direction: column;
      }
  }

  #grid-test {
    margin-top: 50px;
    width: 100%;
    //display: grid;
    //grid-template: ;
    /*grid-template-rows: auto;*/
    /*grid-template-columns: 1fr;*/
    /*grid-gap: 3em;*/
    display: flex;
    flex-direction: column;

    .cart {
      height: fit-content;
      border: 1px solid black;
      padding: 20px;
      border-radius: 20px;
      transition: all .4s;
      margin: 10px;

    }
  }


</style>
