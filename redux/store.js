import {createStore ,combineReducers, applyMiddleware} from 'redux'
import {uiReducer,carModelReducer,userReducer,platesReducer,fireBaseDataReducer,tempPlateReducer} from './reducers'
import thunk from 'redux-thunk'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
  fireBaseData: fireBaseDataReducer,
  user:userReducer,
  ui:uiReducer,
});

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, {} , applyMiddleware(thunk));
export const persistor = persistStore(store);
export  default store