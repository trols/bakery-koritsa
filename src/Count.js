import React from "react";
import{Component} from "react";
export class Count extends Component{
    state={
            counts: 0,
        }
    
updateCount(){ 
    this.setState({counts:this.state.counts + 1})
}



render(){
    return(
        <div className="sum">
           <p className="counter">{this.state.counts}</p>
            <button className="plus" onClick={()=>this.updateCount()}>+</button>
        </div>
    )
}
}
export default Count;