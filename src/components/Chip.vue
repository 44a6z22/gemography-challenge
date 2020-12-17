
<template>
    <div class="chip">
        <p class="text" > <span class="title">{{Title}}</span> : {{Text}} </p>
    </div>
</template>

<script>
export default {
    name:"Chip", 
    props:["Text", "Title"]

}

</script>

<style lang="scss" scoped>
.chip{
    padding: 0em 1em;
    border-radius: .3em;
    margin: 0em .3em 0em .0em;
    background: black;
    width: 100px;
    & .text{
        color: white;
        & .title{
            font-weight: 400;
        }
    }
}
</style>