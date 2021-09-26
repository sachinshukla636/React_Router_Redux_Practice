import React from "react";
import { connect } from 'react-redux';
import { decrement, increment } from '../reduxHandler/action/counter';
function Home(props){
  return(
      <div>
        <h2>Redux Demo</h2>
        <p>Counter: {props.count}</p>
            <div style={{ marginTop: 50, alignItems: 'center' }}>
                <button onClick={() => props.increment(props.count + 1)} style={{ backgroundColor: 'red' }}>Click Increment</button>
                <button onClick={() => props.increment(props.count - 1)} style={{ backgroundColor: 'yellow' }}>Click Decremenet</button>
            </div>
      </div>
  )
}

const mapStateToProps = ({ counter }) => {
    return {
        count: counter.count,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: (data) => dispatch(increment(data)),
        decrement: (data) => dispatch(decrement(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
