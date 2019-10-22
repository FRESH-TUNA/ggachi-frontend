import { createStore, combineReducers, applyMiddleware } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import authReducer  from './authStore/authReducer'
import newLetterReducer  from './newLetterStore/newLetterReducer'
export const store = () => {
    return createStore(combineReducers({
        authReducer,
        newLetterReducer
    }), applyMiddleware(thunkMiddleware))
}
