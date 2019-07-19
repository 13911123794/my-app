import {createStore,combineReducers,applyMiddleware} from 'redux'
import nav from './Nav/nav.reduice'
import user from './user/user.reducer'
import thunk from 'redux-thunk'
const reducers = combineReducers({nav,user})

const store = createStore(reducers,applyMiddleware(thunk))

export default store