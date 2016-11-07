import { combineReducers } from 'redux'

import homepageReducer from './homepage'
import authReducer from './auth'
import singleCastle from './singleCastle'
import {categoryReducer} from './category'
import {searchReducer} from './searchbar'
import checkoutReducer from './checkout';




//to combine reducers:

const rootReducer = combineReducers({
    allCastles: homepageReducer,
    oneCastle: singleCastle,
    user: authReducer,
    category: categoryReducer,
    search: searchReducer,
    checkout: checkoutReducer
})

export default rootReducer
