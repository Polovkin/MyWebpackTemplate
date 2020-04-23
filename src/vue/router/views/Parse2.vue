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
              option(v-for="selects in sortValues") {{selects}}
        li
          label.form-group Search
            input#search.form-control(v-model='searchData')
          p {{searchData}}
        li
      div.cart(v-for="user in filteredData")
        h4 name: {{user.name}}
        p email: {{user.email}}

        .data
          span postID: {{user.id}}
          p {{user.body}}
      .clearfix.btn-group.col-md-2.offset-md-5
        button.btn.btn-sm.btn-outline-secondary(type='button', v-if='page !== 1', @click='page--')  <<
        button.btn.btn-sm.btn-outline-secondary(type='button', v-for='pageNumber in pages.slice(page-1, page+5)', @click='page = pageNumber')  {{pageNumber}}
        button.btn.btn-sm.btn-outline-secondary(type='button', @click='page++', v-if='page < pages.length')  >>
      div.cart(v-for="user in data")
        h4 name: {{user.name}}
        p email: {{user.email}}

        .data
          span postID: {{user.id}}
          p {{user.body}}
      div.cart(v-for="user in data")
        h4 name: {{user.name}}
        p email: {{user.email}}

        .data
          span postID: {{user.id}}
          p {{user.body}}
      div.cart(v-for="user in data")
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
        //pagination
        page: 1,
        perPage: 5,
        pages: [],
      };
    },
    methods: {
      alertTest(data) {
        console.log(data)
      },
      sort() {
        switch (this.sortOption) {
          case 'id':
            return this.data = this.data.sort((a, b) => a.id - b.id);
          case 'name':
            return this.data= this.data.sort((a, b) => a.name.localeCompare(b.name));
        }
      },
      paginate(posts) {
        let page = this.page;
        let perPage = this.perPage;
        let from = (page * perPage) - perPage;
        let to = (page * perPage);
        return posts.slice(from, to);
      }
    },
    computed: {
      filteredData() {
        let test = Object.values(this.data).filter((user) => {
          const userName = user.name.split()[0].toLowerCase();
          const userId = user.id;
          if (Number(this.searchData) === userId || userName.indexOf((this.searchData.toLowerCase())) + 1) {
            return user;
          }
        });
        return this.paginate(test);
      },
    },
    async mounted() {
      this.data = await this.$store.dispatch('GET_COMMENTS');
      let numberOfPages = Math.ceil(this.data.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
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
