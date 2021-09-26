import { INCREMENT_COUNTER,DECREMENT_COUNTER } from "../ActionType";

const initialState = {
    count : 40,
}

export default function counter(state=initialState,data){
    switch(data.type){
        case INCREMENT_COUNTER:
            return {...state,count:data.payload}
        case DECREMENT_COUNTER:
            return {...state,count:data.payload}
        default:
            return state;
    }
}