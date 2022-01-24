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
        }
    },
    actions: {
        async incrementRandomInt(context) {
            const randomInt = await getRandomInt()
            context.commit('incrementBy', randomInt)
        }
    }
})