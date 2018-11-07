<template lang="pug">

   #entranceanimation(v-bind:class="{ fadeout: loaded }")
        .tween {{ animatedLoad }}%
    

</template>



<script>
import TweenLite from "gsap/TweenLite";



export default {

    data: function() {
        return {
            'load': 0,
            'loaded': false
        }
    },

    computed: {
        animatedLoad() {
            return this.load.toFixed(0);
        }
    },

    methods: {

        setLoad() {
            return this.loaded = true;
        },
        tweenLoad() {
            TweenLite.to(this.$data, 2, { load: 100, onComplete: this.setLoad  })
        }
    },

    mounted: function() {
        return this.tweenLoad();
    }
}


</script>

<style lang="sass" scoped>

    #entranceanimation
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        z-index: 9999
        display: table
        background-color: black
        text-align: center

    .tween
        display: table-cell
        vertical-align: middle
        color: rgba(255,255,255,1)
        font-weight: 400
        font-size: 1em

    .fadeout
        animation: fadeout 2s linear 0s 1 forwards
        

    @keyframes fadeout 
        0%
            opacity: 1

        100%
            z-index: -1
            opacity: 0




    

        
        







  

</style>
