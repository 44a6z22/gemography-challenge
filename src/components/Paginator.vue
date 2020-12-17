<template>
  <div class="paginator">
    <button @click="decrement" class="left-button" > &lt;- </button>
    <span class="counter"> {{ PagesCount }}</span>
    <button @click="increment" class="right-button"> -> </button>
  </div>
</template>

<script>
export default {
    name:"Paginator", 
    props: ["PagesCount"],
    methods: {
        increment: function() {
           this.$store.commit('increment')
        }, 
        
        decrement: function() {
           this.$store.commit('decrement')
        }
    }
}
</script>

<style lang="scss" scoped>
    .paginator{
        display: flex;
        flex-direction: row;
        justify-content: center;

        & .left-button, & .right-button{
            border: none;
            width: 15em;
            height: 2em;
        }
        & .counter {
            // height: 2;
            color: black;
            padding: .3em 2em;   
        }
    }
</style>