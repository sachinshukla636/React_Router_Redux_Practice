import React,{Component} from 'react';

class AsyncAwaitExp extends Component{
    callAsyncAwait = async() => {
        return new Promise((resolve,reject) =>{
            //fetch api response
            fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => {
                resolve(json);
            }).catch((error) =>{
                reject(error)
            })
        })
    }
    handlePropmiseCall = async()=>{
        try {
            let response = await this.callAsyncAwait();
            console.log('===response===',response);
        } catch (error) {
            console.log("===error===",error);
        }
    }
    render(){
        return(
            <div>
                JAVASCRIPT DEMO
                <button onClick={()=> this.handlePropmiseCall()} style={{backgroundColor:'green'}}>Test</button>
            </div>
        )
    }
}
export default AsyncAwaitExp;