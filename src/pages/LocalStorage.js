import React, {Component} from 'react';

class LocalStorage extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            pwd:''
        }
    }
    handle = ()=>{
        localStorage.setItem('Name',this.state.name);
        localStorage.setItem('Password',this.state.pwd);
    }
    remove = ()=>{
        localStorage.removeItem('Name');
        localStorage.removeItem('Password');
    }
    render(){
        return(
            <div>
                <h1>Name of the User :</h1>
                <input 
                    placeholder="Name"
                    value={this.state.name}
                    onChange={(e)=>this.setState({name : e.target.value})}
                />
                <h1>Password of the user:</h1>
                <input 
                    type="password"
                    placeholder="Password"
                    value={this.state.pwd}
                    onChange={(e)=>this.setState({pwd : e.target.value})}
                />
                <div>
                    <button onClick={()=>this.handle()}>Done</button>
                </div>
                {localStorage.getItem('Name') && (
                    <div>
                        Name:<p>{localStorage.getItem('Name')}</p>
                    </div>
                )}
                {localStorage.getItem('Password') && (
                    <div>
                        Password:<p>{localStorage.getItem('Password')}</p>
                    </div>
                )}
                <div>
                    <button onClick={()=>this.remove()}>Remove</button>
                </div>
            </div>
        )
    }
}
export default LocalStorage;