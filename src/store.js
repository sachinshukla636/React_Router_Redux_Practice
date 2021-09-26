import { createStore } from "redux";
import rootReducer from "./reduxHandler/reducer";

export default function configureStore(preloadedState){
    const store = createStore(
        rootReducer,
        preloadedState
    );
    return store;
}