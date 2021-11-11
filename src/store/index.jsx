import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import Thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";

import weatherReducer from "./weather/weather.slice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  weather: weatherReducer,
});

const reactotron = require("../config/reactotron").default;
const reactotronMiddleware = reactotron.createEnhancer();
let persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  compose(applyMiddleware(Thunk), reactotronMiddleware)
);

const persistor = persistStore(store);

export { store, persistor };
