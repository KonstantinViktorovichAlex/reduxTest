const redux = require('redux')

const initialState = {
    counter: 0
}

//Reducer
const reducer = (state = initialState, action) => {

    if(action.type === 'INC') {
        return {
            counter: state.counter + 1
        }
    }
    if(action.type === 'DEC') {
        return {
            counter: state.counter - 1
        }
    }
    if(action.type === 'ADD_NUMBER'){
        return {
            counter: state.counter + action.value
        }
    }

    return state

}

//Store
const store = redux.createStore(reducer)
//console.log(store.getState());
store.subscribe(() => { // ПОДПИСАЛИСЬ НА ИЗМЕНЕНИЕ СТОРА
    console.log('subscribe', store.getState());
})

//Actions
const incCounter = {
    type: 'INC'
}
const decCounter = {
    type: 'DEC'
}

store.dispatch(incCounter)
//console.log('INC',store.getState());

store.dispatch(decCounter)
//console.log('DEC',store.getState());

store.dispatch({type: 'ADD_NUMBER', value: 10})
//console.log('ADD_NUMBER',store.getState());
