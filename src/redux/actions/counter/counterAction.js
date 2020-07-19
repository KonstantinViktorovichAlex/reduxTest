import {INC, DEC, INC_NUMBER, DEC_NUMBER, RANDOM_NUMBER} from '../actionTypes'

export function inc() {
    return {
        type: INC
    }
}
export function dec() {
    return {
        type: DEC
    }
}
export function incNumber(value) {
    return {
        type: INC_NUMBER,
        payload: value
    }
}
export function decNumber(value) {
    return {
        type: DEC_NUMBER,
        payload: value
    }
}
export function randomNumber(value) {
    return {
        type: RANDOM_NUMBER,
        payload: value
    }
}
export function asyncAdd(number) {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(incNumber(number))
        }, 3000)
    }
}