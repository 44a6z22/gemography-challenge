<template>
    <div class="repository-card">
        <img :src="image" alt="User's avatar" class="user-avatar"/>
        <div class="repository-information">
            <h3> Repository Name</h3>
            <p> Repository Discription </p>
            <div class="bottom-ligne">
                <chip :Text="chips.value1" />
                <chip :Text="chips.value1" />
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
    data: function (){
        return {
            chips: {
                value1: "ok",
                value2: "ok1",
            }, 
            image: "https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
        };
    },
    created: function (){

    }, 
    methods: {

    }, 
}
</script>

<style lang="scss" scoped>
.repository-card{
    display: flex;
    flex-direction: row;

    & .user-avatar{
        border-radius: .2em;
        width: 7em;
        height: 7em;
    }

    & .repository-information{
        margin-left: 1em;
        display: flex; 
        flex-direction: column;
        text-align: left;
        line-height: .2em;
        & .bottom-ligne{
            display: flex; 
            flex-direction: row;
            
        }
    }

}
</style>