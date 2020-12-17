<template>
    <div class="repository-card">
        <img :src="repo.owner.avatar_url" alt="User's avatar" class="user-avatar"/>
        <div class="repository-information">
            <h3> {{repo.name}}</h3>
            
            <p> {{repo.description}} </p>
            
            <div class="bottom-ligne">
                <chip Title="stars" :Text="repo.stargazers_count" />
                <chip Title="Issues" :Text="repo.open_issues" />
                <p>Time Interval by Owner Name</p>
            </div>

        </div>
    </div>
</template>

<script>

import Chip from "./Chip";

export default {
    name: "card", 
    components:{
        Chip
    },
    props: ["repo"],
}
</script>

<style lang="scss" scoped>
.repository-card{
    display: flex;
    flex-direction: row;
    margin: 3em;

    & .user-avatar{
        border-radius: .3em;
        width: 9em;
        height: 9em;
    }

    & .repository-information{
        margin-left: 1em;
        display: flex; 
        flex-direction: column;
        text-align: left;
        line-height: .2em;
        & p{
            // padding: .2em 0em
        }
        & .bottom-ligne{
            display: flex; 
            flex-direction: row;
            
        }
    }

}
</style>