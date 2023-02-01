const redux = require("redux")


const counterReducer = (state = {counter : 0},action) => {

    if (action.type === "DECREMENT") return {
        counter : state.counter - 1
    }
    if (action.type === "DECREMENT2") return {
        counter : state.counter - 2
    }
    if (action.type === "INCREMENT2") return {
        counter : state.counter + 2
    }
     return {
        counter : state.counter + 1
    }
}

const store = redux.createStore(counterReducer)
console.log(store.getState())

const counterSubscriber = () => {
    const latestState = store.getState()
    console.log(latestState)
}

store.subscribe(counterSubscriber)

store.dispatch({type : 'INCREMENT'})
store.dispatch({type : 'INCREMENT'})
store.dispatch({type : 'INCREMENT'})
store.dispatch({type : 'INCREMENT'})
store.dispatch({type : 'INCREMENT'})
store.dispatch({type : 'INCREMENT2'})
store.dispatch({type : 'DECREMENT2'})
store.dispatch({type : 'DECREMENT'})
