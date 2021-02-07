import {createStore, compose, applyMiddleware} from "redux";
import {rootReducer} from "./reducers/rootReducer";
import thunk from "redux-thunk";
import createSagaMiddleWare from 'redux-saga';
import {rootSaga} from "./saga/rootSaga";

const sagaMiddleware = createSagaMiddleWare();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
	rootReducer,
	composeEnhancers(
		applyMiddleware(thunk, sagaMiddleware)
	)
);


sagaMiddleware.run(rootSaga);