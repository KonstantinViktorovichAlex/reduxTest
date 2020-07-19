import { INC, DEC, INC_NUMBER, DEC_NUMBER, RANDOM_NUMBER } from "../../actions/actionTypes"

const initialState = {
    counter: 0
}
export default function Counter(state = initialState, action) {

    switch (action.type) {
        case INC :
            return {
                counter: state.counter + 1
            }
        case DEC :
            return {
                counter: state.counter -1
            }
        case INC_NUMBER : 
            return {
                counter : state.counter + action.payload
            }
        case DEC_NUMBER : 
            return {
                counter : state.counter - action.payload
            }
        case RANDOM_NUMBER :
            return {
                counter : state.counter = action.payload
            }
        default:
            return state
    } 
}