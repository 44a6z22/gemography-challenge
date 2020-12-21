<template>
  <div>
    <Spinner v-if="isLoading"></Spinner>
    <Card v-else v-for="item in items" :key="item.id" :repo="item" />
    <Spinner v-if="busy"/>
  </div>
</template>

<script>
import GithubService from "../services/GithubService";
import Card from "@/components/Card";
import Spinner from "@/components/Spinner";
import moment from "moment";

import axios from "axios";

export default {
  name: "Home",
  components: {
    Card,
    Spinner,
  },
  data: function () {
    return {
      isLoading: true,
      page: 1,
      items: [],
      limit: 10,
      busy: false,
      posts: [],
      recordPrePage: 30,
      // differenceInDays:null
    };
  },
  watch: {
    page: function () {
      this.loadMore();
    },
  },
  methods: {
    visibilityChanged: function(isVisible){
        console.log(isVisible);
    },
    //   the scroll handler to check when the user hits the bottom of the page
    handleScroll: function () {
      if (document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight ) 
      {
        if(!this.busy){
          this.page = this.page + 1;
          this.busy = true;
        }
      }
    },
    loadMore: function () {
      // get the date of a month ago
      let aMonthAgoDate = moment().subtract(30, "days").format("YYYY-MM-DD");

      // calling the service a the data recieved gets push to the end of the items array .
      this.GithubService.getTopHundredRepositories(
        aMonthAgoDate,
        this.page,
        this.recordPrePage
      ).then((data) => {
        this.items.push(...data.items);
        this.isLoading = false;
        this.busy = false;
      });
    },
  },

  mounted: function () {
    // intentiating the github service . 
    this.GithubService = new GithubService();

    // adding a scroll event to check when the user hits the bottom of the page ;
    window.addEventListener("scroll", this.handleScroll);

    // this gets called the first time to show the first result ont he page
     this.loadMore();
  },
};
</script>
<style lang="scss" scoped>
.home {
  width: 90%;
  height: 100%;
  margin: auto;
}
</style>
