<template lang="pug">

    #scrollbar        
        ul.scrollbar-list
            li.scrollbar-list-item(v-for="(component, index) in components" @click="moveComponent(index, $event)")
                span(:key="index" v-bind:class="{ active: currentScroll == index + 1 }").scroll-pos-icon


        
    

</template>



<script>


export default {

    computed: {
        components() {
            return this.$store.state.scrollComponents;
        },
        currentScroll() {
            return this.$store.state.currentScroll;
        }
    },

    methods: {
        moveComponent(index, e) {
            return this.$store.commit('moveTo', {
                currentScroll: index + 1
            });
        }
    }
}


</script>

<style lang="sass" scoped>

    #scrollbar
        position: fixed
        top: 50%
        right: 0
        height: 200px
        margin-top: -100px
        padding-right: 2em
        text-align: center
        display: table

    .scrollbar-list
        display: table-cell
        vertical-align: middle

    .scroll-pos-icon::before
        display: inline-block
        content: ''
        height: 6px
        width: 6px
        background-color: white
        border-radius: 50%
        opacity: 0.3
        margin-top: 0.7em

    .scroll-pos-icon 
        cursor: pointer
    .scroll-pos-icon.active::before
        opacity: 1

    .scroll-bar-listitem
        padding: 1px

    @media (max-width: 600px)
        #scrollbar
            padding-right: 2em


</style>
