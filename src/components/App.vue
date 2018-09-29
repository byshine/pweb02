<template lang="pug">

    #app
        h1 Hello World
        router-link(to="/a") Component a
        router-link(to="/b") Component b
        A
        B
        router-view

</template>



<script>
import A from './A.vue';
import B from './B.vue';

export default {
    components: {
       A, B
    }
}


</script>

<style lang="sass">


</style>
