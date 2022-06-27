import {combineReducers} from 'redux'
import { todoReducer } from './Todo/todoReducer'
import { userReducer } from './User/userReducer'

export const indexReducer = combineReducers({
    user: userReducer,
    // todo: todoReducer,
    // 
})

