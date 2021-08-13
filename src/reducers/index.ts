import { combineReducers } from "redux"
//reducers
import {questionReducer} from './questionReducer'


const reducers = combineReducers({
    question: questionReducer
})

export default reducers

export type State = ReturnType<typeof reducers>