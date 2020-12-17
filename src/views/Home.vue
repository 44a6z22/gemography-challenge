<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Paginator :PagesCount="this.$store.state.pagesCount" /> -->
    <p v-if="isLoading"> Loading ... </p>
    <Card v-else v-for="item in items" :key="item.id" :repo="item"/>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Card from "@/components/Card";
import Paginator from "@/components/Paginator";
import axios from "axios";
export default {
  name: 'Home',
  components: {
    // HelloWorld
    Card,
    Paginator
  },
  data: function () {
    return {
      isLoading: true,
      items : []
    }
  },
  methods: {
    get : function() {
      axios.get("https://api.github.com/search/repositories?q=created:>2017-10-22&per_page=100&sort=stars&order=desc")
        .then( response => {
          this.items = [ ...this.items,  response.data.items]; 
          this.isLoading = false;
          console.log(this.items[0])
        })
        .catch( e => console.error(e));
    },
   
  },
  created: function() {
    this.get();
  }
}
</script>
