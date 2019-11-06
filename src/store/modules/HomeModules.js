import { HOME_MUTATION } from '../mutation-types/homeModules_types'
import {sync} from '../actions/homeAction'

export const modelA = {
    state: {
        count: 0,
        todos: [
            {id: 1, text: '...', done: true},
            {id: 2, text: '...', done: false}
        ]
    },
    mutations: {
        [HOME_MUTATION](state) {
            state.count++
        }
    },
    getters: {
        doneTodos: (state) => {
            return state.todos.filter(todo => todo.done)
        },
        anthorData: (state, getters) => getters.doneTodos.length,
        test: state => id => state.count+id
    },
    actions: {
        sync
    }
};

