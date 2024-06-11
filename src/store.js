import {createStore, applyMiddleware} from 'redux'
import rootReducer from "./reducers/index";
import ReduxThunk from "redux-thunk"

//injecting redux thunk
const store = createStore(
    rootReducer,
    applyMiddleware(ReduxThunk));

export default store;