<template lang="pug">

   section#amn.content-section
    .left
        blockquote.blockquote
         p.quote The beginnings and ends of shadow lie between the light and darkness and may be infinitely diminished and infinitely increased. Shadow is the means by which bodies display their form. The forms of bodies could not be understood in detail but for shadow.
        cite.cite - Leonardo Davinci
    .right     
        
    

</template>



<script>

export default {

}


</script>

<style lang="sass" scoped>

    #amn
        background-image: url('../images/main-bg-4.jpg')
        background-size: cover
        width: 100%
        height: 100%
        background-repeat: no-repeat
        background-position: center center
        display: table

    .left, .right
        display: table-cell
        width: 50%
        max-width: 50%
    

    .left
        color: white
        vertical-align: middle
        text-align: center

    .right
        vertical-align: middle
        text-align: left

    .blockquote
        
        padding: 1em
        display: inline-block
        line-height: 1.5
        letter-spacing: 1.5px
    
    .quote
        color: rgba(255,255,255,0.8)
        font-size: 1em
        max-width: 500px
        

    .cite
        display: block
        font-style: italic
        letter-spacing: 1px

    @media (max-width: 600px)
        .quote
            font-size: 0.7em
        .right
            display: none
        .left
            width: 100%
            padding-top: 15em
        .blockquote
            max-width: auto
        .content-section
            padding: 40px
        

        


</style>
