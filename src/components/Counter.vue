<template>
  <h1>Counter - Vuex</h1>
  <h2>Direct Access: {{ $store.state.count }}</h2>
  <h2>Computed: {{ countComputed }}</h2>

    <button @click="increment">+1</button>
    <button @click="incrementBy(5)">+5</button>
    <button @click="randomInt">Random</button>

  <h2>MapState: {{ count }} </h2>
  <h2>lastMutation: {{ lastMutation }} </h2>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
    computed: {
        countComputed(){
            return this.$store.state.count
        },
        ...mapState(['count', 'lastMutation'])
/*         ...mapState({
            count: state => state.count
        })
 */    },
    methods: {
        increment() {
            this.$store.commit('increment')
        },
        incrementBy(value) {
            this.$store.commit('incrementBy', value)
        },
/*         incrementRandomInt() {
            this.$store.dispatch('incrementRandomInt')
        },*/        
        ...mapActions({
            randomInt: 'incrementRandomInt'
        })
    }
}
</script>
