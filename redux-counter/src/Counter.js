import React from "react";
import {connect} from 'react-redux'
import { Button } from 'react-bootstrap';

class Counter extends React.Component{
    state = {count:0}

    increment = ()=>{
        this.props.dispatch({type: 'INCREMENT'})
    }
    decrement = ()=>{
        this.props.dispatch({type: 'DECREMENT'})
    }
    reset = ()=>{
        this.props.dispatch({type: 'RESET'})
    }

    render(){
        return(
            <div>
                <h2>Counter</h2>
                <div className="bg-info">
                    <span className="m-3">{this.props.count}</span>
                    <Button className="bg-white text-black m-3" onClick={this.decrement}>-</Button>
                    <Button className="bg-white text-black" onClick={this.increment}>+</Button>
                    <Button className="bg-white text-black m-3" onClick={this.reset}>reset</Button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        count: state.count
    }
}
export default connect(mapStateToProps)(Counter);