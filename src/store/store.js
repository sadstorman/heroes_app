import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { authReducer } from '../reducer/authReducer';
import { uiReducer } from '../reducer/uiReducer';

//Create reducers acepta sola una funcion, por lo que me creo un OBJETO que COMBINA los reducers,
//entonces si quiero agregar mas reducers, simplemente los agrego al objeto
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer
})


export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)
