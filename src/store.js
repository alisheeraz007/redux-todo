import { createStore } from 'redux'

function counter(state = { users: [], students: [] }, action) {
    // console.log(state)
    switch (action.type) {
        case "add":
            state.users.push(action.payload)
            return { users: state.users }
        case "del":
            state.users.splice(action.payload, 1)
            return { users: state.users }
        case "update":
            state.users[action.index].userName = action.userName
            state.users[action.index].password = action.password
            return { users: state.users }
        default:
            return { users: state.users }
    }
}

export let store = createStore(counter)

