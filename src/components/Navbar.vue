<template lang="pug">

    #Navbar 
        .left
            a(href="#").social-media-link
                i.icon.ion-logo-github.github-icon.social-media-icons
            a(href="#").social-media-link
                i.icon.ion-logo-linkedin.linkedin-icon.social-media-icons
            a(href="#").social-media-link
                i.icon.ion-ios-at.email-icon.social-media-icons
        .right
            i.icon.ion-ios-keypad.menu-icon(@click.prevent='toggleSideBar')
            
        
        

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

    $nav-padding: 2em

    #Navbar
        height: 60px
        background-color: transparent
        position: fixed
        top: 0
        left: 0
        width: 100%
        display: table
        color: white
        

    .left, .right
        display: table-cell
        width: 50%
        vertical-align: middle

    .left
        padding-left: $nav-padding

    .right
        text-align: right
        padding-right: $nav-padding

    .menu-icon
        font-size: 2em
        opacity: 0.8
        text-shadow: 2px 4px 3px rgba(0,0,0,0.2)
        cursor: pointer
        transition: transform 0.2 ease-in
    
    .menu-icon:hover
        transform: scale(1.5)

    .social-media-link
        color: white
        opacity: 0.7

    .social-media-icons
        margin-right: 1.2em
        font-size: 1.1em
        display: inline-block
        text-shadow: 2px 4px 3px rgba(0,0,0,0.1)
        transition: transform 0.2s ease-in

    .social-media-link:hover .social-media-icons
        transform: scale(1.5)




</style>
