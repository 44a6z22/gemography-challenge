<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <button @click="increment"> click me {{this.$store.state.pagesCount}} </button>

    <Card v-for="item in items" :key="item.id"/>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Card from "@/components/Card";
import axios from "axios"
export default {
  name: 'Home',
  components: {
    // HelloWorld
    Card
  },
  data: function () {
    return {
      items : [
      ]
    }
  },
  methods: {
    get : function() {
      axios.get("https://api.github.com/search/repositories?q=created:>2017-10-22&per_page=100&sort=stars&order=desc$pages=1")
        .then( e => this.items = e.data.items).catch();
    },
    increment: function() {

    this.$store.commit('increment')
    }
  },
  created: function() {
    this.get();
  }
}
</script>
