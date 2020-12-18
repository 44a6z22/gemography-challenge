<template>
  <div>
    <Spinner v-if="isLoading"></Spinner>
    <Card v-else v-for="item in items" :key="item.id" :repo="item" />
    <Spinner v-if="busy"></Spinner>
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
      recordPrePage: 30
      // differenceInDays:null
    };
  },
  watch: {
    page: function () {
      this.loadMore();
    },
  },
  methods: {
    handleScroll: function () {
      if (
        document.documentElement.scrollTop + window.innerHeight ===
        document.documentElement.offsetHeight
      ) {
        this.page = this.page + 1;
        this.busy = true;
      }
    },
    loadMore: function () {
      var aMonthAgoDate = moment().subtract(30, "days").format("YYYY-MM-DD");

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

  created: function () {
    this.GithubService = new GithubService();
    window.addEventListener("scroll", this.handleScroll);
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
