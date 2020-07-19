import React from 'react'
import {JediContext} from '../components/context/context.js'

const Display = () => {
    
    const value = React.useContext(JediContext)
    console.log(value);
  
    return(
        <div>{value && 'REACT CONTEXT'}</div>
    )
}
export default Display