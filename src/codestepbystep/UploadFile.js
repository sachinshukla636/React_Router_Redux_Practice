import React,{Component} from "react";

class UploadFile extends Component{
    upload(e){
        console.log(e.target.files)
        // const files = e.target.files
        // const formData = new FormData();
        // formData.append('img',files[0]);
        // fetch('http://127.0.0.1:8000/api/store',{
        //     method:"POST",
        //     body:formData
        // }).then((resp)=>{
        //     resp.json().then((result)=>{
        //         console.log("result",result)
        //     })
        // })
    }
    render(){
        return(
            <div>
                <h1>Upload File in React js</h1>
                <input type="file" onChange={(e)=> this.upload(e)} name="img"/>
            </div>
        )
    }
}
export default UploadFile;