import React from 'react'
import {connect} from 'react-redux'
import { inc, dec, incNumber, decNumber, randomNumber, asyncAdd } from '../redux/actions/counter/counterAction'

class Counter extends React.Component {
    
    render() {
        return (
            <div>
                <h1>Counter{this.props.counter}</h1>
                <button onClick={this.props.onInc}>+</button>
                <button onClick={this.props.incNumber}>+10</button>
                <button onClick={this.props.decNumber}>-10</button>
                <button onClick={this.props.onDec}>-</button>
                <button onClick={() => this.props.randomNumber(Math.random(10) * 100)}>Random</button>
                <hr/>
                <button onClick={() => this.props.onAsyncAdd(100)}>async 100</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counterReducer.counter
    } 
}
const mapDispatchToProps = (dispatch) => {
    return {
        onInc : () => dispatch(inc()),
        onDec : () => dispatch(dec()),
        incNumber: () => dispatch(incNumber(10)),
        decNumber: () => dispatch(decNumber(10)),
        randomNumber: (value) => dispatch(randomNumber(value)),
        onAsyncAdd: (number) => dispatch(asyncAdd(number)) 
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Counter)