<template lang="pug">

    #sidebar
        .left
            .sidebar-quote in the land of the blind, the one eyed man is king
                span.quote-credit - Desiderius Erasmus
        .right
            .sidebar-top-menu
                i.icon.ion-ios-close.close-icon(@click.prevent="toggleSideBar")
                
            .sidebar-menu
                
                ul.sidebar-menu-list
                    li.sidebar-menu-listitem Main
                    li.sidebar-menu-listitem Projects
                    li.sidebar-menu-listitem Contact
        
        

</template>



<script>


export default {



    methods: {
        toggleSideBar(e) {
            return this.$store.commit("toggleSideBar");
        }
    }
}


</script>

<style lang="sass" scoped> 

    #sidebar
        background-image: url('../images/nav-bg.jpg')
        color: white
        background-color: black
        position: fixed
        top: 0
        left: 0
        width: 100%
        height: 100%
        display: table
        z-index: 1
        background-size: 50%
        background-position: left
        background-repeat: no-repeat

        .left, .right
            display: table-cell
            

        .left
            width: 67%
            height: 100%
        
        .sidebar-quote
            position: absolute
            bottom: 0
            
            width: 100%
            padding-left: 2em
            padding-bottom: 2em
            letter-spacing: 1px
            color: rgba(255,255,255,0.5)
            font-size: 0.9em

        .quote-credit
            font-style: italic
            font-size: 1em
            margin-left: 1em
            letter-spacing: 3px
            font-weight: 700
            color: rgba(255,255,255,0.9)

            
        
        .right 
            width: 33%
            display: table
            width: 100%
            height: 100%

        .sidebar-top-menu
            padding: 0em 2em
            height: 60px
            display: table
            width: 100%
            text-align: right

        .close-icon
            font-size: 3.5em
            display: table-cell
            vertical-align: middle
            cursor: pointer
        
        .sidebar-menu
            display: table-row
            height: 100%


        .sidebar-menu-list
            display: table-cell
            vertical-align: middle
            

        .sidebar-menu-listitem
            margin-bottom: 2em
            font-weight: 400
            font-size: 2em
            opacity: 0.7
            letter-spacing: 2px

        @media (max-width: 600px)
            .sidebar-menu-list
                text-align: left
            .left
                width: 50%
            .sidebar-menu-listitem
                font-size: 1.5em

            .sidebar-quote 
                font-size: 0.7em
                color: rgba(255,255,255,0.8)

            
            
            


</style>
