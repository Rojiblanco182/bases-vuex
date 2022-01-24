<template>
  <h1>Counter - Vuex</h1>
  <h2>Direct Access: {{ $store.state.counter.count }}</h2>
  <h2>Computed: {{ countComputed }}</h2>

    <button @click="increment">+1</button>
    <button @click="incrementBy(5)">+5</button>
    <button @click="randomInt" :disabled="isLoading">Random</button>

  <h2>MapState: {{ count }} </h2>
  <h2>lastMutation: {{ lastMutation }} </h2>
  <h2>Direct getter: {{ $store.getters['counter/squareCount'] }} </h2>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
    computed: {
        countComputed(){
            return this.$store.state.counter.count
        },
        ...mapState('counter', ['count', 'lastMutation', 'isLoading'])
/*         ...mapState({
            count: state => state.count
        })
 */    },
    methods: {
        increment() {
            this.$store.commit('counter/increment')
        },
        incrementBy(value) {
            this.$store.commit('counter/incrementBy', value)
            //this.randomInt()
        },
/*         incrementRandomInt() {
            this.$store.dispatch('incrementRandomInt')
        },*/        
        ...mapActions('counter', {
            randomInt: 'incrementRandomInt'
        }),
        //...mapActions('counter', ['incrementRandomInt'])
    }
}
</script>
