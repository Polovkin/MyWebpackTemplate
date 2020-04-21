<template>
  <!-- Перебираем через цикл displayedPosts, чтобы вывести каждый пост-->
  <div class="container">
    <div class="row">
      <div class="col-md-12" v-for="post in displayedPosts">
        <div class="card mb-4 box-shadow post-cards">
          <div class="card-body">
            <h5 class="capitalize">{{post.title}}</h5>
            <p class="card-text">{{post.body.slice(0, 120)}}...</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Перебираем через цикл массив pages, чтобы вывести каждый номер страницы -->
    <div class="clearfix btn-group col-md-2 offset-md-5">
      <button type="button" class="btn btn-sm btn-outline-secondary" v-if="page != 1" @click="page--"> << </button>
      <button type="button" class="btn btn-sm btn-outline-secondary" v-for="pageNumber in pages.slice(page-1, page+5)" @click="page = pageNumber"> {{pageNumber}} </button>
      <button type="button" @click="page++" v-if="page < pages.length" class="btn btn-sm btn-outline-secondary"> >> </button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {

    data() {
      return {
        posts: [],
        baseUrl: 'https://jsonplaceholder.typicode.com/',
        page: 1,
        perPage: 9,
        pages: [],
      }

    },
    methods: {
      setPages() {
        let numberOfPages = Math.ceil(this.posts.length / this.perPage);
        for (let index = 1; index <= numberOfPages; index++) {
          this.pages.push(index);
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
    watch: {
      posts() {
        this.setPages();
      }
    },
    async mounted() {
      this.posts = await this.$store.dispatch('GET_COMMENTS');
    },
    computed: {
      displayedPosts() {
        return this.paginate(this.posts);
      }
    },
  }
</script>
