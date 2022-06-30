import React from 'react'
import { connect } from 'react-redux';

function Counter(props) {
  let {count, increase, decrease} = props
  return (
    <div>
        <div className="alert alert-info">  
        <button className="btn mx-3" onClick={increase} >+</button>
        <span>{count}</span>
        <button className="btn mx-3" onClick={decrease}>-</button>
      </div>
    </div>
  )
}

let mapStateToProps = (state)=>{
  return{
    count: state.counter.count
  }
}

let mapDispatchToProps = (dispatch)=>{
  return{
    increase: ()=> dispatch({type:"INCREASE"}),
    decrease: ()=> dispatch({type:"DECREASE"})
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
