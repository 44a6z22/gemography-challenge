<template>
  <div class="home">
    <p v-if="isLoading">Loading ...</p>
    <Card v-else v-for="item in items" :key="item.id" :repo="item"  />
  </div>
</template>

<script>
import GithubService from "../services/GithubService";
import Card from "@/components/Card";
import Paginator from "@/components/Paginator";
import moment from "moment";

export default {
  name: "Home",
  components: {
    Card,
    Paginator,
  },
  data: function () {
    return {
      isLoading: true,
      items: [],
      // differenceInDays:null 
    };
  },
 
  created: function () {
    this.GithubService = new GithubService();
  },
  
  mounted: function () {

    var aMonthAgoDate = moment().subtract(30, 'days').format("YYYY-MM-DD");

    this.GithubService.getTopHundredRepositories(aMonthAgoDate)
      .then((data) => {
        this.items.push(...data.items) ;
        this.isLoading = false;

      });
  },
};
</script>
<style lang="scss" scoped>
  .home{
    width: 90%;
    margin: auto;
  }
</style>
