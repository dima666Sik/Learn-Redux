import { combineReducers, createStore, applyMiddleware } from "redux";
import { scoreReducer } from "./scoreReducer";
import { userReducer } from "./userReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
	score: scoreReducer,
	users: userReducer,
});

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);
