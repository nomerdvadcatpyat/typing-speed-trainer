import {createStore, compose} from "redux";
import {rootReducer} from "./reducers/rootReducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
	rootReducer,
	composeEnhancers() // внутрь кидать applyMiddleware когда понадобятся
);
