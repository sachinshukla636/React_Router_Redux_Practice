import { INCREMENT_COUNTER,DECREMENT_COUNTER } from "../ActionType";

export const increment = (payload) =>{
    return{type:INCREMENT_COUNTER,payload:payload}
}

export const decrement = (payload) =>{
    return {type:DECREMENT_COUNTER,payload:payload}
}