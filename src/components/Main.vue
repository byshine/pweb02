<template lang="pug">

    #main
        .main-intro-container
            h1.main-title Your Name
            h5.main-subtitle Web Developer
        .main-footer
            .left
                h5.quote-title - dedicated to the one and only
            .middle
                h5 go
                i.icons.ion-ios-arrow-down.scroll-icon(@click="moveDown")
            .right
                h5.tech-title Powered by Vue.js

</template>



<script>
import _ from 'lodash';

export default {

    methods: {
        moveDown: _.debounce(function(e) {
            this.$store.commit('moveDown');
        }, 400)
    }
}


</script>

<style lang="sass" scoped>

    $footer-margin: 2em;

    #main
        background-image: url('../images/main-bg2.jpeg')
        background-size: cover
        width: 100%
        height: 100%
        background-repeat: no-repeat
        background-position: center center
        display: table
        box-shadow: inset 0px 0px 14px 3px rgba(0,0,0,0.2)

    .main-intro-container
        display: table-cell
        vertical-align: middle
        padding-left: 5em

    .main-title
        color: white
        font-size: 3em
        opacity: 0.8
        letter-spacing: 10px
        text-shadow: 2px 4px 3px rgba(0,0,0,0.2)

    .main-subtitle 
        color: white
        margin-top: 1em
        letter-spacing: 2px
        font-weight: 400
        opacity: 0.7
        font-size: 0.8em

    .main-footer
        position: absolute
        color: white
        left: 0
        bottom: 0
        padding-bottom: 1em
        width: 100%
        height: 60px
        background-color: transparent
        display: table
        
    .left, .middle, .right
        display: table-cell
        text-align: center
        width: 33.3333333%
        vertical-align: middle

    .right
        padding-right: $footer-margin
        text-align: right

    .left
        padding-left: $footer-margin
        text-align: left
    
    .middle
        opacity: 0.8

    .scroll-icon
        display: inline-block
        margin-top: 0.5em
        animation: 1.5s updown 0s ease-in infinite
        cursor: pointer

    .tech-title
        opacity: 0.5
        font-size: 0.8em
        letter-spacing: 1px

    .quote-title
        font-size: 0.8em
        opacity: 0.5
        letter-spacing: 2px

    @keyframes updown
        0%
            transform: translateY(0)
        50%
            transform: translateY(20%)
        100%
            transform: translateY(0)
        
    @media (max-width: 600px)
        .quote-title, .middle, .tech-title
            font-size: 0.6em
            letter-spacing: 0.5px
            opacity: 0.9
        .left
            padding-left: 1em
        .right
            padding-right: 1em
        .main-footer
            padding-bottom: 0
        .main-intro-container
            padding-top: 15em
            padding-left: 0em
            text-align: center





</style>
