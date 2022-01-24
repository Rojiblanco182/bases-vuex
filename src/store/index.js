import { createStore } from "vuex"
import getRandomInt from "../helpers/getRandomInt"

export default createStore({
    state: {
        count: 1,
        lastMutation: 'none',
        isLoading: false
    },
    mutations: {
        increment(state) {
            state.count++
            state.lastMutation = 'increment'
        },
        incrementBy(state, value) {
            state.count += value
            state.lastMutation = 'incrementBy'
        },
        setLoading(state, value) {
            state.isLoading = value
        }
    },
    actions: {
        async incrementRandomInt(context) {
            context.commit('setLoading', true)
            const randomInt = await getRandomInt()
            context.commit('incrementBy', randomInt)
            context.commit('setLoading', false)
        }
    },
    getters: {
        squareCount(state) {
            return state.count * state.count
        }
    }
})