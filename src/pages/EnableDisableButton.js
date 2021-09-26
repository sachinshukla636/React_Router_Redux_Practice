import React,{Component} from 'react';

class EnableDisableButton extends Component{
    constructor(){
        super();
        this.state = {
            disabled : true
        }
    }
    handleChange = (e) => {
        if(e.target.value.length >=6){
            this.setState({
                disabled:false
            });
        }
        else{
            this.setState({
                disabled:true
            });     
        }
    }
    render(){
        return(
            <div>
                {/* <form> */}
                    <input type="text" placeholder="User Id" onChange={this.handleChange}/>
                    <br />
                    <button disabled={this.state.disabled}>PROCEED</button>
                {/* </form> */}
            </div>
        )
    }
}
export default EnableDisableButton;