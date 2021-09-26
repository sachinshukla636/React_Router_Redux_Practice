import React from "react";
import { Redirect } from "react-router";
function Category(props){
    return(
        <div>
            <h2>Category Page</h2>
            <button onClick={()=>{
                props.history.push("/")
            }}>
                Go To Home
            </button>
        </div>
    )
}
export default Category;