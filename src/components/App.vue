<template lang="pug">

    v-touch.touch-wrapper(@swipedown='moveUp' @swipeup='moveDown')
        #app(@wheel="moveComponent")
            EntranceAnimation
            Navbar
            transition(name='component-fade' mode="out-in")
                Main(v-bind:is="currentComponent")
            transition(name='fade')
                Sidebar(v-if='sideBarStatus' v-bind:class='{ active: sideBarStatus }')
            ScrollBar
        
        
        
    

</template>



<script>
import Main from './Main.vue';
import Sidebar from './Sidebar.vue';
import Navbar from './Navbar.vue';
import ScrollBar from './ScrollBar.vue';
import SectionAMN from './SectionAMN.vue';
import Contact from './Contact.vue';
import EntranceAnimation from './EntranceAnimation.vue';
import _ from 'lodash';

export default {
    components: {
        Main, Sidebar, Navbar, ScrollBar, SectionAMN, Contact, EntranceAnimation
    },

    computed: {
        sideBarStatus() {
            return this.$store.state.isSidebarOpen;
        },
        currentComponent() {
            let currentScroll = this.$store.state.currentScroll;
            let scrollComponents = this.$store.state.scrollComponents[currentScroll-1];
            return scrollComponents;
        }
    },

    methods: {
        moveComponent: _.debounce(function(e) {
            e.deltaY <= 0 ? this.$store.commit('moveUp') : this.$store.commit('moveDown');
        }, 400),

        moveUp: _.debounce(function(e) {
            this.$store.commit('moveUp');
        }, 400),

        moveDown: _.debounce(function(e) {
            this.$store.commit('moveDown');
        }, 400)
    }
}


</script>

<style lang="sass" scoped>

    #app, #page, .touch-wrapper
        height: 100%

    #page
        margin-left: 75px

    .fade-enter-active, .fade-leave-active 
        transition: opacity .5s

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ 
        opacity: 0

    .component-fade-enter-active, .component-fade-leave-active 
        transition: opacity .3s ease;

    .component-fade-enter, .component-fade-leave-to
        opacity: 0;
    

</style>
