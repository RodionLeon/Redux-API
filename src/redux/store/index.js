import {applyMiddleware, combineReducers, createStore} from "redux"
import {userReducer} from './user/reducer';
import {albumReducer} from "./album/reducer";
import {photosReducer} from "./photo/reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    users: userReducer,
    albums: albumReducer,
    photos: photosReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));