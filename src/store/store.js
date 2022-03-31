import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import { ImageReducer } from "./reducers/ReducerImage";

const middleWare = applyMiddleware(thunk, logger);

const rootReducer = combineReducers({
    DataImage: ImageReducer,
  });

export const store = createStore(rootReducer, middleWare)