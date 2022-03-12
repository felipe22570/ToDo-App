import { combineReducers, createStore } from "redux";

import { modoReducer } from "../reducers/modoReducer";
import { tareaReducer } from "../reducers/tareaReducer";

const reducers = combineReducers({
   tareas: tareaReducer,
   tema: modoReducer,
});

export const store = createStore(
   reducers,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
