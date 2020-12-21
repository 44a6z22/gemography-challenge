<template>
  <div
    class="repository-card"
    data-aos="zoom-in-down"
  >
    <div class="header">
      <img
        :src="repo.owner.avatar_url"
        alt="User's avatar"
        class="user-avatar"
      />
      <h3 class="repo-name">{{ repo.name }}</h3>
    </div>
    <div class="repository-information">
      <h3 class="repo-name">{{ repo.name }}</h3>

      <p class="desciption-box">{{ repo.description }}</p>

      <div class="bottom-ligne">
        <div class="chips">
          <chip Title="Stars" :Text="repo.stargazers_count" />
          <chip Title="Issues" :Text="repo.open_issues" />
        </div>
        <p>
          submited {{ differenceInDays }} days ago By {{ repo.owner.login }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Chip from "./Chip";

export default {
  name: "card",

  data: function () {
    return {
      differenceInDays: 0,
    };
  },

  components: {
    Chip,
  },

  props: ["repo"],

  methods: {
    getDifferenceDateInDays: function () {
      var time =
        new Date(this.repo.created_at).getTime() - new Date().getTime();
      this.differenceInDays = Math.floor(time / (1000 * 3600 * 24)) * -1;
    },
  },

  mounted: function () {
    this.getDifferenceDateInDays();
  },
};
</script>

<style lang="scss" scoped>
.repository-card {
  display: flex;
  flex-direction: row;
  // margin: 3em;
  padding: 2em;

  & .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & .user-avatar {
      border-radius: 0.3em;
      width: 9em;
      height: 9em;
    }
    & .repo-name {
      display: none;
    }
  }

  & .repository-information {
    margin-left: 1em;
    display: flex;
    flex-direction: column;
    text-align: left;
    line-height: 0.2em;
    & .desciption-box {
      width: 90%;
      line-height: 2em;
      text-align: justify;
    }
    & .bottom-ligne {
      display: flex;
      flex-direction: row;
      @media screen and (max-width: 800px) {
        flex-direction: column-reverse;
      }
      .chips {
        display: flex;
        flex-direction: row;
      }
    }
  }

  @media only screen and (max-width: 800px) {
    & {
      width: 80%;
      margin: auto;
      flex-direction: column;
      & .header {
        & .repo-name {
          display: inline;
        }
      }
      & .repository-information {
        & .repo-name {
          display: none;
        }
      }
    }
  }
}
</style>